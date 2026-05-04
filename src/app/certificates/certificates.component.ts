import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';  

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificates: string[] = [];
  
  constructor(private certificatesService: CertificatesService) {
    this.certificatesService.getCertificates().subscribe((langs: string[]) => {
      this.certificates = langs;
    });
  }
}