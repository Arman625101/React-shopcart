import { Request, Response } from "express";
import Firebase from "../Firebase";
import { Product } from "../types/global.types";

const getProducts = (req: Request, res: Response) => {
  Firebase.firestore
    .collection("products")
    .where(Firebase.fieldPath, "in", req.query.data)
    .get()
    .then((snapshot) =>
      res.send(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    );
};

const getProductById = (req: Request) =>
  Firebase.firestore
    .collection("products")
    .doc(req.params.id)
    .get()
    .then((snapshot) => snapshot.data());

const createNewProduct = (data: Product) =>
  Firebase.firestore
    .collection("products")
    .add(data)
    .then((res) => res);

const deleteProduct = (id: string) =>
  Firebase.firestore
    .collection("products")
    .doc(id)
    .delete()
    .then((res) => res);

const addProductIdToUser = (userId: string, productId: string) =>
  Firebase.firestore
    .collection("profile")
    .doc(userId)
    .update({ products: Firebase.fieldValue.arrayUnion(productId) })
    .then((res) => res);

const deleteProductIdfromUser = (userId: string, productId: string) =>
  Firebase.firestore
    .collection("profile")
    .doc(userId)
    .update({ products: Firebase.fieldValue.arrayRemove(productId) });

export {
  getProducts,
  getProductById,
  createNewProduct,
  deleteProduct,
  addProductIdToUser,
  deleteProductIdfromUser,
};
