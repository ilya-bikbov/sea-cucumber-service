const express = require("express");
//const app = express();
const initApp = require("../app");
const app = initApp();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3005, () => console.log("Server ready on port 3000."));

module.exports = app;