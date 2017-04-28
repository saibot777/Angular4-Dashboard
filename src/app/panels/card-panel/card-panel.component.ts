import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../../view-models/card';

@Component({
  selector: 'app-card-panel',
  templateUrl: './card-panel.component.html',
  styleUrls: ['./card-panel.component.css']
})
export class CardPanelComponent implements OnInit {

  @Input() card: Card;
  @Input() index = 1;

  constructor() { }

  ngOnInit() {
  }

}
