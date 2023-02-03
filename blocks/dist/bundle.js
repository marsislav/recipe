/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _recipe_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-block */ \"./app/recipe-block/index.js\");\n/* harmony import */ var _recipe_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_recipe_block__WEBPACK_IMPORTED_MODULE_0__);\n//Main file\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZTkyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL01haW4gZmlsZVxuaW1wb3J0ICcuL3JlY2lwZS1ibG9jayc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/index.js\n");

/***/ }),

/***/ "./app/recipe-block/index.js":
/*!***********************************!*\
  !*** ./app/recipe-block/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nregisterBlockType('fireball/recipe', {\n  title: __('Recipe', 'recipe'),\n  description: __('Provides a short summary of a recipe', 'recipe'),\n  category: 'common',\n  icon: 'dashicons-nametag',\n  keywords: [__('Food', 'recipe'), __('Ingredients', 'recipe'), __('Meal type', 'recipe')],\n  supports: {\n    html: false\n  },\n  save: function save() {\n    return wp.element.createElement(\"p\", null, \"Thanks!\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcmVjaXBlLWJsb2NrL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3JlY2lwZS1ibG9jay9pbmRleC5qcz9lMjRmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfXyA9IHdwLmkxOG4uX187XG5yZWdpc3RlckJsb2NrVHlwZSgnZmlyZWJhbGwvcmVjaXBlJywge1xuICB0aXRsZTogX18oJ1JlY2lwZScsICdyZWNpcGUnKSxcbiAgZGVzY3JpcHRpb246IF9fKCdQcm92aWRlcyBhIHNob3J0IHN1bW1hcnkgb2YgYSByZWNpcGUnLCAncmVjaXBlJyksXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgaWNvbjogJ2Rhc2hpY29ucy1uYW1ldGFnJyxcbiAga2V5d29yZHM6IFtfXygnRm9vZCcsICdyZWNpcGUnKSwgX18oJ0luZ3JlZGllbnRzJywgJ3JlY2lwZScpLCBfXygnTWVhbCB0eXBlJywgJ3JlY2lwZScpXSxcbiAgc3VwcG9ydHM6IHtcbiAgICBodG1sOiBmYWxzZVxuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiVGhhbmtzIVwiKTtcbiAgfVxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/recipe-block/index.js\n");

/***/ })

/******/ });