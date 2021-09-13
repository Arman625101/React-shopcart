import { Firebase } from "../firebase";
import { SignUpFormValues } from "../types/global";
import ax from "./axios";

export const getUserById = (id: string) =>
  ax.get(`/auth/profile/${id}`).then((res) => res.data);

export const signup = (data: SignUpFormValues) =>
  ax.post(`/auth/signup`, data).then((res) => login(data.email, data.password));

export const login = (email: string, password: string) =>
  Firebase.auth.signInWithEmailAndPassword(email, password);

export const logout = async () => Firebase.auth.signOut();
