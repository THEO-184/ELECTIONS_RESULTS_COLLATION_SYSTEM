import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	collationType: 0,
	electionType: 0,
	constituencyType: 0,
	constituencyName: "",
	regionType: 0,
	constituencyRecords: [
		{
			A: 0,
			id: 0,
		},
		{
			B: 0,
			id: 1,
		},
		{
			C: 0,
			id: 2,
		},
		{
			D: 0,
			id: 3,
		},
		{
			E: 0,
			id: 4,
		},
		{
			F: 0,
			id: 5,
		},
	],
};

const results = createSlice({
	name: "results",
	initialState,
	reducers: {
		setCollationType: (state, action) => {
			state.collationType = action.payload;
		},
		setElectionType: (state, action) => {
			state.electionType = action.payload;
		},
		setConstituencyType: (state, action) => {
			state.constituencyType = action.payload;
		},
		setRegionType: (state, action) => {
			state.regionType = action.payload;
		},
	},
});

export const {
	setCollationType,
	setElectionType,
	setConstituencyType,
	setRegionType,
} = results.actions;

export default results.reducer;
