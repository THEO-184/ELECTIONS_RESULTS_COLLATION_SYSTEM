import React from "react";

const LeftForm = (props) => {
	const { electionTitle, electionInfo, collationTitle, collationInfo } = props;
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
								{election.name}
								<input
									type="radio"
									name="election_type"
									id={election.name}
									checked={id == 0}
								/>
								<span className="radio-btn"></span>
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
								{collation.name}
								<input type="radio" name="collation_type" id={collation.name} />
								<span className="radio-btn"></span>
							</label>
						);
					})}
				</div>
			</form>
		</div>
	);
};

export default LeftForm;
