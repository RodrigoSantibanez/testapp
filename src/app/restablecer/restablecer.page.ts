import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiAuthService } from '../Services/api-auth.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  user = {
    usuario: '',
    password: ''
  };

  errorMessage : String =  '';

  constructor(
    private router: Router,
    private apiValServices: ApiAuthService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  submitForm() {
    this.apiValServices.validarUsuario(this.user.usuario).subscribe(
      (response: any) => {
        // La API respondió con un valor booleano
        if (response) {
          // Usuario válido

          this.showSuccessPopup();

          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        } else {
          // Usuario inválido
          this.showErrorPopup();
          this.errorMessage = 'El usuario ingresado es incorrecto o inválido';
        }
      },
      (error: any) => {
        // Manejar errores de la solicitud a la API, si es necesario
        console.error('Error al enviar solicitud: ', error);
        // Actualizar el mensaje de error o manejar el error según lo desees
        this.errorMessage = 'Error en la solicitud';
      }
    );
  }

  async showSuccessPopup() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: `Se ha enviado un correo para restablecer la contraseña al usuario ${this.user.usuario}`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Redirige después de cerrar el popup
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }
  
  async showErrorPopup() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'El usuario ingresado es incorrecto o inválido',
      buttons: ['OK']
    });
    await alert.present();
  }
}


