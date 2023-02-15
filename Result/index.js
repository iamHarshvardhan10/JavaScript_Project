const clc = () => {

    let maths = document.getElementById("maths").value;
    let science = document.getElementById("Science").value;
    let Social = document.getElementById("Social").value;
    let com = document.getElementById("com").value;
    let ele = document.getElementById("ele").value;

    let total = parseFloat(maths) + parseFloat(science) + parseFloat(Social) + parseFloat(com) + parseFloat(ele);


  
   

    let perc = (total / 500) * 100;



    let grades = '';

    if (perc <= 100 && perc >= 80) {
        grades = 'A';
    } else if (perc <= 79 && perc >= 60) {
        grades = 'B';
    } else if (perc <= 59 && perc >= 40) {
        grades = 'c';
    } else {
        grades = 'F';
    }

    if (perc >= 40) {
        document.getElementById("infos").innerHTML = `Your total score  out of 500 is ${total}  and you got ${perc}%  Your grades are ${grades} Your Pass `
    }else{
        document.getElementById("infos").innerHTML = `Your total score  out of 500 is ${total}  and you got ${perc}%  Your grades are ${grades} Your fail `
    }
}

