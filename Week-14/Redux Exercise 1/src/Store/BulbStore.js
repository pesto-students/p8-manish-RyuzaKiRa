import { createSlice, configureStore } from '@reduxjs/toolkit'

const bulbSlice = createSlice({
  name: 'bulb',
  initialState: { checked: true, text: 'Light is On!' },
  reducers: {
    toggle: state => {
      state.checked = !state.checked;
      state.text = !state.checked ? 'Light is On!' : 'Light is Off!';
    }
  }
})

export const { toggle } = bulbSlice.actions

const BulbStore = configureStore({
  reducer: bulbSlice.reducer
});

export default BulbStore;
