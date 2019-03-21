import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {

  @Input() cityName;
  @Input() countryCode;
  @Input() maxTemp;
  @Input() minTemp;
  @Input() temp;
@Input() iconCode;
@Input() weatherText;

  constructor() { }

  ngOnInit() {
  }

  lowercase(text){
    return text.toLowerCase();
  }

  fixTemp(temp){
    temp = Math.round(temp * 10) / 10;
    return temp;
  }

}
