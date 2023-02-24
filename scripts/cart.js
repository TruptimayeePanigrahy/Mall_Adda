


let h1 = document.getElementById("h1")
let productCart = document.getElementById("productCart")


let cartProducts = JSON.parse(localStorage.getItem("products"))
console.log(cartProducts)


function alldatashow(productData) {

  productCart.innerHTML = null;

  cartProducts.forEach((element, index) => {
    // console.log(element)

    let card = document.createElement("div");
    //card.style.border = "2px solid red"
    //card.style.width="30%"
    card.classList.add("card")

    let image = document.createElement("img");
    image.setAttribute("src", element.image);
    // image.style.border = "2px solid green"

    image.style.width = "240px"
    image.style.height = "260px"


    let price = document.createElement("p");
    price.innerText = `₹${element.price}`;
    price.style.fontWeight = "600"

    let heartdiv = document.createElement("div")
    heartdiv.classList.add("heartdiv")


    let heartbtn = document.createElement("button")
    heartbtn.style.border = "0px"
    heartbtn.style.outline = "0px"
    // btn.style.cursor="pointer"
    let i = document.createElement("i")
    i.style.cursor = "pointer"
    heartbtn.classList.add("btn1")
    i.classList.add("fas")
    i.classList.add("fa-heart")
    heartbtn.append(i)
    // heartbtn.style.border="2px solid green"
    heartdiv.append(price, heartbtn)

    let divhold = document.createElement("div")
    divhold.classList.add("divhold")
    let span = document.createElement("span")


    span.style.fontSize = "25px"
    span.innerText = element.quantity
    let buttonsdiv = document.createElement("div")
    buttonsdiv.classList.add("buttonsdiv")
    let removebutton = document.createElement("button")
    removebutton.innerText = "Remove"
    removebutton.style.fontWeight = "650"
    removebutton.classList.add("removebutton")

    h1.innerText = +h1.innerText + element.quantity * (+element.price)

    let plusbutton = document.createElement("button")
    plusbutton.classList.add("plusbutton")
    plusbutton.innerText = "+"
    plusbutton.style.width = "30px"
    plusbutton.style.fontWeight = "600"
    plusbutton.style.fontSize = "20px"
    // plusbutton.style.border="transparent"
    plusbutton.style.outline = "none"
    plusbutton.style.textAlign = "center"


    let minusbutton = document.createElement("button")
    minusbutton.classList.add("minusbutton")
    minusbutton.innerText = "-"
    // minusbutton.style.border="transparent"
    minusbutton.style.outline = "none"
    minusbutton.style.width = "30px"
    minusbutton.style.fontWeight = "600"
    minusbutton.style.fontSize = "20px"
    minusbutton.style.textAlign = "center"

    divhold.append(plusbutton, span, minusbutton)
    buttonsdiv.append(divhold, removebutton)



    plusbutton.addEventListener("click", () => {
      console.log(element)
      if (span.innerText == 0) {
        span.innerText++
        h1.innerText = +h1.innerText + element.quantity * (+element.price)
      }
      else if (span.innerText > 0) {
        span.innerText++
        h1.innerText = +h1.innerText + element.quantity * (+element.price)
      }

    })

    minusbutton.addEventListener("click", () => {
      if (span.innerText > 0) {
        span.innerText--
        h1.innerText = +h1.innerText - element.quantity * (+element.price)
      }
    })

    removebutton.addEventListener("click", (e) => {
      h1.innerText = +h1.innerText - element.quantity * (+element.price)
      cartProducts.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(cartProducts))
      window.location.reload();
      alldatashow(cartProducts)
    })

    heartbtn.addEventListener("click", () => {
      if (heartbtn.style.color !== "red") {
        heartbtn.style.color = "red"
        console.log(element)
      }
      else if (heartbtn.style.color == "red") {
        heartbtn.style.color = ""
        console.log("nothing")
      }
    })

    let outerdiv = document.createElement("div")
    outerdiv.classList.add("card1")

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


    divSurround.append(title)

    card.append(image, heartdiv, rating, divSurround);
    card.style.border = "none"

    card.style.paddingLeft = "10px"
    // outerdiv.append(card, divhold);
    outerdiv.append(card, buttonsdiv)

    productCart.append(outerdiv)

  });

}

alldatashow(cartProducts)




