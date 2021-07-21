export default (title, dueDate, priority) => {
    
    //Factory function for creating new task objects
    //Objects include all accessor/mutator functions
    let newTask = {
        title,
        description: null,
        dueDate,
        priority,
        //status: false,
        project: null,
    };

    return newTask;
};