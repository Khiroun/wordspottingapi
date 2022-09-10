const app = require("express")();
const multer = require("multer");

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
});

const upload = multer({ storage: storage });
const PORT = process.env.PORT || 5000;
app.get("/ws", (req, res) => {
  res.status(200).send({
    h: 2,
  });
});
app.post("/ws", upload.single("word-image"), (req, res) => {
  const file = req.file;

  res.send({
    name: file?.originalname,
  });
});

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
