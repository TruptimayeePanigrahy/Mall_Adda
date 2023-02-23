function validation() {
  if (document.getElementById("user").value === "") {
    alert("Oops, that's not amatch");
    return false;
  }
  if (document.getElementById("user").value.length <= 4) {
    alert("! We ran into a problem. Please try again later.");
  } else {
    return true;
  }
}

function validation() {
  if (document.getElementById("pass").value === "") {
    alert("Oops, that's not amatch");
    return false;
  } else {
    return true;
  }
}

function color() {
  if (document.getElementById("pass").value == "") {
    document.getElementById("pass1").style.backgroundColor = "lightgray";
    return false;
  } else if (document.getElementById("pass").value.length >= 1) {
    document.getElementById("pass1").style.backgroundColor = "#385998";
    return false;
  } else {
    return true;
  }
}

function loginSubmit() {
  const name = document.getElementById("user").value;
  var users = JSON.parse(localStorage.getItem("Users")) || [];
  console.log(users, "users");
  console.log(name, "data");
  var flag = false;
  var cuurentUser = [];
  for (let i = 0; i < users.length; i++) {
    let u = users[i].name;
    if (u === name) {
      flag = true;
      localStorage.setItem("userValue", name);
      cuurentUser.push(users[i]);
    }
  }
  if (flag === true) {
    localStorage.setItem("currentUser", JSON.stringify(cuurentUser));
    window.location.href = "welcome.html";
  } else {
    alert("Invalid Username");
  }
}

function PasswordCheck() {
  const name = localStorage.getItem("userValue");
  const password = document.getElementById("pass").value;
  var users = JSON.parse(localStorage.getItem("currentUser")) || [];
  console.log(users, "users");
  console.log(name, "data");
  var flag = false;
  var cuurentUser = [];
  for (let i = 0; i < users.length; i++) {
    let u = users[i].name;
    let p = users[i].password;
    if (u === name && p === password) {
      flag = true;
    }
  }
  if (flag === true) {
    localStorage.setItem("currentUser", JSON.stringify(cuurentUser));
    window.location.href = "../index.html";
  } else {
    alert("Invalid Username");
  }
}
