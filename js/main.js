window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	//Timer.
	const timer = deadline => {
		const timerHours = document.querySelector('#timer-hours');
		const timerMinutes = document.querySelector('#timer-minutes');
		const timerSeconds = document.querySelector('#timer-seconds');

		const addZero = num => {
			if (num <= 9) {
				return '0' + num;
			} else {
				return num;
			}
		};

		const getTimeRemaining = () => {
			const dateStop = new Date(deadline).getTime();
			const dateNow = new Date().getTime();
			const timeRemaining = (dateStop - dateNow) / 1000;
			const seconds = Math.floor(timeRemaining % 60);
			const minutes = Math.floor((timeRemaining / 60) % 60);
			const hours = Math.floor(timeRemaining / 60 / 60);

			return { timeRemaining, hours, minutes, seconds };

		};

		function updateClock() {
			const timer = getTimeRemaining();

			timerSeconds.textContent = addZero(timer.seconds);
			timerMinutes.textContent = addZero(timer.minutes);
			timerHours.textContent = addZero(timer.hours);

			if (timer.timeRemaining <= 0) {
				timerSeconds.textContent = '00';
				timerMinutes.textContent = '00';
				timerHours.textContent = '00';
			} else if (timer.timeRemaining > 0) {
				setTimeout(updateClock);
			}
			clearInterval();
		}
		updateClock();
	};
	timer('2021-03-17');

	//Smooth scroll to section.
	const smoothScroll = () => {
		//All buttons of sections menu.
		const btnScrollBlock = document.querySelectorAll('a[href="#service-block"]');
		const btnScrollPortfolio = document.querySelector('a[href="#portfolio"]');
		const btnScrollCalc = document.querySelector('a[href="#calc"]');
		const btnScrollCommand = document.querySelector('a[href="#command"]');
		const btnScrollConnect = document.querySelector('a[href="#connect"]');

		//All sections.
		const serviceSection = document.querySelector('#service-block');
		const portfolioSection = document.querySelector('#portfolio');
		const calcSection = document.querySelector('#calc');
		const commandSection = document.querySelector('#command');
		const connectSection = document.querySelector('#connect');

		//Menu button smooth scroll to next section.
		const allBtn = (button, section) => {
			button.addEventListener('click', (event) => {
				event.preventDefault();

				section.scrollIntoView({ behavior: "smooth" });
			});
		};

		allBtn(btnScrollBlock[0], serviceSection);
		allBtn(btnScrollBlock[1], serviceSection);
		allBtn(btnScrollPortfolio, portfolioSection);
		allBtn(btnScrollCalc, calcSection);
		allBtn(btnScrollCommand, commandSection);
		allBtn(btnScrollConnect, connectSection);
	};
	smoothScroll();

	//Menu Hamburger.
	const toggleMenu = () => {
		const body = document.querySelector('body');
		const menu = document.querySelector('menu');

		body.addEventListener('click', (event) => {
			let target = event.target;

			if (target.closest('.menu')) {
				handlerMenu();
			} else if (target.classList.contains('close-btn')) {
				handlerMenu();
			} else if (target.tagName === 'A' && target.closest('menu')) {
				handlerMenu();
			} else if (target.closest('menu')) {
				return;
			} else {
				menu.classList.remove('active-menu');
			};
		});

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};
	};
	toggleMenu();

	//PopUp window.
	const togglePopUp = () => {
		const popUp = document.querySelector('.popup');
		const btnPopUp = document.querySelectorAll('.popup-btn');
		const popUpContent = document.querySelector('.popup-content');

		btnPopUp.forEach(elem => {
			elem.addEventListener('click', () => {
				popUp.style.display = 'block';

				//PopUp animation.
				function animate({ timing, draw, duration }) {

					let start = performance.now();

					requestAnimationFrame(function animate(time) {
						let timeFraction = (time - start) / duration;
						if (timeFraction > 1) timeFraction = 1;

						let progress = timing(timeFraction);

						draw(progress);

						if (timeFraction < 1) {
							requestAnimationFrame(animate);
						}

					});
				}

				if (window.screen.width > 768) {
					animate({
						duration: 200,
						timing(timeFraction) {
							return timeFraction;
						},
						draw(progress) {
							popUpContent.style.top = progress * 250 + 'px';
						}
					});
				} else {
					popUp.style.display = 'block';
					popUpContent.style.transform = '';
				};
				//PopUp animation End.
			});
		});

		popUp.addEventListener('click', (event) => {
			let target = event.target;

			if (target.classList.contains('popup-close')) {
				popUp.style.display = 'none';
			} else {
				target = target.closest('.popup-content');

				if (!target) {
					popUp.style.display = 'none';
				};
			};
		});
	};
	togglePopUp();

	//Tabs.
	const tabs = () => {
		const serviceHeader = document.querySelector('.service-header');
		const serviceHeaderTab = serviceHeader.querySelectorAll('.service-header-tab');
		const serviceTab = document.querySelectorAll('.service-tab');

		const toogleTabContent = (index) => {
			for (let i = 0; i < serviceTab.length; i++) {
				if (index === i) {
					serviceHeaderTab[i].classList.add('active');
					serviceTab[i].classList.remove('d-none');
				} else {
					serviceHeaderTab[i].classList.remove('active');
					serviceTab[i].classList.add('d-none');
				};
			};
		};

		serviceHeader.addEventListener('click', (event) => {
			let target = event.target;
			target = target.closest('.service-header-tab');

			if (target) {
				serviceHeaderTab.forEach((item, index) => {
					if (item === target) {
						toogleTabContent(index);
					};
				});
			};
		});
	};
	tabs();

	//Slider.
	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item');
		const slider = document.querySelector('.portfolio-content');
		let dot = document.querySelectorAll('.dot');

		let currentSlide = 0;
		let interval;

		const dotsAdd = () => {

			slide.forEach(() => {
				const portfolioDots = document.querySelector('.portfolio-dots');
				const li = document.createElement('li');

				li.classList.add('dot');
				portfolioDots.append(li);
			})

			dot = document.querySelectorAll('.dot');

			dot.forEach((item) => {
				if (!item.classList.contains('dot-active')) {
					prevSlide(dot, currentSlide, 'dot-active');
					nextSlide(dot, currentSlide, 'dot-active');
				}
			});

		};

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			};

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};

		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener('click', (event) => {
			event.preventDefault();

			let target = event.target;

			if (!target.matches('.portfolio-btn, .dot')) {
				return;
			};

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					};
				});
			};

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			};

			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			};

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		});

		slider.addEventListener('mouseover', (event) => {
			let target = event.target;

			if (target.matches('.portfolio-btn') || target.matches('.dot')) {
				stopSlide();
			};
		});

		slider.addEventListener('mouseout', (event) => {
			let target = event.target;

			if (target.matches('.portfolio-btn') || target.matches('.dot')) {
				startSlide();
			};
		});

		dotsAdd();
		startSlide(2000);
	};
	slider();

	//change photo section "Our team".
	const photoTeam = () => {
		const photoTeam = document.querySelectorAll('.command__photo');
		const arrSrc = [];

		photoTeam.forEach(item => {
			arrSrc.push(item.src);
		});

		photoTeam.forEach((item, index) => {
			item.addEventListener('mouseover', (event) => {
				const target = event.target;

				target.src = target.dataset.img;
			});

			item.addEventListener('mouseout', (event) => {
				const target = event.target;

				if (event.type === 'mouseout') {
					target.src = arrSrc[index];
				};
			});
		});
	};
	photoTeam();

	//RegExp section calc sum.
	const regularExpression = () => {
		const calcItem = document.querySelectorAll('input.calc-item');

		const firstForm = document.getElementById('form1');
		const firstFormName = document.getElementById('form1-name');
		const firstFormEmail = document.getElementById('form1-email');
		const firstFormPhone = document.getElementById('form1-phone');

		const secondForm = document.getElementById('form2');
		const secondFormName = document.getElementById('form2-name');
		const secondFormMessage = document.getElementById('form2-message');
		const secondFormEmail = document.getElementById('form2-email');
		const secondFormPhone = document.getElementById('form2-phone');

		//Section calc sum inputs.
		calcItem.forEach(item => {
			item.addEventListener('input', () => {
				item.value = item.value.replace(/[\D/]/g, '');
			});
		});

		firstForm.addEventListener('focusin', (event) => {
			const target = event.target;

			firstForm.classList.add('focused');

			if (target.closest('#form1-name')) {
				firstFormName.addEventListener('input', () => {
					firstFormName.value = firstFormName.value.replace(/[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]/gi, '');
					firstFormName.value = firstFormName.value.trim().slice(0, 1).toUpperCase() + firstFormName.value.trim().slice(1).toLowerCase();
				});
			} else if (target.closest('#form1-email')) {
				firstFormEmail.addEventListener('input', () => {
					firstFormEmail.value = firstFormEmail.value.replace(/[а-я+\s/()<>"\]#$%^&\[:;,+\\?=`|}{]/gi, '').trim();
				});
			} else if (target.closest('#form1-phone')) {
				firstFormPhone.addEventListener('input', () => {
					firstFormPhone.value = firstFormPhone.value.replace(/[a-zа-я\s/.,!@#$%^&\]=*<>\["№?:;{}|_~`]/gi, '').trim();
				});
			}

		});

		firstForm.addEventListener('focusout', () => {
			firstForm.classList.remove('focused');
		});

		secondForm.addEventListener('focusin', (event) => {
			const target = event.target;

			secondForm.classList.add('focused');

			if (target.closest('#form2-name')) {
				secondFormName.addEventListener('input', () => {
					secondFormName.value = secondFormName.value.replace(/[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]/gi, '');
					secondFormName.value = secondFormName.value.trim().slice(0, 1).toUpperCase() + secondFormName.value.trim().slice(1).toLowerCase();
				});
			} else if (target.closest('#form2-email')) {
				secondFormEmail.addEventListener('input', () => {
					secondFormEmail.value = secondFormEmail.value.replace(/[а-я+\s/()<>"\]#$%^&\[:;,+\\?=`|}{]/gi, '').trim();
				});
			} else if (target.closest('#form2-phone')) {
				secondFormPhone.addEventListener('input', () => {
					secondFormPhone.value = secondFormPhone.value.replace(/[a-zа-я\s/.,!@#$%^&\]=*<>\["№?:;{}|_~`]/gi, '').trim();
				});
			} else if (target.closest('#form2-message')) {
				secondFormMessage.addEventListener('input', () => {
					secondFormMessage.value = secondFormMessage.value.replace(/[a-z]/gi, '');
				});
			}
		});

		secondForm.addEventListener('focusout', () => {
			secondForm.classList.remove('focused');
		});

	};
	regularExpression();

	//Calculator
	const calc = (price = 100) => {
		const calcBlock = document.querySelector('.calc-block');
		const calcType = document.querySelector('.calc-type');
		const calcSquare = document.querySelector('.calc-square');
		const calcCount = document.querySelector('.calc-count');
		const calcDay = document.querySelector('.calc-day');
		let totalValue = document.getElementById('total');

		const countSum = () => {
			let total = 0;
			let countValue = 1;
			let dayValue = 1;
			let time = 10000;
			let step = 1;

			const squareValue = +calcSquare.value;
			const typeValue = calcType.options[calcType.selectedIndex].value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			};

			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			};

			if (typeValue && squareValue) {
				total = price * squareValue * typeValue * countValue * dayValue;
			};



			function outNum(num, elem) {

				let n = 0;
				let t = Math.round(time / (num / step));
				let interval = setInterval(() => {
					n += step;
					if (n === num) {
						clearInterval(interval);
					}
					elem.textContent = n;
				},
					t);
			};

			if (total > 0) {
				outNum(total, totalValue);

			}

			//totalValue.textContent = total;
		};

		calcBlock.addEventListener('change', (event) => {
			const target = event.target;

			if (target.matches('select') || target.matches('input')) {
				countSum();
			};
		});
	};

	calc();
});
