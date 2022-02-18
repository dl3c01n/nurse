import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private httpClient = HttpClient) { 
  }

  public getPatients() {
    return this.httpClient.length()
  }
}
