import db, { fieldPath } from "../db/firebase";

export const fetchProducts = () =>
  db
    .collection("products")
    .get()
    .then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return products;
    });

export const fetchProductById = (id) =>
  db
    .collection("products")
    .doc(id)
    .get()
    .then((snapshot) => snapshot.data());

export const fetchUserById = (id) =>
  db
    .collection("profile")
    .doc(id)
    .get()
    .then((snapshot) => snapshot.data());

export const fetchUserProducts = (id) => {
  console.log(id);
  db.collection("products")
    .where(fieldPath("seller", "id"), "==", id)
    .get()
    .then((snapshot) => snapshot.data());
};
