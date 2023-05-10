//Comportamentos para o menu .

function toggleChevronIcon(menuItem) {
	const chevronIcon = menuItem.querySelector('iconify-icon');
	if (chevronIcon) {
		chevronIcon.classList.toggle('chevron-up');
	}
}

function isMobile() {
	// Você pode ajustar o valor 768 para corresponder à largura de tela que define um dispositivo móvel em seu design
	return window.innerWidth <= 768;
}

document.addEventListener('DOMContentLoaded', () => {
	const menuItems = document.querySelectorAll('.menu-item');

	document.addEventListener('click', (event) => {
		menuItems.forEach((menuItem) => {
			const dropdownMenu = menuItem.querySelector('.dropdown-menu');
			if (dropdownMenu && isMobile()) {
				if (
					!dropdownMenu.contains(event.target) &&
					!menuItem.contains(event.target)
				) {
					dropdownMenu.style.display = 'none';
				}
			}
		});
	});

	menuItems.forEach((menuItem) => {
		if (!isMobile()) {
			menuItem.addEventListener('mouseenter', () => {
				const dropdownMenu = menuItem.querySelector('.dropdown-menu');
				if (dropdownMenu) {
					dropdownMenu.style.display = 'block';
					toggleChevronIcon(menuItem);
				}
			});

			menuItem.addEventListener('mouseleave', () => {
				const dropdownMenu = menuItem.querySelector('.dropdown-menu');
				if (dropdownMenu) {
					dropdownMenu.style.display = 'none';
					toggleChevronIcon(menuItem);
				}
			});
		}

		menuItem.addEventListener('click', (event) => {
			if (isMobile()) {
				event.preventDefault(); // Adicionado para evitar que o evento de clique seja propagado para elementos de âncora

				const dropdownMenu = menuItem.querySelector('.dropdown-menu');
				if (dropdownMenu) {
					if (dropdownMenu.style.display === 'block') {
						dropdownMenu.style.display = 'none';
					} else {
						dropdownMenu.style.display = 'block';
					}
					toggleChevronIcon(menuItem);
				}
				// Previne a propagação do evento de clique para elementos pais
				event.stopPropagation();
			}
		});
	});
});

//menu mobile

const menuBtn = document.querySelector('.menu-btn');
const navbarMobile = document.querySelector('.nav-mobile__nav');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		navbarMobile.classList.add('active');

		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		navbarMobile.classList.remove('active');

		menuOpen = false;
	}
});

//accordion

// selecionando todos os elementos de cabeçalho do accordion
const accordionHeaders = document.querySelectorAll('.s-faq__accordion-header');
if (accordionHeaders.length > 0) {
	// adicionando a classe CSS "active" ao primeiro elemento de cabeçalho do accordion
	accordionHeaders[0].nextElementSibling.classList.add('active');
}

// adicionando um ouvinte de evento de clique a cada elemento de cabeçalho do accordion
accordionHeaders.forEach((header) => {
	header.addEventListener('click', () => {
		header.classList.toggle('active');
		// selecionando o elemento de conteúdo associado com o cabeçalho clicado
		const content = header.nextElementSibling;

		// alternando a classe CSS "active" no elemento de conteúdo para controlar sua visibilidade
		content.classList.toggle('active');
	});
});

//SWIPER

var slide_plans = new Swiper('.slide-plans', {
	// Default parameters
	slidesPerView: 4,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	grabCursor: true,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		910: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		1210: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});

/* PÁGINA DE RESULTADOS */

/* FILTROS SUPERIORES DE VELOCIDADE E PREÇO DA PÁGINA DE RESULTADOS */

// Seleciona os elementos
const mainBtn = document.querySelector('.results-filter-price__btn');
const othersDiv = document.querySelector('.results-filter-price__others');
const priceBtns = document.querySelectorAll(
	'.others-group-price .others-group__btn'
);
const velocityBtns = document.querySelectorAll(
	'.others-group-velocity .others-group__btn'
);

// Adiciona a classe 'active' ao clicar em results-filter-price__btn
if (mainBtn) {
	mainBtn.addEventListener('click', () => {
		othersDiv.classList.toggle('active');
	});
}

