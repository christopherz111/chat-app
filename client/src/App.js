//Router used to simplify things on client side

import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

//Creating app.js component
const App = () => (
	<Router>
		<Route path="/" exact component={Join} />
		<Route path="/chat" component={Chat} />
	</Router>
);

//User greeted with Join component first, inputs his data and through query strings the data is passed towards to chat

export default App;
