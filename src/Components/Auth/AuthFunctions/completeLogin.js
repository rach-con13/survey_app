import { loginUser } from "../../../Lib/Firebase/FirebaseFunctions/UserFunctions";

export const completeLogin = async ({ email, password }, setMessage) => {
  try {
    let loggedInUser = await loginUser(email, password);
    if (loggedInUser?.user) {
      setMessage("Login Successful");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
