import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Wrapper from "../../components/Wrapper";
import {
	collationInfo,
	constituencyInfo,
	electionInfo,
	poolingStations,
	regionalInfo,
} from "../../utils/formUtils";
import LeftForm from "./LeftForm";
import RightForm from "./RightForm";

const Results = () => {
	const collationType = useSelector((state) => state.results.collationType);
	const [resultsType, setResultsType] = useState([]);
	const [title, setTitle] = useState("");
	const [regionOrConstituency, setRegionOrConstituency] = useState(0);

	useEffect(() => {
		switch (collationType) {
			case "constituency":
				setResultsType(constituencyInfo);
				setTitle("Constituency Results");
				setRegionOrConstituency(0);
				break;

			default:
				setResultsType(regionalInfo);
				setTitle("Regional Results");
				setRegionOrConstituency(1);

				break;
		}
	}, [collationType]);

	return (
		<Wrapper>
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-2/3 h-auto sm:h-5/6 m-auto sm:grid  sm:grid-cols-2 sm:gap-3 rounded-lg shadow-md shadow-neutral-500">
					<LeftForm
						electionInfo={electionInfo}
						electionTitle={"Election Type"}
						collationTitle={"Collation Type"}
						collationInfo={collationInfo}
					/>
					<RightForm
						electionInfo={resultsType}
						electionTitle={title}
						regionOrConstituency={regionOrConstituency}
						poolingStationTitle={"Pooling Stations"}
						poolingStationInfo={poolingStations}
					/>
				</div>
			</div>
		</Wrapper>
	);
};

export default Results;
