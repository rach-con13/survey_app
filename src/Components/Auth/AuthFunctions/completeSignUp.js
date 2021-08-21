import { createUser } from "../../../Lib/Firebase/FirebaseFunctions/UserFunctions";

export const completeSignUp = async ({ email, password }, setMessage) => {
  try {
    let user = await createUser(email, password);
    if (user?.user) {
      setMessage("Successfully created Account");
    }
  } catch (err) {
    return err;
  }
};
