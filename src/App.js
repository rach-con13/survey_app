import "./App.css";
import Header from "./Components/Header/Header";
import SurveyCard from "./Components/Survey/SurveyCard/SurveyCard";
import SurveyCards from "./Components/Survey/SurveyCard/SurveyCards";

function App() {
  return (
    <div className="App">
      <Header />
      <SurveyCards />
    </div>
  );
}

export default App;
