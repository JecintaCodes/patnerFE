import {
  persistReducer,
  PAUSE,
  PURGE,
  REGISTER,
  REHYDRATE,
  FLUSH,
  PERSIST,
} from "redux-persist";
import rootReducer from "./globalState";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PURGE, FLUSH, PAUSE, PERSIST, REHYDRATE, REGISTER],
      },
    }),
});
