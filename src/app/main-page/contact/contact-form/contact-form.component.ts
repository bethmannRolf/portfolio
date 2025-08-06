import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

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
  /** HTTP client used to send form data to the server */
  http = inject(HttpClient);

  /** Reactive form group for the contact form */
  contactForm: FormGroup;

  /** Controls the visibility of the success message after form submission */
  successMessageVisible = false;

  /**
   * Initializes the contact form with validators.
   * @param fb FormBuilder for constructing the reactive form
   */
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  /**
   * Handles form submission.
   * If the form is valid, it sends the form data to the backend and shows a success message.
   * If there's an error, an alert message is shown to the user.
   */
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
