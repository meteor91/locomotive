import React, {CSSProperties} from 'react';
import { Map } from './Map';
import { defaultGoogleMapZoom } from 'core/consts';
import { Marker } from './Marker';

interface IProps {
    defaultZoom?: number;
    marker: google.maps.MarkerOptions;
    style?: CSSProperties | undefined;
}

export const MapWithSingleMarker: React.FC<IProps> = (props) => {
    const {
        defaultZoom = defaultGoogleMapZoom,
        marker,
        style={display: "flex", height: "300px"}
    } = props;

    return (
        <div style={style}>
            <Map
                center={marker.position}
                zoom={defaultZoom}
                style={{flexGrow: "1", height: "100%"}}
                streetViewControl={false}
                mapTypeControl={false}
            >
                <Marker {...marker} />
            </Map>
        </div>
    )
}
