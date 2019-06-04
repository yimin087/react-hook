import axios from 'axios'
import qs from 'qs'
import {message} from 'antd'
import {openLoading, clearLoading} from '../common/js/loading'

const codeMessage = {
	1: '报错，出现了一个错误',
	400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
	401: '用户没有权限',
	403: '用户得到授权，但是访问是被禁止的。',
	404: '请求链接不存在',
	406: '请求的格式不可得。',
	410: '请求的资源被永久删除，且不会再得到的。',
	422: '当创建一个对象时，发生一个验证错误。',
	500: '服务器发生错误，请检查服务器。',
	502: '网关错误。',
	503: '服务不可用，服务器暂时过载或维护。',
	504: '网关超时。',
	200000: '操作成功',
	200400: '参数错误',
	200403: '没有权限',
	200406: '数据不存在',
	200407: '数据错误或不匹配',
	200408: 'token 已失效',
	200301: 'token 已过期',
	200302: 'token 没有传',
	200303: 'token 解析异常',
	200304: 'token 自动失效(缓存为空)',
	200305: 'token 不一致(重复登录)',
	200600: '请求方法不支持',
	200601: '非法操作',
	200602: '重复操作',
	200603: '业务异常',
	100500: '未知异常',
	100600: '网络异常',
	100700: '数据库操作异常',
	100900: '服务已关闭'
}

let token = localStorage.token || ''
let instance = axios.create({
	// baseURL: '/v1',
	headers: {
		token,
		clientId: 'XXD_FRONT_END',
		clientTime: Date.now()
	}
})

instance.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded'

instance.interceptors.request.use(
	function(config) {
		// 在发送请求之前做些什么
		openLoading()
		return config
	},
	function(error) {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	res => {
		clearLoading()
		const {status, data} = res
		if (status.toString().startsWith('2')) {
			if (data.code && (data.code === '200000' || data.code === 200)) {
			} else {
				_showErr(data.code)
				// token 异常
				if (
					data.code === '200301' ||
					data.code === '200303' ||
					data.code === '200304' ||
					data.code === '200305' ||
					data.code === '200408'
				) {
					return setTimeout(() => {
						window.location.href = '/'
					}, 1500)
				}
			}
			return data
		} else {
			_showErr(status)
			return res
		}
	},
	error => {
		clearLoading()
		if (error.response) {
			const {status, data} = error.response
			_showErr(status)
			return Promise.reject(data)
		}
	}
)

let _showErr = code => {
	message.error(codeMessage[code], 1.5)
}

class Request {
	get(url, params) {
		return instance.get(url, {params})
	}

	post(url, data) {
		return instance.post(url, qs(data))
	}

	axios(params) {
		return instance(params)
	}
}

const request = new Request()
export default request
