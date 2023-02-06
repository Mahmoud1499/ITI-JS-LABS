const button = document.getElementById("submit");
const username = document.getElementById("username");
const password = document.getElementById("password");

// console.log(button, username, password);

function validateForm() {
  let uname = username.value;
  let pass = password.value;

  if (uname == "" || pass == "") {
    alert("User name and password must be filled out");
    return false;
  } else if (uname == "admin" || pass == "123") {
    alert("Welcome Admin");
  } else {
    alert("Not registered");
  }
}
