import React from "react";
import ResponseChart from "./responseChart";
import "./surveyResponse.scss";
export default function ResponseCard({ title, responseAmount }) {
  return (
    <div className="response__card">
      <header className="response__header">
        <h4 className="response__title">{title}</h4>
        <p className="response__num">{responseAmount} responses</p>
      </header>
      <ResponseChart />
    </div>
  );
}
