import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TAppState } from 'core/store';
import { LocomotiveForm } from '../components/LocomotiveForm';
import { ILocomotive } from '../models';
import { editLocomotive } from '../slices';

export const LocomotiveEdit: React.FC = () => {
    const params = useParams<'id'>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // TODO проверить rerender
    const locomotive = useSelector((state: TAppState) => state.locomotive.locomotives.find((item) => item.id === params.id!))

    const handleEditLocomotive = (form: ILocomotive) => {
        // debugger
        dispatch(editLocomotive({...form, id: params.id!}));
        navigate('/locomotives');
    }

    return (
        <LocomotiveForm
            onSubmit={handleEditLocomotive}
            prefill={locomotive}
            isLoading={false}
            onCancel={() => navigate('/locomotives')}
        />
    )
}