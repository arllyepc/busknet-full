"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//Comportamentos para o menu .
function toggleChevronIcon(menuItem) {
  var chevronIcon = menuItem.querySelector('iconify-icon');

  if (chevronIcon) {
    chevronIcon.classList.toggle('chevron-up');
  }
}

function isMobile() {
  // Você pode ajustar o valor 768 para corresponder à largura de tela que define um dispositivo móvel em seu design
  return window.innerWidth <= 768;
}

document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.menu-item');
  document.addEventListener('click', function (event) {
    menuItems.forEach(function (menuItem) {
      var dropdownMenu = menuItem.querySelector('.dropdown-menu');

      if (dropdownMenu && isMobile()) {
        if (!dropdownMenu.contains(event.target) && !menuItem.contains(event.target)) {
          dropdownMenu.style.display = 'none';
        }
      }
    });
  });
  menuItems.forEach(function (menuItem) {
    if (!isMobile()) {
      menuItem.addEventListener('mouseenter', function () {
        var dropdownMenu = menuItem.querySelector('.dropdown-menu');

        if (dropdownMenu) {
          dropdownMenu.style.display = 'block';
          toggleChevronIcon(menuItem);
        }
      });
      menuItem.addEventListener('mouseleave', function () {
        var dropdownMenu = menuItem.querySelector('.dropdown-menu');

        if (dropdownMenu) {
          dropdownMenu.style.display = 'none';
          toggleChevronIcon(menuItem);
        }
      });
    }

    menuItem.addEventListener('click', function (event) {
      if (isMobile()) {
        event.preventDefault(); // Adicionado para evitar que o evento de clique seja propagado para elementos de âncora

        var dropdownMenu = menuItem.querySelector('.dropdown-menu');

        if (dropdownMenu) {
          if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
          } else {
            dropdownMenu.style.display = 'block';
          }

          toggleChevronIcon(menuItem);
        } // Previne a propagação do evento de clique para elementos pais


        event.stopPropagation();
      }
    });
  });
}); //menu mobile

var menuBtn = document.querySelector('.menu-btn');
var navbarMobile = document.querySelector('.nav-mobile__nav');
var menuOpen = false;
menuBtn.addEventListener('click', function () {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navbarMobile.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navbarMobile.classList.remove('active');
    menuOpen = false;
  }
}); //accordion
// selecionando todos os elementos de cabeçalho do accordion

var accordionHeaders = document.querySelectorAll('.s-faq__accordion-header');

if (accordionHeaders.length > 0) {
  // adicionando a classe CSS "active" ao primeiro elemento de cabeçalho do accordion
  accordionHeaders[0].nextElementSibling.classList.add('active');
} // adicionando um ouvinte de evento de clique a cada elemento de cabeçalho do accordion


accordionHeaders.forEach(function (header) {
  header.addEventListener('click', function () {
    header.classList.toggle('active'); // selecionando o elemento de conteúdo associado com o cabeçalho clicado

    var content = header.nextElementSibling; // alternando a classe CSS "active" no elemento de conteúdo para controlar sua visibilidade

    content.classList.toggle('active');
  });
}); //SWIPER

var slide_plans = new Swiper('.slide-plans', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  grabCursor: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    910: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1210: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
/* PÁGINA DE RESULTADOS */

/* FILTROS SUPERIORES DE VELOCIDADE E PREÇO DA PÁGINA DE RESULTADOS */
// Seleciona os elementos

var mainBtn = document.querySelector('.results-filter-price__btn');
var othersDiv = document.querySelector('.results-filter-price__others');
var priceBtns = document.querySelectorAll('.others-group-price .others-group__btn');
var velocityBtns = document.querySelectorAll('.others-group-velocity .others-group__btn'); // Adiciona a classe 'active' ao clicar em results-filter-price__btn

if (mainBtn) {
  mainBtn.addEventListener('click', function () {
    othersDiv.classList.toggle('active');
  });
} // Função para lidar com a troca de botões ativos


function handleActiveBtn(targetBtn) {
  var allBtns = [].concat(_toConsumableArray(priceBtns), _toConsumableArray(velocityBtns));
  allBtns.forEach(function (btn) {
    if (btn === targetBtn) {
      btn.classList.add('active');
      mainBtn.textContent = btn.textContent;
    } else {
      btn.classList.remove('active');
    }
  });
} // Adiciona a classe 'active' ao clicar em um dos botões de others-group-price e others-group-velocity


priceBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    handleActiveBtn(btn);
  });
});
velocityBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    handleActiveBtn(btn);
  });
});
/* Botão de 'ver detalhhes' no card de resultados de busca */

