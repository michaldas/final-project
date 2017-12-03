app.factory("Meet" , function(){

    function Meet(title, date, time, location, createdBy, meetId){
       this.title = title;
       this.date = date;
       this.time = time;
       this.location = location;
       this.createdBy = createdBy;
      // this.meetId =Math.floor((Math.random() * 10000));
      this.meetId = meetId;
      // this.createdBy = user.email;
       this.tasks = [];
       this.costs =  [];
       this.inviteds = [];

       this.addTask = function(task) {
           this.tasks.push(task);
       }
       this.addCost = function(cost) {
        this.costs.push(cost);
    }
        this.addInvited = function(invited) {
         this.inviteds.push(invited);
    }
       }
       this.getTask = function(index) {
           return this.tasks[index];
       }    
       this.getCost = function(index) {
        return this.costs[index];
    }   
    this.getInvited = function(index) {
        return this.inviteds[index];
    }     
    return Meet;
   //  this.removeTask = function(task){
     //   this.tasks.splice(this.$index, 1); 
});
