function getGrades(inputSelector) {
    const input = document.getElementById(inputSelector).value;
    const gradesArray = input.split(',');
    const trimArray = gradesArray.map(element => {
        return element.trim();
      });
    const grades = trimArray.map(function (element) {
        return element.toUpperCase();
    });
    return grades
};
  
function lookupGrade(grade) {
    if (grade == 'A') {
            gpa = 4;
    }
        else if (grade === 'B') {
            gpa = 3;
    }
        else if (grade === 'C') {
            gpa = 2;
    }
        else if (grade === 'D') {
            gpa = 1;
    }
        else if (grade === 'F') {
            gpa = 0;
    }
        return gpa;
};
  
function calculateGpa(grades) {
    const gradesArray = grades.map(lookupGrade);
    const gpa = gradesArray.reduce((total, grade) => total + grade) / gradesArray.length;
    return gpa.toFixed(2);
}
  
function outputGpa(gpa, selector) {
    document.getElementById(selector).innerHTML = gpa;
    // takes a gpa value and displays it in the HTML in the element identified by the selector
}
  
function clickHandler() {
    const grades = getGrades('grades');
    const gpa = calculateGpa(grades);
    outputGpa(gpa, 'output');
};

document.querySelector("#submitButton").addEventListener("click", clickHandler);