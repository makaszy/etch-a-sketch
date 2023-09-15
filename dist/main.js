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

//Etch controls hide btn

const etchControls = document.querySelector(".etch-controls");
const etchControlsDisplayBtn = document.querySelector(".main__btn--display-etch-controls");
const etchControlsHideBtn = document.querySelector(".etch-controls__btn--hide");
etchControlsDisplayBtn.addEventListener("click", () => {
  etchControls.setAttribute("style", "display: flex !important");
});
etchControlsHideBtn.addEventListener("click", () => {
  etchControls.setAttribute("style", "display: none !important");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUseUJBQXlCLENBQUM7RUFDL0QsQ0FBQyxDQUFDO0FBQUE7QUFFRixpRUFBZTBCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JtQjtBQUNBO0FBQ047QUFDVTtBQUVwRCxTQUFTQyxVQUFVQSxDQUFDbkMsS0FBSyxFQUFFO0VBQ3pCZ0MsNERBQWUsQ0FBQyxDQUFDO0VBQ2pCakIsNERBQWUsQ0FBQ2YsS0FBSyxDQUFDO0VBQ3RCVSw4REFBaUIsQ0FBQ2dCLHFEQUFZLENBQUNmLEtBQUssQ0FBQztBQUN2QztBQUVBLGlFQUFld0IsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQ1htRDtBQUNOO0FBQ1I7QUFDSjtBQUNvQzs7QUFFOUY7O0FBRUEzQyxxRUFBVyxDQUFDVixTQUFTLENBQUM0QixpRkFBaUIsQ0FBQzs7QUFFeEM7O0FBRUFULHdFQUFjLENBQUNuQixTQUFTLENBQUNvRCw4RUFBYyxDQUFDO0FBQ3hDL0IseUVBQWUsQ0FBQ3JCLFNBQVMsQ0FBQ3FELDBFQUFVLENBQUM7O0FBRXJDOztBQUVBSiw0RUFBUSxDQUFDLENBQUM7Ozs7OztVQ2pCVjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053RCIsInNvdXJjZXMiOlsid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy91dGlscy9nZW5SYW5kb21IZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL2lzVmFsaWRIZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1jb250cm9scy9ldGNoLWNvbnRyb2xzLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vYWN0aXZhdGVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9jcmVhdGVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9jdXJyZW50SW5wdXQuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9pbml0R3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL3JlbW92ZUdyaWRJdGVtcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL3Jlc2V0R3JpZEl0ZW1zLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vcmVzaXplR3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZXMgcmFuZG9tIEhleCBzdHJpbmcgKi9cblxuZnVuY3Rpb24gZ2VuUmFuZG9tSGV4KCkge1xuICByZXR1cm4gYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuUmFuZG9tSGV4OyIsImZ1bmN0aW9uIGlzVmFsaWRIZXgoc3RyaW5nKSB7XG4gIGNvbnN0IHJlZyA9IC9eIyhbMC05YS1mXXszfSl7MSwyfSQvaTtcbiAgcmV0dXJuIHJlZy50ZXN0KHN0cmluZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWRIZXg7IiwiY2xhc3MgUHViU3ViIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW11cbiAgfVxuXG4gIHN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgaWYodHlwZW9mIHN1YnNjcmliZXIgIT09ICdmdW5jdGlvbicpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGVvZiBzdWJzY3JpYmVyfSBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCwgcHJvdmlkZSBhIGZ1bmN0aW9uIGluc3RlYWRgKVxuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcilcbiAgfVxuIFxuICB1bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgaWYodHlwZW9mIHN1YnNjcmliZXIgIT09ICdmdW5jdGlvbicpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGVvZiBzdWJzY3JpYmVyfSBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCwgcHJvdmlkZSBhIGZ1bmN0aW9uIGluc3RlYWRgKVxuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzID0gdGhpcy5zdWJzY3JpYmVycy5maWx0ZXIoc3ViID0+IHN1YiE9PSBzdWJzY3JpYmVyKVxuICB9XG5cbiAgcHVibGlzaChwYXlsb2FkKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlcihwYXlsb2FkKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJTdWI7XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gXCIuLi8uLi91dGlscy9wdWJTdWJcIjtcblxuLy9Db2xvciBpbnB1dHNcblxuY29uc3QgY29sb3JQdWJTdWIgPSBuZXcgUHViU3ViKCk7XG5jb25zdCBjb2xvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWNvbnRyb2xzX19pbnB1dC0tY29sb3JcIik7XG5jb25zdCBwYXJ0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19fYnRuLS1wYXJ0eVwiKTtcbmNvbnN0IGVyYXNlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19fYnRuLS1lcmFzZXJcIik7XG5cbltjb2xvcklucHV0LCBwYXJ0eUJ0biwgZXJhc2VyQnRuXS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NvbG9yUHViU3ViLnB1Ymxpc2goaW5wdXQudmFsdWUpfSk7XG4gIGlmIChpbnB1dCA9PT0gY29sb3JJbnB1dCkge1xuICAgIGNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtjb2xvclB1YlN1Yi5wdWJsaXNoKGNvbG9ySW5wdXQudmFsdWUpfSk7XG4gIH1cbn0pXG5cbi8vQ2xlYXIgYnV0dG9uXG5cbmNvbnN0IGNsZWFyQnRuUHViU3ViID0gbmV3IFB1YlN1YigpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2J0bi0tY2xlYXJcIik7XG5cbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2xlYXJCdG5QdWJTdWIucHVibGlzaCgpfSlcblxuLy9TaXplIGlucHV0XG5cbmNvbnN0IHNpemVJbnB1dFB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcbmNvbnN0IHNpemVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19faW5wdXQtLXNpemVcIik7XG5cbnNpemVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge3NpemVJbnB1dFB1YlN1Yi5wdWJsaXNoKHNpemVJbnB1dC52YWx1ZSl9KVxuXG5cbi8vRXRjaCBjb250cm9scyBoaWRlIGJ0blxuXG5jb25zdCBldGNoQ29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNcIik7XG5jb25zdCBldGNoQ29udHJvbHNEaXNwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19idG4tLWRpc3BsYXktZXRjaC1jb250cm9sc1wiKTtcbmNvbnN0IGV0Y2hDb250cm9sc0hpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2J0bi0taGlkZVwiKVxuXG5ldGNoQ29udHJvbHNEaXNwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGV0Y2hDb250cm9scy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGZsZXggIWltcG9ydGFudFwiKTtcbn0pXG5cblxuZXRjaENvbnRyb2xzSGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBldGNoQ29udHJvbHMuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcIik7XG59KVxuXG5cbmV4cG9ydCB7Y29sb3JQdWJTdWIsIGNsZWFyQnRuUHViU3ViLCBzaXplSW5wdXRQdWJTdWJ9O1xuXG4iLCJpbXBvcnQgZ2V0UmFuZG9tSGV4IGZyb20gXCIuLi8uLi8uLi91dGlscy9nZW5SYW5kb21IZXhcIlxuaW1wb3J0IGlzVmFsaWRIZXggZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2lzVmFsaWRIZXhcIjtcblxuLy9BZGRzIGhvdmVyIGZ1bmN0aW9uYWxpdHkgdGhhdCBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHVwb24gbW91c2VvdmVyIGV2ZW50LiBBY2NlcHRzIEhFWCBjb2xvcnMsIG9yIHRoZSBzdHJpbmcgcGFydHkuXG5cbmZ1bmN0aW9uIGFjdGl2YXRlR3JpZEl0ZW1zKGNvbG9yKSB7XG4gIGlmICghaXNWYWxpZEhleChjb2xvcikgJiYgY29sb3IgIT09IFwicGFydHlcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSW5wdXQ6IElucHV0IGhhcyB0byBiZSBhIHZhbGlkIGhleCwgb3IgdGhlIHN0cmluZyAncGFydHknXCIpXG4gIH1cbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGdyaWRJdGVtKSA9PiB7XG4gICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAoY29sb3IgPT09IFwicGFydHlcIikgPyBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoYHN0eWxlYCwgYGJhY2tncm91bmQtY29sb3I6ICR7Z2V0UmFuZG9tSGV4KCl9YCkgOiBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoYHN0eWxlYCwgYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9YCk7XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aXZhdGVHcmlkSXRlbXM7IiwiLy8gQ3JlYXRlIGdyaWQtaXRlbXMgZm9yIHRoZSBncmlkLiBVc2VkIHdoZW4gZ3JpZCBpcyBvcmlnaW5hbGx5IGNyZWF0ZWQgYW5kIHdoZW4gZ3JpZCBpcyBiZWluZyByZXNpemVkLlxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkSXRlbXMoc2l6ZSkge1xuICBpZiAoK3NpemUgPT09IE5hTikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlZhbHVlIGlzIG5vdCBhIG51bWJlciFcIilcbiAgfVxuICBjb25zdCBhbW91bnQgPSArc2l6ZSAqICtzaXplO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV0Y2gtZ3JpZF9fZ3JpZC1pdGVtXCIpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtZ3JpZFwiKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke3NpemV9LCAxZnIpOyBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgke3NpemV9LCAxZnIpYClcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR3JpZEl0ZW1zOyIsImltcG9ydCBpc1ZhbGlkSGV4IGZyb20gXCIuLi8uLi8uLi91dGlscy9pc1ZhbGlkSGV4XCI7XG5pbXBvcnQgeyBjb2xvclB1YlN1YiB9IGZyb20gXCIuLi8uLi9ldGNoLWNvbnRyb2xzL2V0Y2gtY29udHJvbHNcIjtcblxubGV0IGN1cnJlbnRJbnB1dCA9IHtcbiAgY29sOiBcIiMwMDAwMDBcIixcblxuICBzZXRDb2xvcihjb2xvcikge1xuICAgIGlmICghaXNWYWxpZEhleChjb2xvcikgJiYgY29sb3IgIT09IFwicGFydHlcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBJbnB1dDogc2V0IGN1cnJlbnRJbnB1dCBjb2xvciBmYWlsZWRcIilcbiAgICB9XG4gICAgdGhpcy5jb2wgPSBjb2xvcjtcbiAgfSxcblxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sXG4gIH1cbn1cbmxldCBzZXRDb2xvckJvdW5kID0gY3VycmVudElucHV0LnNldENvbG9yLmJpbmQoY3VycmVudElucHV0KTtcblxuY29sb3JQdWJTdWIuc3Vic2NyaWJlKHNldENvbG9yQm91bmQpXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRJbnB1dDsiLCJpbXBvcnQgY3JlYXRlR3JpZEl0ZW1zIGZyb20gXCIuL2NyZWF0ZUdyaWRJdGVtc1wiO1xuaW1wb3J0IGFjdGl2YXRlR3JpZEl0ZW1zIGZyb20gXCIuL2FjdGl2YXRlR3JpZEl0ZW1zXCI7XG5cbmZ1bmN0aW9uIGluaXRHcmlkKCkge1xuICBjcmVhdGVHcmlkSXRlbXMoMTYpO1xuICBhY3RpdmF0ZUdyaWRJdGVtcyhcIiMwMDAwMDBcIilcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEdyaWQ7IiwiLy8gUmVtb3ZlcyBncmlkIGl0ZW1zLiBVc2VkIHdoZW4gZ3JpZCBpcyBiZWluZyByZXNpemVkLlxuXG5mdW5jdGlvbiByZW1vdmVHcmlkSXRlbXMoKSB7XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXRjaC1ncmlkX19ncmlkLWl0ZW1cIik7XG4gIGdyaWRJdGVtcy5mb3JFYWNoKChncmlkSXRlbSkgPT4ge1xuICAgIGdyaWRJdGVtLnJlbW92ZSgpO1xuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVHcmlkSXRlbXM7IiwiLy9TZXRzIGJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBncmlkLWl0ZW1zIHRvIHdoaXRlXG5cbmZ1bmN0aW9uIHJlc2V0R3JpZEl0ZW1zKCkge1xuICBjb25zdCBncmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV0Y2gtZ3JpZF9fZ3JpZC1pdGVtXCIpO1xuICBncmlkSXRlbXMuZm9yRWFjaCgoZ3JpZEl0ZW0pID0+IHtcbiAgICAgIGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcIikgXG59KX1cblxuZXhwb3J0IGRlZmF1bHQgcmVzZXRHcmlkSXRlbXM7IiwiaW1wb3J0IHJlbW92ZUdyaWRJdGVtcyBmcm9tIFwiLi9yZW1vdmVHcmlkSXRlbXNcIjtcbmltcG9ydCBjcmVhdGVHcmlkSXRlbXMgZnJvbSBcIi4vY3JlYXRlR3JpZEl0ZW1zXCI7XG5pbXBvcnQgY3VycmVudElucHV0IGZyb20gXCIuL2N1cnJlbnRJbnB1dFwiO1xuaW1wb3J0IGFjdGl2YXRlR3JpZEl0ZW1zIGZyb20gXCIuL2FjdGl2YXRlR3JpZEl0ZW1zXCI7XG5cbmZ1bmN0aW9uIHJlc2l6ZUdyaWQodmFsdWUpIHtcbiAgcmVtb3ZlR3JpZEl0ZW1zKCk7XG4gIGNyZWF0ZUdyaWRJdGVtcyh2YWx1ZSk7XG4gIGFjdGl2YXRlR3JpZEl0ZW1zKGN1cnJlbnRJbnB1dC5jb2xvcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzaXplR3JpZDsiLCJpbXBvcnQgYWN0aXZhdGVHcmlkSXRlbXMgZnJvbSBcIi4vZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vYWN0aXZhdGVHcmlkSXRlbXNcIjtcbmltcG9ydCByZXNldEdyaWRJdGVtcyBmcm9tIFwiLi9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9yZXNldEdyaWRJdGVtc1wiO1xuaW1wb3J0IHJlc2l6ZUdyaWQgZnJvbSBcIi4vZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vcmVzaXplR3JpZFwiO1xuaW1wb3J0IGluaXRHcmlkIGZyb20gXCIuL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL2luaXRHcmlkXCI7XG5pbXBvcnQgeyBjb2xvclB1YlN1YiwgY2xlYXJCdG5QdWJTdWIsIHNpemVJbnB1dFB1YlN1YiB9IGZyb20gXCIuLi9ldGNoLWNvbnRyb2xzL2V0Y2gtY29udHJvbHNcIjtcblxuLy9DaGFuZ2VzIGNvbG9ycyBiYXNlZCBvbiB1c2VyIGlucHV0XG5cbmNvbG9yUHViU3ViLnN1YnNjcmliZShhY3RpdmF0ZUdyaWRJdGVtcylcblxuLy8gQ2xlYXJzIGFuZCByZXNpemVzIHRoZSBncmlkXG5cbmNsZWFyQnRuUHViU3ViLnN1YnNjcmliZShyZXNldEdyaWRJdGVtcyk7XG5zaXplSW5wdXRQdWJTdWIuc3Vic2NyaWJlKHJlc2l6ZUdyaWQpO1xuXG4vL0luaXRpYWxpemVzIGdyaWQgdXBvbiByZW5kZXJcblxuaW5pdEdyaWQoKTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvdmlld3MvZXRjaC1jb250cm9scy9ldGNoLWNvbnRyb2xzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZFwiO1xuXG4iXSwibmFtZXMiOlsiZ2VuUmFuZG9tSGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJpc1ZhbGlkSGV4Iiwic3RyaW5nIiwicmVnIiwidGVzdCIsIlB1YlN1YiIsImNvbnN0cnVjdG9yIiwic3Vic2NyaWJlcnMiLCJzdWJzY3JpYmUiLCJzdWJzY3JpYmVyIiwiRXJyb3IiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJmaWx0ZXIiLCJzdWIiLCJwdWJsaXNoIiwicGF5bG9hZCIsImZvckVhY2giLCJjb2xvclB1YlN1YiIsImNvbG9ySW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJ0eUJ0biIsImVyYXNlckJ0biIsImlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwiY2xlYXJCdG5QdWJTdWIiLCJjbGVhckJ0biIsInNpemVJbnB1dFB1YlN1YiIsInNpemVJbnB1dCIsImV0Y2hDb250cm9scyIsImV0Y2hDb250cm9sc0Rpc3BsYXlCdG4iLCJldGNoQ29udHJvbHNIaWRlQnRuIiwic2V0QXR0cmlidXRlIiwiZ2V0UmFuZG9tSGV4IiwiYWN0aXZhdGVHcmlkSXRlbXMiLCJjb2xvciIsImdyaWRJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJncmlkSXRlbSIsImNyZWF0ZUdyaWRJdGVtcyIsInNpemUiLCJOYU4iLCJhbW91bnQiLCJpIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIndyYXBwZXIiLCJhcHBlbmRDaGlsZCIsImN1cnJlbnRJbnB1dCIsImNvbCIsInNldENvbG9yIiwic2V0Q29sb3JCb3VuZCIsImJpbmQiLCJpbml0R3JpZCIsInJlbW92ZUdyaWRJdGVtcyIsInJlbW92ZSIsInJlc2V0R3JpZEl0ZW1zIiwicmVzaXplR3JpZCJdLCJzb3VyY2VSb290IjoiIn0=