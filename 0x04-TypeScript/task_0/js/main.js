var student1 = {
    firstName: 'Dave',
    lastName: 'Davington',
    age: 10,
    location: 'OKC'
};
var student2 = {
    firstName: 'Zugus',
    lastName: 'Dugus',
    age: 12,
    location: 'San Diego'
};
var studentList = [student1, student2];
var table = document.createElement('table');
for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
    var student = studentList_1[_i];
    var row = table.insertRow();
    row.insertCell().innerHTML = student.firstName;
    row.insertCell().innerHTML = student.location;
}
document.body.appendChild(table);
