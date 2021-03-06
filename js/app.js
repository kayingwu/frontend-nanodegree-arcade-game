//ref:
//https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if(this.x > 5) {
      this.x = -1;
    } else {
      this.x = this.x + dt + Math.floor(Math.random()* 1.01);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
  }

  update(dt) {

  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }

  handleInput(input) {
    if (input === 'left' && this.x > 0) {
      this.x = this.x - .5;
    } else if (input === 'right' && this.x < 4) {
      this.x = this.x + .5;
    } else if (input === 'up' && this.y > 0) {
      this.y = this.y - .5;
    } else if (input === 'down' && this.y < 5) {
      this.y = this.y + .5;
    } else if (this.y === 0) {
      this.x = 2;
      this.y = 5;
    }
  }

}

function checkCollisions() {
  if (Player.y === allEnemies.y && Player.x === allEnemies.x) {
    Player.x = 2;
    Player.y = 5;
  }
};
/*
const Player = function Player(character) {
  this.img = character || 'images/char-boy.png';
  this.x = 203;
  this.y = 440;
}
Player.prototype.update = function() {}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.img), this.x, this.y);
}
Player.prototype.handleInput = function() {}
*/

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player(2, 5);
const allEnemies = [...Array(3)].map(
  (_,i) => new Enemy(0, i+1)
);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
