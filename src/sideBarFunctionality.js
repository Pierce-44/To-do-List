import * as dom from './DOM';
import { displayTextArea } from './addExistingTasks';
import { addExistingTasks, renderTasks } from './addExistingTasks';

function sideBarFunctionality() {

    // hide add task button
    dom.addTaskContainer.style.display = "none";

    // display today tasks event listener
    dom.todayTasks.addEventListener('click' , displayTodayTasks);

    // display all tasks event listener
    dom.allTasks.addEventListener('click' , displayAllTasks);

    // display deleted tasks event listener
    dom.deletedTasks.addEventListener('click' , displayDeletedTasks);

    // display completed tasks event listener 
    dom.compeltedTasks.addEventListener('click' , displayCompletedTasks);

    // display flagged tasks event listener 
    dom.flaggedTasks.addEventListener('click' , displayFlaggedTasks);

}


function displayTodayTasks() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log("fire")

    dom.clearTasksDom();


    var count = localStorage.getItem('globalTaskCount')

    for (let i = 1; i <= count; i++) {

        const helper = dom.sideBarDom(i);

        if (helper.deleteCheck === "deleted" || helper.completedCheck === "completed" || helper.deleteCheck3 === "X") {
            
        } else if (helper.taskDate === today) {
            
            // render the tasks HTML
            dom.renderTasksDom(helper.taskNameHTML, i, helper.taskAreaHTML, helper.taskDate );

            // remove task images (flag, complete, bin)
            const remove = (sel) => document.querySelectorAll(sel).forEach(taskImg => taskImg.remove());
            remove(".taskImgDiv");
        
            // render new task images, restore task and permanently delete task
            dom.goToProjectImg(i);

            // move to project folder eventlistner
            const moveToProjectFolderImg = document.getElementById('restore' + i);
            moveToProjectFolderImg.addEventListener('click', goToProjectFolder);
            
        }
    }
    
    // show Task event listener
    var taskDivUpper = document.querySelectorAll('.taskDivUpperLeft');
    taskDivUpper.forEach(taskDivUpper => {
            taskDivUpper.addEventListener('click', displayTextArea);
    });
}


function displayAllTasks() {

    dom.clearTasksDom();

    var count = localStorage.getItem('globalTaskCount')
    
    for (let i = 1; i <= count; i++) {

        const helper = dom.sideBarDom(i);

        if (helper.deleteCheck === "deleted" || helper.completedCheck === "completed" || helper.deleteCheck3 === "X") {
            
        } else {
        // render the tasks HTML
        dom.renderTasksDom(helper.taskNameHTML, i, helper.taskAreaHTML, helper.taskDate );

        // remove task images (flag, complete, bin)
        const remove = (sel) => document.querySelectorAll(sel).forEach(taskImg => taskImg.remove());
        remove(".taskImgDiv");
        
        // render new task images, restore task and permanently delete task
        dom.goToProjectImg(i);

        // move to project folder eventlistner
        const moveToProjectFolderImg = document.getElementById('restore' + i);
        moveToProjectFolderImg.addEventListener('click', goToProjectFolder);

        }
    }

    // show Task event listener
    var taskDivUpper = document.querySelectorAll('.taskDivUpperLeft');
    taskDivUpper.forEach(taskDivUpper => {
            taskDivUpper.addEventListener('click', displayTextArea);
    });
}



function displayDeletedTasks() {

    dom.clearTasksDom();

    var count = localStorage.getItem('globalTaskCount')
    
    for (let i = 1; i <= count; i++) {

        const helper = dom.sideBarDom(i);

        if (helper.deleteCheck === "deleted" && helper.deleteCheck2 !== "X" && helper.deleteCheck3 !== "X") {
            // render the tasks HTML
            dom.renderTasksDom(helper.taskNameHTML, i, helper.taskAreaHTML, helper.taskDate );

            // remove task images (flag, complete, bin)
            const remove = (sel) => document.querySelectorAll(sel).forEach(taskImg => taskImg.remove());
            remove(".taskImgDiv");

            // render new task images, restore task and permanently delete task
            dom.deleteRestoreImgs(i);

            // restore task eventlistner
            const restoreTaskImg = document.getElementById('restore' + i);
            restoreTaskImg.addEventListener('click', restoreDeletedTask);

            // permanently delete task eventlistner
            const permDeleteImg = document.getElementById('permDelete' + i);
            permDeleteImg.addEventListener('click', permanentlyDelete);
        }
    }
    // show Task event listener
    var taskDivUpper = document.querySelectorAll('.taskDivUpperLeft');
    taskDivUpper.forEach(taskDivUpper => {
            taskDivUpper.addEventListener('click', displayTextArea);
    });
}


