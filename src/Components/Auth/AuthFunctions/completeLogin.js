import { loginUser } from "../../../Lib/Firebase/FirebaseFunctions/UserFunctions";

export const completeLogin = async (
  history,
  { email, password },
  setMessage
) => {
  try {
    let loggedInUser = await loginUser(email, password);
    if (loggedInUser?.user) {
      setMessage({ error: false, message: "Login Successful" });
      history.push(`/surveys/${loggedInUser.user.uid}`);
    }
  } catch (error) {
    console.log(error);

    setMessage({ error: true, message: error });
  }
};
