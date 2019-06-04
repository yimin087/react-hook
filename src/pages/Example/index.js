import React, {useState, useEffect} from 'react'
import './index.scss'
import {Button} from 'antd'
import {expApi} from '../../api'
import {connect} from 'react-redux'
import {action} from './store'

function Example(props) {
	const {exp, addCount} = props

	const [data, setData] = useState([])
	const [query, setQuery] = useState('1')
	const [search, setSearch] = useState('1')
	const [num, setNum] = useState(exp.num)

	useEffect(() => {
		const fetchData = async () => {
			const result = await expApi.getMovieList(search)
			if (result) {
				setData(result.message)
			}
		}
		fetchData()
	}, [search])

	return (
		<div className="example">
			<h2>测试api</h2>
			<input
				type="text"
				value={query}
				onChange={event => setQuery(event.target.value)}
			/>
			<Button onClick={() => setSearch(query)}>Search</Button>
			<ul>
				{data.map(item => (
					<li key={item.doubanId}>{item.title}</li>
				))}
			</ul>
			<h2>测试redux</h2>
			<input
				type="text"
				value={num}
				onChange={event => setNum(event.target.value)}
			/>

			<Button onClick={() => addCount(num)}>add</Button>
			<div>count: {exp.count}</div>
		</div>
	)
}

const mapDispatch = dispatch => ({
	addCount(num) {
		dispatch(action.addCount(num))
	}
})

export default connect(
	state => state,
	mapDispatch
)(Example)
