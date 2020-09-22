import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'orbital-report';
  sourceList: Satellite[];
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
          for (let item in fetchedSatellites)
          {
            new Satellite (fetchedSatellites[item].name, fetchedSatellites[item].type, fetchedSatellites[item].launchDate, fetchedSatellites[item].orbitType, fetchedSatellites[item].operational);
            
            this.sourceList.push(fetchedSatellites[item]);
          }
          
 
       }.bind(this));
    }.bind(this));
 
 }
}





