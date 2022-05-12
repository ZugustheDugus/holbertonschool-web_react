interface Student {
  firstName: string, 
  lastName: string, 
  age: number, 
  location: string
}

let StudentsList = (student1: Student, student2: Student) => {
  return [
    { student1 },
    { student2 }
  ]
}
