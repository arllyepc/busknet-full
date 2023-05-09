//Comportamentos para o menu .

function toggleChevronIcon(menuItem) {
  const chevronIcon = menuItem.querySelector("iconify-icon");
  if (chevronIcon) {
    chevronIcon.classList.toggle("chevron-up");
  }
}

function isMobile() {
  // Você pode ajustar o valor 768 para corresponder à largura de tela que define um dispositivo móvel em seu design
  return window.innerWidth <= 768;
}

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");

  document.addEventListener("click", (event) => {
    menuItems.forEach((menuItem) => {
      const dropdownMenu = menuItem.querySelector(".dropdown-menu");
      if (dropdownMenu && isMobile()) {
        if (
          !dropdownMenu.contains(event.target) &&
          !menuItem.contains(event.target)
        ) {
          dropdownMenu.style.display = "none";
        }
      }
    });
  });

  menuItems.forEach((menuItem) => {
    if (!isMobile()) {
      menuItem.addEventListener("mouseenter", () => {
        const dropdownMenu = menuItem.querySelector(".dropdown-menu");
        if (dropdownMenu) {
          dropdownMenu.style.display = "block";
          toggleChevronIcon(menuItem);
        }
      });

      menuItem.addEventListener("mouseleave", () => {
        const dropdownMenu = menuItem.querySelector(".dropdown-menu");
        if (dropdownMenu) {
          dropdownMenu.style.display = "none";
          toggleChevronIcon(menuItem);
        }
      });
    }

    menuItem.addEventListener("click", (event) => {
      if (isMobile()) {
        event.preventDefault(); // Adicionado para evitar que o evento de clique seja propagado para elementos de âncora

        const dropdownMenu = menuItem.querySelector(".dropdown-menu");
        if (dropdownMenu) {
          if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
          } else {
            dropdownMenu.style.display = "block";
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

const menuBtn = document.querySelector(".menu-btn");
const navbarMobile = document.querySelector(".nav-mobile__nav");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navbarMobile.classList.add("active");

    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navbarMobile.classList.remove("active");

    menuOpen = false;
  }
});

//accordion

// selecionando todos os elementos de cabeçalho do accordion
const accordionHeaders = document.querySelectorAll(".s-faq__accordion-header");
if (accordionHeaders.length > 0) {
  // adicionando a classe CSS "active" ao primeiro elemento de cabeçalho do accordion
  accordionHeaders[0].nextElementSibling.classList.add("active");
}

// adicionando um ouvinte de evento de clique a cada elemento de cabeçalho do accordion
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    // selecionando o elemento de conteúdo associado com o cabeçalho clicado
    const content = header.nextElementSibling;

    // alternando a classe CSS "active" no elemento de conteúdo para controlar sua visibilidade
    content.classList.toggle("active");
  });
});

//SWIPER

var slide_plans = new Swiper(".slide-plans", {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
const mainBtn = document.querySelector(".results-filter-price__btn");
const othersDiv = document.querySelector(".results-filter-price__others");
const priceBtns = document.querySelectorAll(
  ".others-group-price .others-group__btn"
);
const velocityBtns = document.querySelectorAll(
  ".others-group-velocity .others-group__btn"
);

// Adiciona a classe 'active' ao clicar em results-filter-price__btn
if (mainBtn) {
  mainBtn.addEventListener("click", () => {
    othersDiv.classList.toggle("active");
  });
}

// Função para lidar com a troca de botões ativos
function handleActiveBtn(targetBtn) {
  const allBtns = [...priceBtns, ...velocityBtns];

  allBtns.forEach((btn) => {
    if (btn === targetBtn) {
      btn.classList.add("active");
      mainBtn.textContent = btn.textContent;
    } else {
      btn.classList.remove("active");
    }
  });
}

// Adiciona a classe 'active' ao clicar em um dos botões de others-group-price e others-group-velocity
priceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    handleActiveBtn(btn);
  });
});

velocityBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    handleActiveBtn(btn);
  });
});

/* Botão de 'ver detalhhes' no card de resultados de busca */

document
  .querySelectorAll(".btn-details-desktop, .btn-details-mobile")
  .forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const card = event.target.closest(".s-search-results__card");
      const cardFooter = card.querySelector(".card__footer");
      const showDetailsText = "Ver detalhes";
      const hideDetailsText = "Esconder detalhes";

      cardFooter.classList.toggle("active");

      if (event.target.innerHTML.trim() === showDetailsText) {
        event.target.innerHTML = hideDetailsText;
      } else {
        event.target.innerHTML = showDetailsText;
      }
    });
  });

// Seleciona todos os elementos com a classe "aside-group__filter"
const filterItems = document.querySelectorAll(".aside-group__filter");

// Adiciona um event listener a cada elemento
filterItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Verifica se o item clicado já tem a classe "active"
    const isActive = item.classList.contains("active");

    // Remove a classe "active" dos irmãos do elemento clicado
    item.parentNode.childNodes.forEach((sibling) => {
      if (sibling.nodeType === Node.ELEMENT_NODE) {
        sibling.classList.remove("active");
      }
    });

    // Se o elemento clicado já possui a classe "active", a remove
    // Caso contrário, adiciona a classe "active"
    if (isActive) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
});

let btnSearch = document.querySelector("#btn-search-plans");
let modalSearch = document.querySelector("#modal-searching-plan");

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
  modalSearch.classList.add("active");

  // Defina a URL para a qual você deseja redirecionar e o tempo de espera em milissegundos
  let redirectUrl = "https://example.com";
  let timeoutDuration = 5000; // 5000ms = 5s

  // Redireciona para a URL após o tempo de espera
  setTimeout(() => {
    window.location.href = redirectUrl;
  }, timeoutDuration);
});

document.addEventListener("DOMContentLoaded", () => {
  const showDetailsButtons = document.querySelectorAll(".show-details");
  const modals = document.querySelectorAll(".card-plan__modal");

  showDetailsButtons.forEach((button, index) => {
    button.setAttribute("data-card-index", index);

    button.addEventListener("click", (event) => {
      const cardIndex = event.target.getAttribute("data-card-index");
      modals[cardIndex].classList.add("show");
    });
  });

  modals.forEach((modal) => {
    const closeBtn = modal.querySelector(".close-btn");

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    // Fechar o modal ao clicar fora do conteúdo
    modal.addEventListener("click", (event) => {
      const modalContent = modal.querySelector(".modal-content");
      if (!modalContent.contains(event.target)) {
        modal.classList.remove("show");
      }
    });
  });
});

/* document.addEventListener("DOMContentLoaded", () => {
  const showDetailsButtons = document.querySelectorAll(".show-details");
  const modal = document.querySelector("#planModal");
  const modalContent = modal.querySelector(".modal-content");
  const closeModalBtn = modal.querySelector(".close-btn");

  showDetailsButtons.forEach((button, index) => {
    button.setAttribute("data-card-index", index);

    button.addEventListener("click", (event) => {
      const cardIndex = event.target.getAttribute("data-card-index");
      const card = document.querySelectorAll(".card-plan")[cardIndex];
      const modalList = card.querySelector(".modal__list").cloneNode(true);

      // Limpar o conteúdo do modal e preencher com o conteúdo do card clicado
      modalContent.querySelector(".modal__list").innerHTML = "";
      modalContent.querySelector(".modal__list").appendChild(modalList);

      modal.classList.add("show");
    });
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Fechar o modal ao clicar fora do conteúdo
  modal.addEventListener("click", (event) => {
    if (!modalContent.contains(event.target)) {
      modal.classList.remove("show");
    }
  });
});
 */
