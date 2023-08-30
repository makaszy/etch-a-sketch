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

/***/ "./src/components/views/etch-grid/etch-grid.js":
/*!*****************************************************!*\
  !*** ./src/components/views/etch-grid/etch-grid.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _etch_grid_manipulation_activateGridItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etch-grid--manipulation/activateGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/activateGridItems.js");
/* harmony import */ var _etch_grid_manipulation_resetGridItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etch-grid--manipulation/resetGridItems */ "./src/components/views/etch-grid/etch-grid--manipulation/resetGridItems.js");
/* harmony import */ var _etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etch-controls/etch-controls */ "./src/components/views/etch-controls/etch-controls.js");



_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_2__.colorInputPubSub.subscribe(_etch_grid_manipulation_activateGridItems__WEBPACK_IMPORTED_MODULE_0__["default"]);
_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_2__.partyBtnPubSub.subscribe(_etch_grid_manipulation_activateGridItems__WEBPACK_IMPORTED_MODULE_0__["default"]);
_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_2__.eraserBtnPubSub.subscribe(_etch_grid_manipulation_activateGridItems__WEBPACK_IMPORTED_MODULE_0__["default"]);
_etch_controls_etch_controls__WEBPACK_IMPORTED_MODULE_2__.clearBtnPubSub.subscribe(_etch_grid_manipulation_resetGridItems__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUc7QUFDM0M7QUFDUjtBQUVoRFgsOEdBQWUsQ0FBQyxFQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy91dGlscy9nZW5SYW5kb21IZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL2lzVmFsaWRIZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1jb250cm9scy9ldGNoLWNvbnRyb2xzLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vYWN0aXZhdGVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9jcmVhdGVHcmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzL2V0Y2gtZ3JpZC9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9yZXNldEdyaWRJdGVtcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZXMgcmFuZG9tIEhleCBzdHJpbmcgKi9cblxuZnVuY3Rpb24gZ2VuUmFuZG9tSGV4KCkge1xuICByZXR1cm4gYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuUmFuZG9tSGV4OyIsImZ1bmN0aW9uIGlzVmFsaWRIZXgoc3RyaW5nKSB7XG4gIGNvbnN0IHJlZyA9IC9eIyhbMC05YS1mXXszfSl7MSwyfSQvaTtcbiAgcmV0dXJuIHJlZy50ZXN0KHN0cmluZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWRIZXg7IiwiY2xhc3MgUHViU3ViIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW11cbiAgfVxuXG4gIHN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgaWYodHlwZW9mIHN1YnNjcmliZXIgIT09ICdmdW5jdGlvbicpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGVvZiBzdWJzY3JpYmVyfSBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCwgcHJvdmlkZSBhIGZ1bmN0aW9uIGluc3RlYWRgKVxuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcilcbiAgfVxuIFxuICB1bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgaWYodHlwZW9mIHN1YnNjcmliZXIgIT09ICdmdW5jdGlvbicpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGVvZiBzdWJzY3JpYmVyfSBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCwgcHJvdmlkZSBhIGZ1bmN0aW9uIGluc3RlYWRgKVxuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzID0gdGhpcy5zdWJzY3JpYmVycy5maWx0ZXIoc3ViID0+IHN1YiE9PSBzdWJzY3JpYmVyKVxuICB9XG5cbiAgcHVibGlzaChwYXlsb2FkKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlcihwYXlsb2FkKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJTdWI7XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gXCIuLi8uLi91dGlscy9wdWJTdWJcIjtcblxuLy9Db2xvciBpbnB1dFxuY29uc3QgY29sb3JJbnB1dFB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcbmNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2lucHV0LS1jb2xvclwiKTtcblxuY29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NvbG9ySW5wdXRQdWJTdWIucHVibGlzaChjb2xvcklucHV0LnZhbHVlKX0pO1xuY29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge2NvbG9ySW5wdXRQdWJTdWIucHVibGlzaChjb2xvcklucHV0LnZhbHVlKX0pO1xuXG4vL1BhcnR5IGJ1dHRvblxuXG5jb25zdCBwYXJ0eUJ0blB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcbmNvbnN0IHBhcnR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWNvbnRyb2xzX19idG4tLXBhcnR5XCIpO1xuXG5wYXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge3BhcnR5QnRuUHViU3ViLnB1Ymxpc2goXCJwYXJ0eVwiKX0pXG5cbi8vRXJhc2VyIGJ1dHRvblxuXG5jb25zdCBlcmFzZXJCdG5QdWJTdWIgPSBuZXcgUHViU3ViKCk7XG5jb25zdCBlcmFzZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtY29udHJvbHNfX2J0bi0tZXJhc2VyXCIpO1xuXG5lcmFzZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtlcmFzZXJCdG5QdWJTdWIucHVibGlzaChcIiNGRkZGRkZcIil9KVxuXG4vL0NsZWFyIGJ1dHRvblxuXG5jb25zdCBjbGVhckJ0blB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldGNoLWNvbnRyb2xzX19idG4tLWNsZWFyXCIpO1xuXG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NsZWFyQnRuUHViU3ViLnB1Ymxpc2goKX0pXG5cbmV4cG9ydCB7Y29sb3JJbnB1dFB1YlN1YiwgcGFydHlCdG5QdWJTdWIsIGVyYXNlckJ0blB1YlN1YiwgY2xlYXJCdG5QdWJTdWJ9O1xuXG4iLCJpbXBvcnQgZ2V0UmFuZG9tSGV4IGZyb20gXCIuLi8uLi8uLi91dGlscy9nZW5SYW5kb21IZXhcIlxuaW1wb3J0IGlzVmFsaWRIZXggZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2lzVmFsaWRIZXhcIjtcblxuLy9BZGRzIGhvdmVyIGZ1bmN0aW9uYWxpdHkgdGhhdCBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHVwb24gbW91c2VvdmVyIGV2ZW50LiBBY2NlcHRzIEhFWCBjb2xvcnMsIG9yIHRoZSBzdHJpbmcgcGFydHkuXG5cbmZ1bmN0aW9uIGFjdGl2YXRlR3JpZEl0ZW1zKGNvbG9yKSB7XG4gIGlmICghaXNWYWxpZEhleChjb2xvcikgJiYgY29sb3IgIT09IFwicGFydHlcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSW5wdXQ6IElucHV0IGhhcyB0byBiZSBhIHZhbGlkIGhleCwgb3IgdGhlIHN0cmluZyAncGFydHknXCIpXG4gIH1cbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGdyaWRJdGVtKSA9PiB7XG4gICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAoY29sb3IgPT09IFwicGFydHlcIikgPyBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoYHN0eWxlYCwgYGJhY2tncm91bmQtY29sb3I6ICR7Z2V0UmFuZG9tSGV4KCl9YCkgOiBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoYHN0eWxlYCwgYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9YCk7XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aXZhdGVHcmlkSXRlbXM7IiwiLy8gQ3JlYXRlIGdyaWQtaXRlbXMgZm9yIHRoZSBncmlkLiBVc2VkIHdoZW4gZ3JpZCBpcyBvcmlnaW5hbGx5IGNyZWF0ZWQgYW5kIHdoZW4gZ3JpZCBpcyBiZWluZyByZXNpemVkLlxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkSXRlbXMoc2l6ZSkge1xuICBpZiAoK3NpemUgPT09IE5hTikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlZhbHVlIGlzIG5vdCBhIG51bWJlciFcIilcbiAgfVxuICBjb25zdCBhbW91bnQgPSArc2l6ZSAqICtzaXplO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV0Y2gtZ3JpZF9fZ3JpZC1pdGVtXCIpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2gtZ3JpZFwiKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke3NpemV9LCAxZnIpOyBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgke3NpemV9LCAxZnIpYClcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR3JpZEl0ZW1zOyIsIi8vU2V0cyBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhbGwgZ3JpZC1pdGVtcyB0byB3aGl0ZVxuXG5mdW5jdGlvbiByZXNldEdyaWRJdGVtcygpIHtcbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldGNoLWdyaWRfX2dyaWQtaXRlbVwiKTtcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGdyaWRJdGVtKSA9PiB7XG4gICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHdoaXRlXCIpIFxufSl9XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2V0R3JpZEl0ZW1zOyIsImltcG9ydCBhY3RpdmF0ZUdyaWRJdGVtcyBmcm9tIFwiLi9ldGNoLWdyaWQtLW1hbmlwdWxhdGlvbi9hY3RpdmF0ZUdyaWRJdGVtc1wiO1xuaW1wb3J0IHJlc2V0R3JpZEl0ZW1zIGZyb20gXCIuL2V0Y2gtZ3JpZC0tbWFuaXB1bGF0aW9uL3Jlc2V0R3JpZEl0ZW1zXCI7XG5pbXBvcnQgeyBjb2xvcklucHV0UHViU3ViICwgcGFydHlCdG5QdWJTdWIsIGVyYXNlckJ0blB1YlN1YiwgY2xlYXJCdG5QdWJTdWIgIH0gZnJvbSBcIi4uL2V0Y2gtY29udHJvbHMvZXRjaC1jb250cm9sc1wiO1xuXG5jb2xvcklucHV0UHViU3ViLnN1YnNjcmliZShhY3RpdmF0ZUdyaWRJdGVtcyk7XG5wYXJ0eUJ0blB1YlN1Yi5zdWJzY3JpYmUoYWN0aXZhdGVHcmlkSXRlbXMpOyBcbmVyYXNlckJ0blB1YlN1Yi5zdWJzY3JpYmUoYWN0aXZhdGVHcmlkSXRlbXMpO1xuY2xlYXJCdG5QdWJTdWIuc3Vic2NyaWJlKHJlc2V0R3JpZEl0ZW1zKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVHcmlkSXRlbXMgZnJvbSBcIi4vY29tcG9uZW50cy92aWV3cy9ldGNoLWdyaWQvZXRjaC1ncmlkLS1tYW5pcHVsYXRpb24vY3JlYXRlR3JpZEl0ZW1zXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvdmlld3MvZXRjaC1jb250cm9scy9ldGNoLWNvbnRyb2xzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvdmlld3MvZXRjaC1ncmlkL2V0Y2gtZ3JpZFwiO1xuXG5jcmVhdGVHcmlkSXRlbXMoMTYpOyJdLCJuYW1lcyI6WyJnZW5SYW5kb21IZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImlzVmFsaWRIZXgiLCJzdHJpbmciLCJyZWciLCJ0ZXN0IiwiUHViU3ViIiwiY29uc3RydWN0b3IiLCJzdWJzY3JpYmVycyIsInN1YnNjcmliZSIsInN1YnNjcmliZXIiLCJFcnJvciIsInB1c2giLCJ1bnN1YnNjcmliZSIsImZpbHRlciIsInN1YiIsInB1Ymxpc2giLCJwYXlsb2FkIiwiZm9yRWFjaCIsImNvbG9ySW5wdXRQdWJTdWIiLCJjb2xvcklucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwicGFydHlCdG5QdWJTdWIiLCJwYXJ0eUJ0biIsImVyYXNlckJ0blB1YlN1YiIsImVyYXNlckJ0biIsImNsZWFyQnRuUHViU3ViIiwiY2xlYXJCdG4iLCJnZXRSYW5kb21IZXgiLCJhY3RpdmF0ZUdyaWRJdGVtcyIsImNvbG9yIiwiZ3JpZEl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImdyaWRJdGVtIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlR3JpZEl0ZW1zIiwic2l6ZSIsIk5hTiIsImFtb3VudCIsImkiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwid3JhcHBlciIsImFwcGVuZENoaWxkIiwicmVzZXRHcmlkSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9