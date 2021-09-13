import express from "express";
import { products, auth } from "../api";
import { Product, Profile } from "../types/global.types";

const router = express.Router();

router.get("/", products.getProducts);

router.get("/:id", (req, res) =>
  products
    .getProductById(req.params.id)
    .then((data) => {
      auth.getUserById(data.sellerID).then((user) =>
        res.send({
          ...data,
          seller: {
            email: user.email,
            username: user.username,
            avatar: user.avatar,
          },
        })
      );
    })
    .catch((err: any) => res.send(err))
);

module.exports = router;
