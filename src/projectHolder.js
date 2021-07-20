//Functions as an array that holds all of the projects with some funcitonality
export default function() {
    let projectHolder = {
        projectArray: [],
        addProject: function(newProject) {
            this.projectArray.push(newProject);
        },
        //Copy pasta function found in createProject module
        findIndex: function(projectTitle) {
            let index = this.projectArray.findIndex(i => i.title === projectTitle);
            return index;
        },
        removeProject: function(index) {
            this.projectArray.splice(index, 1);
        },
        sortByName: function() {
            this.projectArray.sort(function(a, b) {
                return (a.title < b.title ? -1 : 1);
            });
        },
        groupAllTasks: function() {
            let allTasksArray = [];
            let numOfProj = this.projectArray.length;
            for (let i = 0; i < numOfProj; i++) {
                let numOfTasks = this.projectArray[i].taskArray.length;
                for (let j = 0; j < numOfTasks; j++) {
                    allTasksArray.push(this.projectArray[i].taskArray[j]);
                }
            }
            return allTasksArray;
        },
        getArrayLength: function() {
            return this.projectArray.length;
        }
    }
    return projectHolder;
}