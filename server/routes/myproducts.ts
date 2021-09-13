import { Request, Response } from "express";
import { Product } from "../types/global.types";

import express from "express";
import { myProducts } from "../api";
import ifAuthenticated from "../middlewares/auth-middleware";

const router = express.Router();

router.get("/", ifAuthenticated, myProducts.getProducts);

router.get("/:id", ifAuthenticated, myProducts.getProductById);

router.post("/create", ifAuthenticated, (req: Request, res: Response) => {
  myProducts
    .createNewProduct(req.body)
    .then((data) =>
      myProducts
        .addProductIdToUser(req.body.sellerID, data.id)
        .then((data) => res.send(data))
    );
});

router.delete("/delete", ifAuthenticated, (req: Request, res) => {
  myProducts
    .deleteProduct(req.body.id)
    .then(() =>
      myProducts.deleteProductIdfromUser(req.body.userId, req.body.id)
    )
    .then((data) => res.send(data));
});

module.exports = router;
