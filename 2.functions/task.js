function getArrayParams(...arr) {
let min = arr[0];
let max = arr[0];
let sum = 0;
Math.max(arr);
Math.min(arr);
sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  sum,
);
let avg = Number((sum / arr.length).toFixed(2));
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
