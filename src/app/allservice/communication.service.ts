import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private useridSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userid$: Observable<string> = this.useridSubject.asObservable();

  setUserId(id: string) {
    this.useridSubject.next(id);
    
  }
  private usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  username$: Observable<string> = this.usernameSubject.asObservable();

  setUsername(username: string) {
    this.usernameSubject.next(username);
  }

  constructor() { }

  private isUserLoggedInSubject = new BehaviorSubject<boolean>(false);
  isUserLoggedIn$ = this.isUserLoggedInSubject.asObservable();

  setUserLoggedInStatus(isLoggedIn: boolean) {
    this.isUserLoggedInSubject.next(isLoggedIn);
  }
}
