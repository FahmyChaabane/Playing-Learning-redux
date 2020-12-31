const { createSlice } = require("@reduxjs/toolkit");

const bugsInitialState = [];
const slice = createSlice({
  name: "bugs",
  initialState: bugsInitialState,
  reducers: {
    ADD_BUG: (bugs, action) => {
      bugs.push(action.payload);
      return bugs;
    },
    REMOVE_BUG: (bugs, action) => {
      console.log(action.payload.id);
      return bugs.filter((bug) => bug.id !== action.payload.id);
    },
    EDIT_BUG: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index] = action.payload;
      return bugs;
    },
  },
});

export const { ADD_BUG, REMOVE_BUG, EDIT_BUG } = slice.actions;
export default slice.reducer;
