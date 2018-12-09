import { Component, OnInit } from '@angular/core';
import {Board} from "../models/board";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  board: Board;
  constructor() { }

  ngOnInit() {
    this.board = new Board();
  }

}
