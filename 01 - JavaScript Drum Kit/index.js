const keys = document.querySelectorAll('.key');


const playSound = (e) => {
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	console.log(key, audio);


	if (!audio) return

	audio.currentTime = 0
	audio.play()
	key.classList.add('playing')
}

const removeTransition = (e) => {
	if (e.propertyName !== 'transform') return

	e.target.classList.remove('playing')
}

 window.addEventListener('keydown', playSound);
 keys.forEach(key => key.addEventListener('transitionend', removeTransition))