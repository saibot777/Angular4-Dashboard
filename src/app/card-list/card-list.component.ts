import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Card } from '../view-models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: 'card-list.component.html',
  styleUrls: ['card-list.component.css']
})
export class CardListComponent implements OnInit {

  allCards: Array<Card>;
  count = 0;
  cards: Array<Card>;

  constructor(private dataService: AppDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataService.getCards().subscribe(
      cards => {
        this.allCards = cards;

        this.count = this.route.snapshot.params['count'];
        this.updateList();
      }
    );

    this.route.params.subscribe(params => {
      this.count = params['count'];
      this.updateList();
     });
  }

  updateList() {
    this.cards = this.count>0?this.allCards.slice(0, this.count): this.allCards;
  }
}

