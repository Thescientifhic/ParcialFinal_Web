import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Poem } from '../../../types/poems';

export interface PoemState {
    poem: Array<string>;
}

const initialState: PoemState = {
    poem: [],
}

export const PoemSlice = createSlice({
    name: 'poem',
    initialState,
    reducers: {
        addPoem: (state, action: PayloadAction<Poem>) => {
            const payload = action.payload;
    
            if (Array.isArray(payload)) state.data.push(...payload);
            else state.data.push(payload);
        },
    },
    })

export const { addPoem } = PoemSlice.actions
export default PoemSlice.reducer