import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import routerConfig from './routerConfig'
import PrivateRoute from './PrivateRoute'

function SubRoute(r) {
	if (r.isAuthority) {
		return <PrivateRoute {...r} />
	}
	return <Route render={props => <r.component {...props} />} />
}

function MRouter() {
	return (
		<Switch>
			{routerConfig.map(r => (
				<SubRoute key={r.path} {...r} />
			))}
			<Redirect to="/" />
		</Switch>
	)
}

export default MRouter
