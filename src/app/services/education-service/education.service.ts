import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { education } from '../../models/education/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  accesoEducation = 'educacion running ...';

  private dbPath = '/education';

  educationRef: AngularFirestoreCollection<education>;

  constructor(private db: AngularFirestore) {
    this.educationRef = db.collection(this.dbPath);
   }

   getEducation(): AngularFirestoreCollection<education> {
    return this.educationRef;
   }
}
