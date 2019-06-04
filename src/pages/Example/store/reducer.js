import * as exp from './actionType'
const defaultState = {
	num: 1,
	count: 0
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case exp.ADD_COUNT:
			return {
				num: Number(action.payload.num),
				count: state.count + Number(action.payload.num)
			}
		default:
			return state
	}
}
