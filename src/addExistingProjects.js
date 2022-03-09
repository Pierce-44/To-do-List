import * as dom from './DOM';
import { displayTargettedProject }   from './displayProject';

function addExistingProjects() {

    // set "today" tag to be the default folder on load
    // dom.Today.style.backgroundColor = "#3d90e36c";

    // this checks local storage for existing projects
    var array = [localStorage.getItem('projects')];

    // repove the first empty array element
    var projectArray = array.toString().split(',');
    projectArray.shift();
    
    // copy the project array so that it can be used separately (other array is needed for the loop count)
    var projectArrayCopy = projectArray.map((x) => x);

    // count through the project array and implement it back into the HTML 
    for (let i = 1; i <= projectArray.length; i++) {

        var projectName = projectArrayCopy.shift(1);

        // DOM
        const text = document.createElement('p');
        const div = document.createElement('div');
        const img = document.createElement('img');

        dom.addProject.appendChild(div).className = "projectNameContainers";
        div.id = projectName;
        div.appendChild(img).src = "images/checkbox-multiple-blank-circle-outline.png"
        img.className = "projectIcon";
        img.id = projectName;
        div.appendChild(text).innerHTML = projectName;
        text.id = projectName;
        text.className = "projectTextName";

    }

    displayTargettedProject();

}

export { addExistingProjects }