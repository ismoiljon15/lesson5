console.log("JS");


// 1.  function decloration
// add(123)

function add(x){
    console.log("salom", x);
}


// 2. function expression
let dec = function(y){
    console.log("lorem", y);
}

// dec(45)


// 3. Arrow function
const arrow = (z) => {
    console.log("arrow", z);
}

// arrow({name: "john"})



const btn = document.querySelector(".btn")
const inp = document.querySelector(".inp")


// JavaScript events
// click
// dblclick
// mouseenter
// mouseleave
// mousemove


// input events
// focus
// blur
// keyup


inp.addEventListener("focus", ()=>{
    console.log("input focus");
})

inp.addEventListener("blur", ()=>{
    console.log("input blur");
})

inp.addEventListener("keyup", ()=>{
    console.log("input keyup");
})












btn.addEventListener("click", ()=>{
    console.log("click event");
})

btn.addEventListener("mouseenter", ()=>{
    console.log("mouseenter event");
})

btn.addEventListener("mouseleave", ()=>{
    console.log("mouseleave event");
})

btn.addEventListener("mousemove", ()=>{
    console.log("mousemove event");
})


btn.addEventListener("dblclick", ()=>{
    console.log("dblclick event");
})














































