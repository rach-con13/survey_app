import React from "react";
import { Route, useLocation } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import SurveyCard from "src/Components/SurveyCard/SurveyCard";
import SurveyHeader from "../SurveyHeader/SurveyHeader";
import SurveyPublishCard from "../SurveyPublish/surveyPublishCard";
import SurveyResponse from "../SurveyResponses/surveyResponse";

export default function SurveyContent(props) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isEditable = pathname.split("/")[3] === "edit" ? true : false;

  return (
    <>
      <SurveyPublishCard open={open} setOpen={setOpen} />
      {isEditable && <SurveyHeader onClick={() => setOpen(true)} />}
      {props.children}
    </>
  );
}
