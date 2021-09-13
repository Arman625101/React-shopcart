import { Request, Response } from "express";
import Firebase from "../Firebase";

const getUserById = (id: string) =>
  Firebase.firestore
    .collection("profile")
    .doc(id)
    .get()
    .then((snapshot) => snapshot.data());

const getMyProfile = async (req: Request, res: Response) =>
  Firebase.firestore
    .collection("profile")
    .doc(req.params.id)
    .get()
    .then((snapshot) => res.send(snapshot.data()));

const createUser = async (req: Request, res: Response) => {
  const { email, password, username, avatar } = req.body;

  await Firebase.auth
    .createUser({
      email,
      password,
    })
    .then(async (user) => {
      const profile = { username, email, avatar };
      try {
        await Firebase.firestore
          .collection("profile")
          .doc(user.uid)
          .set(profile);
        return res.send(profile);
      } catch (err) {
        console.log(err);
      }
    });
};

export { getUserById, createUser, getMyProfile };
