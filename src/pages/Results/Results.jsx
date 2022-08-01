import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Wrapper from "../../components/Wrapper";
import {
	collationInfo,
	constituencyInfo,
	electionInfo,
} from "../../utils/formUtils";
import LeftForm from "./LeftForm";
import RightForm from "./RightForm";

const Results = () => {
	const collationType = useSelector((state) => state.results.collationType);
	const [resultsType, setResultsType] = useState([]);

	useEffect(() => {
		switch (collationType) {
			case 0:
				setResultsType(constituencyInfo);
				break;

			default:
				setResultsType(constituencyInfo);
				break;
		}
	}, [collationType]);

	return (
		<Wrapper>
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-2/3 h-5/6 m-auto grid bg-gradient-to-b from-blue-400 to-violet-400 grid-cols-2 gap-3 rounded-lg shadow-md shadow-neutral-500">
					<LeftForm
						electionInfo={electionInfo}
						electionTitle={"Election Type"}
						collationTitle={"Collation Type"}
						collationInfo={collationInfo}
					/>
					<RightForm
						electionInfo={resultsType}
						electionTitle={"Constituency Results"}
					/>
				</div>
			</div>
		</Wrapper>
	);
};

export default Results;
