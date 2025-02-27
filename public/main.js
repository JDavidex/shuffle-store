/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../assets/fonts/aeonik-trial.woff */ \"./assets/fonts/aeonik-trial.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../assets/fonts/countach-trial.woff */ \"./assets/fonts/countach-trial.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../assets/bg.webp */ \"./assets/bg.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../assets/bg-circle.svg */ \"./assets/bg-circle.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n/********** Tipografías **********/\n@font-face {\n  font-family: \"Aeonik\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"woff\");\n}\n@font-face {\n  font-family: \"Countach\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff\");\n}\n/********** Variables **********/\n:root {\n  /* Fuentes */\n  --font-aeonik: \"Aeonik\", sans-serif;\n  --font-countach: \"Countach\", sans-serif;\n  /* Colores */\n  --bg-purple: #762CFB;\n  --bg-purple-hover: #813EF9;\n  --text-light: #FFFFFF;\n  --border-purple: #762CFB;\n  --border-purple-hover: #968FF3;\n  /* Espaciado */\n  --space-xs: 0.5rem;\n  --space-sm: 1rem;\n  --space-md: 1.5rem;\n  --space-lg: 2rem;\n  --space-xl: 2.5rem;\n  /* Animaciones */\n  --transition-3s: 0.3s ease;\n  --transition-5s: 0.5s ease;\n}\n\n::selection {\n  background: #813EF9;\n}\n\n/********** Estilos base **********/\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  color: var(--text-light);\n  font-family: var(--font-aeonik);\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-color: rgb(23, 23, 23);\n  margin: 0;\n  padding: 0;\n}\n\n/********** Botones **********/\n.btn {\n  display: flex;\n  font-size: 24px;\n  font-family: var(--font-countach);\n  padding: var(--space-sm) var(--space-xl);\n  text-transform: uppercase;\n  text-decoration: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color var(--transition-3s);\n}\n\n.btn--primary {\n  color: var(--text-light);\n  background-color: var(--bg-purple);\n}\n\n.btn--primary:hover {\n  background-color: var(--bg-purple-hover);\n}\n\n.scroll-top-btn {\n  position: fixed;\n  z-index: 999;\n  bottom: 50vh;\n  right: 0;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 5px 0 0 5px;\n  font-size: 2rem;\n  font-weight: bold;\n  background-color: var(--bg-purple);\n  color: var(--text-light);\n  cursor: pointer;\n  outline: 0;\n  border: 0;\n  transform: translateX(0);\n  transition: all 0.3s ease-out;\n}\n\n.scroll-top-btn:hover {\n  background-color: var(--bg-purple-hover);\n}\n\n.hidden {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateX(100%);\n}\n\n/* Media Queries */\n@media (max-width: 768px) {\n  .btn {\n    padding: var(--space-sm) var(--space-md);\n  }\n}\n/********** Barra superior **********/\n.top-bar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: var(--bg-purple);\n  height: 32px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  z-index: 1000;\n}\n\n.top-bar__marquee {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.top-bar__content {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  gap: var(--space-xs);\n  animation: marquee-scroll 50s linear infinite;\n  will-change: transform;\n}\n\n.top-bar__text {\n  display: inline-block;\n}\n\n.top-bar__icon {\n  font-size: 16px;\n  color: var(--text-light);\n  opacity: 0.5;\n}\n\n/* Overlays */\n.top-bar__overlay {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 50px;\n  z-index: 2;\n  pointer-events: none;\n}\n\n.top-bar__overlay--left {\n  left: 0;\n  background: linear-gradient(to right, var(--bg-purple), transparent);\n}\n\n.top-bar__overlay--right {\n  right: 0;\n  background: linear-gradient(to left, var(--bg-purple), transparent);\n}\n\n/* Animaciones */\n@keyframes marquee-scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n/* Pausar la animación */\n.top-bar:hover .top-bar__content {\n  animation-play-state: paused;\n}\n\n/********** Barra de navegación **********/\n.navbar {\n  position: sticky;\n  top: 32px;\n  z-index: 1000;\n  padding: var(--space-sm) 0;\n  transition: background var(--transition-3s);\n}\n\n.navbar__container {\n  width: 100%;\n  max-width: 1320px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 auto;\n}\n\n.navbar__left {\n  display: flex;\n  align-items: center;\n  gap: var(--space-xs);\n}\n\n.navbar__logo a {\n  text-decoration: none;\n}\n\n.navbar__logo svg {\n  display: flex;\n}\n\n/* Métodos de pago */\n.navbar__payments {\n  display: flex;\n  align-items: center;\n  gap: var(--space-xs);\n  background: rgb(21, 21, 21);\n  padding: var(--space-xs) var(--space-sm);\n  border-radius: 9999px;\n  border: 1px solid var(--border-purple);\n  transition: border var(--transition-3s);\n}\n\n.navbar__payments:hover {\n  border-color: var(--border-purple-hover);\n}\n\n.navbar__text {\n  font-size: 12px;\n}\n\n.navbar__icons {\n  display: flex;\n  gap: var(--space-xs);\n}\n\n.navbar__icons svg {\n  width: 26px;\n  height: 26px;\n}\n\n/* Menú */\n.navbar__menu {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n}\n\n.navbar__link {\n  text-decoration: none;\n  color: var(--text-light);\n  transition: opacity var(--transition-3s);\n}\n\n.navbar__link:hover {\n  opacity: 0.7;\n}\n\n/* Carrito */\n.navbar__cart {\n  min-width: 60px;\n  padding: var(--space-xs) var(--space-sm);\n  border: none;\n  transition: background var(--transition-3s);\n}\n\n/* Glassmorphism */\n.navbar.scrolled {\n  background: rgba(0, 0, 0, 0.05);\n  backdrop-filter: blur(10px);\n}\n\n/* Menú hamburguesa */\n.navbar__menu-button {\n  display: none;\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n\n.navbar__menu-line {\n  display: block;\n  width: 24px;\n  height: 2px;\n  background-color: var(--bg-purple);\n  margin: 6px 0;\n}\n\n.header__logo-text {\n  position: relative;\n  color: var(--text-light);\n  font-size: 18px;\n  font-weight: 400;\n  font-family: var(--font-countach);\n}\n\n.header__logo-text::before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 16px;\n  background-color: var(--bg-purple);\n  margin-right: 20px;\n  left: -8px;\n  top: 60%;\n  transform: translateY(-50%);\n}\n\n/* Menú móvil */\n.mobile-menu {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  width: 50vw;\n  background-color: var(--bg-purple);\n  z-index: 1000;\n  padding: var(--space-xl);\n  border-radius: 0 5px 5px 0;\n  transform: translateX(-100%);\n  transition: transform var(--transition-3s);\n}\n\n.mobile-menu.active {\n  transform: translateX(0);\n}\n\n.mobile-menu__close {\n  position: absolute;\n  top: var(--space-sm);\n  right: var(--space-sm);\n  background: none;\n  border: none;\n  color: var(--text-light);\n  font-size: 24px;\n  cursor: pointer;\n  padding: var(--space-xs);\n}\n\n.mobile-menu__link {\n  color: var(--text-light);\n  font-family: var(--font-countach);\n  font-size: 32px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.mobile-menu__payments {\n  display: flex;\n  flex-direction: column;\n  margin-top: var(--space-md);\n  gap: var(--space-xs);\n  font-size: 14px;\n}\n\n.mobile-menu__payments svg {\n  width: 28px;\n  height: 28px;\n}\n\n@media (min-width: 769px) {\n  .mobile-menu {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .navbar {\n    padding: 12px var(--space-sm);\n    position: fixed;\n    left: 0;\n    right: 0;\n  }\n  .navbar__menu-button {\n    display: block;\n  }\n  .navbar__logo svg,\n  .navbar__logo img {\n    height: 32px;\n    width: auto;\n  }\n  .navbar__payments,\n  .navbar__menu .navbar__link {\n    display: none;\n  }\n  .navbar__cart {\n    width: 40px;\n    height: 40px;\n    min-width: unset;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n/********** Banner **********/\n.hero-banner {\n  position: relative;\n  max-width: 1320px;\n  margin: 0 auto;\n  margin-top: 55px;\n  border-radius: 5px;\n  height: 580px;\n  background-size: cover;\n  background-position: center;\n}\n\n/* Botón del banner */\n.hero-banner__button {\n  position: absolute;\n  left: var(--space-lg);\n  bottom: var(--space-lg);\n  font-size: 33px;\n  transition: background var(--transition-3s);\n}\n\n.hero-banner__button:hover {\n  background-color: var(--bg-purple-hover);\n}\n\n/* Marquee */\n.hero-banner__marquee {\n  position: relative;\n  width: 100%;\n  font-family: var(--font-countach);\n  color: var(--text-light);\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 34px;\n  margin-bottom: 44px;\n}\n\n.marquee__content {\n  display: inline-flex;\n  align-items: center;\n  font-size: 88px;\n  font-weight: 700;\n  text-transform: uppercase;\n  gap: var(--space-md);\n  animation: marquee-scroll 50s linear infinite;\n  will-change: transform;\n}\n\n.marquee__divider {\n  background: radial-gradient(circle, #5012E0, #C0B0D0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n/* Overlays */\n.hero-banner__overlay {\n  position: absolute;\n  top: 55%;\n  height: 90%;\n  width: 50px;\n  z-index: 2;\n  pointer-events: none;\n  transform: translateY(-50%);\n}\n\n.hero-banner__overlay--left {\n  left: 0;\n  background: linear-gradient(to right, #232128, transparent);\n}\n\n.hero-banner__overlay--right {\n  right: 0;\n  background: linear-gradient(to left, #232128, transparent);\n}\n\n/* Media Queries */\n@media (max-width: 768px) {\n  .hero-banner {\n    height: 532px;\n    margin: 0 var(--space-sm);\n    margin-top: 115px;\n  }\n  .hero-banner__button {\n    font-size: 24px;\n    min-width: 200px;\n    left: 50%;\n    transform: translateX(-50%);\n    justify-content: center;\n  }\n  .hero-banner__marquee {\n    font-size: 48px;\n  }\n  .marquee__divider {\n    font-size: 84px;\n  }\n}\n/********** Productos destacados **********/\n.featured-products {\n  margin: 0 auto;\n  max-width: 1320px;\n}\n\n.featured-products__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--space-sm);\n  margin-bottom: 35px;\n}\n\n.featured-products__item--hidden {\n  display: none;\n}\n\n.featured-products__item--fade-in {\n  display: block;\n  opacity: 0;\n  animation: fadeIn 0.5s ease-in-out forwards;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/* Botón \"Ver todos\" */\n.featured-products__button {\n  font-size: 33px;\n  border: none;\n  margin: 0 auto;\n  padding: 15px 24px;\n}\n\n/* Estilos para móviles */\n.desktop-only {\n  display: block;\n}\n\n.mobile-only {\n  display: none;\n}\n\n/* Indicador de scroll */\n.scroll-indicator {\n  margin: 20px auto;\n  width: 50%;\n}\n\n.scroll-indicator__bar {\n  background: rgba(118, 44, 251, 0.2);\n  height: 4px;\n  border-radius: 2px;\n}\n\n.scroll-indicator__progress {\n  background: var(--bg-purple);\n  width: 0%;\n  height: 100%;\n  border-radius: 2px;\n  transition: width var(--transition-3s);\n}\n\n/* Producto */\n.product-card {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n/* Imagen del producto */\n.product-card__image {\n  position: relative;\n  height: 400px;\n  overflow: hidden;\n  border-radius: 5px;\n  border: 4px solid var(--border-purple);\n  cursor: pointer;\n}\n\n.product-card__image:hover {\n  border: 4px solid var(--border-purple-hover);\n}\n\n.product-card__image img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--transition-5s);\n}\n\n.product-card:hover .product-card__image img {\n  transform: scale(1.08);\n}\n\n/* Información del producto */\n.product-card__info {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 25px 0 0 0;\n}\n\n.product-card__details {\n  flex: 1;\n}\n\n.product-card__title {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 4px 0;\n  color: var(--text-light);\n}\n\n.product-card__price {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 10px 0;\n  color: var(--text-light);\n}\n\n/* Etiquetas */\n.product-card__tags {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  gap: 5px;\n}\n\n.product-card__tags li {\n  background-color: #333333;\n  color: #CCCCCC;\n  padding: 3px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n/* Botón \"Agregar al carrito\" */\n.product-card__add-to-cart {\n  background-color: var(--bg-purple);\n  border: none;\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color var(--transition-3s);\n}\n\n.product-card__add-to-cart svg {\n  width: 30px;\n}\n\n.product-card__add-to-cart:hover {\n  background-color: var(--bg-purple-hover);\n}\n\n/* Media Queries */\n@media (max-width: 768px) {\n  .featured-products {\n    margin: 0 var(--space-sm);\n    padding: 0 var(--space-sm);\n  }\n  .featured-products__list {\n    display: flex;\n    gap: 15px;\n    overflow-x: auto;\n    scroll-snap-type: x mandatory;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    margin: 0 -1rem;\n    padding: 0 1rem;\n  }\n  .featured-products__list::-webkit-scrollbar {\n    display: none;\n  }\n  .featured-products__item {\n    flex: 0 0 75%;\n    scroll-snap-align: start;\n  }\n  .product-card__image {\n    height: 270px;\n  }\n  .product-card__title,\n  .product-card__price {\n    font-size: 12px;\n  }\n  .product-card__add-to-cart {\n    width: 38px;\n    height: 38px;\n  }\n  .product-card__add-to-cart svg {\n    width: 20px;\n  }\n  .featured-products__item--hidden {\n    display: block;\n  }\n  .desktop-only {\n    display: none;\n  }\n  .mobile-only {\n    display: block;\n  }\n}\n/********** Últimas colecciones **********/\n.latest-collection {\n  margin: 0 auto;\n  max-width: 1320px;\n  text-align: center;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  background-repeat: no-repeat;\n  background-position: top;\n  padding-top: 1px;\n}\n\n.latest-collection__title {\n  font-size: 88px;\n  font-family: var(--font-countach);\n  text-transform: uppercase;\n  margin-bottom: var(--space-lg);\n}\n\n.divider {\n  color: #9A77F5;\n}\n\n.latest-collection__grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--space-md);\n}\n\n.latest-collection__item {\n  position: relative;\n  overflow: hidden;\n  border-radius: 5px;\n  width: 100%;\n  height: 400px;\n}\n\n.latest-collection__link {\n  color: var(--text-light);\n}\n\n.latest-collection__image {\n  width: 100%;\n  height: 100%;\n  transform: scale(1.4);\n  object-fit: cover;\n  transition: transform var(--transition-5s);\n}\n\n.latest-collection__item:hover .latest-collection__image {\n  transform: scale(1.5);\n}\n\n.latest-collection__overlay {\n  position: absolute;\n  bottom: var(--space-sm);\n  left: var(--space-lg);\n}\n\n.latest-collection__name {\n  font-size: 32px;\n}\n\n/* Imagen inferior */\n.latest-collection__banner {\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 50px;\n}\n\n.latest-collection__banner-image {\n  border-radius: 5px;\n  width: 100%;\n  height: 473px;\n  object-fit: cover;\n}\n\n@media (max-width: 768px) {\n  .latest-collection__title {\n    display: flex;\n    font-size: 60px;\n    padding: 0 var(--space-sm);\n    justify-content: center;\n  }\n  .latest-collection__grid {\n    grid-template-columns: repeat(1, 1fr);\n    margin: 0 var(--space-sm);\n  }\n  .latest-collection__image {\n    transform: scale(1);\n  }\n  .latest-collection__name {\n    font-size: 1.5rem;\n  }\n  .latest-collection__banner {\n    width: calc(100% - 2 * var(--space-sm));\n  }\n}\n/********** Pie de página **********/\nfooter {\n  padding: var(--space-md) 0;\n}\n\n.footer__container {\n  max-width: 1320px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n\n.footer__column {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Columna izquierda */\n.footer__logo {\n  display: flex;\n  gap: var(--space-md);\n}\n\n.footer__logo-text {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 34px;\n  font-family: var(--font-countach);\n}\n\n.footer__logo-text::before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 15px;\n  background-color: var(--bg-purple);\n  margin-right: 20px;\n  left: -20px;\n  top: 60%;\n  transform: translateY(-50%);\n}\n\n.footer__container {\n  line-height: 20px;\n}\n\n.footer__info {\n  font-size: 12px;\n}\n\n.footer__copyright {\n  margin-top: 30px;\n  width: 180px;\n}\n\n.footer__email {\n  color: var(--text-light);\n  text-decoration: none;\n}\n\n.footer__email:hover {\n  opacity: 0.7;\n}\n\n/* Columna central */\n.footer__links {\n  list-style: none;\n  padding: 0;\n}\n\n.footer__links--primary {\n  display: flex;\n  justify-content: center;\n  gap: var(--space-lg);\n  font-size: 24px;\n}\n\n.footer__link {\n  color: var(--text-light);\n  text-decoration: none;\n  position: relative;\n  transition: opacity var(--transition-3s);\n}\n\n.footer__link::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 3px;\n  background: radial-gradient(circle, #FFFFFF, #5012E0);\n  position: absolute;\n  bottom: -5px;\n  left: 0;\n  transform: scaleX(0);\n  transition: transform var(--transition-3s);\n}\n\n.footer__link:hover::after {\n  transform: scaleX(1);\n}\n\n.footer__links--primary .footer__item:first-child .footer__link::after {\n  transform: scaleX(1);\n}\n\n.footer__links.footer__links--secondary {\n  display: flex;\n  justify-content: center;\n  gap: var(--space-lg);\n  font-size: 12px;\n  margin-top: 50px;\n}\n\n.footer__payments {\n  display: flex;\n  gap: var(--space-sm);\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.footer__payments-text {\n  font-size: 12px;\n}\n\n/* Columna derecha */\n.footer__column--newsletter {\n  justify-content: space-around;\n  align-items: end;\n}\n\n.footer__newsletter-text {\n  font-size: 12px;\n}\n\n.footer__form {\n  position: relative;\n  display: inline-block;\n}\n\n.footer__form input {\n  padding: 10px 40px 10px 20px;\n  border: none;\n  border-radius: 5px;\n  color: var(--text-light);\n  background: rgb(35, 33, 40);\n  font-size: 16px;\n}\n\n.footer__form .footer__arrow {\n  position: absolute;\n  right: 10px;\n  top: 54%;\n  transform: translateY(-50%);\n  color: var(--bg-purple);\n  pointer-events: none;\n}\n\n.footer__form input {\n  outline: none;\n  border: 1px solid transparent;\n}\n\n.footer__form input:focus {\n  border-color: var(--border-purple-hover);\n}\n\n.footer__social-link {\n  color: var(--text-light);\n  text-decoration: none;\n  transition: opacity var(--transition-3s);\n}\n\n.footer__social-link:hover {\n  opacity: 0.7;\n}\n\n.footer__social-bottom {\n  justify-content: end;\n  font-size: 12px;\n  display: flex;\n  gap: 28px;\n  align-items: center;\n}\n\n/* Media Queries */\n@media (max-width: 768px) {\n  footer {\n    display: block;\n    padding: var(--space-sm);\n    padding-top: 50px;\n  }\n  .footer__container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n  }\n  .footer__links--primary {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-xl);\n    font-size: 24px;\n    margin: 0;\n    text-align: left;\n  }\n  .footer__links.footer__links--secondary {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-xs);\n  }\n  .footer__column {\n    justify-content: flex-start;\n  }\n  .footer__column--logo {\n    order: 1;\n  }\n  .footer__copyright {\n    width: auto;\n  }\n  .footer__column--newsletter {\n    display: block;\n  }\n  .footer__newsletter {\n    margin: var(--space-lg) 0;\n  }\n  .footer__form {\n    width: 100%;\n  }\n  .footer__form input {\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .footer__nav {\n    text-align: left;\n  }\n  .footer__logo {\n    position: absolute;\n    bottom: 5.5rem;\n  }\n  .footer__social-bottom {\n    display: flex;\n    flex-direction: column;\n    margin-top: var(--space-xl);\n    gap: var(--space-sm);\n    align-items: end;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _scroll_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll_handler.js */ \"./src/scroll_handler.js\");\n/* harmony import */ var _scroll_handler_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scroll_handler_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo_switcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo_switcher.js */ \"./src/logo_switcher.js\");\n/* harmony import */ var _logo_switcher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logo_switcher_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scroll_to_top_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll_to_top.js */ \"./src/scroll_to_top.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"Hello world\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", (e) => {\r\n  (0,_scroll_to_top_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\".scroll-top-btn\");\r\n});\r\n\n\n//# sourceURL=webpack://shopify-simulator/./src/app.js?");

