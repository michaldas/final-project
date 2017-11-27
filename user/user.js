app.factory("User", function(){
    
//user constructor
function User(email, password, firstName, lastName) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  //  this.data = plainObject.data;
};
return User;
});