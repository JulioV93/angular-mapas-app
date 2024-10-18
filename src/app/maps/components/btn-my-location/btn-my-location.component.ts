import { Component } from '@angular/core';
import { Map } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) { }

  goToMyLocation() {

    if(!this.placesService.isUserLocationReady) throw new Error('User location is not ready');
    if(!this.mapService.isMapReady) throw new Error('Map is not ready');

    this.mapService.flyTo( this.placesService.uerLoaction! );
  }

}
