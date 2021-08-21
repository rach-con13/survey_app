import React, { useState } from "react";
import "./header.scss";
import "src/Globals/Sass/Elements/Button/button.scss";
import Firebase from "src/Lib/Firebase/FirebaseConfig";
import { useEffect } from "react";
import UserHeaderOptions from "./UserHeaderOptions";
import UseFirebaseUser from "src/Globals/Hooks/Firebase/useFirebaseUser";

export default function Header() {
  const { user } = UseFirebaseUser();

  return (
    <header className="header">
      <div className="headerContent">
        <h4 className="text text--heading">Survey Donkey</h4>

        {user ? (
          <div className="headerOptions">
            <p
              className="text text--subHeading"
              style={{ marginRight: "0.8rem" }}
            >
              {user?.email}
            </p>
          </div>
        ) : (
          <UserHeaderOptions />
        )}
      </div>
    </header>
  );
}
