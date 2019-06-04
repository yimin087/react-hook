const path = require('path')
const webpackMerge = require('webpack-merge')
const {
	override,
	useBabelRc,
	addLessLoader,
	addWebpackAlias,
	addDecoratorsLegacy
} = require('customize-cra')

module.exports = {
	devServer: configFunction => proxy => {
		proxy = {
			'/movie': {
				// 这里配置代理服务地址
				target: 'http://wx0519.club:2345/',
				changeOrigin: true
				// pathRewrite: {'^/feapi': ''}
			}
		}
		const config = configFunction(proxy)
		return config
	},
	webpack: (config, env) => {
		config = override(
			useBabelRc(),
			addLessLoader({
				javascriptEnabled: true,
				modifyVars: {'@primary-color': '#1DA57A'}
			}),
			// 对Decorators支持
			addDecoratorsLegacy(),
			addWebpackAlias({
				'@': path.join(__dirname, 'src')
			})
		)(config, env)

		return webpackMerge(config, {
			output: {
				publicPath: '/'
			}
		})
	}
}
