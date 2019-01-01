
// var firstName = 'ali';
// console.log(firstName);

// var lastName = 'naqvi';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Data Scientist';
// console.log(job);


/****************** 
this is how to comment multiple lines in JS
 Variable mutation and type coercion

*/
// var firstName = 'ali';
// var age = 28;


// console.log(firstName + ' ' + age);

// var job, isMarried;

// job = 'Teacher';
// isMarried = false;

// console.log(firstName + ' is a '+ age + ' years old '+ job + '. Is he is married? ' + isMarried);

//*********** Variable Mutation

// age = 'Twenty Eight';
// job = 'Writer';

// alert(firstName + ' is a '+ age + ' years old '+ job + '. Is he is married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/************************* 
Basic Operator
*/

// var firstName, year, yearJohn, yearSmith, now;

// year = 2018;
// now = 2016;
// firstName = 'ali';

// // Math Operators
// yearJohn = year - 28;
// yearSmith = year - now;

// console.log(yearJohn);
// console.log(yearSmith);

// console.log(year - 23);
// console.log(year / 2);
// console.log(now * 2);

// // Logical Operators

// var compare = 28 < 32;
// console.log(compare);

// // typeOf Operator

// console.log(typeof year);
// console.log(typeof firstName);


// /************
//  Operator Procedance
//  */

// var fullAge = 29;

// var isFullAge = fullAge - 23 <= yearJohn;
// console.log(isFullAge);

// // Grouping

// var age1 = 44;
// var age2 = 22;

// var average = (age1 - age2) / 2;
// console.log(average);

// // Multiple Assignments

// var x, y;

// x = y = (3 +5) * 4 - 6;

// console.log(x, y);

// // more operators

// x *= 2;
// console.log(x);

// x++;
// console.log(x);

/***********
 * Coding Challenge 1
 */
// // 1.
//  var markHeight, johnHeight, markWeight, johnWeight, johnBMI, markBMI;

//  markHeight = 1.3;
//  markWeight = 65;

// johnHeight = 1.2;
// johnWeight = 67;

// // 2.
// markBMI = markWeight / (markHeight * markHeight) ;
// console.log(markBMI);

// johnBMI = johnWeight / (johnHeight * johnHeight) ;
// console.log(johnBMI);

// // 3.
// var compareBMI = markBMI < johnBMI;

// // 4. 
// console.log('Is mark BMI is higher than John BMI?' + ' ' + compareBMI);

/**************
If / else statement
*/

// var firstName = 'Nasir';
// var civilStatus = prompt('What is Nasir civil Status?');;

// if (civilStatus === 'married') {
//     console.log(firstName +' is married!');
// } else {
//     console.log(firstName + ' is not married!');
// }

// // 1.
// var markHeight, johnHeight, markWeight, johnWeight, johnBMI, markBMI;

// markHeight = 1.3;
// markWeight = 65;

// johnHeight = 1.2;
// johnWeight = 167;

// // 2.
// markBMI = markWeight / (markHeight * markHeight) ;
// johnBMI = johnWeight / (johnHeight * johnHeight) ;

// // 3.

// if (markBMI > johnBMI) {
//     console.log('Mark BMI is higher than John')
// } else {
//     console.log('John BMI is higher than Mark')
// }


/************
 Boolean Logic
 */

// var firstName = 'Hussain';
// var age = prompt('What is Hussain age?');

// if (age < 13) {
//     console.log(firstName + ' is a boy!');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager!');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man!');
// } else {
//     console.log(firstName + ' is a man!');
// }

/**************
 The Ternary Operator and Switch Statements
 */

//  var firstName = 'John';
//  var age  = 16;

//  var hike = age >= 18? 'hike' : 'not eligible';
//  console.log(hike);

// // Switch Statements

// var job = prompt('What is your prefession?');

// switch (job) {
//     case 'teacher':
//     case 'instructor':
//     case 'tutor':
//         console.log(firstName + ' teacher how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives UBER in Karachi.');
//         break;
//     case 'developer':
//        console.log(firstName + ' is develop on python.');
//         break;
//     default:
//         console.log(firstName + ' is a ' + job);
// }

// var age = 13;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy!');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager!');
//         break;
//     case age >= 20 && age < 30:
//        console.log(firstName + ' is a young man!');
//         break;
//     default:
//         console.log(firstName + ' is a man!');
// }

// /***********
//  * Equality operator
//  */

// var height = 29;

// if (height == '29'){
//     console.log('The == operator does the type coercion.')
// }


/*******************
 * The coding CHallenge 2
 */

//  var teamJohn = (89 + 120 + 103) / 3;
//  var teamMike = (116 + 94 + 123) / 3;
//  var teamMary = (97 + 134 + 105) / 3;

//  if (teamJohn > teamMike && teamJohn > teamMary){
//      console.log('John Team wins the basketball match with ' + teamJohn + ' average score');
//  } else if (teamMike > teamJohn && teamMike > teamMary) {
//     console.log('Mike Team wins the basketball match with ' + teamMike + ' average score');
//  } else if (teamMary > teamJohn && teamMary > teamMike) {
//     console.log('Mary Team wins the basketball match with ' + teamMary + ' average score');
//  }  else {
//     console.log('Match Draws');
//  }

//  switch (true) {
//      case teamJohn:
//         console.log('John Team wins the basketball match with ' + teamJohn + ' average score');
//         break;
//     case teamMike:
//         console.log('Mike Team wins the basketball match with ' + teamMike + ' average score');
//         break;
//     default:
//         console.log('Mary Team wins the basketball match with ' + teamMary + ' average score');   
//  }

/******************
 * Functions
 */

// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1957);
// var ageMary  = calculateAge(1963);
// console.log(ageJohn, ageMike, ageMary);

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 60 - age;
//     if (retirement > 0 ){
//     console.log(firstName + ' retires in ' + retirement + ' years.');
// }   else{
//     console.log(firstName + ' is already retired.');
// }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1957, 'Mike');
// yearsUntilRetirement(1963, 'Mary');

/*************
 * Function Statement and Expressions
 */

// Function expressions

// var whatDoYouDo = function (job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives UBER in Karachi.';
//         case 'designer':
//             return firstName + ' designs beautiful websites.';
//         default:
//             return firstName + ' does something else.'
//     }
// }

// console.log(whatDoYouDo ('teacher', 'John'));
// console.log(whatDoYouDo ('driver', 'Mike'));
// console.log(whatDoYouDo ('designer', 'Mary'));
// console.log(whatDoYouDo ('Engineer', 'Jane'));

/**************
 * Arrays
 */


//  // Initialize New Array
// var names = ['John', 'Mark', 'Ali'];
// var years = new Array (1990, 1992, 1994);

// console.log (names);
// console.log(names.length);


// // Mutate Array Data
// names[1] = 'Hussain';
// names[names.length] = 'Mary';

// console.log(names);


// // Different Data Types

// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue');
// john.unshift('Mr');
// console.log(john);

// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('Designer') === -1 ? 'John is not a Designer' : 'John is a Designer';

// console.log(isDesigner);


/***************
 * Coding Challenge 3
 */

// function percent(amount){
//     if (amount < 50){
//        return amount * (20 / 100)
//     } else if (amount >= 50 && amount < 200){
//        return amount * (15 / 100)
//     } else {
//        return amount * (10 / 100)
//     }    
// }



// var billsJohn = [124, 48, 268];
// var tipsJohn = [percent(billsJohn[0]),
//                 percent(billsJohn[1]),
//                 percent(billsJohn[2])];

// var finalValue = [billsJohn[0] + tipsJohn[0],
//                   billsJohn[1] + tipsJohn[1],
//                   billsJohn[2] + tipsJohn[2]];
                
// console.log(finalValue, tipsJohn);

/******************
 * Objects and Properties
 */


//  // Object literal
//  var john = {
//      firstName : 'John',
//      lastName : 'Mike',
//      birthYear : 1990,
//      family : ['Amily', 'Mary', 'Bob'],
//      job : 'Teacher',
//      isMarried : false
//  };

//  console.log(john.firstName);
//  console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;

// console.log(john);

// // New Object Syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.lastName = 'Mike';
// jane.birthYear = 1998;
// jane['job'] = 'Fighter';

// console.log(jane);

/*******************
 * Objects and Methods
 */

//   var john = {
//      firstName : 'John',
//      lastName : 'Mike',
//      birthYear : 1991,
//      family : ['Amily', 'Mary', 'Bob'],
//      job : 'Teacher',
//      isMarried : false,
//      calcAge : function() {
//          this.age = 2018 - this.birthYear;
//      }
//  };

//  john.calcAge();
// console.log(john); 

/******************
 * Coding Challenge 4
 */

//  var john = {
//      fullName : 'John Cena',
//      height : 2,
//      weight : 67,
//      bodyMass : function() {
//          this.BMI = this.weight / (this.height * this.height);
//      }
//  };

//  john.bodyMass();
//  console.log(john);

//  var mike = {
//     fullName : 'Mike Jay',
//     height : 2.7,
//     weight : 63,
//     bodyMass : function() {
//         this.BMI = this.weight / (this.height * this.height);
//     }
// };

// mike.bodyMass();
// console.log(mike);

// if (john.bodyMass > mike.bodyMass){
//     console.log(john.fullName + ' has the highest BMI.');
// } else {
//     console.log(mike.fullName + ' has the highest BMI.');
// }
 

/*******************
 * Loops and Iteration
 */


//  var jerry = {
//      firstName : 'Jerry',
//      lastName : 'Tom',
//      weight : 57,
//      height : 6.7,
//      bodymass : function() {
//          this.BMI = this.weight / (this.height * this.height);
//      }
//  }

//  jerry.bodymass();
//  console.log(jerry);


//  console.log (jerry.firstName + ' has the BMI' + jerry.BMI);

// for loop
// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

// for (var j = 1; j <= 20; j += 2){
//     console.log(j);
// }

// var john = ['John', 'Mike', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++){
//     console.log(john[i]);
// }

// // While loop
// var i = 0;
// while(i < john.length){
//     console.log(john[i]);
//     i++;
// }


// continue and break statement

// var john = ['John', 'Mike', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++){
//     if(typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }


// var john = ['John', 'Mike', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++){
//     if(typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// //Looping Backwards

// for (var i = john.length - 1; i >= 0; i--){
//     console.log(john[i]);
// }

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/


// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];
                
//         for (var i = 0; i < this.bills.length; i++) {
//             // Determine percentage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];
            
//             if (bill < 50) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }
            
//             // Add results to the corresponing arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }

// var mark = {
//     fullName: 'Mark Miller',
//     bills: [77, 475, 110, 45],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];
                
//         for (var i = 0; i < this.bills.length; i++) {
//             // Determine percentage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];
            
//             if (bill < 100) {
//                 percentage = .2;
//             } else if (bill >= 100 && bill < 300) {
//                 percentage = .1;
//             } else {
//                 percentage = .25;
//             }
            
//             // Add results to the corresponing arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }

// function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++) {
//         sum = sum + tips[i];
//     }
//     return sum / tips.length;
// }

// // Do the calculations
// john.calcTips();
// mark.calcTips();

// john.average = calcAverage(john.tips);
// mark.average = calcAverage(mark.tips);
// console.log(john, mark);

// if (john.average > mark.average) {
//     console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
// } else if (mark.average > john.average) {
//     console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
// }


