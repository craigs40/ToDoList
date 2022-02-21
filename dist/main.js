/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("const tasks = [\r\n  {\r\n    description: 'First Task',\r\n    completed: false,\r\n    index: 0,\r\n  },\r\n  {\r\n    description: 'Second Task',\r\n    completed: false,\r\n    index: 1,\r\n  },\r\n  {\r\n    description: 'Third Task',\r\n    completed: false,\r\n    index: 2,\r\n  },\r\n  {\r\n    description: 'Fourth Task',\r\n    completed: false,\r\n    index: 3,\r\n  },\r\n];\r\n\r\n// Function to iterate over the tasks array and populate an HTML list item element for each task.\r\ntasks.forEach((task) => {\r\n  const toDoList = document.getElementById('toDoList');\r\n  const listItem = document.createElement('li');\r\n  listItem.innerHTML = `\r\n  <input type=\"checkbox\" ${task.completed ? 'checked' : ''}>\r\n  <span>${task.description}</span>\r\n  `;\r\n  toDoList.appendChild(listItem);\r\n});\r\n\r\n// Sort tasks by index\r\ntasks.sort((a, b) => a.index - b.index);\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;