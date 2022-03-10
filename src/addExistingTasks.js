import * as dom from './DOM';
import { deleteTask, completeTask, flagTask, editTask } from './deleteTask';


function addExistingTasks() {

    //DOM
    const headerName = document.querySelectorAll('.projectNameContainers');
    const sideBarName = document.querySelectorAll('.sideBarTags');


    headerName.forEach(headerName => {
        headerName.addEventListener('click', renderTasks)
    });

}



function renderTasks() {

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
        var deleteCheck2 = localStorage.getItem(ID + 'TaskPerge' + i);        

        if (deleteCheck === "deleted" || completedCheck === "completed" || deleteCheck2 === "X") {
            
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
        
        // add edit event listner to task HTML
        var editImg = document.getElementById("editID" + i);
        editImg.addEventListener('click', editTask);

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
        dueDateDiv.style.display = "Flex";
        dueDateDiv.style.justifyContent = "space-between";

    } 
    else {

        taskAreaP.style.display = "none";
        dueDateDiv.style.display = "none";

    }
}



export { addExistingTasks, displayTextArea, renderTasks}