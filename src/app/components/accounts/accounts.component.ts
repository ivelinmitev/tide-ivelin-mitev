import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditAccountDialogComponent } from '../edit-account-dialog/edit-account-dialog.component';

import { Account } from '../../models/Account';
import { AccountService } from '../../services/account.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.sass']
})
export class AccountsComponent implements OnInit {


  public accounts: Account[];
  public account: Account;
  editAccountDialogRef: MatDialogRef<EditAccountDialogComponent>;
  constructor(
      private accountService: AccountService,
      private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.accountService.getAccounts().subscribe(response => {
      this.accounts = response;
    });
  }

  editAccount(id) {
    this.accountService.getAccount(id).subscribe(response => {
      this.account = response;
      this.editAccountDialogRef = this.dialog.open(EditAccountDialogComponent, {
        data: {
          id: this.account.id,
          fullName: this.account.fullName,
          dateOfBirth: this.account.dateOfBirth
        }
      });

      this.editAccountDialogRef.afterClosed().subscribe(response => {
        const update = response;
        const id = response.id;
        this.accountService.updateAccount(id);
        this.getAllAccounts();
      });
    });
  }

}
