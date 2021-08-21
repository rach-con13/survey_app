import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import SurveyHeader from "../SurveyHeader/SurveyHeader";
import SurveyPublishCard from "../SurveyPublish/surveyPublishCard";
import PropTypes from "prop-types";
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
SurveyContent.propTypes = {
  children: PropTypes.node,
};
