import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../cell';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() data: Cell[][];

  constructor() { }

  ngOnInit() {
  }

}
