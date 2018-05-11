// 객체 프로퍼티 나열 방법 : for...in
const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4};
console.log(`${o['a']}`);

for(let prop in o) {
    if(!o.hasOwnProperty(prop)) {
        continue;
    }
    console.log(`${prop}: ${o[prop]}`);
}

// Object.keys : 객체에서 나열 가능한 문자열 프로퍼티를 배열로 return
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

//객체에서 x로 시작하는 프로퍼티를 모두 가져올 때
const x = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };

Object.keys(x).filter(prop => prop.match(/^x/))
              .forEach(prop => console.log(`${prop}: ${x[prop]}`));

// 클래스 Car 생성
/* class Car {
    constructor() {

    }
} */

// 클래스 Car의 인스턴스 car1, car2 생성
/* const car1 = new Car();
const car2 = new Car(); */

// 객체가 클래스의 인스턴스인지 확인하는 instanceof 연산자
/* console.log(car1 instanceof Car);   //true
console.log(car1 instanceof Array);   //false (Array 클래스는 내장 클래스)
*/

// Car 클래스 구체화
 /* class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear) {
        if(this.userGears.indexOf(gear) < 0) {
            throw new Error(`Invalid gear: ${gear}`);
        }
        this.userGear = gear;
    }
} */

// 가짜접근제한(_)을 통한 인스턴스 객체의 프로퍼티 보호
/* class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }
    set userGear(value) {
        if(this._userGears.indexOf(value) < 0){
            throw new Error(`Invalid gear : ${value}`);
        }
        this._userGear = value;
    }
    get userGear() {
        return this._userGear;
    }
    shift(gear) {
        this._userGear = gear;
    }
} */

// 스코프를 이용하는 WeakMap 클래스의 인스턴스를 사용해 프로퍼티 완벽 보호
// 즉시 호출하는 함수 표현식 사용
/* const Car = (function() {

    const carProps = new WeakMap();

    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, { userGear: this._userGears[0]} );
        }
        set userGear(value) {
            if(this._userGears.indexOf(value) < 0) {
                throw new Error(`Invalid gear: ${value}`);
            }
            carProps.get(this).userGear = value;
        }
        get userGear() {
            return carProps.get(this).userGear;
        }

        shift(gear) {
            this.userGear = gear;
        }
    }
    return Car;
})();
*/

// Car 클래스 사용
/*
const car1 = new Car('Tesla', 'Model S');   //인스턴스 car1 생성
const car2 = new Car('Mazda', '3i');        //인스턴스 car2 생성
car1.shift('D');    //car1 인스턴스에 대해 shift method 실행
car2.shift('R');    //car2 인스턴스에 대해 shift method 실행

console.log(car1.userGear);
console.log(car2.userGear);
*/

// 프로토 타입
/*
console.log(car1.shift === Car.prototype.shift);    //true
console.log(car1.shift === car2.shift);             //true

car1.shift = function(gear) {               //인스턴스에서 메서드 정의
    this.userGear = gear.toUpperCase(); 
};

car1.shift === Car.prototype.shift;   //false (이름만 같고 서로 다른 메서드)
car1.shift === car2.shift;            //false
*/

// 정적 메서드(클래스 메서드)
/* class Car {
    static getNextVin() {
        return Car.nextVin++;   //정적메서드에서는 this 대신 클래스명을 쓴다.
    }
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    static areSimilar(car1, car2) {
        return (car1.make === car2.make) && (car1.model === car2.model);
    }
    static areSame(car1, car2) {
        return car1.getNextVin === car2.getNextVin;
    }
}
Car.nextVin = 0;

const car3 = new Car('Tesla', 'S');
const car4 = new Car('Mazda', '3');
const car5 = new Car('Mazda', '3');

car3.vin;   //0
car4.vin;   //1
car5.vin;   //2

Car.areSimilar(car3, car4); //false
Car.areSimilar(car4, car5); //true
Car.areSame(car4, car5);    //false
Car.areSame(car4, car4);    //true
*/

// 상속
class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Car created");
    }
    deployAirbags() {
        console.log("BWOOSH!");
    }
}

const car1 = new Car();
car1.deployAirbags();
car1.addPassenger('cs');    //상속받은 Vehicle 클래스의 메서드 사용가능
console.log(car1.passengers);   //부모 클래스의 객체에 접근 가능

// 객체 프로퍼티 나열(hasOwnProperty()의 의미)
class Super {
    constructor() {
        this.name = 'Super';
        this.isSuper = 'true';
    }
}

Super.prototype.sneaky = 'not recommended!';

class Sub extends Super {
    constructor() {
        super();
        this.name = 'Sub';
        this.isSub = 'true';
    }
}

const obj = new Sub();

for(let p in obj) {
    console.log(`${p}: ${obj[p]}` +
        (obj.hasOwnProperty(p)? '': ' (inherited)'));
}

// 문자열 표현(toString() 메서드)
/* class Car {
    toString() {
        return `${this.make} ${this.model}: ${this.vin}`;
    }
} */

// 다중 상속, 믹스인, 인터페이스
class InsurancePolicy {}
function makeInsurable(o) {
    o.addInsurancePolicy = function(p) { this.insurancePolicy = p; };
    o.getInsurancePolicy = function() { return this.insurancePolicy; };
    o.isInsured = function() { return !!this.insurancePolicy; };
}

//const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1.addInsurancePolicy());

//위의 방법을 쓰면 모든 자동차에서 makeInsurable을 호출해야 한다.
makeInsurable(Car.prototype);
//const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());
//이 방법을 쓰면 makeInsurable의 보험 관련 메서드들이 Car 클래스에 정의된 것처럼 작동한다.

//서로 다른 클래스 간에 메서드가 충돌하는 경우를 방지하기 위해 심볼을 사용
class Insurance Policy {}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o) {
    o[ADD_POLICY] = function(p) { this[_POLICY] = p; }
    o[GET_POLICY] = function() { return this[_POLICY]; }
    o[IS_INSURED] = function() { return !!this[_POLICY]; }
}