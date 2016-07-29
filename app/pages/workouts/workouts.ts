import { Component } from '@angular/core';
import { NavController,  } from 'ionic-angular';
import {WorkoutsService} from '../../providers/workouts.service';
import {WorkoutDetailsPage} from '../workout-details/workout-details';
import Workout from '../../models/workout';
@Component({
  templateUrl: 'build/pages/workouts/workouts.html',
})
export class WorkoutsPage {
  workouts: Array<Workout>;
  constructor(
    private nav: NavController,
    private workoutsService: WorkoutsService
  ) {

  }

  selectWorkout(e, workout: Workout) {
    this.nav.push(WorkoutDetailsPage, {
      workout: workout
    })
  }
  ionViewWillEnter(){
    this.workoutsService.getWorkouts().subscribe(data => {
      this.workouts = data;
    });
  }
}
