import { Component } from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {WorkoutsService} from '../../providers/workouts.service';
import Workout from '../../models/workout';

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
    let alert = Alert.create({
      title: 'Add workout',
      message: 'Workout has been added!',
      buttons: ['OK']
    });
    let workout = new Workout(this.title, this.note, this.type);
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.nav.present(alert);
    })
  }

}
