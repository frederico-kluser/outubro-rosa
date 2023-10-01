import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Unit from './pages/unit';
import Exams from './pages/exams';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="register" element={<Register />} />
				<Route path="unit" element={<Unit />} />
				<Route path="exams" element={<Exams />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
