'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let array = [1, 3, 2];
// let sortedArray = array.sort();
// // console.log(sortedArray);

// let array2 = [4, 5, 6];
// let doubleArray = array2.concat(array).sort();
// console.log(doubleArray);
var findmiddleSortedArrays = function (nums1, nums2) {
  //Sorting array

  //First way
  // let merged = [...nums1, ...nums2].sort();

  //Second way

  let i1 = 0;
  let i2 = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;

  if (len === 0) {
    return null;
  }

  const merged = [];

  while (i1 < len1 && i2 < len2) {
    if (nums1[i1] <= nums2[i2]) {
      merged.push(nums1[i1]);
      i1++;
    } else {
      merged.push(nums2[i2]);
      i2++;
    }
  }

  while (i1 < len1) {
    merged.push(nums1[i1]);
    i1++;
  }

  while (i2 < len2) {
    merged.push(nums2[i2]);
    i2++;
  }

  let left = 0;
  let right = merged.length - 1;
  let middle = Math.floor((left + right) / 2);

  if (merged.length % 2 === 0) {
    console.log((merged[middle] + merged[middle + 1]) / 2);
    return (merged[middle] + merged[middle + 1]) / 2;
  } else {
    console.log(merged[middle]);
    return merged[middle];
  }
};

findmiddleSortedArrays([3], [-2, -1]);
findmiddleSortedArrays([1, 2], [3, 4]);
findmiddleSortedArrays([1, 3], [2]);