/***/ }),

/***/ "./src/logo_switcher.js":
/*!******************************!*\
  !*** ./src/logo_switcher.js ***!
  \******************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n  const $logoContainer = document.querySelector(\".navbar__logo a\");\r\n  if (!$logoContainer) return; // Si no existe el logo, se detiene la ejecución\r\n\r\n  // Guarda la versión original del logo para escritorio\r\n  const $desktopLogo = $logoContainer.innerHTML;\r\n\r\n  // Define la versión del logo para dispositivos móviles con un SVG más pequeño y un texto\r\n  const $mobileLogo = `<div style=\"display: flex; align-items: center; gap: 10px;\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"80\" height=\"95\" fill=\"none\" viewBox=\"0 0 95 95\">\r\n          <path fill=\"#6B38F1\" d=\"M60.417 0H19.576C14.348 0 9.426 2.105 5.732 5.909 2.038 9.719 0 14.779 0 20.16v6.175c0 8.224 5.023 15.43 13.441 19.283l3.36 1.418v-20.4a2.355 2.355 0 0 1-.02-.308v-6.175c0-1.046.518-1.727.825-2.042.307-.316.968-.85 1.976-.85h40.842a2.72 2.72 0 0 1 1.983.85c.308.315.818.996.818 2.035v13.55H80V20.154c0-5.383-2.038-10.45-5.732-14.252C70.56 2.098 65.645 0 60.418 0ZM66.49 49.345 63.2 47.956v20.54c.013.049.013.105.013.154v6.175a2.895 2.895 0 0 1-.825 2.05c-.306.315-.968.849-1.977.849H19.576c-1.54 0-2.795-1.299-2.795-2.877V61.296H0v13.55C0 85.963 8.78 95 19.576 95h40.841c5.228-.007 10.15-2.105 13.844-5.909 3.694-3.81 5.732-8.876 5.732-14.259v-6.175c0-8.301-5.044-15.522-13.503-19.304v-.008Z\"></path>\r\n          <path fill=\"#6B38F1\" d=\"M39.996 68.6s-1.35-7.641-7.21-13.676v.007a26.622 26.622 0 0 0-2.366-2.14C25.097 48.552 19.487 47.5 19.487 47.5s7.423-1.39 13.291-7.425a25.873 25.873 0 0 0 2.972-3.698c3.374-5.073 4.24-9.992 4.24-9.992s1.356 7.649 7.218 13.683c.77.793 1.567 1.495 2.365 2.134 5.323 4.238 10.926 5.29 10.926 5.29s-7.423 1.397-13.285 7.432a25.842 25.842 0 0 0-2.965 3.698c-3.373 5.06-4.253 9.979-4.253 9.979Z\"></path>\r\n        </svg>\r\n        <h2 class=\"header__logo-text\">STORE</h2>\r\n      </div>`;\r\n\r\n  // Función que actualiza el logo según el tamaño de la pantalla\r\n  function updateLogo() {\r\n    $logoContainer.innerHTML =\r\n      window.innerWidth <= 768 ? $mobileLogo : $desktopLogo;\r\n  }\r\n\r\n  // Se ejecuta la función al cargar la página y al cambio de tamaño de la ventana\r\n  updateLogo();\r\n  window.addEventListener(\"resize\", updateLogo);\r\n});\r\n\n\n//# sourceURL=webpack://shopify-simulator/./src/logo_switcher.js?");

/***/ }),

