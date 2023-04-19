const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}

]


const next = document.querySelector(' .arrow_right')
const previous = document.querySelector(' .arrow_left')
const slideImg = document.querySelector('.banner-img')
const TextImg = document.querySelector('#banner > p');
let initialNumber = 0;

/* function prev / next */

function nextSlide() {
	initialNumber = initialNumber + 1;
	if (initialNumber > slides.length - 1) {
		initialNumber = 0;	
	}
	slideCycle()

}

function previousSlide() {
	initialNumber = initialNumber - 1;
	if (initialNumber < 0) {
		initialNumber = slides.length - 1;
		
	}
	slideCycle()
}


function slideCycle(){
	
	slideImg.src = "./assets/images/slideshow/" + slides[initialNumber].image;
	TextImg.innerHTML = slides[initialNumber].tagLine;
	dotSwitch()	

}


/* Creation dots */

function createDot() {
	const dotsContainer = document.querySelector('.dots');

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dotsContainer.appendChild(dot);

		if (i === 0) {
			dotsContainer.children[i].classList.add('dot_selected');
		}
	}
}

/* Link dot to image  */

function dotSwitch() {
	const dots = document.querySelectorAll('.dot');
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot_selected');
	}
	dots[initialNumber].classList.add('dot_selected');
 }


next.addEventListener('click', nextSlide)
previous.addEventListener('click', previousSlide)
createDot();















