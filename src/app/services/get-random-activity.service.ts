import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomActivity } from 'app/interfaces/random-activity';

@Injectable({
  providedIn: 'root',
})
export class GetRandomActivityService {
  constructor(private http: HttpClient) {}
  getRandomActivity() {
    return this.http.get<RandomActivity>(
      'https://www.boredapi.com/api/activity'
    );
  }
}
