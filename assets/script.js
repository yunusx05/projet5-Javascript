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


const suivant = document.querySelector(' .arrow_right')
const precedent = document.querySelector(' .arrow_left')
const slideImg = document.querySelector('.banner-img')
const TextImg = document.querySelector('#banner > p');
let num = 0;

/* function prev / next */

function slideSuivant() {
	num = num + 1;
	if (num > slides.length - 1) {
		num = 0;	
	}
	changeSlide()

}

function changeSlide(){
	
	slideImg.src = "./assets/images/slideshow/" + slides[num].image;
	TextImg.innerHTML = slides[num].tagLine;
	dotSwitch()	

}

function slideprecedent() {
	num = num - 1;
	if (num < 0) {
		num = slides.length - 1;
		
	}
	changeSlide()
}

/* Creation dots */
function createDot() {
	const dots = document.querySelector('.dots');

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dots.appendChild(dot);

		if (i === 0) {
			dots.children[i].classList.add('dot_selected');
		}
	}
}

/* Link dot to image  */

function dotSwitch() {
	const dots = document.querySelectorAll('.dot');
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot_selected');
	}
	dots[num].classList.add('dot_selected');
 }


suivant.addEventListener('click', slideSuivant)
precedent.addEventListener('click', slideprecedent)
createDot();















