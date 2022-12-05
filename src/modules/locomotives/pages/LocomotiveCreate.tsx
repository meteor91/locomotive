import React from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uniqueId } from 'lodash';
import { LocomotiveForm } from '../components/LocomotiveForm';
import { ILocomotive } from '../models';
import { addLocomotive } from '../slices';
import { routeMap } from '../routeMap';

export const LocomotiveCreate: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddLocomotive = (form: ILocomotive) => {
        const newLocomotive = {
            ...form,
            id: uniqueId('loco')
        };
        dispatch(addLocomotive(newLocomotive));
        navigate(generatePath(routeMap.detail, {id: newLocomotive.id}));
    }

    return (
        <LocomotiveForm
            onSubmit={handleAddLocomotive}
            isLoading={false}
            onCancel={() => navigate('/locomotives')}
        />
    )
}