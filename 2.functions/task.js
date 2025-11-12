function getArrayParams(...arr) {
let min = Math.min(arr);
let max = Math.max(arr);
let sum = 0;
let total = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  sum,
);
let avg = Number((total / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
