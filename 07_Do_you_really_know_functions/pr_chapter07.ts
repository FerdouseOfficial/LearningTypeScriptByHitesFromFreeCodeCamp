function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name, email, isPaid) {
    console.log(`User name is ${name}. User email is ${email}. User have ${isPaid} the subscription`)
}

addTwo(5);
getUpper("Mahin");
signUpUser("Mahin","asdlfjksdf234@gmail.com","paid")


signUpUser(1,2,3)

export {};

