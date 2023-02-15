const search=()=>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();

    const storeItem = document.getElementById("product_list");

    const product = document.querySelectorAll(".product");

    const productName = storeItem.getElementsByTagName("h2");

    for(var i = 0; i<productName.length; i++){
        let match = product[i].getElementsByTagName("h2")[0];

        if(match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox)>-1){
                product[i].style.display=""
            }else{
                product[i].style.display="none";
            }
        }
    }
}