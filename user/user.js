app.factory("User", function(){
    
//user constructor
function User(plainObject) {
    this.email = plainObject.email;
    this.password = plainObject.password;
    this.firstName = plainObject.firstName;
    this.lastName = plainObject.lastName;
  //  this.data = plainObject.data;
};
return User;
});