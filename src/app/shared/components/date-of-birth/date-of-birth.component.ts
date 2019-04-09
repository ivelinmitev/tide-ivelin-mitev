import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.component.html',
  styleUrls: ['./date-of-birth.component.scss']
})
export class DateOfBirthComponent implements OnInit {

    @Input() type: string;
    @Input() formCtrlName: string;

    inputFormGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.inputFormGroup = this.formBuilder.group({
            dateOfBirth: new FormGroup({
                day: new FormControl('', Validators.minLength(2)),
                month: new FormControl('', Validators.required)
            }),
        });
    }

}
