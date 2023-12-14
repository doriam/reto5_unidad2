import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from '../interfaces/news.modal';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private newCollection: AngularFirestoreCollection<News>;
  constructor(private angularFirestore: AngularFirestore) {
    this.newCollection = this.angularFirestore.collection<News>('New');

  }

  getEvents() {
    return this.newCollection.snapshotChanges().pipe(map((snapshotChanges) => {
      return snapshotChanges.map((snapshot => {
        const data = snapshot.payload.doc.data();
        const id = snapshot.payload.doc.id;
        return { ...data, id }
      }))
    }))
  }

  addEvent(event: News) {
    return this.newCollection.add(event);
  }

  deleteEvent(id: string): Promise<void> {
    return this.newCollection.doc<News>(id).delete();
  }
}
