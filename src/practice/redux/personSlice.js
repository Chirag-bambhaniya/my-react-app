import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: []
};

export const personSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        }
    }
});

export const { addUser } = personSlice.actions;

export default personSlice.reducer;