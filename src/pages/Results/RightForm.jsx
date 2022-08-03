import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setConstituencyType,
	setRegionType,
	setPoolingStationType,
	saveConstituencyResults,
	saveNationalResults,
	saveRegionalResults,
} from "../../redux/slices/results.slice";
import { candidates } from "../../utils/formUtils";
import ElectionBox from "./components/ElectionBox";

const RightForm = (props) => {
	const {
		electionInfo,
		electionTitle,
		regionOrConstituency,
		poolingStationTitle,
		poolingStationInfo,
	} = props;
	const { constituencyType, regionType, poolingStationType, collationType } =
		useSelector((state) => state.results);

	const [A, setA] = useState({
		name: "A",
		id: 0,
		sum: null,
	});
	const [B, setB] = useState({
		name: "B",
		id: 1,
		sum: null,
	});
	const [C, setC] = useState({
		name: "C",
		id: 2,
		sum: null,
	});
	const [D, setD] = useState({
		name: "D",
		id: 3,
		sum: null,
	});
	const [E, setE] = useState({
		name: "E",
		id: 4,
		sum: null,
	});
	const [F, setF] = useState({
		name: "F",
		id: 5,
		sum: null,
	});
	const dispatch = useDispatch();

	const handleSelectConstituencyType = (id) => {
		if (regionOrConstituency === 0) {
			dispatch(setConstituencyType(id.toLowerCase()));
		} else {
			dispatch(setRegionType(id.toLowerCase()));
		}
	};

	const handleSelectPoolingStation = (id) => {
		dispatch(setPoolingStationType(id.toLowerCase()));
	};

	const checkForList1Ids = () => {
		return regionOrConstituency === 0 ? constituencyType : regionType;
	};

	const handleSetNumber = (e, id) => {
		switch (id) {
			case 0:
				setA((prev) => {
					return { ...prev, sum: e.target.value };
				});
				break;
			case 1:
				setB((prev) => {
					return { ...prev, sum: e.target.value };
				});
				break;
			case 2:
				setC((prev) => {
					return { ...prev, sum: e.target.value };
				});
				break;
			case 3:
				setD((prev) => {
					return { ...prev, sum: e.target.value };
				});
				break;
			case 4:
				setE((prev) => {
					return { ...prev, sum: e.target.value };
				});
				break;
			case 5:
				setF((prev) => {
					return { ...prev, sum: e.target.value };
				});
				break;
			default:
				break;
		}
	};

	const handleSubmitResults = (e) => {
		e.preventDefault();
		const overAllResults = [A, B, C, D, E, F];
		overAllResults.forEach((result) => {
			if (!result.sum) {
				alert("Please provide value for all fields");
			}
		});
		if (collationType === "regional") {
			dispatch(saveRegionalResults(overAllResults));
		} else if (collationType === "national") {
			dispatch(saveNationalResults(overAllResults));
		} else {
			dispatch(saveConstituencyResults(overAllResults));
		}
		console.log(overAllResults, collationType);
	};

	return (
		<div className="bg-white">
			<ElectionBox
				list1={electionInfo}
				list1Ids={checkForList1Ids()}
				list1Title={electionTitle}
				handleFirstList={handleSelectConstituencyType}
				list2={poolingStationInfo}
				list2Title={poolingStationTitle}
				list2Ids={poolingStationType}
				handleSecondList={handleSelectPoolingStation}
			/>
			<form className="flex items-center justify-between flex-wrap w-full p-4 text-center">
				{candidates.map((candidate) => {
					return (
						<div
							className="w-24 text-center font-bold block mb-2 text-sm text-gray-900 dark:text-gray-300 m-2"
							key={candidate.id}
						>
							<input
								onChange={(e) => handleSetNumber(e, candidate.id)}
								type="number"
								name="candiadates"
								id={candidate.name}
								className="z-30 border-2 block border-blue-600 bg-slate-100 w-full h-11 focus:border-blue-600 p-1 m-2 appearance-none focus:outline-none rounded-md"
							/>
							<label htmlFor={candidate.name}>{candidate.name}</label>
						</div>
					);
				})}

				<div className="flex justify-center items-center w-full my-2 text-white">
					<button
						className="block p-3 bg-blue-600 rounded-md tracking-wider hover:bg-blue-500"
						onClick={handleSubmitResults}
					>
						Save Results
					</button>
				</div>
			</form>
		</div>
	);
};

export default RightForm;
