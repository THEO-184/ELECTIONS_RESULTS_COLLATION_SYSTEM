import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="fixed top-0 left-0 w-screen h-16 bg-color text-white">
			<nav className="w-11/12 h-full flex justify-between items-center  mx-auto">
				<div className="font-bold">PROJECT</div>
				<ul className="list-none flex items-center w-2/3 sm:w-1/3 mx-auto justify-center sm:justify-between">
					{[
						["Home", "/"],
						["Dashboard", "/dashboard"],
						["Profile", "/profile"],
						["Settings", "/settings"],
					].map(([title, url]) => (
						<Link to={url}>
							<li className="mr-2 sm:mr-1">{title}</li>
						</Link>
					))}
				</ul>
				<ul className="list-none flex items-center">
					<Link to={"/sign-up"}>
						<li className="mr-1">sign up</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
