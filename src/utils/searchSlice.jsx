import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name: "search",
   initialState: [],
   reducers: {
      addSearchItems: (state, action) => {
         return action.payload;
      },
      clearSearchItems: (state, action) => {
         return [];
      }
   }

});

export default searchSlice.reducer;
export const { addSearchItems, clearSearchItems } = searchSlice.actions;