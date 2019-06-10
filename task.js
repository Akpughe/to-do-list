//Define UI vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//load all evnt listeners
loadEventListeners();

//
function loadEventListeners(){
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTask)
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTasks)
    //filter task event
    filter.addEventListener('keyup', filterTasks)
}

//store in LS
// storeTaskinLocalStorage(taskInput.value);


//Filter Task
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(
        function(task){ 
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block'
            }else{
                task.style.display = 'none'
            }
        }
        );
    }
    
    //Get TASKs from LS
    function getTask(){
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        tasks.forEach(function(task){
            //create li element
            const li = document.createElement('li')
            //ada class name
            li.className = 'collection-item';
            //text node and append to the li
            // li.appendChild(document.createTextNode(task));
            li.textContent = task;
            // create new link element
            const link = document.createElement('a');
            // add class
            link.className = 'delete-item secondary-content';
            // add icon HTML
            link.innerHTML = '<i class="fa fa-remove"></i>';
            // append the link to li
            li.appendChild(link);
            // append li to ul
            taskList.appendChild(li);
        })
    }
    
    //Storetask 
    function storeTaskinLocalStorage(task){
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    
    //Clear Task
    function clearTasks(){
        // taskList.innerHTML='';  
        
        
        //works faster
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild)
        }

        //clear fRM LS
        clearTasksFromLocalStorage();
        
    }
    function clearTasksFromLocalStorage(){
        localStorage.clear();
    }
    
    
    //Remove task function
    function removeTask(e){
        if(e.target.parentElement.classList.contains
            ('delete-item')){
                if(confirm('Are you sure')){
                    e.target.parentElement.parentElement.remove();
                    
                    
                    //Remove from LS
                    removeTaskFromLocalStorage
                    (e.target.parentElement.parentElement);
                }
            }
        }
        
        //Remove from LS
        function removeTaskFromLocalStorage(taskItem){
            // console.log(taskItem);
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            
            
            tasks.forEach(function(task, index){
                if (taskItem.textContent===task){
                    tasks.splice(index,1)
                }
            }) 
            
            localStorage.setItem('tasks', JSON.stringify(tasks));
            
        }
        
        //Add task
        function addTask (e){
            if(taskInput.value === ''){
                return alert("Add a task");
            }
            
            // save to LS
            storeTaskinLocalStorage(taskInput.value);
            
            //create li element
            const li = document.createElement('li')
            //ada class name
            li.className = 'collection-item';
            //text node and append to the li
            li.appendChild(document.createTextNode(taskInput.value));
            // create new link element
            const link = document.createElement('a');
            // add class
            link.className = 'delete-item secondary-content';
            // add icon HTML
            link.innerHTML = '<i class="fa fa-remove"></i>';
            // append the link to li
            li.appendChild(link);
            // append li to ul
            taskList.appendChild(li);
            // clear input
            taskInput.value = '';
            // console.log(li);
            e.preventDefault();
        }
        
        