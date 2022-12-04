import React, {CSSProperties} from 'react';
import { Map } from './Map';
import { defaultGoogleMapZoom, mapDefaultPositionCoords } from 'core/consts';
import { Marker } from './Marker';

interface IProps {
    defaultZoom?: number;
    defaultCenter?: google.maps.LatLngLiteral | null;
    markers: google.maps.MarkerOptions[];
    style?: CSSProperties | undefined;
}

export const MarkersOnMap: React.FC<IProps> = (props) => {
    const {
        defaultZoom = defaultGoogleMapZoom,
        defaultCenter = mapDefaultPositionCoords,
        markers,
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
            </Map>
        </div>
    )
}
