import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../models/Account';



@Injectable()
export class AccountService {
  baseUrl = 'api/accounts';
  constructor(
      private http: HttpClient
  ) {}

// Gets all accounts
  getAccounts() {
    return this.http.get<Account[]>(this.baseUrl);
  }

  // Gets all accounts
  getAccount(id: number) {
    return this.http.get<Account>(`${this.baseUrl}/${id}`);
  }

// Creates a account
  createAccount(account) {
    return this.http.post(this.baseUrl, account);
  }
// Updates a account
  updateAccount(account) {
    return this.http.put(this.baseUrl, JSON.stringify(account));
  }
// Deletes a account
 public deleteAccount(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
