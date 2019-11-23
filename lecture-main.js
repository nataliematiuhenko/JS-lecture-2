// closures
const makeAdder = function(a) {
  return function(b) {
    return a + b;
  };
}

const addFunction = makeAdder(5);

console.log(addFunction(2));

// OOP , class <= function (ES5) <= fn is an instance of obj

class User {
  constructor (name) {
    this.name = name;
  }
}

let instance = new User('John');
console.log(instance.name); // "John"


// Inheritance practice

class Charmander {

  type = 'Fire';

  constructor(props) {
    this.height = props.height;
    this.weight = props.weight;
    this.specie = 'Lizard Pokemon';
  }

  getType() {
    return this.type;
  }

  getSpecie() {
    return this.specie;
  }

  getHeight() {
    return this.height;
  }

  canWalk() {
    console.log(true);
  }
}

class Charmeleon extends Charmander {
  constructor(props) {
    super(height, weight);
    this.specie = 'Flame Pokemon';
  }

}

class Charizard extends Charmeleon {
  constructor(props) {
    super(height, weight, specie);
  }

  canFly() {
    console.log(true);
  }

}

// Pure functions

let date = "11-15-1944";
function formatDate(str) {
  let formated = str.split('-').reverse().join(',');
  return formated;
}

formatDate(date);

// TRY CATCH

  try {

    for(let i = 1; i < 12; i++) {
      console.log(i);
      if(i == 10) {
        throw new Error ("Ten is enough");
        }
    }

  } catch (error) {
    console.error( error, "England: 'No elevens in here!'");
  }  finally {
    console.log("Scotland: 'Eleven! Scotland! Freedom!'");
  }

//PROMISE

try{

let timeOut = new Promise( resolve => {
  setTimeout( () => resolve("a"), 1000)
}).then( data => {
    console.log(data);                                //.. a
    return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data + 'b'), 1000);
    })
  }).then(newData => {
    console.log(newData);                               //.. ab
    return new Promise((reject) =>{
      reject(newData);
    })
    return secondChained;
  }).then(result => {
    console.error(result);                                //.. error ab
    return new Promise((reject) =>{
      console.error('Errrorrr ');
    })
  }).then( () => {
      throw new Error("Errrorrr");
  }).catch(err => console.error(err))
}

finally{
  console.log(' The "ab" made it all through')
}


// ASYNC/AWAIT

async function runPromise () {
    try {
      let firstPromise = await new Promise(resolve => setTimeout(() => resolve("a"), 1000))
      console.log(firstPromise);

    let secondPromise = await new Promise(resolve => setTimeout(() => resolve(firstPromise + 'b'), 1000))
      console.log(secondPromise);

      let thirdPromise = await new Promise((reject) => reject(secondPromise))
      console.log(thirdPromise)

      let failedPromise = await new Promise(() => Promise.reject(new Error(thirdPromise)))
      console.log(failed: ${failedPromise})

    } catch (err) {
        throw new Error(err);
    }
}
