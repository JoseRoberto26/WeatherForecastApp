import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";


const appID = '76d1b43ba3695cfae59aa9f7dc9b4877';
const baseUrl = 'https://api.openweathermap.org/data/2.5/find?q=';
const baseUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast?id='

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http:HttpClient) { }

  getCities(input): Observable<any>{
    let finalUrl = baseUrl+input+'&appId='+appID+'&units=metric';
    return this.http.get(finalUrl);
  }

  getForecast(input): Observable<any>{
    let finalUrl = baseUrlForecast+input+'&appId='+appID+'&units=metric';
    return this.http.get(finalUrl);
  }
}


