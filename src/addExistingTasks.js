import * as dom from './DOM';
import { deleteTask, completeTask, flagTask } from './deleteTask';


function addExistingTasks() {

    //DOM
    const headerName = document.querySelectorAll('.projectNameContainers');
    const sideBarName = document.querySelectorAll('.sideBarTags');


    headerName.forEach(headerName => {
        headerName.addEventListener('click', renderTasks)
    });

}



function renderTasks() {
    console.log("fire")

    // clear tasks so that they can be populated with the selected projects tasks
    dom.clearTasksDom();
    

    var ID = document.getElementById('headerText').innerHTML.replace(/\s/g, "");
    var count = localStorage.getItem(ID + 'taskCount');
    
    for (let i = 1; i <= count; i++) {
    
        var taskNameHTML = localStorage.getItem(ID + 'taskName' + i).substring(1);
        var taskAreaHTML = localStorage.getItem(ID + 'taskArea' + i).substring(1);
        var taskDate = localStorage.getItem(ID + 'taskDate' + i).substring(1);
        var deleteCheck = localStorage.getItem(ID + 'Deleted' + i);
        var completedCheck = localStorage.getItem(ID + 'Completed' + i);

        if (deleteCheck === "deleted" || completedCheck === "completed") {
            
        } else {
        // render the tasks HTML
        dom.renderTasksDom(taskNameHTML, i, taskAreaHTML, taskDate );

        // add delete event listner to task HTML
        var deleteImg = document.getElementById("ID" + i);
        deleteImg.addEventListener('click', deleteTask);

        // add complete event listner to task HTML
        var completeImg = document.getElementById("completeID" + i);
        completeImg.addEventListener('click', completeTask);

        // add flagged event listner to task HTML
        var flaggedImg = document.getElementById("flaggedID" + i);
        flaggedImg.addEventListener('click', flagTask);
        }

    }
    // show Task event listener
    var taskDivUpper = document.querySelectorAll('.taskDivUpperLeft');
    taskDivUpper.forEach(taskDivUpper => {
        taskDivUpper.addEventListener('click', displayTextArea);
    });
}



function displayTextArea(e) {

    var Num = e.target.id.replace(/\D/g, "");

    var nameDate = "#displayDate" + Num;
    var nameText = "#displayText" + Num;

    var taskAreaP = document.querySelector(nameDate);
    var dueDateDiv = document.querySelector(nameText);

    if (taskAreaP.style.display === "none") {

        taskAreaP.style.display = "initial";
        dueDateDiv.style.display = "initial";

    } 
    else {

        taskAreaP.style.display = "none";
        dueDateDiv.style.display = "none";

    }
}



export { addExistingTasks, displayTextArea, renderTasks}