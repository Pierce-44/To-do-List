

// render project HTML tag 
export var addProjectBtn = document.querySelector('.addProjects');
export var addProject = document.querySelector('.projects');
export var body = document.body;

export var div = document.createElement('div');
export var div1 = document.createElement('div');
export var div2 = document.createElement('div');
export var div3 = document.createElement('form');
export var div4 = document.createElement('form');
export var div5 = document.createElement('div');
export var div6 = document.createElement('div');
export var div7 = document.createElement('div');
export var div8 = document.createElement('div');
export var div9 = document.createElement('form');
export var div10 = document.createElement('div');
export var div11 = document.createElement('div');
export var div12 = document.createElement('div');
export var div13 = document.createElement('div');
export var div14 = document.createElement('div');


export var p = document.createElement('p');
export var p1 = document.createElement('p');
export var p2 = document.createElement('p');

export var label = document.createElement('label');
export var label1 = document.createElement('label');
export var label2 = document.createElement('label');

export var input = document.createElement('input');
export var input1 = document.createElement('input');
export var input2 = document.createElement('input');

export var textArea = document.createElement('textarea');

export var img = document.createElement('img');
export var img1 = document.createElement('img');
export var img2 = document.createElement('img');


export var btn = document.createElement('button');
export var btn1 = document.createElement('button');


// light and dark modes
export var darkLightImg = document.querySelector('.darkLightMode');
export var mainContainer = document.querySelector('.mainContainer');
export var sideBarUpper = document.querySelector('.sideBarUpper');
export var sideBar = document.querySelector('.sideBarContainer');
export var addTaskContainer = document.querySelector('.addTaskContainer');

// render selected header
export var header = document.querySelector('.header');
export var headerText = document.querySelector('#headerText');
export var Today = document.querySelector('#Today');

// render task
export var taskContainerTag = document.querySelector('.addTaskContainer');
export var taskTagImg = document.querySelector('.addTaskTagImg');
export var taskTagText = document.querySelector('.addTaskTagText');

// side bar functionality
export var allTasks = document.getElementById('All Tasks');
export var deletedTasks = document.getElementById('Deleted');
export var compeltedTasks = document.getElementById('Completed');
export var flaggedTasks = document.getElementById('Flagged');
export var todayTasks = document.getElementById('Today');




// DOM helper functions 

export function projectTagItemsDOM() {
    body.appendChild(div).className = "projectTagPage";
    div.appendChild(div1).className = "projectTagContainer";
    div1.appendChild(div2).className = "projectTagUpper"
    div1.appendChild(div3).className = "projectInputContainer";


    div2.appendChild(p).className = "newProject";
    div2.appendChild(img).className = "close";
    div3.appendChild(label).className = "name";
    div3.appendChild(input).className = "inputName";
    div3.appendChild(btn).className = "addProjectBtn";

    img.src = "images/close.png";

    p.innerHTML = "New Project";
    label.innerHTML = "Name:";
    btn.innerHTML = "Add Project";
    btn.type = "submit";
    input.required = true;

    // dark mode
    if (localStorage.getItem('darkMode') === "enabled") {
        div1.id = "darkModeTag";
        input.id = "darkModeInput";
        div2.style.borderColor = "black";
        btn.dataset.id = "darkMode";
    } else {
        div1.id = "lightModeTag";
        input.id = "lightModeInput";
        div2.style.borderColor = "grey";
        btn.dataset.id = "lightMode";
    }
};

