const d = new Date();
console.log(d); // Gregorian date
console.log(d.valueOf());   // Unix Timestamp (milisecond)

// node의 moment.js를 활용해 특정 타임존의 날짜 가져오기
/*
const md = moment.tz([2018, 6, 25, 11, 40], 'Asia/Seoul').toDate();
*/

// 서버에서 날짜 생성하기(UTC 사용 또는 타임존 명시)
const dd = new Date(Date.UTC(2018, 4, 25));
console.log(dd);

// 날짜 데이터 전송하기(JSON 이용)
const before = { d: new Date() };
console.log(before.d instanceof Date);
console.log(before.d);

const json = JSON.stringify(before);
const after = JSON.parse(json);

console.log(after.d instanceof Date);
console.log(typeof after.d);
console.log(after.d);

after.d = new Date(after.d);
console.log(after.d instanceof Date);
console.log(after.d);

// valueof를 사용해 unix timestamp 형태로 받아서 변환
const befores = { d: new Date().valueOf() };
console.log(befores.d instanceof Date);
console.log(befores.d);

const jsons = JSON.stringify(befores);
const afters = JSON.parse(jsons);

afters.d = new Date(afters.d);
console.log(afters.d instanceof Date);
console.log(typeof afters.d);
console.log(afters.d);

// 날짜 구성요소
const ddd = new Date(Date.UTC(2018, 4, 25));

console.log(ddd.getFullYear());
console.log(ddd.getMonth());
console.log(ddd.getDate());
console.log(ddd.getDay());  // 요일
console.log(ddd.getHours());
console.log(ddd.getMinutes());
console.log(ddd.getSeconds());
console.log(ddd.getMilliseconds());

console.log(ddd.getUTCFullYear());
console.log(ddd.getUTCMonth());
console.log(ddd.getUTCDate());

// 날짜 비교
const d1 = new Date(2018, 4, 25);
const d2 = new Date(2008, 3, 21);

console.log(d1 > d2);
console.log(d1 < d2);

// 날짜 연산
const msDiff = d1 - d2;
const daysDiff = msDiff/1000/60/60/24;
console.log(`${daysDiff} days`);

// Array.prototype.sort 를 활용해 날짜 정렬하기
const dates = [];

    // 랜덤 날짜 만들기
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for(let i=0; i<10; i++)
    dates.push(new Date(min + delta*Math.random()).valueOf());

console.log(dates);

    // 배열 정렬하기(오름차순)
dates.sort((a, b) => a - b);
console.log(dates);

    // 배열 정렬하기(내림차순)
dates.sort((a, b) => b - a);
console.log(dates);