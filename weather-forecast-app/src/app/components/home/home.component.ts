import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from "../../service/search-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cities;
  public searchInput;
  public showDetails;

  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {
    this.searchInput = ''
    this.showDetails = false;
  }

  valueChange(value){
    this.searchInput = value;
  }

  seeDetails(){
    this.showDetails = true;
  }


  public search(){
    let input = this.searchInput;
    this.showDetails = false;
    if(input.length < 3){
      console.log("Need bigger input");
      return;
    }
    console.log(input);
    this.searchService.getCities(input).subscribe(data =>{
      this.cities = data.list;
      console.log(data);
      }
    )
  }

}
