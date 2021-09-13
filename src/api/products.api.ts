import { Firebase } from "../firebase";
import { Product } from "../types/global";
import ax from "./axios";

export const getProducts = () => ax.get(`/products`).then((res) => res.data);

export const getProductById = (id: string) =>
  ax.get(`/products/${id}`).then((res) => res.data);

export const getUserProducts = async (data: string[]) => {
  const token = await Firebase.auth.currentUser?.getIdToken();
  return ax
    .get(`/myproducts`, {
      params: { data },
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
};

export const createNewProduct = async (data: Product) => {
  const token = await Firebase.auth.currentUser?.getIdToken();
  return ax
    .post("/myproducts/create", data, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => res);
};

export const deleteProduct = async (userId: string, id: string) => {
  const token = await Firebase.auth.currentUser?.getIdToken();
  return ax
    .delete("/myproducts/delete", {
      data: { userId, id },
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => res);
};
