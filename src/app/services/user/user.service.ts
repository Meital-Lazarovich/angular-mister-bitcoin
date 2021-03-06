import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { of } from 'rxjs';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any = null;

  constructor(private storageService: StorageService) { }

  getUser() {
    if (!this.user) {
      this.storageService.loadFromStorage(USER_KEY)
        .subscribe(user => this.user = user)
    }
    return of(this.user)
  }

  signup(name) {
    this.user = {
      name,
      coins: 100,
      moves: []
    }
    this.storageService.saveToStorage(USER_KEY, this.user)
      .subscribe()
    return of(this.user);
  }

  addMove(contact, amount) {
    if (!this.user) this.user = this.storageService.loadFromStorage(USER_KEY)
    this.user.moves.unshift({
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount
    })
    this.user.coins -= amount
    this.storageService.saveToStorage(USER_KEY, this.user)
    return of(this.user);
  }
}
