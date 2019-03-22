import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from "../../service/search-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private searchService: SearchServiceService, private activatedRoute: ActivatedRoute, private router:Router) { }


  private cityId;
  private forecastData;
  public searchInput;
  private weatherData;
  month = [];


  ngOnInit() {
    this.setMonths();

    this.activatedRoute.params.subscribe(params => {
      this.cityId = params['cityId'];
      console.log(this.cityId);
    })

    this.searchService.getWeather(this.cityId).subscribe(data =>{
      this.weatherData = data;
      console.log(data);
    })

    this.searchService.getForecast(this.cityId).subscribe(data => {
      this.forecastData = data;
      this.searchInput = data.city.name;
    })


  }


  setMonths(){
    this.month[0] = "Jan";
    this.month[1] = "Feb";
    this.month[2] = "Mar";
    this.month[3] = "Apr";
    this.month[4] = "May";
    this.month[5] = "June";
    this.month[6] = "July";
    this.month[7] = "Aug";
    this.month[8] = "Sep";
    this.month[9] = "Oct";
    this.month[10] = "Nov";
    this.month[11] = "Dec";
  }
  fixTemp(temp){
    temp = Math.round(temp * 10) / 10;
    return temp;
  }

  fixDateAndTime(date){
    let dateFormat = new Date(date);
    let dateString;
    let hourString, minuteString;
    if(dateFormat.getHours() < 10) {
      hourString = '0'+dateFormat.getHours().toString();
    }
    else {
      hourString = dateFormat.getHours().toString();
    }

    if(dateFormat.getMinutes() < 10) {
      minuteString = '0' + dateFormat.getMinutes().toString();
    }
    else {
      minuteString = dateFormat.getMinutes().toString();
    }
      dateString = hourString+':'+minuteString+' '+this.month[dateFormat.getMonth()]+' '+dateFormat.getDate().toString();
      return dateString;
  }

  valueChange(value){
    this.searchInput = value;
  }

  search(){
    this.router.navigate([''], {queryParams: {q: this.searchInput}});
  }

  goHome(){
    this.router.navigate(['']);
  }

}
