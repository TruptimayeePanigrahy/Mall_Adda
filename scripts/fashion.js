


let allProductSection = document.getElementById("all-product-section")


window.addEventListener("load", () => {
    fetchingdata()
})

function fetchingdata() {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            console.log(data.Fashion)
            let productData = data.Fashion
            alldatashow(productData)
        }).catch((error) => {
            console.log("error")
        })
}


function alldatashow(productData) {
    allProductSection.innerHTML = null;

    productData.forEach((element) => {
        let card = document.createElement("div");
        card.style.border = "2px solid red"

        let image = document.createElement("img");
        image.setAttribute("src", element.image);
        image.style.border = "2px solid green"

        image.style.width = "240px"
        image.style.height = "260px"

        let price = document.createElement("p");
        price.innerText = `₹${element.price}`;
        price.style.fontWeight = "600"

        // ********************
        let heartdiv=document.createElement("div")
        heartdiv.classList.add("heartdiv")

        let heartbtn = document.createElement("button")
        // btn.style.cursor="pointer"
        let i = document.createElement("i")
        i.style.cursor="pointer"
        heartbtn.classList.add("btn1")
        i.classList.add("fas")
        i.classList.add("fa-heart")
        heartbtn.append(i)
        heartbtn.style.border="2px solid green"
        // body.append(btn)
        heartdiv.append(price,heartbtn)
        heartbtn.addEventListener("click",()=>{
        // alert("working")
        // console.log(heartbtn.style.color)
        if(heartbtn.style.color == "red"){
            heartbtn.style.color = "grey"
        }else{
            heartbtn.style.color="red"
        }
    })
    // **************

        let rating = document.createElement("p");
        rating.innerText = `${element.rating}⭐`;

        let divSurround = document.createElement("div")
        // divSurround.style.border = "2px solid red"
        divSurround.classList.add("divsurround")

        let title = document.createElement("p");
        title.classList.add("title")
        title.innerText = `${element.title}`;

        let button = document.createElement("button")
        button.classList.add("cart-btn")
        button.innerText = "Add To Cart"
        button.addEventListener("click", () => {
            alert("working")
        })
        divSurround.append(title, button)

        card.append(image, heartdiv, rating, divSurround);
        allProductSection.append(card);


    });

}