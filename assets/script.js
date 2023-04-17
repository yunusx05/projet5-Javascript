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
let firstNumber = 0;

/* function prev / next */

function nextSlide() {
	firstNumber = firstNumber + 1;
	if (firstNumber > slides.length - 1) {
		firstNumber = 0;	
	}
	SlideCycle()

}

function SlideCycle(){
	
	slideImg.src = "./assets/images/slideshow/" + slides[firstNumber].image;
	TextImg.innerHTML = slides[firstNumber].tagLine;
	dotSwitch()	

}

function previousslide() {
	firstNumber = firstNumber - 1;
	if (firstNumber < 0) {
		firstNumber = slides.length - 1;
		
	}
	SlideCycle()
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
	dots[firstNumber].classList.add('dot_selected');
 }


next.addEventListener('click', nextSlide)
previous.addEventListener('click', previousslide)
createDot();















