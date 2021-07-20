//This module will be used to change only the task display area of the page
import { format } from "date-fns";

//Function for creating the initial displayArea upon first clicking onto a new project
export function createDisplay(title, array) {

    //Cache DOM
    let displayArea = document.querySelector("#displayArea");

    clearDisplay();

    //Recreate projectHeader and taskHolder
    let projectHeader = document.createElement("div");
    let taskHolder = document.createElement("div");
    projectHeader.classList.add("projectHeader");
    taskHolder.classList.add("taskHolder");
    projectHeader.id = "projectHeader";
    taskHolder.id = "taskHolder";
    displayArea.appendChild(projectHeader);
    displayArea.appendChild(taskHolder);

    //-----Create project title elements and append to projectHeader-----
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("projectTitle");
    let titleText = document.createElement("h2");
    titleText.textContent = title;
    titleText.id = "titleText";
    titleText.classList.add("titleText");
    titleDiv.appendChild(titleText);
    projectHeader.appendChild(titleDiv);

    //-----Create the project's tasks with a loop and append to taskHolder
    //-Create the task Header/Legend-
    let taskHeader = document.createElement("div");
    taskHeader.classList.add("task");
    let titleLegend = document.createElement("p");
    let dueDateLegend = document.createElement("p");
    let projectLegend = document.createElement("p");
    let priorityLegend = document.createElement("p");
    let statusLegend = document.createElement("p");
    titleLegend.textContent = "Title";
    titleLegend.style.width = "40%";
    dueDateLegend.textContent = "Due Date";
    dueDateLegend.style.width = "20%";
    projectLegend.textContent = "Project";
    projectLegend.style.width = "20%";
    priorityLegend.textContent = "Priority";
    priorityLegend.style.width = "10%";
    statusLegend.textContent = "Status";
    statusLegend.style.width = "10%";
    taskHeader.appendChild(titleLegend);
    taskHeader.appendChild(dueDateLegend);
    taskHeader.appendChild(projectLegend);
    taskHeader.appendChild(priorityLegend);
    taskHeader.appendChild(statusLegend);
    taskHeader.style.textDecoration = "underline";
    taskHeader.style.fontWeight = "bold";
    taskHolder.appendChild(taskHeader);
    let numOfTasks = array.length;
    for (let i = 0; i < numOfTasks; i ++) {
        let currentTask = array[i];
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        let title = document.createElement("p");
        let dueDate = document.createElement("p");
        let project = document.createElement("p");
        let priority = document.createElement("p");
        let status = document.createElement("p");
        title.style.width = "40%";
        dueDate.style.width = "20%";
        project.style.width = "20%";
        priority.style.width = "10%";
        status.style.width = "10%";
        title.textContent = spliceString(currentTask.title, 45);
        dueDate.textContent = format(currentTask.dueDate, "MM/dd/yyyy");
        project.textContent = currentTask.project;
        priority.textContent = currentTask.priority;
        if (currentTask.status) {
            status.textContent = "Completed";
        }
        else {
            status.textContent = "Incomplete";
        }
        if (i%2 == 0) {
            taskDiv.style.backgroundColor = "rgba(220, 220, 220, 0.5)";
        }
        taskDiv.appendChild(title);
        taskDiv.appendChild(dueDate);
        taskDiv.appendChild(project);
        taskDiv.appendChild(priority);
        taskDiv.appendChild(status);
        taskHolder.appendChild(taskDiv);
    }


    //Create the addTask button and append at the bottom of the taskHolder
    let addTask = document.createElement("button");
    addTask.classList.add("projectButton");
    addTask.textContent = "+";
    addTask.style.textAlign = "center";
    addTask.style.background = "rgba(100, 100, 100, 0.3)";
    addTask.id = "addTask";
    addTask.style.width = "100%";
    addTask.style.height = "50px";
    //-Create a task form to add tasks-
    let taskForm = document.createElement("div");
    taskForm.classList.add("taskForm");
    taskForm.id = "taskForm";
    let titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: "
    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "taskTitle";
    let dateLabel = document.createElement("label");
    dateLabel.textContent = "Date: ";
    let dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "taskDate";
    let priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: "
    let priorityInput = document.createElement("select");
    priorityInput.name = "priority";
    priorityInput.id = "taskPriority";
    let low = document.createElement("option");
    low.value = "low";
    low.text = "low";
    priorityInput.appendChild(low);
    let medium = document.createElement("option");
    medium.value = "medium";
    medium.text = "medium";
    priorityInput.appendChild(medium);
    let high = document.createElement("option");
    high.value = "high";
    high.text = "high";
    let submitBtn = document.createElement("button");
    submitBtn.classList.add("submitBtn");
    submitBtn.id = "taskSubmit";
    submitBtn.style.top = "0px";
    submitBtn.textContent = "Submit";
    priorityInput.appendChild(high);
    taskForm.appendChild(titleLabel);
    taskForm.appendChild(titleInput);
    taskForm.appendChild(dateLabel);
    taskForm.appendChild(dateInput);
    taskForm.appendChild(priorityLabel);
    taskForm.appendChild(priorityInput);
    taskForm.appendChild(submitBtn);
    taskForm.style.visibility = "hidden";
    taskForm.style.opacity = 0;
    let addTaskDiv = document.createElement("div");
    addTaskDiv.id = "addTaskDiv";
    addTaskDiv.classList.add("addTaskDiv");
    addTaskDiv.appendChild(addTask);
    addTaskDiv.appendChild(taskForm);
    taskHolder.appendChild(addTaskDiv);
    addTask.addEventListener("click", toggleTaskForm)
}

