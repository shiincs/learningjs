//m 이상 n 이하의 무작위 정수를 반환합니다.
function rand(m, n) {
    return m + Math.floor((n-m+1) * Math.random());
}

//크라운 앤 앵커 게임의 여섯 가지 도형 중 하나를 무작위 반환합니다.
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)];
}

let funds = 50;     // 시작조건
let round = 0;      // 몇 판째 게임하고 있는지

while(funds > 1 && funds < 100) {
    /*funds = funds + 2;  // 2보 전진
    funds = funds - 1;  // 1보 후퇴*/
    //funds --; == (funds = funds - 1;)
    round++;
    console.log(`round ${round}`);
    console.log(`\tstarting funds: ${funds}p`);

    // 돈을 겁니다.
    const bets = { crown: 0, anchor: 0, heart: 0, 
        spade: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, funds);
    if(totalBet === 7) {    //집힌 돈이 7일 경우 하트에 자본금 올인
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        //그 판에 걸 돈을 분배합니다. (판돈 나누기)
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while(remaining > 0); //remaining이 0이 될 때까지 do 반복
    }
    funds = funds - totalBet;
    console.log('\tbets: ' + 
        Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
        ` (total: ${totalBet} pence)`
    );

    // 주사위를 굴립니다.
    const hand = [];
    for(let roll=0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

    // 그림을 맞췄으면 돈을 가져옵니다.
    let winnings = 0;
    for(let die=0; die < hand.length; die++) {
        let face = hand[die];
        if(bets[face] > 0) {
            winnings = winnings + bets[face];
        }
    }
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);