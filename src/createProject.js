export default (title) => {
    
    let newProject = {
        title,
        taskArray: [], //Rough array with tasks randomly pushed on
        sortedTaskArray: [], //sorted task array (sorteded depending on sort option)
        addTask: function(newTask) {
            this.taskArray.push(newTask);
        },
        findIndex: function(taskTitle) {
            let index = this.taskArray.findIndex(i => i.title === taskTitle);
            return index;
        },
        removeTask: function(index) {
            this.taskArray.splice(index, 1);
        },
        clearSortedArray: function() {
            this.sortedTaskArray.splice(0, this.sortedTaskArray.length);
        },
        sortByName: function() {
            this.sortedTaskArray = [...this.taskArray];
            this.sortedTaskArray.sort(function(a, b) {
                return (a.title < b.title ? -1 : 1);
            });
        }
    }

    return newProject;
}