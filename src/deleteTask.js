import * as dom from './DOM';
import { addExistingTasks, renderTasks } from './addExistingTasks';
import {  displayTodayTasks, displayAllTasks, displayCompletedTasks, displayDeletedTasks, displayFlaggedTasks  } from './sideBarFunctionality';


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


// this function will load the last active project
function loadActiveProject() {

    let activeProject = localStorage.getItem('activeProject')
    
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




export { deleteTask, completeTask, flagTask, loadActiveProject}