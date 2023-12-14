import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {

  constructor(private router: Router) { }

  goToListNews() {
    this.router.navigate(['/list-news']);
  }

  goToAddNews() {
    this.router.navigate(['/add-news']);
  }

}
