var btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
});

///

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

var nameErr = (emailErr = true);
// Validate name
if (name == "") {
  printError("nameErr", "Please enter your name");
} else {
  var regex = /^[a-zA-Z\s]+$/;
  if (regex.test(name) === false) {
    printError("nameErr", "Please enter a valid name");
  } else {
    printError("nameErr", "");
    nameErr = false;
  }
}
