import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice(
    {
        name: 'gpt',
        initialState: {
            showGptSearch: false,
            movieNames: null,
            movieResults: null,
            movieSearchText:null
        },
        reducers: {
            toggleGptSearchView: (state) => {
                state.showGptSearch = !state.showGptSearch
            },
            addGptMovieResult: (state, action) => {
                const { movieNames, movieResults,movieSearchText } = action.payload
                state.movieNames = movieNames,
                state.movieResults=movieResults,
                state.movieSearchText=movieSearchText
            }
        }
    }
)

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions

export default gptSlice.reducer