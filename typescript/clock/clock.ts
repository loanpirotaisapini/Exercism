export class Clock {

  // Definition of class attributes
  private hours: number;
  private minutes: number;
  private clock: Date;

  constructor(hours: number, minutes: number = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.clock = new Date();
    this.clock.setHours(hours, minutes);
  }

  /**
   * Format the string display for the clock
   */
  public toString(): string {
    
    let hours: string = this.clock.getHours().toString();
    let minutes: string = this.clock.getMinutes().toString();

    // Format hours and minutes if on one digit
    if (hours.length === 1) {
      hours = '0' + hours;
    }
    if (minutes.length === 1) {
      minutes = '0' + minutes;
    }

    return hours + ':' + minutes;
  }

  /**
   * Permits to add some minutes to the clock
   * @param minutesToAdd Minutes to add to the current clock
   * @returns The new clock
   */
  public plus(minutesToAdd: number): string {
    this.clock.setMinutes(this.minutes + minutesToAdd);
    return this.toString();
  }

  /**
   * Permits to remove some minutes to the clock
   * @param minutesToRemove Minutes to remove to the current clock
   * @returns The new clock
   */
  public minus(minutesToRemove: number): string {
    this.clock.setMinutes(this.minutes - minutesToRemove);
    return this.toString();
  }

  /**
   * Compare if two clocks are equals
   * @param clockToCompare Clock given to compare
   * @returns True if equals, otherwise false
   */
  public equals(clockToCompare: Clock): boolean {
    return this.toString() === clockToCompare.toString();
  }
}