document.querySelectorAll('.btn-details-desktop, .btn-details-mobile').forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    var card = event.target.closest('.s-search-results__card');
    var cardFooter = card.querySelector('.card__footer');
    var showDetailsText = 'Ver detalhes';
    var hideDetailsText = 'Esconder detalhes';
    cardFooter.classList.toggle('active');

    if (event.target.innerHTML.trim() === showDetailsText) {
      event.target.innerHTML = hideDetailsText;
    } else {
      event.target.innerHTML = showDetailsText;
    }
  });
}); // Seleciona todos os elementos com a classe "aside-group__filter"

var filterItems = document.querySelectorAll('.aside-group__filter'); // Adiciona um event listener a cada elemento

filterItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // Verifica se o item clicado já tem a classe "active"
    var isActive = item.classList.contains('active'); // Remove a classe "active" dos irmãos do elemento clicado

    item.parentNode.childNodes.forEach(function (sibling) {
      if (sibling.nodeType === Node.ELEMENT_NODE) {
        sibling.classList.remove('active');
      }
    }); // Se o elemento clicado já possui a classe "active", a remove
    // Caso contrário, adiciona a classe "active"

    if (isActive) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  });
});
var btnSearch = document.querySelector('#btn-search-plans');
var modalSearch = document.querySelector('#modal-searching-plan');

if (btnSearch) {
  btnSearch.addEventListener('click', function (event) {
    event.preventDefault();
    modalSearch.classList.add('active'); // Defina a URL para a qual você deseja redirecionar e o tempo de espera em milissegundos

    var redirectUrl = 'https://example.com';
    var timeoutDuration = 5000; // 5000ms = 5s
    // Redireciona para a URL após o tempo de espera

    setTimeout(function () {
      window.location.href = redirectUrl;
    }, timeoutDuration);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var showModalButtons = document.querySelectorAll('.show-details');
  var closeButtons = document.querySelectorAll('.close-btn');
  showModalButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var targetModalId = event.target.getAttribute('data-target-modal');
      var targetModal = document.getElementById(targetModalId);

      if (targetModal) {
        targetModal.style.display = 'flex';
      }
    });
  });
  closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener('click', function (event) {
      var modal = event.target.closest('.card-plan__modal');

      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
  window.addEventListener('click', function (event) {
    if (event.target.classList.contains('card-plan__modal')) {
      event.target.style.display = 'none';
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var stepForms = document.querySelectorAll('.step-form');
  var nextButtons = document.querySelectorAll('.next-button');
  var previousButtons = document.querySelectorAll('.previous-button');
  var stepIndicators = document.querySelectorAll('.step-indicators .step');
  var optionButtons = document.querySelectorAll('.step-button-btn');
  var openModalButton = document.getElementById('open-modal');
  var modal = document.getElementById('modal-indicador');

  var closeModal = function closeModal() {
    var modalContainer = document.querySelector('.modal-stepper-container');
    modalContainer.classList.remove('active');
  };

  var closeButtons = document.querySelectorAll('#close-indicador-modal');
  closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      closeModal();
    });
  }); // Função para abrir o modal

  function openModal() {
    modal.classList.add('active');
    updateSteps(1);
  } // Adicionar manipuladores de eventos para abrir e fechar o modal


  openModalButton.addEventListener('click', openModal);

  function updateSteps(step) {
    stepForms.forEach(function (form, index) {
      form.classList.toggle('active', index === step - 1);
    }); // Encontrar todos os elementos ".step-indicators"

    var stepIndicatorsContainers = document.querySelectorAll('.step-indicators');
    stepIndicatorsContainers.forEach(function (stepIndicators) {
      stepIndicators.querySelectorAll('.step').forEach(function (indicator, index) {
        if (index < step) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    });
  }

  nextButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var currentStep = Array.from(stepForms).findIndex(function (form) {
        return form.classList.contains('active');
      });
      updateSteps(currentStep + 2);
    });
  });
  previousButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var currentStep = Array.from(stepForms).findIndex(function (form) {
        return form.classList.contains('active');
      });
      updateSteps(currentStep);
    });
  }); // Adicionar manipulador de eventos para botões de opção

  optionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var currentStep = Array.from(stepForms).findIndex(function (form) {
        return form.classList.contains('active');
      });
      updateSteps(currentStep + 2);
    });
  });
});