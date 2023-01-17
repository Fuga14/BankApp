'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  // Clear all movements and make container clean
  containerMovements.innerHTML = '';
  // .textContent = 0;

  // Add all movements on acc that was mentioned in account info in array movements
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    //beforeend will paste movement at the end, so the last move fill be first
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log([...arr]);

//SPLICE
console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']
//remove last element
console.log(arr.splice(-1));

//Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//CONCAT
var letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//Join
console.log(letters.join('-'));


//The 'at' Method
const arr = [23, 11, 44];
console.log(arr[0]);
console.log(arr.at(0));

//getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-2));
console.log('jonas'.at(-1));


//ForEach method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// if (movement < 0) {
//   console.log(`Withdraw: ${Math.abs(movement)}`);
// } else {
//   console.log(`Deposit: ${movement}`);
// }
// }

movements.forEach(function (move, i) {
  move > 0
    ? console.log(`Move ${i + 1} : DEP ${move}`)
    : console.log(`Move ${i + 1} : WITHDRAW ${Math.abs(move)}`);
});

console.log('----');
let index = 1;
movements.forEach(movement =>
  movement > 0
    ? console.log(`Move ${index++} Deposit: ${movement}`)
    : console.log(`Move ${index++} Withdraw: ${Math.abs(movement)}`)
);

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['UAH', 'Ukrainian Hryvna'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} - ${value}`);
});

const uniqueSet = new Set(['USD', 'USD', 'EUR', 'UAH', 'UAH']);

console.log(uniqueSet);

uniqueSet.forEach(function (value, _, map) {
  console.log(`${value} - ${value}`);
});
*/
