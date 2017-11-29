app.factory("Invited" , function(){
    function Invited(name, amount, completed = false) {
      this.name = name;
      this.amount = amount;
      this.completed = false;
    }
    return Invited;
  });
  