"use strict";

//fundamental 1

//coding challenge1

const markHeight = 1.69;

const markMass = 78;

const johnHeight = 1.95;
const johnMass = 92;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

if (markBMI > johnBMI) {
  console.log(` Mark Bmi ${markBMI} is higher than John's ${johnBMI} `);
} else {
  console.log(` Mark Bmi ${johnBMI} is higher than John's ${markBMI} `);
}

//coding challenge 2
const AvgDolphins = (96 + 108 + 89) / 3;
const AvgKoalas = (88 + 91 + 110) / 3;
const min = 100;
if (AvgDolphins > AvgKoalas && AvgDolphins >= min) {
  console.log(`Dolphins win with ${AvgDolphins} score`);
} else if (AvgKoalas > AvgDolphins && AvgKoalas >= min) {
  console.log(`Koalas win with ${AvgKoalas} score`);
} else if (AvgDolphins === AvgKoalas && AvgDolphins >= min && AvgKoalas >= min)
  console.log(`it was a Draw`);
else {
  console.log(`There was no winner in the game`);
}

//coding challenge 4

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.2 : bill * 0.15;

const totalTip = bill + tip;

console.log(totalTip);

//coding5 challenge

function fruitProcessor(apple, orange) {
  const juice = `${apple} Apples, and ${orange} Oranges`;

  console.log(` i have 2 fruits here`);
  return juice;
}

const fruitProcessors = fruitProcessor(23, 69);

console.log(fruitProcessors);

const cut = (frruit) => {
  return frruit * 4;
};

const fruitss = (apple, oranges) => {
  const cuttApple = cut(apple);
  const cuttOranges = cut(oranges);
  const juice = `i have  ${cuttApple} apples, i have ${cuttOranges} apples`;
  return juice;
};

const curt = fruitss(234, 3456);

console.log(curt);

//code challenge 6
const calcAverage = (a, b, c) => {
  const avg = (a + b + c) / 3;

  return avg;
};

const dol1 = calcAverage(44, 23, 71);
const kol1 = calcAverage(65, 54, 49);

console.log(dol1, kol1);

const checkWInner = (avgDolp, avgKoal) => {
  const dolphins = calcAverage(avgDolp);
  const koalas = calcAverage(avgKoal);

  if (dolphins * 2 > koalas) {
    return `Dolphins win ${dolphins} vs ${koalas}`;
  } else if (koalas * 2 > dolphins) {
    return `Koalas win ${koalas} vs ${dolphins}`;
  } else {
    return ` No winner`;
  }
};

console.log(checkWInner(dol1, kol1));

//codechallenge7

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const billy = [125, 555, 44];

const tipss = billy.map(calcTip);
const totalTippy = billy.map((bill, index) => bill + tipss[index]);

console.log(totalTippy);

//code challenge8
const Jonas = {
  firstName: "Jonas",
  friends: 3,
  bestFriend: "Michael",
  drivers: true,
  getSummary: function () {
    return `${this.firstName} has  ${this.friends} friends and ${
      this.drivers == true ? "a Driver license" : " No drivers licence"
    }`;
  },
};

const jonasfriend = `${Jonas.firstName} has 3  ${Jonas.friends} friends, and his bestfriend is ${Jonas.bestFriend}`;

console.log(jonasfriend);
console.log(Jonas.getSummary());

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;

    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;

    return this.bmi;
  },
};

const johnBeemi = john.calcBMI();
const markBeemi = mark.calcBMI();

const bmiComparism =
  johnBeemi > markBeemi
    ? `John's BMI ${johnBeemi} is higher than Mark's ${markBeemi} `
    : `Mark's BMI ${markBeemi} is higher than John's ${johnBeemi}`;

console.log(bmiComparism);

for (let rep = 1; rep <= 10; rep++) {
  console.log(`i am lifting  each rep, count with me  ${rep}`);
}
// //creating new arr

const games = ["Willy", "Oladipi", 124 - 10, true, "sven", "will"];
const type = [];

console.log("-----");
for (let i = 0; i < games.length; i++) {
  if (typeof games[i] !== "string") continue;
  console.log(games[i]);
  type[i] = typeof games[i];
}
const read = games.map((game) => {
  return typeof game;
});

console.log(read);
console.log(type);

const year = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < year.length; i++) {
  const currentYear = 2025;
  const diff = currentYear - year[i];
  age[i] = diff;
}

console.log(age);

const ager = year.map((years) => {
  return 2025 - years;
});
console.log(ager);

const boll = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const solvAvg = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = (sum += arr[i]);

    return element;
  }

  return element / arr.length;
};

console.log(solvAvg(boll));

let tips = [];
let total = [];

const calculateTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  return tip;
};

console.log("--------");

for (let i = 0; i < boll.length; i++) {
  const tippy = calculateTip(boll[i]);

  console.log(tippy);

  tips.push(tippy);

  total.push(tippy + boll[i]);
}

console.log(total);

const dataSet1 = [17, 21, 23, 12];

const maxTemp = (arr) => {
  return arr;
};

const rain = maxTemp(dataSet1);

let dataArr = [];

for (let i = 0; i < dataSet1.length; i++) {
  dataArr.push(`${dataSet1[i]}oC in ${i + 1} days`);
}

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
// }
console.log(dataArr);
for (let i = 0; i < rain.length; i++) {
  const element = rain[i];
  console.log(`${element}oC in ${i + 1} days`);
}
const Lonas = ["Jonas", 3, "Michael", true];
for (let i = Lonas.length - 1; i >= 0; i--) {
  console.log(Lonas[i]);
}
const scoree = [1, 2, 3, 4, 5, 6, 6];
let sum = 0;
for (let i = 0; i < scoree.length; i++) {
  sum += scoree[i];
}
console.log(sum);
let numArr = [];
// const filtered = numbers.filter((num) => num >= 3);
// console.log(filtered);
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i];
//   if (numbers[i] >= 3) {
//     numArr.push(numbers[i]);
//   }
// }
console.log(numArr);

class Number {
  square(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] ** 2);
    }
    return result;
  }

  cube(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] ** 3);
    }
    return result;
  }

  average(arr) {
    let result = "";
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      let avg = (sum += arr[i]);
      result = avg / arr.length;
    }
    return result;
  }
  sum(arr) {
    let result = "";
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      result = sum += arr[i];
    }
    return result;
  }
  even(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  odd(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 1) {
        result.push(arr[i]);
      }
    }
    return result;
  }
}

const numbers = new Number();

console.log(numbers.square([1, 2, 3, 4, 5]));
console.log(numbers.cube([1, 2, 3, 4, 5]));
console.log(numbers.average([1, 2, 3, 4, 5]));
console.log(numbers.sum([1, 2, 3, 4, 5]));
console.log(numbers.even([1, 2, 3, 4, 5]));
console.log(numbers.odd([1, 2, 3, 4, 5]));
