import { configureStore } from '@reduxjs/toolkit';
import animationReducer from './feature/animationSlice';
import teamReducer from './feature/teamSlice';

const store = configureStore({
  reducer: {
    animation: animationReducer,
    team: teamReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;