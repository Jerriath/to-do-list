export default function (title, description, dueDate, priority) {
    
    //Factory function for creating new task objects
    let newTask = {
        title,
        description,
        dueDate,
        priority,
        getTitle: getTitle(),
        getDescription: getDescription(),
        getDueDate: getDueDate(),
        getPriority: getPriority(),

    };

    //Accessor functions
    function getTitle() {
        return this.title;
    }
    function getDescription() {
        return this.description;
    }
    function getDueDate() {
        return this.dueDate;
    }
    function getPriority() {
        return this.priority;
    }

    //Mutator functions
    function setTitle(newTitle) {
        this.title = newTitle;
    }
    function setDescription(newDescription) {
        this.description = newDescription;
    }
    function setDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }
    function setPriority(newPriority) {
        this.priority = newPriority;
    }


    return newTask;
};