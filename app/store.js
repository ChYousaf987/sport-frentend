import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/features/users/userSlice";
import contactReducer from "../src/features/contact/contactSlice";
import roleReducer from "../src/features/role/roleSlice";
import eventReducer from "../src/features/events/eventSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    contact: contactReducer,
    role: roleReducer,
    events: eventReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PURGE",
        ],
      },
    }),
});

export const persistor = persistStore(store);
