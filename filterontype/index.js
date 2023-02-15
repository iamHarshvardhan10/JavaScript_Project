const search = () => {

    const searchbpx = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product_list")
    const product = document.querySelectorAll(".product")
    const productName = storeItems.getElementsByTagName("h2")

    for (var i=0; i < productName.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toUpperCase().indexOf(searchbpx) > -1) {
                product[i].style.display = "";

            } else {
                product[i].style.display = "none";
            }
        }
    }

}