// for declaring variables with let instead of var
var nonLetArray = []

for (var i = 0; i < 3; i++) {
  nonLetArray.push(function () {
    console.log(i)
  })
}

var letArray = []

for (let j = 0; j < 3; j++) {
  letArray.push(function () {
    console.log(j)
  })
}

// constant (const) will not let you mutate original value
// exception for arrays and objects

const AWS_KEY = '1234lkjsdfosifj9902843'
AWS_KEY = 'something'// you will get an error

const KEYS = ['slfdsdkjf', 'adsfjfddskf']
KEYS[0] = 'crushing the vocals' // will change value

// Fat arrow functions and why the came into ecma script 2015
// the problem

var person = {
  age: 30,
  name: 'Tony',
  print: function () {
    function sayHello () {
      console.log('hello ' + this.name)
    }

    sayHello()

    const sayHi = () => {
      console.log('hi ' + this.name)
    }

    sayHi()
  }
}

person.print()

// fat arrow functions
// test()
// function test(){}
// parensForReturn() will not work with arrow functions
const parensForReturn = (multiplyBy, value) => ('hi')    // return "hi"
const onArgument = value => ('hi')    // return "hi"
const noReturn = value => 'yo'   // return "hi"
const multiLine = () => {
  let hi = 'hello'
  return hi
}

// turn below into arrow functions

// Step 1: We'll start things off by creating a `countdown()`
// Step 2: argument as a callback which is a
// function. Using `window.setTimeout()`, we will wait two seconds before calling the `callback`
// function that was passed into the `countdown()` function.

const countdown = (cbFn) => {
  setTimeout(cbFn, 2000)
}
countdown(() => console.log('after 2 seconds'))
const createMultiplier = (multiplierValue) => {
  return (value) => multiplierValue * value
}
// "function (value) {
//   return 2 * value
// }"
const doubler = createMultiplier(2)
doubler(5) // => 10
const tripler = createMultiplier(3)
tripler(3)

const multiplier = (multiplyBy, value) => (multiplyBy * value)

let doublerWithBind = multiplier.bind(null, 2)
doublerWithBind(5) // => 10
let triplerWithBind = multiplier.bind(null, 3)
triplerWithBind(3)
/// example to show bind , call and apply
function whatMyName (first) {
  console.log(first, this.name)
  return first + this.name
}
whatMyName()

let person = {name: 'tony'}

const fromPersonObj = whatMyName.bind(person, "hola", 'second')
fromPersonObj()
const fromPersonWApply = whatMyName.apply(person, ['hi', 'segundo'])
const returnsTheValueImmediatley = whatMyName.call(person, 'hola')
