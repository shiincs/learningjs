// 오늘이 윤년인지 판단하는 함수
function printLeapYearStatus() {
    const year = new Date().getFullYear();
    if(year%4 !== 0) console.log(`${year} is NOT a leap year.`)
    else if(year%100 != 0) console.log(`${year} IS a leap year.`)
    else if(year%400 != 0) console.log(`${year} is NOT a leap year.`)
    else console.log(`${year} IS a leap year.`);
}

printLeapYearStatus();

// 값을 반환하는 서브루틴으로서의 함수
function isCurrentYearLeapYear() {
    const year = new Date().getFullYear();
    if(year%4 !== 0) return false;
    else if(year%100 != 0) return true;
    else if(year%400 != 0) return false;
    else return true;
}

const daysInMonth = [
    31, isCurrentYearLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

if(isCurrentYearLeapYear()) console.log('This year is Leap year!');
else console.log('This year is NOT a Leap Year');

// 함수로서의 함수(순수한 함수 or 순수하지 않은 함수)
const colors = ['red', 'orange', 'yellow', 'green',
                'blue', 'indigo', 'violet'];
let colorIndex = -1;
// 순수하지 않은 함수 getNextRainbowColor()
function getNextRainbowColor() {
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
}

getNextRainbowColor(); console.log(colorIndex);
getNextRainbowColor(); console.log(colorIndex);
getNextRainbowColor(); console.log(colorIndex);
getNextRainbowColor(); console.log(colorIndex);
getNextRainbowColor(); console.log(colorIndex);
getNextRainbowColor(); console.log(colorIndex);
getNextRainbowColor(); console.log(colorIndex);
getNextRainbowColor(); console.log(colorIndex);

// 순수한 함수 isLeapYear(year)
function isLeapYear(year) {
    if(year%4 !== 0) return false;
    else if(year%100 != 0) return true;
    else if(year%400 != 0) return false;
    else return true;
}

// 브라우저에서 getNextRainbowColor() 호출
/*
setInterval(function() {
    document.querySelector('.rainbow')
        .style['background-color'] = getNextRainbowColor();
}, 1000);
*/

// getNextRainbowColor()에 이터레이터 적용
function getRainbowIterator() {
    const colors = ['red', 'orange', 'yellow', 'green',
                    'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return {
        next() {
            if(++colorIndex >= colors.length) colorIndex = 0;
            return { value: colors[colorIndex], done: false };
        }
    };
}

const rainbowIterator = getRainbowIterator();
setInterval(function() {
    document.querySelector('.rainbow')
    .style['background-color'] = rainbowIterator.next().value;
}, 1000);

console.log(typeof getRainbowIterator);

// IIFE와 비동기적 코드
// 타이머 예제
//setTimeout(function() { console.log('Hello'); }, 1500); // 1.5초 뒤 Hello를 출력하는 함수 수행

// for loop 내부의 함수는 loop가모두 다 돌고 난 뒤에 실행되기 때문에 i는 -1만 출력한다.
/*
var i;
for(i=5; i>=0; i--) {
    setTimeout(function() {
        console.log(i===0? "go!" : i);
    }, (5-i)*1000);
}
*/

// 함수를 하나 더 써서 스코프를 새로 만들고, for loop 안에서 함수를 실행하면 각 단계에서
// i의 값이 클로저에 캡처된다.
/*
function loopBody(i) {
    setTimeout(function() {
        console.log(i===0? "go!" : i);
    }, (5-i)*1000);
}
var i;
for(i=5; i>=0; i--) {
    loopBody(i);
}
*/

// IIFE를 활용해서 고쳐보자.
/*
var i;
for(i=5; i>=0; i--) {
    (function(i) {
        setTimeout(function() {
            console.log(i===0? "go!" : i);
        }, (5-i)*1000);
    })(i);
}
*/

// 블록 스코프 변수를 사용해 간단하게 만들어보자.
/*
for(let i=5; i>=0; i--) {
    setTimeout(function() {
        console.log(i===0? "go!" : i);
    }, (5-i)*1000);
}
*/

// 함수에 함수를 전달하는 예제
function sum(arr, f) {
    // 함수가 전달되지 않았으면 매개변수를 그대로 반환하는 null 함수를 씁니다.
    if(typeof f != function) f = x => x;

    return arr.reduce((a,x) => a += f(x), 0);
}
sum([1, 2, 3]); // 함수를 전달하지 않았기 때문에 null 함수로 들어간다. (1+2+3)
sum([1, 2, 3], x => x*x);
sum([1, 2, 3], x => Math.pow(x, 3));

// 함수를 반환하는 함수
// 위에서 만들어둔 sum 함수를 활용할 경우
function sumOfSquares(arr) {
    return sum(arr, x => x*x);
}

function newSummer(f) {
    return arr => sum(arr, f);
}
const sumOfSquares = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));
sumOfSquares([1, 2, 3]);
sumOfCubes([1, 2, 3]);

// 재귀(recursion)
// 건초더미(haystack)에서 바늘(needle) 찾기
function findNeedle(haystack) {
    if(haystack.length === 0) return console.log("no haystack here!");
    if(haystack.shift() === 'needle') return console.log("found it!");
    return findNeedle(haystack);
}

findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay']);

// 계승(factorial) 찾기
function fact(n) {
    if(n === 1) return 1;
    return n * fact(n-1);
}

console.log(fact(5));