// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
        sectionNum: 1,
        roomNum: 'STC 353',
        enrolled: 26,
        days: 'TTh',
        instructor: 'Bro T'
    },
    {
        sectionNum: 2,
        roomNum: 'STC 347',
        enrolled: 28,
        days: 'TTh',
        instructor: 'Sis A'}
    ],

    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
            );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            setSections(this.sections);
        };
    },

    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
            );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            setSections(this.sections);
        }
    },

};

function setCourseInfo (course) {
    const courseName = document.getElementById('courseName');
    const courseCode = document.getElementById('courseCode');
    courseName.innerHTML = course.name;
    courseCode.innerHTML = course.code;
};

function setSections (sections) {
    const html = sections.map((section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
    );
    document.querySelector('#sections').innerHTML = html.join("");
};

document.querySelector('#enrollStudent').addEventListener('click', function() {
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector('#dropStudent').addEventListener('click', function() {
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.dropStudent(sectionNum);
});

setCourseInfo(aCourse);
setSections(aCourse.sections);