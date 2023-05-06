import { createSlice, configureStore } from '@reduxjs/toolkit'

const StepCounterSlice = createSlice({
  name: 'StepCount',
  initialState: { 
    Steps: 0
   },
  reducers: {
    AddStep: state => {
      state.Steps += 1;
    },
    ResetStep: state => {
      state.Steps = 0;
    }
  }
})

export const { AddStep, ResetStep } = StepCounterSlice.actions

const StepCounter = configureStore({
  reducer: StepCounterSlice.reducer
});

export default StepCounter;
