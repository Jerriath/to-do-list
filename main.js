/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInDays/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInDays/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((title) => {
    
    let newProject = {
        title,
        taskArray: [], //Rough array with tasks randomly pushed on
        sortedTaskArray: [], //sorted task array (sorteded depending on sort option)
        addTask: function(newTask) {
            newTask.project = this.title;
            this.taskArray.push(newTask);
        },
        //Used to find index of desired task title (can be found from DOM)
        findIndex: function(taskTitle) {
            let index = this.taskArray.findIndex(i => i.title === taskTitle);
            return index;
        },
        removeTask: function(index) {
            this.taskArray.splice(index, 1);
        },
        clearSortedArray: function() {
            this.sortedTaskArray.splice(0, this.sortedTaskArray.length);
        },
        sortByName: function() {
            this.sortedTaskArray = [...this.taskArray];
            this.sortedTaskArray.sort(function(a, b) {
                return (a.title < b.title ? -1 : 1);
            });
        },
        sortByDate: function() {
            this.sortedTaskArray = [...this.taskArray];
            let currentDate = new Date();
            this.sortedTaskArray.sort(function(a, b) {
                return ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(a.dueDate, currentDate) < ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(b.dueDate, currentDate)) ? -1 : 1);
            })
        },
        //Creates three (priority based) arrays and splices them together after name sort
        sortByPriority: function() {
            let first = this.createHighPriorityArray();
            let second = this.createMediumPriorityArray();
            let third = this.createLowPriorityArray();
            this.sortedTaskArray = first.concat(second, third);
        },
        //Returns name sorted arrays of different priorities
        createHighPriorityArray: function() {
            let highPriority = [...this.taskArray];
            let filterFunc = function(task) {
                return task.priority === "high";
            }
            highPriority = highPriority.filter(filterFunc);
            highPriority.sort(function(a, b) {
                return (a.Title < b.title ? -1 : 1);
            });
            return highPriority;
        },
        createMediumPriorityArray: function() {
            let mediumPriority = [...this.taskArray];
            let filterFunc = function(task) {
                return task.priority === "medium";
            }
            mediumPriority = mediumPriority.filter(filterFunc);
            mediumPriority.sort(function(a, b) {
                return (a.Title < b.title ? -1 : 1);
            });
            return mediumPriority;
        },
        createLowPriorityArray: function() {
            let lowPriority = [...this.taskArray];
            let filterFunc = function(task) {
                return task.priority === "low";
            }
            lowPriority = lowPriority.filter(filterFunc);
            lowPriority.sort(function(a, b) {
                return (a.Title < b.title ? -1 : 1);
            });
            return lowPriority;
        },
        
    }

    return newProject;
});

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((title, description, dueDate, priority) => {
    
    //Factory function for creating new task objects
    //Objects include all accessor/mutator functions
    let newTask = {
        title,
        description,
        dueDate,
        priority,
        status: false,

        //Accessor functions
        getTitle: function() {
            return this.title;
        },
        getDescription: function() {
            return this.description;
        },
        getDueDate: function() {
            return this.dueDate;
        },
        getPriority: function() {
            return this.priority;
        },
        getStatus: function() {
            return this.status;
        },

        //Mutator functions
        setTitle: function(newTitle) {
            title = newTitle;
        },
        setDescription: function(newDescription) {
            description = newDescription;
        },
        setDueDate: function(newDueDate) {
            dueDate = newDueDate;
        },
        setPriority: function(newPriority) {
            priority = newPriority;
        },
        alterStatus: function() {
            let currentStatus = this.status;
            this.status = !currentStatus;
        }
    };

    return newTask;
});

/***/ }),

/***/ "./src/dynamicTaskHolder.js":
/*!**********************************!*\
  !*** ./src/dynamicTaskHolder.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInDays/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    let dynamicProjectHolder = {
        todayTasks: [],
        weekTasks: [],
        allTasks: [], //Created by merging projectHolder.groupAllTasks() with miscArray
        miscTasks: [], //Will hold random tasks not belonging to a project
        lateTasks: [], //Holds all tasks from allTasks that are past due date
        clearArray: function(array) {
            while (array.length != 0) {
                array.pop();
            }
        },
        createAllTasks: function(projectTasks) {
            this.allTasks = projectTasks.concat(this.miscTasks);
        },
        sortAllByDate: function() {
            let currentDate = new Date();
            this.allTasks.sort(function(a, b) {
                return ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(a.dueDate, currentDate) < (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(b.dueDate, currentDate) ? -1 : 1);
            })
        },
        createTodayTasks: function() {
            this.todayTasks = this.allTasks.filter(function(task) {
                let currentDate = new Date();
                return ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(task.dueDate, currentDate) < 1 && (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(task.dueDate, currentDate) >= 0);
            });
        },
        createWeekTasks: function() {
            this.weekTasks = this.allTasks.filter(function(task) {
                let currentDate = new Date();
                return ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(task.dueDate, currentDate) < 7 && (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(task.dueDate, currentDate) >= 0);
            });
        },

        createLateTasks: function() {
            this.lateTasks = this.allTasks.filter(function(task) {
                let currentDate = new Date();
                return ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(task.dueDate, currentDate) < 0);
            });
        },
        addMiscTask: function(task) {
            task.project = "misc";
            this.miscTasks.push(task);
        },
    
    }
    return dynamicProjectHolder;
}

/***/ }),

