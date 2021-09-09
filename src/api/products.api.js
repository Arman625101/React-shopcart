import { Firebase } from "../firebase";
import axios from "axios";

const url = "http://localhost:4010";

export const getProducts = () =>
  axios.get(`${url}/products`).then((res) => res.data);

export const getProductById = (id) =>
  axios.get(`${url}/products/${id}`).then((res) => res.data);

export const getUserProducts = (data) =>
  axios.post(`${url}/myproducts`, data).then((res) => res.data);
