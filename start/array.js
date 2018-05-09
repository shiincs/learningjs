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