import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { config } from './../config';
@Injectable({
  providedIn: 'root'
})
export class OnlineService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${config.apiUrl}/profile`);
  }

  update(data) {
    return this.http.post(`${config.apiUrl}/update`, data);
  }
}
