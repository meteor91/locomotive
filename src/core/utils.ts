import { ILocomotive } from 'modules/locomotives/models';

export function getGoogleMapPosition(locomotive: ILocomotive): google.maps.LatLngLiteral {
    return {
        lat: locomotive.coords.latitude,
        lng: locomotive.coords.longitude,
    }
}