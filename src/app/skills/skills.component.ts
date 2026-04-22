import { Component } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';
import { skills } from '../models/skills/skills.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillsList: skills[] = [];

  constructor(public SkillsService: SkillsService) {
    console.log(this.SkillsService.accesoSkills);
    this.SkillsService.getSkills().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data()  })
        )
      )
    ).subscribe(data => {
      this.skillsList = data;
    });
  }
}
