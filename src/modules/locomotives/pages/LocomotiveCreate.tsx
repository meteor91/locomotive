import React from 'react';
import { LocomotiveForm } from '../components/LocomotiveForm';
import { useNavigate } from 'react-router-dom';
import { ILocomotive } from '../models';
import { useDispatch } from 'react-redux';
import { addLocomotive } from '../slices';
import { routeMap } from '../routeMap';

export const LocomotiveCreate: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddLocomotive = (form: ILocomotive) => {
        dispatch(addLocomotive(form));
        navigate(routeMap.list);
    }

    return (
        <LocomotiveForm
            onSubmit={handleAddLocomotive}
            isLoading={false}
            onCancel={() => navigate('/locomotives')}
        />
    )
}