export function taskTagItemsDOM(editTaskCheck) {
    body.appendChild(div5).className = "taskTagPage";
    div5.appendChild(div6).className = "taskTagContainer";
    div6.appendChild(div7).className = "upperTagContainer";
    div6.appendChild(div8).className = "lowerTagContainer";
    div8.appendChild(div9).className = "formContainer";
    div9.appendChild(div12).className = "upperForms";
    div9.appendChild(div14).className = "textAreaForm";
    div12.appendChild(div10).className = "taskFormDiv";
    div9.appendChild(btn1).className = "addTaskBtn";

    
    div7.appendChild(p2).className = "newTask";
    div7.appendChild(img2).className = "close";
    div10.appendChild(label1).className = "name";
    div10.appendChild(input1).className = "taskInputName";
    div11.appendChild(label2).className = "labelDate";
    div11.appendChild(input2).className = "inputDate";
    div12.appendChild(div11).className = "dueDate";
    div14.appendChild(textArea).className = "textArea";

    p2.innerHTML = "New Task";
    label1.innerHTML = "Name:";
    label2.innerHTML = "Due Date";
    input2.type = "date";
    img2.src = "images/close.png";
    if (editTaskCheck.replace(/[0-9]/g, '') === 'editID') {
        btn1.innerHTML = "Save Changes";
    } else {
        btn1.innerHTML = "Add Task";
    }
    btn1.type = "submit";
    input1.required = true;
    input2.required = true;
    textArea.required = true;


    // dark mode 
    if (localStorage.getItem('darkMode') === "enabled") {
        div6.id = "darkModeTag";
        input1.id = "darkModeInput";
        input2.id = "darkModeInput";
        textArea.id = "darkModeArea";
        div7.style.borderColor = "black";
        btn1.dataset.id = "darkMode";
    } else {
        div6.id = "lightModeTag";
        input1.id = "lightModeInput";
        input2.id = "lightModeInput";
        textArea.id = "lightModeArea";
        div7.style.borderColor = "grey";
        btn1.dataset.id = "lightMode";
    }
}

export function clearTasksDom() {

    var container = document.querySelector('.taskContainer');
    var divT = document.createElement('div')
    var parentDiv = document.querySelector('.mainContainer');
    var insert = document.querySelector('.addTaskContainer');

    container.remove();

    parentDiv.insertBefore(divT, insert);
    divT.className = "taskContainer";
}



export function renderTasksDom(taskNameHTML, i, taskAreaHTML, taskDate ) {
    var projectName = document.getElementById('headerText').innerHTML.replace(/\s/g, "");
    var taskContainerBody = document.querySelector('.taskContainer');
    var div = document.createElement('div');
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    var div5 = document.createElement('div');
    var div6 = document.createElement('div');
    var p = document.createElement('p');
    var p1 = document.createElement('p');
    var img = document.createElement('img');
    var img1 = document.createElement('img');
    var img2 = document.createElement('img');
    var img3 = document.createElement('img');
    var img4 = document.createElement('img');
    
    

    taskContainerBody.appendChild(div).appendChild(div1);
    div3.appendChild(div5);
    div5.appendChild(p1);
    div3.appendChild(div6);
    div1.appendChild(div4);
    div.appendChild(div3);
    div4.appendChild(img3);
    div4.appendChild(p).innerHTML = taskNameHTML;
    div1.appendChild(div2).className = "taskImgDiv";
    div2.appendChild(img).className = "taskImg";
    div2.appendChild(img1).className = "taskImg";
    div2.appendChild(img2).className = "taskImg";
    div5.appendChild(img4).className = "editImg";


    div1.className = "taskDivUpper";
    div1.id = "taskDivUpper" + i;
    p.id = "taskDivUpper" + i;
    div4.id = "taskDivUpper" + i;
    img3.id = "taskDivUpper" + i;
    div4.className = "taskDivUpperLeft"
    div3.className = "taskDivLower";
    div.className = "taskDiv";
    div.id = "taskDiv" + i;
    div6.innerHTML = taskAreaHTML;
    div6.className = "taskAreaDiv"
    div6.id = "displayDate" + i;
    div5.id = "displayText" + i;
    div5.style.display = "none";
    div6.style.display = "none";
    img.src = "images/flag.png";
    img.id = "flaggedID" + i;
    img.title = "Flag Task";
    img1.src = "images/check-all.png";
    img1.id = "completeID" + i;
    img1.title = "Mark as Completed"
    img2.src = "images/delete-empty.png";
    img2.id = "ID" + i;
    img2.title = "Delete Task"
    img3.src = "images/checkbox-multiple-blank-circle.png"
    img4.src = "images/file-edit.png";
    img4.id = "editID" + i;
    img4.title = "Edit Task";
    p1.innerHTML = "<b>Due Date:</b> " + taskDate;

    if (localStorage.getItem(projectName + "Flagged" + i) === "flagged") {
        img.src = "images/flag.png";
    }
    if (localStorage.getItem(projectName + "Flagged" + i) !== "flagged") {      
        img.src = "images/flag-outline.png";
    }

    // add global count id to HTML
    var globalCount = localStorage.getItem('globalTaskCount');

    if (div.id === null) {
        div.id = globalCount; 
    }   
}


