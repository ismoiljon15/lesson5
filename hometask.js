console.log("JavaScript");

const input_box = document.querySelector(".input_box")
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")


btn.addEventListener("click", ()=>{
    let text = input_box.value
    if(text === ""){
        return alert("Please write everything !!!")
    }

    
    
    let list = document.createElement("li")

    list.className = "item"

    list.innerHTML = text

    container.appendChild(list)

    input_box.value = ""


}

)