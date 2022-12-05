import React, {useCallback, useState} from 'react';
import { Button, Form, Input, Space, InputNumber } from 'antd';
import { SelectPositionOnMap } from 'core/components/GoogleMap/SelectPositionOnMap';
import { getGoogleMapPosition } from 'core/utils';
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
    const [form] = Form.useForm();
    const [markerPosition, setMarkerPosition] = useState<google.maps.LatLngLiteral | null>(
        prefill ? getGoogleMapPosition(prefill) : null
    );

    const handleSelectPosition = useCallback((e: google.maps.MapMouseEvent) => {
        form.setFieldValue(["coords", "latitude"], e.latLng!.lat())
        form.setFieldValue(["coords", "longitude"], e.latLng!.lng())
        setMarkerPosition(e.latLng!.toJSON());
    }, [form, setMarkerPosition]);

    return (
        <Form
            form={form}
            name="locomotive_form"
            onFinish={onSubmit}
            autoComplete="off"
            initialValues={prefill}
            labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
            onValuesChange={(_values, formData) => {
                if (formData?.coords.latitude && formData?.coords.longitude) {
                    setMarkerPosition(getGoogleMapPosition(formData))
                }
            }}
        >
            <Form.Item
                label="Название"
                name="name"
                rules={rulesRequire}
                wrapperCol={{ span: 6 }}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Серия"
                name="series"
                rules={rulesRequire}
                wrapperCol={{ span: 6 }}
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
                    <InputNumber placeholder="Широта" style={{width: '100%'}} />
                </Form.Item>
                <Form.Item
                    name={["coords", "longitude"]}
                    rules={rulesRequire}
                    style={{display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'}}
                >
                    <InputNumber placeholder="Долгота" style={{width: '100%'}} />
                </Form.Item>
                <SelectPositionOnMap
                    onClick={handleSelectPosition}
                    markerPosition={markerPosition}
                />
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
