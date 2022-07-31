import React from "react";

const Wrapper = ({ children }) => {
	return (
		<div className="absolute top-16 left-0 px-9 w-full h-[calc(100vh-4rem)] overflow-hidden">
			{children}
		</div>
	);
};

export default Wrapper;
