import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the WorkoutDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/workout-details/workout-details.html',
})
export class WorkoutDetailsPage {
  workout;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.workout = this.navParams.get('workout')
  }

}
