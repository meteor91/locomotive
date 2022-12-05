import { configureStore } from '@reduxjs/toolkit';
import { locomotivesSlice } from 'modules/locomotives/slices';

export const store = configureStore({
    reducer: {
        locomotive: locomotivesSlice.reducer,
    },
});

export type TAppState = ReturnType<typeof store.getState>;
