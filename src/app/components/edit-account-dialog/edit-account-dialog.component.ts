import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-account-dialog',
  templateUrl: './edit-account-dialog.component.html',
  styleUrls: ['./edit-account-dialog.component.sass']
})
export class EditAccountDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<EditAccountDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: this.data.id,
      fullName:  this.data.fullName,
      dateOfBirth: this.data.dateOfBirth
    });
  }

  submit(form) {
    this.dialogRef.close(form.value);
  }

}
