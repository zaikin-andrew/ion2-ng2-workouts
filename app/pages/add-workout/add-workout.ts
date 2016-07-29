import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutsService} from '../../providers/workouts.service';
import Workout from '../../models/workout';
import {WorkoutsPage} from '../workouts/workouts';

@Component({
  templateUrl: 'build/pages/add-workout/add-workout.html',
})
export class AddWorkoutPage {
  title: string;
  note: string;
  type: string;

  constructor(
    private nav: NavController,
    private workoutService: WorkoutsService
  ) {

  }
  onSubmit() {
    let workout = new Workout(this.title, this.note, this.type);
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.nav.push(WorkoutsPage);
    })
  }

}
