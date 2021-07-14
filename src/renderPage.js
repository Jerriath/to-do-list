//This module will be used to render the basic page elements (header, side panel, etc.)

export default function() {

    //Cache DOM
    let body = document.querySelector("body");

    
    //-----Create header-----
    let header = document.createElement("header");
    header.classList.add("header");
    let titleHolder = document.createElement("div");
    titleHolder.classList.add("titleHolder");
    let title = document.createElement("h1");
    title.textContent = "To-Do List";
    titleHolder.appendChild(title);
    header.appendChild(titleHolder);


    //-----Create side panel-----
    let sidePanel = document.createElement("div");
    sidePanel.classList.add("sidePanel");
    //-Create dynamic project holder-
    let dynamicDiv = document.createElement("div");
    dynamicDiv.classList.add("projectDiv");
    let dynamicTitle = document.createElement("h2");
    dynamicTitle.textContent = "General: ";
    dynamicDiv.appendChild(dynamicTitle);
    let todayBtn = document.createElement("button");
    todayBtn.classList.add("projectButton");
    todayBtn.textContent = "Today";
    let weekBtn = document.createElement("button");
    weekBtn.classList.add("projectButton");
    weekBtn.textContent = "This Week";
    let allBtn = document.createElement("button");
    allBtn.classList.add("projectButton");
    allBtn.textContent = "All";
    dynamicDiv.appendChild(todayBtn);
    dynamicDiv.appendChild(weekBtn);
    dynamicDiv.appendChild(allBtn);

    //-Create normal project holder
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    let projectTitle = document.createElement("h2");
    projectTitle.textContent = "Projects: ";
    projectDiv.appendChild(projectTitle);
    let addProject = document.createElement("button");
    addProject.classList.add("projectButton");
    addProject.textContent = "+";
    addProject.style.textAlign = "center";
    addProject.style.background = "rgba(125, 125, 125, 0.3)";
    projectDiv.appendChild(addProject);

    sidePanel.appendChild(dynamicDiv);
    sidePanel.appendChild(projectDiv);

    //Append elements to body
    body.appendChild(header);
    body.appendChild(sidePanel);

}