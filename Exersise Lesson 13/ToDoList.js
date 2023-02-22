function add() {
    const work = document.getElementById("work"); 
    const ul = document.getElementById("ToDoList"); 
    const error = document.getElementById("error"); 

    if (work.value !== " ") {
        error.style.display = "none"; 
        const li = document.createElement("li");
        li.innerHTML = work.value; 
        li.className = "list-group-item";
        ul.appendChild(li); 
        work.value = " "; 
    }
    else {
        error.style.display = "block";
    }
}