import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import MRouter from './router'

function App() {
	return (
		<div>
			<Router>
				<div>
					<Link to="/example">Example</Link>
					<br />
					<Link to="/">Home</Link>
				</div>
				<MRouter />
			</Router>
		</div>
	)
}

export default App
