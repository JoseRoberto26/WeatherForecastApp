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


  ngOnInit() {


    this.activatedRoute.params.subscribe(params => {
      this.cityId = params['cityId'];
      console.log(this.cityId);
    })

    this.searchService.getForecast(this.cityId).subscribe(data => {
      this.forecastData = data;
      this.searchInput = data.city.name;
      console.log(data);
    })


  }

  fixTemp(temp){
    temp = Math.round(temp * 10) / 10;
    return temp;
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
