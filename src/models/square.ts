import {Piece} from "./piece";

export class Square {

  constructor(private piece:Piece = null) {  }

  setPiece(piece:Piece) {
    this.piece = piece;
  }

  getPiece() {
    return this.piece;
  }
}
