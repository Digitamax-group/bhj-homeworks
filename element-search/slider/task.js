const sliders = Array.from(document.querySelectorAll('.slider__item'));
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const dots = Array.from(document.querySelectorAll('.slider__dot'));

dots[0].classList.add('slider__dot_active');


function deactivateClass() {
	let index = sliders.findIndex(e => e === (sliders.find(item => item.classList.contains('slider__item_active'))));
	sliders[index].classList.remove('slider__item_active');
	dots[index].classList.remove('slider__dot_active');

	return index;
}

function activateClass(index) {
	sliders[index].classList.add('slider__item_active');
	dots[index].classList.add('slider__dot_active');
}

function previouClick() {
	index = deactivateClass();
	if(index === 0){
		index = sliders.length;
	}
	index--;
	activateClass(index);
}

function nextClick() {
	index = deactivateClass();
	if(index === sliders.length - 1){
		index = -1;
	}
	index++;
	activateClass(index);
	}

prev.onclick = previouClick;

next.onclick = nextClick;

dots.forEach(function(dot) {
	dot.addEventListener('click', () => {
	let index = dots.indexOf(dot);
	deactivateClass();
	activateClass(index);
	});
})
