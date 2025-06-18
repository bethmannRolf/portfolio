


import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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

  http = inject(HttpClient)  //added




  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue] 
    });
  }

contactData = this.fb.group;



  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Erfolg:', this.contactForm.value);
       console.log('Erfolg Nr. 2', this.contactData)
    }
  }
}
