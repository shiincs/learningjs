const err = new Error('invalid email');

function validateEmail(email) {
    return email.match(/@/)? 
        email :
        new Error(`invalid email: ${email}`);
}

/*
const email = 'saint0227@naver.com'

const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error) {
    console.error(`Error: ${validatedEmail.message}`);
} else {
    console.log(`Valid email: ${validatedEmail}`);
}
*/

const email = null;

try {
    // fucntion validateEmail 에서 match 메서드를 수행 중 exception 발생
    // try 블록 안에서 exception 발생 시 즉시 catch 블럭으로 이동한다.
    const validatedEmail = validateEmail(email);    
    if(validatedEmail instanceof Error) {
        console.error(`Error: ${validatedEmail.message}`);
    } else {
        console.log(`Valid email: ${validatedEmail}`);
    }    
} catch(err) {
    console.error(`Error: ${err.message}`);
}

// exception throw, raise
function billPay(amount, payee, account) {
    if(amount > account.balance) {  //인출금액이 계좌의 잔고보다 클 경우
        throw new Error('insufficient funds');  // exception raise
    }
    account.transfer(payee, amount);    //else
}

// call stack in exception
function a() {
    console.log('a: calling b');
    b();
    console.log('a: done');
}
function b() {
    console.log('b: calling b');
    c();
    console.log('b: done');
}
function c() {
    console.log('c: throwing error');
    throw new Error('c error');
    console.log('c: done');
}
function d() {
    console.log('d: calling c');
    c();
    console.log('d: done');
}

try {
    a();
} catch(err) {
    console.log(err.stack);
}

try {
    d();
} catch(err) {
    console.log(err.stack);
}

// finally block
try {
    console.log('this line is executed');
    // throw new Error('whoops');
    console.log('this line is not...');
} catch(err) {
    console.log('there was an error...');
} finally {
    console.log('...always executed');
    console.log('perform resource cleanup here');
}
