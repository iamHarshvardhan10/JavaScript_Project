const addBtn = document.getElementById("addBtn")
const subBtn = document.getElementById("subBtn")
const qtyValue = document.getElementById("qtyValue")


addBtn.addEventListener("click", () =>{
    qtyValue.value = parseInt(qtyValue.value) + 1;
})

subBtn.addEventListener("click", () =>{
    if(qtyValue.value <= 0){
        qtyValue.value == 0
    }else{
        qtyValue.value = parseInt(qtyValue.value)-1;
    }
})