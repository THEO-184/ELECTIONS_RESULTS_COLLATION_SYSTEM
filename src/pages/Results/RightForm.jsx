import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConstituencyType } from "../../redux/slices/results.slice";
import ElectionBox from "./components/ElectionBox";

const RightForm = (props) => {
	const { constituencyType } = useSelector((state) => state.results);
	const dispatch = useDispatch();
	const { electionInfo, electionTitle } = props;
	const handleSelectConstituencyType = (id) => {
		dispatch(setConstituencyType(id));
	};

	return (
		<div className="bg-white">
			<ElectionBox
				list1={electionInfo}
				list1Ids={constituencyType}
				list1Title={electionTitle}
				handleSelectElectionType={handleSelectConstituencyType}
			/>
		</div>
	);
};

export default RightForm;
