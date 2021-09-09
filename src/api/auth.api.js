import { Firebase } from "../firebase";
import axios from "axios";
const url = "http://localhost:4010";

export const getUserById = (id) =>
  axios.get(`${url}/auth/profile/${id}`).then((res) => res.data);

export const signup = (data) =>
  axios
    .post(`${url}/auth/signup`, data)
    .then((res) => login(data.email, data.password));

export const login = (email, password) =>
  Firebase.auth.signInWithEmailAndPassword(email, password);

export const logout = async () => Firebase.auth.signOut();
