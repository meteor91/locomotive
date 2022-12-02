import {configureStore} from '@reduxjs/toolkit';
import {locomotivesSlice} from 'modules/locomotives/slices';
import {mapsSlice} from 'modules/maps/slices';

export const store = configureStore({
    reducer: {
        locomotive: locomotivesSlice.reducer,
        map: mapsSlice.reducer,
    },
});

export type TAppState = ReturnType<typeof store.getState>;
