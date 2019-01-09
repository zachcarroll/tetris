import { Component } from '@angular/core';
import { Cell } from './cell';
import { getPiece } from './piece';
import { throwError, interval, Observable, Subscription, fromEvent } from 'rxjs';
import { map, tap, merge, filter, mergeMap, startWith } from 'rxjs/operators'

interface Coordinates {
  row: number;
  column: number;
}

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const ARROW_KEYS = [
  'ArrowRight', 
  'ArrowLeft', 
  'ArrowUp', 
  'ArrowDown',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  board: Cell[][];
  nextPiece: Cell[][];
  currentPiece: Cell[][];
  currentCoordinates: Coordinates;

  constructor() {
    // this.board = [];
  }

  getEmptyBoard(): Cell[][] {
    var result: Cell[][] = [];
    for (let i = 0; i < BOARD_HEIGHT; i++) {
      result.push([]);
      for (let j = 0; j < BOARD_WIDTH; j++) {
        result[i].push({isEmpty: true, color: ''});
      }
    }

    return result;
  }

  // getKeysObs(): Observable<Cell[][]> {
  //   return fromEvent(document, 'keydown').pipe(
  //     filter((e: KeyboardEvent) => ARROW_KEYS.includes(e.key)),
  //     tap((e: KeyboardEvent) => e.preventDefault()),
  //     map((e: KeyboardEvent) => e.key),
  //     map((key: string) => this.currentPiece));
  // }

  getTickObs(): Observable<Cell[][]> {
    return interval(1000).pipe(
      tap(() => this.currentPiece = this.nextPiece),
      tap(() => this.nextPiece = getPiece()),
      tap(() => console.log('current: ', this.currentPiece)),
      tap(() => console.log('next: ', this.nextPiece)),
      tap(() => this.currentCoordinates.row++),
      map(() => this.currentPiece),
      map(() => this.canMerge(this.board, this.currentPiece, this.currentCoordinates) 
          ? this.merge(this.board, this.currentPiece, this.currentCoordinates) 
          : this.board),
    );
  }

  start() {
    this.currentPiece = getPiece();
    this.nextPiece = getPiece();

    this.currentCoordinates = {
      row: 0,
      column: this.nextPiece[0].length === 2 ? 4 : 3, 
    };

    // this.board = this.getKeysObs().pipe(
    //   merge(this.getTickObs()),
    //   // map((piece: Cell[][]) => ),
    //   startWith(this.getEmptyBoard()));

    this.getTickObs().pipe(startWith(this.getEmptyBoard())).subscribe(board => {
      this.board = board;
    });
  }

  canMerge(b1: Cell[][], b2: Cell[][], start: Coordinates): boolean {
    if (b1.length < (start.row + b2.length) || b1[0].length < (start.column + b2[0].length)) {
      return false;
    }

    for (let i = 0; i < b2.length; i++) {
      for (let j = 0; j < b2[0].length; j++) {
        if (!b1[i + start.row][j + start.column].isEmpty && !b2[i][j].isEmpty) {
          return false;
        }
      }
    }

    return true;
  }

  merge(b1: Cell[][], b2: Cell[][], start: Coordinates): Cell[][] {
    for (let i = 0; i < b2.length; i++) {
      for (let j = 0; j < b2[0].length; j++) {
        b1[i + start.row][j + start.column] = Object.assign({}, b1[i][j], b2[i][j]);
      }
    }

    return b1;
  }
}
