/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};
    root.PubSub = PubSub;
    factory(PubSub);
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        spliceTask: function(index) {
            this.taskArray.splice(index, 1);
        },
        removeTask: function(taskTitle) {
            let index = findIndex(taskTitle);
            this.spliceTask(index);
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

"use strict";
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
        project: null,

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInDays/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    let dynamicProjectHolder = {
        todayTasks: [],
        weekTasks: [],
        allTasks: [],
        miscTasks: [], //Will hold random tasks not belonging to a project
        lateTasks: [], //Holds all tasks from allTasks that are past due date
        clearArray: function(array) { //Can be used on any of the arrays
            while (array.length != 0) {
                array.pop();
            }
        },
        //projectTasks will get passed-in in index.js by the projectHolder
        createAllTasks: function(projectTasks) { //Created by merging projectHolder.groupAllTasks() with miscArray
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

"use strict";
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

/***/ }),

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//This module will be used to render the basic page elements (header, side panel, etc.)

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

    //Cache DOM
    let body = document.querySelector("body");

    
    //-----Create header-----
    let header = document.createElement("header");
    header.classList.add("header");
    let titleHolder = document.createElement("div");
    titleHolder.classList.add("titleHolder");
    let title = document.createElement("h1");
    title.textContent = "To-Do List";
    titleHolder.appendChild(title);
    header.appendChild(titleHolder);


    //-----Create side panel-----
    let sidePanel = document.createElement("div");
    sidePanel.classList.add("sidePanel");
    //-Create dynamic project holder-
    let dynamicDiv = document.createElement("div");
    dynamicDiv.classList.add("projectDiv");
    let dynamicTitle = document.createElement("h2");
    dynamicTitle.textContent = "General: ";
    dynamicDiv.appendChild(dynamicTitle);
    let todayBtn = document.createElement("button");
    todayBtn.classList.add("projectButton");
    todayBtn.textContent = "Today";
    todayBtn.id = "todayBtn";
    let weekBtn = document.createElement("button");
    weekBtn.classList.add("projectButton");
    weekBtn.textContent = "This Week";
    weekBtn.id = "weekBtn";
    let allBtn = document.createElement("button");
    allBtn.classList.add("projectButton");
    allBtn.textContent = "All";
    allBtn.id = "allBtn";
    dynamicDiv.appendChild(allBtn);
    dynamicDiv.appendChild(todayBtn);
    dynamicDiv.appendChild(weekBtn);
    allBtn.classList.add("selected");
    
    //-Create normal project holder
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    projectDiv.id = "projectDiv";
    let projectTitle = document.createElement("h2");
    projectTitle.textContent = "Projects: ";
    projectDiv.appendChild(projectTitle);
    let addProject = document.createElement("button");
    addProject.classList.add("projectButton");
    addProject.textContent = "+";
    addProject.style.textAlign = "center";
    addProject.style.background = "rgba(125, 125, 125, 0.3)";
    addProject.id = "addProject";
    addProject.style.width = "100%";
    //-Create the addProject form-
    let createForm = document.createElement("form");
    createForm.classList.add("createForm");
    createForm.id = "createForm";
    let formTitle = document.createElement("h2");
    formTitle.textContent = "New Project";
    formTitle.style.margin = 0;
    formTitle.style.textAlign = "center";
    let titleLabel = document.createElement("label");
    titleLabel.textContent = "Project Name: ";
    titleLabel.style.fontFamily = "MyFont";
    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.classList.add("titleInput");
    titleInput.id = "titleInput";
    let submitBtn = document.createElement("button");
    submitBtn.classList.add("submitBtn");
    submitBtn.textContent = "Create";
    submitBtn.id = "submit";
    let addProjectDiv = document.createElement("div");
    addProjectDiv.appendChild(addProject);
    addProjectDiv.appendChild(createForm);
    addProjectDiv.classList.add("addProjectDiv");

    createForm.appendChild(formTitle);
    createForm.appendChild(titleLabel);
    createForm.appendChild(titleInput);
    createForm.appendChild(submitBtn);

    projectDiv.appendChild(addProjectDiv);
    

    sidePanel.appendChild(dynamicDiv);
    sidePanel.appendChild(projectDiv);

    //Append elements to body
    body.appendChild(header);
    body.appendChild(sidePanel);

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask.js */ "./src/createTask.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _projectHolder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectHolder.js */ "./src/projectHolder.js");
/* harmony import */ var _dynamicTaskHolder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicTaskHolder.js */ "./src/dynamicTaskHolder.js");
/* harmony import */ var _renderPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderPage.js */ "./src/renderPage.js");







//PubSub functions
//Add all the PubSub.subscribe stuff here

//Render initial page elements
let renderPage = _renderPage_js__WEBPACK_IMPORTED_MODULE_5__.default;
renderPage();


//Cache DOM
let todayBtn = document.querySelector("#todayBtn");
let weekBtn = document.querySelector("#weekBtn");
let allBtn = document.querySelector("#allBtn");
let addProject = document.querySelector("#addProject");
let createForm = document.querySelector("#createForm");
let titleInput = document.querySelector("#titleInput");
let submitBtn = document.querySelector("#submit");
createForm.style.visibility = "hidden";



//Add event listeners to buttons
addProject.addEventListener("click", toggleCreateForm);




