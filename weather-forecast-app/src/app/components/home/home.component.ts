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

  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {
    this.searchInput = ''
  }

  valueChange(value){
    this.searchInput = value;
  }


  public search(){
    let input = this.searchInput;
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
