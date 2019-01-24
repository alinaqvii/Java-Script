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

//  let firstName = 'John'
//  let lastName = 'Smith'
//  const yearOfBirth = 1990

//  function calcAge(year){
//      return 2018 - year;
//  }

//  // ES5

//  console.log('This is ' + firstName + lastName + ' . He was born in ' + yearOfBirth + ' Today he is ' + calcAge(yearOfBirth) + ' years old');

//  //ES6
//  console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`);

//  const n = `${firstName} ${lastName}`;
//  console.log(n.startsWith('J'));
//  console.log(n.endsWith('th'));
//  console.log(n.includes('oh'));
//  console.log(firstName.repeates(5));


/* 
Lecture: Arrow functions*/


// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(el){
//     return 2016 - el;
// })
// console.log(ages5);

// // ES6
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) =>{
//     const now = new 
//     Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${2016 - el}.`});
// console.log(ages6);

// ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){

//         var self = this;
//         document.querySelector('.green').addEventListener('click',
//             function(){
//                 var str = 'This is a box ' + self.position + ' and it is ' + self.color;
//                 alert(str);
//             })
//     }
// };

// //box5.clickMe();

// // ES6

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){

//         var self = this;
//         document.querySelector('.green').addEventListener('click',
//             () => {
//                 var str = 'This is a box ' + self.position + ' and it is ' + self.color;
//                 alert(str);
//             })
//     }
// };

// box6.clickMe();

/*************
 * Destructuring
 */


 // ES5
 var john = ['John', 26];

 var name = john[0];
 var age = john[1];

 // ES6

 const [name6, ages6] = ['John', 26];
 console.log(name6);
 console.log(ages6); 


 const obj = {
     firstName : 'John',
     lastName : 'Smith'
 };

 const {firstName, lastName} = obj;
 console.log(firstName);
 console.log(lastName);

 const {firstName: a, lastName: b} = obj;
 console.log(a);
 console.log(b);

 function calcAgeRetirement(year){
     const age = new Date().getFullYear() - year;
     return [age, 60 - age];
 }

 const [age2, retirement] =  calcAgeRetirement(1990);

 console.log(age2);
 console.log(retirement);