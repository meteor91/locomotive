import React from 'react';
import { useDeepCompareEffectForMaps } from 'core/hooks';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { gMapApiKey } from 'core/config';

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children: React.ReactNode;
}

const GoogleMapRunner: React.FC<MapProps> = ({
     onClick,
     onIdle,
     children,
     style,
     center,
     ...options
 }) => {
    const ref = React.useRef<HTMLDivElement>(null);

    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, center ? {center} : {}));
            // setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    useDeepCompareEffectForMaps(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    React.useEffect(() => {
        if (map) {
            console.log('click idle effect');
            ["click", "idle"].forEach((eventName) =>
                google.maps.event.clearListeners(map, eventName)
            );

            if (onClick) {
                map.addListener("click", onClick);
            }

            if (onIdle) {
                map.addListener("idle", () => onIdle(map));
            }
        }
    }, [map, onClick, onIdle]);

    return (
        <>
            <div ref={ref} style={style}/>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    // @ts-ignore
                    return React.cloneElement(child, {map});
                }
            })}
        </>
    );
};

export const Map: React.FC<MapProps> = (props) => {
    const {children, ...options} = props;
    return (
        <Wrapper apiKey={gMapApiKey} render={render}>
            <GoogleMapRunner
                {...options}
            >
                {children}
            </GoogleMapRunner>
        </Wrapper>
    )
}

const render = (status: Status) => {
    switch (status) {
        case Status.LOADING:
            return <h1>loading</h1>;
        case Status.FAILURE:
            return <h1>failure</h1>;
        case Status.SUCCESS:
            return <h1>work</h1>;
    }
};
