import { db } from "../FirebaseConfig";

export const getSurveys = async () => {
  try {
    const surveys = await db.collection("survey").get();
    return surveys;
  } catch (err) {
    return err;
  }
};
export const getSurvey = async (doc) => {
  try {
    const surveyRef = db.collection("survey");
    const survey = await surveyRef.doc(doc).get();

    return survey;
  } catch (err) {
    return err;
  }
};

export const createSurvey = async (name) => {
  try {
    const newSurvey = await db.collection("survey").add({
      name: name,
    });
    return newSurvey;
  } catch (err) {
    return err;
  }
};
export const updateSurvey = async (id, name) => {
  try {
    const updatedSurvey = db.collection("survey").doc(id).update({ name });
    return updatedSurvey;
  } catch (err) {
    return err;
  }
};