export function sideBarDom(i) {
    var taskNameHTML = localStorage.getItem('globalTaskName' + i).substring(1);
    var taskAreaHTML = localStorage.getItem('globalTaskArea' + i).substring(1);
    var taskDate = localStorage.getItem('globalTaskDate' + i).substring(1);
    var deleteCheck = localStorage.getItem('globalDeleted' + i);
    var deleteCheck2 = localStorage.getItem('permanentlyDelete' + i);
    var deleteCheck3 = localStorage.getItem('globalTaskName' + i);  
    var completedCheck = localStorage.getItem('globalCompleted' + i);
    var flaggedCheck = localStorage.getItem('globalFlagged' + i);


    return {taskNameHTML, taskAreaHTML, taskDate, deleteCheck, completedCheck, flaggedCheck, deleteCheck2, deleteCheck3}
}


export function deleteRestoreImgs(i) {
    
    var taskDivUpper = document.querySelector('#taskDivUpper' + i);
    var div = document.createElement('div');
    var img = document.createElement('img');
    var img2 = document.createElement('img');

    taskDivUpper.appendChild(div).className = "deleteRestoreDiv";
    div.appendChild(img);
    div.appendChild(img2);

    img.src = 'images/file-restore.png'
    img2.src = 'images/delete-alert.png'
    img.className = "taskImg";
    img.id = "restore" + i ;
    img2.className = "taskImg";
    img2.id = "permDelete" + i

    img.title = "Restore Task";
    img2.title = "Permanently Delete Task"
}

export function unFlagImg(i) {
    
    var taskDivUpper = document.querySelector('#taskDivUpper' + i);
    var div = document.createElement('div');
    var img = document.createElement('img');

    taskDivUpper.appendChild(div).className = "deleteRestoreDiv";
    div.appendChild(img);

    img.src = 'images/flag-off.png'
    img.className = "taskImg";
    img.title = "Unflag Task";
    img.id = "restore" + i ;
}

export function goToProjectImg(i) {
    var taskDivUpper = document.querySelector('#taskDivUpper' + i);
    var div = document.createElement('div');
    var img = document.createElement('img');

    taskDivUpper.appendChild(div).className = "deleteRestoreDiv";
    div.appendChild(img);

    img.src = 'images/folder-move-outline.png'
    img.className = "taskImg";
    img.id = "restore" + i ;
    img.title = "Go To Project";
}

export function renderProjectNameTag (projectName, deleteProject, i ) {
    const text = document.createElement('p');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const img2 = document.createElement('img');
    const addProject = document.querySelector('.projects');

    addProject.appendChild(div).className = "projectNameContainers";
    div.id = projectName;
    div.appendChild(img).src = "images/checkbox-multiple-blank-circle-outline.png"
    img.className = "projectIcon";
    img.id = projectName;
    div.appendChild(text).innerHTML = projectName;
    text.id = projectName;
    text.className = "projectTextName";
    div.appendChild(img2).src = "images/close-project.png";
    img2.id = projectName;
    img2.className = "deleteProjectImg";
    img2.setAttribute('data-id', i);

    // event listner to delete project and its content
    img2.addEventListener('click', deleteProject)

}