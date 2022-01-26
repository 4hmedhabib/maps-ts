/// <reference types="@types/google.maps" />
import { User } from './User'
import { Company } from './Company';

interface Mappable {
    location: {
        lat: number,
        lng: number,
    }
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor() {
        this.googleMap = new google.maps.Map(document.getElementById('map'), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })

    }

    const marker = addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }

    marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
            content: 'Hi there!'
        });

    })


    
}