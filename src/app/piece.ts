import { Cell } from './cell';

// export interface Piece {
//   board: Cell[][];
// }

export function getPiece() {
  const options = [
    getPieceI(), 
    getPieceO(), 
    getPieceT(), 
    getPieceS(),
    getPieceZ(),
    getPieceJ(),
    getPieceL(),
  ];

  return options[randomBetween(0, options.length - 1)];
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPieceI(): Cell[][] {
  return [
    [{isEmpty: false, color: 'blue'}, {isEmpty: false, color: 'blue'}, {isEmpty: false, color: 'blue'}, {isEmpty: false, color: 'blue'}],
  ];
}

// class I implements Piece {
//   board: Cell[][];

//   constructor() {
//     this.board = [
//       [{isEmpty: false, color: 'blue'}, {isEmpty: false, color: 'blue'}, {isEmpty: false, color: 'blue'}, {isEmpty: false, color: 'blue'}],
//     ];   
//   }
// }

function getPieceO(): Cell[][] {
  return [
    [{isEmpty: false, color: 'yellow'}, {isEmpty: false, color: 'yellow'}], 
    [{isEmpty: false, color: 'yellow'}, {isEmpty: false, color: 'yellow'}],
  ];
}

// class O implements Piece {
//   board: Cell[][];

//   constructor() {
//     this.board = [
//       [{isEmpty: false, color: 'yellow'}, {isEmpty: false, color: 'yellow'}], 
//       [{isEmpty: false, color: 'yellow'}, {isEmpty: false, color: 'yellow'}],
//     ];
//   }
// }

function getPieceT(): Cell[][] {
  return [
    [{isEmpty: true, color: ''}, {isEmpty: false, color: 'indigo'}, {isEmpty: true, color: ''}], 
    [{isEmpty: false, color: 'indigo'}, {isEmpty: false, color: 'indigo'}, {isEmpty: false, color: 'indigo'}],
  ];  
}

// class T implements Piece {
//   board: Cell[][];

//   constructor() {
//     this.board = [
//       [{isEmpty: true, color: ''}, {isEmpty: false, color: 'indigo'}, {isEmpty: true, color: ''}], 
//       [{isEmpty: false, color: 'indigo'}, {isEmpty: false, color: 'indigo'}, {isEmpty: false, color: 'indigo'}],
//     ];    
//   }
// }

function getPieceS(): Cell[][] {
  return [
    [{isEmpty: true, color: ''}, {isEmpty: false, color: 'green'}, {isEmpty: false, color: 'green'}], 
    [{isEmpty: false, color: 'green'}, {isEmpty: false, color: 'green'}, {isEmpty: true, color: ''}],
  ];
}

// class S implements Piece {
//   board: Cell[][];

//   constructor() {
//     this.board = [
//       [{isEmpty: true, color: ''}, {isEmpty: false, color: 'green'}, {isEmpty: false, color: 'green'}], 
//       [{isEmpty: false, color: 'green'}, {isEmpty: false, color: 'green'}, {isEmpty: true, color: ''}],
//     ];
//   }
// }

function getPieceZ(): Cell[][] {
  return [
    [{isEmpty: false, color: 'red'}, {isEmpty: false, color: 'red'}, {isEmpty: true, color: ''}], 
    [{isEmpty: true, color: ''}, {isEmpty: false, color: 'red'}, {isEmpty: false, color: 'red'}],
  ];
}

// class Z implements Piece {
//   board: Cell[][];

//   constructor() {
//     this.board = [
//       [{isEmpty: false, color: 'red'}, {isEmpty: false, color: 'red'}, {isEmpty: true, color: ''}], 
//       [{isEmpty: true, color: ''}, {isEmpty: false, color: 'red'}, {isEmpty: false, color: 'red'}],
//     ];
//   }
// }

function getPieceJ(): Cell[][] {
  return [
    [{isEmpty: false, color: 'violet'}, {isEmpty: true, color: ''}, {isEmpty: true, color: ''}], 
    [{isEmpty: false, color: 'violet'}, {isEmpty: false, color: 'violet'}, {isEmpty: false, color: 'violet'}],
  ];
}

// class J implements Piece {
//   board: Cell[][];

//   constructor() {
//     this.board = [
//       [{isEmpty: false, color: 'violet'}, {isEmpty: true, color: ''}, {isEmpty: true, color: ''}], 
//       [{isEmpty: false, color: 'violet'}, {isEmpty: false, color: 'violet'}, {isEmpty: false, color: 'violet'}],
//     ];
//   }
// }

function getPieceL(): Cell[][] {
  return [
    [{isEmpty: true, color: ''}, {isEmpty: true, color: ''}, {isEmpty: false, color: 'orange'}], 
    [{isEmpty: false, color: 'orange'}, {isEmpty: false, color: 'orange'}, {isEmpty: false, color: 'orange'}],
  ];
}

// class L implements Piece {
//   board: Cell[][];

//   constructor() {
//     this.board = [
//       [{isEmpty: true, color: ''}, {isEmpty: true, color: ''}, {isEmpty: false, color: 'orange'}], 
//       [{isEmpty: false, color: 'orange'}, {isEmpty: false, color: 'orange'}, {isEmpty: false, color: 'orange'}],
//     ];
//   }
// }