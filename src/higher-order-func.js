/*
    Task 1. Outer function calculate totalPrice, inner function return a GST payable price.

    Steps:
    - Create an outer function that takes the array "priceList" as an argument.
    - In the scope of the outer function, sum all the value in array "priceList" 
    and store the value in variable "totalPrice".
    - Return an inner function that multiply "totalPrice" with GST 7% and store 
    the value in variable "payablePrice".
    - The variable "payablePrice" should be returned in the inner function.
    - Make appropriate calls to the outer and inner function and console log
    the value of "payablePrice".
    
*/

const priceList = [10.5, 9.9, 8.9, 4.5];

// Add code here

function totalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < priceList.length; i++) {
    totalPrice += priceList[i];
  }
  console.log(`Total Price is ${totalPrice}`);

  let payablePrice = 0;
  function addGST() {
    payablePrice = totalPrice * 1.07;
    return payablePrice;
  }
  addGST();
  console.log(`Payable Price is ${payablePrice}`);
}

totalPrice();

/*
    Task 2. Manipulate the "queue" array.
*/

function createQueue(fn) {
  const queue = [1, 2, 3, 4];

  return fn(queue);
}

// Add code here - define the function that adds "start" and "last" to a given array

function addQueue(queue) {
  queue.unshift("Start");
  queue.push("Last");
  return queue;
}

const result = createQueue(addQueue); // Add code here - pass a reference of a function as an argument

console.log(result); // Expected output: ["start", 1, 2, 3, 4, "last"];
