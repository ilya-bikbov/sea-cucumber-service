const http = require("http");
const initApp = require("./app");
const port = process.env.PORT || 3000;
const server = http.createServer(initApp());
server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
