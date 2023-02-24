let popup = document.getElementById("popup")
let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
         openPopup()
    function openPopup() {
        popup.classList.add("open-Popup")
        setTimeout(() => {
            closePopup()
        }, 900)

    }

    function closePopup() {
        popup.classList.remove("open-Popup")
    }
})
