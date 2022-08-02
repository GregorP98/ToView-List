const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3001;
const router = require("./router");
const { connectToDB } = require("./models/index");
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

(async () => {
  try {
    connectToDB();
    app.listen(port, () => {
      console.log(`Express listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
