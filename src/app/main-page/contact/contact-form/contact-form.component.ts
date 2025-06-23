


import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; //added
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
  http = inject(HttpClient);
  contactForm: FormGroup;
  successMessageVisible = false;

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
      this.http.post('https://www.rolf-bethmann.de/sendMail.php', this.contactForm.value)
        .subscribe({
          next: () => {
            this.successMessageVisible = true;
            this.contactForm.reset();
            setTimeout(() => this.successMessageVisible = false, 5000);
          },
          error: () => {
            alert('Fehler beim Senden der Nachricht. Bitte erneut versuchen.');
          }
        });
    }
  }
}
