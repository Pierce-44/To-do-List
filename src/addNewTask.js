import * as dom from './DOM';

// Notes LS = local storage

function createNewTask() {
    
    // render task tag eventListener
    dom.taskContainerTag.addEventListener('click', renderTaskTag)


    function renderTaskTag(e) {
        
        const editTaskCheck = e.target.id;
        
        dom.taskTagItemsDOM(editTaskCheck);

        // add new task to localStorage event listener 
        dom.btn1.addEventListener('click', addNewTask)
    }

    // close button functionality
    dom.img2.addEventListener('click', closeTaskTag);


}


function closeTaskTag() {
    // DOM
    var container = document.querySelector('.taskTagPage');

    container.remove();
}


function addNewTask() {
    //DOM
    var inputValue = document.querySelector('.taskInputName');
    var inputDate = document.querySelector('.inputDate');
    var inputArea = document.querySelector('.textArea');
    var projectID = document.getElementById('headerText').innerHTML.replace(/\s/g, "");
    var projectIdWithSpaces = document.getElementById('headerText').innerHTML;

    
    var taskName = inputValue.value;
    var taskDate = inputDate.value;
    var taskArea = inputArea.value;

    var taskNameArray = [localStorage.getItem(projectID + 'taskName')];
    var taskDateArray = [localStorage.getItem(projectID + 'taskDate')];
    var taskAreaArray = [localStorage.getItem(projectID + 'taskArea')];
    var taskCount = localStorage.getItem(projectID + 'taskCount');
    var globalTaskCount = localStorage.getItem('globalTaskCount');
    

    if (taskName === "" || taskDate === "" || taskArea === "") {
          
    } else {

        if (taskCount === null) {

            localStorage.setItem(projectID + 'taskCount', 1)

        } 
        if (taskCount !== null) {

            localStorage.setItem(projectID + 'taskCount', ++taskCount)

        }
        if (globalTaskCount === null) {
            localStorage.setItem('globalTaskCount', 1)
        }
        if (globalTaskCount !== null) {

            localStorage.setItem('globalTaskCount', ++globalTaskCount)

        }

        var taskCountUpdate = localStorage.getItem(projectID + 'taskCount');
        var globalTaskCountUpdate = localStorage.getItem('globalTaskCount');

        // add the new task name to the task name array
        taskNameArray.push(taskName);
        taskDateArray.push(taskDate);
        taskAreaArray.push(taskArea);

        // add the updated project array to localStorage
        JSON.stringify(localStorage.setItem(projectID + 'taskName' + taskCountUpdate, taskNameArray));
        JSON.stringify(localStorage.setItem(projectID + 'taskDate' + taskCountUpdate, taskDateArray));
        JSON.stringify(localStorage.setItem(projectID + 'taskArea' + taskCountUpdate, taskAreaArray));
        JSON.stringify(localStorage.setItem(projectID + 'globalId' + taskCountUpdate, globalTaskCountUpdate));

        JSON.stringify(localStorage.setItem('globalTaskName' + globalTaskCountUpdate, taskNameArray));
        JSON.stringify(localStorage.setItem('globalTaskDate' + globalTaskCountUpdate, taskDateArray));
        JSON.stringify(localStorage.setItem('globalTaskArea' + globalTaskCountUpdate, taskAreaArray));
        JSON.stringify(localStorage.setItem('globalLocalId' + globalTaskCountUpdate, taskCountUpdate));
        JSON.stringify(localStorage.setItem('globalProjectId' + globalTaskCountUpdate, projectIdWithSpaces));

    }

}


export { createNewTask, closeTaskTag}