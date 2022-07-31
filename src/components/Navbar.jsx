import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/slices/auth.slice";

const Navbar = () => {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.user.user.id);

	const handleLogOut = (e) => {
		e.preventDefault();
		dispatch(logOut());
	};

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
						<Link to={url} key={url}>
							<li className="mr-2 sm:mr-1 hover:text-rose-900">{title}</li>
						</Link>
					))}
				</ul>
				<ul className="list-none flex items-center">
					{userId.length ? (
						<button
							className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg w-24 h-8 flex justify-center items-center"
							onClick={handleLogOut}
						>
							sign out
						</button>
					) : (
						<Link to={"/sign-up"} className="">
							<li className="mr-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg w-24 h-8 flex justify-center items-center">
								Login
							</li>
						</Link>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
