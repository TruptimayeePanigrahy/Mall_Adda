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
  