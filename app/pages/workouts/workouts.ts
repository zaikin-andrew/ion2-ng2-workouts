import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutsService} from '../../providers/workouts.service';
import {WorkoutDetailsPage} from '../workout-details/workout-details';

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
  workoutSelected;
  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private workoutsService: WorkoutsService
  ) {
    this.workoutsService.getWorkouts().subscribe(data => {
      this.workouts = data;
      console.log(data)
    });
  }

  selectWorkout(e, workout) {
    this.nav.push(WorkoutDetailsPage, {
      workout: workout
    })
  }
}
