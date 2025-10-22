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


