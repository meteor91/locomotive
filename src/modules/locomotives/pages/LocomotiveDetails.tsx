import React from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { Descriptions, Row, Col, Space, Button } from 'antd';
import { useSelector } from 'react-redux';
import { TAppState } from 'core/store';
import { ErrorResult } from 'core/components/ErrorResult';
import { MarkersOnMap } from 'core/components/GoogleMap/MarkersOnMap';
import { SpaceVertical } from 'core/components/SpaceVertical';
import { routeMap } from '../routeMap';

export const LocomotiveDetails: React.FC = () => {
    const params = useParams<'id'>();
    const navigate = useNavigate();
    // TODO проверить rerender
    const locomotive = useSelector((state: TAppState) => state.locomotive.locomotives.find((item) => item.id === params.id!))

    const handleEdit = () => {
        navigate(generatePath(routeMap.edit, {id: params.id!}));
    };

    if (!locomotive) {
        return <ErrorResult />;
    } else {
        const marker: google.maps.MarkerOptions = {
            position: {
                lat: locomotive.coords.latitude,
                lng: locomotive.coords.longitude,
            }
        }
        return (
            <SpaceVertical>
                <Row>
                    <Col span={24}>
                        <Descriptions title={locomotive.name} column={1}>
                            <Descriptions.Item label="Серия">{locomotive.series}</Descriptions.Item>
                            <Descriptions.Item label="Количество секции">{locomotive.sectionsCount}</Descriptions.Item>
                            <Descriptions.Item label="Координаты">{locomotive.coords.latitude} / {locomotive.coords.longitude}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        {/*@ts-ignore TODO разобраться с типом*/}
                        <MarkersOnMap markers={[marker]} defaultCenter={marker.position}/>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <Space>
                            <Button onClick={handleEdit}>Редактировать</Button>
                        </Space>
                    </Col>
                </Row>
            </SpaceVertical>
        )
    }
}