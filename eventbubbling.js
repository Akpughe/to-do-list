//  set local storage item
localStorage.setItem('name', 'John');

//  set session storage item
// sessionStorage.setItem('name', 'Beth');

//remove from your storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');

// clearn local storage
// localStorage.clear();

// console.log(name);

document.querySelector('form').addEventListener('submit', (e)=>{
    // console.log(123);
    const task = document.querySelector('#task').value;

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // if(localStorage.getItem('tasks')===null){
    //     tasks=[];
    // }else{
    //     tasks = JSON.parse(localStorage.getItem('tasks'));
    // }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

    // alert("task saved");

    // localStorage.setItem('task', task);
    alert('Task saved');
    // console.log(tasks);
    e.preventDefault();
});