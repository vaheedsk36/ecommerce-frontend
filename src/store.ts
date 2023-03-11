import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage: sessionStorage,
    blacklist: []
};

const rootReducer = combineReducers({

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        })
});

export default store;