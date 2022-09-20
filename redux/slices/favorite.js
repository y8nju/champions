import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            console.log("favorite.add");
            return [...state, action.payload];
        },
        removeFavorite: (state, action) => {
            console.log("favorite.remove")
            return state.filter(data => data !== action.payload);
        }
    }
});
export const {addFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice;