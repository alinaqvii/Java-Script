// Function Constructor
/*
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    //this.calculateAge = function(){
    //     console.log(2018 - yearOfBirth)
    // }
}

Person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'Teacher');
var jane = new Person('Jane', 1989, 'Designer');
var mike = new Person('Mike', 1975, 'Driver');
john.calculateAge();
jane.calculateAge();
mike.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mike.lastName);
*/

// Object.create

// var personProto = {
//     calculateAge: function(){
//         console.log( 2018 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);

// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'Teacher';

// var jane = Object.create(personProto,
//     {
//         name: { value : 'Jane'},
//         yearOfBirth: { value: 1975},
//         job: { value: 'Designer'}
//     });

// Primitives vs Objects

// // Primitives

//  var a = 26;
//  var b = a;

//  a = 30;
// console.log(a);
// console.log(b);

// // Objects

// var obj1 = {
//     john: 'John',
//     age: 28
// };

// var obj2 = obj1;

// obj1.age = 28;

// console.log(obj1.age);
// console.log(obj2.age);

// // Functions

// var age = 27;
// var obj = {
//     name: 'Ali',
//     city: 'Karachi'
// };

// function change(a,b){
//     a = 30,
//     b.city = 'Hyderabad';
// }

// change(age,obj);

// console.log(age);
// console.log(obj.city);


// Passing Function as an Argument

// var years = [1990, 2004, 1978, 1999, 1980];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el){
//     return 2018 - el;
// }

// function isFullAge(el){
//     return el >= 18;
// }

// function maxHeartRate(el){
//     if(el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 * el));
//     }else{
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);


// Function Returning function

// function interviewQuestion(job){
//     if (job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UI design is?');
//         }
//     }else if (job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach ' + name + '?');
//         }
//     }else{
//         return function(name){
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// teacherQuestion('Ali');
// designerQuestion('John');

// interviewQuestion('teacher')('Mike');

// Immediately invoked function Expressions (IIFE)

// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function(goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

// Closures

// function retirement(retirementAge){
//     var a = ' years left until retirement.';
//     return function(yearOfBirth){
//             var age = 2018 - yearOfBirth;
//             console.log((retirementAge - age) + a);
//     }
// }

// retirement(60)(1990);

// var retirementPak = retirement(60);
// retirementPak(1990);

// function interviewQuestion(job){
//     return function(name){
//         if (job === 'designer'){
//             console.log(name + ', can you please explain what UI design is?');
//         }else if(job === 'teacher'){
//             console.log('What subject do you teach ' + name + '?');
//         }else{
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('teacher')('Ali');

//Bind , Call and Apply

var john = {
    name: 'John',
    age: 28,
    job: 'Teacher',
    presentaion: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' + this.name + ' , I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if(style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ' , I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' + ' Have a nice ' + timeOfDay);
        }
    }
};

john.presentaion('friendly', 'evening');

var emily = {
    name: 'Emily',
    age: 23,
    job: 'Designer'
};

// Using call method (method Borrowing)

john.presentaion.call(emily, 'formal', 'morning');
// john.presentaion.call(emily,['friendly', 'evening']);

var johnFormal = john.presentaion.bind(john, 'formal');

johnFormal('evening');

var years = [1990, 2004, 1978, 1999, 1980];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018 - el;
}

function isFullAge(el){
    return el >= 18;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

// Coding Challenge 7

(function(){
    function Question (question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion =
    function() {
        console.log(this.question);
    
        for(i = 0; i < this.answers.length; i++){
            console.log(i + ':' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = 
    function(ans, callback){
        var sc;
        if(ans === this.correct){
            console.log('Your answer is correct.');
            sc = callback(true);
        }else{
            console.log('Try Again.');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score){
        console.log('Your current score is: ' + score);
        console.log('-----------------------------------');
    }
    
    var q1 = new Question (
        'Is Karachi the Capital of Pakistan',
        ['Yes','No'],
        0
    );
    
    var q2 = new Question(
        'Is JS the coolest language of the World?',
        ['Yes','No'],
        0
    );
    
    var q3 = new Question(
        'Whats the name of this course\'s teacher?',
        ['John', 'Micheal','Jonas'],
        2
    );
    
    var q4 = new Question(
        'Whats best describe the coding language?',
        ['Good','Fair','Boring','Fun'],
        3
    );

function score(){
    var sc = 0;
    return function (correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}
var keepScore = score();
    
var questions = [q1, q2, q3, q4];    
function nextQuestion(){
        
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = prompt('Select the correct number.');
    
    
    if(answer !== 'exit'){
        questions[n].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }
    
}

    nextQuestion();
})();

