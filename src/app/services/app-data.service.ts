import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Card } from '../view-models/card';
import { Observable } from 'rxjs/Observable';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {User} from "../../backend/_models/user";

@Injectable()
export class AppDataService {

  private cards : Array<Card> = [
    { id: 1, name:"Switzerland",  epiIndex: 87.67 },
    { id: 2, name:"Luxembourg",   epiIndex: 83.29 },
    { id: 3, name:"Australia", epiIndex: 82.4 },
    { id: 4, name:"Singapore", epiIndex: 81.78 },
    { id: 5, name:"Czech Republic", epiIndex: 81.47 },
    { id: 6, name:"Germany", epiIndex: 80.47 },
    { id: 7, name:"Spain", epiIndex: 79.09 },
    { id: 8, name:"Austria", epiIndex: 78.32 },
    { id: 9, name:"Sweden", epiIndex: 78.09 },
    { id: 10, name:"Norway", epiIndex: 78.04 }
  ];

  constructor(private userService: UserService, public http : Http) {
  }

  // Users Management
  getAll() {
    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

  // Card Management
  createCard(vm: Card) : Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create country'));
    let id = 0;
    this.cards.forEach(c => { if (c.id >= id) id = c.id+1 });
    vm.id = id;
    this.cards.push(vm);
    return Observable.of(vm);
  }

  deleteCard(id: number) : Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
    return Observable.of({}).delay(2000)
     .do(e => this.cards.splice(this.cards.findIndex(c => c.id == id), 1));
  }

  getCards() : Observable<any> {
    return Observable.of(this.cards);
  }

  getCard(id: number) : Observable<Card> {
    var card = this.cards.find(c => c.id == id);
    return Observable.of(card);
  }

  updateCard(updatedCard: Card) : Observable<any> {
    var card = this.cards.find(c => c.id == updatedCard.id);
    Object.assign(card, updatedCard);
    return Observable.of(card).delay(2000);
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw(''));
  }

}
