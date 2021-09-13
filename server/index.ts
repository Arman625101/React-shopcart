const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
// Routes
const products = require("./routes/products");
const auth = require("./routes/auth");
const myproducts = require("./routes/myproducts");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", auth);
app.use("/products", products);
app.use("/myproducts", myproducts);

app.listen(4010, () => {
  console.log("Server running on port 4010");
});
