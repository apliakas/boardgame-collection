import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    boardgames: []
  },
  reducers: {
    addBoardgame: (state, action) => {
      state.boardgames = [...state.boardgames, action.payload]
    },
    deleteBoardgame: (state, action) => {
      state.boardgames = state.boardgames.filter((boardgame) => boardgame !== action.payload)
    },
  },
});

export const { addBoardgame, deleteBoardgame} = listSlice.actions;

export default listSlice.reducer;