import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Workout from '../models/workout';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutsService {
  private apiUrl: string = 'http://52.42.6.82:3000/myworkouts/workouts';

  constructor(private http: Http) {
  }

  getWorkouts() {
    return this.http.get(this.apiUrl).map(res => res.json());
  }
  addWorkout(workout: Workout) {
    return this.http.post(this.apiUrl, workout).map(res => res.json());
  }
  removeWorkout(workout: Workout) {
    return this.http.delete(`${this.apiUrl}/${workout._id}`, workout).map(res => res.json());
  }
}

