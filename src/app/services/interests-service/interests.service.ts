import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { interests } from '../../models/interests/interests.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterestsService {
 accesoInterests = 'interests running...';
  private dbPath = '/interests';

  interestsRef: AngularFirestoreCollection<interests>;

  constructor(private db: AngularFirestore) {
    this.interestsRef = db.collection(this.dbPath);
   }

   getInterests() {
      return this.db.collection('interests').valueChanges().pipe(
        map((docs: any[]) => docs[0]?.interests || [])
      );
    }
}
