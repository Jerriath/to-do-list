export default (title, dueDate, priority) => {
    
    //Factory function for creating new task objects
    //Objects include all accessor/mutator functions
    let newTask = {
        title,
        description: null,
        dueDate,
        priority,
        status: false,
        project: null,

        //Accessor functions
        getTitle: function() {
            return this.title;
        },
        getDescription: function() {
            return this.description;
        },
        getDueDate: function() {
            return this.dueDate;
        },
        getPriority: function() {
            return this.priority;
        },
        getStatus: function() {
            return this.status;
        },

        //Mutator functions
        setTitle: function(newTitle) {
            title = newTitle;
        },
        setDescription: function(newDescription) {
            description = newDescription;
        },
        setDueDate: function(newDueDate) {
            dueDate = newDueDate;
        },
        setPriority: function(newPriority) {
            priority = newPriority;
        },
        alterStatus: function() {
            let currentStatus = this.status;
            this.status = !currentStatus;
        }
    };

    return newTask;
};