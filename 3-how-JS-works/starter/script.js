///////////////////////////////////////
// Lecture: Hoisting
 // functions
// calculateAge(1990);
// function calculateAge(year){
//     console.log(2016 - year);
// }


// // retirement(1965);
// var retirement = function(year){
//     console.log(65 - (2016 - year));
// }

// retirement(1965);

// // variables
// // console.log(age);
// //global execution context
// var age = 23;
// console.log(age);

// // execution context

// function foo(){
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// // Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }



///////////////////////////////////////
// Lecture: The this keyword

// calculateAge(1985);
// function calculateAge(year){
//     console.log (2016 - year);
//     console.log(this);
// }


var ali = {
    name:'Ali',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log( 2018 - this.yearOfBirth);
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}

ali.calculateAge();

var john = {
    name: 'John',
    yearOfBirth: 1993
};

john.calculateAge = ali.calculateAge;
john.calculateAge();
