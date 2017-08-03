import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Card } from '../view-models/card';
import { FieldDefinition } from '../../fw/dynamic-forms/field-definition';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  card: Card;
  cardDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    { key: 'name',
      type: 'string',
      isId: false,
      label: 'Card Name',
      required: true
    },
    {
      key: 'epiIndex',
      type: 'number',
      isId: false,
      label: 'EPI Index',
      required: true
    }
  ];
  errorMessage: string;
  operation: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: AppDataService) { }

  createCard(card: Card) {
    card.id = 0;
    this.errorMessage = null;
    this.dataService.createCard(card).subscribe(
      c => this.router.navigate(['/authenticated/card-control']),
      err => this.errorMessage = 'Error creating card'
      );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    if (this.operation === 'create') {
      this.card = { id: 0, name: "", epiIndex: null };
    } else {
        this.dataService.getCard(this.route.snapshot.params['id'])
          .subscribe((card: Card) => this.card = card);
      }
  }

  updateCard(card: Card) {
    this.errorMessage = null;
    this.dataService.updateCard(card).subscribe(
      c => this.router.navigate(['/authenticated/card-control']),
      err => this.errorMessage = 'Error updating card'
      );
  }

}
