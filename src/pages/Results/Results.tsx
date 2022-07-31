import React from "react";
import Wrapper from "../../components/Wrapper";
import { collationInfo, electionInfo } from "../../utils/formUtils";
import LeftForm from "./LeftForm";

const Results = () => (
	<Wrapper>
		<div className="w-full h-full flex items-center justify-center">
			<div className="w-2/3 h-5/6 m-auto grid bg-gradient-to-b from-blue-400 to-violet-400 grid-cols-2 gap-3 rounded-lg shadow-md shadow-neutral-500">
				<LeftForm
					electionInfo={electionInfo}
					electionTitle={"Election Type"}
					collationTitle={"Collation Type"}
					collationInfo={collationInfo}
				/>
				<div className="bg-white">
					<form action=""></form>
				</div>
			</div>
		</div>
	</Wrapper>
);

export default Results;
