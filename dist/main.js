/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/utils/genRandomHex.js":
/*!**********************************************!*\
  !*** ./src/components/utils/genRandomHex.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Generates random Hex string */

function genRandomHex() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genRandomHex);

/***/ }),

/***/ "./src/components/utils/isValidHex.js":
/*!********************************************!*\
  !*** ./src/components/utils/isValidHex.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isValidHex(string) {
  const reg = /^#([0-9a-f]{3}){1,2}$/i;
  return reg.test(string);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValidHex);

/***/ }),

/***/ "./src/components/utils/pubSub.js":
/*!****************************************!*\
  !*** ./src/components/utils/pubSub.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class PubSub {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    if (typeof subscriber !== 'function') {
      throw new Error(`${typeof subscriber} is not a valid argument, provide a function instead`);
    }
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    if (typeof subscriber !== 'function') {
      throw new Error(`${typeof subscriber} is not a valid argument, provide a function instead`);
    }
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
  }
  publish(payload) {
    this.subscribers.forEach(subscriber => subscriber(payload));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PubSub);

/***/ }),

/***/ "./src/components/views/etch-controls/etch-controls.js":
/*!*************************************************************!*\
  !*** ./src/components/views/etch-controls/etch-controls.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearBtnPubSub: () => (/* binding */ clearBtnPubSub),
/* harmony export */   colorPubSub: () => (/* binding */ colorPubSub),
/* harmony export */   sizeInputPubSub: () => (/* binding */ sizeInputPubSub)
/* harmony export */ });
/* harmony import */ var _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pubSub */ "./src/components/utils/pubSub.js");


//Color inputs

const colorPubSub = new _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__["default"]();
const colorInput = document.querySelector(".etch-controls__input--color");
const partyBtn = document.querySelector(".etch-controls__btn--party");
const eraserBtn = document.querySelector(".etch-controls__btn--eraser");
[colorInput, partyBtn, eraserBtn].forEach(input => {
  input.addEventListener("click", () => {
    colorPubSub.publish(input.value);
  });
  if (input === colorInput) {
    colorInput.addEventListener("input", () => {
      colorPubSub.publish(colorInput.value);
    });
  }
});

//Clear button

const clearBtnPubSub = new _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__["default"]();
const clearBtn = document.querySelector(".etch-controls__btn--clear");
clearBtn.addEventListener("click", () => {
  clearBtnPubSub.publish();
});

//Size input

const sizeInputPubSub = new _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__["default"]();
const sizeInput = document.querySelector(".etch-controls__input--size");
sizeInput.addEventListener("input", () => {
  sizeInputPubSub.publish(sizeInput.value);
});


/***/ }),

/***/ "./src/components/views/etch-grid/etch-grid--manipulation/activateGridItems.js":
/*!*************************************************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid--manipulation/activateGridItems.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_genRandomHex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/genRandomHex */ "./src/components/utils/genRandomHex.js");
/* harmony import */ var _utils_isValidHex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/isValidHex */ "./src/components/utils/isValidHex.js");



//Adds hover functionality that changes the background color upon mouseover event. Accepts HEX colors, or the string party.

function activateGridItems(color) {
  if (!(0,_utils_isValidHex__WEBPACK_IMPORTED_MODULE_1__["default"])(color) && color !== "party") {
    throw new Error("Invalid Input: Input has to be a valid hex, or the string 'party'");
  }
  const gridItems = document.querySelectorAll(".etch-grid__grid-item");
  gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseover", () => {
      color === "party" ? gridItem.setAttribute(`style`, `background-color: ${(0,_utils_genRandomHex__WEBPACK_IMPORTED_MODULE_0__["default"])()}`) : gridItem.setAttribute(`style`, `background-color: ${color}`);
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateGridItems);

/***/ }),

/***/ "./src/components/views/etch-grid/etch-grid--manipulation/createGridItems.js":
/*!***********************************************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid--manipulation/createGridItems.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Create grid-items for the grid. Used when grid is originally created and when grid is being resized.

function createGridItems(size) {
  if (+size === NaN) {
    throw new Error("Value is not a number!");
  }
  const amount = +size * +size;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.classList.add("etch-grid__grid-item");
    const wrapper = document.querySelector(".etch-grid");
    wrapper.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`);
    wrapper.appendChild(div);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGridItems);

/***/ }),

