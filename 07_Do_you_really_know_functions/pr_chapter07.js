"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    console.log("User name is ".concat(name, ". User email is ").concat(email, ". User have ").concat(isPaid, " the subscription"));
}
addTwo(5);
getUpper("Mahin");
signUpUser("Mahin", "asdlfjksdf234@gmail.com", "paid");
signUpUser(1, 2, 3);
