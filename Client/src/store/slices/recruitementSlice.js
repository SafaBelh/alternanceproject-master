import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkDropSubList: false,
  dropMenu: false,
};

export const recruitementSlice = createSlice({
  name: "recruitement",
  initialState,
  reducers: {
    handleDropSubList: (state, action) => {
      state.checkDropSubList = action.payload.checkDropSubList;
    },
    handleDropDownMenu: (state, action) => {
      state.dropMenu = !state.dropMenu;
      console.log(state.dropMenu)
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleDropSubList, handleDropDownMenu } =
  recruitementSlice.actions;

export default recruitementSlice.reducer;
