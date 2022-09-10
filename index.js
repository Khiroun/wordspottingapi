const app = require("express")();
const PORT = 8080;

app.get("/ws", (req, res) => {
  res.status(200).send({
    h: 2,
  });
});

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
