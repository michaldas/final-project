app.factory("Task" , function(){
  function Task(item, amount, completed) {
    this.item = item;
    this.amount = amount;
    if (completed === undefined) {
      this.completed = false;
    }
    else {
      this.completed = completed;
    }
  }
  return Task;
});
