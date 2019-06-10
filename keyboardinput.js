const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
//Clear Input
taskInput.value = "";

const inn = runEvent=(e)=>{
    console.log( `EVENT TYPE: ${e.type}`);
    // console.log(e.target.value)

    heading.innerText = e.target.value;

    // console.log(taskInput.value);
    // e.preventDefault();
}

// form.addEventListener('submit', inn)
taskInput.addEventListener('keydown', inn);
taskInput.addEventListener('keyup', inn);//keyup
taskInput.addEventListener('keypress', inn);//keypress
taskInput.addEventListener('focus', inn);//focus
taskInput.addEventListener('keyblur', inn);//blur
taskInput.addEventListener('cut', inn);//cut
taskInput.addEventListener('paste', inn);//paste
taskInput.addEventListener('input', inn);// general input event
taskInput.addEventListener('change', inn);









