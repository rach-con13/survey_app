import React, { useState } from "react";
import { createContext } from "react";

export const SurveyContext = createContext();

export default function SurveyProvider({ children }) {
  const [surveyResults, setResults] = useState(null);
  return (
    <SurveyContext.Provider value={{ surveyResults, setResults }}>
      {children}
    </SurveyContext.Provider>
  );
}
