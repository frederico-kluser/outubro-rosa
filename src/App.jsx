import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Template from './components/template';
import './App.css';

function App() {
	return (
		<Template>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="register" element={<Register />} />
					{/* <Route path="*" element={<NoMatch />} /> */}
				</Routes>
			</BrowserRouter>
		</Template>
	);
}

export default App;
