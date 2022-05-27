/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
// function scrollHeader() {
// 	const header = document.getElementById('header');
// 	// When the scroll is greater than 100 viewport, add the scroll-header ckass to the header tag
// 	if (this.scrollY >= 100) header.classList.add('scroll-header');
// 	else header.classList.remove('scroll-header');
// }
// window.addEventListener('scroll', scrollHeader);

/*==================== SWIPER DISCOVER ====================*/
const swiper = new Swiper('.swiper', {
	centeredSlides: true,
	centeredSlidesBounds: true,
	grabCursor: true,
	spaceBetween: 110,
	navigation: {
		nextEl: '.swiper-next',
	},
	// Responsive breakpoints
	breakpoints: {
		576: {
			slidesPerView: 1,
		},
		796: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
		1600: {
			slidesPerView: 4,
		},
	},
	slidesPerView: 1,
});
const swiper2 = new Swiper('.hottest-left__swiper', {
	navigation: {
		nextEl: '.swiper-next',
	},
	loop: true,
	spaceBetween: 80,
	slidesPerView: 2,
});

// ============== likes anim ==========

const getLike = document.querySelectorAll('.get-like');
getLike.forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.toggle('red');
	});
});

/*==================== VIDEO ====================*/

/*==================== SHOW SCROLL UP ====================*/
// function scrollUp() {
// 	const scrollUp = document.getElementById('scroll-up');
// 	// When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
// 	if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
// 	else scrollUp.classList.remove('show-scroll');
// }
// window.addEventListener('scroll', scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]');

// function scrollActive() {
// 	const scrollY = window.pageYOffset;

// 	sections.forEach((current) => {
// 		const sectionHeight = current.offsetHeight;
// 		const sectionTop = current.offsetTop - 50;
// 		sectionId = current.getAttribute('id');

// 		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
// 			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
// 		} else {
// 			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
// 		}
// 	});
// }
// window.addEventListener('scroll', scrollActive);
/*==================== DARK LIGHT THEME ====================*/

/*==================== SCROLL REVEAL ANIMATION ====================*/
// const sr = ScrollReveal({
// 	distance: '60px',
// 	duration: 2800,
// 	// reset: true,
// });

// sr.reveal(
// 	'.home__data, .home__social-link, .home__info,.discover__container,.experience__data, .experience__overlay, .place__card, .sponsor__content, .footer__data, .footer__rights',
// 	{
// 		origin: 'top',
// 		interval: 100,
// 	}
// );

// sr.reveal('.about__data, .video__descr, .subscribe__descr', {
// 	origin: 'left',
// });
// sr.reveal('.about__img-overlay, .video__content, .subscribe__form', {
// 	origin: 'right',
// 	interval: 100,
// });

// ========== TIMER ===========

const timer = document.querySelector('.timer'),
	deadLine = '2022-05-28';
function getTimeRemaining(endtime) {
	let hours, minutes;
	const t = Date.parse(endtime) - Date.parse(new Date());

	if (t <= 0) {
		timer.classList.remove('hideTimer');
		timer.classList.add('showTimer');
	} else {
		hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		minutes = Math.floor((t / 1000 / 60) % 60);
	}

	return {
		total: t,
		hours,
		minutes,
	};
}

function getZero(num) {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
}

function setClock(selector, endtime) {
	const timer = document.querySelector(selector),
		timeInterval = setInterval(updateClock, 60000);
	updateClock();
	function updateClock() {
		const t = getTimeRemaining(endtime);

		timer.innerHTML = `${getZero(t.hours)}: ${getZero(t.minutes)} min left`;
		// timer.innerHTML = getZero(t.hours);
		// timer.innerHTML = getZero(t.minutes);
		// timer.innerHTML = getZero(t.seconds);

		if (t.total <= 0) {
			clearInterval(timeInterval);
		}
	}
}

setClock('.timer', deadLine);
