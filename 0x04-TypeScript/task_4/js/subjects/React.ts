namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export interface Teacher {
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
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

  class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      if (teacher.experienceTeachingC && teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      if (
        teacher.experienceTeachingReact &&
        teacher.experienceTeachingReact > 0
      ) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
