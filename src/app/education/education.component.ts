import { Component } from '@angular/core';
import { EducationService } from '../services/education-service/education.service';
import { education } from '../models/education/education.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: string[] = [];

  constructor(private educationService: EducationService) {
    this.educationService.getEducation().subscribe((edu: string[]) => {
      this.education = edu;
    });
  }

}
