import loadingSvg from '../image/loading.svg'

export const openLoading = () => {
	let PopBox = document.createElement('div')
	PopBox.setAttribute('id', 'popWrapper')
	let Img = new Image()
	Img.src = loadingSvg
	PopBox.appendChild(Img)
	document.body.appendChild(PopBox)
}

export const clearLoading = () => {
	let PopBox = document.getElementById('popWrapper')
	document.body.removeChild(PopBox)
}
