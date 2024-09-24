import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter1',
    initialState: {
        count: 0,
    },
    reducers: {
        incrementCounter(state, action) {
            state.count = state.count + 1;
        },
        decrementCounter(state, action) {
            state.count = state.count - 1;
        }
    }
});

export const incrementCounter = counterSlice.actions.incrementCounter;
export const decrementCounter = counterSlice.actions.decrementCounter;

export const counterReducer = counterSlice.reducer;
