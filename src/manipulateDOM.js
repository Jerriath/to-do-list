//This module will be used to change only the task display area of the page


export function createAll() {

    //Cache DOM
    let displayArea = document.querySelector("#displayArea");
    let projectHeader = document.querySelector("#projectHeader");

    //-----Create the displayArea for all tasks-----
    //-Create the task holder div
    let taskHolder = document.createElement("div");
    taskHolder.classList.add("taskHolder");



    //Append everything to displayArea
    displayArea.appendChild(taskHolder);

}