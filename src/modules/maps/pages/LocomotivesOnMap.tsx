import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { List, Row, Col } from 'antd';
import { TAppState } from 'core/store';
import { MarkersOnMap } from 'core/components/GoogleMap/MarkersOnMap';

const selectLocomotives = (state: TAppState) => state.locomotive.locomotives

const selectedStyle = {
    backgroundColor: "#1677ff",
    color: "#fff"
};

export const LocomotivesOnMap: React.FC = () => {
    const locomotives = useSelector(selectLocomotives);
    const [selected, setSelected] = useState<string>();

    const markers = useMemo<google.maps.MarkerOptions[]>(() => {
        return locomotives.map((item => ({
            position: {
                lat: item.coords.latitude,
                lng: item.coords.longitude,
            },
            icon:  selected === item.id ? {url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'} : undefined
        })));
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
                <MarkersOnMap
                    style={{display: "flex", height: "550px"}}
                    markers={markers}
                />
            </Col>

        </Row>
    )
};
