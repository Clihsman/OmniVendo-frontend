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
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Adapter, AdapterService } from 'src/app/services/adapter/adapter.service';

// Tu servicio (ajusta la ruta si es diferente)

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTableModule
  ],
  templateUrl: './form-platform.component.html',
})
export class AppFormsPlatformComponent implements OnInit {
  showForm = false;
  platformForm: FormGroup;
  displayedColumns1: string[] = ['assigned', 'name', 'priority', 'budget'];
  dataSource1 = [];
  adapters: Adapter[] = [];
  selectedAdapterUrl: string | null = null;
  requiresPlatformId = false;

  constructor(private fb: FormBuilder, private platformService: PlatformService, private adapterService: AdapterService) {
    this.platformForm = this.fb.group({
      name: ['', Validators.required],
      platformUrl: ['', Validators.required],
      platformAdapter: ['whatsapp', Validators.required],
      platformId: ['', Validators.required],
      credential: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadData();

    this.adapterService.getAdapters().subscribe((data) => {
      this.adapters = data;
    });

  }

  loadData(): void {
    this.platformService.getAllPlatforms().subscribe({
      next: () => {
        // Llamado exitoso; puedes agregar lógica aquí más tarde
      },
      error: (err) => console.error('Error al cargar plataformas', err)
    });
  }


  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onAdapterChange(selectedUrl: string): void {
    const selectedAdapter = this.adapters.find((a) => a.url === selectedUrl);
    this.requiresPlatformId = selectedAdapter?.requiredPlatformId ?? false;

    const platformIdControl = this.platformForm.get('platformId');

    if (!this.requiresPlatformId) {
      platformIdControl?.disable();
      platformIdControl?.reset(); // limpia el valor
    } else {
      platformIdControl?.enable();
    }

    this.platformForm.get('platformUrl')?.setValue(selectedAdapter?.url ?? '');

    console.log('URL seleccionada:', selectedUrl);
    console.log('Requiere Platform ID:', this.requiresPlatformId);
  }


  onSubmit(): void {
    if (this.platformForm.valid) {
      const data = this.platformForm.getRawValue();
      this.platformService.createPlatform(data).subscribe({
        next: () => {
          alert('Plataforma registrada');
          this.platformForm.reset({ platformAdapter: 'whatsapp' });
          this.showForm = false;
          this.loadData();
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

