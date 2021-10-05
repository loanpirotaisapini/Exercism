export class GradeSchool {

  private school: SchoolMap = new SchoolMap();

  roster(): { [key: number]: string[] } {

    let schoolMap: SchoolMap = new SchoolMap();

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

  add(studentName: string, schoolGrade: number): void {
    const students = this.school.get(schoolGrade) || [];

    students.push(studentName);
    this.school.set(schoolGrade, students.sort());

  }

  grade(searchedGrade: number): string[] {
    return (typeof this.school.get(searchedGrade) === 'undefined') ? [] : this.school.get(searchedGrade) as string[];
  }
}


export class SchoolMap extends Map<number, string[]> {
  
  public get(key: number): string[] {

    const result = super.get(key) || [];
    return [...result];
  }

}