import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setCollationType,
	setElectionType,
} from "../../redux/slices/results.slice";

import ElectionBox from "./components/ElectionBox";
const LeftForm = (props) => {
	const { electionTitle, electionInfo, collationTitle, collationInfo } = props;
	const dispatch = useDispatch();
	const { collationType, electionType } = useSelector((state) => state.results);

	const handleSelectElectionType = (id) => {
		dispatch(setElectionType(id.toLowerCase()));
	};

	const handleSelectCollationType = (id) => {
		dispatch(setCollationType(id.toLowerCase()));
	};

	return (
		<div className="bg-white ">
			<ElectionBox
				list1={electionInfo}
				list1Title={electionTitle}
				list2Title={collationTitle}
				list2={collationInfo}
				handleFirstList={handleSelectElectionType}
				handleSecondList={handleSelectCollationType}
				list2Ids={collationType}
				list1Ids={electionType}
			/>
		</div>
	);
};

export default LeftForm;
