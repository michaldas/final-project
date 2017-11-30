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
            for (var k = 0; k < meetsPlain[k].costs.length; k++) {
                var cost = new Cost(meetsPlain[i].costs[k].costelement, meetsPlain[i].costs[k].amount);                   ;
                meeting.addCost(cost);
            }
            for (var l = 0; l < meetsPlain[i].inviteds.length; l++) {
                var invited = new Invited(meetsPlain[i].inviteds[l].name, meetsPlain[i].inviteds[l].amount);                   ;
                meeting.addInvited(invited);
            }    
            mettings.push(meeting);    
            
                 
        }
    

   
}
return {
    getAll: getAll,
    getMeetById: getMeetById,
    addMeet: addMeet,
    setMeets: setMeets
}
})