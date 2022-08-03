import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	collationType: "",
	electionType: "",
	constituencyType: "nr",
	constituencyName: "",
	regionType: "",
	poolingStationType: "",
	constituencyRecords: [],
	regionalRecords: [],
	nationalRecords: [],
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
		setPoolingStationType: (state, action) => {
			state.poolingStationType = action.payload;
		},
		saveConstituencyResults: (state, action) => {
			state.constituencyRecords = action.payload;
		},
		saveRegionalResults: (state, action) => {
			state.regionalRecords = action.payload;
		},
		saveNationalResults: (state, action) => {
			state.nationalRecords = action.payload;
		},
	},
});

export const {
	setCollationType,
	setElectionType,
	setConstituencyType,
	setRegionType,
	setPoolingStationType,
	saveConstituencyResults,
	saveRegionalResults,
	saveNationalResults,
} = results.actions;

export default results.reducer;
