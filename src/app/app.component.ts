import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  cards = [];

  constructor(
    private http: Http
  ){}

  ngOnInit() {
    this.http.get('http://res.cloudinary.com/christekh/image/list/scotch.json')
      .map(data => data.json().resources)
      .subscribe(resources => { this.cards = resources });
  }
}
