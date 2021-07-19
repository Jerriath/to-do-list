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
    dynamicDiv.id = "dynamicDiv";
    let dynamicTitle = document.createElement("h2");
    dynamicTitle.textContent = "General: ";
    dynamicDiv.appendChild(dynamicTitle);
    let todayBtn = document.createElement("button");
    todayBtn.classList.add("projectButton");
    todayBtn.textContent = "Today";
    todayBtn.id = "todayBtn";
    let weekBtn = document.createElement("button");
    weekBtn.classList.add("projectButton");
    weekBtn.textContent = "This Week";
    weekBtn.id = "weekBtn";
    let allBtn = document.createElement("button");
    allBtn.classList.add("projectButton");
    allBtn.textContent = "All";
    allBtn.id = "allBtn";
    let miscBtn = document.createElement("button");
    miscBtn.classList.add("projectButton");
    miscBtn.textContent = "Misc";
    miscBtn.id = "miscBtn";
    let lateBtn = document.createElement("button");
    lateBtn.classList.add("projectButton");
    lateBtn.textContent = "Late";
    lateBtn.id = "lateBtn";
    dynamicDiv.appendChild(allBtn);
    dynamicDiv.appendChild(todayBtn);
    dynamicDiv.appendChild(weekBtn);
    dynamicDiv.appendChild(miscBtn);
    dynamicDiv.appendChild(lateBtn);
    allBtn.classList.add("selected");
    
    //-Create normal project holder
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    projectDiv.id = "projectDiv";
    let projectTitle = document.createElement("h2");
    projectTitle.textContent = "Projects: ";
    projectDiv.appendChild(projectTitle);
    let addProject = document.createElement("button");
    addProject.classList.add("projectButton");
    addProject.textContent = "+";
    addProject.style.textAlign = "center";
    addProject.style.background = "rgba(125, 125, 125, 0.3)";
    addProject.id = "addProject";
    addProject.style.width = "100%";

    //-Create the addProject form-
    let createForm = document.createElement("div");
    createForm.classList.add("createForm");
    createForm.id = "createForm";
    let formTitle = document.createElement("h2");
    formTitle.textContent = "New Project";
    formTitle.style.margin = 0;
    formTitle.style.textAlign = "center";
    let titleLabel = document.createElement("label");
    titleLabel.textContent = "Project Name: ";
    titleLabel.style.fontFamily = "MyFont";
    titleLabel.style.position = "absolute";
    titleLabel.style.left = "10px";
    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.classList.add("titleInput");
    titleInput.id = "titleInput";
    let submitBtn = document.createElement("button");
    submitBtn.classList.add("submitBtn");
    submitBtn.textContent = "Create";
    submitBtn.type = "button";
    submitBtn.id = "submit";
    let addProjectDiv = document.createElement("div");
    addProjectDiv.appendChild(addProject);
    addProjectDiv.appendChild(createForm);
    addProjectDiv.classList.add("addProjectDiv");
    addProjectDiv.id = "addProjectDiv";

    //Append createForm elements
    createForm.appendChild(formTitle);
    createForm.appendChild(titleLabel);
    createForm.appendChild(titleInput);
    createForm.appendChild(submitBtn);
    projectDiv.appendChild(addProjectDiv);

    //Append to sidePanel
    sidePanel.appendChild(dynamicDiv);
    sidePanel.appendChild(projectDiv);


    //Append elements to body
    body.appendChild(header);
    body.appendChild(sidePanel);

}