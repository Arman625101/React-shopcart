import express from "express";
import { auth } from "../api";

const router = express.Router();

router.post("/signup", auth.createUser);

router.get("/profile/:id", (req, res) =>
  auth.getUserById(req.params.id).then((user) => res.send(user))
);

module.exports = router;
