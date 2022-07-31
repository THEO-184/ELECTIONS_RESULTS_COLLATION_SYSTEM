import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	collationType: 1,
	electionType: 1,
	constituencyRecords: [
		{
			A: 0,
		},
		{
			B: 0,
		},
		{
			C: 0,
		},
		{
			D: 0,
		},
		{
			E: 0,
		},
		{
			F: 0,
		},
	],
};

const results = createSlice({
	name: "results",
	initialState,
	reducers: {},
});

export const {} = results.actions;

export default results.reducer;
