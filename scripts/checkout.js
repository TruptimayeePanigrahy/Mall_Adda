
let variable=JSON.parse(localStorage.getItem("total"))||0
document.getElementById("total").innerText = `$${variable}`;

function fun() {
  let nameInp = document.getElementById("name").value;
  let emailInp=document.getElementById("email").value
  let mobileinp=document.getElementById("mobile").value
  let selectInp=document.getElementById("state").value
let adressinp=document.getElementById("adredd").value
let zipInp=document.getElementById("z-input").value
  let cvvInp = document.getElementById("c-input").value;
  let yearinp=document.getElementById("year").value
  let monthinnp=document.getElementById('month').value
  let creditnumber = document.getElementById("cardnumber").value;
  console.log(nameInp, cvvInp, creditnumber);
  if (nameInp && cvvInp && creditnumber&&emailInp &&mobileinp&&selectInp&&adressinp&&zipInp&&yearinp&&monthinnp) {
    // alert("Order Successfully Placed");
    // window.location.href = "../html/index.html";
    let value = generateOTP();
    alert("Your One Time Password is : " + value);

    localStorage.setItem("OTP", JSON.stringify(value));

    window.location.href = "../html/otp.html"
  } else {
    alert("Please fill the details");
  }
}


  
       

      
    

    // function for genarate otp
    function generateOTP() {
        var digits = '0123456789';
        let OTP = "";
        for (let i = 0; i < 4; i++) {
            OTP = OTP + digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
    }
   


