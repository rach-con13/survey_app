import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Firebase from "../../../Lib/Firebase/FirebaseConfig";

// useRealtime - get realtime data from firebase collections
export default function UseFirebaseUser(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let unSubscribeUser = Firebase.auth().onAuthStateChanged((user) => {
      // if user exists , route to their surveys page
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      unSubscribeUser();
    };
  }, []);
  return { user };
}
