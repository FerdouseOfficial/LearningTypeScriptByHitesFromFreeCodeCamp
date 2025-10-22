// // Chapter 08: A better way to write function
// function addTwo(num: number) {
//   return num + 2;
// }

// function getUpper(val: string) {
//   return val.toUpperCase();
// }

// function signUpUser(name: string, email: string, isPaid: true) {
//   console.log(
//     `User name is ${name}. User email is ${email}. User have ${isPaid} the subscription`
//   );
// }

// let logInUser = (user: string, password: (number | string)) => {
//   console.log(`Username : ${user}, Password: ${password}`);
// };

// addTwo(5);
// getUpper("Mahin");

// signUpUser("mahin", "rohitsharmafuchka", true);
// logInUser("Romio23", "234******asdfkj2");

// Edge Cases

// ------ 01 -------
// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 ok"
// }

// ------------------------- 02 ------------------------
// YOU must hvae to rerturn someting otherwise it will show and error

// const getHello = (s: string): string => {
//   return "";
// };

//    --------------------- 03 ------------------
// its by default I mean auto detect the output type .
const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map((heros): string => {
  return "";
  // console.log();
});

// -------------- one more imporatnt thing is ------------------------

// when you already declare that the functin will return a void then the error showing that their is not return or such error like that will not show

// here is the example:---------

function consoleErr(errMsg: string): void {
  console.log(errMsg);
  // return 1; // now it will show a error
}

// function handError(errMsg: string): void {
//   console.log(errMsg);

// }

// You can also do it with never

function handError(errMsg: string): never {
  throw new Error(errMsg);
}
