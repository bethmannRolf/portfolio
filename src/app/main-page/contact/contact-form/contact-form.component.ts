import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const validTLDs = [
  'com', 'de', 'org', 'net', 'info', 'eu', 'io', 'dev',
  'co', 'us', 'uk', 'fr', 'it', 'es', 'nl', 'ch', 'at', 'be',
  'ca', 'au', 'cz', 'pl', 'se', 'no', 'dk', 'fi', 'jp', 'cn',
  'biz', 'tv', 'me', 'pro', 'name', 'app', 'shop', 'online', 'site', 'club'
];

export function emailWithTLDValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      return { invalidEmail: true };
    }
    const tld = value.split('.').pop()?.toLowerCase();
    if (!tld || !validTLDs.includes(tld)) {
      return { invalidTLD: true };
    }
    return null;
  };
}

/**
 * ContactFormComponent handles the contact form logic,
 * including form creation, validation, and submission via HTTP.
 */
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TranslateModule]
})
export class ContactFormComponent {
  http = inject(HttpClient);
  contactForm: FormGroup;
  successMessageVisible = false;


  maxMessageLength = 200;
  remainingChars = this.maxMessageLength;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, emailWithTLDValidator()]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(this.maxMessageLength)]],
      acceptTerms: [false, Validators.requiredTrue]
    });

    this.contactForm.get('message')?.valueChanges.subscribe(value => {
      const length = value ? value.length : 0;
      this.remainingChars = this.maxMessageLength - length;
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post('https://www.rolf-bethmann.de/sendMail.php', this.contactForm.value)
        .subscribe({
          next: () => {
            this.successMessageVisible = true;
            this.contactForm.reset();
            this.remainingChars = this.maxMessageLength;
            setTimeout(() => this.successMessageVisible = false, 5000);
          },
          error: () => {
            alert('Fehler beim Senden der Nachricht. Bitte erneut versuchen.');
          }
        });
    }
  }
}
