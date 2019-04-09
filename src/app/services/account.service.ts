import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Account } from '../models/Account';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class AccountService {
  baseUrl = 'api/accounts';
  constructor(
      private http: HttpClient
  ) {}

// Get all accounts
  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl);
  }

  // Get account by id
  getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.baseUrl}/${id}`);
  }

// Update an account
  updateAccount(account): Observable<Account> {
    return this.http.put<Account>(this.baseUrl, account, httpOptions);
  }
}
