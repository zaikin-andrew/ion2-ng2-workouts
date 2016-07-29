import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutsService {
  private apiUrl: string = 'http://52.42.6.82:3000/myworkouts/workouts';

  constructor(private http: Http) {
  }

  getWorkouts() {
    return this.http.get(this.apiUrl).map(res => res.json());
  }
}

