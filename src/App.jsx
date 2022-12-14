import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Results from "./pages/Results/Results";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Login />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/results" element={<Results />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
