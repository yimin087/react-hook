import {combineReducers} from 'redux'
import {ExpReducer} from '../pages/Example/store'

const reducer = combineReducers({
	exp: ExpReducer
})

export default reducer
