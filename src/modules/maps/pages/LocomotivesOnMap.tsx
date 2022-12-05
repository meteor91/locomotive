import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { List, Row, Col } from 'antd';
import { TAppState } from 'core/store';
import { MapWithMarkers } from 'core/components/GoogleMap/MapWithMarkers';

const selectLocomotives = (state: TAppState) => state.locomotive.locomotives

const selectedStyle = {
    backgroundColor: "#1677ff",
    color: "#fff"
};

export const LocomotivesOnMap: React.FC = () => {
    const locomotives = useSelector(selectLocomotives);
    const [selected, setSelected] = useState<string>();

    const markers = useMemo<google.maps.MarkerOptions[]>(() => {
        return locomotives.filter((item) => selected !== item.id).map((item => ({
            position: {
                lat: item.coords.latitude,
                lng: item.coords.longitude,
            },
            zIndex: 1,
        })));
    }, [locomotives, selected]);

    const activeMarker =  useMemo<google.maps.MarkerOptions | undefined>(() => {
        const selectedLocomotive = locomotives.find((item) => selected === item.id);
        if (selectedLocomotive) {
            return {
                position: {
                    lat: selectedLocomotive.coords.latitude,
                    lng: selectedLocomotive.coords.longitude,
                },
                zIndex: 10,
                icon: {
                    url: process.env.PUBLIC_URL + '/blue-marker.png',
                }
            }
        }
    }, [locomotives, selected])


    return (
        <Row gutter={6}>
            <Col span={6} >
                <List
                    header={<div><b>Список локомотивов</b></div>}
                    bordered
                    dataSource={locomotives}
                    renderItem={(item) => (
                        <List.Item
                            onClick={() => setSelected(item.id)}
                            style={item.id===selected ? selectedStyle : {}}
                        >
                            {item.name}
                        </List.Item>
                    )}
                />
            </Col>

            <Col span={18}>
                <MapWithMarkers
                    style={{display: "flex", height: "550px"}}
                    markers={markers}
                    activeMarker={activeMarker}
                />
            </Col>

        </Row>
    )
};
