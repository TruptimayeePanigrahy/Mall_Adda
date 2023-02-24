function showUserName() {
    const name = window.localStorage.getItem("userValue");
    if (name !== undefined) {
      document.getElementById("profile").innerHTML = name;
    } else {
      document.getElementById("profile").innerHTML = "Profile";
    }
  }
  
  showUserName();
  