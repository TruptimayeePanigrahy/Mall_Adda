document.getElementById("login").addEventListener("click", () => {
    let name= document.getElementById("username").value;
    let passInp = document.getElementById("password").value;
    if (name == "trupti" && passInp == "2001") {
      window.location.href = "../html/admin.html";
      alert("Admin Login SuccessFul!!");
    } else {
      alert("You are an User");
      window.location.href = "./sign.html";
    }
  });
