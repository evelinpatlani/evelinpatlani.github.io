import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Header } from '../../models/header/header.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private dbPath = '/header';
  headerRef: AngularFirestoreCollection<Header>;

  constructor(private db: AngularFirestore) {
    this.headerRef = db.collection(this.dbPath);
  }

  getHeader() {
    return this.db.collection('header').valueChanges().pipe(
      map((docs: any[]) => docs[0] || null)
    );
  }

  saveHeader(header: Header): Promise<void> {
    return this.db.collection('header').valueChanges().pipe(
      map((docs: any[]) => docs[0])
    ).toPromise().then((doc: any) => {
      const id = doc?.id || 'data';
      return this.headerRef.doc(id).set({ ...header }, { merge: true });
    }) as Promise<void>;
  }
}