/***/ "./src/components/views/etch-grid/etch-grid--manipulation/currentInput.js":
/*!********************************************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid--manipulation/currentInput.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_isValidHex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/isValidHex */ "./src/components/utils/isValidHex.js");
/* harmony import */ var _etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../etch-controls/etch-controls */ "./src/components/views/etch-controls/etch-controls.js");


let currentInput = {
  col: "#000000",
  setColor(color) {
    if (!(0,_utils_isValidHex__WEBPACK_IMPORTED_MODULE_0__["default"])(color) && color !== "party") {
      throw new Error("Invalid Input: set currentInput color failed");
    }
    this.col = color;
  },
  get color() {
    return this.col;
  }
};
let setColorBound = currentInput.setColor.bind(currentInput);
_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_1__.colorPubSub.subscribe(setColorBound);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentInput);

/***/ }),

/***/ "./src/components/views/etch-grid/etch-grid--manipulation/initGrid.js":
/*!****************************************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid--manipulation/initGrid.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createGridItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/createGridItems.js");
/* harmony import */ var _activateGridItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activateGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/activateGridItems.js");


function initGrid() {
  (0,_createGridItems__WEBPACK_IMPORTED_MODULE_0__["default"])(16);
  (0,_activateGridItems__WEBPACK_IMPORTED_MODULE_1__["default"])("#000000");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initGrid);

/***/ }),

/***/ "./src/components/views/etch-grid/etch-grid--manipulation/removeGridItems.js":
/*!***********************************************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid--manipulation/removeGridItems.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Removes grid items. Used when grid is being resized.

function removeGridItems() {
  const gridItems = document.querySelectorAll(".etch-grid__grid-item");
  gridItems.forEach(gridItem => {
    gridItem.remove();
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeGridItems);

/***/ }),

/***/ "./src/components/views/etch-grid/etch-grid--manipulation/resetGridItems.js":
/*!**********************************************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid--manipulation/resetGridItems.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//Sets background color for all grid-items to white

function resetGridItems() {
  const gridItems = document.querySelectorAll(".etch-grid__grid-item");
  gridItems.forEach(gridItem => {
    gridItem.setAttribute("style", "background-color: white");
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetGridItems);

/***/ }),

/***/ "./src/components/views/etch-grid/etch-grid--manipulation/resizeGrid.js":
/*!******************************************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid--manipulation/resizeGrid.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeGridItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/removeGridItems.js");
/* harmony import */ var _createGridItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/createGridItems.js");
/* harmony import */ var _currentInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentInput */ "./src/components/views/etch-grid/etch-grid--manipulation/currentInput.js");
/* harmony import */ var _activateGridItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activateGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/activateGridItems.js");




function resizeGrid(value) {
  (0,_removeGridItems__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_createGridItems__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  (0,_activateGridItems__WEBPACK_IMPORTED_MODULE_3__["default"])(_currentInput__WEBPACK_IMPORTED_MODULE_2__["default"].color);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resizeGrid);

/***/ }),

/***/ "./src/components/views/etch-grid/etch-grid.js":
/*!*****************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _etch_grid_manipulation_activateGridItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etch-grid--manipulation/activateGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/activateGridItems.js");
/* harmony import */ var _etch_grid_manipulation_resetGridItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etch-grid--manipulation/resetGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/resetGridItems.js");
/* harmony import */ var _etch_grid_manipulation_resizeGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etch-grid--manipulation/resizeGrid */ "./src/components/views/etch-grid/etch-grid--manipulation/resizeGrid.js");
/* harmony import */ var _etch_grid_manipulation_initGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./etch-grid--manipulation/initGrid */ "./src/components/views/etch-grid/etch-grid--manipulation/initGrid.js");
/* harmony import */ var _etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../etch-controls/etch-controls */ "./src/components/views/etch-controls/etch-controls.js");






