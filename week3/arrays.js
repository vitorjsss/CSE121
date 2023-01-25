//Activity 1 - Map
const myArray = ['one', 'two', 'three'];

const newArray = myArray.map(function (element) {
    return `<li>${element}</li>`;
});

document.getElementById('myList').innerHTML = newArray.join('');

//Activity 2 - Map
const grades = ['A', 'B', 'A'];

function conversion(grade){
    let gpa = 0;
    if (grade === 'A'){
        gpa = 4;
    }
    else if (grade === 'B'){
        gpa = 3;
    };
    return gpa;
};

//Activity 3 - Reduce
const gpas = grades.map(conversion);
console.log(gpas);
const pointsTotal = gpas.reduce(function (total, item){
    return total + item;
});
const gpa = pointsTotal/gpas.length;

//const totalPoints = gpa.reduce((total, item) => total + item);
//const gpa2 = gpas.reduce((total, item) => total + item) / gpas.length;

//Activity 4 - Filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

function isLong(fruit) {
    return fruit.length > 6;
}

const longer = fruits.filter(isLong);
console.log(longer);

//another way of solving
const longFruits = fruits.filter((fruit) => fruit.length > 6);
console.log(longFruits);

//Activity 5 - indexOf
const numbers = [12, 34, 21, 54];
const luckNumber = 21;

let luckyIndex = numbers.indexOf(luckNumber);
console.log(luckyIndex);