import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { News } from '../interfaces/news.modal';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.page.html',
  styleUrls: ['./add-news.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddNewsPage implements OnInit {
  nuevaNoticia = { titulo: '', fecha: '', descripcion: '' };

  agregarNoticia() {
    // Use FirebaseService to add the news
    this.firebaseService.addEvent(this.nuevaNoticia);

    // Reset the form
    this.nuevaNoticia = { titulo: '', fecha: '', descripcion: '' };
    this.router.navigate(['/list-news']);

  }
  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {

  }

  goToListNews() {
    this.router.navigate(['/list-news']);
  }

  goToAddNews() {
    this.router.navigate(['/add-news']);
  }

}
