import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditAccountDialogComponent } from '../edit-account-dialog/edit-account-dialog.component';

import { Account } from '../../models/Account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  public accounts: Account[];
  public editAccountDialogRef: MatDialogRef<EditAccountDialogComponent>;

  constructor(
      private accountService: AccountService,
      private dialog: MatDialog
  ) { }

  ngOnInit() {
      this.getAllAccounts();
  }

  getAllAccounts() {
    this.accountService.getAccounts()
        .subscribe(response => {
          this.accounts = response;
        });
  }

  editAccount(id) {
    this.accountService.getAccount(id)
        .subscribe(response => {
          this.editAccountDialogRef = this.dialog.open(EditAccountDialogComponent, {
            data: {
              id: response.id,
              fullName: response.fullName,
              dateOfBirth: response.dateOfBirth
            }
          });

          this.editAccountDialogRef
              .afterClosed()
              .subscribe(response => {
                  const itemIndex = this.accounts.findIndex(item => item.id === response.id);
                  this.accounts[itemIndex] = response;
              });
        });
  }
}
