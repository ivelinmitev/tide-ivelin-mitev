import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { DateOfBirthComponent } from '../../shared/components/date-of-birth/date-of-birth.component';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-account-dialog',
  templateUrl: './edit-account-dialog.component.html',
  styleUrls: ['./edit-account-dialog.component.scss']
})
export class EditAccountDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
      private accountService: AccountService,
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<EditAccountDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data,
      private dateOfBirth: DateOfBirthComponent
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: this.data.id,
      fullName:  this.data.fullName,
      // dateOfBirth: this.data.dateOfBirth
      dateOfBirth: new FormGroup({
        day: new FormControl(new Date(this.data.dateOfBirth).getDate(), Validators.minLength(2)),
        month: new FormControl(new Date(this.data.dateOfBirth).getMonth(), Validators.required),
        year: new FormControl(new Date(this.data.dateOfBirth).getFullYear(), Validators.required)
      }),
    });
  }

  submit(form) {
    form.value.dateOfBirth = form.value.dateOfBirth.day + '/' + form.value.dateOfBirth.month + '/' + form.value.dateOfBirth.year;
    this.accountService.updateAccount(form.value).subscribe();
    this.dialogRef.close(form.value);
  }

}
