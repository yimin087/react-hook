import * as exp from './actionType'

export const addCount = num => {
	return {
		type: exp.ADD_COUNT,
		payload: {
			num
		}
	}
}
