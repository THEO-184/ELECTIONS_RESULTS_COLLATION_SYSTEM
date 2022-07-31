import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {
		id: "",
	},
};

const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.user = action.payload;
		},
		logOut: (state, action) => {
			state.user.id = "";
		},
	},
});

export const { addUser, logOut } = auth.actions;

export default auth.reducer;
