//배열 리터럴
const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 = [
    { name: "Fred", type: "object", luckyNumbers: [5, 7, 13] },
    [
        { name: "Susan", type: "object" },
        { name: "Anthony", type: "object" },
    ],
    1,
    function() { return "arrays can contain functions too"; },
    "three",
];

//배열 요소에 접근하기
console.log(arr3[0]);
console.log(arr4[0].luckyNumbers);
console.log(arr4[1][0]);
console.log(arr4[1][0].name);
console.log(arr4[1][1]);
console.log(arr4[1][1].type);
console.log(arr4[2]);
console.log(arr4[3]());
console.log(arr4[4]);

// const arr = ["b", "c", "d"];
// arr.push("e");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift("a");
// console.log(arr);
// arr.shift();
// console.log(arr);

//some 메서드
const arr = [5, 7, 12, 15, 17];
//조건에 맞는 요소가 있으면 true를 return 하고 메서드 종료
console.log(arr.some(x => x%2===0));
//조건에 맞는 요소를 찾지못하면 false를 return 하고 메서드 종료
console.log(arr.some(x => Number.isInteger(Math.sqrt(x))));

//map과 filter 메서드
const cart = [ { name: "Widget", price: 9.95}, {name: "Gadget", price: 22.95} ];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x*0.8);

console.log(names, prices, discountPrices);

//포커 카드 만들기
//카드 덱 만들기
const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])   //Heart, Clover, Diamond, Spade (카드 모양)
    for(let value=1; value <= 13; value++)  //카드 숫자(A-2-3-4-5-6-7-8-9-10-J-Q-K)
        cards.push( {suit, value} );    //cards 배열에 카드 모양과 카드 숫자를 담은 객체를 저장(stack 형태로)

/*
//value가 2인 카드
console.log(cards.filter(c => c.value === 2));

//suit가 diamond인 카드
console.log(cards.filter(c => c.suit === 'D'));

//카드 숫자가 영문인 특수카드
console.log(cards.filter(c => c.value === 1 || c.value > 10));

//Spade 모양의 특수카드
console.log(cards.filter(c => c.suit === 'S' && (c.value === 1 || c.value > 10)));
*/
      
//카드 덱을 그림으로 표현
function cardToString(c) {
    const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
    const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
        { for(let i=2; i<=10; i++)
            values[i] = i; }
    return values[c.value] + suits[c.suit];
}

console.log(cards.filter(c => c.suit === 'S').map(cardToString));

/*
for(let i=0; i<=51; i++) {
    if(i<=12) {
        cards[i].suit = '\u2665';
    } else if(i>12 && i<=25) {
        cards[i].suit = '\u2663';
    } else if(i>25 && i<=38) {
        cards[i].suit = '\u2666';
    } else if(i>38 && i<=51) {
        cards[i].suit = '\u2660';
    }
}

console.log(cards);
*/

//reduce 메서드
const array = [5, 7, 2, 4];
// parameter a = 누적값, x = 배열 요소, return 표현식 뒤의 0은 초기값
const sum = array.reduce((a, x) => a += x, 0);
console.log(sum);
// sum2와 sum은 같다. 초기값이 없으면 첫 번째 배열 요소 array[0]가 초기값이 된다.
const sum2 = array.reduce((a, x) => a += x);
console.log(sum2);

const words = ['Beachball', 'Rodeo', 'Angel', 
                'Aardvark', 'Xylophone', 'November', 'Chocolate',
                'Papaya', 'Uniform', 'Joker', 'Clover', 'Bali'];
const alphabetical = words.reduce((a, x) => {
    console.log(a[x[0]]);
    if(!a[x[0]])
        a[x[0]] = [];
    a[x[0]].push(x);
    return a;
}, {});

const longWords = words.reduce((a, x) => 
    x.length > 6? a + " " + x : a + ""
).trim();

console.log(longWords);

//longWords를 reduce 대신 filter와 join을 사용해 같은 결과값을 만든다.
console.log(words.filter(c => c.length > 6).join(' '));