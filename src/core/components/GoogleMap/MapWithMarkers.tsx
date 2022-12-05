import React, {CSSProperties} from 'react';
import { Map } from './Map';
import { defaultGoogleMapZoom, defaultMapPositionCoords } from 'core/consts';
import { Marker } from './Marker';
import { NarcissisticMarker } from './NarcissisticMarker';

interface IProps {
    defaultZoom?: number;
    defaultCenter?: google.maps.LatLngLiteral | null;
    markers: google.maps.MarkerOptions[];
    activeMarker?: google.maps.MarkerOptions;
    style?: CSSProperties | undefined;
}

export const MapWithMarkers: React.FC<IProps> = (props) => {
    const {
        defaultZoom = defaultGoogleMapZoom,
        defaultCenter = defaultMapPositionCoords,
        markers,
        activeMarker,
        style={display: "flex", height: "300px"}
    } = props;

    return (
        <div style={style}>
            <Map
                center={defaultCenter}
                zoom={defaultZoom}
                style={{flexGrow: "1", height: "100%"}}
                streetViewControl={false}
                mapTypeControl={false}
            >
                {markers.map((options, i) => (
                    <Marker key={i} {...options} />
                ))}
                {activeMarker && <NarcissisticMarker {...activeMarker}/>}
            </Map>
        </div>
    )
}
