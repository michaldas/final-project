app.factory("meetings", function(Meet) {
    var meetings = [];

    function getAll() {
        return meetings;
    }

    function getMeetById(index) {
        return meetings[index];
    }

    function addMeet(meet) {
        meetings.push(meet);
    }

    function setMeets(meetsPlain) {
        meetings = [];
        for (var i = 0; i < meetsPlain.length; i++) {
            meetings.push(new Meet(meetsPlain[i].title, meetsPlain[i].date, 
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