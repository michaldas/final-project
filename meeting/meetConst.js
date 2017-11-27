app.factory("Meet" , function(){

    function Meet(title, date, time){
       this.title = title;
       this.date = date;
       this.time = time;
    }
    return Meet;
    
});
var meetings=[];

//, tasks, costs, notifications, participants
// this.tasks = tasks;
//this.costs = costs;
//this.notifications = notifications;
//this.participants = participants;
