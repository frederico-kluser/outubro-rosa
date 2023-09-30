import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				{/* <Route path="*" element={<NoMatch />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
