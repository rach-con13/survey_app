import React, { useState } from "react";
import "./header.scss";
import "../../Globals/Sass/Elements/Button/button.scss";
import { getSignedInUser } from "../../Lib/Firebase/FirebaseFunctions/UserFunctions";
import Firebase from "../../Lib/Firebase/FirebaseConfig";
import { useEffect } from "react";
import UserHeaderOptions from "./UserHeaderOptions";

export default function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const loggedIn = async () => {
    try {
      const currentUser = Firebase.auth().onAuthStateChanged();
      setLoggedIn(currentUser);
    } catch (err) {
      return err;
    }
  };

  return (
    <header className="header">
      <div className="headerContent">
        <h4 className="headerTitle">Survey Donkey</h4>
        {isLoggedIn ? (
          <div className="headerOptions">
            <button className="btn btn--secondary">Share</button>
          </div>
        ) : (
          <UserHeaderOptions />
        )}
      </div>
    </header>
  );
}
