var printTeacher = function (firstName, lastName) { return firstName.charAt(0) + ". " + lastName; };
function newStudentClass(SCConInterface, firstName, lastName) {
    return new SCConInterface(firstName, lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    ;
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    ;
    return StudentClass;
}());
