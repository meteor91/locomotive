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
                latitude: 49.530097465262685,
                longitude: 64.5418701171875
            }
        },
        {
            id: uniqueId('loco_'),
            name: 'another name',
            series: 'cx5',
            sectionsCount: 13,
            coords: {
                latitude: 50.92276513116112,
                longitude: 71.90474290712768
            }
        },
        {
            name: 'loc1',
            series: 's5',
            sectionsCount: 4,
            coords: {
                latitude: 51.647545237193356,
                longitude: 71.56289922287111
            },
            id: uniqueId('loco_'),
        },
        {
            name: 'loco2',
            series: 's4',
            sectionsCount: 4,
            coords: {
                latitude: 51.05748770662685,
                longitude: 70.91470586349611
            },
            id: uniqueId('loco_'),
        },
        {
            name: 'loco5',
            series: 's4',
            sectionsCount: 4,
            coords: {
                latitude: 50.946870246535994,
                longitude: 71.67276250412111
            },
            id: uniqueId('loco_'),
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
            if (id >= 0) {
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