function displayCompletedTasks() {

    dom.clearTasksDom();

    var count = localStorage.getItem('globalTaskCount')
    
    for (let i = 1; i <= count; i++) {

        const helper = dom.sideBarDom(i);

        if (helper.completedCheck === "completed" && helper.deleteCheck2 !== "X" && helper.deleteCheck3 !== "X") {
            // render the tasks HTML
            dom.renderTasksDom(helper.taskNameHTML, i, helper.taskAreaHTML, helper.taskDate );

            const remove = (sel) => document.querySelectorAll(sel).forEach(taskImg => taskImg.remove());
            remove(".taskImgDiv");

            // render new task images, restore task and permanently delete task
            dom.deleteRestoreImgs(i);

            // un mark task as being completed
            const restoreTaskImg = document.getElementById('restore' + i);
            restoreTaskImg.addEventListener('click', restoreCompletedTask);

            // permanently delete task eventlistner
            const permDeleteImg = document.getElementById('permDelete' + i);
            permDeleteImg.addEventListener('click', permanentlyDelete);
            
        }
    }
    // show Task event listener
    var taskDivUpper = document.querySelectorAll('.taskDivUpperLeft');
    taskDivUpper.forEach(taskDivUpper => {
            taskDivUpper.addEventListener('click', displayTextArea);
    });
}


function displayFlaggedTasks() {

    dom.clearTasksDom();

    var count = localStorage.getItem('globalTaskCount')
    
    for (let i = 1; i <= count; i++) {

        const helper = dom.sideBarDom(i);

        if (helper.flaggedCheck === "flagged" && helper.deleteCheck !== "deleted" && helper.completedCheck !== "completed" & helper.deleteCheck3 !== "X") {
            // render the tasks HTML
            dom.renderTasksDom(helper.taskNameHTML, i, helper.taskAreaHTML, helper.taskDate );

            const remove = (sel) => document.querySelectorAll(sel).forEach(taskImg => taskImg.remove());
            remove(".taskImgDiv");

            // render new task un flag image
            dom.unFlagImg(i);

            // un mark task as being flagged
            const restoreTaskImg = document.getElementById('restore' + i);
            restoreTaskImg.addEventListener('click', unFlagTask);
        }
    }
    // show Task event listener
    var taskDivUpper = document.querySelectorAll('.taskDivUpperLeft');
    taskDivUpper.forEach(taskDivUpper => {
            taskDivUpper.addEventListener('click', displayTextArea);
    });
}





function restoreDeletedTask(e) {

    var globalNum = e.target.id.replace(/\D/g, "");

    var localId = localStorage.getItem('globalLocalId' + globalNum);
    var localProjectId = localStorage.getItem('globalProjectId' + globalNum);
    console.log(localProjectId.replace(/\s/g, ''))

    localStorage.setItem(localProjectId.replace(/\s/g, '') + "Deleted" + localId, "");
    localStorage.setItem("globalDeleted" + globalNum, "");

    var removeDiv = document.getElementById("taskDiv" + globalNum);
    removeDiv.remove();
}

function permanentlyDelete(e) {
    
    var globalNum = e.target.id.replace(/\D/g, "");
    localStorage.setItem("permanentlyDelete" + globalNum, "X");

    var removeDiv = document.getElementById("taskDiv" + globalNum);
    removeDiv.remove();
}

function restoreCompletedTask(e) {
    
    var globalNum = e.target.id.replace(/\D/g, "");
    var localId = localStorage.getItem('globalLocalId' + globalNum);
    var localProjectId = localStorage.getItem('globalProjectId' + globalNum);

    localStorage.setItem(localProjectId.replace(/\s/g, '') + "Completed" + localId, "");
    localStorage.setItem("globalCompleted" + globalNum, "");

    var removeDiv = document.getElementById("taskDiv" + globalNum);
    removeDiv.remove();
}

function unFlagTask(e) {
    
    var globalNum = e.target.id.replace(/\D/g, "");
    var localId = localStorage.getItem('globalLocalId' + globalNum);
    var localProjectId = localStorage.getItem('globalProjectId' + globalNum);

    localStorage.setItem(localProjectId.replace(/\s/g, '') + "Flagged" + localId, "");
    localStorage.setItem("globalFlagged" + globalNum, "");

    var removeDiv = document.getElementById("taskDiv" + globalNum);
    removeDiv.remove();

}

function goToProjectFolder(e) {
    var globalNum = e.target.id.replace(/\D/g, "");
    var localId = localStorage.getItem('globalLocalId' + globalNum);
    var localProjectId = localStorage.getItem('globalProjectId' + globalNum);

    console.log(globalNum)
    console.log(localId)
    console.log(localProjectId)

    // change header txt to equal project name 
    document.getElementById('headerText').innerHTML = localProjectId;

    // displayTargettedProject();
    const highlightProjectFolder = (function () {

        // DOM
        const selector = document.getElementById(localProjectId);
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

    renderTasks();
    dom.addTaskContainer.style.display = "flex";

}



export { sideBarFunctionality, displayTodayTasks, displayAllTasks, displayCompletedTasks, displayDeletedTasks, displayFlaggedTasks }