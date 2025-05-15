


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule, TranslateModule]
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue] 
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form data:', this.contactForm.value);
     
    }
  }
}
