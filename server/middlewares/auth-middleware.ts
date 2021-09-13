import Firebase from "../Firebase";
import { NextFunction, Request, Response } from "express";

const getAuthToken = (req: Request, res: Response, next: NextFunction) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.params.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.params.authToken = null;
  }
  next();
};

const ifAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req.params;
      const userInfo = await Firebase.auth.verifyIdToken(authToken);
      // req.authId = userInfo.uid;
      return next();
    } catch (e) {
      return res
        .status(401)
        .send({ error: "You are not authorized to make this request" });
    }
  });
};

export default ifAuthenticated;
