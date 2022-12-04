import React from 'react';
import { Button, Table, Col, Row, Modal } from 'antd';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { generatePath, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { TAppState } from 'core/store';
import { SpaceVertical } from 'core/components/SpaceVertical';
import { ICoordinate, ILocomotive } from '../models';
import { routeMap } from '../routeMap';
import { deleteLocomotive } from '../slices';

const { confirm } = Modal;

const selectLocomotives = (state: TAppState) => state.locomotive.locomotives

export const LocomotivesList: React.FC = () => {
    const navigate = useNavigate();
    const locomotives = useSelector(selectLocomotives);
    const dispatch = useDispatch();

    return (
        <SpaceVertical>
            <Row>
                <Col span={24}>
                    <Button
                        onClick={() => navigate(routeMap.create)}
                        data-testid="createThemeButton"
                    >
                        Создать
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table
                        rowKey="id"
                        dataSource={locomotives}
                    >
                        <Table.Column
                            key="name"
                            title="Наименование"
                            dataIndex="name"
                            render={renderName}
                        />
                        <Table.Column
                            key="series"
                            title="Серия"
                            dataIndex="series"
                        />
                        <Table.Column
                            key="createdAt"
                            title="Количество секци"
                            dataIndex="sectionsCount"
                        />
                        <Table.Column
                            key="coords"
                            title="Координаты"
                            dataIndex="coords"
                            render={renderCoord}
                        />
                        <Table.Column<ILocomotive>
                            key="deleteAction"
                            width={50}
                            render={(record) => (
                                <DeleteOutlined className="trigger" onClick={() => {
                                    showDeleteConfirm(() => {
                                        dispatch(deleteLocomotive(record.id))
                                    })
                                }}/>
                            )}
                        />
                    </Table>
                </Col>
            </Row>
        </SpaceVertical>
    )
}

const renderCoord = (coord: ICoordinate) => {
    return (
        <span>
            {coord.latitude} / {coord.longitude}
        </span>
    )
};

const renderName = (_value: string, record: ILocomotive) => (
    <Link
        to={generatePath(routeMap.detail, {id: record.id})}
        data-testid="themeName"
    >
        {record.name}
    </Link>
);

const showDeleteConfirm = (onConfirm: Function) => {
    confirm({
        title: "Вы уверены что хотите удалить запись?",
        icon: <ExclamationCircleOutlined />,
        okText: "Да",
        okType: 'danger',
        cancelText: "Нет",
        onOk: () => onConfirm(),
    });
};