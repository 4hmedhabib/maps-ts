/// <reference types="@types/google.maps" />
import {User} from './User'
import {Company} from './Company'
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

    addMarker(mappable: User | Company ) : void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }

    // addUserMarker(user: User) : void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng
    //         }
    //     })
    // }

    // addCompanyMarker(compnay: Company) : void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: compnay.location.lat,
    //             lng: compnay.location.lng
    //         }
    //     })
    // }

}