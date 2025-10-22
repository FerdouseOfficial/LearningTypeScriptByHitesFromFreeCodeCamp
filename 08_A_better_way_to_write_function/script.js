// Chapter 08: A better way to write function
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    console.log("User name is ".concat(name, ". User email is ").concat(email, ". User have ").concat(isPaid, " the subscription"));
}
var logInUser = function (user, password) {
    console.log("Username : ".concat(user, ", Password: ").concat(password));
};
addTwo(5);
getUpper("Mahin");
signUpUser("mahin", "rohitsharmafuchka", true);
logInUser("Romio23", "234******asdfkj2");
