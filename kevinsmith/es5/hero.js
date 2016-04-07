var util = require('util');

function Starfleet(name, rank, armor, attack) {
  this.name = name;
  this.armor = armor;

  var  bonus = (rank == 'Captain' ? 3 : 0);

  this.attack = attack + bonus;
  this.rank = rank;
  this.health = 100;
}

function Villain(name, armor, attack) {
  this.name = name;
  this.armor = armor;
  this.attack = attack;
  this.health = 100;
}

function Weapon(name, attack) {
  this.name = name;
  this.attack = attack;
}


function Klingon(name) {
  var newKlingon = this // {}
  Villain.call(newKlingon, name, 3, 7) 
}

Starfleet.prototype.attack = function(target) {
  target.takeDamage(this.attack);
}

Starfleet.prototype.takeDamage = function(damage) {
  this.health = (this.health - (damage - this.armor));
}


Villain.prototype.attack = function(target) {
  target.takeDamage(this.attack);
}

Villain.prototype.takeDamage = function(damage) {
  this.health = (this.health - (damage - this.armor));
}

var hero1 = new Starfleet('Kirk', 'Captain', 3, 7);
var hero2 = new Starfleet('Spock','Commander', 6, 12);


var villain1 = new Villain('Roc', 7, 10);
var villain2 = new Klingon('Kang');

var phaser1 = new Weapon('Phaser1', 2);
var phaser2 = new Weapon('Phaser2', 4);
var blaster = new Weapon('Klingon Phaser', 4);


var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 
  prompt.start();
 
  // 
  // Get two properties from the user: username and email 
  // 
  prompt.get(['attacker', 'atackee'], function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('  attacker: ' + result.attacker);
    console.log('  atackee: ' + result.atackee);
    
  });

// process.stdin.resume();
// process.stdin.setEncoding('utf8');


// process.stdin.on('pause', function (text) {
//   console.log('(quit) to quit');
// });

// process.stdin.on('data', function (text) {
//   console.log('received data:', util.inspect(text));
//   if (text === 'quit\n') {
//     done();
//   }
// });

// function done() {
//   console.log('Now that process.stdin is paused, there is nothing more to do.');
//   process.exit();
// }


// //hero2.attack(hero1)

// var trogdor1 = new Starfleet('Trogdor the burninator yay', 1, 50)
// var trogdor2 = new Starfleet('lizardman', 1, 50)
// var trogdor3 = new Starfleet('yatd', 1, 50)

// var castleEater = new Trogdor('yum castles')
// console.log(castleEater.health)