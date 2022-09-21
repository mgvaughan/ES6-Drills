// ## Steps 1 - 10 (Template Literals and Default Parameters Value)
// function favMovie(movie, name) {
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }

// favMovie("Total Recall", "Tommy Wiseau");
// favMovie();

// ## Steps 1 - 3 (Arrow Functions)
// favMovie = (movie, name) => {
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// };

// favMovie("Total Recall", "Tommy Wiseau");

// ## Step 4 (Arrow Functions)
// favMovie = (movie, name) => console.log(`my name is ${name} and my favorite movie is ${movie}`);

// favMovie("Total Recall", "Tommy Wiseau");

// ## Steps 5-9 (Arrow Functions)
// getFirstName = (name) => {
//     console.log(`My first name is: ${name.split(' ', 1)}`);
// }
// getFirstName("Tommy Wiseau");

// getFirstName = name => console.log(`My first name is: ${name.split(' ', 1)}`);
// getFirstName("Tommy Wiseau");

// ## Steps 10-11 (Arrow Functions)
// let doMath = (x,y) => ({
//     exp: Math.pow(x, y),
//     prod: x*y
// })

// let math = doMath(2,3);
// console.log(math);
// console.log(2^3);
// console.log(`${math.exp}, ${math.prod}`);

// ## Steps 1 - 3 (Spread Syntax)
// newFunc = (name, location, favFood) => {
//     console.log(`My name is ${name}`)
//     console.log(`I am from ${location}`)
//     console.log(`I like to eat ${favFood}`)
// }

// let arr = ["Paul", "Birmingham", "Kimchi"];
// newFunc(...arr)

// ## Steps 4 - 8 (Spread Syntax)
const nam = "Michael Vaughan"

newFunc = (str) => {
    let chars = [...str]; 
    console.log(chars);
    for(let i = 0; i < chars.length; i++)
        console.log(chars[i]);
}

newFunc(nam);