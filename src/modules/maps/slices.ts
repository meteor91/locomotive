import {createSlice} from '@reduxjs/toolkit'

interface IState {
}

const initialState: IState = {
}

export const mapsSlice = createSlice({
    name: 'maps',
    initialState,
    reducers: {
        clearState: state => {
            state = {};
        }
    }
});

export const {clearState} = mapsSlice.actions;
