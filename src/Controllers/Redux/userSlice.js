import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: "User",
    initialState: [{}],
    reducers: {
        getUser: (state) => {
            state.push({name: "Justin Mach"})
            state.push({name: "John Smith"})
        }
    }
})

export default slice.reducer;

export const {getUser} = slice.actions;