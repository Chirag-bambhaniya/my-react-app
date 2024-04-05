import { createSlice } from "@reduxjs/toolkit";
// import { propTypes } from "react-bootstrap/esm/Image";

export const StringSlice = createSlice({
    name: 'user',
    initialState: {
        value: 'Chirag'
    },

    reducers: {
        //    saveUser: (state, action) =>  state.value =action.payload
        saveUser: (state, action) => {
            console.log('state' + state.value)
            console.log('action' +  action.payload)
            state.value = action.payload;
            console.log('state' + state.value)
        }
    }
})

export const { saveUser } = StringSlice.actions

export default StringSlice.reducer