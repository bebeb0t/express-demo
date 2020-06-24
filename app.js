const express = require("express");
const app = express();

app.get("/", (req, res) => res.send({ message: "hello", meta: { hoge: "hello", foo: "world" } }));
app.listen(3000, () => console.log("example app listening on port 3000"));
