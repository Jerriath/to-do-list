import PubSub from "pubsub-js";
import CreateTask from "./createTask.js";
import CreateProject from "./createProject.js";
import ProjectHolder from "./projectHolder.js";
import DynamicProjectHolder from "./dynamicTaskHolder.js";
import RenderPage from "./renderPage.js";
import { createDisplay, getTitle } from "./createDisplay.js";

//PubSub functions
//Add all the PubSub.subscribe stuff here

//Initialized projectHolders
let projectHolder = ProjectHolder();
let dynamicProjectHolder = DynamicProjectHolder();
test();
dynamicProjectHolder.createAllTasks(projectHolder.groupAllTasks());

//Render initial page elements
RenderPage();
let allTasks = dynamicProjectHolder.allTasks;
createDisplay("All", allTasks);



//Cache DOM for sidePanel
let todayBtn = document.querySelector("#todayBtn");
let weekBtn = document.querySelector("#weekBtn");
let allBtn = document.querySelector("#allBtn");
let miscBtn = document.querySelector("#miscBtn");
let lateBtn = document.querySelector("#lateBtn");
let addProject = document.querySelector("#addProject");
let createForm = document.querySelector("#createForm");
let projectDiv = document.querySelector("#projectDiv");
let dynamicDiv = document.querySelector("#dynamicDiv");
let titleInput = document.querySelector("#titleInput");
let submitBtn = document.querySelector("#submit");
createForm.style.visibility = "hidden";
createForm.style.opacity = 0;

//Add event listeners to addProject button
todayBtn.addEventListener("click", function(e){selectProject(e);});
weekBtn.addEventListener("click", function(e){selectProject(e);});
allBtn.addEventListener("click", function(e){selectProject(e);});
miscBtn.addEventListener("click", function(e){selectProject(e);});
lateBtn.addEventListener("click", function(e){selectProject(e);});
addProject.addEventListener("click", toggleCreateForm);
submitBtn.addEventListener("click", initProject);
titleInput.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        initProject();
    }
});

//Add event listeners to be able to create Tasks


//Function to create a new task
function createNewTask(projectTitle) {
    //Cache DOM for displayArea
    let taskTitle = document.querySelector("#taskTitle");
    let taskDate = document.querySelector("#taskDate");
    let taskPriority = document.querySelector("#taskPriority");
    let newTask = CreateTask(taskTitle, taskDate, taskPriority);
    //Find the project in our project holders to add the task
    if (projectTitle == "All" || projectTitle == "Today" || projectTitle == "This Week" || projectTitle == "Misc") {
        dynamicProjectHolder.addMiscTask(newTask);
    }
    else {
        let numOfProj = projectHolder.getArrayLength;
        for (let i = 0; i < numOfProj; i++) {
            if (projectTitle == projectHolder.projectArray[i].title) {
                projectHolder.projectArray[i].addTask(newTask);
            }
        }
    }
}

//Function to highlight the project that is currently selected
function selectProject(e) {
    unselect();
    e.target.classList.add("selected");
    console.log(e);
}

//Function that unselects all projects; runs before every new selectProject call
function unselect() {
    for (let i = 0; i < dynamicDiv.childNodes.length; i ++) {
        if (dynamicDiv.childNodes[i].classList.length > 1)
        {
            dynamicDiv.childNodes[i].classList.remove("selected");
        }
    }
    for (let i = 0; i < projectDiv.childNodes.length; i ++) {
        if (projectDiv.childNodes[i].classList.length > 1)
        {
            projectDiv.childNodes[i].classList.remove("selected");
        }
    }
}

function toggleCreateForm() {
    let visibility = createForm.style.visibility;
    if (visibility == "hidden")
    {
        createForm.style.visibility = "visible";
        createForm.style.opacity = 1;
        addProject.textContent = "X";
    }
    else 
    {
        titleInput.value = "";
        createForm.style.opacity = 0;
        window.setTimeout(function(){createForm.style.visibility = "hidden"}, 200);
        addProject.textContent = "+";
    }
}

