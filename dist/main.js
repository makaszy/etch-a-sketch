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
/* harmony export */   colorInputPubSub: () => (/* binding */ colorInputPubSub),
/* harmony export */   partyBtnPubSub: () => (/* binding */ partyBtnPubSub)
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

/***/ "./src/components/views/etch-grid/etch-grid.js":
/*!*****************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _etch_grid_manipulation_activateGridItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etch-grid--manipulation/activateGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/activateGridItems.js");
/* harmony import */ var _etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etch-controls/etch-controls */ "./src/components/views/etch-controls/etch-controls.js");


_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_1__.colorInputPubSub.subscribe(_etch_grid_manipulation_activateGridItems__WEBPACK_IMPORTED_MODULE_0__["default"]);
_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_1__.partyBtnPubSub.subscribe(_etch_grid_manipulation_activateGridItems__WEBPACK_IMPORTED_MODULE_0__["default"]);

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



(0,_components_views_etch_grid_etch_grid_manipulation_createGridItems__WEBPACK_IMPORTED_MODULE_0__["default"])(16);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFlBQVlBLENBQUEsRUFBRztFQUN0QixPQUFRLElBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUUsRUFBQztBQUNoRTtBQUVBLGlFQUFlSixZQUFZOzs7Ozs7Ozs7Ozs7OztBQ04zQixTQUFTSyxVQUFVQSxDQUFDQyxNQUFNLEVBQUU7RUFDMUIsTUFBTUMsR0FBRyxHQUFHLHdCQUF3QjtFQUNwQyxPQUFPQSxHQUFHLENBQUNDLElBQUksQ0FBQ0YsTUFBTSxDQUFDO0FBQ3pCO0FBRUEsaUVBQWVELFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDTHpCLE1BQU1JLE1BQU0sQ0FBQztFQUNYQyxXQUFXQSxDQUFBLEVBQUU7SUFDWCxJQUFJLENBQUNDLFdBQVcsR0FBRyxFQUFFO0VBQ3ZCO0VBRUFDLFNBQVNBLENBQUNDLFVBQVUsRUFBRTtJQUNwQixJQUFHLE9BQU9BLFVBQVUsS0FBSyxVQUFVLEVBQUM7TUFDbEMsTUFBTSxJQUFJQyxLQUFLLENBQUUsR0FBRSxPQUFPRCxVQUFXLHNEQUFxRCxDQUFDO0lBQzdGO0lBQ0EsSUFBSSxDQUFDRixXQUFXLENBQUNJLElBQUksQ0FBQ0YsVUFBVSxDQUFDO0VBQ25DO0VBRUFHLFdBQVdBLENBQUNILFVBQVUsRUFBRTtJQUN0QixJQUFHLE9BQU9BLFVBQVUsS0FBSyxVQUFVLEVBQUM7TUFDbEMsTUFBTSxJQUFJQyxLQUFLLENBQUUsR0FBRSxPQUFPRCxVQUFXLHNEQUFxRCxDQUFDO0lBQzdGO0lBQ0EsSUFBSSxDQUFDRixXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXLENBQUNNLE1BQU0sQ0FBQ0MsR0FBRyxJQUFJQSxHQUFHLEtBQUlMLFVBQVUsQ0FBQztFQUN0RTtFQUVBTSxPQUFPQSxDQUFDQyxPQUFPLEVBQUU7SUFDZixJQUFJLENBQUNULFdBQVcsQ0FBQ1UsT0FBTyxDQUFDUixVQUFVLElBQUlBLFVBQVUsQ0FBQ08sT0FBTyxDQUFDLENBQUM7RUFDN0Q7QUFDRjtBQUVBLGlFQUFlWCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJtQjs7QUFFeEM7QUFDQSxNQUFNYSxnQkFBZ0IsR0FBRyxJQUFJYixxREFBTSxDQUFDLENBQUM7QUFDckMsTUFBTWMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQztBQUV6RUYsVUFBVSxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtFQUFDSixnQkFBZ0IsQ0FBQ0gsT0FBTyxDQUFDSSxVQUFVLENBQUNJLEtBQUssQ0FBQztBQUFBLENBQUMsQ0FBQztBQUN4RkosVUFBVSxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtFQUFDSixnQkFBZ0IsQ0FBQ0gsT0FBTyxDQUFDSSxVQUFVLENBQUNJLEtBQUssQ0FBQztBQUFBLENBQUMsQ0FBQzs7QUFFeEY7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLElBQUluQixxREFBTSxDQUFDLENBQUM7QUFDbkMsTUFBTW9CLFFBQVEsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsNEJBQTRCLENBQUM7QUFDckVJLFFBQVEsQ0FBQ0gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07RUFBQ0UsY0FBYyxDQUFDVCxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQUEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JyQjtBQUNIOztBQUVuRDs7QUFFQSxTQUFTWSxpQkFBaUJBLENBQUNDLEtBQUssRUFBRTtFQUNoQyxJQUFJLENBQUMzQiw2REFBVSxDQUFDMkIsS0FBSyxDQUFDLElBQUlBLEtBQUssS0FBSyxPQUFPLEVBQUU7SUFDM0MsTUFBTSxJQUFJbEIsS0FBSyxDQUFDLG1FQUFtRSxDQUFDO0VBQ3RGO0VBQ0EsTUFBTW1CLFNBQVMsR0FBR1QsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQztFQUNwRUQsU0FBUyxDQUFDWixPQUFPLENBQUVjLFFBQVEsSUFBSztJQUM5QkEsUUFBUSxDQUFDVCxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFBTTtNQUMxQ00sS0FBSyxLQUFLLE9BQU8sR0FBSUcsUUFBUSxDQUFDQyxZQUFZLENBQUUsT0FBTSxFQUFHLHFCQUFvQk4sK0RBQVksQ0FBQyxDQUFFLEVBQUMsQ0FBQyxHQUFHSyxRQUFRLENBQUNDLFlBQVksQ0FBRSxPQUFNLEVBQUcscUJBQW9CSixLQUFNLEVBQUMsQ0FBQztJQUM1SixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSjtBQUVBLGlFQUFlRCxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDakJoQzs7QUFFQSxTQUFTTSxlQUFlQSxDQUFDQyxJQUFJLEVBQUU7RUFDN0IsSUFBSSxDQUFDQSxJQUFJLEtBQUtDLEdBQUcsRUFBRTtJQUNqQixNQUFNLElBQUl6QixLQUFLLENBQUMsd0JBQXdCLENBQUM7RUFDM0M7RUFDQSxNQUFNMEIsTUFBTSxHQUFHLENBQUNGLElBQUksR0FBRyxDQUFDQSxJQUFJO0VBQzVCLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxNQUFNLEVBQUVDLENBQUMsRUFBRSxFQUFFO0lBQy9CLE1BQU1DLEdBQUcsR0FBR2xCLFFBQVEsQ0FBQ21CLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDekNELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7SUFDekMsTUFBTUMsT0FBTyxHQUFHdEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3BEcUIsT0FBTyxDQUFDVixZQUFZLENBQUMsT0FBTyxFQUFHLGlDQUFnQ0UsSUFBSyxzQ0FBcUNBLElBQUssUUFBTyxDQUFDO0lBQ3RIUSxPQUFPLENBQUNDLFdBQVcsQ0FBQ0wsR0FBRyxDQUFDO0VBQzFCO0FBQ0Y7QUFFQSxpRUFBZUwsZUFBZTs7Ozs7Ozs7Ozs7OztBQ2hCOEM7QUFDTztBQUVuRmYsMEVBQWdCLENBQUNWLFNBQVMsQ0FBQ21CLGlGQUFpQixDQUFDO0FBQzdDSCx3RUFBYyxDQUFDaEIsU0FBUyxDQUFDbUIsaUZBQWlCLENBQUM7Ozs7OztVQ0ozQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUc7QUFDM0M7QUFDUjtBQUVoRE0sOEdBQWUsQ0FBQyxFQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy91dGlscy9nZW5SYW5kb21IZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL2lzVmFsaWRIZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1jb250cm9scy9ldGNoLWNvbnRyb2xzLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vYWN0aXZhdGVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9jcmVhdGVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhdGVzIHJhbmRvbSBIZXggc3RyaW5nICovXG5cbmZ1bmN0aW9uIGdlblJhbmRvbUhleCgpIHtcbiAgcmV0dXJuIGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlblJhbmRvbUhleDsiLCJmdW5jdGlvbiBpc1ZhbGlkSGV4KHN0cmluZykge1xuICBjb25zdCByZWcgPSAvXiMoWzAtOWEtZl17M30pezEsMn0kL2k7XG4gIHJldHVybiByZWcudGVzdChzdHJpbmcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkSGV4OyIsImNsYXNzIFB1YlN1YiB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdXG4gIH1cblxuICBzdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgIGlmKHR5cGVvZiBzdWJzY3JpYmVyICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0eXBlb2Ygc3Vic2NyaWJlcn0gaXMgbm90IGEgdmFsaWQgYXJndW1lbnQsIHByb3ZpZGUgYSBmdW5jdGlvbiBpbnN0ZWFkYClcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpXG4gIH1cbiBcbiAgdW5zdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgIGlmKHR5cGVvZiBzdWJzY3JpYmVyICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0eXBlb2Ygc3Vic2NyaWJlcn0gaXMgbm90IGEgdmFsaWQgYXJndW1lbnQsIHByb3ZpZGUgYSBmdW5jdGlvbiBpbnN0ZWFkYClcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IHRoaXMuc3Vic2NyaWJlcnMuZmlsdGVyKHN1YiA9PiBzdWIhPT0gc3Vic2NyaWJlcilcbiAgfVxuXG4gIHB1Ymxpc2gocGF5bG9hZCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIocGF5bG9hZCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHViU3ViO1xuIiwiaW1wb3J0IFB1YlN1YiBmcm9tIFwiLi4vLi4vdXRpbHMvcHViU3ViXCI7XG5cbi8vQ29sb3IgaW5wdXRcbmNvbnN0IGNvbG9ySW5wdXRQdWJTdWIgPSBuZXcgUHViU3ViKCk7XG5jb25zdCBjb2xvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWNvbnRyb2xzX19pbnB1dC0tY29sb3JcIik7XG5cbmNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjb2xvcklucHV0UHViU3ViLnB1Ymxpc2goY29sb3JJbnB1dC52YWx1ZSl9KTtcbmNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtjb2xvcklucHV0UHViU3ViLnB1Ymxpc2goY29sb3JJbnB1dC52YWx1ZSl9KTtcblxuLy9QYXJ0eSBidXR0b25cblxuY29uc3QgcGFydHlCdG5QdWJTdWIgPSBuZXcgUHViU3ViKCk7XG5jb25zdCBwYXJ0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXRjaC1jb250cm9sc19fYnRuLS1wYXJ0eVwiKTtcbnBhcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7cGFydHlCdG5QdWJTdWIucHVibGlzaChcInBhcnR5XCIpfSlcblxuZXhwb3J0IHtjb2xvcklucHV0UHViU3ViLCBwYXJ0eUJ0blB1YlN1Yn07IiwiaW1wb3J0IGdldFJhbmRvbUhleCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZ2VuUmFuZG9tSGV4XCJcbmltcG9ydCBpc1ZhbGlkSGV4IGZyb20gXCIuLi8uLi8uLi91dGlscy9pc1ZhbGlkSGV4XCI7XG5cbi8vQWRkcyBob3ZlciBmdW5jdGlvbmFsaXR5IHRoYXQgY2hhbmdlcyB0aGUgYmFja2dyb3VuZCBjb2xvciB1cG9uIG1vdXNlb3ZlciBldmVudC4gQWNjZXB0cyBIRVggY29sb3JzLCBvciB0aGUgc3RyaW5nIHBhcnR5LlxuXG5mdW5jdGlvbiBhY3RpdmF0ZUdyaWRJdGVtcyhjb2xvcikge1xuICBpZiAoIWlzVmFsaWRIZXgoY29sb3IpICYmIGNvbG9yICE9PSBcInBhcnR5XCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIElucHV0OiBJbnB1dCBoYXMgdG8gYmUgYSB2YWxpZCBoZXgsIG9yIHRoZSBzdHJpbmcgJ3BhcnR5J1wiKVxuICB9XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXRjaC1ncmlkX19ncmlkLWl0ZW1cIik7XG4gIGdyaWRJdGVtcy5mb3JFYWNoKChncmlkSXRlbSkgPT4ge1xuICAgIGdyaWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgKGNvbG9yID09PSBcInBhcnR5XCIpID8gZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKGBzdHlsZWAsIGBiYWNrZ3JvdW5kLWNvbG9yOiAke2dldFJhbmRvbUhleCgpfWApIDogZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKGBzdHlsZWAsIGBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfWApO1xuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGl2YXRlR3JpZEl0ZW1zOyIsIi8vIENyZWF0ZSBncmlkLWl0ZW1zIGZvciB0aGUgZ3JpZC4gVXNlZCB3aGVuIGdyaWQgaXMgb3JpZ2luYWxseSBjcmVhdGVkIGFuZCB3aGVuIGdyaWQgaXMgYmVpbmcgcmVzaXplZC5cblxuZnVuY3Rpb24gY3JlYXRlR3JpZEl0ZW1zKHNpemUpIHtcbiAgaWYgKCtzaXplID09PSBOYU4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSBpcyBub3QgYSBudW1iZXIhXCIpXG4gIH1cbiAgY29uc3QgYW1vdW50ID0gK3NpemUgKiArc2l6ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWdyaWRcIik7XG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtzaXplfSwgMWZyKTsgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoJHtzaXplfSwgMWZyKWApXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdyaWRJdGVtczsiLCJpbXBvcnQgYWN0aXZhdGVHcmlkSXRlbXMgZnJvbSBcIi4vZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vYWN0aXZhdGVHcmlkSXRlbXNcIjtcbmltcG9ydCB7IGNvbG9ySW5wdXRQdWJTdWIgLCBwYXJ0eUJ0blB1YlN1YiB9IGZyb20gXCIuLi9ldGNoLWNvbnRyb2xzL2V0Y2gtY29udHJvbHNcIjtcblxuY29sb3JJbnB1dFB1YlN1Yi5zdWJzY3JpYmUoYWN0aXZhdGVHcmlkSXRlbXMpO1xucGFydHlCdG5QdWJTdWIuc3Vic2NyaWJlKGFjdGl2YXRlR3JpZEl0ZW1zKTsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlR3JpZEl0ZW1zIGZyb20gXCIuL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL2NyZWF0ZUdyaWRJdGVtc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtY29udHJvbHMvZXRjaC1jb250cm9sc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWRcIjtcblxuY3JlYXRlR3JpZEl0ZW1zKDE2KTsiXSwibmFtZXMiOlsiZ2VuUmFuZG9tSGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJpc1ZhbGlkSGV4Iiwic3RyaW5nIiwicmVnIiwidGVzdCIsIlB1YlN1YiIsImNvbnN0cnVjdG9yIiwic3Vic2NyaWJlcnMiLCJzdWJzY3JpYmUiLCJzdWJzY3JpYmVyIiwiRXJyb3IiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJmaWx0ZXIiLCJzdWIiLCJwdWJsaXNoIiwicGF5bG9hZCIsImZvckVhY2giLCJjb2xvcklucHV0UHViU3ViIiwiY29sb3JJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsInBhcnR5QnRuUHViU3ViIiwicGFydHlCdG4iLCJnZXRSYW5kb21IZXgiLCJhY3RpdmF0ZUdyaWRJdGVtcyIsImNvbG9yIiwiZ3JpZEl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImdyaWRJdGVtIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlR3JpZEl0ZW1zIiwic2l6ZSIsIk5hTiIsImFtb3VudCIsImkiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwid3JhcHBlciIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==