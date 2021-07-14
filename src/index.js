import PubSub from "pubsub-js";
import CreateTask from "./createTask.js";
import CreateProject from "./createProject.js";
import ProjectHolder from "./projectHolder.js";
import DynamicProjectHolder from "./dynamicTaskHolder.js";
import RenderPage from "./renderPage.js";

//PubSub functions
//Add all the PubSub.subscribe stuff here

//Render initial page elements
let renderPage = RenderPage;
renderPage();


//Cache DOM
let todayBtn = document.querySelector("#todayBtn");
let weekBtn = document.querySelector("#weekBtn");
let allBtn = document.querySelector("#allBtn");
let addProject = document.querySelector("#addProject");
let createForm = document.querySelector("#createForm");
let titleInput = document.querySelector("#titleInput");
let submitBtn = document.querySelector("#submit");
createForm.style.visibility = "hidden";



//Add event listeners to buttons
addProject.addEventListener("click", toggleCreateForm);




function toggleCreateForm() {
    let visibility = createForm.style.visibility;
    if (visibility == "hidden")
    {
        createForm.style.visibility = "visible";
        addProject.textContent = "X";
    }
    else 
    {
        titleInput.value = "";
        createForm.style.visibility = "hidden";
        addProject.textContent = "+";
    }
}

function test() {
    let testProject = CreateProject("testProject");
    let otherProject = CreateProject("otherProject");
    let anotherProject = CreateProject("anotherProject");
    let projectHolder = ProjectHolder();
    let dynamicProjectHolder = DynamicProjectHolder();
    
    let testTask = CreateTask("Second Task", "idk1", new Date(2021, 6, 25), "medium");
    let otherTask = CreateTask("First Task", "idk2", new Date(2021, 6, 13), "low");
    let anotherTask = CreateTask("Third Task", "idk2", new Date(2021, 6, 16), "high");
    let anotherNotherTask = CreateTask("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
    let testTask1 = CreateTask("Second Task", "idk1", new Date(2021, 6, 25), "medium");
    let otherTask1 = CreateTask("First Task", "idk2", new Date(2021, 6, 13), "low");
    let anotherTask1 = CreateTask("Third Task", "idk2", new Date(2021, 6, 16), "high");
    let anotherNotherTask1 = CreateTask("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
    let testTask2 = CreateTask("Second Task", "idk1", new Date(2021, 6, 25), "medium");
    let otherTask2 = CreateTask("First Task", "idk2", new Date(2021, 6, 13), "low");
    let anotherTask2 = CreateTask("Third Task", "idk2", new Date(2021, 6, 16), "high");
    let anotherNotherTask2 = CreateTask("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
    let miscTask = CreateTask("Second Task", "idk1", new Date(2021, 6, 25), "medium");
    let otherMiscTask = CreateTask("First Task", "idk2", new Date(2021, 6, 13), "low");
    let anotherMiscTask = CreateTask("Third Task", "idk2", new Date(2021, 6, 16), "high");
    let anotherNotherMiscTask = CreateTask("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
    
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
    
    let allProjectTasks = projectHolder.groupAllTasks();
    
    dynamicProjectHolder.addMiscTask(miscTask);
    dynamicProjectHolder.addMiscTask(otherMiscTask);
    dynamicProjectHolder.addMiscTask(anotherMiscTask);
    dynamicProjectHolder.addMiscTask(anotherNotherMiscTask);
    
    dynamicProjectHolder.createAllTasks(allProjectTasks);
    
    dynamicProjectHolder.sortAllByDate();
    dynamicProjectHolder.createTodayTasks();
    dynamicProjectHolder.createWeekTasks();
    dynamicProjectHolder.createLateTasks();
    
    console.log(dynamicProjectHolder.allTasks);
    console.log(dynamicProjectHolder.todayTasks);
    console.log(dynamicProjectHolder.weekTasks);
    console.log(dynamicProjectHolder.lateTasks);
}