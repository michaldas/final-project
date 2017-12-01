app.factory("Invited" , function(){
    function Invited(name, amount, completed) {
      this.name = name;
      this.amount = amount;
      if (completed === undefined) {
        this.completed = false;
      }
      else {
        this.completed = completed;
      }
      
    }
    return Invited;
  });
  