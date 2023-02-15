
const item = document.querySelector('#item');
const toDo_box = document.querySelector("#toDo_box");


item.addEventListener(
    'keyup', 
    function(event){
        if(event.key === 'Enter'){
            addToDo(this.value)
            this.value = ""
           
        }
     
    }
)

const addToDo = (item) =>{
    const listItem =  document.createElement('li');
    listItem.innerHTML=
    `
    ${item}
    <i class="fa fa-trash"></i>
    
    `
    listItem.addEventListener(
        'click',
        function(){
            this.classList.toggle("done")
        }
    )

        listItem.querySelector("i").addEventListener(
            "click",
            function(){
                listItem.remove()
            }
        )



    toDo_box.appendChild(listItem)
}