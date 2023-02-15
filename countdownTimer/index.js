const endDate = "18 December 2022 12:00 PM"

document.getElementById("endDate").innerHTML = endDate;

const inputs = document.querySelectorAll("input");




function clock(){
    const end = new Date(endDate);
    const now = new Date();

    console.log(end)
    console.log(now)

    const diff = (end - now )/1000

    console.log(diff)

    inputs[0].value = Math.floor(diff/60/60/24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff)%60;

}

clock();

// const diff = Math.floor((end - now )/1000/60/60/24)

setInterval(
    ()=>{
        clock()
    },
    1000
)