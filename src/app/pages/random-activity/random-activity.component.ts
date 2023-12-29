import { Component, OnInit } from '@angular/core';
import { RandomActivityBoxComponent } from 'app/components/random-activity-box/random-activity-box.component';
import { RandomActivity } from 'app/interfaces/random-activity';
import { GetRandomActivityService } from 'app/services/get-random-activity.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-random-activity',
  standalone: true,
  imports: [RandomActivityBoxComponent, MatButtonModule, MatIconModule],
  templateUrl: './random-activity.component.html',
  styleUrl: './random-activity.component.scss',
})
export class RandomActivityComponent implements OnInit {
  randomActivity: RandomActivity;
  constructor(private getRandomActivityService: GetRandomActivityService) {}
  ngOnInit(): void {
    this.getRandomActivityService
      .getRandomActivity()
      .subscribe((activity) => (this.randomActivity = activity));
  }
}
