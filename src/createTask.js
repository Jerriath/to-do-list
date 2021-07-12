export default (title, description, dueDate, priority) => {
    
    //Factory function for creating new task objects
    //Objects include all accessor/mutator functions
    let newTask = {
        title,
        description,
        dueDate,
        priority,

        //Accessor functions
        getTitle: function() {
            return title;
        },
        getDescription: function() {
            return description;
        },
        getDueDate: function() {
            return dueDate;
        },
        getPriority: function() {
            return priority;
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
    };

    return newTask;
};