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
/* harmony export */   colorInputPubSub: () => (/* binding */ colorInputPubSub),
/* harmony export */   eraserBtnPubSub: () => (/* binding */ eraserBtnPubSub),
/* harmony export */   partyBtnPubSub: () => (/* binding */ partyBtnPubSub),
/* harmony export */   sizeInputPubSub: () => (/* binding */ sizeInputPubSub)
/* harmony export */ });
/* harmony import */ var _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pubSub */ "./src/components/utils/pubSub.js");


//Color input
const colorInputPubSub = new _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__["default"]();
const colorInput = document.querySelector(".etch-controls__input--color");
colorInput.addEventListener("click", () => {
  colorInputPubSub.publish(colorInput.value);
});
colorInput.addEventListener("input", () => {
  colorInputPubSub.publish(colorInput.value);
});

//Party button

const partyBtnPubSub = new _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__["default"]();
const partyBtn = document.querySelector(".etch-controls__btn--party");
partyBtn.addEventListener("click", () => {
  partyBtnPubSub.publish("party");
});

//Eraser button

const eraserBtnPubSub = new _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__["default"]();
const eraserBtn = document.querySelector(".etch-controls__btn--eraser");
eraserBtn.addEventListener("click", () => {
  eraserBtnPubSub.publish("#FFFFFF");
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





[_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_4__.colorInputPubSub, _etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_4__.partyBtnPubSub, _etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_4__.eraserBtnPubSub].forEach(pubSub => {
  pubSub.subscribe(_etch_grid_manipulation_activateGridItems__WEBPACK_IMPORTED_MODULE_0__["default"]);
});
_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_4__.clearBtnPubSub.subscribe(_etch_grid_manipulation_resetGridItems__WEBPACK_IMPORTED_MODULE_1__["default"]);
_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_4__.sizeInputPubSub.subscribe(_etch_grid_manipulation_resizeGrid__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1HO0FBQzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL2dlblJhbmRvbUhleC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvaXNWYWxpZEhleC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvcHViU3ViLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWNvbnRyb2xzL2V0Y2gtY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9hY3RpdmF0ZUdyaWRJdGVtcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL2NyZWF0ZUdyaWRJdGVtcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL2luaXRHcmlkLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vcmVtb3ZlR3JpZEl0ZW1zLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vcmVzZXRHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9yZXNpemVHcmlkLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYXRlcyByYW5kb20gSGV4IHN0cmluZyAqL1xuXG5mdW5jdGlvbiBnZW5SYW5kb21IZXgoKSB7XG4gIHJldHVybiBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5SYW5kb21IZXg7IiwiZnVuY3Rpb24gaXNWYWxpZEhleChzdHJpbmcpIHtcbiAgY29uc3QgcmVnID0gL14jKFswLTlhLWZdezN9KXsxLDJ9JC9pO1xuICByZXR1cm4gcmVnLnRlc3Qoc3RyaW5nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZEhleDsiLCJjbGFzcyBQdWJTdWIge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXVxuICB9XG5cbiAgc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICBpZih0eXBlb2Ygc3Vic2NyaWJlciAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZW9mIHN1YnNjcmliZXJ9IGlzIG5vdCBhIHZhbGlkIGFyZ3VtZW50LCBwcm92aWRlIGEgZnVuY3Rpb24gaW5zdGVhZGApXG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKVxuICB9XG4gXG4gIHVuc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICBpZih0eXBlb2Ygc3Vic2NyaWJlciAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZW9mIHN1YnNjcmliZXJ9IGlzIG5vdCBhIHZhbGlkIGFyZ3VtZW50LCBwcm92aWRlIGEgZnVuY3Rpb24gaW5zdGVhZGApXG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB0aGlzLnN1YnNjcmliZXJzLmZpbHRlcihzdWIgPT4gc3ViIT09IHN1YnNjcmliZXIpXG4gIH1cblxuICBwdWJsaXNoKHBheWxvYWQpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyKHBheWxvYWQpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1YlN1YjtcbiIsImltcG9ydCBQdWJTdWIgZnJvbSBcIi4uLy4uL3V0aWxzL3B1YlN1YlwiO1xuXG4vL0NvbG9yIGlucHV0XG5jb25zdCBjb2xvcklucHV0UHViU3ViID0gbmV3IFB1YlN1YigpO1xuY29uc3QgY29sb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19faW5wdXQtLWNvbG9yXCIpO1xuXG5jb2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y29sb3JJbnB1dFB1YlN1Yi5wdWJsaXNoKGNvbG9ySW5wdXQudmFsdWUpfSk7XG5jb2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7Y29sb3JJbnB1dFB1YlN1Yi5wdWJsaXNoKGNvbG9ySW5wdXQudmFsdWUpfSk7XG5cbi8vUGFydHkgYnV0dG9uXG5cbmNvbnN0IHBhcnR5QnRuUHViU3ViID0gbmV3IFB1YlN1YigpO1xuY29uc3QgcGFydHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2J0bi0tcGFydHlcIik7XG5cbnBhcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7cGFydHlCdG5QdWJTdWIucHVibGlzaChcInBhcnR5XCIpfSlcblxuLy9FcmFzZXIgYnV0dG9uXG5cbmNvbnN0IGVyYXNlckJ0blB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcbmNvbnN0IGVyYXNlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19fYnRuLS1lcmFzZXJcIik7XG5cbmVyYXNlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2VyYXNlckJ0blB1YlN1Yi5wdWJsaXNoKFwiI0ZGRkZGRlwiKX0pXG5cbi8vQ2xlYXIgYnV0dG9uXG5cbmNvbnN0IGNsZWFyQnRuUHViU3ViID0gbmV3IFB1YlN1YigpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2J0bi0tY2xlYXJcIik7XG5cbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2xlYXJCdG5QdWJTdWIucHVibGlzaCgpfSlcblxuLy9TaXplIGlucHV0XG5cbmNvbnN0IHNpemVJbnB1dFB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcbmNvbnN0IHNpemVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19faW5wdXQtLXNpemVcIik7XG5cbnNpemVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge3NpemVJbnB1dFB1YlN1Yi5wdWJsaXNoKHNpemVJbnB1dC52YWx1ZSl9KVxuXG5leHBvcnQge2NvbG9ySW5wdXRQdWJTdWIsIHBhcnR5QnRuUHViU3ViLCBlcmFzZXJCdG5QdWJTdWIsIGNsZWFyQnRuUHViU3ViLCBzaXplSW5wdXRQdWJTdWJ9O1xuXG4iLCJpbXBvcnQgZ2V0UmFuZG9tSGV4IGZyb20gXCIuLi8uLi8uLi91dGlscy9nZW5SYW5kb21IZXhcIlxuaW1wb3J0IGlzVmFsaWRIZXggZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2lzVmFsaWRIZXhcIjtcblxuLy9BZGRzIGhvdmVyIGZ1bmN0aW9uYWxpdHkgdGhhdCBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHVwb24gbW91c2VvdmVyIGV2ZW50LiBBY2NlcHRzIEhFWCBjb2xvcnMsIG9yIHRoZSBzdHJpbmcgcGFydHkuXG5cbmZ1bmN0aW9uIGFjdGl2YXRlR3JpZEl0ZW1zKGNvbG9yKSB7XG4gIGlmICghaXNWYWxpZEhleChjb2xvcikgJiYgY29sb3IgIT09IFwicGFydHlcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSW5wdXQ6IElucHV0IGhhcyB0byBiZSBhIHZhbGlkIGhleCwgb3IgdGhlIHN0cmluZyAncGFydHknXCIpXG4gIH1cbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGdyaWRJdGVtKSA9PiB7XG4gICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAoY29sb3IgPT09IFwicGFydHlcIikgPyBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoYHN0eWxlYCwgYGJhY2tncm91bmQtY29sb3I6ICR7Z2V0UmFuZG9tSGV4KCl9YCkgOiBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoYHN0eWxlYCwgYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9YCk7XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aXZhdGVHcmlkSXRlbXM7IiwiLy8gQ3JlYXRlIGdyaWQtaXRlbXMgZm9yIHRoZSBncmlkLiBVc2VkIHdoZW4gZ3JpZCBpcyBvcmlnaW5hbGx5IGNyZWF0ZWQgYW5kIHdoZW4gZ3JpZCBpcyBiZWluZyByZXNpemVkLlxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkSXRlbXMoc2l6ZSkge1xuICBpZiAoK3NpemUgPT09IE5hTikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlZhbHVlIGlzIG5vdCBhIG51bWJlciFcIilcbiAgfVxuICBjb25zdCBhbW91bnQgPSArc2l6ZSAqICtzaXplO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV0Y2gtZ3JpZF9fZ3JpZC1pdGVtXCIpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtZ3JpZFwiKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke3NpemV9LCAxZnIpOyBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgke3NpemV9LCAxZnIpYClcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR3JpZEl0ZW1zOyIsImltcG9ydCBjcmVhdGVHcmlkSXRlbXMgZnJvbSBcIi4vY3JlYXRlR3JpZEl0ZW1zXCI7XG5pbXBvcnQgYWN0aXZhdGVHcmlkSXRlbXMgZnJvbSBcIi4vYWN0aXZhdGVHcmlkSXRlbXNcIjtcblxuZnVuY3Rpb24gaW5pdEdyaWQoKSB7XG4gIGNyZWF0ZUdyaWRJdGVtcygxNik7XG4gIGFjdGl2YXRlR3JpZEl0ZW1zKFwiIzAwMDAwMFwiKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0R3JpZDsiLCIvLyBSZW1vdmVzIGdyaWQgaXRlbXMuIFVzZWQgd2hlbiBncmlkIGlzIGJlaW5nIHJlc2l6ZWQuXG5cbmZ1bmN0aW9uIHJlbW92ZUdyaWRJdGVtcygpIHtcbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGdyaWRJdGVtKSA9PiB7XG4gICAgZ3JpZEl0ZW0ucmVtb3ZlKCk7XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUdyaWRJdGVtczsiLCIvL1NldHMgYmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIGdyaWQtaXRlbXMgdG8gd2hpdGVcblxuZnVuY3Rpb24gcmVzZXRHcmlkSXRlbXMoKSB7XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXRjaC1ncmlkX19ncmlkLWl0ZW1cIik7XG4gIGdyaWRJdGVtcy5mb3JFYWNoKChncmlkSXRlbSkgPT4ge1xuICAgICAgZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVwiKSBcbn0pfVxuXG5leHBvcnQgZGVmYXVsdCByZXNldEdyaWRJdGVtczsiLCJpbXBvcnQgcmVtb3ZlR3JpZEl0ZW1zIGZyb20gXCIuL3JlbW92ZUdyaWRJdGVtc1wiO1xuaW1wb3J0IGNyZWF0ZUdyaWRJdGVtcyBmcm9tIFwiLi9jcmVhdGVHcmlkSXRlbXNcIjtcblxuZnVuY3Rpb24gcmVzaXplR3JpZCh2YWx1ZSkge1xuICByZW1vdmVHcmlkSXRlbXMoKTtcbiAgY3JlYXRlR3JpZEl0ZW1zKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzaXplR3JpZDsiLCJpbXBvcnQgYWN0aXZhdGVHcmlkSXRlbXMgZnJvbSBcIi4vZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vYWN0aXZhdGVHcmlkSXRlbXNcIjtcbmltcG9ydCByZXNldEdyaWRJdGVtcyBmcm9tIFwiLi9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9yZXNldEdyaWRJdGVtc1wiO1xuaW1wb3J0IHJlc2l6ZUdyaWQgZnJvbSBcIi4vZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vcmVzaXplR3JpZFwiO1xuaW1wb3J0IGluaXRHcmlkIGZyb20gXCIuL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL2luaXRHcmlkXCI7XG5pbXBvcnQgeyBjb2xvcklucHV0UHViU3ViICwgcGFydHlCdG5QdWJTdWIsIGVyYXNlckJ0blB1YlN1YiwgY2xlYXJCdG5QdWJTdWIsIHNpemVJbnB1dFB1YlN1YiB9IGZyb20gXCIuLi9ldGNoLWNvbnRyb2xzL2V0Y2gtY29udHJvbHNcIjtcblxuW2NvbG9ySW5wdXRQdWJTdWIsIHBhcnR5QnRuUHViU3ViLCBlcmFzZXJCdG5QdWJTdWJdLmZvckVhY2goKHB1YlN1YikgPT4ge1xuICBwdWJTdWIuc3Vic2NyaWJlKGFjdGl2YXRlR3JpZEl0ZW1zKTtcbn0pXG5cbmNsZWFyQnRuUHViU3ViLnN1YnNjcmliZShyZXNldEdyaWRJdGVtcyk7XG5zaXplSW5wdXRQdWJTdWIuc3Vic2NyaWJlKHJlc2l6ZUdyaWQpO1xuXG5pbml0R3JpZCgpO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVHcmlkSXRlbXMgZnJvbSBcIi4vY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vY3JlYXRlR3JpZEl0ZW1zXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvdmlld3MvZXRjaC1jb250cm9scy9ldGNoLWNvbnRyb2xzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZFwiO1xuXG4iXSwibmFtZXMiOlsiZ2VuUmFuZG9tSGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJpc1ZhbGlkSGV4Iiwic3RyaW5nIiwicmVnIiwidGVzdCIsIlB1YlN1YiIsImNvbnN0cnVjdG9yIiwic3Vic2NyaWJlcnMiLCJzdWJzY3JpYmUiLCJzdWJzY3JpYmVyIiwiRXJyb3IiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJmaWx0ZXIiLCJzdWIiLCJwdWJsaXNoIiwicGF5bG9hZCIsImZvckVhY2giLCJjb2xvcklucHV0UHViU3ViIiwiY29sb3JJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsInBhcnR5QnRuUHViU3ViIiwicGFydHlCdG4iLCJlcmFzZXJCdG5QdWJTdWIiLCJlcmFzZXJCdG4iLCJjbGVhckJ0blB1YlN1YiIsImNsZWFyQnRuIiwic2l6ZUlucHV0UHViU3ViIiwic2l6ZUlucHV0IiwiZ2V0UmFuZG9tSGV4IiwiYWN0aXZhdGVHcmlkSXRlbXMiLCJjb2xvciIsImdyaWRJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJncmlkSXRlbSIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUdyaWRJdGVtcyIsInNpemUiLCJOYU4iLCJhbW91bnQiLCJpIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIndyYXBwZXIiLCJhcHBlbmRDaGlsZCIsImluaXRHcmlkIiwicmVtb3ZlR3JpZEl0ZW1zIiwicmVtb3ZlIiwicmVzZXRHcmlkSXRlbXMiLCJyZXNpemVHcmlkIiwicHViU3ViIl0sInNvdXJjZVJvb3QiOiIifQ==