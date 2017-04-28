import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Card } from '../view-models/card';

@Component({
  templateUrl: 'card-control.component.html',
  styleUrls: ['card-control.component.css']
})
export class CardControlComponent {

  cards : Array<Card>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: AppDataService,
              private router: Router) {
    dataService.getCards().subscribe((data) => this.cards = data);
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createCard() {
    this.router.navigate(['/authenticated/card-detail', 0, 'create']);
  }

  deleteCard(id: number) {
    this.isDeleting = true;
    this.dataService.deleteCard(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
      );
  }

  deleteCardQuestion(id:number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editCard(id: number) {
    this.router.navigate(['/authenticated/card-detail', id, 'edit']);
  }

  showCardDetail(id: number) {
    this.router.navigate(['/authenticated/card-detail', id, 'details']);
  }

}
