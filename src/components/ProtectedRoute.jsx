import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
	const auth = useSelector((state) => state.user.user);
	return <>{auth.id.length ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default ProtectedRoute;
