let container=document.querySelector("tbody")
let select=document.getElementById("product")
let productData
window.addEventListener("load", () => {
    fetchingdata()
})
function fetchingdata() {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
              productData = data.Electronics
             console.log(productData)
            select.addEventListener("change",()=>{
                
                if(select.value=="Electronics"){
                      productData=data.Electronics
                     console.log(productData)
                     alldatashow(productData)
                     
                }else{
                   productData=data.Fashion
                     alldatashow(productData)
                }
            })
            console.log(productData)
            //alldatashow(productData)
        }).catch((error) => {
            console.log("error")
        })
}
 function alldatashow(data){
    container.innerHTML=null
    data.forEach((element,index) => {
        let tr=document.createElement("tr")
        tr.classList.add("row")
        
        let td1=document.createElement("td")
        td1.innerText=element.id
        let td2=document.createElement("td")
        let imageinp=document.createElement("img")
        imageinp.src=element.image
        imageinp.style.width="100px"
        imageinp.style.height="100px"
        td2.append(imageinp)
        let td3=document.createElement("td")
        td3.innerText=element.title
        // td3.style.border="3px solid red"
        let td4=document.createElement("td")
        td4.innerText=element.price
        let td5=document.createElement("td")
        td5.innerText=element.category
        let td6=document.createElement("td")
        td6.innerText=element.brand
        let td7=document.createElement("button")
        td7.style.color="black"
        td7.style.backgroundColor="red"
        td7.style.padding=" 10px 25px"
        td7.innerText="Remove"
        td7.addEventListener("click",()=>{
            productData=productData.filter((ele,i)=>{
                if(index==i){
                    return false
                }else{
                    return true
                }
            })
            alldatashow(productData)
        })

        tr.append(td1,td2,td3,td4,td5,td6,td7)
        tr.style.border="3px solid blue"
        container.append(tr)

    });
 }
//  Fashion
// let brand=document.getElementById("brand").value
let brand = document.getElementById("brand")
let category = document.getElementById("category")
let price = document.getElementById("price")
let rating = document.getElementById("rating")
let brand2 = document.getElementById("brand2")
let category2 = document.getElementById("category2")
let price2 = document.getElementById("price2")
let rating2 = document.getElementById("rating2")


brand2.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Fashion

            if (brand2.value === "puma" || brand2.value === "nike" || brand2.value === "reebok" ||
                brand2.value === "adidas") {
                let filtered = productData.filter((element, index) => {
                    // console.log(element)
                    // console.log(brand.value)
                    if (element.brand === brand2.value) {
                        return true
                    } else {
                        return false
                    }
                })
                //  console.log(filtered)
                alldatashow(filtered)
            } else {
                alldatashow(productData)
            }
        }).catch((error) => {
            console.log("error")
        })

})


//FILTER BY CATEGORY
// let category=document.getElementById("category").value
category2.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Fashion

            if (category2.value === "jacket" || category2.value === "t-shirt" || category2.value === "shoes" ||
                category2.value === "wallet" || category2.value === "shirt") {
                let filtered = productData.filter((element, index) => {
                    // console.log(element)
                    // console.log(brand.value)
                    if (element.category === category2.value) {
                        return true
                    } else {
                        return false
                    }
                })
                //  console.log(filtered)
                alldatashow(filtered)
            } else {
                alldatashow(productData)
            }
        }).catch((error) => {
            console.log("error")
        })
})

//SORT BY PRICE

price2.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Fashion
            if (price2.value === "2k to 10k") {
                let filtered = productData.filter((element, index) => {
                    if (element.price >= 2000 && element.price <= 10000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (price2.value === "10k to 20k") {
                let filtered = productData.filter((element, index) => {
                    if (element.price > 10000 && element.price <= 20000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (price2.value === "20k to 30k") {
                let filtered = productData.filter((element, index) => {
                    if (element.price > 20000 && element.price <= 30000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (price2.value === "above 30k") {
                let filtered = productData.filter((element, index) => {
                    if (element.price > 30000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else {
                alldatashow(productData)
            }

        }).catch((error) => {
            console.log("error")
        })
})

//sort by rating

rating2.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Fashion
            
            if(rating2.value === "1-3"){
                let filtered = productData.filter((element, index) => {
                    if (element.rating >= 1 && element.rating <= 3) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if(rating2.value === "3-4"){
                let filtered = productData.filter((element, index) => {
                    if (element.rating >3 && element.rating <= 4) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if(rating2.value === "4-5"){
                let filtered = productData.filter((element, index) => {
                    if (element.rating>4 && element.rating<=5) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else{
                alldatashow(productData)
            }
        }).catch((error) => {
            console.log("error")
        })
})
// Electronics
brand.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Electronics

            if (brand.value === "nokia" || brand.value === "samsung" || brand.value === "sony" ||
                brand.value === "apple" || brand.value === "motorola") {
                let filtered = productData.filter((element, index) => {
                    // console.log(element)
                    // console.log(brand.value)
                    if (element.brand === brand.value) {
                        return true
                    } else {
                        return false
                    }
                })
                //  console.log(filtered)
                alldatashow(filtered)
            } else {
                alldatashow(productData)
            }
        }).catch((error) => {
            console.log("error")
        })

})

//FILTER BY CATEGORY

category.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Electronics

            if (category.value === "mobile" || category.value === "laptop" || category.value === "watch" ||
                category.value === "earphone") {
                let filtered = productData.filter((element, index) => {
                    // console.log(element)
                    // console.log(brand.value)
                    if (element.category === category.value) {
                        return true
                    } else {
                        return false
                    }
                })
                //  console.log(filtered)
                alldatashow(filtered)
            } else {
                alldatashow(productData)
            }
        }).catch((error) => {
            console.log("error")
        })
})

//SORT BY PRICE

price.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Electronics
            if (price.value === "10k to 20k") {
                let filtered = productData.filter((element, index) => {
                    if (element.price >= 10000 && element.price <= 20000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (price.value === "20k to 50k") {
                let filtered = productData.filter((element, index) => {
                    if (element.price > 20000 && element.price <= 50000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (price.value === "50k to 1L") {
                let filtered = productData.filter((element, index) => {
                    if (element.price > 50000 && element.price <= 100000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (price.value === "above 1L") {
                let filtered = productData.filter((element, index) => {
                    if (element.price > 100000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else {
                alldatashow(productData)
            }

        }).catch((error) => {
            console.log("error")
        })
})


rating.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Electronics

            if (rating.value === "1-3") {
                let filtered = productData.filter((element, index) => {
                    if (element.rating >= 1 && element.rating <= 3) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (rating.value === "3-4") {
                let filtered = productData.filter((element, index) => {
                    if (element.rating > 3 && element.rating <= 4) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (rating.value === "4-5") {
                let filtered = productData.filter((element, index) => {
                    if (element.rating > 4 && element.rating <= 5) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else {
                alldatashow(productData)
            }
        }).catch((error) => {
            console.log("error")
        })
})