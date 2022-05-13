interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [extra: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string): string {
    return '${firstName[0]}. ${lastName}';
}

interface printTeacherFunction {
  (firstname: string,
    lastName: string): string;
}

interface stuConInt {
  firstName: string;
  lastName: string;
}

interface stuClassInt {
  firstName: string;
  lastName: string;
  workOnHomework: () => void;
  displayName: () => void;
}

class StudentClass implements stuClassInt {
  firstName: string;
  lastName: string;

  constructor(names: stuConInt) {
    this.firstName = names.firstName;
    this.lastName = names.lastName;
  }

  workOnHomework() {
    return 'Currently Working';
  }

  displayName() {
    return this.firstName;
  }
}
