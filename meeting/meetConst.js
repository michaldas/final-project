app.factory("Meet" , function(){

    function Meet(title, date, time,location){
       this.title = title;
       this.date = date;
       this.time = time;
       this.location = location;
       this.meetId =Math.floor((Math.random() * 10000));
      // this.createdBy = createdBy;
    }
    return Meet;
    
});


//, tasks, costs, notifications, invited
// this.tasks = tasks;
//this.costs = costs;
//this.notifications = notifications;
//this.invited = invited;
