import * as dom from './DOM';

function displayTargettedProject() {

    //DOM
    const headerName = document.querySelectorAll('.projectNameContainers');
    const sideBarName = document.querySelectorAll('.sideBarTags');

    sideBarName.forEach(sideBarName => {
        sideBarName.addEventListener('click', renderSideBarTask)
    });

    headerName.forEach(headerName => {
        headerName.addEventListener('click', renderProject)
    });

    sideBarName.forEach(sideBarName => {
        sideBarName.addEventListener('click', updateID)
    });

    headerName.forEach(headerName => {
        headerName.addEventListener('click', updateID)
    });
    
    function renderSideBarTask(e) {
        dom.headerText.innerHTML = e.target.id;
        dom.addTaskContainer.style.display = "none";
        highlightSelectedProject(e);
        //set active project folder
        localStorage.setItem('activeProject', e.target.id)
    }

    function renderProject(e) {
        dom.headerText.innerHTML = e.target.id;
        dom.addTaskContainer.style.display = "flex";
        highlightSelectedProject(e);
        //set active project folder
        if (localStorage.getItem('activeProject') === "Removed") {
            
        } else {
            localStorage.setItem('activeProject', e.target.id)
        }
    }

}


function highlightSelectedProject(e) {

    // DOM
    const selector = document.getElementById(e.target.id);
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
}

// function to update task button with the porjects id
function updateID(e) {
    
    const ID = e.target.id;

    dom.taskContainerTag.id = ID;
    dom.taskTagImg.id = ID;
    dom.taskTagText.id = ID;

}



export { displayTargettedProject }