import PubSub from "pubsub-js";
import CreateTask from "./createTask.js";
import CreateProject from "./createProject.js";
import ProjectHolder from "./projectHolder.js";
import DynamicProjectHolder from "./dynamicTaskHolder.js";
import RenderPage from "./renderPage.js";
import { createDisplay, getTitle, getTaskArray } from "./createDisplay.js";

//PubSub functions
//Add all the PubSub.subscribe stuff here

//Initialized projectHolders
let projectHolder = ProjectHolder();
let dynamicProjectHolder = DynamicProjectHolder();
test();

//Render initial page elements
RenderPage();
recreateDynamicArrays();

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
createProjectDOM(); //Adds the projects in the project holder to the sidePanel
unselect();
allBtn.classList.add("selected");

//Display All tasks on boot
let allTasks = dynamicProjectHolder.allTasks;
createDisplay("All", allTasks);
reattachTaskListener();

//Add event listeners to projectButtons
todayBtn.addEventListener("click", function(e){
    selectProject(e);
    let title = getTitle(e);
    let taskArray = getTaskArray(title, dynamicProjectHolder, projectHolder);
    createDisplay(title, taskArray);
    reattachTaskListener();
});
weekBtn.addEventListener("click", function(e){
    selectProject(e);
    let title = getTitle(e);
    let taskArray = getTaskArray(title, dynamicProjectHolder, projectHolder);
    createDisplay(title, taskArray);
    reattachTaskListener();
});
allBtn.addEventListener("click", function(e){
    selectProject(e);
    let title = getTitle(e);
    let taskArray = getTaskArray(title, dynamicProjectHolder, projectHolder);
    createDisplay(title, taskArray);
    reattachTaskListener();
});
miscBtn.addEventListener("click", function(e){
    selectProject(e);
    let title = getTitle(e);
    let taskArray = getTaskArray(title, dynamicProjectHolder, projectHolder);
    createDisplay(title, taskArray);
    reattachTaskListener();
});
lateBtn.addEventListener("click", function(e){
    selectProject(e);
    let title = getTitle(e);
    let taskArray = getTaskArray(title, dynamicProjectHolder, projectHolder);
    createDisplay(title, taskArray);
    reattachTaskListener();
});
addProject.addEventListener("click", toggleCreateForm);
submitBtn.addEventListener("click", initProject);
titleInput.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        initProject();
    }
});



//-----Functions deal with the creation of a new task' Must update dynamic PH and reattach the event listener for creating new tasks-----

//Function to create a new task and adds it to the appropriate project
function createNewTask(projectTitle) {
    //Cache DOM for displayArea
    let taskTitle = document.querySelector("#taskTitle").value;
    let taskDate = document.querySelector("#taskDate").value.split("-"); //Returns date in yyyy/mm/dd string format; splitting into array and then making date instance
    if (taskDate == "") {
        taskDate = new Date();
    }
    else {
    taskDate = new Date(taskDate[0], taskDate[1] - 1, taskDate[2]);
    }
    let taskPriority = document.querySelector("#taskPriority").value;
    console.log(taskPriority);
    document.querySelector("#taskTitle").value = "";
    document.querySelector("#taskDate").value = "";
    document.querySelector("#taskPriority").value = "";
    let newTask = CreateTask(taskTitle, taskDate, taskPriority);
    //Find the project in our project holders to add the task
    if (projectTitle == "All" || projectTitle == "Today" || projectTitle == "This Week" || projectTitle == "Misc") {
        dynamicProjectHolder.addMiscTask(newTask);
    }
    else {
        let numOfProj = projectHolder.getArrayLength();
        for (let i = 0; i < numOfProj; i++) {
            if (projectTitle == projectHolder.projectArray[i].title) {
                projectHolder.projectArray[i].addTask(newTask);
            }
        }
    }
    recreateDynamicArrays();
    let currentArray = getTaskArray(projectTitle, dynamicProjectHolder, projectHolder);
    createDisplay(projectTitle, currentArray);
    reattachTaskListener();
}

//Function that reattaches the event listener to create tasks; needed because whenever the display is recreated, the event listener is lost
function reattachTaskListener() {
    let taskSubmit = document.querySelector("#taskSubmit");
    taskSubmit.addEventListener("click", function() {
        let currentTitle = document.querySelector("#titleText").textContent;
        createNewTask(currentTitle);
    });
}

//Function for recreating dynamic arrays; called after any new task is added or any pre-existing task is altered
function recreateDynamicArrays() {
    dynamicProjectHolder.createAllTasks(projectHolder.groupAllTasks());
    dynamicProjectHolder.sortAllByDate();
    dynamicProjectHolder.createTodayTasks();
    dynamicProjectHolder.createWeekTasks();
    dynamicProjectHolder.createLateTasks();
}



//-----These 2 functions deal with the specifics behind having a propject selected (highlighted)-----

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



//-----Section deals with the project holder on the sidePanel-----

//Toggles the opacity of the createForm 
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

//Begins the function call stack that will add a new project to sidePanel and select it
function initProject() {
    let title = titleInput.value;
    let newProject = CreateProject(title);
    projectHolder.addProject(newProject);
    createProjectDOM();
    toggleCreateForm();
}

function createProjectDOM() {
    while(projectDiv.childNodes.length != 2) { //Removes all the projects from the sidebar to recreate them all from projectHolder
        projectDiv.childNodes[1].remove();
    }
    let numOfProj = projectHolder.getArrayLength();
    for (let i = 0; i < numOfProj; i++) {
        let currentProject = projectHolder.projectArray[i];

        //Create the project button element
        let currentButton = document.createElement("button");
        currentButton.classList.add("projectButton");
        currentButton.textContent = spliceString(currentProject.title, 15); //Cuts the project title down to 15 characters and adds "..." at the end
        currentButton.addEventListener("click", function(e){
            selectProject(e);
            let title = getTitle(e);
            let taskArray = getTaskArray(title, dynamicProjectHolder, projectHolder);
            createDisplay(title, taskArray);
            reattachTaskListener();
        });
        projectDiv.insertBefore(currentButton, addProjectDiv);
        if (i == numOfProj - 1) {
            unselect();
            currentButton.classList.add("selected");
            let title = currentProject.title;
            let taskArray = getTaskArray(title, dynamicProjectHolder, projectHolder);
            createDisplay(title, taskArray);
            reattachTaskListener();
        }
    }
}

//Function for altering string length; shortens string and adds ""..." on the end if it is longer then the input length
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
}