import * as dom from './DOM';
import { displayTargettedProject }   from './displayProject';
import { deleteProject } from './deleteTask';

function addExistingProjects() {

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

        // const projectCount = localStorage.getItem(globalProjectCount)
        const projectDeleteCheck = localStorage.getItem("project" + i)

        if (projectDeleteCheck === "X") {

        } else {

            dom.renderProjectNameTag(projectName, deleteProject, i);

        }

    }

    displayTargettedProject();

}

export { addExistingProjects }