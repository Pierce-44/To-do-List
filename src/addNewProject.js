import * as dom from './DOM';

function renderProjectTagHTML() {
    
    // render project tag eventListener
    dom.addProjectBtn.addEventListener('click', render)
    
    // render project tag HTML
    function render() {

        dom.projectTagItemsDOM();

        // add new project functionality
        dom.btn.addEventListener('click', addNewProject);

        // close button functionality
        dom.img.addEventListener('click', closeProjectTag);

    }
}


function closeProjectTag() {
    // DOM
    var container = document.querySelector('.projectTagPage');

    container.remove();
}


function addNewProject() {

    // DOM 
    const inputValue = document.querySelector('.inputName');

    var projectArray = [localStorage.getItem('projects')];

    var submitData = (function () {
        
        var projectName = inputValue.value;

        if (projectName === "") {
            
        } else {
            // add the new project name to the project array
            projectArray.push(projectName);

            // add the updated project array to localStorage
            JSON.stringify(localStorage.setItem('projects', projectArray))

            // global project count
            var globalProjectCount = localStorage.getItem('globalProjectCount');

            if (globalProjectCount === null) {
                localStorage.setItem('globalProjectCount', 1)
            }
            if (globalProjectCount !== null) {
                localStorage.setItem('globalProjectCount', ++globalProjectCount)
            }

            var globalProjectUpdate = localStorage.getItem('globalProjectCount');

            localStorage.setItem('project' + globalProjectUpdate , projectName);
        }
    })();
}



export { renderProjectTagHTML }