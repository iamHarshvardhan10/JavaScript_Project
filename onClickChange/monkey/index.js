const closedFace = document.querySelector(".closed")
const open = document.querySelector(".open")

closedFace.addEventListener('click', () => {
    if (open.classList.contains('open')){
        open.classList.add('active');
        closedFace.classList.remove('active')
    }
} );

open.addEventListener('click', () => {
    if (closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        open.classList.remove('active')
    }
} );


// querySelector 
// addEventlistener
// classList
// contains
