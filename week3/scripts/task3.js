/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add (number1, number2) {

// Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers () {
    const number1 = Number(document.getElementById('addend1').value);
    const number2 = Number(document.getElementById('addend2').value);
    const sum = add(number1, number2);

// Step 4: Assign the return value to an HTML form element with an ID of sum
    document.getElementById('sum').value = sum;
};
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById('addNumbers').addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract (number1, number2){
    return number1 - number2
}

function subtractNumbers (){
    const minuend = Number(document.getElementById('minuend').value);
    const subtrahend = Number(document.getElementById('subtrahend').value);
    const difference = subtract(minuend, subtrahend);
    document.getElementById('difference').value = difference;
};

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
multiply = (number1, number2) => {
    return number1 * number2
}

multiplyNumbers = () => {
    const factor1 = Number(document.getElementById('factor1').value);
    const factor2 = Number(document.getElementById('factor2').value);
    product = multiply(factor1, factor2);
    document.getElementById('product').value = product;
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

divide = (number1, number2) => {
    return number1 / number2
};

divideNumbers = () => {
    const dividend = Number(document.getElementById('dividend').value);
    const divisor = Number(document.getElementById('divisor').value);
    quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient;
};

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date();
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const currentYear = date.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById('year').innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
const range = arrayRange(1, 25, 1);
console.log(range);
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById('array').innerHTML = range;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

function isOdd(number){
    return (number % 2) !== 0;
};

const oddNumbers = range.filter(isOdd);

document.getElementById('odds').innerHTML = oddNumbers;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
function isEven(number){
    return (number % 2) == 0;
};

const evenNumbers = range.filter(isEven);

document.getElementById('evens').innerHTML = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const arraySum = range.reduce(function (total, item){
    return total + item;
});

document.getElementById('sumOfArray').innerHTML = arraySum
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const newArray = range.map(function (element) {
    return element*2
});

document.getElementById('multiplied').innerHTML = newArray;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const multipliedSum = newArray.reduce(function (total, item){
    return total + item;
});

document.getElementById('sumOfMultiplied').innerHTML = multipliedSum;