import React, { useState } from "react";
import "./header.scss";
import "../../Globals/Sass/Elements/Button/button.scss";
import { getSignedInUser } from "../../Lib/Firebase/FirebaseFunctions/UserFunctions";
import Firebase from "../../Lib/Firebase/FirebaseConfig";
import { useEffect } from "react";
import UserHeaderOptions from "./UserHeaderOptions";

export default function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedIn = async () => {
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setEmail(user.email);
          setLoggedIn(true);
        } else {
          setEmail("");
          setLoggedIn(false);
        }
      });
      // try {
      //   const currentUser = await Firebase.auth().onAuthStateChanged();
      //   currentUser ? setLoggedIn(true) : setLoggedIn(false);
      //   console.log(currentUser);
      // } catch (err) {
      //   console.log(err);
      //   return err;
      // }
    };
    loggedIn();
  }, []);

  return (
    <header className="header">
      <div className="headerContent">
        <h4 className="headerTitle">Survey Donkey</h4>

        {isLoggedIn ? (
          <div className="headerOptions">
            <p style={{ marginRight: "0.8rem" }}>{email}</p>
            <button className="btn btn--secondary">Share</button>
          </div>
        ) : (
          <UserHeaderOptions />
        )}
      </div>
    </header>
  );
}
