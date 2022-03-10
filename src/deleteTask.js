import * as dom from './DOM';
import { addExistingTasks, renderTasks } from './addExistingTasks';
import {  displayTodayTasks, displayAllTasks, displayCompletedTasks, displayDeletedTasks, displayFlaggedTasks  } from './sideBarFunctionality';
import { closeTaskTag } from './addNewTask';


function deleteTask(e) {
    
    //dom
    var id = e.target.id.substring(2);
    var projectName = document.getElementById('headerText').innerHTML.replace(/\s/g, "");
    var globalID = localStorage.getItem(projectName + "globalId" + id);

    // LOCAL
    var deletedLocalTaskName = projectName + "Deleted" + id;

    localStorage.setItem(deletedLocalTaskName, "deleted");

    // GLOBAL
    var deletedGlobalTaskName = "globalDeleted" + globalID;

    localStorage.setItem(deletedGlobalTaskName, "deleted");

    var removeDiv = document.getElementById("taskDiv" + id);
    removeDiv.remove();
}


function completeTask(e) {
    //dom
    var id = e.target.id.substring(10);
    var projectName = document.getElementById('headerText').innerHTML.replace(/\s/g, "");
    var globalID = localStorage.getItem(projectName + "globalId" + id);
    
    // LOCAL
    var completedLocalTaskName = projectName + "Completed" + id;
    
    localStorage.setItem(completedLocalTaskName, "completed");
    
    // GLOBAL
    var completedGlobalTaskName = "globalCompleted" + globalID;
    
    localStorage.setItem(completedGlobalTaskName, "completed");
    
    var removeDiv = document.getElementById("taskDiv" + id);
    removeDiv.remove();
}


function flagTask(e) {
    //DOM
    var id = e.target.id.substring(9);
    var projectName = document.getElementById('headerText').innerHTML.replace(/\s/g, "");
    var globalID = localStorage.getItem(projectName + "globalId" + id);
    var checkFlagStatus = localStorage.getItem(projectName + "Flagged" + id)
    var flaggedLocalTaskName = projectName + "Flagged" + id;
    var flaggedGlobalTaskName = "globalFlagged" + globalID;

    // if task is already flagged, unflag the task and change the icon
    if (checkFlagStatus === "flagged") {
        // LOCAL
        localStorage.setItem(flaggedLocalTaskName, "");
        // GLOBAL
        localStorage.setItem(flaggedGlobalTaskName, "");

        e.target.src = "images/flag-outline.png";
    }
    // if task is not flagged, flag the task and change the icon
    else {
        // LOCAL
        localStorage.setItem(flaggedLocalTaskName, "flagged");
        // GLOBAL
        localStorage.setItem(flaggedGlobalTaskName, "flagged");

        e.target.src = "images/flag.png";
    }
}

function editTask(e) {

    const editTaskCheck = e.target.id;

    // set a refernce to the current task that is being edidted
    localStorage.setItem('currentEdit', editTaskCheck.replace(/\D/g, ""))

    // render the edit task tag 
    dom.taskTagItemsDOM(editTaskCheck);


    // save changes to localStorage
    dom.btn1.addEventListener('click', saveTaskChanges)


    // close button functionality
    dom.img2.addEventListener('click', closeTaskTag);
}

function deleteProject(e) {

    var projectID = e.target.getAttribute("data-id");
    var projectName = e.target.id.replace(/\s/g, ''); 
    var projectTaskCount = localStorage.getItem(projectName + "taskCount")

    for (let i = 1; i <= projectTaskCount; i++) {
        
        var globalTaskId = localStorage.getItem(projectName + "globalId" + i);

        localStorage.setItem(projectName + "TaskPerge" + i , 'X')
        localStorage.setItem('globalTaskName' + globalTaskId, 'X')
    }


    localStorage.setItem("project" + projectID, "X");

    localStorage.setItem('activeProject', "Removed");

    location.reload();
}



// this function will load the last active project
function loadActiveProject() {

    let activeProject = localStorage.getItem('activeProject');

    if (activeProject === "Removed") {

        activeProject = "Today";
    }
    
    if (activeProject !== null) {

        document.getElementById('headerText').innerHTML = activeProject;

        const highlightProjectFolder = (function () {

            // DOM
            const selector = document.getElementById(activeProject);
            const sideBarTags = document.querySelectorAll('.sideBarTags');
            const projectTags = document.querySelectorAll('.projectNameContainers');
        
            // highlight selected project or upper task
            sideBarTags.forEach(sideBarTags => {
                sideBarTags.style.backgroundColor = "";
            });
        
            projectTags.forEach(projectTags  => {
                projectTags.style.backgroundColor = "";
            });
        
            selector.style.backgroundColor = "#3d90e36c";        
        })();
        
        // render the appropriate project tasks
        if (activeProject !== "Today" && activeProject !== "All Tasks" && activeProject !== "Flagged" && activeProject !== "Completed" && activeProject !== "Deleted") {
            dom.addTaskContainer.style.display = "flex";
            renderTasks();
            console.log(activeProject)
        } 
        else if (activeProject === "Today") {
            displayTodayTasks();
        } 
        else if (activeProject === "All Tasks") {
            displayAllTasks();
        }
        else if (activeProject === "Flagged") {
            displayFlaggedTasks();
        } 
        else if (activeProject === "Completed") {
            displayCompletedTasks();
        }
        else if (activeProject === "Deleted") {
            displayDeletedTasks();
        }
    } 
}


function saveTaskChanges(e) {

    var inputValue = document.querySelector('.taskInputName');
    var inputDate = document.querySelector('.inputDate');
    var inputArea = document.querySelector('.textArea');
    var projectID = document.getElementById('headerText').innerHTML.replace(/\s/g, "");

    var taskName = inputValue.value;
    var taskDate = inputDate.value;
    var taskArea = inputArea.value;

    var taskNameArray = [localStorage.getItem(projectID + 'taskName')];
    var taskDateArray = [localStorage.getItem(projectID + 'taskDate')];
    var taskAreaArray = [localStorage.getItem(projectID + 'taskArea')];

    var currentLocalEditId = localStorage.getItem('currentEdit')

    var currentGlobalEditId = localStorage.getItem(projectID + "globalId" + currentLocalEditId)
    // localStorage.setItem('currentEdit', e.target.id)

    if (taskName === "" || taskDate === "" || taskArea === "") {
        console.log(currentGlobalEditId)
    } else {

        // add the new task name to the task name array
        taskNameArray.push(taskName);
        taskDateArray.push(taskDate);
        taskAreaArray.push(taskArea);

        JSON.stringify(localStorage.setItem(projectID + 'taskName' + currentLocalEditId, taskNameArray));
        JSON.stringify(localStorage.setItem(projectID + 'taskDate' + currentLocalEditId, taskDateArray));
        JSON.stringify(localStorage.setItem(projectID + 'taskArea' + currentLocalEditId, taskAreaArray));

        JSON.stringify(localStorage.setItem('globalTaskName' + currentGlobalEditId, taskNameArray));
        JSON.stringify(localStorage.setItem('globalTaskDate' + currentGlobalEditId, taskDateArray));
        JSON.stringify(localStorage.setItem('globalTaskArea' + currentGlobalEditId, taskAreaArray));

    }
}


export { deleteTask, completeTask, flagTask, loadActiveProject, editTask, deleteProject}