'use strict';

// Data
const account1 = {
  owner: 'Vladyslav Pereder',
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
      <div class="movements__value">${mov}$</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    //beforeend will paste movement at the end, so the last move fill be first
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}$`;
};

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}$`;

  const outs = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${outs}$`;

  const interests = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interests}$`;
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);

//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //To display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    calcDisplayBalance(currentAccount.movements);

    // Display summary
    calcDisplaySummary(currentAccount.movements);
  }
});
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


// Coding challenge 1.

const checkDogs = function (dogsJulia, dogsKate) {
  let copyDogsJulia = dogsJulia.slice(0, -2).splice(1);
  const allPets = copyDogsJulia.concat(dogsKate);

  allPets.forEach((pet, i) => {
    pet >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${pet} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('---------------------------');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//Map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUsdFor = [];
for (const move of movements) {
  movementsUsdFor.push(move * eurToUsd);
}
console.log(movementsUsdFor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrawal'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);


//Filtrer method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);

//Reduce method
//accumulator  -> snowball
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Itteration${i} : ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

const arrowBalance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(arrowBalance);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);


// Coding challenge 2.

const calcAverageHumanAge = function (ages) {
  const calculation = ages.map(age => (age <= 2 ? age * 2 : age * 4 + 16));
  console.log(calculation);

  const excluding = calculation.filter(age => age >= 18);
  console.log(excluding);

  const averageAge =
    excluding.reduce((acc, age) => acc + age, 0) / excluding.length;
  console.log(averageAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


//Chaining methods
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//PIPELINE
const totalDeposit = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov);

console.log(totalDeposit);

// Coding challenge 2.

const calcAverageHumanAge = function (ages) {
  const calculation = ages.map(age => (age <= 2 ? age * 2 : age * 4 + 16));
  console.log(calculation);

  const excluding = calculation.filter(age => age >= 18);
  console.log(excluding);

  const averageAge =
    excluding.reduce((acc, age) => acc + age, 0) / excluding.length;
  console.log(averageAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


//Coding challenge 3.

const calcAverageHumanAge = data => {
  const averageAge = data
    .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter(age => age >= 18)
    .reduce((storage, age, i, arr) => storage + age / arr.length, 0);
  return averageAge;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


//Find method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
