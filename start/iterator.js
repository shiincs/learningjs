const book = [
    'Twinkle, twinkle, little bat!',
    'How I wonder what you\'re eat',
    'Up above the world you fly,',
    'Like a tea tray in the sky.',
    'Twinkle, twinkle, little bat!',
    'How I wonder what you\'re eat',
];

// .values 메서드를 사용해 book 배열의 이터레이터를 생성
const it = book.values();

// 이터레이터의 값을 읽어오려면 .next 메서드를 사용한다.
/* console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

// while 루프를 사용해 이터레이터 사용
let current = it.next();
while(!current.done) {
    console.log(current.value);
    current = it.next();
}

// 이터레이터는 독립적으로 사용할 수 있다.
/* const it1 = book.values();
const it2 = book.values();

console.log(it1.next());
console.log(it1.next());

console.log(it2.next());

console.log(it1.next()); */

// 이터레이션 프로토콜을 사용해 객체를 이터러블하게 만든다.
class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({ message, timestamp: Date.now() });
    }
    [Symbol.iterator]() {
        return this.messages.values();
    }
}

const log = new Log();
log.add('first day at sea');
log.add('spotted whale');
log.add('spotted another vessel');

for(let entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}

// 이터레이터를 활용해 피보나치 수열 만들기
class FibonacciSequence {
    [Symbol.iterator]() {
        let a = 0, b = 1;
        return {
            next() {
                let rval = { value: b, done: false };
                b += a;
                a = rval.value;
                return rval;
            }
        };
    }
}

const fib = new FibonacciSequence();
let i = 0;
for(let n of fib) {
    console.log(n);
    if(++i > 9) break;
}

// 제너레이터(generator)
function* rainbow() {
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

const rainbowit = rainbow();
console.log(rainbowit.next());
console.log(rainbowit.next());
console.log(rainbowit.next());
console.log(rainbowit.next());
console.log(rainbowit.next());
console.log(rainbowit.next());
console.log(rainbowit.next());
console.log(rainbowit.next());

// for...of 루프를 사용하면 변수에 iterator의 value만 담는다.
for(let color of rainbow()) {   
    console.log(color);
}

// 제너레이터를 활용한 양방향 통신(yield)
function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}`;
}

const iter = interrogate();
console.log(iter.next().value);
console.log(iter.next('Shin').value);
console.log(iter.next('violet').value);