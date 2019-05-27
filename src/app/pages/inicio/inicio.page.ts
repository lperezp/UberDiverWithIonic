import { Component } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";
@Component({
  selector: "app-inicio",
  templateUrl: "inicio.page.html",
  styleUrls: ["inicio.page.scss"]
})
export class InicioPage {
  lat: number = 0;
  lng: number = 0;
  constructor(private geolocation: Geolocation) {}

  getLocation() {
    this.geolocation
      .getCurrentPosition({
        maximumAge: 1000,
        timeout: 5000,
        enableHighAccuracy: true
      })
      .then(
        resp => {
          this.lat = resp.coords.latitude;
          this.lng = resp.coords.longitude;
          console.log(this.lat, this.lng);
        },
        er => {
          alert("Can not retrieve Location");
          console.log("ERROR", er);
        }
      )
      .catch(error => {
        console.log("ERROR", error);
      });
  }
}
