


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
            console.log(data.Electronics)
            let productData = data.Electronics
            alldatashow(productData)
        }).catch((error) => {
            console.log("error")
        })
}
  

function alldatashow(productData) {
    allProductSection.innerHTML = null;

    productData.forEach((element) => {
        let card = document.createElement("div");
        // card.style.border="2px solid red"

        let image = document.createElement("img");
        image.setAttribute("src", element.image);
        // image.style.border="2px solid green"

        image.style.width = "240px"
        image.style.height = "260px"

        let price = document.createElement("p");
        price.innerText = `₹${element.price}`;
        price.style.fontWeight = "600"

        let rating = document.createElement("p");
        rating.innerText = `${element.rating}⭐`;

        let title = document.createElement("p");
        title.classList.add("title")
        title.innerText = `${element.title}`;

        let button = document.createElement("button")
        button.classList.add("cart-btn")
        button.innerText = "Add To Cart"
        button.addEventListener("click", ()=>{
            alert("working")
        })

        card.append(image, price, rating, title,button);
        allProductSection.append(card);
    });

}

