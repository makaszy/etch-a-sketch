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

/***/ "./src/components/views/etch-grid/etch-grid--manipulation/currentColor.js":
/*!********************************************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid--manipulation/currentColor.js ***!
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
  setColor(value) {
    this.col = value;
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
/* harmony import */ var _currentColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentColor */ "./src/components/views/etch-grid/etch-grid--manipulation/currentColor.js");
/* harmony import */ var _activateGridItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activateGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/activateGridItems.js");




function resizeGrid(value) {
  (0,_removeGridItems__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_createGridItems__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  (0,_activateGridItems__WEBPACK_IMPORTED_MODULE_3__["default"])(_currentColor__WEBPACK_IMPORTED_MODULE_2__["default"].color);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053RCIsInNvdXJjZXMiOlsid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy91dGlscy9nZW5SYW5kb21IZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL2lzVmFsaWRIZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1jb250cm9scy9ldGNoLWNvbnRyb2xzLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vYWN0aXZhdGVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9jcmVhdGVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9jdXJyZW50Q29sb3IuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9pbml0R3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL3JlbW92ZUdyaWRJdGVtcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL3Jlc2V0R3JpZEl0ZW1zLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vcmVzaXplR3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZXMgcmFuZG9tIEhleCBzdHJpbmcgKi9cblxuZnVuY3Rpb24gZ2VuUmFuZG9tSGV4KCkge1xuICByZXR1cm4gYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuUmFuZG9tSGV4OyIsImZ1bmN0aW9uIGlzVmFsaWRIZXgoc3RyaW5nKSB7XG4gIGNvbnN0IHJlZyA9IC9eIyhbMC05YS1mXXszfSl7MSwyfSQvaTtcbiAgcmV0dXJuIHJlZy50ZXN0KHN0cmluZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWRIZXg7IiwiY2xhc3MgUHViU3ViIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW11cbiAgfVxuXG4gIHN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgaWYodHlwZW9mIHN1YnNjcmliZXIgIT09ICdmdW5jdGlvbicpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGVvZiBzdWJzY3JpYmVyfSBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCwgcHJvdmlkZSBhIGZ1bmN0aW9uIGluc3RlYWRgKVxuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcilcbiAgfVxuIFxuICB1bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgaWYodHlwZW9mIHN1YnNjcmliZXIgIT09ICdmdW5jdGlvbicpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGVvZiBzdWJzY3JpYmVyfSBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCwgcHJvdmlkZSBhIGZ1bmN0aW9uIGluc3RlYWRgKVxuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzID0gdGhpcy5zdWJzY3JpYmVycy5maWx0ZXIoc3ViID0+IHN1YiE9PSBzdWJzY3JpYmVyKVxuICB9XG5cbiAgcHVibGlzaChwYXlsb2FkKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlcihwYXlsb2FkKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJTdWI7XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gXCIuLi8uLi91dGlscy9wdWJTdWJcIjtcblxuLy9Db2xvciBpbnB1dHNcblxuY29uc3QgY29sb3JQdWJTdWIgPSBuZXcgUHViU3ViKCk7XG5jb25zdCBjb2xvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWNvbnRyb2xzX19pbnB1dC0tY29sb3JcIik7XG5jb25zdCBwYXJ0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19fYnRuLS1wYXJ0eVwiKTtcbmNvbnN0IGVyYXNlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19fYnRuLS1lcmFzZXJcIik7XG5cbltjb2xvcklucHV0LCBwYXJ0eUJ0biwgZXJhc2VyQnRuXS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NvbG9yUHViU3ViLnB1Ymxpc2goaW5wdXQudmFsdWUpfSk7XG4gIGlmIChpbnB1dCA9PT0gY29sb3JJbnB1dCkge1xuICAgIGNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtjb2xvclB1YlN1Yi5wdWJsaXNoKGNvbG9ySW5wdXQudmFsdWUpfSk7XG4gIH1cbn0pXG5cbi8vQ2xlYXIgYnV0dG9uXG5cbmNvbnN0IGNsZWFyQnRuUHViU3ViID0gbmV3IFB1YlN1YigpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2J0bi0tY2xlYXJcIik7XG5cbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2xlYXJCdG5QdWJTdWIucHVibGlzaCgpfSlcblxuLy9TaXplIGlucHV0XG5cbmNvbnN0IHNpemVJbnB1dFB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcbmNvbnN0IHNpemVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19faW5wdXQtLXNpemVcIik7XG5cbnNpemVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge3NpemVJbnB1dFB1YlN1Yi5wdWJsaXNoKHNpemVJbnB1dC52YWx1ZSl9KVxuXG5leHBvcnQge2NvbG9yUHViU3ViLCBjbGVhckJ0blB1YlN1Yiwgc2l6ZUlucHV0UHViU3VifTtcblxuIiwiaW1wb3J0IGdldFJhbmRvbUhleCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZ2VuUmFuZG9tSGV4XCJcbmltcG9ydCBpc1ZhbGlkSGV4IGZyb20gXCIuLi8uLi8uLi91dGlscy9pc1ZhbGlkSGV4XCI7XG5cbi8vQWRkcyBob3ZlciBmdW5jdGlvbmFsaXR5IHRoYXQgY2hhbmdlcyB0aGUgYmFja2dyb3VuZCBjb2xvciB1cG9uIG1vdXNlb3ZlciBldmVudC4gQWNjZXB0cyBIRVggY29sb3JzLCBvciB0aGUgc3RyaW5nIHBhcnR5LlxuXG5mdW5jdGlvbiBhY3RpdmF0ZUdyaWRJdGVtcyhjb2xvcikge1xuICBpZiAoIWlzVmFsaWRIZXgoY29sb3IpICYmIGNvbG9yICE9PSBcInBhcnR5XCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIElucHV0OiBJbnB1dCBoYXMgdG8gYmUgYSB2YWxpZCBoZXgsIG9yIHRoZSBzdHJpbmcgJ3BhcnR5J1wiKVxuICB9XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXRjaC1ncmlkX19ncmlkLWl0ZW1cIik7XG4gIGdyaWRJdGVtcy5mb3JFYWNoKChncmlkSXRlbSkgPT4ge1xuICAgIGdyaWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgKGNvbG9yID09PSBcInBhcnR5XCIpID8gZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKGBzdHlsZWAsIGBiYWNrZ3JvdW5kLWNvbG9yOiAke2dldFJhbmRvbUhleCgpfWApIDogZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKGBzdHlsZWAsIGBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfWApO1xuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGl2YXRlR3JpZEl0ZW1zOyIsIi8vIENyZWF0ZSBncmlkLWl0ZW1zIGZvciB0aGUgZ3JpZC4gVXNlZCB3aGVuIGdyaWQgaXMgb3JpZ2luYWxseSBjcmVhdGVkIGFuZCB3aGVuIGdyaWQgaXMgYmVpbmcgcmVzaXplZC5cblxuZnVuY3Rpb24gY3JlYXRlR3JpZEl0ZW1zKHNpemUpIHtcbiAgaWYgKCtzaXplID09PSBOYU4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSBpcyBub3QgYSBudW1iZXIhXCIpXG4gIH1cbiAgY29uc3QgYW1vdW50ID0gK3NpemUgKiArc2l6ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWdyaWRcIik7XG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtzaXplfSwgMWZyKTsgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoJHtzaXplfSwgMWZyKWApXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdyaWRJdGVtczsiLCJpbXBvcnQgaXNWYWxpZEhleCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvaXNWYWxpZEhleFwiO1xuaW1wb3J0IHsgY29sb3JQdWJTdWIgfSBmcm9tIFwiLi4vLi4vZXRjaC1jb250cm9scy9ldGNoLWNvbnRyb2xzXCI7XG5cbmxldCBjdXJyZW50SW5wdXQgPSB7XG4gIGNvbDogXCIjMDAwMDAwXCIsXG5cbiAgc2V0Q29sb3IodmFsdWUpIHtcbiAgICB0aGlzLmNvbCA9IHZhbHVlO1xuICB9LFxuXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xcbiAgfVxufVxubGV0IHNldENvbG9yQm91bmQgPSBjdXJyZW50SW5wdXQuc2V0Q29sb3IuYmluZChjdXJyZW50SW5wdXQpO1xuXG5jb2xvclB1YlN1Yi5zdWJzY3JpYmUoc2V0Q29sb3JCb3VuZClcblxuZXhwb3J0IGRlZmF1bHQgY3VycmVudElucHV0OyIsImltcG9ydCBjcmVhdGVHcmlkSXRlbXMgZnJvbSBcIi4vY3JlYXRlR3JpZEl0ZW1zXCI7XG5pbXBvcnQgYWN0aXZhdGVHcmlkSXRlbXMgZnJvbSBcIi4vYWN0aXZhdGVHcmlkSXRlbXNcIjtcblxuZnVuY3Rpb24gaW5pdEdyaWQoKSB7XG4gIGNyZWF0ZUdyaWRJdGVtcygxNik7XG4gIGFjdGl2YXRlR3JpZEl0ZW1zKFwiIzAwMDAwMFwiKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0R3JpZDsiLCIvLyBSZW1vdmVzIGdyaWQgaXRlbXMuIFVzZWQgd2hlbiBncmlkIGlzIGJlaW5nIHJlc2l6ZWQuXG5cbmZ1bmN0aW9uIHJlbW92ZUdyaWRJdGVtcygpIHtcbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGdyaWRJdGVtKSA9PiB7XG4gICAgZ3JpZEl0ZW0ucmVtb3ZlKCk7XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUdyaWRJdGVtczsiLCIvL1NldHMgYmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIGdyaWQtaXRlbXMgdG8gd2hpdGVcblxuZnVuY3Rpb24gcmVzZXRHcmlkSXRlbXMoKSB7XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXRjaC1ncmlkX19ncmlkLWl0ZW1cIik7XG4gIGdyaWRJdGVtcy5mb3JFYWNoKChncmlkSXRlbSkgPT4ge1xuICAgICAgZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVwiKSBcbn0pfVxuXG5leHBvcnQgZGVmYXVsdCByZXNldEdyaWRJdGVtczsiLCJpbXBvcnQgcmVtb3ZlR3JpZEl0ZW1zIGZyb20gXCIuL3JlbW92ZUdyaWRJdGVtc1wiO1xuaW1wb3J0IGNyZWF0ZUdyaWRJdGVtcyBmcm9tIFwiLi9jcmVhdGVHcmlkSXRlbXNcIjtcbmltcG9ydCBjdXJyZW50SW5wdXQgZnJvbSBcIi4vY3VycmVudENvbG9yXCI7XG5pbXBvcnQgYWN0aXZhdGVHcmlkSXRlbXMgZnJvbSBcIi4vYWN0aXZhdGVHcmlkSXRlbXNcIjtcblxuZnVuY3Rpb24gcmVzaXplR3JpZCh2YWx1ZSkge1xuICByZW1vdmVHcmlkSXRlbXMoKTtcbiAgY3JlYXRlR3JpZEl0ZW1zKHZhbHVlKTtcbiAgYWN0aXZhdGVHcmlkSXRlbXMoY3VycmVudElucHV0LmNvbG9yKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXNpemVHcmlkOyIsImltcG9ydCBhY3RpdmF0ZUdyaWRJdGVtcyBmcm9tIFwiLi9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9hY3RpdmF0ZUdyaWRJdGVtc1wiO1xuaW1wb3J0IHJlc2V0R3JpZEl0ZW1zIGZyb20gXCIuL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL3Jlc2V0R3JpZEl0ZW1zXCI7XG5pbXBvcnQgcmVzaXplR3JpZCBmcm9tIFwiLi9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9yZXNpemVHcmlkXCI7XG5pbXBvcnQgaW5pdEdyaWQgZnJvbSBcIi4vZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vaW5pdEdyaWRcIjtcbmltcG9ydCB7IGNvbG9yUHViU3ViLCBjbGVhckJ0blB1YlN1Yiwgc2l6ZUlucHV0UHViU3ViIH0gZnJvbSBcIi4uL2V0Y2gtY29udHJvbHMvZXRjaC1jb250cm9sc1wiO1xuXG4vL0NoYW5nZXMgY29sb3JzIGJhc2VkIG9uIHVzZXIgaW5wdXRcblxuY29sb3JQdWJTdWIuc3Vic2NyaWJlKGFjdGl2YXRlR3JpZEl0ZW1zKVxuXG4vLyBDbGVhcnMgYW5kIHJlc2l6ZXMgdGhlIGdyaWRcblxuY2xlYXJCdG5QdWJTdWIuc3Vic2NyaWJlKHJlc2V0R3JpZEl0ZW1zKTtcbnNpemVJbnB1dFB1YlN1Yi5zdWJzY3JpYmUocmVzaXplR3JpZCk7XG5cbi8vSW5pdGlhbGl6ZXMgZ3JpZCB1cG9uIHJlbmRlclxuXG5pbml0R3JpZCgpO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy92aWV3cy9ldGNoLWNvbnRyb2xzL2V0Y2gtY29udHJvbHNcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkXCI7XG5cbiJdLCJuYW1lcyI6WyJnZW5SYW5kb21IZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImlzVmFsaWRIZXgiLCJzdHJpbmciLCJyZWciLCJ0ZXN0IiwiUHViU3ViIiwiY29uc3RydWN0b3IiLCJzdWJzY3JpYmVycyIsInN1YnNjcmliZSIsInN1YnNjcmliZXIiLCJFcnJvciIsInB1c2giLCJ1bnN1YnNjcmliZSIsImZpbHRlciIsInN1YiIsInB1Ymxpc2giLCJwYXlsb2FkIiwiZm9yRWFjaCIsImNvbG9yUHViU3ViIiwiY29sb3JJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcnR5QnRuIiwiZXJhc2VyQnRuIiwiaW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJjbGVhckJ0blB1YlN1YiIsImNsZWFyQnRuIiwic2l6ZUlucHV0UHViU3ViIiwic2l6ZUlucHV0IiwiZ2V0UmFuZG9tSGV4IiwiYWN0aXZhdGVHcmlkSXRlbXMiLCJjb2xvciIsImdyaWRJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJncmlkSXRlbSIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUdyaWRJdGVtcyIsInNpemUiLCJOYU4iLCJhbW91bnQiLCJpIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIndyYXBwZXIiLCJhcHBlbmRDaGlsZCIsImN1cnJlbnRJbnB1dCIsImNvbCIsInNldENvbG9yIiwic2V0Q29sb3JCb3VuZCIsImJpbmQiLCJpbml0R3JpZCIsInJlbW92ZUdyaWRJdGVtcyIsInJlbW92ZSIsInJlc2V0R3JpZEl0ZW1zIiwicmVzaXplR3JpZCJdLCJzb3VyY2VSb290IjoiIn0=