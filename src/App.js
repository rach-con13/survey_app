import "./App.css";
import Header from "./Components/Header/Header";
import SurveyCards from "./Components/Survey/SurveyCard/SurveyCards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/responses/:id" component={SurveyResponse} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route exact path="/surveys/:id" component={Surveys} />
            <Route exact path="/survey/:id" component={SurveyCards} />
          </Switch>
        </div>
      </SurveyProvider>
    </Router>
  );
}

export default App;
