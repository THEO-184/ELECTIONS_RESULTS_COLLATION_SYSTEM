import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import resultsReducer from "./slices/results.slice";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
	user: authReducer,
	results: resultsReducer,
});

const persistConfig = {
	key: "root",
	storage,
};
const persistedUserReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedUserReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export default store;
