import { Component } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  languages: string[] = [];

  constructor(private languagesService: LanguagesService) {
    this.languagesService.getLanguages().subscribe((langs: string[]) => {
      this.languages = langs;
    });
  }
}