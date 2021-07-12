import { format } from "date-fns";
import CreateTask from "./createTask.js";
import CreateProject from "./createProject.js";

let testProject = CreateProject("testProject");

let testTask = CreateTask("Second Task", "idk1", new Date(2021, 6, 12), "high");
let otherTask = CreateTask("First Task", "idk2", new Date(2021, 6, 13), "high");

testProject.addTask(testTask);
testProject.addTask(otherTask);
testProject.sortByName();
console.log(testProject.taskArray);
console.log(testProject.sortedTaskArray);