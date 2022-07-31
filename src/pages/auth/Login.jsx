import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// local imports
import { addUser } from "../../redux/slices/auth.slice";

const Login = () => {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.user.user.id);
	console.log(userId);
	const [cardId, setCardId] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState({
		cardIdErr: {
			isError: false,
			details: "",
		},
		passwordEr: {
			isError: false,
			details: "",
		},
	});

	// submit details
	const handleFormSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addUser({
				id: cardId,
			})
		);
	};

	useEffect(() => {
		if (cardId.length > 15) {
			setError((prev) => {
				return {
					...prev,
					cardIdErr: {
						isError: true,
						details: "card number should be maximum 15 characters",
					},
				};
			});
		} else {
			setError((prev) => {
				return {
					...prev,
					cardIdErr: {
						isError: false,
						details: "",
					},
				};
			});
		}
		if (password.length > 20) {
			setError((prev) => {
				return {
					...prev,
					passwordEr: {
						isError: true,
						details: "password should be maximum 20 characters",
					},
				};
			});
		} else {
			setError((prev) => {
				return {
					...prev,
					passwordEr: {
						isError: false,
						details: "",
					},
				};
			});
		}
	}, [cardId, password]);

	if (userId.length) {
		return <Navigate to={"/"} />;
	}
	return (
		<div>
			<div className="w-full flex items-center justify-center h-screen bg-[url('/public/loginImg.jpg')] bg-cover bg-no-repeat bg-center text-white">
				<div className="w-2/3 h-[600px] m-auto text-center p-1 flex items-center justify-center">
					<div className="">
						<h2 className="text-4xl mb-3">Login</h2>
						<div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 mb-5"></div>
						<p className="text-base tracking-wider leading-loose">
							Welcome back! Login to continue from where you started.
						</p>
						<form
							className="w-full flex justify-center flex-col items-center mt-3"
							onSubmit={handleFormSubmit}
						>
							<input
								type="text"
								placeholder="card id"
								className="login-input mt-4"
								value={cardId}
								required
								onChange={(e) => setCardId(e.target.value)}
							/>
							{error.cardIdErr.isError && (
								<span className="text-red-500">{error.cardIdErr.details}</span>
							)}
							<input
								type="password"
								placeholder="password"
								className="login-input mt-4"
								value={password}
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
							{error.passwordEr.isError && (
								<span className="text-red-500">{error.passwordEr.details}</span>
							)}
							<button className="w-36 h-10 rounded bg-gradient-to-r from-purple-500 to-pink-500 px-1 hover:from-purple-400 hover:to-pink-400 mt-4">
								CONTINUE
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
