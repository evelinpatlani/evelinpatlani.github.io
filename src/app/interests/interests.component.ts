import { Component } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests.service';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})

export class InterestsComponent {
  interests: string[] = [];
  
   constructor(private interestsService: InterestsService) {
      this.interestsService.getInterests().subscribe((langs: string[]) => {
        this.interests = langs;
      });
    }
}
