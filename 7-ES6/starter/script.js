// // Lets and const
// /*
// // ES5
// var name5 = 'Jane Smith';
// var age5 = 24;
// name5 = 'Jane Miller';
// console.log(name5);

// //ES6
// const name6 = 'Jane Smith';
// let age = 24;
// name6 = 'Jane Miller';
// console.log(name6); 
// */

// //ES5

// function driversLicense5(passedTest){
//     console.log(firstName);
//     if(passedTest){
//         var firstName = 'John';
//         var birthYear = 1986;

        
//     }
//     //ES5 works on function scope
//     console.log(firstName + ' born in year ' + birthYear + ' passed the test and can officially drive a car');
        
// }

// driversLicense5(true);

// function driversLicense6(passedTest){
//     //console.log(firstName);
//     let firstName; 
//     const birthYear = 1986;
    
//     if(passedTest){
//         firstName = 'John';

        
//     }
//     // ES6 works on Block Scope
//     console.log(firstName + ' born in year ' + birthYear + ' passed the test and can officially drive a car');
        
// }

// driversLicense6(true);

// //ES5
// // var i = 23;

// // for(var i = 0; i < 5; i++) {
// //     console.log(i);
// // }

// // console.log(i);

// //ES6
// let i = 23;

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i); 

/**
 * Strings
 */

 let firstName = 'John'
 let lastName = 'Smith'
 const yearOfBirth = 1990

 function calcAge(year){
     return 2018 - year;
 }

 // ES5

 console.log('This is ' + firstName + lastName + ' . He was born in ' + yearOfBirth + ' Today he is ' + calcAge(yearOfBirth) + ' years old');

 //ES6
 console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`);

 const n = `${firstName} ${lastName}`;
 console.log(n.startsWith('J'));
 console.log(n.endsWith('th'));
 console.log(n.includes('oh'));
 console.log(firstName.repeates(5));
 