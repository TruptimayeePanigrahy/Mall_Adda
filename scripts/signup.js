var radio1 = document.getElementById("acc1");
var radio2 = document.getElementById("acc2");
var dis1 = document.getElementById("main_body");
var dis2 = document.getElementById("form_j");
radio1.onclick = function () {
  console.log("radio1.checked" + radio1.checked);
  dis2.style.display = "none";
  dis1.style.display = "flex";
};
radio2.onclick = function () {
  console.log("radio2.checked" + radio1.checked);

  dis2.style.display = "flex";
  dis1.style.display = "none";
};

function showhide() {
  var div = document.getElementById("newpost");
  var bsdiv = document.getElementById("bussiness");
  if (div.style.display !== "none") {
    div.style.display = "none";
    bsdiv.style.display = "block";
  } else {
    div.style.display = "block";
    bsdiv.style.display = "none";
  }
}

function RegisterSubmit(event) {
  event.preventDefault();
  const users = JSON.parse(localStorage.getItem("Users")) || [];
  const name = document.getElementById("F_Name").value;
  const lastName = document.getElementById("L_Name").value;
  const email = document.getElementById("Email").value;
  const password = document.getElementById("password").value;
  if (name === "" || lastName === "" || email === "" || password === "") {
    alert("Please Enter the Details");
    return;
  }
  var userdata = {
    name: name,
    lastName: lastName,
    email: email,
    password: password,
  };
  console.log(userdata, "surname");
  if (name && email && password) {
    users.push(userdata);
    localStorage.setItem("Users", JSON.stringify(users));
    window.location.href = "./signin.html";
    document.getElementById("firstName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
}

function BussinessRegisterSubmit(event) {
  event.preventDefault();
  const users = JSON.parse(localStorage.getItem("Users")) || [];
  const name = document.getElementById("bname").value;

  const email = document.getElementById("bemail").value;
  const password = document.getElementById("bpassword").value;
  var userdata = {
    name: name,
    email: email,
    password: password,
  };
  if (name && email && password) {
    users.push(userdata);
    localStorage.setItem("Users", JSON.stringify(users));
    window.location.href = "./signin.html";
    document.getElementById("bname").value = "";
    document.getElementById("bemail").value = "";
    document.getElementById("bpassword").value = "";
  }
}
