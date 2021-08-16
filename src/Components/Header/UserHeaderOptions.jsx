import React from "react";
import "./header.scss";
import "../../Globals/Sass/Elements/Button/button.scss";
import { Link } from "react-router-dom";

export default function UserHeaderOptions(props) {
  return (
    <>
      <div>
        <Link to="/login">
          <button className="btn btn--secondary-border">Login</button>
        </Link>
        <Link to="/signUp">
          <button
            style={{ marginLeft: "0.4rem" }}
            className="btn btn--secondary"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </>
  );
}
