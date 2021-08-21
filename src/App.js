import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import SurveyProvider from "./Globals/Context/SurveyContext";

import Main from "./Components/Main/Main";

function App() {
  return (
    <Router>
      <SurveyProvider>
        <Main />
      </SurveyProvider>
    </Router>
  );
}

export default App;
