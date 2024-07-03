namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
  }

  class Subject {
    protected teacher: Teacher;

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

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      const { experienceTeachingC, firstName } = this.teacher;
      if (experienceTeachingC && experienceTeachingC > 0) {
        return `Available Teacher: ${firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