// Função para lidar com a troca de botões ativos
function handleActiveBtn(targetBtn) {
	const allBtns = [...priceBtns, ...velocityBtns];

	allBtns.forEach((btn) => {
		if (btn === targetBtn) {
			btn.classList.add('active');
			mainBtn.textContent = btn.textContent;
		} else {
			btn.classList.remove('active');
		}
	});
}

// Adiciona a classe 'active' ao clicar em um dos botões de others-group-price e others-group-velocity
priceBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		handleActiveBtn(btn);
	});
});

velocityBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		handleActiveBtn(btn);
	});
});

/* Botão de 'ver detalhhes' no card de resultados de busca */

document
	.querySelectorAll('.btn-details-desktop, .btn-details-mobile')
	.forEach((btn) => {
		btn.addEventListener('click', (event) => {
			const card = event.target.closest('.s-search-results__card');
			const cardFooter = card.querySelector('.card__footer');
			const showDetailsText = 'Ver detalhes';
			const hideDetailsText = 'Esconder detalhes';

			cardFooter.classList.toggle('active');

			if (event.target.innerHTML.trim() === showDetailsText) {
				event.target.innerHTML = hideDetailsText;
			} else {
				event.target.innerHTML = showDetailsText;
			}
		});
	});

// Seleciona todos os elementos com a classe "aside-group__filter"
const filterItems = document.querySelectorAll('.aside-group__filter');

// Adiciona um event listener a cada elemento
filterItems.forEach((item) => {
	item.addEventListener('click', function () {
		// Verifica se o item clicado já tem a classe "active"
		const isActive = item.classList.contains('active');

		// Remove a classe "active" dos irmãos do elemento clicado
		item.parentNode.childNodes.forEach((sibling) => {
			if (sibling.nodeType === Node.ELEMENT_NODE) {
				sibling.classList.remove('active');
			}
		});

		// Se o elemento clicado já possui a classe "active", a remove
		// Caso contrário, adiciona a classe "active"
		if (isActive) {
			item.classList.remove('active');
		} else {
			item.classList.add('active');
		}
	});
});

/* Ativação de filtros de busca e preços na versão responsiva */

const btnFilterSearch = document.querySelector('#open-filters-mobile');

if (btnFilterSearch) {
	btnFilterSearch.addEventListener('click', () => {
		const aside = document.querySelector('.s-search-results__aside');

		aside.classList.toggle('mobile');
		aside.classList.toggle('active');
		const closeFilterBtn = document.querySelector(
			'.s-search-results__close-btn'
		);

		const applyFilterBtn = document.querySelector('#apply-filters');

		applyFilterBtn.addEventListener('click', () => {
			aside.classList.remove('mobile');
			aside.classList.remove('active');
		});

		closeFilterBtn.addEventListener('click', () => {
			aside.classList.remove('mobile');
			aside.classList.remove('active');
		});
	});
}

const btnFilterPriceMobile = document.querySelector('#open-prices-mobile');

if (btnFilterPriceMobile) {
	btnFilterPriceMobile.addEventListener('click', () => {
		const asidePricesMobile = document.querySelector(
			'.results-filter-price__others-mobile'
		);

		asidePricesMobile.classList.toggle('mobile');
		asidePricesMobile.classList.toggle('active');
		const closeFilterBtn = document.querySelector('#close-filters-price');

		const applyFilterBtn = document.querySelector('#apply-filters-price');

		applyFilterBtn.addEventListener('click', () => {
			asidePricesMobile.classList.remove('mobile');
			asidePricesMobile.classList.remove('active');
		});

		closeFilterBtn.addEventListener('click', () => {
			asidePricesMobile.classList.remove('mobile');
			asidePricesMobile.classList.remove('active');
		});
	});
}