/***/ "./src/scroll_handler.js":
/*!*******************************!*\
  !*** ./src/scroll_handler.js ***!
  \*******************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n  window.addEventListener(\"scroll\", function () {\r\n    const $navbar = document.querySelector(\".navbar\");\r\n    if (window.scrollY > 50) {\r\n      $navbar.classList.add(\"scrolled\");\r\n    } else {\r\n      $navbar.classList.remove(\"scrolled\");\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://shopify-simulator/./src/scroll_handler.js?");

/***/ }),

/***/ "./src/scroll_to_top.js":
/*!******************************!*\
  !*** ./src/scroll_to_top.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollToTop)\n/* harmony export */ });\nfunction scrollToTop(btn) {\r\n  const $scrollBtn = document.querySelector(btn);\r\n  if (!$scrollBtn) return; // Si no existe el botón, se detiene la ejecución\r\n\r\n  const toggleVisibility = () => {\r\n    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n    $scrollBtn.classList.toggle(\"hidden\", scrollTop <= 300);\r\n  };\r\n\r\n  window.addEventListener(\"scroll\", toggleVisibility);\r\n\r\n  $scrollBtn.addEventListener(\"click\", () => {\r\n    window.scrollTo({ top: 0, behavior: \"smooth\" });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://shopify-simulator/./src/scroll_to_top.js?");

/***/ }),

/***/ "./assets/bg-circle.svg":
/*!******************************!*\
  !*** ./assets/bg-circle.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"201492d7e88601fac530.svg\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/bg-circle.svg?");

/***/ }),

/***/ "./assets/bg.webp":
/*!************************!*\
  !*** ./assets/bg.webp ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a6fac9fe2422b4493e1a.webp\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/bg.webp?");

/***/ }),

/***/ "./assets/fonts/aeonik-trial.woff":
/*!****************************************!*\
  !*** ./assets/fonts/aeonik-trial.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"28de116de73d74bb3dba.woff\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/fonts/aeonik-trial.woff?");

/***/ }),

/***/ "./assets/fonts/countach-trial.woff":
/*!******************************************!*\
  !*** ./assets/fonts/countach-trial.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"21e9cc9ef2e7f11f9095.woff\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/fonts/countach-trial.woff?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;