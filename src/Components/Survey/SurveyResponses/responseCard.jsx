import React, { useEffect } from "react";
import { useState } from "react";
import CardHeader from "src/Components/SurveyCard/CardHeader/CardHeader";
import { db } from "src/Lib/Firebase/FirebaseConfig";
import styles from "./surveyResponse.module.scss";
import card from "src/Globals/Sass/Elements/Card/card.module.scss";
import useToggle from "src/Globals/Hooks/useToggle";
import "src/Globals/Sass/Elements/Text/text.scss";
import PropTypes from "prop-types";
export default function ResponseCard(props) {
  const [answers, setAnswers] = useState([]);
  const { toggle, open } = useToggle();

  useEffect(() => {
    let unsubscribe;

    const getAnswers = () => {
      unsubscribe = db
        .collection("question")
        .doc(props.id)
        .collection("answers")
        .onSnapshot((snapshot) => {
          setAnswers(snapshot.docs);
        });
    };

    getAnswers();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={card.card}>
      <CardHeader open={open} toggle={toggle} {...props} />

      {open && (
        <div className={styles.answers}>
          {answers?.map((answer) => {
            let data = answer.data();
            if (data?.result?.answer !== null) {
              return (
                <div key={answer.id} className={styles.answer__card}>
                  <p className="text--body"> {data.result?.answer}</p>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
ResponseCard.propTypes = {
  id: PropTypes.string,
};
