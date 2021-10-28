const express = require("express");
const hbs = require("express-handlebars");

const routes = require("./routes");

const server = express();

// Middleware
server.engine(
  "hbs",
  hbs({
    extname: "hbs",
  })
);
server.set("view engine", "hbs");
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

// Routes
server.use("/", routes);

routes.get('/', function(req, res){
  res.send('hey') 
})

module.exports = server;
