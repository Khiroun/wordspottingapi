const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Point = require("./models/Point");
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.wgnafhh.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Database connected");
  }
);

app.get("/ws", async (req, res) => {
  let ratio = req.query.ratio;
  const distance = 0.1;
  if (!ratio)
    return res.json({
      error: "ratio not found",
    });
  ratio = parseFloat(ratio);
  data = await Point.find({
    ratio: {
      $gt: ratio - distance,
      $lt: ratio + distance,
    },
  })
    .limit(100)
    .exec();
  res.json(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
