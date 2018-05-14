const u1 = { name: 'Cynthia'};
const u2 = { name: 'Jackson'};
const u3 = { name: 'Olive'};
const u4 = { name: 'James'};

const userRoles = new Map();

// set 메서드는 체인으로 연결 가능하다.
userRoles.set(u1, 'User')
         .set(u2, 'User')
         .set(u3, 'Admin');

/* Map은 배열 형태로 key 와 value를 넘길 수 있다.
const userRoles = new Map([
    [u1, 'User'],
    [u2, 'User'],
    [u3, 'Admin'],
]);
*/

console.log(userRoles);
console.log(userRoles.get(u1)); // Map객체의 property의 value를 가져온다.
console.log(userRoles.has(u3)); // 맵에 키가 존재하는지 확인(boolean)
console.log(userRoles.size);    // 맵의 요소 수를 반환한다(==length)

// Map은 Iterable Object 이기 때문에 for..of 문을 활용해 요소를 뽑아낼 수 있다.
for(let u of userRoles.keys())
    console.log(u.name);
for(let r of userRoles.values())
    console.log(r);
// entries에서 0번 배열은 Map의 첫번째 요소, 1번 배열은 두번째 요소
for(let ur of userRoles.entries())
    console.log(`${ur[0].name}: ${ur[1]}`);
for(let [u, r] of userRoles.entries())  // entries는 맵을 분해해서 받을 수 있다.
    console.log(`${u.name}: ${r}`);
for(let [u, r] of userRoles)    //.entries() 메서드는 맵의 기본 이터레이터로, 생략 가능
    console.log(`${u.name}: ${r}`);

// 이터러블 객체가 아닌 배열로 리턴하고 싶다면 확산 연산자를 사용
console.log([...userRoles.entries()]);

// 개별 요소를 지울 때에는 delete()
userRoles.delete(u4);
// 맵 요소 전체를 지울 때에는 clear()
userRoles.clear();

// WeakMap
const SecretHolder = (function() {
    const secrets = new WeakMap();
    return class {
        setSecret(secret) {
            secrets.set(this, secret);
        }
        getSecret() {
            return secrets.get(this);
        }
    };
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('Secret_A');
b.setSecret('Secret_B');
console.log(a.getSecret());
console.log(b.getSecret());

// Set
const roles = new Set();

roles.add('User');
roles.add('Admin');
console.log(roles.size);
console.log(roles);
roles.delete('Admin');

// WeakSet
const naughty = new WeakSet();

const children = [
    { name: 'Suzy' },
    { name: 'Derek' },
];

naughty.add(children[0]);

for(let child of children) {
    if(naughty.has(child)) {
        console.log(`Coal for ${child.name} TT`);
    } else {
        console.log(`Present of ${child.name} ^^`);
    }
}