//Function for refreshing the taskHolder for when a new Task is added
export function refreshTasks(array) {
    let numOfTasks = array.length;
    for (let i = 0; i < numOfTasks; i ++) {
        let currentTask = array[i];
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        let title = document.createElement("p");
        let dueDate = document.createElement("p");
        let project = document.createElement("p");
        let priority = document.createElement("p");
        title.textContent = currentTask.title;
        dueDate.textContent = format(currentTask.dueDate);
        project.textContent = currentTask.project;
        priority.textContent = currentTask.priority;
        taskDiv.appendChild(title);
        taskDiv.appendChild(dueDate);
        taskDiv.appendChild(project);
        taskDiv.appendChild(priority);
        taskHolder.appendChild(taskDiv);
    }
}

//Function to toggle task create form
function toggleTaskForm() {
    let taskForm = document.querySelector("#taskForm");
    let visibility = taskForm.style.visibility;
    if (visibility == "hidden")
    {
        taskForm.style.visibility = "visible";
        taskForm.style.opacity = 1;
        addTask.textContent = "X";
    }
    else 
    {
        titleInput.value = "";
        taskForm.style.opacity = 0;
        window.setTimeout(function(){taskForm.style.visibility = "hidden"}, 200);
        addTask.textContent = "+";
    }
}

//Function to clear the display area; called every time in the beginning of createDisplay function
function clearDisplay() {
    let displayArea = document.querySelector("#displayArea");
    while (displayArea.firstChild)
    {
        displayArea.firstChild.remove();
    }
}

//Function that returns the array holding the tasks of the desired project
export function getTitle(e) {
    let projectTitle = e.target.outerText;
    return projectTitle;
}

//Function to return the taskArray from a given title
export function getTaskArray(title, dynamicProjectHolder, projectHolder) {
    if (title == "All") {
        return dynamicProjectHolder.allTasks;
    }
    else if (title == "Today") {
        return dynamicProjectHolder.todayTasks;
    }
    else if (title == "This Week") {
        return dynamicProjectHolder.weekTasks;
    }
    else if (title == "Misc") {
        return dynamicProjectHolder.miscTasks;
    }
    else if (title == "Late") {
        return dynamicProjectHolder.lateTasks;
    }
    else {
        let numOfProj = projectHolder.projectArray.length;
        for (let i = 0; i < numOfProj; i ++) {
            if (title == projectHolder.projectArray[i].title) {
                return projectHolder.projectArray[i].taskArray;
            }
        }
    }
}

//Same function from index.js; This is very bad practice but I was being lazy
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