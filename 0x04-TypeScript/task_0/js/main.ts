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

const studentsList: Array<Student> = [student1, student2];
console.log(studentsList);
