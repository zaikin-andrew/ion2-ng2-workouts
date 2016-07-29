import {Component} from '@angular/core';
import {AboutPage} from '../about/about';
import {WorkoutsPage} from '../workouts/workouts';
import {AddWorkoutPage} from '../add-workout/add-workout';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private workouts: any;
  private about: any;
  private addWorkout: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.workouts = WorkoutsPage;
    this.about = AboutPage;
    this.addWorkout = AddWorkoutPage;
  }
}
