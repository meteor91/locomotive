import React from 'react';

/**
 * Маркер двигает карту на себя при перемещении,
 * если маркер находится за пределами камеры карты.
 */
export const NarcissisticMarker: React.FC<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = React.useState<google.maps.Marker>();

    React.useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    React.useEffect(() => {
        if (marker) {
            marker.setOptions(options);

            if (options.map) {
                //@ts-ignore
                const bounds = options.map.getBounds();
                if (!bounds?.contains(options.position)) {
                    //@ts-ignore
                    options.map.panTo(options.position)
                }
            }
        }
    }, [marker, options]);

    return null;
};