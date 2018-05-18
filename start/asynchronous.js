// setTimeout 함수를 사용한 콜백 예제
/*
function f() {
    console.log("After timeout: " + new Date());
}
setTimeout(f, 5*1000);
*/
/*
console.log("Before timeout: " + new Date());
setTimeout(function() {     // 일반적으로 익명 함수 형태로 사용한다.
    console.log("After timeout: " + new Date());
}, 5*1000);
console.log("I happen after setTimeout!");
console.log("Me too!");
*/

// setInterval 예제 (분이 넘어가거나 10회째가 될 때까지 5초마다 콜백 실행)
/*
const start = new Date();
let i=0;
const intervalId = setInterval(function() {
    let now = new Date();
    if(now.getMinutes() !== start.getMinutes() || ++i > 10)
        return clearInterval(intervalId);
    console.log(`${i}: ${now}`);
}, 5*1000);
*/

// 스코프와 비동기적 실행
function countdown() {
    let i;  //let의 스코프가 for문 바깥에 있기 때문에 콜백에 의해 호출되는 i는 모두 같다.
    console.log("countdown:");
    for(i=5; i>=1; i--) {
        setTimeout(function() {
            console.log(i===0? "Go!" : i);
        }, (5-i)*1000);
    }
}

function countdown1() {
    console.log("countdown:");
    for(let i=5; i>=0; i--) {   //let의 스코프가 for문에 있기 때문에 콜백에 의해 호출되는 i는 모두 다르다.
        setTimeout(function() {
            console.log(i===0? "Go!" : i);
        }, (5-i)*1000);
    }
}

countdown1();

// 오류 우선 콜백(error-first callback)
/*
const fs = require('fs');

const fname = 'may_or_may_not_exist.txt';
fs.readFile(fname, function(err, data) {
    if(err) return console.error(`error reading file ${fname}: ${err.message}`);
    console.log(`${fname} contents: ${data}`);
});
*/

// 콜백 헬(callback hell)
const fs = require('fs');

fs.readFile('a.txt', function(err, dataA) {
    if(err) console.error(err);
    fs.readFile('b.txt', function(err, dataB) {
        if(err) console.error(err);
        fs.readFile('c.txt', function(err, dataC) {
            if(err) console.error(err);
            setTimeout(function() {
                fs.writeFile('d.txt', dataA+dataB+dataC, function(err) {
                    if(err) console.error(err);
                });
            }, 60*1000);
        });
    });    
});

function readSketchyFile() {
    try {
        fs.readFile('does_not_exist.txt', function(err, data) {
            if(err) throw err;
        });
    } catch(err) {
        console.log('warning: minor issue occured, program continuing');
    }
}

readSketchyFile();