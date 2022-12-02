import { createSlice } from '@reduxjs/toolkit'
import { uniqueId, remove, findIndex } from 'lodash';
import { ILocomotive } from './models';

interface IState {
    locomotives: ILocomotive[];
}

const initialState: IState = {
    locomotives: [
        {
            id: uniqueId('loco_'),
            name: 'some name',
            series: 's7',
            sectionsCount: 23,
            coords: {
                latitude: '12',
                longitude: '15',
            }
        },
        {
            id: uniqueId('loco_'),
            name: 'another name',
            series: 'cx5',
            sectionsCount: 13,
            coords: {
                latitude: '16',
                longitude: '11',
            }
        }
    ]
}

export const locomotivesSlice = createSlice({
    name: 'locomotives',
    initialState,
    reducers: {
        addLocomotive: (state, action) => {
            const locomotive = {...action.payload};
            locomotive.id = uniqueId('loco')
            state.locomotives.push(locomotive);
        },
        editLocomotive: (state, action) => {
            const id = findIndex(state.locomotives, (item => item.id === action.payload.id));
            if (id>=0) {
                state.locomotives[id] = action.payload;
            }
        },
        deleteLocomotive: (state, action) => {
            // TODO remove возвращает массив из удаленных элементов, найти более изящное решение
            state.locomotives = remove(state.locomotives, ({id}) => id !== action.payload);
        }
    }
});

export const {addLocomotive, deleteLocomotive, editLocomotive} = locomotivesSlice.actions;
