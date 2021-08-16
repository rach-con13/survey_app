import "./App.css";
import Header from "./Components/Header/Header";
import SurveyCards from "./Components/Survey/SurveyCard/SurveyCards";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SurveyResponse from "./Components/Survey/SurveyResponses/surveyResponse";
import SurveyProvider from "./Globals/Context/SurveyContext";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import Surveys from "./Components/Surveys/Surveys";

function App() {
  return (
    <Router>
      <SurveyProvider>
        <div className="App">
          <Header />
          <Route exact path="/survey/:id" component={SurveyCards} />
          <Route path="/response" component={SurveyResponse} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/surveys" component={Surveys} />
        </div>
      </SurveyProvider>
    </Router>
  );
}

export default App;
