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

  private widths = ['100%', '82%', '95%', '78%', '88%', '65%', '90%', '72%', '85%', '92%'];

  constructor(public SkillsService: SkillsService) {
    this.SkillsService.getSkills().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.skillsList = data;
    });
  }

  getBarWidth(index: number): string {
    return this.widths[index % this.widths.length];
  }
}
