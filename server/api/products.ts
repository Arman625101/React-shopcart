import { Response, Request } from "express";
import Firebase from "../Firebase";

const getProducts = async (req: Request, res: Response) =>
  Firebase.firestore
    .collection("products")
    .get()
    .then((snapshot) => {
      res.send(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

const getProductById = (id: string) =>
  Firebase.firestore
    .collection("products")
    .doc(id)
    .get()
    .then((snapshot) => snapshot.data());

export { getProducts, getProductById };
