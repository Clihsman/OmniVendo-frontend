import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // necesario para HttpClient en standalone

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { PlatformService } from 'src/app/services/platform/platform.service';

// Tu servicio (ajusta la ruta si es diferente)


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    HttpClientModule, // necesario para peticiones HTTP
    FormsModule,
    ReactiveFormsModule,

    // Material UI
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './form-platform.component.html',
})
export class AppFormsPlatformComponent implements OnInit {
  platformForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private platformService: PlatformService
  ) {
    this.platformForm = this.fb.group({
      name: ['', Validators.required],
      platformUrl: ['', Validators.required],
      platformAdapter: ['whatsapp', Validators.required],
      platformId: ['', Validators.required],
      credential: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.platformForm.get('platformAdapter')?.valueChanges.subscribe((value: string) => {
      const platformIdControl = this.platformForm.get('platformId');
      if (value === 'messenger') {
        platformIdControl?.disable();
        platformIdControl?.reset();
      } else {
        platformIdControl?.enable();
      }
    });

    // Desactivar si el valor inicial es messenger
    if (this.platformForm.get('platformAdapter')?.value === 'messenger') {
      this.platformForm.get('platformId')?.disable();
    }
  }

  onSubmit(): void {
    if (this.platformForm.valid) {
      const data = this.platformForm.getRawValue();
      console.log('Datos enviados al backend:', data);
      this.platformService.createPlatform(data).subscribe({
        next: (res) => {
          alert("Plataforma registrada")
          console.log('Respuesta del servidor:', res);
        },
        error: (err) => {
          console.error('Error al enviar datos:', err);
        }
      });
    } else {
      console.warn('Formulario inválido');
    }
  }

}
