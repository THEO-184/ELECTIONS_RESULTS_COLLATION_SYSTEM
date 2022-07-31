import React from "react";
import Wrapper from "../../components/Wrapper";

const Login = () => {
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

						<form className="w-full flex justify-center flex-col items-center mt-3">
							<input
								type="text"
								placeholder="card id"
								className="login-input mt-4"
							/>
							<input
								type="password"
								placeholder="password"
								className="login-input mt-4"
							/>

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
