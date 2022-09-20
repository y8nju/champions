import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favorite";

const store = configureStore({
    reducer: {favorite: favoriteSlice.reducer}
});

export default store;