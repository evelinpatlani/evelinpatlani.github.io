import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { languages } from '../../models/languages/languages.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  accesoLanguages = 'languages running...';
  private dbPath = '/languages';
  languagesRef: AngularFirestoreCollection<languages>;

  constructor(private db: AngularFirestore) {
    this.languagesRef = db.collection(this.dbPath);
   }

   getLanguages() {
    return this.db.collection('languages').valueChanges().pipe(
      map((docs: any[]) => docs[0]?.languages || [])
    );
  }
}
