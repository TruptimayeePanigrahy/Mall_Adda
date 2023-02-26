
let baseserverurl = "http://localhost:3000"

let inputbox = document.getElementById("inputbox")
let selectcategory = document.getElementById("selectCategory")

let electronics = document.getElementById("electronics")
let fashion = document.getElementById("fashion")

let formdata = document.getElementById("myform")
//  let addproduct = document.getElementById("addproduct")



let brand = document.getElementById("brand")
let category = document.getElementById("category")
let price = document.getElementById("price")
let rating = document.getElementById("rating")
let title = document.getElementById("title")
let imageUrl = document.getElementById("imageURL")
let id = document.getElementById("id")

let submit = document.getElementById("submit")

formdata.addEventListener("submit", (e) => {
    e.preventDefault()

    // console.log("happy")

    if (
        formdata.brand.value == "" ||
        formdata.category.value == "" ||
        formdata.price.value == "" ||
        formdata.rating.value == "" ||
        formdata.title.value == "" ||
        formdata.imageURL.value == "" ||
        formdata.id.value == ""
    ) {
        alert("Please fill all the details!!");
        return;
    } else {



        let obj = {

            brand: formdata.brand.value,
            category: formdata.category.value,
            price: formdata.price.value,
            rating: formdata.rating.value,
            title: formdata.title.value,
            image: formdata.imageURL.value,
            id: formdata.id.value

        };

        if (selectcategory.value === "electronics") {
            addelectronicsdata(obj)
        }

        if (selectcategory.value === "fashion") {
            addfashiondata(obj)
        }


    }

})

//adding fashion product below
function addfashiondata(obj) {
    console.log(obj)
    fetch("http://localhost:3000/Fashion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
    alert("data added successfull");
    brand.value = ""
    category.value = ""
    price.value = ""
    rating.value = ""
    title.value = "";
    imageUrl.value = "";
    formdata.id.value = ""

}


//adding electronics product below
function addelectronicsdata(obj) {
    console.log(obj)
    fetch("http://localhost:3000/Electronics", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
    alert("data added successfull");
    brand.value = ""
    category.value = ""
    price.value = ""
    rating.value = ""
    title.value = "";
    imageUrl.value = "";
    formdata.id.value = ""
}