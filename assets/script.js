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

let num = 0;

const suivant = document.querySelector(' .arrow_right')
const precedent = document.querySelector(' .arrow_left')
const slideImg = document.querySelector('.banner-img')
const TextImg = document.querySelector('#banner > p');








/* function prev / next */

function slideSuivant() {
	num = num + 1;
	if (num > slides.length - 1) {
		num = 0;
	}
	slideImg.src = "./assets/images/slideshow/" + slides[num].image;
	TextImg.innerHTML = slides[num].tagLine;

}

suivant.addEventListener('click', slideSuivant)

function slideprecedent() {
	num = num - 1;
	if (num < 0) {
		num = slides.length - 1;

	}
	slideImg.src = "./assets/images/slideshow/" + slides[num].image;
	TextImg.innerHTML = slides[num].tagLine;


}

precedent.addEventListener('click', slideprecedent)


/* Creation dots */


function createDot() {

	const dots = document.querySelector('.dots');

	for (let j = 0; j < slides.length; j++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dots.appendChild(dot);

		if (j === 0) {
			dots.children[j].classList.add('dot_selected');
		}
	}


}

createDot();


console.log(createDot)




/* Link bullet to image (dot) */

function dotSwitch() {
	const dot = document.querySelector('.dot');

	for (let i = 0; i < dot.length; i++) {
		dot[i].classList.remove('dot_selected');
		dot[i].classList.add('dot');
	}
}
dotSwitch();

console.log(dotSwitch)

setInterval('slideprecedent(1)', 5000)













