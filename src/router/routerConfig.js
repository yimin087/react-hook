import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/loading'

const routerConfig = [
	{
		name: '/',
		path: '/',
		exact: true,
		isAuthority: false,
		component: Loadable({
			loader: () => import('../pages/Home'),
			loading: () => <Loading />
		})
	},
	{
		name: '/example',
		path: '/example',
		exact: true,
		isAuthority: true,
		component: Loadable({
			loader: () => import('../pages/Example'),
			loading: () => <Loading />
		})
	}
]
export default routerConfig
