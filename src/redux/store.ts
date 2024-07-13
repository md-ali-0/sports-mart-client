import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cart/cartSlice";

import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "cart",
    storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        cart: persistedReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
