import {Square} from "./square";
import {Pawn} from "./pawn";
import {Bishop} from "./bishop";
import {King} from "./king";
import {Queen} from "./queen";
import {Knight} from "./knight";
import {Rook} from "./rook";

export class Board {
  state: Square[][];

  constructor() {
    this.initBoard();
  }

  initBoard() {
    this.state = new Array(8);
    for (let i = 0; i<8; i++) {
      this.state[i] = new Array(8);
    }

    this.state[0] = [
      new Square(new Rook(1)),
      new Square(new Knight(1)),
      new Square(new Bishop(1)),
      new Square(new Queen(1)),
      new Square(new King(1)),
      new Square(new Bishop(1)),
      new Square(new Knight(1)),
      new Square(new Rook(1))
    ];
    this.state[7] = [
      new Square(new Rook(2)),
      new Square(new Knight(2)),
      new Square(new Bishop(2)),
      new Square(new Queen(2)),
      new Square(new King(2)),
      new Square(new Bishop(2)),
      new Square(new Knight(2)),
      new Square(new Rook(2))
    ];

    for (let i=0; i<8; i++) {
      this.state[1][i] = new Square(new Pawn(1));
      this.state[6][i] = new Square(new Pawn(2));

      for (let j=2; j<=5; j++) {
        this.state[j][i] = new Square();
      }
    }
  }
}