function toggleCreateForm() {
    let visibility = createForm.style.visibility;
    if (visibility == "hidden")
    {
        createForm.style.visibility = "visible";
        addProject.textContent = "X";
    }
    else 
    {
        titleInput.value = "";
        createForm.style.visibility = "hidden";
        addProject.textContent = "+";
    }
}

function test() {
    let testProject = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_2__.default)("testProject");
    let otherProject = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_2__.default)("otherProject");
    let anotherProject = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_2__.default)("anotherProject");
    let projectHolder = (0,_projectHolder_js__WEBPACK_IMPORTED_MODULE_3__.default)();
    let dynamicProjectHolder = (0,_dynamicTaskHolder_js__WEBPACK_IMPORTED_MODULE_4__.default)();
    
    let testTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Second Task", "idk1", new Date(2021, 6, 25), "medium");
    let otherTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("First Task", "idk2", new Date(2021, 6, 13), "low");
    let anotherTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Third Task", "idk2", new Date(2021, 6, 16), "high");
    let anotherNotherTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
    let testTask1 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Second Task", "idk1", new Date(2021, 6, 25), "medium");
    let otherTask1 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("First Task", "idk2", new Date(2021, 6, 13), "low");
    let anotherTask1 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Third Task", "idk2", new Date(2021, 6, 16), "high");
    let anotherNotherTask1 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
    let testTask2 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Second Task", "idk1", new Date(2021, 6, 25), "medium");
    let otherTask2 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("First Task", "idk2", new Date(2021, 6, 13), "low");
    let anotherTask2 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Third Task", "idk2", new Date(2021, 6, 16), "high");
    let anotherNotherTask2 = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
    let miscTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Second Task", "idk1", new Date(2021, 6, 25), "medium");
    let otherMiscTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("First Task", "idk2", new Date(2021, 6, 13), "low");
    let anotherMiscTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Third Task", "idk2", new Date(2021, 6, 16), "high");
    let anotherNotherMiscTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.default)("Fourth Task", "idk2", new Date(2021, 6, 2), "low");
    
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
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZHluYW1pY1Rhc2tIb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0SG9sZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSitGO0FBQy9DO0FBQ1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLFlBQVk7QUFDdkIsYUFBYSxPQUFPO0FBQ3BCLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxtRUFBWTtBQUNkLHVCQUF1Qiw2REFBVTtBQUNqQyx3QkFBd0IsNkRBQVU7QUFDbEMsaURBQWlELHNGQUErQjtBQUNoRixtREFBbUQsc0ZBQStCLGtCQUFrQjtBQUNwRztBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakR3QztBQUNvQztBQUNuQjtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwREFBYTtBQUNuQyx1QkFBdUIsMERBQWE7QUFDcEMseUJBQXlCLDBEQUFhO0FBQ3RDLHdCQUF3QiwwREFBYTtBQUNyQywrQkFBK0IsOERBQW9COztBQUVuRCxtQkFBbUIsdURBQVU7QUFDN0Isb0JBQW9CLHVEQUFVO0FBQzlCLHNCQUFzQix1REFBVTtBQUNoQyw0QkFBNEIsdURBQVU7QUFDdEMsb0JBQW9CLHVEQUFVO0FBQzlCLHFCQUFxQix1REFBVTtBQUMvQix1QkFBdUIsdURBQVU7QUFDakMsNkJBQTZCLHVEQUFVO0FBQ3ZDLG9CQUFvQix1REFBVTtBQUM5QixxQkFBcUIsdURBQVU7QUFDL0IsdUJBQXVCLHVEQUFVO0FBQ2pDLDZCQUE2Qix1REFBVTtBQUN2QyxtQkFBbUIsdURBQVU7QUFDN0Isd0JBQXdCLHVEQUFVO0FBQ2xDLDBCQUEwQix1REFBVTtBQUNwQyxnQ0FBZ0MsdURBQVU7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBMaWtlIGBjb21wYXJlQXNjYCBidXQgdXNlcyBsb2NhbCB0aW1lIG5vdCBVVEMsIHdoaWNoIGlzIG5lZWRlZFxuLy8gZm9yIGFjY3VyYXRlIGVxdWFsaXR5IGNvbXBhcmlzb25zIG9mIFVUQyB0aW1lc3RhbXBzIHRoYXQgZW5kIHVwXG4vLyBoYXZpbmcgdGhlIHNhbWUgcmVwcmVzZW50YXRpb24gaW4gbG9jYWwgdGltZSwgZS5nLiBvbmUgaG91ciBiZWZvcmVcbi8vIERTVCBlbmRzIHZzLiB0aGUgaW5zdGFudCB0aGF0IERTVCBlbmRzLlxuXG5mdW5jdGlvbiBjb21wYXJlTG9jYWxBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSB8fCBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCkgfHwgZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gZGF0ZVJpZ2h0LmdldERhdGUoKSB8fCBkYXRlTGVmdC5nZXRIb3VycygpIC0gZGF0ZVJpZ2h0LmdldEhvdXJzKCkgfHwgZGF0ZUxlZnQuZ2V0TWludXRlcygpIC0gZGF0ZVJpZ2h0LmdldE1pbnV0ZXMoKSB8fCBkYXRlTGVmdC5nZXRTZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0U2Vjb25kcygpIHx8IGRhdGVMZWZ0LmdldE1pbGxpc2Vjb25kcygpIC0gZGF0ZVJpZ2h0LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5EYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5IHBlcmlvZHMgYmV0d2VlbiB0d28gZGF0ZXMuIEZyYWN0aW9uYWwgZGF5cyBhcmVcbiAqIHRydW5jYXRlZCB0b3dhcmRzIHplcm8uXG4gKlxuICogT25lIFwiZnVsbCBkYXlcIiBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGxvY2FsIHRpbWUgaW4gb25lIGRheSB0byB0aGUgc2FtZVxuICogbG9jYWwgdGltZSBvbiB0aGUgbmV4dCBvciBwcmV2aW91cyBkYXkuIEEgZnVsbCBkYXkgY2FuIHNvbWV0aW1lcyBiZSBsZXNzIHRoYW5cbiAqIG9yIG1vcmUgdGhhbiAyNCBob3VycyBpZiBhIGRheWxpZ2h0IHNhdmluZ3MgY2hhbmdlIGhhcHBlbnMgYmV0d2VlbiB0d28gZGF0ZXMuXG4gKlxuICogVG8gaWdub3JlIERTVCBhbmQgb25seSBtZWFzdXJlIGV4YWN0IDI0LWhvdXIgcGVyaW9kcywgdXNlIHRoaXMgaW5zdGVhZDpcbiAqIGBNYXRoLmZsb29yKGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpLzI0KXwwYC5cbiAqXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsIHRpbWV6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMFxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAxIE1hcmNoIDIwMjAgMDowMCBhbmQgMSBKdW5lIDIwMjAgMDowMCA/XG4gKiAvLyBOb3RlOiBiZWNhdXNlIGxvY2FsIHRpbWUgaXMgdXNlZCwgdGhlXG4gKiAvLyByZXN1bHQgd2lsbCBhbHdheXMgYmUgOTIgZGF5cywgZXZlbiBpblxuICogLy8gdGltZSB6b25lcyB3aGVyZSBEU1Qgc3RhcnRzIGFuZCB0aGVcbiAqIC8vIHBlcmlvZCBoYXMgb25seSA5MioyNC0xIGhvdXJzLlxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAyMCwgNSwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDIsIDEpXG4gKiApXG4vLz0+IDkyXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5EYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICBkYXRlTGVmdC5zZXREYXRlKGRhdGVMZWZ0LmdldERhdGUoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIGRheXMgLSBkaWZmIGluIGNhbGVuZGFyIGRheXMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgZGF5IGlzIG5vdCBmdWxsXG4gIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gIHZhciBpc0xhc3REYXlOb3RGdWxsID0gTnVtYmVyKGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ24pO1xuICB2YXIgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gaXNMYXN0RGF5Tm90RnVsbCk7IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgUHViU3ViID0ge307XG4gICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG4gICAgZmFjdG9yeShQdWJTdWIpO1xuICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTEsXG4gICAgICAgIEFMTF9TVUJTQ1JJQklOR19NU0cgPSAnKic7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3Vic2NyaWJlcnMsIHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIEFMTF9TVUJTQ1JJQklOR19NU0csIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKCBtZXNzYWdlICkge1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpIHx8IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKEFMTF9TVUJTQ1JJQklOR19NU0cpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG5cbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgUHViU3ViLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uKCBmdW5jICl7XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKEFMTF9TVUJTQ1JJQklOR19NU0csIGZ1bmMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBpbnQgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICBDb3VudCBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY291bnRTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IEFycmF5IH1cbiAgICAqL1xuICAgIFB1YlN1Yi5jb3VudFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjb3VudFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh0b2tlbiBpbiBtZXNzYWdlc1ttXSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICAgR2V0cyBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgZ2V0U3Vic2NyaXB0aW9uc1xuICAgICovXG4gICAgUHViU3ViLmdldFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCB2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgdCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5EYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh0aXRsZSkgPT4ge1xuICAgIFxuICAgIGxldCBuZXdQcm9qZWN0ID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGFza0FycmF5OiBbXSwgLy9Sb3VnaCBhcnJheSB3aXRoIHRhc2tzIHJhbmRvbWx5IHB1c2hlZCBvblxuICAgICAgICBzb3J0ZWRUYXNrQXJyYXk6IFtdLCAvL3NvcnRlZCB0YXNrIGFycmF5IChzb3J0ZWRlZCBkZXBlbmRpbmcgb24gc29ydCBvcHRpb24pXG4gICAgICAgIGFkZFRhc2s6IGZ1bmN0aW9uKG5ld1Rhc2spIHtcbiAgICAgICAgICAgIG5ld1Rhc2sucHJvamVjdCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICB0aGlzLnRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgICAgICB9LFxuICAgICAgICAvL1VzZWQgdG8gZmluZCBpbmRleCBvZiBkZXNpcmVkIHRhc2sgdGl0bGUgKGNhbiBiZSBmb3VuZCBmcm9tIERPTSlcbiAgICAgICAgZmluZEluZGV4OiBmdW5jdGlvbih0YXNrVGl0bGUpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMudGFza0FycmF5LmZpbmRJbmRleChpID0+IGkudGl0bGUgPT09IHRhc2tUaXRsZSk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIHNwbGljZVRhc2s6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVUYXNrOiBmdW5jdGlvbih0YXNrVGl0bGUpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGZpbmRJbmRleCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5zcGxpY2VUYXNrKGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJTb3J0ZWRBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRlZFRhc2tBcnJheS5zcGxpY2UoMCwgdGhpcy5zb3J0ZWRUYXNrQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc29ydEJ5TmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRlZFRhc2tBcnJheSA9IFsuLi50aGlzLnRhc2tBcnJheV07XG4gICAgICAgICAgICB0aGlzLnNvcnRlZFRhc2tBcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGEudGl0bGUgPCBiLnRpdGxlID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzb3J0QnlEYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGVkVGFza0FycmF5ID0gWy4uLnRoaXMudGFza0FycmF5XTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNvcnRlZFRhc2tBcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRpZmZlcmVuY2VJbkRheXMoYS5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPCAoZGlmZmVyZW5jZUluRGF5cyhiLmR1ZURhdGUsIGN1cnJlbnREYXRlKSkgPyAtMSA6IDEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy9DcmVhdGVzIHRocmVlIChwcmlvcml0eSBiYXNlZCkgYXJyYXlzIGFuZCBzcGxpY2VzIHRoZW0gdG9nZXRoZXIgYWZ0ZXIgbmFtZSBzb3J0XG4gICAgICAgIHNvcnRCeVByaW9yaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHRoaXMuY3JlYXRlSGlnaFByaW9yaXR5QXJyYXkoKTtcbiAgICAgICAgICAgIGxldCBzZWNvbmQgPSB0aGlzLmNyZWF0ZU1lZGl1bVByaW9yaXR5QXJyYXkoKTtcbiAgICAgICAgICAgIGxldCB0aGlyZCA9IHRoaXMuY3JlYXRlTG93UHJpb3JpdHlBcnJheSgpO1xuICAgICAgICAgICAgdGhpcy5zb3J0ZWRUYXNrQXJyYXkgPSBmaXJzdC5jb25jYXQoc2Vjb25kLCB0aGlyZCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vUmV0dXJucyBuYW1lIHNvcnRlZCBhcnJheXMgb2YgZGlmZmVyZW50IHByaW9yaXRpZXNcbiAgICAgICAgY3JlYXRlSGlnaFByaW9yaXR5QXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGhpZ2hQcmlvcml0eSA9IFsuLi50aGlzLnRhc2tBcnJheV07XG4gICAgICAgICAgICBsZXQgZmlsdGVyRnVuYyA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wcmlvcml0eSA9PT0gXCJoaWdoXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkgPSBoaWdoUHJpb3JpdHkuZmlsdGVyKGZpbHRlckZ1bmMpO1xuICAgICAgICAgICAgaGlnaFByaW9yaXR5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYS5UaXRsZSA8IGIudGl0bGUgPyAtMSA6IDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaGlnaFByaW9yaXR5O1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVNZWRpdW1Qcmlvcml0eUFycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBtZWRpdW1Qcmlvcml0eSA9IFsuLi50aGlzLnRhc2tBcnJheV07XG4gICAgICAgICAgICBsZXQgZmlsdGVyRnVuYyA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5ID0gbWVkaXVtUHJpb3JpdHkuZmlsdGVyKGZpbHRlckZ1bmMpO1xuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhLlRpdGxlIDwgYi50aXRsZSA/IC0xIDogMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtZWRpdW1Qcmlvcml0eTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlTG93UHJpb3JpdHlBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgbG93UHJpb3JpdHkgPSBbLi4udGhpcy50YXNrQXJyYXldO1xuICAgICAgICAgICAgbGV0IGZpbHRlckZ1bmMgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucHJpb3JpdHkgPT09IFwibG93XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb3dQcmlvcml0eSA9IGxvd1ByaW9yaXR5LmZpbHRlcihmaWx0ZXJGdW5jKTtcbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYS5UaXRsZSA8IGIudGl0bGUgPyAtMSA6IDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbG93UHJpb3JpdHk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufSIsImV4cG9ydCBkZWZhdWx0ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgXG4gICAgLy9GYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBuZXcgdGFzayBvYmplY3RzXG4gICAgLy9PYmplY3RzIGluY2x1ZGUgYWxsIGFjY2Vzc29yL211dGF0b3IgZnVuY3Rpb25zXG4gICAgbGV0IG5ld1Rhc2sgPSB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgIHByb2plY3Q6IG51bGwsXG5cbiAgICAgICAgLy9BY2Nlc3NvciBmdW5jdGlvbnNcbiAgICAgICAgZ2V0VGl0bGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERlc2NyaXB0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBnZXREdWVEYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByaW9yaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgICAgICB9LFxuICAgICAgICBnZXRTdGF0dXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vTXV0YXRvciBmdW5jdGlvbnNcbiAgICAgICAgc2V0VGl0bGU6IGZ1bmN0aW9uKG5ld1RpdGxlKSB7XG4gICAgICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICB9LFxuICAgICAgICBzZXREZXNjcmlwdGlvbjogZnVuY3Rpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldER1ZURhdGU6IGZ1bmN0aW9uKG5ld0R1ZURhdGUpIHtcbiAgICAgICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICB9LFxuICAgICAgICBzZXRQcmlvcml0eTogZnVuY3Rpb24obmV3UHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgICAgIH0sXG4gICAgICAgIGFsdGVyU3RhdHVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICFjdXJyZW50U3RhdHVzO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBuZXdUYXNrO1xufTsiLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5EYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGxldCBkeW5hbWljUHJvamVjdEhvbGRlciA9IHtcbiAgICAgICAgdG9kYXlUYXNrczogW10sXG4gICAgICAgIHdlZWtUYXNrczogW10sXG4gICAgICAgIGFsbFRhc2tzOiBbXSxcbiAgICAgICAgbWlzY1Rhc2tzOiBbXSwgLy9XaWxsIGhvbGQgcmFuZG9tIHRhc2tzIG5vdCBiZWxvbmdpbmcgdG8gYSBwcm9qZWN0XG4gICAgICAgIGxhdGVUYXNrczogW10sIC8vSG9sZHMgYWxsIHRhc2tzIGZyb20gYWxsVGFza3MgdGhhdCBhcmUgcGFzdCBkdWUgZGF0ZVxuICAgICAgICBjbGVhckFycmF5OiBmdW5jdGlvbihhcnJheSkgeyAvL0NhbiBiZSB1c2VkIG9uIGFueSBvZiB0aGUgYXJyYXlzXG4gICAgICAgICAgICB3aGlsZSAoYXJyYXkubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy9wcm9qZWN0VGFza3Mgd2lsbCBnZXQgcGFzc2VkLWluIGluIGluZGV4LmpzIGJ5IHRoZSBwcm9qZWN0SG9sZGVyXG4gICAgICAgIGNyZWF0ZUFsbFRhc2tzOiBmdW5jdGlvbihwcm9qZWN0VGFza3MpIHsgLy9DcmVhdGVkIGJ5IG1lcmdpbmcgcHJvamVjdEhvbGRlci5ncm91cEFsbFRhc2tzKCkgd2l0aCBtaXNjQXJyYXlcbiAgICAgICAgICAgIHRoaXMuYWxsVGFza3MgPSBwcm9qZWN0VGFza3MuY29uY2F0KHRoaXMubWlzY1Rhc2tzKTtcbiAgICAgICAgfSxcbiAgICAgICAgc29ydEFsbEJ5RGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5hbGxUYXNrcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRpZmZlcmVuY2VJbkRheXMoYS5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPCBkaWZmZXJlbmNlSW5EYXlzKGIuZHVlRGF0ZSwgY3VycmVudERhdGUpID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVRvZGF5VGFza3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy50b2RheVRhc2tzID0gdGhpcy5hbGxUYXNrcy5maWx0ZXIoZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChkaWZmZXJlbmNlSW5EYXlzKHRhc2suZHVlRGF0ZSwgY3VycmVudERhdGUpIDwgMSAmJiBkaWZmZXJlbmNlSW5EYXlzKHRhc2suZHVlRGF0ZSwgY3VycmVudERhdGUpID49IDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVdlZWtUYXNrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLndlZWtUYXNrcyA9IHRoaXMuYWxsVGFza3MuZmlsdGVyKGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoZGlmZmVyZW5jZUluRGF5cyh0YXNrLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA8IDcgJiYgZGlmZmVyZW5jZUluRGF5cyh0YXNrLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA+PSAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUxhdGVUYXNrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmxhdGVUYXNrcyA9IHRoaXMuYWxsVGFza3MuZmlsdGVyKGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoZGlmZmVyZW5jZUluRGF5cyh0YXNrLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA8IDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZE1pc2NUYXNrOiBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICB0YXNrLnByb2plY3QgPSBcIm1pc2NcIjtcbiAgICAgICAgICAgIHRoaXMubWlzY1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgfVxuICAgIHJldHVybiBkeW5hbWljUHJvamVjdEhvbGRlcjtcbn0iLCIvL0Z1bmN0aW9ucyBhcyBhbiBhcnJheSB0aGF0IGhvbGRzIGFsbCBvZiB0aGUgcHJvamVjdHMgd2l0aCBzb21lIGZ1bmNpdG9uYWxpdHlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGxldCBwcm9qZWN0SG9sZGVyID0ge1xuICAgICAgICBwcm9qZWN0QXJyYXk6IFtdLFxuICAgICAgICBhZGRQcm9qZWN0OiBmdW5jdGlvbihuZXdQcm9qZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICB9LFxuICAgICAgICAvL0NvcHkgcGFzdGEgZnVuY3Rpb24gZm91bmQgaW4gY3JlYXRlUHJvamVjdCBtb2R1bGVcbiAgICAgICAgZmluZEluZGV4OiBmdW5jdGlvbihwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMucHJvamVjdEFycmF5LmZpbmRJbmRleChpID0+IGkudGl0bGUgPT09IHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZVByb2plY3Q6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuICAgICAgICBzb3J0QnlOYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdEFycmF5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYS50aXRsZSA8IGIudGl0bGUgPyAtMSA6IDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwQWxsVGFza3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGFsbFRhc2tzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGxldCBudW1PZlByb2ogPSB0aGlzLnByb2plY3RBcnJheS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mUHJvajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bU9mVGFza3MgPSB0aGlzLnByb2plY3RBcnJheVtpXS50YXNrQXJyYXkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG51bU9mVGFza3MpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtT2ZUYXNrczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFRhc2tzQXJyYXkucHVzaCh0aGlzLnByb2plY3RBcnJheVtpXS50YXNrQXJyYXlbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhbGxUYXNrc0FycmF5O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0SG9sZGVyO1xufSIsIi8vVGhpcyBtb2R1bGUgd2lsbCBiZSB1c2VkIHRvIHJlbmRlciB0aGUgYmFzaWMgcGFnZSBlbGVtZW50cyAoaGVhZGVyLCBzaWRlIHBhbmVsLCBldGMuKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICAgIC8vQ2FjaGUgRE9NXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIFxuICAgIC8vLS0tLS1DcmVhdGUgaGVhZGVyLS0tLS1cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBsZXQgdGl0bGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZUhvbGRlclwiKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgICB0aXRsZUhvbGRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlSG9sZGVyKTtcblxuXG4gICAgLy8tLS0tLUNyZWF0ZSBzaWRlIHBhbmVsLS0tLS1cbiAgICBsZXQgc2lkZVBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlUGFuZWwuY2xhc3NMaXN0LmFkZChcInNpZGVQYW5lbFwiKTtcbiAgICAvLy1DcmVhdGUgZHluYW1pYyBwcm9qZWN0IGhvbGRlci1cbiAgICBsZXQgZHluYW1pY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHluYW1pY0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpdlwiKTtcbiAgICBsZXQgZHluYW1pY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGR5bmFtaWNUaXRsZS50ZXh0Q29udGVudCA9IFwiR2VuZXJhbDogXCI7XG4gICAgZHluYW1pY0Rpdi5hcHBlbmRDaGlsZChkeW5hbWljVGl0bGUpO1xuICAgIGxldCB0b2RheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdG9kYXlCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RCdXR0b25cIik7XG4gICAgdG9kYXlCdG4udGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXlCdG4uaWQgPSBcInRvZGF5QnRuXCI7XG4gICAgbGV0IHdlZWtCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHdlZWtCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RCdXR0b25cIik7XG4gICAgd2Vla0J0bi50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCI7XG4gICAgd2Vla0J0bi5pZCA9IFwid2Vla0J0blwiO1xuICAgIGxldCBhbGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFsbEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvblwiKTtcbiAgICBhbGxCdG4udGV4dENvbnRlbnQgPSBcIkFsbFwiO1xuICAgIGFsbEJ0bi5pZCA9IFwiYWxsQnRuXCI7XG4gICAgZHluYW1pY0Rpdi5hcHBlbmRDaGlsZChhbGxCdG4pO1xuICAgIGR5bmFtaWNEaXYuYXBwZW5kQ2hpbGQodG9kYXlCdG4pO1xuICAgIGR5bmFtaWNEaXYuYXBwZW5kQ2hpbGQod2Vla0J0bik7XG4gICAgYWxsQnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBcbiAgICAvLy1DcmVhdGUgbm9ybWFsIHByb2plY3QgaG9sZGVyXG4gICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIik7XG4gICAgcHJvamVjdERpdi5pZCA9IFwicHJvamVjdERpdlwiO1xuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0czogXCI7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0QnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBhZGRQcm9qZWN0LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgYWRkUHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEyNSwgMTI1LCAxMjUsIDAuMylcIjtcbiAgICBhZGRQcm9qZWN0LmlkID0gXCJhZGRQcm9qZWN0XCI7XG4gICAgYWRkUHJvamVjdC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIC8vLUNyZWF0ZSB0aGUgYWRkUHJvamVjdCBmb3JtLVxuICAgIGxldCBjcmVhdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY3JlYXRlRm9ybS5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlRm9ybVwiKTtcbiAgICBjcmVhdGVGb3JtLmlkID0gXCJjcmVhdGVGb3JtXCI7XG4gICAgbGV0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gICAgZm9ybVRpdGxlLnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgZm9ybVRpdGxlLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOiBcIjtcbiAgICB0aXRsZUxhYmVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIk15Rm9udFwiO1xuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlSW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVJbnB1dFwiO1xuICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0QnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG4gICAgc3VibWl0QnRuLmlkID0gXCJzdWJtaXRcIjtcbiAgICBsZXQgYWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgICBhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvcm0pO1xuICAgIGFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3REaXZcIik7XG5cbiAgICBjcmVhdGVGb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgY3JlYXRlRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBjcmVhdGVGb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGNyZWF0ZUZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdERpdik7XG4gICAgXG5cbiAgICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoZHluYW1pY0Rpdik7XG4gICAgc2lkZVBhbmVsLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4gICAgLy9BcHBlbmQgZWxlbWVudHMgdG8gYm9keVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHNpZGVQYW5lbCk7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiaW1wb3J0IFB1YlN1YiBmcm9tIFwicHVic3ViLWpzXCI7XG5pbXBvcnQgQ3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrLmpzXCI7XG5pbXBvcnQgQ3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0LmpzXCI7XG5pbXBvcnQgUHJvamVjdEhvbGRlciBmcm9tIFwiLi9wcm9qZWN0SG9sZGVyLmpzXCI7XG5pbXBvcnQgRHluYW1pY1Byb2plY3RIb2xkZXIgZnJvbSBcIi4vZHluYW1pY1Rhc2tIb2xkZXIuanNcIjtcbmltcG9ydCBSZW5kZXJQYWdlIGZyb20gXCIuL3JlbmRlclBhZ2UuanNcIjtcblxuLy9QdWJTdWIgZnVuY3Rpb25zXG4vL0FkZCBhbGwgdGhlIFB1YlN1Yi5zdWJzY3JpYmUgc3R1ZmYgaGVyZVxuXG4vL1JlbmRlciBpbml0aWFsIHBhZ2UgZWxlbWVudHNcbmxldCByZW5kZXJQYWdlID0gUmVuZGVyUGFnZTtcbnJlbmRlclBhZ2UoKTtcblxuXG4vL0NhY2hlIERPTVxubGV0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheUJ0blwiKTtcbmxldCB3ZWVrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWVrQnRuXCIpO1xubGV0IGFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsQnRuXCIpO1xubGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG5sZXQgY3JlYXRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlRm9ybVwiKTtcbmxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZUlucHV0XCIpO1xubGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpO1xuY3JlYXRlRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuXG5cbi8vQWRkIGV2ZW50IGxpc3RlbmVycyB0byBidXR0b25zXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDcmVhdGVGb3JtKTtcblxuXG5cblxuZnVuY3Rpb24gdG9nZ2xlQ3JlYXRlRm9ybSgpIHtcbiAgICBsZXQgdmlzaWJpbGl0eSA9IGNyZWF0ZUZvcm0uc3R5bGUudmlzaWJpbGl0eTtcbiAgICBpZiAodmlzaWJpbGl0eSA9PSBcImhpZGRlblwiKVxuICAgIHtcbiAgICAgICAgY3JlYXRlRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICB9XG4gICAgZWxzZSBcbiAgICB7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBjcmVhdGVGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0KCkge1xuICAgIGxldCB0ZXN0UHJvamVjdCA9IENyZWF0ZVByb2plY3QoXCJ0ZXN0UHJvamVjdFwiKTtcbiAgICBsZXQgb3RoZXJQcm9qZWN0ID0gQ3JlYXRlUHJvamVjdChcIm90aGVyUHJvamVjdFwiKTtcbiAgICBsZXQgYW5vdGhlclByb2plY3QgPSBDcmVhdGVQcm9qZWN0KFwiYW5vdGhlclByb2plY3RcIik7XG4gICAgbGV0IHByb2plY3RIb2xkZXIgPSBQcm9qZWN0SG9sZGVyKCk7XG4gICAgbGV0IGR5bmFtaWNQcm9qZWN0SG9sZGVyID0gRHluYW1pY1Byb2plY3RIb2xkZXIoKTtcbiAgICBcbiAgICBsZXQgdGVzdFRhc2sgPSBDcmVhdGVUYXNrKFwiU2Vjb25kIFRhc2tcIiwgXCJpZGsxXCIsIG5ldyBEYXRlKDIwMjEsIDYsIDI1KSwgXCJtZWRpdW1cIik7XG4gICAgbGV0IG90aGVyVGFzayA9IENyZWF0ZVRhc2soXCJGaXJzdCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAxMyksIFwibG93XCIpO1xuICAgIGxldCBhbm90aGVyVGFzayA9IENyZWF0ZVRhc2soXCJUaGlyZCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAxNiksIFwiaGlnaFwiKTtcbiAgICBsZXQgYW5vdGhlck5vdGhlclRhc2sgPSBDcmVhdGVUYXNrKFwiRm91cnRoIFRhc2tcIiwgXCJpZGsyXCIsIG5ldyBEYXRlKDIwMjEsIDYsIDIpLCBcImxvd1wiKTtcbiAgICBsZXQgdGVzdFRhc2sxID0gQ3JlYXRlVGFzayhcIlNlY29uZCBUYXNrXCIsIFwiaWRrMVwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAyNSksIFwibWVkaXVtXCIpO1xuICAgIGxldCBvdGhlclRhc2sxID0gQ3JlYXRlVGFzayhcIkZpcnN0IFRhc2tcIiwgXCJpZGsyXCIsIG5ldyBEYXRlKDIwMjEsIDYsIDEzKSwgXCJsb3dcIik7XG4gICAgbGV0IGFub3RoZXJUYXNrMSA9IENyZWF0ZVRhc2soXCJUaGlyZCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAxNiksIFwiaGlnaFwiKTtcbiAgICBsZXQgYW5vdGhlck5vdGhlclRhc2sxID0gQ3JlYXRlVGFzayhcIkZvdXJ0aCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAyKSwgXCJsb3dcIik7XG4gICAgbGV0IHRlc3RUYXNrMiA9IENyZWF0ZVRhc2soXCJTZWNvbmQgVGFza1wiLCBcImlkazFcIiwgbmV3IERhdGUoMjAyMSwgNiwgMjUpLCBcIm1lZGl1bVwiKTtcbiAgICBsZXQgb3RoZXJUYXNrMiA9IENyZWF0ZVRhc2soXCJGaXJzdCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAxMyksIFwibG93XCIpO1xuICAgIGxldCBhbm90aGVyVGFzazIgPSBDcmVhdGVUYXNrKFwiVGhpcmQgVGFza1wiLCBcImlkazJcIiwgbmV3IERhdGUoMjAyMSwgNiwgMTYpLCBcImhpZ2hcIik7XG4gICAgbGV0IGFub3RoZXJOb3RoZXJUYXNrMiA9IENyZWF0ZVRhc2soXCJGb3VydGggVGFza1wiLCBcImlkazJcIiwgbmV3IERhdGUoMjAyMSwgNiwgMiksIFwibG93XCIpO1xuICAgIGxldCBtaXNjVGFzayA9IENyZWF0ZVRhc2soXCJTZWNvbmQgVGFza1wiLCBcImlkazFcIiwgbmV3IERhdGUoMjAyMSwgNiwgMjUpLCBcIm1lZGl1bVwiKTtcbiAgICBsZXQgb3RoZXJNaXNjVGFzayA9IENyZWF0ZVRhc2soXCJGaXJzdCBUYXNrXCIsIFwiaWRrMlwiLCBuZXcgRGF0ZSgyMDIxLCA2LCAxMyksIFwibG93XCIpO1xuICAgIGxldCBhbm90aGVyTWlzY1Rhc2sgPSBDcmVhdGVUYXNrKFwiVGhpcmQgVGFza1wiLCBcImlkazJcIiwgbmV3IERhdGUoMjAyMSwgNiwgMTYpLCBcImhpZ2hcIik7XG4gICAgbGV0IGFub3RoZXJOb3RoZXJNaXNjVGFzayA9IENyZWF0ZVRhc2soXCJGb3VydGggVGFza1wiLCBcImlkazJcIiwgbmV3IERhdGUoMjAyMSwgNiwgMiksIFwibG93XCIpO1xuICAgIFxuICAgIHRlc3RQcm9qZWN0LmFkZFRhc2sodGVzdFRhc2spO1xuICAgIHRlc3RQcm9qZWN0LmFkZFRhc2sob3RoZXJUYXNrKTtcbiAgICB0ZXN0UHJvamVjdC5hZGRUYXNrKGFub3RoZXJUYXNrKTtcbiAgICB0ZXN0UHJvamVjdC5hZGRUYXNrKGFub3RoZXJOb3RoZXJUYXNrKTtcbiAgICBvdGhlclByb2plY3QuYWRkVGFzayh0ZXN0VGFzazEpO1xuICAgIG90aGVyUHJvamVjdC5hZGRUYXNrKG90aGVyVGFzazEpO1xuICAgIG90aGVyUHJvamVjdC5hZGRUYXNrKGFub3RoZXJUYXNrMSk7XG4gICAgb3RoZXJQcm9qZWN0LmFkZFRhc2soYW5vdGhlck5vdGhlclRhc2sxKTtcbiAgICBhbm90aGVyUHJvamVjdC5hZGRUYXNrKHRlc3RUYXNrMik7XG4gICAgYW5vdGhlclByb2plY3QuYWRkVGFzayhvdGhlclRhc2syKTtcbiAgICBhbm90aGVyUHJvamVjdC5hZGRUYXNrKGFub3RoZXJUYXNrMik7XG4gICAgYW5vdGhlclByb2plY3QuYWRkVGFzayhhbm90aGVyTm90aGVyVGFzazIpO1xuICAgIFxuICAgIHByb2plY3RIb2xkZXIuYWRkUHJvamVjdCh0ZXN0UHJvamVjdCk7XG4gICAgcHJvamVjdEhvbGRlci5hZGRQcm9qZWN0KG90aGVyUHJvamVjdCk7XG4gICAgcHJvamVjdEhvbGRlci5hZGRQcm9qZWN0KGFub3RoZXJQcm9qZWN0KTtcbiAgICBcbiAgICBsZXQgYWxsUHJvamVjdFRhc2tzID0gcHJvamVjdEhvbGRlci5ncm91cEFsbFRhc2tzKCk7XG4gICAgXG4gICAgZHluYW1pY1Byb2plY3RIb2xkZXIuYWRkTWlzY1Rhc2sobWlzY1Rhc2spO1xuICAgIGR5bmFtaWNQcm9qZWN0SG9sZGVyLmFkZE1pc2NUYXNrKG90aGVyTWlzY1Rhc2spO1xuICAgIGR5bmFtaWNQcm9qZWN0SG9sZGVyLmFkZE1pc2NUYXNrKGFub3RoZXJNaXNjVGFzayk7XG4gICAgZHluYW1pY1Byb2plY3RIb2xkZXIuYWRkTWlzY1Rhc2soYW5vdGhlck5vdGhlck1pc2NUYXNrKTtcbiAgICBcbiAgICBkeW5hbWljUHJvamVjdEhvbGRlci5jcmVhdGVBbGxUYXNrcyhhbGxQcm9qZWN0VGFza3MpO1xuICAgIFxuICAgIGR5bmFtaWNQcm9qZWN0SG9sZGVyLnNvcnRBbGxCeURhdGUoKTtcbiAgICBkeW5hbWljUHJvamVjdEhvbGRlci5jcmVhdGVUb2RheVRhc2tzKCk7XG4gICAgZHluYW1pY1Byb2plY3RIb2xkZXIuY3JlYXRlV2Vla1Rhc2tzKCk7XG4gICAgZHluYW1pY1Byb2plY3RIb2xkZXIuY3JlYXRlTGF0ZVRhc2tzKCk7XG4gICAgXG4gICAgY29uc29sZS5sb2coZHluYW1pY1Byb2plY3RIb2xkZXIuYWxsVGFza3MpO1xuICAgIGNvbnNvbGUubG9nKGR5bmFtaWNQcm9qZWN0SG9sZGVyLnRvZGF5VGFza3MpO1xuICAgIGNvbnNvbGUubG9nKGR5bmFtaWNQcm9qZWN0SG9sZGVyLndlZWtUYXNrcyk7XG4gICAgY29uc29sZS5sb2coZHluYW1pY1Byb2plY3RIb2xkZXIubGF0ZVRhc2tzKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9