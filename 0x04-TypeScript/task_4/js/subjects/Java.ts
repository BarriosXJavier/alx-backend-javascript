namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingJava?: number;
  }

   class Subject {
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

  export class Java extends Subject {
    constructor(teacher: Teacher) {
      super(teacher);
    }

    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      if (
        teacher.experienceTeachingJava &&
        teacher.experienceTeachingJava > 0
      ) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
