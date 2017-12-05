app.factory("meetings", function(Meet, Task, Cost, Invited) {
    var meetings = [];

    function getAll() {
        return meetings;
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
            var meeting = new Meet(meetsPlain[i].title, meetsPlain[i].date, 
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
            console.log(meetsPlain[i].inviteds.length)
          for (var x = 0; x < meetsPlain[i].inviteds.length; x++){
                var invited = new Invited(meetsPlain[i].inviteds[x].name, meetsPlain[i].inviteds[x].amount,
                    meetsPlain[i].inviteds[x].completed);
                meeting.addInvited(invited);
            }
    
        meetings.push(meeting);
   
}
}    
return {
    getAll: getAll,
    addMeet: addMeet,
    setMeets: setMeets,
    get: get
   
    }

})