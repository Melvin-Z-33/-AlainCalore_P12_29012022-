import Notfound from './pages/Notfound';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import Navbar from './components/Navbar/Navbar';
import Verticalbar from './components/Verticalbar/Verticalbar';
import './App.css';
export const baseURL = 'http://localhost:3000';

function App() {
	return (
		<>
			<Navbar />
			<Verticalbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="user/:id" element={<UserDashboard />} />
				<Route path="user/:id" element={<UserDashboard />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</>
	);
}

export default App;
