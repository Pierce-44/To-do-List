import * as dom from './DOM';


function pageColorTheme() {
    
    var darkMode = localStorage.getItem('darkMode');

    // if dark mode was previously enabled render dark mode
    if (darkMode === "enabled") {
        renderDarkMode();
    }

    // if light mode was previously enabled render light mode
    if (darkMode === "disabled") {
        renderLightMode();
    }

    function render() {

        // first time loading page, default is light mode, therefore first click will activate dark mode
        if (darkMode === null) {
            renderDarkMode();
            darkMode = 'enabled';
        }

        // click will activate dark mode
        else if (darkMode === "disabled") {
            renderDarkMode();
            darkMode = 'enabled';
        }

        // click will activate light mode
        else {
            renderLightMode();
            darkMode = 'disabled';
        }   
    }

    dom.darkLightImg.addEventListener('click', render);

}

function renderDarkMode() {
    dom.sideBar.style.backgroundColor = "#1d1d1d";
    dom.sideBar.style.borderColor = "black";
    dom.body.style.color = "white";
    dom.sideBarUpper.style.borderColor = "black";
    dom.mainContainer.style.backgroundColor = "#313131";
    dom.darkLightImg.src = "images/dark-mode.png";
    dom.addProjectBtn.id = "darkMode";
    dom.addTaskContainer.setAttribute('data-id', "darkMode2");

    localStorage.setItem('darkMode', 'enabled');
}

function renderLightMode() {
    dom.sideBar.style.backgroundColor = "rgb(243, 243, 243)";
    dom.sideBar.style.borderColor = "rgb(196, 195, 195)";
    dom.body.style.color = "black";
    dom.sideBarUpper.style.borderColor = "rgb(196, 195, 195)";
    dom.mainContainer.style.backgroundColor = "white";
    dom.darkLightImg.src = "images/light-mode.png";
    dom.addProjectBtn.id = "lightMode";
    dom.addTaskContainer.setAttribute('data-id', "lightMode2");

    localStorage.setItem('darkMode', 'disabled');
}

export { pageColorTheme }