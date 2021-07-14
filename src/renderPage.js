//This module will be used to render the basic page elements (header, side panel, etc.)

export default function() {

    //Cache DOM
    let body = document.querySelector("body");

    
    //Create header
    let header = document.createElement("header");
    header.classList.add("header");
    let titleHolder = document.createElement("div");
    titleHolder.classList.add("titleHolder");
    let title = document.createElement("h1");
    title.textContent = "To-Do List";
    titleHolder.appendChild(title);
    header.appendChild(titleHolder);


    //Create side Panel
    let sidePanel = document.createElement("div");
    sidePanel.classList.add("sidePanel");




    //Append elements to body
    body.appendChild(header);
    body.appendChild(sidePanel);

}