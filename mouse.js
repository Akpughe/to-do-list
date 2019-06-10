const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

//Event Handler
const clicky = runEvent = (e) =>{
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor =  `rgb(${e.offsetX}, ${e.offsetY}, 40)`
    // e.preventDefault();
}


// //click
// clearBtn.addEventListener('click', clicky);
// //dblclick
// clearBtn.addEventListener('dblclick', clicky);
// //mousedown
// clearBtn.addEventListener('mousedown', clicky);  
// //mouseup
// clearBtn.addEventListener('mouseup', clicky); 
// //mouseenter
// card.addEventListener('mouseenter', clicky); 
// //mouseleave
// card.addEventListener('mouseleave', clicky); 
// //mouseover
// card.addEventListener('mouseover', clicky); 
// //mouseout
// card.addEventListener('mouseout', clicky);
//mousemove
 card.addEventListener('mousemove', clicky); 


