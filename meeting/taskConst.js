app.factory("Task" , function(){
  function Task(item, amount, completed = false) {
    this.item = item;
    this.amount = amount;
    this.completed = false;
  }
  return Task;
});
