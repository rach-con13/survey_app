import "./App.css";
import Header from "./Components/Header/Header";
import SurveyCard from "./Components/Survey/SurveyCard/SurveyCard";
import SurveyCards from "./Components/Survey/SurveyCard/SurveyCards";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SurveyResponse from "./Components/Survey/SurveyResponses/surveyResponse";
import SurveyProvider from "./Globals/Context/SurveyContext";
function App() {
  return (
    <Router>
      <SurveyProvider>
        <div className="App">
          <Header />
          <Route exact path="/" component={SurveyCards} />
          <Route path="/response" component={SurveyResponse} />
        </div>
      </SurveyProvider>
    </Router>
  );
}

export default App;
