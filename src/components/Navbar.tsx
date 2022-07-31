import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="fixed top-0 left-0 w-screen h-16 bg-slate-100 text-blue-500">
			<nav className="w-11/12 h-full flex justify-between items-center  mx-auto">
				<div className="font-bold">PROJECT</div>
				<ul className="list-none flex items-center w-1/3 mx-auto justify-between text-orange-600">
					<li className="mr-1">Home</li>
					<li className="mr-1">Dashbiard</li>
					<li className="mr-1">Profile</li>
					<li className="mr-1">Settings</li>
				</ul>
				<ul className="list-none flex items-center text-green-700">
					<Link to={"/sign-up"}>
						<li className="mr-1">sign up</li>
					</Link>
					<li className="mr-1">Picture</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
