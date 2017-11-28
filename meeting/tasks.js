app.factory("tasks", function(Meet) {
    var tasks = [];

    function getAll() {
        return tasks;
    }

    function getMeetById(index) {
        return tasks[index];
    }

    function addMeet(task) {
        cars.push(meet);
    }

    function setMeets(meetsPlain) {
        cars = [];
        for (var i = 0; i < meetsPlain.length; i++) {
            cars.push(new Car(meetsPlain[i].title, meetsPlain[i].date, 
                meetsPlain[i].time, meetsPlain[i].location))
        }
    }

    return {
        getAll: getAll,
        getMeetById: getMeetById,
        addMeet: addMeet,
        setMeets: setMeets
    }
})