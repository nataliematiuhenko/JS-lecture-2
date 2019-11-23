// ********closures********


let countInvocations = (function() {
  let count = 1;
  return function() {
    console.log("Function was invoked " + count++ + " time(s)");
  }
})();


countInvocations(); // 1
countInvocations(); // 2
countInvocations(); // 3



//********Classes ********

class UserList {

  constructor(array) {
    this.array = array;
  }

  showNames() {
    console.log(this.array.map(el => el.firstName));
    return this;
  }

  showById(id) {
    const result = this.array.find(el => el.id === id)
    console.log(result ? result : `Unable to find user with id: ${id}`)
    return this;
  }

  add(obj) {
    if (!obj.id && obj.firstName) {
      let ids = this.array.map(el => el.id);
      let maxId = Math.max(...ids);
      obj.id = maxId + 1;
      this.array.push(obj);
    }
    return this;
  }

  logUserCount() {
    console.log(this.array.length);
    return this;
  }
  removeUserById(id) {
    const user = this.array.find(el => el.id === id)
    if (!user) {
      console.log('Unable to find user with id ' + id);
      return;
    } else {
      const userIndex = this.array.indexof(user);
      this.array = this.array.splice(userIndex, 1)
      console.log('bye bye...');
    }
    return this;
  }
}



// ********Inheritance ********

class Creature {

  constructor({ name, attack, hitpoints }) {
    this.name = name,
    this.attack = attack,
    this.hitpoints = hitpoints,
    this.totalHitpoints = this.hitpoints;
    this.currentHitpoints = this.hitpoints;
  }

  getHitpoints() {
    return this.currentHitpoints;
  }

  setHitpoints(num) {
    return this.currentHitpoints = num;
  }


  getTotalHitpoints() {
    return this.totalHitpoints;
  }

  setTotalHitpoints(points) {
    return this.totalHitpoints = points;
  }

  getAttack() {
    return this.attack;
  }

  setAttack(newAttack) {
    return this.attack = newAttack;
  }

  fight(enemy) {
    if (enemy != this) {
      let damage = enemy.currentHitpoints - this.attack;
      enemy.setHitpoints(damage);
      if(!enemy.isAlive()) {
        this.winner(enemy);
      }
    }
  }

  isAlive() {
    return this.currentHitpoints > 0 ? true : false;
  }
}


class Champion extends Creature {
  constructor(name, attack, hitpoints) {
    super(name, attack, hitpoints)
  }

  fight(enemy) {

    if(enemy == this) {
      return "Don't beat youself!"
    } else {
      let damage = enemy.currentHitpoints - this.attack;
      enemy.setHitpoints(damage);

      if(!enemy.isAlive()) {
        console.log(this.winner(enemy));
      }
    }

    if(enemy instanceof Champion) {
      if (enemy.block.state == true) {
        enemy.block.state = false;
        return;
      }
    }

  }

  rest() {

    if (this.currentHitpoints+=5 > this.totalHitpoints) {
      return this.totalHitpoints;
    } else {
      return this.currentHitpoints;
    }
  }

  defence() {
    this.block.state = true;
  }

  block = {
    state: false
  }


  winner(enemy) {
    console.log(this.name + " is a winner! His attack increased!")
    this.setAttack(this.attack + 1);
  }

}

class Monster extends Creature {

  constructor (name, attack, hitpoints) {
    super(name, attack, hitpoints),
    this.doubleAttack = this.attack * 2
  }


  enrage() {
    this.enragedState.state = true;
  }

  enragedState = {
    state: false,
    count: 0
  }


  fight(enemy) {

    if (enemy.block.state == true) {
      enemy.block.state = false;
      return;
    }

    if(this.enragedState.state == true) {
      this.enragedState.count += 1 ;

        if(this.enragedState.count <= 2) {
          this.attack = this.doubleAttack;

        } else {
          this.enragedState.state = false;
          this.enragedState.count = 0 ;
          this.attack = this.doubleAttack/2;
        }
    }

    if(enemy == this) {
      return "Don't beat youself!"
    } else {
        let damage = enemy.currentHitpoints - this.attack;
        enemy.setHitpoints(damage);

        if(!enemy.isAlive()) {
          console.log(this.winner(enemy));
        }
      }

  }


  winner(enemy) {
    console.log(this.name + " is a winner! Let\'s feast on enemies dead body!");

    let restoreCurrent = Math.floor(0.25 * enemy.totalHitpoints);
    let restoreTotal = Math.floor(0.1 * enemy.totalHitpoints);

    this.currentHitpoints += restoreCurrent;
    this.totalHitpoints += restoreTotal;
  }
}


let Heracles = new Champion({name:'Heracles', attack: 10, hitpoints: 50});
let boar = new Monster({name: "Erymanthian Boar", attack: 5, hitpoints: 100});
