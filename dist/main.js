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

const colorPubSub = new _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__["default"]();

//Color inputs

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


function resizeGrid(value) {
  (0,_removeGridItems__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_createGridItems__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
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
/* harmony import */ var _components_views_etch_grid_etch_grid_manipulation_createGridItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/views/etch-grid/etch-grid--manipulation/createGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/createGridItems.js");
/* harmony import */ var _components_views_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/views/etch-controls/etch-controls */ "./src/components/views/etch-controls/etch-controls.js");
/* harmony import */ var _components_views_etch_grid_etch_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/views/etch-grid/etch-grid */ "./src/components/views/etch-grid/etch-grid.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFlBQVlBLENBQUEsRUFBRztFQUN0QixPQUFRLElBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUUsRUFBQztBQUNoRTtBQUVBLGlFQUFlSixZQUFZOzs7Ozs7Ozs7Ozs7OztBQ04zQixTQUFTSyxVQUFVQSxDQUFDQyxNQUFNLEVBQUU7RUFDMUIsTUFBTUMsR0FBRyxHQUFHLHdCQUF3QjtFQUNwQyxPQUFPQSxHQUFHLENBQUNDLElBQUksQ0FBQ0YsTUFBTSxDQUFDO0FBQ3pCO0FBRUEsaUVBQWVELFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDTHpCLE1BQU1JLE1BQU0sQ0FBQztFQUNYQyxXQUFXQSxDQUFBLEVBQUU7SUFDWCxJQUFJLENBQUNDLFdBQVcsR0FBRyxFQUFFO0VBQ3ZCO0VBRUFDLFNBQVNBLENBQUNDLFVBQVUsRUFBRTtJQUNwQixJQUFHLE9BQU9BLFVBQVUsS0FBSyxVQUFVLEVBQUM7TUFDbEMsTUFBTSxJQUFJQyxLQUFLLENBQUUsR0FBRSxPQUFPRCxVQUFXLHNEQUFxRCxDQUFDO0lBQzdGO0lBQ0EsSUFBSSxDQUFDRixXQUFXLENBQUNJLElBQUksQ0FBQ0YsVUFBVSxDQUFDO0VBQ25DO0VBRUFHLFdBQVdBLENBQUNILFVBQVUsRUFBRTtJQUN0QixJQUFHLE9BQU9BLFVBQVUsS0FBSyxVQUFVLEVBQUM7TUFDbEMsTUFBTSxJQUFJQyxLQUFLLENBQUUsR0FBRSxPQUFPRCxVQUFXLHNEQUFxRCxDQUFDO0lBQzdGO0lBQ0EsSUFBSSxDQUFDRixXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXLENBQUNNLE1BQU0sQ0FBQ0MsR0FBRyxJQUFJQSxHQUFHLEtBQUlMLFVBQVUsQ0FBQztFQUN0RTtFQUVBTSxPQUFPQSxDQUFDQyxPQUFPLEVBQUU7SUFDZixJQUFJLENBQUNULFdBQVcsQ0FBQ1UsT0FBTyxDQUFDUixVQUFVLElBQUlBLFVBQVUsQ0FBQ08sT0FBTyxDQUFDLENBQUM7RUFDN0Q7QUFDRjtBQUVBLGlFQUFlWCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCbUI7QUFFeEMsTUFBTWEsV0FBVyxHQUFHLElBQUliLHFEQUFNLENBQUMsQ0FBQzs7QUFFaEM7O0FBRUEsTUFBTWMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQztBQUN6RSxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0FBQ3JFLE1BQU1FLFNBQVMsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsNkJBQTZCLENBQUM7QUFFdkUsQ0FBQ0YsVUFBVSxFQUFFRyxRQUFRLEVBQUVDLFNBQVMsQ0FBQyxDQUFDTixPQUFPLENBQUVPLEtBQUssSUFBSztFQUNuREEsS0FBSyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUFDUCxXQUFXLENBQUNILE9BQU8sQ0FBQ1MsS0FBSyxDQUFDRSxLQUFLLENBQUM7RUFBQSxDQUFDLENBQUM7RUFDekUsSUFBSUYsS0FBSyxLQUFLTCxVQUFVLEVBQUU7SUFDeEJBLFVBQVUsQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFBQ1AsV0FBVyxDQUFDSCxPQUFPLENBQUNJLFVBQVUsQ0FBQ08sS0FBSyxDQUFDO0lBQUEsQ0FBQyxDQUFDO0VBQ3JGO0FBQ0YsQ0FBQyxDQUFDOztBQUVGOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxJQUFJdEIscURBQU0sQ0FBQyxDQUFDO0FBQ25DLE1BQU11QixRQUFRLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0FBRXJFTyxRQUFRLENBQUNILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0VBQUNFLGNBQWMsQ0FBQ1osT0FBTyxDQUFDLENBQUM7QUFBQSxDQUFDLENBQUM7O0FBRXBFOztBQUVBLE1BQU1jLGVBQWUsR0FBRyxJQUFJeEIscURBQU0sQ0FBQyxDQUFDO0FBQ3BDLE1BQU15QixTQUFTLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDZCQUE2QixDQUFDO0FBRXZFUyxTQUFTLENBQUNMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0VBQUNJLGVBQWUsQ0FBQ2QsT0FBTyxDQUFDZSxTQUFTLENBQUNKLEtBQUssQ0FBQztBQUFBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qi9CO0FBQ0g7O0FBRW5EOztBQUVBLFNBQVNNLGlCQUFpQkEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ2hDLElBQUksQ0FBQ2hDLDZEQUFVLENBQUNnQyxLQUFLLENBQUMsSUFBSUEsS0FBSyxLQUFLLE9BQU8sRUFBRTtJQUMzQyxNQUFNLElBQUl2QixLQUFLLENBQUMsbUVBQW1FLENBQUM7RUFDdEY7RUFDQSxNQUFNd0IsU0FBUyxHQUFHZCxRQUFRLENBQUNlLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDO0VBQ3BFRCxTQUFTLENBQUNqQixPQUFPLENBQUVtQixRQUFRLElBQUs7SUFDOUJBLFFBQVEsQ0FBQ1gsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE1BQU07TUFDMUNRLEtBQUssS0FBSyxPQUFPLEdBQUlHLFFBQVEsQ0FBQ0MsWUFBWSxDQUFFLE9BQU0sRUFBRyxxQkFBb0JOLCtEQUFZLENBQUMsQ0FBRSxFQUFDLENBQUMsR0FBR0ssUUFBUSxDQUFDQyxZQUFZLENBQUUsT0FBTSxFQUFHLHFCQUFvQkosS0FBTSxFQUFDLENBQUM7SUFDNUosQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0o7QUFFQSxpRUFBZUQsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ2pCaEM7O0FBRUEsU0FBU00sZUFBZUEsQ0FBQ0MsSUFBSSxFQUFFO0VBQzdCLElBQUksQ0FBQ0EsSUFBSSxLQUFLQyxHQUFHLEVBQUU7SUFDakIsTUFBTSxJQUFJOUIsS0FBSyxDQUFDLHdCQUF3QixDQUFDO0VBQzNDO0VBQ0EsTUFBTStCLE1BQU0sR0FBRyxDQUFDRixJQUFJLEdBQUcsQ0FBQ0EsSUFBSTtFQUM1QixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsTUFBTSxFQUFFQyxDQUFDLEVBQUUsRUFBRTtJQUMvQixNQUFNQyxHQUFHLEdBQUd2QixRQUFRLENBQUN3QixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDRCxHQUFHLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQ3pDLE1BQU1DLE9BQU8sR0FBRzNCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUNwRDBCLE9BQU8sQ0FBQ1YsWUFBWSxDQUFDLE9BQU8sRUFBRyxpQ0FBZ0NFLElBQUssc0NBQXFDQSxJQUFLLFFBQU8sQ0FBQztJQUN0SFEsT0FBTyxDQUFDQyxXQUFXLENBQUNMLEdBQUcsQ0FBQztFQUMxQjtBQUNGO0FBRUEsaUVBQWVMLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmtCO0FBQ0k7QUFFcEQsU0FBU1csUUFBUUEsQ0FBQSxFQUFHO0VBQ2xCWCw0REFBZSxDQUFDLEVBQUUsQ0FBQztFQUNuQk4sOERBQWlCLENBQUMsU0FBUyxDQUFDO0FBQzlCO0FBRUEsaUVBQWVpQixRQUFROzs7Ozs7Ozs7Ozs7OztBQ1J2Qjs7QUFFQSxTQUFTQyxlQUFlQSxDQUFBLEVBQUc7RUFDekIsTUFBTWhCLFNBQVMsR0FBR2QsUUFBUSxDQUFDZSxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQztFQUNwRUQsU0FBUyxDQUFDakIsT0FBTyxDQUFFbUIsUUFBUSxJQUFLO0lBQzlCQSxRQUFRLENBQUNlLE1BQU0sQ0FBQyxDQUFDO0VBQ25CLENBQUMsQ0FBQztBQUNKO0FBRUEsaUVBQWVELGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDVDlCOztBQUVBLFNBQVNFLGNBQWNBLENBQUEsRUFBRztFQUN4QixNQUFNbEIsU0FBUyxHQUFHZCxRQUFRLENBQUNlLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDO0VBQ3BFRCxTQUFTLENBQUNqQixPQUFPLENBQUVtQixRQUFRLElBQUs7SUFDNUJBLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQztFQUMvRCxDQUFDLENBQUM7QUFBQTtBQUVGLGlFQUFlZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDUm1CO0FBQ0E7QUFFaEQsU0FBU0MsVUFBVUEsQ0FBQzNCLEtBQUssRUFBRTtFQUN6QndCLDREQUFlLENBQUMsQ0FBQztFQUNqQlosNERBQWUsQ0FBQ1osS0FBSyxDQUFDO0FBQ3hCO0FBRUEsaUVBQWUyQixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FDUm1EO0FBQ047QUFDUjtBQUNKO0FBQ29DOztBQUU5Rjs7QUFFQW5DLHFFQUFXLENBQUNWLFNBQVMsQ0FBQ3dCLGlGQUFpQixDQUFDOztBQUV4Qzs7QUFFQUwsd0VBQWMsQ0FBQ25CLFNBQVMsQ0FBQzRDLDhFQUFjLENBQUM7QUFDeEN2Qix5RUFBZSxDQUFDckIsU0FBUyxDQUFDNkMsMEVBQVUsQ0FBQzs7QUFFckM7O0FBRUFKLDRFQUFRLENBQUMsQ0FBQzs7Ozs7O1VDakJWO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05tRztBQUMzQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy91dGlscy9nZW5SYW5kb21IZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL2lzVmFsaWRIZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1jb250cm9scy9ldGNoLWNvbnRyb2xzLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vYWN0aXZhdGVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9jcmVhdGVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9pbml0R3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL3JlbW92ZUdyaWRJdGVtcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL3Jlc2V0R3JpZEl0ZW1zLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vcmVzaXplR3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZXMgcmFuZG9tIEhleCBzdHJpbmcgKi9cblxuZnVuY3Rpb24gZ2VuUmFuZG9tSGV4KCkge1xuICByZXR1cm4gYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuUmFuZG9tSGV4OyIsImZ1bmN0aW9uIGlzVmFsaWRIZXgoc3RyaW5nKSB7XG4gIGNvbnN0IHJlZyA9IC9eIyhbMC05YS1mXXszfSl7MSwyfSQvaTtcbiAgcmV0dXJuIHJlZy50ZXN0KHN0cmluZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWRIZXg7IiwiY2xhc3MgUHViU3ViIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW11cbiAgfVxuXG4gIHN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgaWYodHlwZW9mIHN1YnNjcmliZXIgIT09ICdmdW5jdGlvbicpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGVvZiBzdWJzY3JpYmVyfSBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCwgcHJvdmlkZSBhIGZ1bmN0aW9uIGluc3RlYWRgKVxuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcilcbiAgfVxuIFxuICB1bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgaWYodHlwZW9mIHN1YnNjcmliZXIgIT09ICdmdW5jdGlvbicpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGVvZiBzdWJzY3JpYmVyfSBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCwgcHJvdmlkZSBhIGZ1bmN0aW9uIGluc3RlYWRgKVxuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzID0gdGhpcy5zdWJzY3JpYmVycy5maWx0ZXIoc3ViID0+IHN1YiE9PSBzdWJzY3JpYmVyKVxuICB9XG5cbiAgcHVibGlzaChwYXlsb2FkKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlcihwYXlsb2FkKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJTdWI7XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gXCIuLi8uLi91dGlscy9wdWJTdWJcIjtcblxuY29uc3QgY29sb3JQdWJTdWIgPSBuZXcgUHViU3ViKCk7XG5cbi8vQ29sb3IgaW5wdXRzXG5cbmNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2lucHV0LS1jb2xvclwiKTtcbmNvbnN0IHBhcnR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWNvbnRyb2xzX19idG4tLXBhcnR5XCIpO1xuY29uc3QgZXJhc2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWNvbnRyb2xzX19idG4tLWVyYXNlclwiKTtcblxuW2NvbG9ySW5wdXQsIHBhcnR5QnRuLCBlcmFzZXJCdG5dLmZvckVhY2goKGlucHV0KSA9PiB7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y29sb3JQdWJTdWIucHVibGlzaChpbnB1dC52YWx1ZSl9KTtcbiAgaWYgKGlucHV0ID09PSBjb2xvcklucHV0KSB7XG4gICAgY29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge2NvbG9yUHViU3ViLnB1Ymxpc2goY29sb3JJbnB1dC52YWx1ZSl9KTtcbiAgfVxufSlcblxuLy9DbGVhciBidXR0b25cblxuY29uc3QgY2xlYXJCdG5QdWJTdWIgPSBuZXcgUHViU3ViKCk7XG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19fYnRuLS1jbGVhclwiKTtcblxuY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjbGVhckJ0blB1YlN1Yi5wdWJsaXNoKCl9KVxuXG4vL1NpemUgaW5wdXRcblxuY29uc3Qgc2l6ZUlucHV0UHViU3ViID0gbmV3IFB1YlN1YigpO1xuY29uc3Qgc2l6ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWNvbnRyb2xzX19pbnB1dC0tc2l6ZVwiKTtcblxuc2l6ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7c2l6ZUlucHV0UHViU3ViLnB1Ymxpc2goc2l6ZUlucHV0LnZhbHVlKX0pXG5cbmV4cG9ydCB7Y29sb3JQdWJTdWIsIGNsZWFyQnRuUHViU3ViLCBzaXplSW5wdXRQdWJTdWJ9O1xuXG4iLCJpbXBvcnQgZ2V0UmFuZG9tSGV4IGZyb20gXCIuLi8uLi8uLi91dGlscy9nZW5SYW5kb21IZXhcIlxuaW1wb3J0IGlzVmFsaWRIZXggZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2lzVmFsaWRIZXhcIjtcblxuLy9BZGRzIGhvdmVyIGZ1bmN0aW9uYWxpdHkgdGhhdCBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHVwb24gbW91c2VvdmVyIGV2ZW50LiBBY2NlcHRzIEhFWCBjb2xvcnMsIG9yIHRoZSBzdHJpbmcgcGFydHkuXG5cbmZ1bmN0aW9uIGFjdGl2YXRlR3JpZEl0ZW1zKGNvbG9yKSB7XG4gIGlmICghaXNWYWxpZEhleChjb2xvcikgJiYgY29sb3IgIT09IFwicGFydHlcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSW5wdXQ6IElucHV0IGhhcyB0byBiZSBhIHZhbGlkIGhleCwgb3IgdGhlIHN0cmluZyAncGFydHknXCIpXG4gIH1cbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGdyaWRJdGVtKSA9PiB7XG4gICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAoY29sb3IgPT09IFwicGFydHlcIikgPyBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoYHN0eWxlYCwgYGJhY2tncm91bmQtY29sb3I6ICR7Z2V0UmFuZG9tSGV4KCl9YCkgOiBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoYHN0eWxlYCwgYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9YCk7XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aXZhdGVHcmlkSXRlbXM7IiwiLy8gQ3JlYXRlIGdyaWQtaXRlbXMgZm9yIHRoZSBncmlkLiBVc2VkIHdoZW4gZ3JpZCBpcyBvcmlnaW5hbGx5IGNyZWF0ZWQgYW5kIHdoZW4gZ3JpZCBpcyBiZWluZyByZXNpemVkLlxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkSXRlbXMoc2l6ZSkge1xuICBpZiAoK3NpemUgPT09IE5hTikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlZhbHVlIGlzIG5vdCBhIG51bWJlciFcIilcbiAgfVxuICBjb25zdCBhbW91bnQgPSArc2l6ZSAqICtzaXplO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV0Y2gtZ3JpZF9fZ3JpZC1pdGVtXCIpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtZ3JpZFwiKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke3NpemV9LCAxZnIpOyBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgke3NpemV9LCAxZnIpYClcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR3JpZEl0ZW1zOyIsImltcG9ydCBjcmVhdGVHcmlkSXRlbXMgZnJvbSBcIi4vY3JlYXRlR3JpZEl0ZW1zXCI7XG5pbXBvcnQgYWN0aXZhdGVHcmlkSXRlbXMgZnJvbSBcIi4vYWN0aXZhdGVHcmlkSXRlbXNcIjtcblxuZnVuY3Rpb24gaW5pdEdyaWQoKSB7XG4gIGNyZWF0ZUdyaWRJdGVtcygxNik7XG4gIGFjdGl2YXRlR3JpZEl0ZW1zKFwiIzAwMDAwMFwiKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0R3JpZDsiLCIvLyBSZW1vdmVzIGdyaWQgaXRlbXMuIFVzZWQgd2hlbiBncmlkIGlzIGJlaW5nIHJlc2l6ZWQuXG5cbmZ1bmN0aW9uIHJlbW92ZUdyaWRJdGVtcygpIHtcbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGdyaWRJdGVtKSA9PiB7XG4gICAgZ3JpZEl0ZW0ucmVtb3ZlKCk7XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUdyaWRJdGVtczsiLCIvL1NldHMgYmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIGdyaWQtaXRlbXMgdG8gd2hpdGVcblxuZnVuY3Rpb24gcmVzZXRHcmlkSXRlbXMoKSB7XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXRjaC1ncmlkX19ncmlkLWl0ZW1cIik7XG4gIGdyaWRJdGVtcy5mb3JFYWNoKChncmlkSXRlbSkgPT4ge1xuICAgICAgZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVwiKSBcbn0pfVxuXG5leHBvcnQgZGVmYXVsdCByZXNldEdyaWRJdGVtczsiLCJpbXBvcnQgcmVtb3ZlR3JpZEl0ZW1zIGZyb20gXCIuL3JlbW92ZUdyaWRJdGVtc1wiO1xuaW1wb3J0IGNyZWF0ZUdyaWRJdGVtcyBmcm9tIFwiLi9jcmVhdGVHcmlkSXRlbXNcIjtcblxuZnVuY3Rpb24gcmVzaXplR3JpZCh2YWx1ZSkge1xuICByZW1vdmVHcmlkSXRlbXMoKTtcbiAgY3JlYXRlR3JpZEl0ZW1zKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzaXplR3JpZDsiLCJpbXBvcnQgYWN0aXZhdGVHcmlkSXRlbXMgZnJvbSBcIi4vZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vYWN0aXZhdGVHcmlkSXRlbXNcIjtcbmltcG9ydCByZXNldEdyaWRJdGVtcyBmcm9tIFwiLi9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9yZXNldEdyaWRJdGVtc1wiO1xuaW1wb3J0IHJlc2l6ZUdyaWQgZnJvbSBcIi4vZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vcmVzaXplR3JpZFwiO1xuaW1wb3J0IGluaXRHcmlkIGZyb20gXCIuL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL2luaXRHcmlkXCI7XG5pbXBvcnQgeyBjb2xvclB1YlN1YiwgY2xlYXJCdG5QdWJTdWIsIHNpemVJbnB1dFB1YlN1YiB9IGZyb20gXCIuLi9ldGNoLWNvbnRyb2xzL2V0Y2gtY29udHJvbHNcIjtcblxuLy9DaGFuZ2VzIGNvbG9ycyBiYXNlZCBvbiB1c2VyIGlucHV0XG5cbmNvbG9yUHViU3ViLnN1YnNjcmliZShhY3RpdmF0ZUdyaWRJdGVtcylcblxuLy8gQ2xlYXJzIGFuZCByZXNpemVzIHRoZSBncmlkXG5cbmNsZWFyQnRuUHViU3ViLnN1YnNjcmliZShyZXNldEdyaWRJdGVtcyk7XG5zaXplSW5wdXRQdWJTdWIuc3Vic2NyaWJlKHJlc2l6ZUdyaWQpO1xuXG4vL0luaXRpYWxpemVzIGdyaWQgdXBvbiByZW5kZXJcblxuaW5pdEdyaWQoKTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlR3JpZEl0ZW1zIGZyb20gXCIuL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL2NyZWF0ZUdyaWRJdGVtc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtY29udHJvbHMvZXRjaC1jb250cm9sc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWRcIjtcblxuIl0sIm5hbWVzIjpbImdlblJhbmRvbUhleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiaXNWYWxpZEhleCIsInN0cmluZyIsInJlZyIsInRlc3QiLCJQdWJTdWIiLCJjb25zdHJ1Y3RvciIsInN1YnNjcmliZXJzIiwic3Vic2NyaWJlIiwic3Vic2NyaWJlciIsIkVycm9yIiwicHVzaCIsInVuc3Vic2NyaWJlIiwiZmlsdGVyIiwic3ViIiwicHVibGlzaCIsInBheWxvYWQiLCJmb3JFYWNoIiwiY29sb3JQdWJTdWIiLCJjb2xvcklucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFydHlCdG4iLCJlcmFzZXJCdG4iLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImNsZWFyQnRuUHViU3ViIiwiY2xlYXJCdG4iLCJzaXplSW5wdXRQdWJTdWIiLCJzaXplSW5wdXQiLCJnZXRSYW5kb21IZXgiLCJhY3RpdmF0ZUdyaWRJdGVtcyIsImNvbG9yIiwiZ3JpZEl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImdyaWRJdGVtIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlR3JpZEl0ZW1zIiwic2l6ZSIsIk5hTiIsImFtb3VudCIsImkiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwid3JhcHBlciIsImFwcGVuZENoaWxkIiwiaW5pdEdyaWQiLCJyZW1vdmVHcmlkSXRlbXMiLCJyZW1vdmUiLCJyZXNldEdyaWRJdGVtcyIsInJlc2l6ZUdyaWQiXSwic291cmNlUm9vdCI6IiJ9