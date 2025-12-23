import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null
    },
    reducers:{
        addNowPlayingmovies:(state , action)=>{
        state.nowPlayingMovies=action.payloads;
    },
    },

});

export const {addNowPlayingmovies}= moviesSlice.action
export default moviesSlice.reducer;