export class GradeSchool {
  private readonly school: SchoolMap = new SchoolMap();

  /**
   * Displays the students and the grades they're in
   * @returns Object whith key: grade and value: students
   */
  roster(): { [key: number]: string[] } {
    let result: { [key: number]: string[] } = {};

    const newStudentRoster: SchoolMap = new SchoolMap();
    const keys: number[] = [];

    for (const key of this.school.keys()) {
      keys.push(key);
    }
    keys.sort();

    for (const each of keys) {
      const values = this.school.get(each) || [];
      newStudentRoster.set(each, Array.from(values).sort());
    }

    newStudentRoster.forEach((value: string[], key: number) => {
      Object.assign(result, {
        [key]: value,
      });
    });

    return result;
  }

  /**
   * Put a student in a grade
   * @param studentName The student's name
   * @param schoolGrade The school's grade
   */
  add(studentName: string, schoolGrade: number): void {
    const isExist = this.checkIfExist(studentName);

    if (!isExist) {
      const data = this.school.get(schoolGrade);
      data.push(studentName);
      this.school.set(schoolGrade, data.sort());
    }
  }

  /**
   * Displays the students who're in the chosen grade
   * @param searchedGrade The grade we want to display the students
   * @returns String array of the students
   */
  grade(searchedGrade: number): string[] {
    const schoolMap: SchoolMap = new SchoolMap();

    this.school.forEach((value: string[], key: number) => {
      schoolMap.set(key, value);
    });

    return schoolMap.get(searchedGrade);
  }

  private checkIfExist(studentNameToAdd: string): boolean {
    let valToReturn = false;

    this.school.forEach((value: string[]) => {
      if (value.includes(studentNameToAdd)) valToReturn = true;
    });

    return valToReturn;
  }
}

export class SchoolMap extends Map<number, string[]> {
  public get(key: number): string[] {
    const result: string[] = super.get(key) || [];
    return [...result];
  }
}
