namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    private teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }

    getTeacher(): Teacher {
      return this.teacher;
    }
  }
}