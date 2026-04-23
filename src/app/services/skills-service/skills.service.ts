import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { skills } from '../../models/skills/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  accesoSkills = 'skills running...';
  private dbPath = '/skills';

  skillsRef: AngularFirestoreCollection<skills>;

  constructor(private db: AngularFirestore) {
    this.skillsRef = db.collection(this.dbPath);
   }

   getSkills (): AngularFirestoreCollection<skills> {
    return this.skillsRef;
   }
  
}
