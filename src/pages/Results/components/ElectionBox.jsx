import React from "react";
import { capitalize } from "../../../utils/formUtils";

const ElectionBox = (props) => {
	const {
		list1,
		list1Title,
		list2Title,
		list2,
		handleFirstList,
		handleSecondList,
		list2Ids,
		list1Ids,
	} = props;
	return (
		<form className="flex flex-col items-center w-full h-auto p-4">
			{list1 && (
				<div className="w-11/12 mt-6 mx-auto">
					<p className="mb-4  italic text-blue-800 font-bold text-xl">
						{list1Title}
					</p>
					<div className="flex items-center justify-between w-full">
						{list1.map((election, id) => {
							return (
								<div
									className="radio flex items-center"
									htmlFor={election.name}
									key={id}
								>
									{capitalize(election.name)}
									<input
										type="radio"
										value={election.name}
										name="election_type"
										id={election.name}
										checked={list1Ids == id}
										onChange={() => handleFirstList(id)}
									/>
									<span className="radio-btn"></span>
								</div>
							);
						})}
					</div>
				</div>
			)}

			{list2 && (
				<div className="my-6 w-11/12 mx-auto">
					<p className="mb-4 italic text-blue-800 font-bold text-xl">
						{list2Title}
					</p>
					<div className="flex items-center justify-between w-full">
						{list2.map((collation, id) => {
							return (
								<div
									className="radio flex items-center"
									htmlFor={collation.name}
									key={id}
								>
									{capitalize(collation.name)}
									<input
										type="radio"
										name="collation_type"
										id={collation.name}
										value={collation.name}
										checked={list2Ids == id}
										onChange={() => handleSecondList(id)}
									/>
									<span className="radio-btn"></span>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</form>
	);
};

export default ElectionBox;
