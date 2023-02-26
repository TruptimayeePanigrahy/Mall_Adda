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
        td3.style.border="3px solid red"
        let td4=document.createElement("td")
        td4.innerText=element.price
        let td5=document.createElement("td")
        td5.innerText=element.category
        let td6=document.createElement("td")
        td6.innerText=element.brand
        let td7=document.createElement("button")
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