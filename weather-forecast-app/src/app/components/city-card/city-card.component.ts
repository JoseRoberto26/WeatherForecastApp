import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {

  @Input() cityName;
  @Input() cityId;
  @Input() countryCode;
  @Input() maxTemp;
  @Input() minTemp;
  @Input() temp;
@Input() iconCode;
@Input() weatherText;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  lowercase(text){
    return text.toLowerCase();
  }

  fixTemp(temp){
    temp = Math.round(temp * 10) / 10;
    return temp;
  }

  seeDetails(){
    this.router.navigate(['/details/', this.cityId]);
  }

}
