import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	collationType: 0,
	electionType: 0,
	constituencyType: 0,
	constituencyName: "",
	regionType: 0,
	poolingStationType: 0,
	constituencyRecords: [
		{
			name: "A",
			sum: 0,
			id: 0,
		},
		{
			name: "B",
			sum: 0,
			id: 1,
		},
		{
			name: "C",
			sum: 0,
			id: 2,
		},
		{
			name: "D",
			sum: 0,
			id: 3,
		},
		{
			name: "E",
			sum: 0,
			id: 4,
		},
		{
			name: "F",
			sum: 0,
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
		setPoolingStationType: (state, action) => {
			state.poolingStationType = action.payload;
		},
		saveConstituencyResults: (state, action) => {
			state.constituencyRecords = action.payload.map((candidate) => {
				let newRecord = {};
				state.constituencyRecords.forEach((record) => {
					if (candidate.id === record.id) {
						newRecord = { ...record, sum: candidate.sum, id: candidate.id };
					}
				});
				return newRecord;
			});
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
} = results.actions;

export default results.reducer;
