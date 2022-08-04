import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	collationType: "",
	electionType: "",
	constituencyType: "nr",
	constituencyName: "",
	regionType: "",
	poolingStationType: "",
	constituencyRecords: {
		Results: [],
		constituencyType: "",
		poolingStationType: "",
	},
	regionalRecords: {
		Results: [],
		regionType: "",
		constituencyType: "",
	},
	nationalRecords: {
		Results: [],
		regionType: "",
	},
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
			state.constituencyRecords.constituencyType = action.payload;
			state.regionalRecords.constituencyType = action.payload;
		},
		setRegionType: (state, action) => {
			state.regionType = action.payload;
			state.regionalRecords.regionType = action.payload;
		},
		setPoolingStationType: (state, action) => {
			state.poolingStationType = action.payload;
			state.constituencyRecords.poolingStationType = action.payload;
		},
		saveConstituencyResults: (state, action) => {
			state.constituencyRecords.Results = action.payload;
		},
		saveRegionalResults: (state, action) => {
			state.regionalRecords.Results = action.payload;
		},
		saveNationalResults: (state, action) => {
			state.nationalRecords.Results = action.payload;
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
