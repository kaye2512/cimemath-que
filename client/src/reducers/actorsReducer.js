import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getActor, getActors} from "../utils/api/actorsController";


export const fetchAllActors = createAsyncThunk(
    '/actors/fetchAllActors',
    ()=>{
        return getActors()
    }
)

export const fetchActor = createAsyncThunk(
    '/actors/fetchActor',
    ()=>{
        return getActor()
    }
)

const initialState = {
    allActors: [],
    isLoading: false
}

const actorsSlice = createSlice({
    name: 'actors',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllActors.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchAllActors.fulfilled, (state, action)=>{
            state.allActors = action.payload;
            state.isLoading = false;
        })

        builder.addCase(fetchAllActors.rejected, (state)=>{
            state.isLoading = false;
        })
    }

})

export default actorsSlice.reducer