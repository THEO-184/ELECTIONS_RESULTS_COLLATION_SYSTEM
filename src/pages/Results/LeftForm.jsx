import React, { useState } from "react";
import { capitalize } from "../../utils/formUtils";

const LeftForm = (props) => {
	const { electionTitle, electionInfo, collationTitle, collationInfo } = props;
	const [electionId, setElectionId] = useState(1);
	const [collationId, setcollationId] = useState(1);

	const handleSelectElectionType = (id) => {
		console.log(id);
		setElectionId(id);
	};

	const handleSelectCollationType = (id) => {
		console.log(id);
		setcollationId(id);
	};

	return (
		<div className="bg-white flex items-center justify-center flex-col">
			<form>
				<div className="">
					<p className="mb-4  italic text-blue-800 font-bold text-xl">
						{electionTitle}
					</p>
					{electionInfo.map((election, id) => {
						return (
							<label className="radio" htmlFor={election.name} key={id}>
								{capitalize(election.name)}
								<input
									type="radio"
									value={election.name}
									name="election_type"
									id={election.name}
									checked={electionId === election.id}
									onChange={() => handleSelectElectionType(election.id)}
								/>
								<div className="radio-btn"></div>
							</label>
						);
					})}
				</div>
				<div className="mb-4">
					<p className="mb-4 italic text-blue-800 font-bold text-xl">
						{collationTitle}
					</p>
					{collationInfo.map((collation, id) => {
						return (
							<label className="radio" htmlFor={collation.name} key={id}>
								{capitalize(collation.name)}
								<input
									type="radio"
									name="collation_type"
									id={collation.name}
									value={collation.name}
									checked={collationId === collation.id}
									onChange={() => handleSelectCollationType(collation.id)}
								/>
								<div className="radio-btn"></div>
							</label>
						);
					})}
				</div>
			</form>
		</div>
	);
};

export default LeftForm;
