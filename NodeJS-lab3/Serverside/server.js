//Imports
const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");

let clientsArray = [];

app.use(express.urlencoded({ extended: true }));

function concatURL(urPath) {
  return path.join(__dirname, urPath);
}
let PORT = process.env.PORT || "7003";

app.get("/", (req, res) => {
  res.sendFile(concatURL("../Clientside/index.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(concatURL("../Clientside/style.css"));
});
app.get("/bootstrap.min.css", (req, res) => {
  res.sendFile(concatURL("../Clientside/bootstrap.min.css"));
});
app.get("/Serverside/clients.json", (req, res) => {
  res.sendFile(concatURL("./clients.json"));
});
app.get("/welcome.html", (req, res) => {
  res.sendFile(concatURL("../Clientside/welcome.html"));
});

app.post(
  "/welcome.html",
  (req, res, next) => {
    client = req.body;
    data = fs.readFileSync("clients.json", "utf-8");
    obj = JSON.parse(data);
    // console.log(obj);
    obj.forEach((arr) => {
      clientsArray.push(arr);
    });
    clientsArray.push(client);
    console.log("=========", clientsArray);
    next();
  },
  (req, res, next) => {
    jsonString = JSON.stringify(clientsArray);

    // console.log(jsonString);
    fs.writeFileSync("./clients.json", jsonString);
    next();
  },
  (req, res) => {
    res.sendFile(concatURL("../Clientside/welcome.html"));
  }
);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
