import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { MaterialModule } from 'src/app/material.module';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private authService: AuthService) {
     //localStorage.setItem('token', '');
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) return;

    const credentials = {
      email: this.form.value.email as string,
      password: this.form.value.password as string
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.accessToken);
        this.router.navigate(['/dashboard']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Login error:', error);
        alert('Correo o contraseña incorrectos');
      },
    });
  }
}
