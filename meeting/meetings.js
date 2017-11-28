app.factory("meetings", function(Meet) {
    var meetings = [];

    function getAll() {
        return meetings;
    }

    function getMeetById(index) {
        return meetings[index];
    }

    function addMeet(meet) {
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