function initProject() {
    let title = titleInput.value;
    let newProject = CreateProject(title);
    projectHolder.addProject(newProject);
    createProjectDOM();
    toggleCreateForm();
}

function createProjectDOM() {
    while(projectDiv.childNodes.length != 2) {
        projectDiv.childNodes[1].remove();
    }
    let numOfProj = projectHolder.getArrayLength();
    for (let i = 0; i < numOfProj; i++) {
        let currentProject = projectHolder.projectArray[i];

        //Create the project button element
        let currentButton = document.createElement("button");
        currentButton.classList.add("projectButton");
        currentButton.textContent = currentProject.title;
        currentButton.addEventListener("click", function(e){
            selectProject(e);
        });
        projectDiv.insertBefore(currentButton, addProjectDiv);
        if (i == numOfProj - 1) {
            unselect();
            currentButton.classList.add("selected");
        }
    }
}

function spliceString(string, length) {
    if (string.length > length) {nodelist
        string = string.substring(0, length);
        string = string + "...";
        return string;
    }
    else {
        return string;
    }
}

function test() {
    let testProject = CreateProject("testProject");
    let otherProject = CreateProject("otherProject");
    let anotherProject = CreateProject("anotherProject");
    
    let testTask = CreateTask("Second Task", new Date(2021, 6, 25), "medium");
    let otherTask = CreateTask("First Task", new Date(2021, 6, 13), "low");
    let anotherTask = CreateTask("Third Task", new Date(2021, 6, 16), "high");
    let anotherNotherTask = CreateTask("Fourth Task", new Date(2021, 6, 2), "low");
    let testTask1 = CreateTask("Second Task", new Date(2021, 6, 25), "medium");
    let otherTask1 = CreateTask("First Task", new Date(2021, 6, 13), "low");
    let anotherTask1 = CreateTask("Third Task", new Date(2021, 6, 16), "high");
    let anotherNotherTask1 = CreateTask("Fourth Task", new Date(2021, 6, 2), "low");
    let testTask2 = CreateTask("Second Task", new Date(2021, 6, 25), "medium");
    let otherTask2 = CreateTask("First Task", new Date(2021, 6, 13), "low");
    let anotherTask2 = CreateTask("Third Task", new Date(2021, 6, 16), "high");
    let anotherNotherTask2 = CreateTask("Fourth Task", new Date(2021, 6, 2), "low");
    let miscTask = CreateTask("Second Task", new Date(2021, 6, 25), "medium");
    let otherMiscTask = CreateTask("First Task", new Date(2021, 6, 13), "low");
    let anotherMiscTask = CreateTask("Third Task", new Date(2021, 6, 16), "high");
    let anotherNotherMiscTask = CreateTask("Fourth Task", new Date(2021, 6, 2), "low");
    
    testProject.addTask(testTask);
    testProject.addTask(otherTask);
    testProject.addTask(anotherTask);
    testProject.addTask(anotherNotherTask);
    otherProject.addTask(testTask1);
    otherProject.addTask(otherTask1);
    otherProject.addTask(anotherTask1);
    otherProject.addTask(anotherNotherTask1);
    anotherProject.addTask(testTask2);
    anotherProject.addTask(otherTask2);
    anotherProject.addTask(anotherTask2);
    anotherProject.addTask(anotherNotherTask2);
    
    projectHolder.addProject(testProject);
    projectHolder.addProject(otherProject);
    projectHolder.addProject(anotherProject);
    
    dynamicProjectHolder.addMiscTask(miscTask);
    dynamicProjectHolder.addMiscTask(otherMiscTask);
    dynamicProjectHolder.addMiscTask(anotherMiscTask);
    dynamicProjectHolder.addMiscTask(anotherNotherMiscTask);
    
    
    dynamicProjectHolder.sortAllByDate();
    dynamicProjectHolder.createTodayTasks();
    dynamicProjectHolder.createWeekTasks();
    dynamicProjectHolder.createLateTasks();
    
    console.log(dynamicProjectHolder.allTasks);
    console.log(dynamicProjectHolder.todayTasks);
    console.log(dynamicProjectHolder.weekTasks);
    console.log(dynamicProjectHolder.lateTasks);
}