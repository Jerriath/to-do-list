import { format, differenceInDays } from "date-fns";
import CreateTask from "./createTask.js";
import CreateProject from "./createProject.js";

let testProject = CreateProject("testProject");

let testTask = CreateTask("Second Task", "idk1", new Date(2021, 6, 25), "medium");
let otherTask = CreateTask("First Task", "idk2", new Date(2021, 6, 13), "low");
let anotherTask = CreateTask("Third Task", "idk2", new Date(2021, 6, 16), "high");
let anotherNotherTask = CreateTask("Fourth Task", "idk2", new Date(2021, 6, 2), "low");

testProject.addTask(testTask);
testProject.addTask(otherTask);
testProject.addTask(anotherTask);
testProject.addTask(anotherNotherTask);

testProject.sortByName();
console.table(testProject.sortedTaskArray);

testProject.clearSortedArray();
testProject.sortByPriority();

console.log(testProject.createHighPriorityArray());
console.log(testProject.createMediumPriorityArray());
console.log(testProject.createLowPriorityArray());

console.table(testProject.sortedTaskArray);