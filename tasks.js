let btnSubmit= document.querySelector('button');
let input = document.querySelector('input');

input.addEventListener('keyup', () =>{
   
    btnSubmit.disabled = true;

    if(input.value.length > 0){
     
        btnSubmit.disabled =false;
    }
   return false;
});

submit.addEventListener('click', () =>{
    output.innerText = input.value;
})

function addLi(){
    var task = document.getElementById('task').value,
       listNode = document.getElementById('tasks'),
       liNode = document.createElement("Li"),
       txtNode = document.createTextNode(task);

       liNode.appendChild(txtNode);

       listNode.appendChild(liNode);


}
