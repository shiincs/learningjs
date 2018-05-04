/* 
const s = "HELLO";
s.rating = 3;
console.log(s.rating);

const date = new Date();
const specificDate = new Date(2018, 3, 31, 15, 45, 10, 441);
console.log(date);
console.log(specificDate);

const n = 0;
const nn = Boolean(n);

console.log(nn);
*/

/* 
const x = 5;
const y = 3 - -x;

console.log(y);

const s = "5";
const t = 3 + +s;

console.log(t);
*/

/*
let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
const r5 = `${r1}, ${r2}, ${r3}, ${r4}`;

console.log(r5);

let y = 10;
const r6 = y-- + y--;
const r7 = --y + --y;
const r8 = y-- + --y;
const r9 = --y + y--;

console.log(r6, r7, r8, r9);

const n = 5;
const s = "5";

console.log(`n=${n}, s=(${typeof(s)})${s}`);
console.log(`n===s -> ${n===s}`);
console.log(`n!==s -> ${n!==s}`);
console.log(`n === Number(s) -> ${n === Number(s)}`);
console.log(`n !== Number(s) -> ${n !== Number(s)}`);

const a = {name: "an object"};
const b = {name: "an object"};

console.log(a===b);
console.log(a!==b);
console.log(a==b);
console.log(a!=b);
*/

/*
function sayHello() {
    console.log("Hello World");
    console.log("안녕 월드");
}

sayHello();

function getGreeting() {
    let say = ["HelloWorld", "안녕월드"];
    return say;
}
console.log(getGreeting());

const f = sayHello;
f();

const o = {};
o.f = sayHello;
o.f();

const arr = [1, 2, 3];
arr[0] = sayHello;
arr[0]();
*/

/*
function f(o) {
    o.message = "f에서 수정함";
    
    o = {
        message: "새로운 객체!"
    }
    console.log(`f 내부: o.message = ${o.message}(할당 후)`);
}

let o = {
    message: "초기값"
};

console.log(`f를 호출하기 전 : o.message = ${o.message}`);
f(o);
console.log(`f를 호출한 다음 : o.message = ${o.message}`);
*/

/*
function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
};

getSentence(o);

console.log(getSentence(o));

function getStatement([subject, verb, object]) {
    return `${subject} ${verb} ${object}`; 
}
const arr = ["I", "love", "JavaScript"];

console.log(getStatement(arr));
*/

/*
function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for(let i=0; i<words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex"));

const o = {
    name: 'dog',
    bark: function() {return "Woof!";},
}

console.log(o);

function dog(o) {
    o = {
        name: 'wallace',
        bark() {return "Woof!";},
    }
    console.log(o);
}

dog(o);

const d = {
    name: 'dog',
    speak() {return `My name is ${this.name}`;},
}

console.log(d.speak());

const o = {
    name: 'Julie',
    greetBackwards: function() {
        let self = this;
        function getReverseName() {
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`;
    }
};

console.log(o.greetBackwards());


const g = function f(stop) {
    if(stop) {console.log('f stopped');}
    f(true);
};

console.log(g(false));


const s = function t(x) {
    if(x>10) {
        console.log(x);
        return;
    }
    t(x+1);
};

s(0);


const o = {
    name: 'Julie',
    greetBackwards: function() {
        const getReverseName = () => {
            let nameBackwards = '';
            for(i=this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return console.log(`${getReverseName()} si eman ym`);
    },
};

o.greetBackwards();
*/

const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};

function greet() {
    return `Hello, I'm ${this.name}`;
}

greet.call(bruce);
greet.call(madeline);

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');

console.log(bruce);
console.log(madeline);

update.call(bruce);
update.call(madeline);

console.log(bruce);
console.log(madeline);

delete bruce.birthYear;
delete bruce.occupation;
delete madeline.birthYear;
delete madeline.occupation;
console.log(bruce);
console.log(madeline);

update.apply(bruce, [1949, 'singer']);
update.apply(madeline, [1942, 'actress']);

console.log(bruce);
console.log(madeline);

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949('actor');

console.log(bruce);

const arr = [-3, 5, 8, -6, 10];

console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

console.log(Math.min(...arr));
console.log(Math.max(...arr));