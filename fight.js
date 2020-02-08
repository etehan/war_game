var charactor = 'joe';
var charactor_lifepoints = 100;

var pistol = 20;
var punch = 10;

var bandages = 10;
var medkit = 100;

var enemy = 'random';
var enemy_lifepoints = 100;
var rpg = 80;




function enemy_shoots() {
    console.log('enemy shoots character')
    charactor_lifepoints = charactor_lifepoints - pistol
    console.log('character new lifepoints is')
    console.log(charactor_lifepoints)
}

function enemy_punches() {
    console.log('enemy punches charactor')
    charactor_lifepoints = charactor_lifepoints - punch
    console.log('character new lifepoints')
    console.log(charactor_lifepoints)
}


function fight() {
    //1. give us a random number 
    //2. if the random number is less than 0.5 character 1 attacks 
    //3. else character 2 attacks 
    var random = Math.random();
    console.log(random);
    if (random < 0.5) {
        character_fights_back();
    } else {
        enemy_shoots();
    }
}

function character_heals() {
    console.log('character heals')
    charactor_lifepoints = charactor_lifepoints + medkit
    if (charactor_lifepoints > 100) {
        charactor_lifepoints = 100
    }
    console.log('characters new lifepoints')
    console.log(charactor_lifepoints)
}

function character_fights_back() {
    console.log('character fights')
    enemy_lifepoints = enemy_lifepoints - pistol
    enemy_lifepoints = enemy_lifepoints - pistol
    enemy_lifepoints = enemy_lifepoints - pistol
    console.log('enemys new lifepoints')
    console.log(enemy_lifepoints)
}

var k = confirm("do you wanna fight?")

if(k==true){
    while(charactor_lifepoints>0 && enemy_lifepoints>0){
        fight();
    }
}else{
    console.log("run away")
}


