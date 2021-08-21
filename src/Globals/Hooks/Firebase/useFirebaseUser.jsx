import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Firebase from "../../../Lib/Firebase/FirebaseConfig";

// useRealtime - get realtime data from firebase collections
export default function UseFirebaseUser(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unSubscribeUser = Firebase.auth().onAuthStateChanged((user) => {
      // if user exists , route to their surveys page
      setLoading(true);
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unSubscribeUser();
    };
  }, []);
  return { user, loading };
}
