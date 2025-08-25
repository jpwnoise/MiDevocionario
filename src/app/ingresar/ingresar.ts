import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ingresar',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ingresar.html',
  styleUrl: './ingresar.sass'
})
export class Ingresar {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  enviaForm(event: Event) {
    event.preventDefault();

    console.log( this.loginForm.get('email')?.invalid ); 


    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.http.post('http://localhost:3000/api/seguridad/ingresar', formData).subscribe({
        next: (response) => {
          this.router.navigate(['/tablero']);
          // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
        },
        error: (error) => {
          console.error('Error al ingresar:', error);
          // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
        }
      });
     
    } else {
      console.log('Formulario inválido');
    }
  }

}
