import Firebase from "../FirebaseConfig";
export const createUser = async (email, password) => {
  try {
    const response = await Firebase.auth().createUserWithEmailAndPassword(
      email,
      password
    );
    return response;
  } catch (err) {
    return { error: true, message: err.message };
  }
};

export const signOutUser = async () => {
  try {
    const response = await Firebase.auth().signOut();
    return response;
  } catch (err) {
    return err;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await Firebase.auth().signInWithEmailAndPassword(
      email,
      password
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getSignedInUser = async () => {
  try {
    const currentUser = Firebase.auth().onAuthStateChanged();
    console.log(currentUser);
    return await currentUser;
  } catch (err) {
    return err;
  }
};
