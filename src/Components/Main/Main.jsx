import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import UseFirebaseUser from "src/Globals/Hooks/Firebase/useFirebaseUser";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Header from "../Header/Header";
import SurveyContent from "../Survey/SurveyContent/surveyContent";
import SurveyResponse from "../Survey/SurveyResponses/surveyResponse";
import SurveyCards from "../SurveyCard/SurveyCards";
import Surveys from "../Surveys/Surveys";

export default function Main() {
  const history = useHistory();
  const { user } = UseFirebaseUser();
  const [userID, setUserID] = useState(null);
  useEffect(() => {
    const isLoggedIn = async () => {
      const userStatus = await user;
      userStatus && setUserID(userStatus.uid);
    };
    isLoggedIn();
  });
  // useEffect(() => {
  //   console.log(user);
  //   if (user) {
  //     history.push(`/surveys/${user.uid}`);
  //   }
  // }, [user]);
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return userID && <Redirect to={`/surveys/${userID}`} />;
            }}
          ></Route>
          <Route path="/responses/:id">
            <>
              <SurveyContent>
                <SurveyResponse />
              </SurveyContent>
            </>
          </Route>
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route exact path="/surveys/:id" component={Surveys} />
          <Route path="/survey/:id">
            <>
              <SurveyContent>
                <SurveyCards />
              </SurveyContent>
            </>
          </Route>
        </Switch>
      </div>
    </>
  );
}
