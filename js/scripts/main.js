//Comportamentos para o menu

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
accordionHeaders[0].nextElementSibling.classList.add('active');
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
