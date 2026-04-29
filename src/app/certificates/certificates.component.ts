import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { certificates } from '../models/certificates/certificates.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificatesList: certificates[] = [];

  constructor(public certificatesService: CertificatesService) {
    this.certificatesService.getCertificates().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    ).subscribe(data => {
      this.certificatesList = data;
    });
  }
}