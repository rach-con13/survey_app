import React, { useState, useEffect } from "react";
import Firebase from "../../../Lib/Firebase/FirebaseConfig";

// useRealtime - get realtime data from firebase collections
export default function UseFirebaseUser(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let unSubscribeUser = Firebase.auth().onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => {
      unSubscribeUser();
    };
  }, []);
  return { user };
}
