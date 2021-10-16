import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes';
import TestRoutes from './routes/testRoute';

function App() {
	
	return (
		<>
			<TestRoutes />			
		</>
	);
}

export default App;
