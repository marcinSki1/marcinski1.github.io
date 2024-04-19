let bullets = [];
let blanks = 0;
let liveRounds = 0;
const youHP = document.getElementById('youhp');
const oppHP = document.getElementById('opphp');

function start() {
    document.getElementById('play').style.visibility = 'hidden';
    document.getElementById('box').style.visibility = 'visible';

    let hp = Math.floor(Math.random() * 4) + 2;

    youHP.innerHTML = hp;
    oppHP.innerHTML = hp;

    reload();

    document.getElementById('liveRounds').innerHTML = liveRounds;
    document.getElementById('blanks').innerHTML = blanks;
}

function reload() {
    let bulletAmount = Math.floor(Math.random() * 4) + 2;

    for (let i = 1; i <= bulletAmount; i++) {
        let bulletType = Math.floor((Math.random() * 2));
        
        bullets.push(bulletType);

        if(bulletType == 0) {
            blanks++
        } else if(bulletType == 1) {
            liveRounds++
        }
    }

    if(blanks == 0 || liveRounds == 0){
        reload();
    }
}

function shotYourself() {
    if(bullets.length > 0){
        if (bullets[0] == 0){
            blanks--
        } else if (bullets[0] == 1){
            youHP.innerHTML--
            liveRounds--
    }}

    bullets.shift();

    if(bullets.length == 0){
        alert('Loading New Bullets Into The Barrel');
        reload();
    }

    document.getElementById('liveRounds').innerHTML = liveRounds;
    document.getElementById('blanks').innerHTML = blanks;

    if(youHP.innerHTML == 0){
        alert('You Lost');
        window.location.reload();
    }
}

function shotOpponent() {
    if(bullets.length > 0){
        if (bullets[0] == 0){
            blanks--
        } else if (bullets[0] == 1){
            oppHP.innerHTML--
            liveRounds--
    }}

    bullets.shift();

    if(bullets.length == 0){
        alert('Loading New Bullets Into The Barrel');
        reload();
    }

    document.getElementById('liveRounds').innerHTML = liveRounds;
    document.getElementById('blanks').innerHTML = blanks;

    if(oppHP.innerHTML == 0){
        alert('You Won!');
        window.location.reload();
    }
}