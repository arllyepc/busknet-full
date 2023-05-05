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
      slidesPerView: 4,
      spaceBetween: 10
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

mainBtn.addEventListener('click', function () {
  othersDiv.classList.toggle('active');
}); // Função para lidar com a troca de botões ativos

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