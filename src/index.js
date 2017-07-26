// Importing the main react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Importing the components
import Main from './components/Main';

// Rendering to the page
ReactDOM.render(
	<BrowserRouter>
	<Main />
	</BrowserRouter>, document.getElementById("root"));