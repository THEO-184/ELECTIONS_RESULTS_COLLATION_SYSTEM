import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setConstituencyType,
	setRegionType,
} from "../../redux/slices/results.slice";
import ElectionBox from "./components/ElectionBox";

const RightForm = (props) => {
	const {
		electionInfo,
		electionTitle,
		regionOrConstituency,
		poolingStationTitle,
		poolingStationInfo,
	} = props;
	const { constituencyType, regionType } = useSelector(
		(state) => state.results
	);
	const dispatch = useDispatch();

	const handleSelectConstituencyType = (id) => {
		if (regionOrConstituency === 0) {
			dispatch(setConstituencyType(id));
		} else {
			dispatch(setRegionType(id));
		}
	};

	const checkForListIds = () => {
		return regionOrConstituency === 0 ? constituencyType : regionType;
	};

	return (
		<div className="bg-white">
			<ElectionBox
				list1={electionInfo}
				list1Ids={checkForListIds()}
				list1Title={electionTitle}
				handleFirstList={handleSelectConstituencyType}
				list2={poolingStationInfo}
				list2Title={poolingStationTitle}
			/>
		</div>
	);
};

export default RightForm;
