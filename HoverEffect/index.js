const zoomIn = document.querySelector("#circle")
// const zoomOut = document.querySelector("#circle");

zoomIn.addEventListener("mouseenter", ()=>{
   if(!zoomIn.classList.contains("hover")){
    zoomIn.classList.add("hover");
   }
   
})

zoomIn.addEventListener("mouseleave", ()=>{
    if(zoomIn.classList.contains("hover")){
     zoomIn.classList.remove("hover");
    }
    
 })



//  mouseenter
// mouseleave
