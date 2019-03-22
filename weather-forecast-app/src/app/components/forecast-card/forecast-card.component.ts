import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css']
})
export class ForecastCardComponent implements OnInit {

  @Input() forecastDate;
  @Input() iconCode;
  @Input() forecastDescription;
  @Input() maxTemp;
  @Input() minTemp;
  weekday = [];
  month = [];

  constructor() { }

  ngOnInit() {
  this.setWeekDays();
  this.setMonths();
  }

  fixTemp(temp){
    temp = Math.round(temp * 10) / 10;
    return temp;
  }

  setWeekDays(){
  this.weekday[0] =  "Sun";
  this.weekday[1] = "Mon";
  this.weekday[2] = "Tue";
  this.weekday[3] = "Wed";
  this.weekday[4] = "Thu";
  this.weekday[5] = "Fri";
  this.weekday[6] = "Sat";
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

  fixDateFormat(date){
    let dateString = date;
    let formattedDate = new Date(dateString);
    let formattedDateString = this.weekday[formattedDate.getDay()];
    formattedDateString = formattedDateString+ ' ' + formattedDate.getDate().toString();
    formattedDateString = formattedDateString+ ' ' + this.month[formattedDate.getMonth()];
    return formattedDateString;
  }

  fixHoursFormat(date){
    let dateString = date;
    let formattedDate = new Date(dateString);
    let formattedDateTime;
    if(formattedDate.getHours() >= 10){
      formattedDateTime = formattedDate.getHours().toString() + ':' + formattedDate.getMinutes() + '0';
    }
    else{
       formattedDateTime = '0' + formattedDate.getHours().toString() + ':' + formattedDate.getMinutes() + '0';
    }
    return formattedDateTime;
  }



}
