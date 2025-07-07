function addedNewTaskIntoToDoListTasks(){
    const inputTaskValue=document.getElementById("inputTask");
    const inputTaskText=inputTaskValue.value.trim();
    if(inputTaskText===""){
        return alert("Please Enter Our New Task...")
    }
    const toDoListTasks=document.getElementById("toDoListTasks");
    const li=document.createElement("li");
    li.className="task";
    li.innerHTML=`
        <span class="fa-solid fa-check">${inputTaskText}</span>
        <span onclick=" deletedTaskFromToDoList(this)" class="cursor-pointer">🗑</span>
    `
    toDoListTasks.appendChild(li);
    inputTaskValue.value="";
};
function deletedTaskFromToDoList(element){
    const inputTask=element.parentElement;
    inputTask.remove();
};
    document.getElementById("taskInput").addEventListener("keydown", function (e) {
      if (e.key === "Enter") addTask();
    });
document.getElementById("inputTask").addEventListener("keydown" , function(e){
    if(e.key==="enter") addedNewTaskIntoToDoListTasks();
})