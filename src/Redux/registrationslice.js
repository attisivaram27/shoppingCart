import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE ={
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    gender:"",
    password:""
};

const registrationslice =createSlice({
    name: 'login',
    initialState: INITIAL_STATE,
    reducers: {
        updateFirstName: (state, action) => {
            state.firstName =action.payload

        },
        updateLastName: (state, action) => {
            state.lastName =action.payload;

        },
        updatePhone: (state, action) => {
            state.phone=action.payload

        },
        updateEmail: (state, action) => {
            state.email =action.payload

        },
        updateGender: (state, action) => {
            state.gender =action.payload

        },
        updatePassword: (state, action) => {
            state.password=action.payload

        }
    }
});

export const { updateFirstName, updateLastName, updatePhone, updateEmail, updateGender, updatePassword } = registrationslice.actions;
export default registrationslice.reducer;