document.addEventListener('DOMContentLoaded', function () {
	const scrollableContentPrices = document.getElementById(
		'scrollable-content-prices'
	);

	if (scrollableContentPrices) {
		scrollableContentPrices.addEventListener('scroll', function (e) {
			if (
				scrollableContentPrices.scrollTop + scrollableContent.clientHeight >=
				scrollableContentPrices.scrollHeight
			) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const scrollableContent = document.getElementById('scrollable-content');

	if (scrollableContent) {
		scrollableContent.addEventListener('scroll', function (e) {
			if (
				scrollableContent.scrollTop + scrollableContent.clientHeight >=
				scrollableContent.scrollHeight
			) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		});
	}
});

let btnSearch = document.querySelector('#btn-search-plans');
let modalSearch = document.querySelector('#modal-searching-plan');

if (btnSearch) {
	btnSearch.addEventListener('click', (event) => {
		event.preventDefault();
		modalSearch.classList.add('active');

		// Defina a URL para a qual você deseja redirecionar e o tempo de espera em milissegundos
		let redirectUrl = 'https://example.com';
		let timeoutDuration = 5000; // 5000ms = 5s

		// Redireciona para a URL após o tempo de espera
		setTimeout(() => {
			window.location.href = redirectUrl;
		}, timeoutDuration);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	const showModalButtons = document.querySelectorAll('.show-details');
	const closeButtons = document.querySelectorAll('.close-btn');

	showModalButtons.forEach((button) => {
		button.addEventListener('click', (event) => {
			const targetModalId = event.target.getAttribute('data-target-modal');
			const targetModal = document.getElementById(targetModalId);

			if (targetModal) {
				targetModal.style.display = 'flex';
			}
		});
	});
	closeButtons.forEach((closeButton) => {
		closeButton.addEventListener('click', (event) => {
			const modal = event.target.closest('.card-plan__modal');

			if (modal) {
				modal.style.display = 'none';
			}
		});
	});

	window.addEventListener('click', (event) => {
		if (event.target.classList.contains('card-plan__modal')) {
			event.target.style.display = 'none';
		}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const stepForms = document.querySelectorAll('.step-form');
	const nextButtons = document.querySelectorAll('.next-button');
	const previousButtons = document.querySelectorAll('.previous-button');
	const stepIndicators = document.querySelectorAll('.step-indicators .step');
	const optionButtons = document.querySelectorAll('.step-button-btn');

	const openModalButton = document.getElementById('open-modal');
	const modal = document.getElementById('modal-indicador');

	const closeModal = () => {
		const modalContainer = document.querySelector('.modal-stepper-container');
		modalContainer.classList.remove('active');
	};

	const closeButtons = document.querySelectorAll('#close-indicador-modal');

	closeButtons.forEach((button) => {
		button.addEventListener('click', () => {
			closeModal();
		});
	});

	// Função para abrir o modal
	function openModal() {
		modal.classList.add('active');
		updateSteps(1);
	}

	// Adicionar manipuladores de eventos para abrir e fechar o modal

	if (openModalButton) {
		openModalButton.addEventListener('click', openModal);
	}
	function updateSteps(step) {
		stepForms.forEach((form, index) => {
			form.classList.toggle('active', index === step - 1);
		});

		// Encontrar todos os elementos ".step-indicators"
		const stepIndicatorsContainers =
			document.querySelectorAll('.step-indicators');

		stepIndicatorsContainers.forEach((stepIndicators) => {
			stepIndicators.querySelectorAll('.step').forEach((indicator, index) => {
				if (index < step) {
					indicator.classList.add('active');
				} else {
					indicator.classList.remove('active');
				}
			});
		});
	}
	nextButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const currentStep = Array.from(stepForms).findIndex((form) =>
				form.classList.contains('active')
			);
			updateSteps(currentStep + 2);
		});
	});

	previousButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const currentStep = Array.from(stepForms).findIndex((form) =>
				form.classList.contains('active')
			);
			updateSteps(currentStep);
		});
	});

	// Adicionar manipulador de eventos para botões de opção
	optionButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const currentStep = Array.from(stepForms).findIndex((form) =>
				form.classList.contains('active')
			);
			updateSteps(currentStep + 2);
		});
	});
});

//Parceiros

const btnOpenModalPartners = document.querySelectorAll('.open-modal-partners');
const btnCloseModalPartners = document.querySelectorAll(
	'.close-modal-partners'
);
if (btnOpenModalPartners.length > 0) {
	btnOpenModalPartners.forEach((button) => {
		button.addEventListener('click', (event) => {
			const targetModalId = document.querySelector('#modal-partner');

			if (targetModalId) {
				targetModalId.style.display = 'flex';
			}
		});
	});
}

if (btnCloseModalPartners.length > 0) {
	btnCloseModalPartners.forEach((button) => {
		button.addEventListener('click', (event) => {
			const targetModalId = document.querySelector('#modal-partner');

			if (targetModalId) {
				targetModalId.style.display = 'none';
			}
		});
	});
}