/***/ "./src/projectHolder.js":
/*!******************************!*\
  !*** ./src/projectHolder.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//Functions as an array that holds all of the projects with some funcitonality
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    let projectHolder = {
        projectArray: [],
        addProject: function(newProject) {
            this.projectArray.push(newProject);
        },
        //Copy pasta function found in createProject module
        findIndex: function(projectTitle) {
            let index = this.projectArray.findIndex(i => i.title === projectTitle);
            return index;
        },
        removeProject: function(index) {
            this.projectArray.splice(index, 1);
        },
        sortByName: function() {
            this.projectArray.sort(function(a, b) {
                return (a.title < b.title ? -1 : 1);
            });
        },
        groupAllTasks: function() {
            let allTasksArray = [];
            let numOfProj = this.projectArray.length;
            for (let i = 0; i < numOfProj; i++) {
                let numOfTasks = this.projectArray[i].taskArray.length;
                console.log(numOfTasks);
                for (let j = 0; j < numOfTasks; j++) {
                    allTasksArray.push(this.projectArray[i].taskArray[j]);
                }
            }
            return allTasksArray;
        }
    }
    return projectHolder;
}

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
/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask.js */ "./src/createTask.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _projectHolder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectHolder.js */ "./src/projectHolder.js");
/* harmony import */ var _dynamicTaskHolder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicTaskHolder.js */ "./src/dynamicTaskHolder.js");





let testProject = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.default)("testProject");
let otherProject = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.default)("otherProject");
let anotherProject = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.default)("anotherProject");
let projectHolder = (0,_projectHolder_js__WEBPACK_IMPORTED_MODULE_2__.default)();
let dynamicProjectHolder = (0,_dynamicTaskHolder_js__WEBPACK_IMPORTED_MODULE_3__.default)();

let testTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Second Task", "idk1", new Date(2021, 6, 25), "medium");
let otherTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("First Task", "idk2", new Date(2021, 6, 13), "low");
let anotherTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Third Task", "idk2", new Date(2021, 6, 16), "high");
let anotherNotherTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
let testTask1 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Second Task", "idk1", new Date(2021, 6, 25), "medium");
let otherTask1 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("First Task", "idk2", new Date(2021, 6, 13), "low");
let anotherTask1 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Third Task", "idk2", new Date(2021, 6, 16), "high");
let anotherNotherTask1 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
let testTask2 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Second Task", "idk1", new Date(2021, 6, 25), "medium");
let otherTask2 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("First Task", "idk2", new Date(2021, 6, 13), "low");
let anotherTask2 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Third Task", "idk2", new Date(2021, 6, 16), "high");
let anotherNotherTask2 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
let miscTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Second Task", "idk1", new Date(2021, 6, 25), "medium");
let otherMiscTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("First Task", "idk2", new Date(2021, 6, 13), "low");
let anotherMiscTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Third Task", "idk2", new Date(2021, 6, 16), "high");
let anotherNotherMiscTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__.default)("Fourth Task", "idk2", new Date(2021, 6, 2), "low");

testProject.addTask(testTask);
testProject.addTask(otherTask);
testProject.addTask(anotherTask);
testProject.addTask(anotherNotherTask);
otherProject.addTask(testTask1);
otherProject.addTask(otherTask1);
otherProject.addTask(anotherTask1);
otherProject.addTask(anotherNotherTask1);
anotherProject.addTask(testTask2);
anotherProject.addTask(otherTask2);
anotherProject.addTask(anotherTask2);
anotherProject.addTask(anotherNotherTask2);

projectHolder.addProject(testProject);
projectHolder.addProject(otherProject);
projectHolder.addProject(anotherProject);

let allProjectTasks = projectHolder.groupAllTasks();

dynamicProjectHolder.addMiscTask(miscTask);
dynamicProjectHolder.addMiscTask(otherMiscTask);
dynamicProjectHolder.addMiscTask(anotherMiscTask);
dynamicProjectHolder.addMiscTask(anotherNotherMiscTask);

dynamicProjectHolder.createAllTasks(allProjectTasks);

