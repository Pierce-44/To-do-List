import { renderProjectTagHTML} from './addNewProject';
import { pageColorTheme} from './lighDarkMode';
import { addExistingProjects } from './addExistingProjects';
import { createNewTask } from './addNewTask';
import { addExistingTasks } from './addExistingTasks';
import { sideBarFunctionality } from './sideBarFunctionality';
import { loadActiveProject } from './deleteTask';
import * as dom from './DOM';

var loadPageFunctionality = (function () {

    renderProjectTagHTML();
    pageColorTheme();
    addExistingProjects();
    createNewTask();
    addExistingTasks();
    sideBarFunctionality();
    loadActiveProject();

})();


