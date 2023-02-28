// import module
const http = require("http");
const fs = require("fs");
//Server data
const host = "localhost";
const port = 7000;

//
let defOperator = [`add`, `sub`, `multip`, `div`];
// Create http server
http
  .createServer((req, res) => {
    if (req.url != "/favicon.ico") {
      let args = req.url.split("/");
      args.shift();
      //   console.log(args);
      operator = args[0];
      args.shift();

      res.writeHead(200, { "content-type": "text/html" });
      if (defOperator.includes(operator)) {
        total = calc(operator, args);
        const message = `<h1>The ${operator} of ${args} is ${total} </h1> \n`;
        fs.appendFileSync("outputs.txt", message);
        res.end(message);
      } else {
        res.end(`<h1>Enter valid operator like [${defOperator}]</h1>`);
      }
    }
  })
  .listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });

function calc(operator, nums) {
  let total = +nums[0];
  console.log(operator);
  switch (operator) {
    case "add":
      for (let i = 1; i < nums.length; i++) {
        total += +nums[i];
      }
      break;
    case "sub":
      for (let i = 1; i < nums.length; i++) {
        total -= +nums[i];
      }
      break;
    case "multip":
      for (let i = 1; i < nums.length; i++) {
        total *= +nums[i];
      }
      break;
    case "div":
      for (let i = 1; i < nums.length; i++) {
        total /= +nums[i];
      }
      break;
    default:
      total = "";
  }
  console.log(`The total is ${total}`);
  return total;
}
