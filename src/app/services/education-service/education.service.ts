import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { education } from '../../models/education/education.model';
import { map } from 'rxjs/operators';


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

   getEducation(){
    return this.db.collection('education').valueChanges().pipe(
        map((docs: any[]) => docs[0]?.education || [])
     );
  }
}
