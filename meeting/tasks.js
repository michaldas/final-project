app.factory("tasks", function(Task) {
    var tasks = [];

    function getAll() {
        return tasks;
    }

    function getTaskById(index) {
        return tasks[index];
    }

    function addTask(task) {
        tasks.push(task);
    }

    function setTasks(tasksPlain) {
        tasks = [];
        for (var i = 0; i < tasksPlain.length; i++) {
            tasks.push(new Task(tasksPlain[i].item, tasksPlain[i].amount))
        }
    }

    return {
        getAll: getAll,
        getTaskById: getTaskById,
        addMeet: addTask,
        setMeets: setTasks
    }
})