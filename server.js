const bodyParser = require("body-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();
mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// homepage
app.get("/", async (req, res) => {
  res.json("here");
});
// let collection = [];
// app.post("/collection", (req, res) => {
//   const data = req.body;
//   const updatedData = collection.push(data);
//   res.json(data);
//   res.status(201);
//   console.log(updatedData);
// });
// app.get("/collection", async (req, res) => {
//   res.json(collection);
// });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
