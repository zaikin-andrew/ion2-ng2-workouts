import { Component } from '@angular/core';
import {NavController, NavParams, Alert} from 'ionic-angular';
import Workout from '../../models/workout';
import {WorkoutsService} from '../../providers/workouts.service';
import {WorkoutsPage} from '../workouts/workouts';

@Component({
  templateUrl: 'build/pages/workout-details/workout-details.html',
})
export class WorkoutDetailsPage {
  workout: Workout;

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private workoutsService: WorkoutsService
  ) {
    this.workout = this.navParams.get('workout')
  }


  deleteWorkout() {
    let alert = Alert.create({
      title: 'Delete workout',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.workoutsService.removeWorkout(this.workout).subscribe(data => {
              this.nav.pop();
            })
          }
        }
      ]
    });
    this.nav.present(alert);
  }

}
