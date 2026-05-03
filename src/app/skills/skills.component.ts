import { Component } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: { name: string, level: number }[] = [];

  constructor(private skillsService: SkillsService) {
    this.skillsService.getSkills().subscribe((data) => {
      console.log('Skills data:', data);
      this.skills = data;
    });
  }
}
