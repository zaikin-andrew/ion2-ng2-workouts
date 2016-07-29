import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutsService} from '../../providers/workouts.service';

/*
  Generated class for the WorkoutsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/workouts/workouts.html',
})
export class WorkoutsPage {
  workouts: Object[];
  constructor(
    private nav: NavController,
    private workoutsService: WorkoutsService
  ) {
    this.workoutsService.getWorkouts().subscribe(data => {
      this.workouts = data;
      console.log(data)
    });
  }

}
