//Imports
const http = require("http");
const fs = require("fs");
//files variables
let MainFileHTML = fs.readFileSync("../ClientSide/index.html").toString();
let welcomeFileHTML = fs.readFileSync("../ClientSide/welcome.html").toString();
let StyleCSS = fs.readFileSync("../ClientSide/style.css").toString();
let Bootstrap = fs.readFileSync("../ClientSide/bootstrap.min.css").toString();

let ScriptFile = fs.readFileSync("../ClientSide/script.js").toString();
let myIcon = fs.readFileSync("../ClientSide/favicon.ico");
let clientsJSON = fs.readFileSync("clients.json").toString();
console.log("clientsJSON:", clientsJSON);

let clientsArray = [];

http
  .createServer((req, res) => {
    //#region GET
    if (req.method == "GET") {
      switch (req.url) {
        case "/index.html":
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.write(MainFileHTML);
          break;
        case "/welcome.html":
          res.writeHead(200, "Ok", { "content-type": "text/html" });
          res.write(welcomeFileHTML);
          break;
        case "/style.css":
          res.writeHead(200, "Ok", { "content-type": "text/css" });
          res.write(StyleCSS);
          break;
        case "/bootstrap.min.css":
          res.writeHead(200, "Ok", { "content-type": "text/css" });
          res.write(Bootstrap);
          break;
        case "/script.js":
          res.writeHead(300, "Hii", { "content-type": "text/javascript" });
          res.write(ScriptFile);
          break;
        case "/favicon.ico":
          res.writeHead(200, "ok", {
            "content-type": "image/vnd.microsoft.icon",
          });
          res.write(myIcon);
          break;
        case "/Serverside/clients.json":
          res.writeHead(200, "ok", {
            "content-type": "application/json",
          });
          res.write(clientsJSON);
          break;
        default:
          res.write("<h1>No Page Found</h1>");
          break;
      }
      res.end();
    }
    //#endregion
    //#region POST
    else if (req.method == "POST") {
      //url
      req.on("data", (data) => {
        // console.log(data.toString());
        data = data.toString().split("=");
        // console.log(data);
        fullName = data[1].split("&")[0];
        // console.log(fullName);
        phone = data[2].split("&")[0];
        // console.log(phone);
        email = data[3].toString().split("&")[0];
        // console.log(email);
        address = data[4].toString().split("&")[0];
        // console.log(address);
        let client = {
          fullName,
          phone,
          email,
          address,
        };
        data = fs.readFileSync("clients.json", "utf-8");
        obj = JSON.parse(data);
        // console.log(obj);
        obj.forEach((arr) => {
          clientsArray.push(arr);
        });
        clientsArray.push(client);
        // console.log("=========", clientsArray);
      });
      req.on("end", () => {
        welcomeFileHTML = welcomeFileHTML
          .replace("{fullName}", fullName)
          .replace("{phone}", phone)
          .replace("{email}", email)
          .replace("{address}", address);
        res.write(welcomeFileHTML);

        jsonString = JSON.stringify(clientsArray);

        // console.log(jsonString);
        fs.writeFileSync("./clients.json", jsonString);

        res.end();
      });
    }
  })
  .listen("7001", () => {
    console.log("http://localhost:7001");
  });
