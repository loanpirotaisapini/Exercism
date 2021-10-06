export class GradeSchool {

  private readonly school: SchoolMap = new SchoolMap();

  /**
   * Displays the students and the grades they're in
   * @returns Object whith key: grade and value: students
   */
  roster(): { [key: number]: string[] } {

    const schoolMap: SchoolMap = new SchoolMap();

    let result: { [key: number]: string[] } = {};

    this.school.forEach((value: string[], key: number) => {
      schoolMap.set(key, value);
    });

    schoolMap.forEach((value: string[], key: number) => {
      Object.assign(result, {
        [key]: value
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

    // We can't put a student in a grade if he's already in another
    let alreadyExists: boolean = false;
    let schoolMap: Record<number, string[]>[] = [];

    this.school.forEach((value: string[], key: number) => {
      schoolMap.push({ [key]: value });
    });
    
    let students: string[] = this.school.get(schoolGrade) || [];

    if (!alreadyExists) students.push(studentName);

    this.school.set(schoolGrade, students.sort());
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
}

export class SchoolMap extends Map<number, string[]> {

  public get(key: number): string[] {

    const result: string[] = super.get(key) || [];
    return [...result];
  }
}