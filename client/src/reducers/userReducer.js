import {createSlice} from "@reduxjs/toolkit";

const userInitialSate={
    firstname:"",
    lastname:"",
    username:"",
    token:"",
    user:"",
    isLogged:false
}
export const userSlice = createSlice({
    name: 'user',
    initialState:userInitialSate,
    reducers:{

        loginUser : (state, action)=>{
            state.user = action.payload;
            state.isLogged = true;
        },
        logout:(state)=>{
            state.user = "";
            state.isLogged = false;
            localStorage.removeItem("token");
        }
    }

});

export const {loginUser, logout} = userSlice.actions;
export default userSlice.reducer;