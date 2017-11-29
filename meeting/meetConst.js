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


//, tasks, costs, notifications, invited
// this.tasks = tasks;
//this.costs = costs;
//this.notifications = notifications;
//this.invited = invited;
