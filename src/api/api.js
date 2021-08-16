import db from "../db/firebase";

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