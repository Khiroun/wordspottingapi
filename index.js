const app = require("express")();
const PORT = process.env.PORT || 5000;

app.get("/ws", (req, res) => {
  res.status(200).send({
    h: 2,
  });
});

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
