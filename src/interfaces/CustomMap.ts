export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  contentMarker(): string;
}
