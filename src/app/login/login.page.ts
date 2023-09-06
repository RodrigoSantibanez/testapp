import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    usuario: '',
    password: ''
  };

  constructor(private router: Router,
    private alertController: AlertController) {}

  ngOnInit() {}

  //ingresar() {
  //  const navigationExtras: NavigationExtras = {
  //    state: {
  //      user: this.user
  //    }
  //  };
  //  this.router.navigate(['/home'], navigationExtras);
  //}

  routerRestablecer(){
    this.router.navigate(['/restablecer']);
  }

  async ingresar() {
    const minLength = 4;

    if (this.user.usuario.length < minLength) {
      const alert = await this.alertController.create({
        header: 'Datos invalidos',
        message: `El nombre de usuario debe tener al menos ${minLength} caracteres.`,
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const navigationExtras: NavigationExtras = {
        state: {
          user: this.user,
        },
      };
      this.router.navigate(['/home'], navigationExtras);
    }
  }
  
}