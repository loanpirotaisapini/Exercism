type Position = readonly [number, number]

type Positions = {
  white: Position
  black: Position
}
export class QueenAttack {
  public readonly black: Position;
  public readonly white: Position;

  constructor({ white = [7, 3], black = [0, 3] }: Partial<Positions> = {}) {


    // If the queens are sharing the same board's space, we throw an error
    if (this.isSharingBoardSpace(white, black)) throw new Error('Queens cannot share the same space');

    // If the queens' positions aren't on board, we also throw an error
    if (!this.isOnBoard(white) || !this.isOnBoard(black)) throw new Error('Queen must be placed on the board');

    this.white = white;
    this.black = black;
  }

  /**
   * Permits to construct and display the board
   */
  toString(): string {

    let result: string[] = [];

    // We're constructing the board
    for (let index = 0; index < 8; index++) {
      result.push('_ _ _ _ _ _ _ _');
    }

    // Now, we're placing the white queen
    result = this.placingQueenOnRow(result, this.white, 'W');
    result = this.placingQueenOnRow(result, this.black, 'B');

    // Displaying the result as a string
    return result.join('\n');
  }

  /**
   * Permits to know if a queen can attack the other one
   */
  get canAttack() {

    // Permits to know if the queen can attack horizontally
    const canAttackOnRow = (w: Position, b: Position) => {
      return (w[0] === b[0]);
    };

    // Permits to know if the queen can attack vertically
    const canAttackOnColumn = (w: Position, b: Position) => {
      return (w[1] === b[1]);
    }

    // Permits to know if the queen can attack diagonally
    const canAttackOnDiagonal = (w: Position, b: Position) => {
      if (Math.abs(w[0] - b[0]) === Math.abs(w[1] - b[1])) {
        return true;
      } else {
        return false;
      }
    }

    // If one of the different ways to attack is possible, we return true. Otherwise false.
    return (canAttackOnRow(this.white, this.black) || canAttackOnColumn(this.white, this.black) || canAttackOnDiagonal(this.white, this.black));
  }

  /**
   * This method permits to compare if our queens are sharing the same position on the board
   * @param firstArray The position of the first queen
   * @param secondArray The position of the second one
   * @returns True | False
   */
  private isSharingBoardSpace(firstArray: Position, secondArray: Position): boolean {

    let result: boolean = false;
    if (
      firstArray.length === secondArray.length
      &&
      firstArray.every((value: number, key: number) => value === secondArray[key]
      )) {
      result = true;
    }

    return result;
  }

  /**
   * Permits to know if the position is on board
   * @param position The position to verify
   * @returns True | False
   */
  private isOnBoard(position: Position): boolean {

    return ((position[0] >= 0 && position[0] < 8) && (position[1] >= 0 && position[1] < 8));
  }

  /**
   * Permits to place a queen on the board
   * @param board String array representing the board
   * @param queensPosition Board's position of the queen to place 
   * @param letter The letter representing the queen's color
   * @returns The board with the queen on it
   */
  private placingQueenOnRow(board: string[], queensPosition: Position, letter: string): string[] {
    
    const row = board[queensPosition[0]].split(' ');
    row.splice(queensPosition[1], 1, letter);
    board.splice(queensPosition[0], 1, row.join(' '));

    return board;
  }
}
