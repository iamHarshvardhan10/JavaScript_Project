const close = document.querySelector(".close")
const open = document.querySelector(".open")

close.addEventListener("click", () =>{
    if(open.classList.contains("open")){
        open.classList.add("active")
        close.classList.remove("active")
    }
})

open.addEventListener("click", () =>{
    if(close.classList.contains("close")){
        close.classList.add("active")
        open.classList.remove("active")
    }
})