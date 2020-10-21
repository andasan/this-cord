import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app.reducer';
import userReducer from './user.reducer';

export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});