dynamicProjectHolder.sortAllByDate();
dynamicProjectHolder.createTodayTasks();
dynamicProjectHolder.createWeekTasks();
dynamicProjectHolder.createLateTasks();

console.log(dynamicProjectHolder.allTasks);
console.log(dynamicProjectHolder.todayTasks);
console.log(dynamicProjectHolder.weekTasks);
console.log(dynamicProjectHolder.lateTasks);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2R5bmFtaWNUYXNrSG9sZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdEhvbGRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0orRjtBQUMvQztBQUNTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsT0FBTztBQUNwQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsbUVBQVk7QUFDZCx1QkFBdUIsNkRBQVU7QUFDakMsd0JBQXdCLDZEQUFVO0FBQ2xDLGlEQUFpRCxzRkFBK0I7QUFDaEYsbURBQW1ELHNGQUErQixrQkFBa0I7QUFDcEc7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakR3QztBQUNvQztBQUNuQjtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEsMEJBQTBCO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsT0FBTztBQUNwQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlO0FBQ2YsRUFBRSxtRUFBWTtBQUNkLGlCQUFpQix5REFBTTtBQUN2QixrQkFBa0IseURBQU07QUFDeEI7QUFDQSw0QkFBNEIsMkVBQXdCO0FBQ3BELDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEZ3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixhQUFhLEtBQUs7QUFDbEIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsbUVBQVk7QUFDZCxhQUFhLHlEQUFNO0FBQ25CO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUM5QnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsS0FBSztBQUNsQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsbUVBQVk7QUFDZCx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUtBQXVLOztBQUV2SztBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNuRDRDOztBQUU1QyxpRUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFnQiw0QkFBNEIsaURBQWdCO0FBQ3BGLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsaUVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ2hEMkM7O0FBRTVDLDZCQUFlLHNDQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFnQiwyQkFBMkIsaURBQWdCO0FBQ25GLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFnQixtQ0FBbUMsaURBQWdCO0FBQzNGLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFnQixtQ0FBbUMsaURBQWdCO0FBQzNGLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpREFBZ0I7QUFDeEMsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBLDZCQUFlLHNDQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztVQ2xDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ055QztBQUNNO0FBQ0E7QUFDVzs7QUFFMUQsa0JBQWtCLDBEQUFhO0FBQy9CLG1CQUFtQiwwREFBYTtBQUNoQyxxQkFBcUIsMERBQWE7QUFDbEMsb0JBQW9CLDBEQUFhO0FBQ2pDLDJCQUEyQiw4REFBb0I7O0FBRS9DLGVBQWUsdURBQVU7QUFDekIsZ0JBQWdCLHVEQUFVO0FBQzFCLGtCQUFrQix1REFBVTtBQUM1Qix3QkFBd0IsdURBQVU7QUFDbEMsZ0JBQWdCLHVEQUFVO0FBQzFCLGlCQUFpQix1REFBVTtBQUMzQixtQkFBbUIsdURBQVU7QUFDN0IseUJBQXlCLHVEQUFVO0FBQ25DLGdCQUFnQix1REFBVTtBQUMxQixpQkFBaUIsdURBQVU7QUFDM0IsbUJBQW1CLHVEQUFVO0FBQzdCLHlCQUF5Qix1REFBVTtBQUNuQyxlQUFlLHVEQUFVO0FBQ3pCLG9CQUFvQix1REFBVTtBQUM5QixzQkFBc0IsdURBQVU7QUFDaEMsNEJBQTRCLHVEQUFVOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBMaWtlIGBjb21wYXJlQXNjYCBidXQgdXNlcyBsb2NhbCB0aW1lIG5vdCBVVEMsIHdoaWNoIGlzIG5lZWRlZFxuLy8gZm9yIGFjY3VyYXRlIGVxdWFsaXR5IGNvbXBhcmlzb25zIG9mIFVUQyB0aW1lc3RhbXBzIHRoYXQgZW5kIHVwXG4vLyBoYXZpbmcgdGhlIHNhbWUgcmVwcmVzZW50YXRpb24gaW4gbG9jYWwgdGltZSwgZS5nLiBvbmUgaG91ciBiZWZvcmVcbi8vIERTVCBlbmRzIHZzLiB0aGUgaW5zdGFudCB0aGF0IERTVCBlbmRzLlxuXG5mdW5jdGlvbiBjb21wYXJlTG9jYWxBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSB8fCBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCkgfHwgZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gZGF0ZVJpZ2h0LmdldERhdGUoKSB8fCBkYXRlTGVmdC5nZXRIb3VycygpIC0gZGF0ZVJpZ2h0LmdldEhvdXJzKCkgfHwgZGF0ZUxlZnQuZ2V0TWludXRlcygpIC0gZGF0ZVJpZ2h0LmdldE1pbnV0ZXMoKSB8fCBkYXRlTGVmdC5nZXRTZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0U2Vjb25kcygpIHx8IGRhdGVMZWZ0LmdldE1pbGxpc2Vjb25kcygpIC0gZGF0ZVJpZ2h0LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5EYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5IHBlcmlvZHMgYmV0d2VlbiB0d28gZGF0ZXMuIEZyYWN0aW9uYWwgZGF5cyBhcmVcbiAqIHRydW5jYXRlZCB0b3dhcmRzIHplcm8uXG4gKlxuICogT25lIFwiZnVsbCBkYXlcIiBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGxvY2FsIHRpbWUgaW4gb25lIGRheSB0byB0aGUgc2FtZVxuICogbG9jYWwgdGltZSBvbiB0aGUgbmV4dCBvciBwcmV2aW91cyBkYXkuIEEgZnVsbCBkYXkgY2FuIHNvbWV0aW1lcyBiZSBsZXNzIHRoYW5cbiAqIG9yIG1vcmUgdGhhbiAyNCBob3VycyBpZiBhIGRheWxpZ2h0IHNhdmluZ3MgY2hhbmdlIGhhcHBlbnMgYmV0d2VlbiB0d28gZGF0ZXMuXG4gKlxuICogVG8gaWdub3JlIERTVCBhbmQgb25seSBtZWFzdXJlIGV4YWN0IDI0LWhvdXIgcGVyaW9kcywgdXNlIHRoaXMgaW5zdGVhZDpcbiAqIGBNYXRoLmZsb29yKGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpLzI0KXwwYC5cbiAqXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsIHRpbWV6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMFxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAxIE1hcmNoIDIwMjAgMDowMCBhbmQgMSBKdW5lIDIwMjAgMDowMCA/XG4gKiAvLyBOb3RlOiBiZWNhdXNlIGxvY2FsIHRpbWUgaXMgdXNlZCwgdGhlXG4gKiAvLyByZXN1bHQgd2lsbCBhbHdheXMgYmUgOTIgZGF5cywgZXZlbiBpblxuICogLy8gdGltZSB6b25lcyB3aGVyZSBEU1Qgc3RhcnRzIGFuZCB0aGVcbiAqIC8vIHBlcmlvZCBoYXMgb25seSA5MioyNC0xIGhvdXJzLlxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAyMCwgNSwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDIsIDEpXG4gKiApXG4vLz0+IDkyXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5EYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICBkYXRlTGVmdC5zZXREYXRlKGRhdGVMZWZ0LmdldERhdGUoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIGRheXMgLSBkaWZmIGluIGNhbGVuZGFyIGRheXMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgZGF5IGlzIG5vdCBmdWxsXG4gIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gIHZhciBpc0xhc3REYXlOb3RGdWxsID0gTnVtYmVyKGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ24pO1xuICB2YXIgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gaXNMYXN0RGF5Tm90RnVsbCk7IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHRpdGxlKSA9PiB7XG4gICAgXG4gICAgbGV0IG5ld1Byb2plY3QgPSB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0YXNrQXJyYXk6IFtdLCAvL1JvdWdoIGFycmF5IHdpdGggdGFza3MgcmFuZG9tbHkgcHVzaGVkIG9uXG4gICAgICAgIHNvcnRlZFRhc2tBcnJheTogW10sIC8vc29ydGVkIHRhc2sgYXJyYXkgKHNvcnRlZGVkIGRlcGVuZGluZyBvbiBzb3J0IG9wdGlvbilcbiAgICAgICAgYWRkVGFzazogZnVuY3Rpb24obmV3VGFzaykge1xuICAgICAgICAgICAgbmV3VGFzay5wcm9qZWN0ID0gdGhpcy50aXRsZTtcbiAgICAgICAgICAgIHRoaXMudGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vVXNlZCB0byBmaW5kIGluZGV4IG9mIGRlc2lyZWQgdGFzayB0aXRsZSAoY2FuIGJlIGZvdW5kIGZyb20gRE9NKVxuICAgICAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uKHRhc2tUaXRsZSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50YXNrQXJyYXkuZmluZEluZGV4KGkgPT4gaS50aXRsZSA9PT0gdGFza1RpdGxlKTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlVGFzazogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMudGFza0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyU29ydGVkQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zb3J0ZWRUYXNrQXJyYXkuc3BsaWNlKDAsIHRoaXMuc29ydGVkVGFza0FycmF5Lmxlbmd0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNvcnRCeU5hbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zb3J0ZWRUYXNrQXJyYXkgPSBbLi4udGhpcy50YXNrQXJyYXldO1xuICAgICAgICAgICAgdGhpcy5zb3J0ZWRUYXNrQXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhLnRpdGxlIDwgYi50aXRsZSA/IC0xIDogMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc29ydEJ5RGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRlZFRhc2tBcnJheSA9IFsuLi50aGlzLnRhc2tBcnJheV07XG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zb3J0ZWRUYXNrQXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChkaWZmZXJlbmNlSW5EYXlzKGEuZHVlRGF0ZSwgY3VycmVudERhdGUpIDwgKGRpZmZlcmVuY2VJbkRheXMoYi5kdWVEYXRlLCBjdXJyZW50RGF0ZSkpID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIC8vQ3JlYXRlcyB0aHJlZSAocHJpb3JpdHkgYmFzZWQpIGFycmF5cyBhbmQgc3BsaWNlcyB0aGVtIHRvZ2V0aGVyIGFmdGVyIG5hbWUgc29ydFxuICAgICAgICBzb3J0QnlQcmlvcml0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZmlyc3QgPSB0aGlzLmNyZWF0ZUhpZ2hQcmlvcml0eUFycmF5KCk7XG4gICAgICAgICAgICBsZXQgc2Vjb25kID0gdGhpcy5jcmVhdGVNZWRpdW1Qcmlvcml0eUFycmF5KCk7XG4gICAgICAgICAgICBsZXQgdGhpcmQgPSB0aGlzLmNyZWF0ZUxvd1ByaW9yaXR5QXJyYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc29ydGVkVGFza0FycmF5ID0gZmlyc3QuY29uY2F0KHNlY29uZCwgdGhpcmQpO1xuICAgICAgICB9LFxuICAgICAgICAvL1JldHVybnMgbmFtZSBzb3J0ZWQgYXJyYXlzIG9mIGRpZmZlcmVudCBwcmlvcml0aWVzXG4gICAgICAgIGNyZWF0ZUhpZ2hQcmlvcml0eUFycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBoaWdoUHJpb3JpdHkgPSBbLi4udGhpcy50YXNrQXJyYXldO1xuICAgICAgICAgICAgbGV0IGZpbHRlckZ1bmMgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucHJpb3JpdHkgPT09IFwiaGlnaFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGlnaFByaW9yaXR5ID0gaGlnaFByaW9yaXR5LmZpbHRlcihmaWx0ZXJGdW5jKTtcbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGEuVGl0bGUgPCBiLnRpdGxlID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhpZ2hQcmlvcml0eTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlTWVkaXVtUHJpb3JpdHlBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgbWVkaXVtUHJpb3JpdHkgPSBbLi4udGhpcy50YXNrQXJyYXldO1xuICAgICAgICAgICAgbGV0IGZpbHRlckZ1bmMgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucHJpb3JpdHkgPT09IFwibWVkaXVtXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eSA9IG1lZGl1bVByaW9yaXR5LmZpbHRlcihmaWx0ZXJGdW5jKTtcbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYS5UaXRsZSA8IGIudGl0bGUgPyAtMSA6IDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWVkaXVtUHJpb3JpdHk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUxvd1ByaW9yaXR5QXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGxvd1ByaW9yaXR5ID0gWy4uLnRoaXMudGFza0FycmF5XTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJGdW5jID0gZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnByaW9yaXR5ID09PSBcImxvd1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG93UHJpb3JpdHkgPSBsb3dQcmlvcml0eS5maWx0ZXIoZmlsdGVyRnVuYyk7XG4gICAgICAgICAgICBsb3dQcmlvcml0eS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGEuVGl0bGUgPCBiLnRpdGxlID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGxvd1ByaW9yaXR5O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn0iLCJleHBvcnQgZGVmYXVsdCAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIFxuICAgIC8vRmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgbmV3IHRhc2sgb2JqZWN0c1xuICAgIC8vT2JqZWN0cyBpbmNsdWRlIGFsbCBhY2Nlc3Nvci9tdXRhdG9yIGZ1bmN0aW9uc1xuICAgIGxldCBuZXdUYXNrID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBzdGF0dXM6IGZhbHNlLFxuXG4gICAgICAgIC8vQWNjZXNzb3IgZnVuY3Rpb25zXG4gICAgICAgIGdldFRpdGxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgICAgICB9LFxuICAgICAgICBnZXREZXNjcmlwdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RHVlRGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcmlvcml0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U3RhdHVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgICAgICAgfSxcblxuICAgICAgICAvL011dGF0b3IgZnVuY3Rpb25zXG4gICAgICAgIHNldFRpdGxlOiBmdW5jdGlvbihuZXdUaXRsZSkge1xuICAgICAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RGVzY3JpcHRpb246IGZ1bmN0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXREdWVEYXRlOiBmdW5jdGlvbihuZXdEdWVEYXRlKSB7XG4gICAgICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UHJpb3JpdHk6IGZ1bmN0aW9uKG5ld1ByaW9yaXR5KSB7XG4gICAgICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgICAgICB9LFxuICAgICAgICBhbHRlclN0YXR1czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAhY3VycmVudFN0YXR1cztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3VGFzaztcbn07IiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBsZXQgZHluYW1pY1Byb2plY3RIb2xkZXIgPSB7XG4gICAgICAgIHRvZGF5VGFza3M6IFtdLFxuICAgICAgICB3ZWVrVGFza3M6IFtdLFxuICAgICAgICBhbGxUYXNrczogW10sIC8vQ3JlYXRlZCBieSBtZXJnaW5nIHByb2plY3RIb2xkZXIuZ3JvdXBBbGxUYXNrcygpIHdpdGggbWlzY0FycmF5XG4gICAgICAgIG1pc2NUYXNrczogW10sIC8vV2lsbCBob2xkIHJhbmRvbSB0YXNrcyBub3QgYmVsb25naW5nIHRvIGEgcHJvamVjdFxuICAgICAgICBsYXRlVGFza3M6IFtdLCAvL0hvbGRzIGFsbCB0YXNrcyBmcm9tIGFsbFRhc2tzIHRoYXQgYXJlIHBhc3QgZHVlIGRhdGVcbiAgICAgICAgY2xlYXJBcnJheTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgICAgIHdoaWxlIChhcnJheS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIGFycmF5LnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVBbGxUYXNrczogZnVuY3Rpb24ocHJvamVjdFRhc2tzKSB7XG4gICAgICAgICAgICB0aGlzLmFsbFRhc2tzID0gcHJvamVjdFRhc2tzLmNvbmNhdCh0aGlzLm1pc2NUYXNrcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNvcnRBbGxCeURhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWxsVGFza3Muc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChkaWZmZXJlbmNlSW5EYXlzKGEuZHVlRGF0ZSwgY3VycmVudERhdGUpIDwgZGlmZmVyZW5jZUluRGF5cyhiLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA/IC0xIDogMSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVUb2RheVRhc2tzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMudG9kYXlUYXNrcyA9IHRoaXMuYWxsVGFza3MuZmlsdGVyKGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoZGlmZmVyZW5jZUluRGF5cyh0YXNrLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA8IDEgJiYgZGlmZmVyZW5jZUluRGF5cyh0YXNrLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA+PSAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVXZWVrVGFza3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy53ZWVrVGFza3MgPSB0aGlzLmFsbFRhc2tzLmZpbHRlcihmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRpZmZlcmVuY2VJbkRheXModGFzay5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPCA3ICYmIGRpZmZlcmVuY2VJbkRheXModGFzay5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPj0gMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVMYXRlVGFza3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sYXRlVGFza3MgPSB0aGlzLmFsbFRhc2tzLmZpbHRlcihmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRpZmZlcmVuY2VJbkRheXModGFzay5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhZGRNaXNjVGFzazogZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgdGFzay5wcm9qZWN0ID0gXCJtaXNjXCI7XG4gICAgICAgICAgICB0aGlzLm1pc2NUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9LFxuICAgIFxuICAgIH1cbiAgICByZXR1cm4gZHluYW1pY1Byb2plY3RIb2xkZXI7XG59IiwiLy9GdW5jdGlvbnMgYXMgYW4gYXJyYXkgdGhhdCBob2xkcyBhbGwgb2YgdGhlIHByb2plY3RzIHdpdGggc29tZSBmdW5jaXRvbmFsaXR5XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBsZXQgcHJvamVjdEhvbGRlciA9IHtcbiAgICAgICAgcHJvamVjdEFycmF5OiBbXSxcbiAgICAgICAgYWRkUHJvamVjdDogZnVuY3Rpb24obmV3UHJvamVjdCkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9Db3B5IHBhc3RhIGZ1bmN0aW9uIGZvdW5kIGluIGNyZWF0ZVByb2plY3QgbW9kdWxlXG4gICAgICAgIGZpbmRJbmRleDogZnVuY3Rpb24ocHJvamVjdFRpdGxlKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnByb2plY3RBcnJheS5maW5kSW5kZXgoaSA9PiBpLnRpdGxlID09PSBwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVQcm9qZWN0OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgc29ydEJ5TmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RBcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGEudGl0bGUgPCBiLnRpdGxlID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBncm91cEFsbFRhc2tzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBhbGxUYXNrc0FycmF5ID0gW107XG4gICAgICAgICAgICBsZXQgbnVtT2ZQcm9qID0gdGhpcy5wcm9qZWN0QXJyYXkubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZlByb2o7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBudW1PZlRhc2tzID0gdGhpcy5wcm9qZWN0QXJyYXlbaV0udGFza0FycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhudW1PZlRhc2tzKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bU9mVGFza3M7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBhbGxUYXNrc0FycmF5LnB1c2godGhpcy5wcm9qZWN0QXJyYXlbaV0udGFza0FycmF5W2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWxsVGFza3NBcnJheTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvamVjdEhvbGRlcjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2suanNcIjtcbmltcG9ydCBDcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3QuanNcIjtcbmltcG9ydCBQcm9qZWN0SG9sZGVyIGZyb20gXCIuL3Byb2plY3RIb2xkZXIuanNcIjtcbmltcG9ydCBEeW5hbWljUHJvamVjdEhvbGRlciBmcm9tIFwiLi9keW5hbWljVGFza0hvbGRlci5qc1wiO1xuXG5sZXQgdGVzdFByb2plY3QgPSBDcmVhdGVQcm9qZWN0KFwidGVzdFByb2plY3RcIik7XG5sZXQgb3RoZXJQcm9qZWN0ID0gQ3JlYXRlUHJvamVjdChcIm90aGVyUHJvamVjdFwiKTtcbmxldCBhbm90aGVyUHJvamVjdCA9IENyZWF0ZVByb2plY3QoXCJhbm90aGVyUHJvamVjdFwiKTtcbmxldCBwcm9qZWN0SG9sZGVyID0gUHJvamVjdEhvbGRlcigpO1xubGV0IGR5bmFtaWNQcm9qZWN0SG9sZGVyID0gRHluYW1pY1Byb2plY3RIb2xkZXIoKTtcblxubGV0IHRlc3RUYXNrID0gQ3JlYXRlVGFzayhcIlNlY29uZCBUYXNrXCIsIFwiaWRrMVwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAyNSksIFwibWVkaXVtXCIpO1xubGV0IG90aGVyVGFzayA9IENyZWF0ZVRhc2soXCJGaXJzdCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAxMyksIFwibG93XCIpO1xubGV0IGFub3RoZXJUYXNrID0gQ3JlYXRlVGFzayhcIlRoaXJkIFRhc2tcIiwgXCJpZGsyXCIsIG5ldyBEYXRlKDIwMjEsIDYsIDE2KSwgXCJoaWdoXCIpO1xubGV0IGFub3RoZXJOb3RoZXJUYXNrID0gQ3JlYXRlVGFzayhcIkZvdXJ0aCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAyKSwgXCJsb3dcIik7XG5sZXQgdGVzdFRhc2sxID0gQ3JlYXRlVGFzayhcIlNlY29uZCBUYXNrXCIsIFwiaWRrMVwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAyNSksIFwibWVkaXVtXCIpO1xubGV0IG90aGVyVGFzazEgPSBDcmVhdGVUYXNrKFwiRmlyc3QgVGFza1wiLCBcImlkazJcIiwgbmV3IERhdGUoMjAyMSwgNiwgMTMpLCBcImxvd1wiKTtcbmxldCBhbm90aGVyVGFzazEgPSBDcmVhdGVUYXNrKFwiVGhpcmQgVGFza1wiLCBcImlkazJcIiwgbmV3IERhdGUoMjAyMSwgNiwgMTYpLCBcImhpZ2hcIik7XG5sZXQgYW5vdGhlck5vdGhlclRhc2sxID0gQ3JlYXRlVGFzayhcIkZvdXJ0aCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAyKSwgXCJsb3dcIik7XG5sZXQgdGVzdFRhc2syID0gQ3JlYXRlVGFzayhcIlNlY29uZCBUYXNrXCIsIFwiaWRrMVwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAyNSksIFwibWVkaXVtXCIpO1xubGV0IG90aGVyVGFzazIgPSBDcmVhdGVUYXNrKFwiRmlyc3QgVGFza1wiLCBcImlkazJcIiwgbmV3IERhdGUoMjAyMSwgNiwgMTMpLCBcImxvd1wiKTtcbmxldCBhbm90aGVyVGFzazIgPSBDcmVhdGVUYXNrKFwiVGhpcmQgVGFza1wiLCBcImlkazJcIiwgbmV3IERhdGUoMjAyMSwgNiwgMTYpLCBcImhpZ2hcIik7XG5sZXQgYW5vdGhlck5vdGhlclRhc2syID0gQ3JlYXRlVGFzayhcIkZvdXJ0aCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAyKSwgXCJsb3dcIik7XG5sZXQgbWlzY1Rhc2sgPSBDcmVhdGVUYXNrKFwiU2Vjb25kIFRhc2tcIiwgXCJpZGsxXCIsIG5ldyBEYXRlKDIwMjEsIDYsIDI1KSwgXCJtZWRpdW1cIik7XG5sZXQgb3RoZXJNaXNjVGFzayA9IENyZWF0ZVRhc2soXCJGaXJzdCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAxMyksIFwibG93XCIpO1xubGV0IGFub3RoZXJNaXNjVGFzayA9IENyZWF0ZVRhc2soXCJUaGlyZCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAxNiksIFwiaGlnaFwiKTtcbmxldCBhbm90aGVyTm90aGVyTWlzY1Rhc2sgPSBDcmVhdGVUYXNrKFwiRm91cnRoIFRhc2tcIiwgXCJpZGsyXCIsIG5ldyBEYXRlKDIwMjEsIDYsIDIpLCBcImxvd1wiKTtcblxudGVzdFByb2plY3QuYWRkVGFzayh0ZXN0VGFzayk7XG50ZXN0UHJvamVjdC5hZGRUYXNrKG90aGVyVGFzayk7XG50ZXN0UHJvamVjdC5hZGRUYXNrKGFub3RoZXJUYXNrKTtcbnRlc3RQcm9qZWN0LmFkZFRhc2soYW5vdGhlck5vdGhlclRhc2spO1xub3RoZXJQcm9qZWN0LmFkZFRhc2sodGVzdFRhc2sxKTtcbm90aGVyUHJvamVjdC5hZGRUYXNrKG90aGVyVGFzazEpO1xub3RoZXJQcm9qZWN0LmFkZFRhc2soYW5vdGhlclRhc2sxKTtcbm90aGVyUHJvamVjdC5hZGRUYXNrKGFub3RoZXJOb3RoZXJUYXNrMSk7XG5hbm90aGVyUHJvamVjdC5hZGRUYXNrKHRlc3RUYXNrMik7XG5hbm90aGVyUHJvamVjdC5hZGRUYXNrKG90aGVyVGFzazIpO1xuYW5vdGhlclByb2plY3QuYWRkVGFzayhhbm90aGVyVGFzazIpO1xuYW5vdGhlclByb2plY3QuYWRkVGFzayhhbm90aGVyTm90aGVyVGFzazIpO1xuXG5wcm9qZWN0SG9sZGVyLmFkZFByb2plY3QodGVzdFByb2plY3QpO1xucHJvamVjdEhvbGRlci5hZGRQcm9qZWN0KG90aGVyUHJvamVjdCk7XG5wcm9qZWN0SG9sZGVyLmFkZFByb2plY3QoYW5vdGhlclByb2plY3QpO1xuXG5sZXQgYWxsUHJvamVjdFRhc2tzID0gcHJvamVjdEhvbGRlci5ncm91cEFsbFRhc2tzKCk7XG5cbmR5bmFtaWNQcm9qZWN0SG9sZGVyLmFkZE1pc2NUYXNrKG1pc2NUYXNrKTtcbmR5bmFtaWNQcm9qZWN0SG9sZGVyLmFkZE1pc2NUYXNrKG90aGVyTWlzY1Rhc2spO1xuZHluYW1pY1Byb2plY3RIb2xkZXIuYWRkTWlzY1Rhc2soYW5vdGhlck1pc2NUYXNrKTtcbmR5bmFtaWNQcm9qZWN0SG9sZGVyLmFkZE1pc2NUYXNrKGFub3RoZXJOb3RoZXJNaXNjVGFzayk7XG5cbmR5bmFtaWNQcm9qZWN0SG9sZGVyLmNyZWF0ZUFsbFRhc2tzKGFsbFByb2plY3RUYXNrcyk7XG5cbmR5bmFtaWNQcm9qZWN0SG9sZGVyLnNvcnRBbGxCeURhdGUoKTtcbmR5bmFtaWNQcm9qZWN0SG9sZGVyLmNyZWF0ZVRvZGF5VGFza3MoKTtcbmR5bmFtaWNQcm9qZWN0SG9sZGVyLmNyZWF0ZVdlZWtUYXNrcygpO1xuZHluYW1pY1Byb2plY3RIb2xkZXIuY3JlYXRlTGF0ZVRhc2tzKCk7XG5cbmNvbnNvbGUubG9nKGR5bmFtaWNQcm9qZWN0SG9sZGVyLmFsbFRhc2tzKTtcbmNvbnNvbGUubG9nKGR5bmFtaWNQcm9qZWN0SG9sZGVyLnRvZGF5VGFza3MpO1xuY29uc29sZS5sb2coZHluYW1pY1Byb2plY3RIb2xkZXIud2Vla1Rhc2tzKTtcbmNvbnNvbGUubG9nKGR5bmFtaWNQcm9qZWN0SG9sZGVyLmxhdGVUYXNrcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==