//Changes colors based on user input

_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_4__.colorPubSub.subscribe(_etch_grid_manipulation_activateGridItems__WEBPACK_IMPORTED_MODULE_0__["default"]);

// Clears and resizes the grid

_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_4__.clearBtnPubSub.subscribe(_etch_grid_manipulation_resetGridItems__WEBPACK_IMPORTED_MODULE_1__["default"]);
_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_4__.sizeInputPubSub.subscribe(_etch_grid_manipulation_resizeGrid__WEBPACK_IMPORTED_MODULE_2__["default"]);

//Initializes grid upon render

(0,_etch_grid_manipulation_initGrid__WEBPACK_IMPORTED_MODULE_3__["default"])();

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_views_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/views/etch-controls/etch-controls */ "./src/components/views/etch-controls/etch-controls.js");
/* harmony import */ var _components_views_etch_grid_etch_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/views/etch-grid/etch-grid */ "./src/components/views/etch-grid/etch-grid.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTLENBQUNrRCwwRUFBVSxDQUFDOztBQUVyQzs7QUFFQUosNEVBQVEsQ0FBQyxDQUFDOzs7Ozs7VUNqQlY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvZ2VuUmFuZG9tSGV4LmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy91dGlscy9pc1ZhbGlkSGV4LmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy91dGlscy9wdWJTdWIuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtY29udHJvbHMvZXRjaC1jb250cm9scy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL2FjdGl2YXRlR3JpZEl0ZW1zLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vY3JlYXRlR3JpZEl0ZW1zLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vY3VycmVudElucHV0LmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vaW5pdEdyaWQuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9yZW1vdmVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9yZXNldEdyaWRJdGVtcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL3Jlc2l6ZUdyaWQuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhdGVzIHJhbmRvbSBIZXggc3RyaW5nICovXG5cbmZ1bmN0aW9uIGdlblJhbmRvbUhleCgpIHtcbiAgcmV0dXJuIGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlblJhbmRvbUhleDsiLCJmdW5jdGlvbiBpc1ZhbGlkSGV4KHN0cmluZykge1xuICBjb25zdCByZWcgPSAvXiMoWzAtOWEtZl17M30pezEsMn0kL2k7XG4gIHJldHVybiByZWcudGVzdChzdHJpbmcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkSGV4OyIsImNsYXNzIFB1YlN1YiB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdXG4gIH1cblxuICBzdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgIGlmKHR5cGVvZiBzdWJzY3JpYmVyICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0eXBlb2Ygc3Vic2NyaWJlcn0gaXMgbm90IGEgdmFsaWQgYXJndW1lbnQsIHByb3ZpZGUgYSBmdW5jdGlvbiBpbnN0ZWFkYClcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpXG4gIH1cbiBcbiAgdW5zdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgIGlmKHR5cGVvZiBzdWJzY3JpYmVyICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0eXBlb2Ygc3Vic2NyaWJlcn0gaXMgbm90IGEgdmFsaWQgYXJndW1lbnQsIHByb3ZpZGUgYSBmdW5jdGlvbiBpbnN0ZWFkYClcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IHRoaXMuc3Vic2NyaWJlcnMuZmlsdGVyKHN1YiA9PiBzdWIhPT0gc3Vic2NyaWJlcilcbiAgfVxuXG4gIHB1Ymxpc2gocGF5bG9hZCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIocGF5bG9hZCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHViU3ViO1xuIiwiaW1wb3J0IFB1YlN1YiBmcm9tIFwiLi4vLi4vdXRpbHMvcHViU3ViXCI7XG5cbi8vQ29sb3IgaW5wdXRzXG5cbmNvbnN0IGNvbG9yUHViU3ViID0gbmV3IFB1YlN1YigpO1xuY29uc3QgY29sb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19faW5wdXQtLWNvbG9yXCIpO1xuY29uc3QgcGFydHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2J0bi0tcGFydHlcIik7XG5jb25zdCBlcmFzZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2J0bi0tZXJhc2VyXCIpO1xuXG5bY29sb3JJbnB1dCwgcGFydHlCdG4sIGVyYXNlckJ0bl0uZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjb2xvclB1YlN1Yi5wdWJsaXNoKGlucHV0LnZhbHVlKX0pO1xuICBpZiAoaW5wdXQgPT09IGNvbG9ySW5wdXQpIHtcbiAgICBjb2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7Y29sb3JQdWJTdWIucHVibGlzaChjb2xvcklucHV0LnZhbHVlKX0pO1xuICB9XG59KVxuXG4vL0NsZWFyIGJ1dHRvblxuXG5jb25zdCBjbGVhckJ0blB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWNvbnRyb2xzX19idG4tLWNsZWFyXCIpO1xuXG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NsZWFyQnRuUHViU3ViLnB1Ymxpc2goKX0pXG5cbi8vU2l6ZSBpbnB1dFxuXG5jb25zdCBzaXplSW5wdXRQdWJTdWIgPSBuZXcgUHViU3ViKCk7XG5jb25zdCBzaXplSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2lucHV0LS1zaXplXCIpO1xuXG5zaXplSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtzaXplSW5wdXRQdWJTdWIucHVibGlzaChzaXplSW5wdXQudmFsdWUpfSlcblxuZXhwb3J0IHtjb2xvclB1YlN1YiwgY2xlYXJCdG5QdWJTdWIsIHNpemVJbnB1dFB1YlN1Yn07XG5cbiIsImltcG9ydCBnZXRSYW5kb21IZXggZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dlblJhbmRvbUhleFwiXG5pbXBvcnQgaXNWYWxpZEhleCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvaXNWYWxpZEhleFwiO1xuXG4vL0FkZHMgaG92ZXIgZnVuY3Rpb25hbGl0eSB0aGF0IGNoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3IgdXBvbiBtb3VzZW92ZXIgZXZlbnQuIEFjY2VwdHMgSEVYIGNvbG9ycywgb3IgdGhlIHN0cmluZyBwYXJ0eS5cblxuZnVuY3Rpb24gYWN0aXZhdGVHcmlkSXRlbXMoY29sb3IpIHtcbiAgaWYgKCFpc1ZhbGlkSGV4KGNvbG9yKSAmJiBjb2xvciAhPT0gXCJwYXJ0eVwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBJbnB1dDogSW5wdXQgaGFzIHRvIGJlIGEgdmFsaWQgaGV4LCBvciB0aGUgc3RyaW5nICdwYXJ0eSdcIilcbiAgfVxuICBjb25zdCBncmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV0Y2gtZ3JpZF9fZ3JpZC1pdGVtXCIpO1xuICBncmlkSXRlbXMuZm9yRWFjaCgoZ3JpZEl0ZW0pID0+IHtcbiAgICBncmlkSXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgIChjb2xvciA9PT0gXCJwYXJ0eVwiKSA/IGdyaWRJdGVtLnNldEF0dHJpYnV0ZShgc3R5bGVgLCBgYmFja2dyb3VuZC1jb2xvcjogJHtnZXRSYW5kb21IZXgoKX1gKSA6IGdyaWRJdGVtLnNldEF0dHJpYnV0ZShgc3R5bGVgLCBgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1gKTtcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY3RpdmF0ZUdyaWRJdGVtczsiLCIvLyBDcmVhdGUgZ3JpZC1pdGVtcyBmb3IgdGhlIGdyaWQuIFVzZWQgd2hlbiBncmlkIGlzIG9yaWdpbmFsbHkgY3JlYXRlZCBhbmQgd2hlbiBncmlkIGlzIGJlaW5nIHJlc2l6ZWQuXG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWRJdGVtcyhzaXplKSB7XG4gIGlmICgrc2l6ZSA9PT0gTmFOKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsdWUgaXMgbm90IGEgbnVtYmVyIVwiKVxuICB9XG4gIGNvbnN0IGFtb3VudCA9ICtzaXplICogK3NpemU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZXRjaC1ncmlkX19ncmlkLWl0ZW1cIik7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1ncmlkXCIpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCR7c2l6ZX0sIDFmcik7IGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCR7c2l6ZX0sIDFmcilgKVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHcmlkSXRlbXM7IiwiaW1wb3J0IGlzVmFsaWRIZXggZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2lzVmFsaWRIZXhcIjtcbmltcG9ydCB7IGNvbG9yUHViU3ViIH0gZnJvbSBcIi4uLy4uL2V0Y2gtY29udHJvbHMvZXRjaC1jb250cm9sc1wiO1xuXG5sZXQgY3VycmVudElucHV0ID0ge1xuICBjb2w6IFwiIzAwMDAwMFwiLFxuXG4gIHNldENvbG9yKGNvbG9yKSB7XG4gICAgaWYgKCFpc1ZhbGlkSGV4KGNvbG9yKSAmJiBjb2xvciAhPT0gXCJwYXJ0eVwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIElucHV0OiBzZXQgY3VycmVudElucHV0IGNvbG9yIGZhaWxlZFwiKVxuICAgIH1cbiAgICB0aGlzLmNvbCA9IGNvbG9yO1xuICB9LFxuXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xcbiAgfVxufVxubGV0IHNldENvbG9yQm91bmQgPSBjdXJyZW50SW5wdXQuc2V0Q29sb3IuYmluZChjdXJyZW50SW5wdXQpO1xuXG5jb2xvclB1YlN1Yi5zdWJzY3JpYmUoc2V0Q29sb3JCb3VuZClcblxuZXhwb3J0IGRlZmF1bHQgY3VycmVudElucHV0OyIsImltcG9ydCBjcmVhdGVHcmlkSXRlbXMgZnJvbSBcIi4vY3JlYXRlR3JpZEl0ZW1zXCI7XG5pbXBvcnQgYWN0aXZhdGVHcmlkSXRlbXMgZnJvbSBcIi4vYWN0aXZhdGVHcmlkSXRlbXNcIjtcblxuZnVuY3Rpb24gaW5pdEdyaWQoKSB7XG4gIGNyZWF0ZUdyaWRJdGVtcygxNik7XG4gIGFjdGl2YXRlR3JpZEl0ZW1zKFwiIzAwMDAwMFwiKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0R3JpZDsiLCIvLyBSZW1vdmVzIGdyaWQgaXRlbXMuIFVzZWQgd2hlbiBncmlkIGlzIGJlaW5nIHJlc2l6ZWQuXG5cbmZ1bmN0aW9uIHJlbW92ZUdyaWRJdGVtcygpIHtcbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGdyaWRJdGVtKSA9PiB7XG4gICAgZ3JpZEl0ZW0ucmVtb3ZlKCk7XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUdyaWRJdGVtczsiLCIvL1NldHMgYmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIGdyaWQtaXRlbXMgdG8gd2hpdGVcblxuZnVuY3Rpb24gcmVzZXRHcmlkSXRlbXMoKSB7XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXRjaC1ncmlkX19ncmlkLWl0ZW1cIik7XG4gIGdyaWRJdGVtcy5mb3JFYWNoKChncmlkSXRlbSkgPT4ge1xuICAgICAgZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVwiKSBcbn0pfVxuXG5leHBvcnQgZGVmYXVsdCByZXNldEdyaWRJdGVtczsiLCJpbXBvcnQgcmVtb3ZlR3JpZEl0ZW1zIGZyb20gXCIuL3JlbW92ZUdyaWRJdGVtc1wiO1xuaW1wb3J0IGNyZWF0ZUdyaWRJdGVtcyBmcm9tIFwiLi9jcmVhdGVHcmlkSXRlbXNcIjtcbmltcG9ydCBjdXJyZW50SW5wdXQgZnJvbSBcIi4vY3VycmVudElucHV0XCI7XG5pbXBvcnQgYWN0aXZhdGVHcmlkSXRlbXMgZnJvbSBcIi4vYWN0aXZhdGVHcmlkSXRlbXNcIjtcblxuZnVuY3Rpb24gcmVzaXplR3JpZCh2YWx1ZSkge1xuICByZW1vdmVHcmlkSXRlbXMoKTtcbiAgY3JlYXRlR3JpZEl0ZW1zKHZhbHVlKTtcbiAgYWN0aXZhdGVHcmlkSXRlbXMoY3VycmVudElucHV0LmNvbG9yKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXNpemVHcmlkOyIsImltcG9ydCBhY3RpdmF0ZUdyaWRJdGVtcyBmcm9tIFwiLi9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9hY3RpdmF0ZUdyaWRJdGVtc1wiO1xuaW1wb3J0IHJlc2V0R3JpZEl0ZW1zIGZyb20gXCIuL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL3Jlc2V0R3JpZEl0ZW1zXCI7XG5pbXBvcnQgcmVzaXplR3JpZCBmcm9tIFwiLi9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9yZXNpemVHcmlkXCI7XG5pbXBvcnQgaW5pdEdyaWQgZnJvbSBcIi4vZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vaW5pdEdyaWRcIjtcbmltcG9ydCB7IGNvbG9yUHViU3ViLCBjbGVhckJ0blB1YlN1Yiwgc2l6ZUlucHV0UHViU3ViIH0gZnJvbSBcIi4uL2V0Y2gtY29udHJvbHMvZXRjaC1jb250cm9sc1wiO1xuXG4vL0NoYW5nZXMgY29sb3JzIGJhc2VkIG9uIHVzZXIgaW5wdXRcblxuY29sb3JQdWJTdWIuc3Vic2NyaWJlKGFjdGl2YXRlR3JpZEl0ZW1zKVxuXG4vLyBDbGVhcnMgYW5kIHJlc2l6ZXMgdGhlIGdyaWRcblxuY2xlYXJCdG5QdWJTdWIuc3Vic2NyaWJlKHJlc2V0R3JpZEl0ZW1zKTtcbnNpemVJbnB1dFB1YlN1Yi5zdWJzY3JpYmUocmVzaXplR3JpZCk7XG5cbi8vSW5pdGlhbGl6ZXMgZ3JpZCB1cG9uIHJlbmRlclxuXG5pbml0R3JpZCgpO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy92aWV3cy9ldGNoLWNvbnRyb2xzL2V0Y2gtY29udHJvbHNcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkXCI7XG5cbiJdLCJuYW1lcyI6WyJnZW5SYW5kb21IZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImlzVmFsaWRIZXgiLCJzdHJpbmciLCJyZWciLCJ0ZXN0IiwiUHViU3ViIiwiY29uc3RydWN0b3IiLCJzdWJzY3JpYmVycyIsInN1YnNjcmliZSIsInN1YnNjcmliZXIiLCJFcnJvciIsInB1c2giLCJ1bnN1YnNjcmliZSIsImZpbHRlciIsInN1YiIsInB1Ymxpc2giLCJwYXlsb2FkIiwiZm9yRWFjaCIsImNvbG9yUHViU3ViIiwiY29sb3JJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcnR5QnRuIiwiZXJhc2VyQnRuIiwiaW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJjbGVhckJ0blB1YlN1YiIsImNsZWFyQnRuIiwic2l6ZUlucHV0UHViU3ViIiwic2l6ZUlucHV0IiwiZ2V0UmFuZG9tSGV4IiwiYWN0aXZhdGVHcmlkSXRlbXMiLCJjb2xvciIsImdyaWRJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJncmlkSXRlbSIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUdyaWRJdGVtcyIsInNpemUiLCJOYU4iLCJhbW91bnQiLCJpIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIndyYXBwZXIiLCJhcHBlbmRDaGlsZCIsImN1cnJlbnRJbnB1dCIsImNvbCIsInNldENvbG9yIiwic2V0Q29sb3JCb3VuZCIsImJpbmQiLCJpbml0R3JpZCIsInJlbW92ZUdyaWRJdGVtcyIsInJlbW92ZSIsInJlc2V0R3JpZEl0ZW1zIiwicmVzaXplR3JpZCJdLCJzb3VyY2VSb290IjoiIn0=