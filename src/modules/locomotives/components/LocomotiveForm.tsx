import React from 'react';
import { Button, Form, Input, Space, InputNumber } from 'antd';
import { ILocomotive } from '../models';

interface IProps {
    onSubmit: (theme: ILocomotive) => void;
    isLoading?: boolean;
    prefill?: ILocomotive;
    onCancel?: () => void;
}

const rulesRequire = [{required: true, message: "Обязательное поле"}];

export const LocomotiveForm: React.FC<IProps> = (props) => {

    const {onSubmit, onCancel, prefill, isLoading} = props;

    return (
        <Form
            name="theme_form"
            onFinish={onSubmit}
            autoComplete="off"
            initialValues={prefill}
            labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
        >
            <Form.Item
                label="Название"
                name="name"
                rules={rulesRequire}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Серия"
                name="series"
                rules={rulesRequire}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Количество секции"
                name="sectionsCount"
                rules={rulesRequire}
            >
                <InputNumber/>
            </Form.Item>

            <Form.Item
                label="Координаты"
                required
            >
                <Form.Item
                    name={["coords", "latitude"]}
                    rules={rulesRequire}
                    style={{display: 'inline-block', width: 'calc(50% - 8px)'}}
                >
                    <Input placeholder="Широта"/>
                </Form.Item>
                <Form.Item
                    name={["coords", "longitude"]}
                    rules={rulesRequire}
                    style={{display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'}}
                >
                    <Input placeholder="Долгота"/>
                </Form.Item>
            </Form.Item>

            <Form.Item label=" " colon={false}>
                <Space>
                    <Button data-testid="submit" type="primary" htmlType="submit" disabled={isLoading}>
                        Отправить
                    </Button>
                    {onCancel && (
                        <Button data-testid="cancel" onClick={onCancel}>
                            Отмена
                        </Button>
                    )}
                </Space>
            </Form.Item>
        </Form>
    );
}
