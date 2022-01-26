/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { Mappable } from "./interfaces/CustomMap";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById("map"), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const InfoWindow = new google.maps.InfoWindow({
        content: mappable.contentMarker(),
      });

      InfoWindow.open(this.googleMap, marker);
    });
  }
}
