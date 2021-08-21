import { db } from "../FirebaseConfig";

export const getResults = async (collection) => {
  try {
    const results = await db.collection(collection).get();
    return results;
  } catch (err) {
    return err;
  }
};
export const getResult = async (collection, doc) => {
  try {
    const resultRef = db.collection(collection);
    const result = await resultRef.doc(doc).get();

    return result;
  } catch (err) {
    return err;
  }
};

export const createResult = async (collection, values) => {
  try {
    const newResult = await db.collection(collection).add(values);
    return newResult;
  } catch (err) {
    return err;
  }
};
export const updateResult = async (collection, id, values) => {
  try {
    const updatedResult = await db
      .collection(collection)
      .doc(id)
      .update(values);

    return updatedResult;
  } catch (err) {
    return err;
  }
};
