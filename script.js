/* =========================
   TaskTact JavaScript
========================= */


/* ===== Loader ===== */

window.addEventListener("load",()=>{

    document.getElementById("loader").style.display="none";

});



/* ===== Mobile Menu ===== */

const menuBtn=document.getElementById("menuBtn");
const navMenu=document.querySelector(".nav-menu");


menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});




/* ===== Dark Mode ===== */


const themeToggle=document.getElementById("themeToggle");


themeToggle.addEventListener("click",()=>{


    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        themeToggle.innerHTML=
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeToggle.innerHTML=
        '<i class="fa-solid fa-moon"></i>';

    }


});




/* ===== Task Manager ===== */


const addTask=document.getElementById("addTask");
const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");


addTask.addEventListener("click",()=>{


    let taskText=taskInput.value.trim();


    if(taskText===""){

        alert("Please enter a task");
        return;

    }



    let li=document.createElement("li");


    li.innerHTML=`

    <span>${taskText}</span>

    <button class="complete">
    ✔
    </button>

    <button class="delete">
    ✖
    </button>

    `;


    taskList.appendChild(li);


    taskInput.value="";



    saveTasks();


});





/* ===== Task Buttons ===== */


taskList.addEventListener("click",(e)=>{


    if(e.target.classList.contains("delete")){

        e.target.parentElement.remove();

        saveTasks();

    }



    if(e.target.classList.contains("complete")){


        e.target.parentElement.classList.toggle("completed");


        saveTasks();


    }


});





/* ===== Local Storage ===== */


function saveTasks(){


    localStorage.setItem(
        "tasks",
        taskList.innerHTML
    );


}



function loadTasks(){


    taskList.innerHTML=
    localStorage.getItem("tasks") || "";


}


loadTasks();






/* ===== Progress Counter ===== */


let counter=document.getElementById("counter");


let value=0;


let interval=setInterval(()=>{


    value++;


    counter.innerHTML=value+"%";


    if(value>=75){

        clearInterval(interval);

    }


},20);





/* ===== Scroll Top ===== */


const scrollBtn=document.getElementById("scrollTop");


window.addEventListener("scroll",()=>{


    if(window.scrollY>300){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }


});



scrollBtn.onclick=()=>{


    window.scrollTo({

        top:0,
        behavior:"smooth"

    });


};





/* ===== Contact Form ===== */


const contactForm=document.getElementById("contactForm");


contactForm.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "Thank you! Your message has been sent."
    );


    contactForm.reset();


});
