const input_text = document.querySelector(".input_text")
const btn = document.querySelector(".btn")
const collection = document.querySelector(".collection")

btn.addEventListener("click", ()=>{
    let text = input_text.value
    if(text === ""){
        return alert("Biror nima yozing !!!")
    }


    let list = document.createElement("li")

    list.className = "item"

    list.innerHTML = text

    collection.appendChild(list)

    input_text.value = ""
})







