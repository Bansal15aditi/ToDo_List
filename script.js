let input=document.querySelector('.input-list');
let addbutton=document.querySelector('.add-task');
let tasks=document.querySelector('.tasks');
input.addEventListener('keyup',() =>{
    if(input.value.trim()!=0){
        addbutton.classList.add('active')
    }
    else{
        addbutton.classList.remove('active')
    }
})
addbutton.addEventListener('click',() =>{
    if(input.value.trim()!=0){
        let newitem=document.createElement('div');
        newitem.classList.add('input-items');
        newitem.innerHTML=`
        <p>${input.value}</p>
                <div class="item-button">
                    <i class="fa-solid fa-square-check"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
        `
        tasks.appendChild(newitem);
        input.value='';

    }
    else{
        alert("please enter a task.")
    }
})
tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove();
    }
})
tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-square-check')){
        e.target.parentElement.parentElement.classList.toggle('completed')
    }
})