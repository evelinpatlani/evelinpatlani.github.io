import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { Header } from '../models/header/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  header: Header = new Header();

  constructor(public headerService: HeaderService) {
    this.headerService.getHeader().subscribe((data: any) => {
      if (data) this.header = data;
    });
  }
}
