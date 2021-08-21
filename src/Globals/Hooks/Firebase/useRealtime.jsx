import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../../Lib/Firebase/FirebaseConfig";
import UseFirebaseUser from "./useFirebaseUser";

export default function UseRealTime(collection, filter) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let unsubscribe;

    const getRealtimeSurveys = () => {
      unsubscribe = db
        .collection(collection)
        .where(filter.field, "==", filter.equalTo)
        .onSnapshot((snapshot) => {
          setResults(snapshot.docs);
        });
    };
    getRealtimeSurveys();
    return () => {
      unsubscribe();
    };
  }, []);
  return results;
}
