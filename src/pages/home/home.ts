import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http'
import {LocationTrackerProvider} from "../../providers/location-tracker/location-tracker";
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Destination: any = '';
  MyLocation: any;
	public data:any;
 
  constructor(public navCtrl: NavController, public locationTracker: LocationTrackerProvider, public alertCtrl: AlertController, public http: Http)
  {
 const data = JSON.parse(localStorage.getItem('userData'));
 // console.log(data);
  	let header = new Headers();
    header.append('Accept', 'application/json');
    header.append('Authorization', 'Bearer ' + data);
  
  this.http.get('http://localhost:8000/api/postsshow', {headers: header})
  	.map(res => res.json())
  	.subscribe(
  		data => {
  			console.log(data);
  			this.data = data;
  		},
  		err => {
  			console.log('error')
  		}
  		);
	
	setInterval(this.start(),3000);
  }

  postDetalhes(req) {
  let alert = this.alertCtrl.create({
     title: 'Detalhes da notícia',
     subTitle: req.description,
     buttons: ['Fechar']
   });
   alert.present();
 }

 /* minhaLocalizacao(){
    let that = this;
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
		  lng: position.coords.longitude
        };
        map.setCenter(pos);
        that.MyLocation = new google.maps.LatLng(pos);
		 console.log(pos.lat);
		 console.log(pos.lng);
		
        
      }, function() {

      });
    } else {
      // Browser doesn't support Geolocation
    }
  
 }
*/

 public start() {
    this.locationTracker.startTracking();
  }
  
}
