


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

  http = inject(HttpClient)




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
      const formData = this.contactForm.value;

      this.http.post('https://rolf-bethmann.de/sendMail.php', formData).subscribe({
        next: (response) => {
          console.log('E-Mail erfolgreich gesendet', response);
          this.successMessage = 'Nachricht wurde erfolgreich gesendet!';
          this.errorMessage = '';

          // Optional: Benutzerfeedback anzeigen
          alert('Nachricht wurde erfolgreich versendet!');
          this.contactForm.reset(); // Formular zurücksetzen
        },
        error: (error) => {
          this.errorMessage = 'Fehler beim Senden.';
          this.successMessage = '';

          console.error('Fehler beim Senden der Nachricht', error);
          alert('Fehler beim Senden. Bitte später erneut versuchen.');
        }
      });
    }






  }

  successMessage = '';
  errorMessage = '';





  // onSubmit() {
  //   if (this.contactForm.valid) {
  //     console.log('Erfolg:', this.contactForm.value);
  //      console.log('Erfolg Nr. 2', this.contactData)
  //   }
  // }
}
