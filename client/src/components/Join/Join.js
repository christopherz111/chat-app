//This is a hook for using state inside the function based component
import React, { useState } from 'react';
//This link is used to link to /chat path
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
	//Have name state and a function to set this name state and passing empty string as inital value
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	return (
		<div className="joinOuterContainer">
			
			<div className="joinInnerContainer">
				<h1 className="heading">Join</h1>
				<div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
				<div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
				{/* Not transferring data through props, just using query strings */}
				<Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
					<button className="button mt-20" type="submit">Sign In</button>
				</Link>
			</div>
		</div>
	)
};

export default Join;
