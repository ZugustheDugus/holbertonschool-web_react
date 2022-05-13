interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Dave',
  lastName: 'Davington',
  age: 10,
  location: 'OKC',
}

const student2: Student = {
  firstName: 'Zugus',
  lastName: 'Dugus',
  age: 12,
  location: 'San Diego',
}

const studentList: Array<Student> = [student1, student2];

const table = document.createElement('table');

for (const student of studentList) {
    const row = table.insertRow();
    row.insertCell().innerHTML = student.firstName;
    row.insertCell().innerHTML = student.location;
}

document.body.appendChild(table);
