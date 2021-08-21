import React from "react";
import { useFormContext } from "react-hook-form";
import { updateResult } from "src/Lib/Firebase/FirebaseFunctions/DataFunctions";
import CardHeader from "./CardHeader/CardHeader";
import styles from "src/Globals/Sass/Elements/Card/card.module.scss";
import useToggle from "src/Globals/Hooks/useToggle";
import { useLocation } from "react-router-dom";

export default function SurveyCard(props) {
  const method = useFormContext();
  const { toggle, open } = useToggle();
  const { pathname } = useLocation();
  const isEditable = pathname.split("/")[3] === "edit" ? true : false;

  const updateTitle = async () => {
    let title = method.getValues(`card-title-${props.index}`);

    let updatedQuestion = await updateResult("question", props.id, {
      title,
    });
  };

  return (
    <div className={styles.card}>
      <CardHeader
        open={open}
        toggle={toggle}
        onBlur={isEditable && updateTitle}
        {...props}
      />
      {open && (
        <>
          <div className={styles.card__content}>{props.children}</div>
        </>
      )}
    </div>
  );
}
