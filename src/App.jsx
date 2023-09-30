import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import Register from './pages/register';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="register" element={<Register />} />
				{/* <Route path="*" element={<NoMatch />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
