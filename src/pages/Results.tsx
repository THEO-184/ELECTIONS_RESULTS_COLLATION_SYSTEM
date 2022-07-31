import React from "react";
import Wrapper from "../components/Wrapper";

const Results = () => (
	<Wrapper>
		<div className="w-full h-full flex items-center justify-center">
			<div className="w-2/3 h-5/6 m-auto grid grid-cols-2 rounded-lg shadow-md shadow-neutral-500">
				<div className="bg-white flex items-center justify-center flex-col">
					<form>
						<div className="">
							<p>Select Election Type</p>
							<div className="">
								<input type="radio" name="election_type" id="presidential" />
								<label htmlFor="presidential">Presidential</label>
							</div>
							<div className="">
								<input type="radio" name="election_type" id="parliamentary" />
								<label htmlFor="parliamentary">Parliamentary</label>
							</div>
						</div>
						<div className="">
							<p>Select Collation Type</p>
							<div className="">
								<input type="radio" name="collation_type" id="constituency" />
								<label htmlFor="constituency">Constituency</label>
							</div>
							<div className="">
								<input type="radio" name="collation_type" id="regional" />
								<label htmlFor="regional">Regional</label>
							</div>
							<div className="">
								<input type="radio" name="collation_type" id="national" />
								<label htmlFor="national">National</label>
							</div>
						</div>
					</form>
				</div>
				<div className="bg-white">
					<form action=""></form>
				</div>
			</div>
		</div>
	</Wrapper>
);

export default Results;
