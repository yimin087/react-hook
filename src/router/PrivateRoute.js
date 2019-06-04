import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute({component: Component, ...rest}) {
	// 登录状态判断
	const isLogin = true
	return (
		<Route
			{...rest}
			render={props =>
				isLogin ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/home',
							state: {from: props.location}
						}}
					/>
				)
			}
		/>
	)
}

export default PrivateRoute
