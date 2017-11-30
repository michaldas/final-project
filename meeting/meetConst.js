app.factory("Meet" , function(){

    function Meet(title, date, time,location, createdBy){
       this.title = title;
       this.date = date;
       this.time = time;
       this.location = location;
       this.createdBy = createdBy;
       this.meetId =Math.floor((Math.random() * 10000));
      // this.createdBy = user.email;
       this.tasks = [];
       /*this.costs = [];
       this.invited =[];*/

       this.addTask = function(task) {
           this.tasks.push(task);
       }

     //  this.removeTask = function(task){
     //   this.tasks.splice(this.$index, 1);
       }

       this.getTask = function(index) {
           return this.tasks[index];
       }
    
    return Meet;
    
});


//, tasks, costs, notifications, invited
// this.tasks = tasks;
//this.costs = costs;
//this.notifications = notifications;
//this.invited = invited;
