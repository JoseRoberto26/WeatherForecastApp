import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from "../../service/search-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cities;
  public searchInput;
  public urlParam;

  constructor(private searchService: SearchServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.searchInput = ''
    this.activatedRoute.queryParams.subscribe(params => {
      this.urlParam = params['q'];
      console.log(this.urlParam);
      if(this.urlParam != undefined && this.urlParam != ''){
        console.log("entrou");
        console.log(this.urlParam);
        this.searchInput = this.urlParam;
        this.search();
      }
    })


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
