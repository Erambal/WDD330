import {
    Student
} from './students.js';

const students = [];

const student = new Student('Kendrikc', 'Rambal', '1564564944', ['Star Wars', 'Book of Mormon']);
const student2 = new Student('Tom', 'Scrudner', '15623464944', ['D & C', 'Bible']);


students.push(student);
students.push(student2);

console.log(students);

// Update student list
print();



document.querySelector('#btnSave')
    .addEventListener('click', (event) => {
        event.preventDefault();
        // this will allow you to prevent the form from auto submitting

        //create a new student
        const newStudent = new Student(
            document.querySelector('#firstName').value,
            document.querySelector('#lastName').value,
            document.querySelector('#iNumber').value
        );
        students.push(newStudent);
        console.log(newStudent);

        //This adds a new person to the table
        print();

        // clear the form field
        document.forms[0].reset();
    });

function print() {
    const tbody = document.querySelector('tbody');

    tbody.innerHTML = students.map(
        (student) =>
        `<tr>
    <td>${student.FirstName}</td>
    <td>${student.LastName}</td>
    <td>${student.INumber}</td>
    <td>${student.FavoriteBooks}</td>
    </tr>`
    ).join(' ');
}