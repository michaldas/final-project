app.factory("Meet" , function(){

    function Meet(title, date, time,location){
       this.title = title;
       this.date = date;
       this.time = time;
       this.location = location;
      // this.createdBy = createdBy;
    }
    return Meet;
    
});
var meetings=[];

//, tasks, costs, notifications, participants
// this.tasks = tasks;
//this.costs = costs;
//this.notifications = notifications;
//this.participants = participants;
