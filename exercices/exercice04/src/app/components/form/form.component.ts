// form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonFormComponent } from "../button-form/button-form.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ButtonFormComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(125)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      message: ['']
    });
  }

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
