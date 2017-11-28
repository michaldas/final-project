app.factory("tasks", function(Task) {
    var tasks = [];

    function getAll() {
        return tasks;
    }

    function getTaskById(index) {
        return tasks[index];
    }

    function addTask(task) {
        cars.push(task);
    }

    function setTasks(tasksPlain) {
        tasks = [];
        for (var i = 0; i < tasksPlain.length; i++) {
            cars.push(new Task(tasksPlain[i].item, tasksPlain[i].amount, 
                tasksPlain[i].completed))
        }
    }

    return {
        getAll: getAll,
        getMeetById: getTasktById,
        addMeet: addTask,
        setMeets: setTasks
    }
})