const http = require("http");
const initApp = require("./app");

const server = http.createServer(initApp());
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
