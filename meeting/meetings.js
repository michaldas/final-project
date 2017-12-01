app.factory("meetings", function(Meet, Task, Cost, Invited) {
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
    var get = function(index) {
        return meetings[index];
    }
    function setMeets(meetsPlain) {
        meetings = [];
        for (var i = 0; i < meetsPlain.length; i++) {
            var meeting = new Meet(meetsPlain[i].title, meetsPlain[i].date, meetsPlain[i].meetId,
                meetsPlain[i].time, meetsPlain[i].location, meetsPlain[i].createdBy);
            for (var j = 0; j < meetsPlain[i].tasks.length; j++) {
                var task = new Task(meetsPlain[i].tasks[j].item, meetsPlain[i].tasks[j].amount,
                    meetsPlain[i].tasks[j].completed);
                meeting.addTask(task);
            }
            for (var a = 0; a < meetsPlain[i].costs.length; a++) {
                var cost = new Cost(meetsPlain[i].costs[a].costelement, meetsPlain[i].costs[a].amount);
                meeting.addCost(cost);
            }
            /*for (var x = 0; x< meetsPlain[i].inviteds.length; x++){
                var invited = new Invited(meetsPlain[i].inviteds[x].item, meetsPlain[i].Invited[x].amount,
                    meetsPlain[i].inviteds[x].completed);
                meeting.Invited(Invited);
            }*/
    
        meetings.push(meeting);
   
}
}    
return {
    getAll: getAll,
    getMeetById: getMeetById,
    addMeet: addMeet,
    setMeets: setMeets,
    get: get
    }

})