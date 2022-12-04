import React from 'react';
import { Map } from './Map';
import { defaultGoogleMapZoom, mapDefaultPositionCoords } from 'core/consts';
import { NarcissisticMarker } from './NarcissisticMarker';

interface IProps {
    onClick: (e: google.maps.MapMouseEvent) => void;
    defaultZoom?: number;
    defaultCenter?: google.maps.LatLngLiteral | null;
    markerPosition: google.maps.LatLngLiteral | null;
}

export const SelectPositionOnMap: React.FC<IProps> = (props) => {
    const {
        onClick,
        defaultZoom = defaultGoogleMapZoom,
        defaultCenter = mapDefaultPositionCoords,
        markerPosition,
    } = props;

    return (
        <div style={{display: "flex", height: "300px"}}>
            <Map
                center={markerPosition ? markerPosition : defaultCenter}
                onClick={onClick}
                zoom={defaultZoom}
                style={{flexGrow: "1", height: "100%"}}
                streetViewControl={false}
                mapTypeControl={false}
            >
                {markerPosition && (
                    <NarcissisticMarker position={markerPosition} />
                )}
            </Map>
        </div>
    )
}
