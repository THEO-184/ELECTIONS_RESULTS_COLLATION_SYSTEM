import React from "react";
import { capitalize } from "../../../utils/formUtils";

const ElectionBox = (props) => {
	const {
		list1,
		list1Title,
		list2Title,
		list2,
		handleSelectElectionType,
		handleSelectCollationType,
		list2Ids,
		list1Ids,
	} = props;
	return (
		<form className="flex flex-col items-center justify-center w-full h-full">
			{list1 && (
				<div className="">
					<p className="mb-4  italic text-blue-800 font-bold text-xl">
						{list1Title}
					</p>
					{list1.map((election, id) => {
						return (
							<label className="radio" htmlFor={election.name} key={id}>
								{capitalize(election.name)}
								<input
									type="radio"
									value={election.name}
									name="election_type"
									id={election.name}
									checked={list1Ids == id}
									onChange={() => handleSelectElectionType(id)}
								/>
								<div className="radio-btn"></div>
							</label>
						);
					})}
				</div>
			)}

			{list2 && (
				<div className="mb-4">
					<p className="mb-4 italic text-blue-800 font-bold text-xl">
						{list2Title}
					</p>
					{list2.map((collation, id) => {
						return (
							<label className="radio" htmlFor={collation.name} key={id}>
								{capitalize(collation.name)}
								<input
									type="radio"
									name="collation_type"
									id={collation.name}
									value={collation.name}
									checked={list2Ids == id}
									onChange={() => handleSelectCollationType(id)}
								/>
								<div className="radio-btn"></div>
							</label>
						);
					})}
				</div>
			)}
		</form>
	);
};

export default ElectionBox;
