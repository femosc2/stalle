import { createSlice } from '@reduxjs/toolkit';

interface PixelState {
  color: string;
  user: string;
  position: { x: number; y: number };
}

const initialState: PixelState = {
  color: '#FFFFFF',
  user: 'anonymous',
  position: { x: 0, y: 0 },
};

const pixelSlice = createSlice({
  name: 'pixel',
  initialState,
  reducers: {
    setPixel: (state, action) => {
      const { color, user, position } = action.payload;
      state.color = color;
      state.user = user;
      state.position = position;
    },
  },
});

export const { setPixel } = pixelSlice.actions;

export default pixelSlice.reducer;
