import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { News } from '../interfaces/news.modal';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.page.html',
  styleUrls: ['./list-news.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListNewsPage implements OnInit {

  /*noticias: News[] = [
    { titulo: 'Descubrimiento Científico', fecha: '15/03/2023', descripcion: 'Investigadores anuncian un nuevo avance en la lucha contra enfermedades.' },
    { titulo: 'Evento Cultural en la Ciudad', fecha: '20/03/2023', descripcion: 'Festival de arte y música atrae a miles de visitantes.' },
    { titulo: 'Avance Tecnológico', fecha: '25/03/2023', descripcion: 'Nueva tecnología revolucionaria mejora la eficiencia energética.' },
    { titulo: 'Logro Deportivo', fecha: '01/04/2023', descripcion: 'Equipo local gana el campeonato regional después de una temporada emocionante.' },
  ];*/
  noticias: News[] = [];

  eliminarNoticia(noticia: any) {
    // Use FirebaseService to delete the news
    this.firebaseService.deleteEvent(noticia.id);
  }

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    // Use FirebaseService to get the news data
    this.firebaseService.getEvents().subscribe(data => {
      this.noticias = data;
    });
  }


  goToListNews() {
    this.router.navigate(['/list-news']);
  }

  goToAddNews() {
    this.router.navigate(['/add-news']);
  }


}
