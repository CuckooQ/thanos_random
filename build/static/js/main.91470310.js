/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(19);
	module.exports = __webpack_require__(25);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(26);
	} else {
	  module.exports = require('./cjs/react.development.js');
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AVENGER_IMAGES = exports.AVENGER_NAMES = exports.USERS_MIN = exports.USERS_MAX = exports.REMAIN_WITHDRAW = exports.REMAIN_INCREASE = exports.USER_REMOVE = exports.USER_ADD = exports.DEFAULT_USER_LIST = exports.DEFAULT_REMAIN_NUMBER = exports.DEFAULT_USER_NUMBER = undefined;
	
	var _ = __webpack_require__(29);
	
	var _2 = _interopRequireDefault(_);
	
	var _3 = __webpack_require__(30);
	
	var _4 = _interopRequireDefault(_3);
	
	var _5 = __webpack_require__(31);
	
	var _6 = _interopRequireDefault(_5);
	
	var _7 = __webpack_require__(32);
	
	var _8 = _interopRequireDefault(_7);
	
	var _9 = __webpack_require__(33);
	
	var _10 = _interopRequireDefault(_9);
	
	var _11 = __webpack_require__(34);
	
	var _12 = _interopRequireDefault(_11);
	
	var _13 = __webpack_require__(35);
	
	var _14 = _interopRequireDefault(_13);
	
	var _15 = __webpack_require__(36);
	
	var _16 = _interopRequireDefault(_15);
	
	var _17 = __webpack_require__(37);
	
	var _18 = _interopRequireDefault(_17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// default value
	var DEFAULT_USER_NUMBER = exports.DEFAULT_USER_NUMBER = 2;
	var DEFAULT_REMAIN_NUMBER = exports.DEFAULT_REMAIN_NUMBER = 1;
	var DEFAULT_USER_LIST = exports.DEFAULT_USER_LIST = [1, 2];
	
	// action value
	var USER_ADD = exports.USER_ADD = "increase";
	var USER_REMOVE = exports.USER_REMOVE = "withdraw";
	var REMAIN_INCREASE = exports.REMAIN_INCREASE = "increase";
	var REMAIN_WITHDRAW = exports.REMAIN_WITHDRAW = "withdraw";
	
	// limit
	var USERS_MAX = exports.USERS_MAX = 9;
	var USERS_MIN = exports.USERS_MIN = 2;
	
	// avengers name list
	var AVENGER_NAMES = exports.AVENGER_NAMES = ["캡틴아메리카", "아이언맨", "호크아이", "비전", "헐크", "토르", "스파이더맨", "윈터솔져", "로키"];
	
	// avengers image list
	var AVENGER_IMAGES = exports.AVENGER_IMAGES = [_2.default, _4.default, _6.default, _8.default, _10.default, _12.default, _14.default, _16.default, _18.default];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var asap = __webpack_require__(5);
	
	function noop() {}
	
	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable
	
	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.
	
	
	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	module.exports = Promise;
	
	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._45 = 0;
	  this._81 = 0;
	  this._65 = null;
	  this._54 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._10 = null;
	Promise._97 = null;
	Promise._61 = noop;
	
	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};
	
	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._81 === 3) {
	    self = self._65;
	  }
	  if (Promise._10) {
	    Promise._10(self);
	  }
	  if (self._81 === 0) {
	    if (self._45 === 0) {
	      self._45 = 1;
	      self._54 = deferred;
	      return;
	    }
	    if (self._45 === 1) {
	      self._45 = 2;
	      self._54 = [self._54, deferred];
	      return;
	    }
	    self._54.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}
	
	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._81 === 1) {
	        resolve(deferred.promise, self._65);
	      } else {
	        reject(deferred.promise, self._65);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._65);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._81 = 3;
	      self._65 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._81 = 1;
	  self._65 = newValue;
	  finale(self);
	}
	
	function reject(self, newValue) {
	  self._81 = 2;
	  self._65 = newValue;
	  if (Promise._97) {
	    Promise._97(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._45 === 1) {
	    handle(self, self._54);
	    self._54 = null;
	  }
	  if (self._45 === 2) {
	    for (var i = 0; i < self._54.length; i++) {
	      handle(self, self._54[i]);
	    }
	    self._54 = null;
	  }
	}
	
	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}
	
	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}
	
	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;
	
	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}
	
	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	
	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
	
	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);
	
	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.
	
	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396
	
	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}
	
	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;
	
	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}
	
	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html
	
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.
	
	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }
	
	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.
	
	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }
	
	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.
	
	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.
	
	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);
	
	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}
	
	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
	
	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// UMD format: https://github.com/umdjs/umd/blob/master/templates/returnExports.js#L17
	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory(require('html2canvas'));
	  } else {
	    // Browser globals
	    root.disintegrate = factory(root.html2canvas);
	  }
	}(typeof self !== 'undefined' ? self : this, function (html2canvas) {
	
	"use strict"
	
	/********************/
	/* Helper functions */
	/********************/
	
	// Looks for any ancestor with a data attribute of the one given
	// If none is found with the given attribute, the parentNode is used
	function findParentWithAttr(el, attr) {
	  let original = el;
	  while ((el = el.parentElement) && !el.hasAttribute(attr));
	  if(original === el) el = el.parentNode;
	  return el;
	} 
	
	// From http://javascript.info/coordinates
	function getCoords(elem) {
	  let box = elem.getBoundingClientRect();
	
	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}
	
	// Returns a JS array of arrays of numbers from a string
	// Example input:   "[255, 255, 255], [35, 35, 35]"
	// Example output:  [[255, 255, 255], [35, 35, 35]]
	function getNumberArraysFromString(string) {
	  let array = [];
	  let re = /\[(.*?)(?=\])/g;
	  let matches;
	  do {
	    matches = re.exec(string);
	    if(matches)
	      array.push(matches[1].split(',').map(Number));
	  } while (matches);
	
	  return array;
	}
	
	/**************************/
	/* Disintegrate functions */
	/**************************/
	
	var disElems,
	    dises = [],
	    disParticleTypes = [];
	
	// Create a disObj for each Disintegrate element detected
	function processDisElement(el) {
	  let ignoreColors = [];
	  if(el.dataset.disIgnoreColors) {
	    ignoreColors = getNumberArraysFromString(el.dataset.disIgnoreColors);
	  }
	
	  let particleType = "Particle";
	  if(el.dataset.disParticleType) {
	    particleType = el.dataset.disParticleType;
	  }
	
	  let particleColor = [];
	  if(el.dataset.disColor) {
	    particleColor = getNumberArraysFromString(el.dataset.disColor)[0];
	  }
	
	  let particleReductionFactor = 35;
	  if(el.dataset.disReductionFactor) {
	    particleReductionFactor = parseInt(el.dataset.disReductionFactor);
	  }
	
	  let disObj = {
	    elem: el,
	    type: el.dataset.disType,
	    container: undefined,
	    actualWidth: el.offsetWidth,
	    actualHeight: el.offsetHeight,
	    lastWidth: el.offsetWidth,
	    lastHeight: el.offsetHeight,
	    count: 0,
	    particleArr: [],
	    animationDuration: 100,  // in ms 
	    canvas: undefined,
	    ctx: undefined,
	    scrnCanvas: undefined,
	    scrnCtx: undefined,
	    ignoreColors: ignoreColors,
	    isOutOfBounds: false,
	    isAnimating: false,
	    particleReductionFactor: particleReductionFactor,
	    particleType: particleType,
	    particleColor: particleColor
	  };
	
	  let container;
	  if(disObj.type === "self-contained") {
	    let parent = el.parentNode;
	    let wrapper = document.createElement('div');
	    wrapper.dataset.disContainer = "";
	    wrapper.style.width = disObj.lastWidth;
	    wrapper.style.height = disObj.lastHeight;
	    wrapper.style.overflow = "hidden";
	    let elemStyles = window.getComputedStyle(el);
	    wrapper.style.position = elemStyles.getPropertyValue("position");
	    wrapper.style.margin = elemStyles.getPropertyValue("margin");
	    wrapper.style.top = elemStyles.getPropertyValue("top");
	    wrapper.style.left = elemStyles.getPropertyValue("left");
	    wrapper.style.display = elemStyles.getPropertyValue("display");
	    el.style.margin = 0;
	    el.style.top = 0;
	    el.style.left = 0;
	
	    disObj.container = wrapper;
	
	    parent.replaceChild(wrapper, el);
	    wrapper.appendChild(el);
	
	    disObj.container = wrapper;
	  } else if(disObj.type === "contained") {
	    // Try to use the given container if a container Id is provided
	    if(el.dataset.disContainerId && document.querySelector("[data-dis-id = '" + el.dataset.disContainerId + "']")) {
	      disObj.container = document.querySelector("data-dis-container-id = " + el.dataset.disContainerId);
	    } else {
	      // Default to using the nearest Disintegrate container or the parent node
	      disObj.container = findParentWithAttr(el, "data-dis-container");
	    }
	  }
	  
	  // Add this Disintegrate element to our list
	  dises.push(disObj);
	  // Create the canvases for this Disintegrate element
	  getScreenshot(disObj);
	  // See if all Dises have been loaded
	  checkAllLoaded();
	}
	
	function getVisibleDimensions(node, referenceNode) {
	  referenceNode = referenceNode || node.parentNode;
	  
	  let pos = getCoords(node);
	  let referencePos = getCoords(referenceNode);
	
	  let overflowingTop = false,
	      overflowingRight = false,
	      overflowingBottom = false,
	      overflowingLeft = false;
	
	  let topCalc = node.offsetHeight - (referencePos.top - pos.top);
	  if(topCalc < node.offsetHeight) {
	    overflowingTop = true;
	  }
	  let rightCalc = referencePos.left + referenceNode.offsetWidth - pos.left;
	  if(rightCalc < node.offsetWidth) {
	    overflowingRight = true;
	  }
	  let bottomCalc = referencePos.top + referenceNode.offsetHeight - pos.top;
	  if(bottomCalc < node.offsetHeight) {
	    overflowingBottom = true;
	  }
	  let leftCalc = node.offsetWidth - (referencePos.left - pos.left);
	  if(leftCalc < node.offsetWidth) {
	    overflowingLeft = true;
	  }
	  
	  return {
	    "boundingRect": pos,
	    "referenceBoundingRect": referencePos,
	    "width": Math.min(
	      node.offsetWidth,
	      rightCalc, 
	      leftCalc
	    ),
	    "height": Math.min(
	      node.offsetHeight, 
	      bottomCalc,
	      topCalc
	    ),
	    "overflowingTop": overflowingTop,
	    "overflowingRight": overflowingRight,
	    "overflowingBottom": overflowingBottom,
	    "overflowingLeft": overflowingLeft
	  }
	}
	
	// See if the given Dis object is outside of its Dis container.
	// If part of it is (compared to the last check), create particles at the
	// newly overflowed location.
	function checkOutOfBounds(disObj) {
	  let dimensions = getVisibleDimensions(disObj.elem, disObj.container);
	  
	  let visibleWidth = dimensions.width;
	  let visibleHeight = dimensions.height;
	  let pos = dimensions.boundingRect;
	  let referencePos = dimensions.referenceBoundingRect;
	
	  if(!disObj.isOutOfBounds && (visibleWidth <= 0 || visibleHeight <= 0)) {
	    disObj.isOutOfBounds = true;
	    disObj.elem.dispatchEvent(new Event('disOutOfBounds'));
	  } else if(disObj.isOutOfBounds && (visibleWidth > 0 && visibleHeight > 0)) {
	    disObj.isOutOfBounds = false;
	    disObj.elem.dispatchEvent(new Event('disInBounds'));
	  }
	
	  disObj.actualWidth = disObj.elem.offsetWidth;
	  disObj.actualHeight = disObj.elem.offsetHeight;
	
	  let lastWidth = disObj.lastWidth;
	  let lastHeight = disObj.lastHeight;
	
	  let widthDiff = lastWidth - visibleWidth;
	  let heightDiff = lastHeight - visibleHeight;
	
	  let choppedLeft = disObj.actualWidth - visibleWidth;
	  let choppedTop = disObj.actualHeight - visibleHeight;
	
	  let containerIndex;
	  if(visibleWidth !== lastWidth 
	  || visibleHeight !== lastHeight) {
	    containerIndex = disObj.particleArr.length;
	    disObj.particleArr.push({
	      "startTime": Date.now(),
	      "myParticles": []
	    });
	  }
	
	  let screenshotData; // Uint8ClampedArray
	
	  // Right and left sides
	  if(visibleWidth !== lastWidth) {
	
	    if(Math.floor(widthDiff) > 0
	    && Math.floor(visibleWidth) > 0
	    && Math.floor(visibleHeight) > 0) {
	  
	      let worldX;
	
	      // Right side
	      if(dimensions.overflowingRight) {
	        worldX = pos.left + visibleWidth;
	      }
	
	      if(dimensions.overflowingTop
	      && dimensions.overflowingRight) { // Top right
	        screenshotData = disObj.scrnCtx.getImageData(visibleWidth, choppedTop, widthDiff, visibleHeight).data;
	      } else if(dimensions.overflowingRight) { // Right and bottom right
	        screenshotData = disObj.scrnCtx.getImageData(visibleWidth, 0, widthDiff, visibleHeight).data;
	      }
	
	      // Process the pixels overflowed
	      if(screenshotData) {
	        for(let i = 0; i < screenshotData.length; i += 4) {
	          // Do it every once in a while
	          if(disObj.count % disObj.particleReductionFactor === 0) {
	            let worldY = pos.top + Math.floor((i / 4) / widthDiff);
	
	            if(dimensions.overflowingTop) {
	              worldY += choppedTop;
	            }
	            let colorData;
	            if(disObj.particleColor.length > 0) {
	              colorData = disObj.particleColor;
	            } else {
	              colorData = screenshotData.slice(i, i + 4);
	            }
	
	            // Create a particle of the given pixel color at the given location
	            createParticle(disObj, worldX - pos.left, worldY - pos.top, worldX, worldY, colorData, containerIndex);
	          }
	          disObj.count++;
	        }
	      } 
	
	      // Left side
	      if(dimensions.overflowingLeft) {
	        worldX = referencePos.left; // or pos.left + choppedLeft
	      }
	
	      if(dimensions.overflowingTop
	      && dimensions.overflowingLeft) { // Top left
	        screenshotData = disObj.scrnCtx.getImageData(disObj.actualWidth - lastWidth, choppedTop, widthDiff, visibleHeight).data;
	      } else if(dimensions.overflowingLeft) { // Left and bottom left
	        screenshotData = disObj.scrnCtx.getImageData(disObj.actualWidth - lastWidth, 0, widthDiff, visibleHeight).data;
	      }
	
	      // Process the pixels overflowed
	      if(screenshotData) {
	        for(let i = 0; i < screenshotData.length; i += 4) {
	          // Do it every once in a while
	          if(disObj.count % disObj.particleReductionFactor === 0) {
	            let worldY = pos.top + Math.floor((i / 4) / widthDiff);
	
	            if(dimensions.overflowingTop) {
	              worldY += choppedTop;
	            }
	            let colorData;
	            if(disObj.particleColor.length > 0) {
	              colorData = disObj.particleColor;
	            } else {
	              colorData = screenshotData.slice(i, i + 4);
	            }
	
	            // Create a particle of the given pixel color at the given location
	            createParticle(disObj, worldX - pos.left, worldY - pos.top, worldX, worldY, colorData, containerIndex);
	          }
	          disObj.count++;
	        }
	      } 
	
	    }
	
	    disObj.lastWidth = visibleWidth;
	  }
	
	  // Top and bottom sides
	  if(visibleHeight !== lastHeight) {
	    if(Math.floor(heightDiff) > 0
	    && Math.floor(visibleWidth) > 0
	    && Math.floor(visibleHeight) > 0) {
	      
	      let worldY;
	
	      // Top side
	      if(dimensions.overflowingTop) {
	        worldY = referencePos.top; // or pos.top + choppedTop
	      }
	
	      if(dimensions.overflowingTop
	      && dimensions.overflowingLeft) { // Top left
	        screenshotData = disObj.scrnCtx.getImageData(choppedLeft, disObj.actualHeight - lastHeight, visibleWidth, heightDiff).data;
	      } else if(dimensions.overflowingTop) { // Top and top right
	        screenshotData = disObj.scrnCtx.getImageData(0, disObj.actualHeight - lastHeight, visibleWidth, heightDiff).data;
	      }
	
	      // Process the pixels overflowed
	      if(screenshotData) {
	        for(let i = 0; i < screenshotData.length; i += 4) {
	          // Do it every once in a while
	          if(disObj.count % disObj.particleReductionFactor === 0) {
	            let worldX = pos.left + (i / 4) % visibleWidth;
	
	            if(dimensions.overflowingLeft) {
	              worldX += choppedLeft;
	            }
	            let colorData;
	            if(disObj.particleColor.length > 0) {
	              colorData = disObj.particleColor;
	            } else {
	              colorData = screenshotData.slice(i, i + 4);
	            }
	
	            // Create a particle of the given pixel color at the given location
	            createParticle(disObj, worldX - pos.left, worldY - pos.top, worldX, worldY, colorData, containerIndex);
	          }
	          disObj.count++;
	        }
	      } 
	
	      // Bottom side
	      if(dimensions.overflowingBottom) {
	        worldY = pos.top + visibleHeight;
	      }
	
	      if(dimensions.overflowingBottom
	      && dimensions.overflowingLeft) { // Bottom left
	        screenshotData = disObj.scrnCtx.getImageData(choppedLeft, visibleHeight, visibleWidth, heightDiff).data;
	      } else if(dimensions.overflowingBottom) { // Bottom and bottom right
	        screenshotData = disObj.scrnCtx.getImageData(0, visibleHeight, visibleWidth, heightDiff).data;
	      }
	
	      // Process the pixels overflowed
	      if(screenshotData) {
	        for(let i = 0; i < screenshotData.length; i += 4) {
	          // Do it every once in a while
	          if(disObj.count % disObj.particleReductionFactor === 0) {
	            let worldX = pos.left + (i / 4) % visibleWidth;
	
	            if(dimensions.overflowingLeft) {
	              worldX += choppedLeft;
	            }
	            let colorData;
	            if(disObj.particleColor.length > 0) {
	              colorData = disObj.particleColor;
	            } else {
	              colorData = screenshotData.slice(i, i + 4);
	            }
	
	            // Create a particle of the given pixel color at the given location
	            createParticle(disObj, worldX - pos.left, worldY - pos.top, worldX, worldY, colorData, containerIndex);
	          }
	          disObj.count++;
	        }
	      } 
	    }
	
	    disObj.lastHeight = visibleHeight;
	  }
	
	  if(screenshotData) {
	    disObj.isAnimating = true;
	  } 
	}
	
	// Creates particles for the entire given Disintegrate object at once, to be 
	// customized by the particle type used
	function createSimultaneousParticles(disObj) {
	  let dimensions = getVisibleDimensions(disObj.elem, disObj.container);
	  let pos = dimensions.boundingRect;
	
	  let screenshotData = getAllImageData(disObj);
	
	  disObj.particleArr[0] = {
	    "startTime": Date.now(),
	    "myParticles": []
	  };
	
	  // Process the pixels
	  if(screenshotData) {
	    for(let i = 0; i < screenshotData.length; i += 4) {
	      // Do it every once in a while
	      if(disObj.count % disObj.particleReductionFactor === 0) {
	        let worldX = pos.left + (i / 4) % dimensions.width;
	        let worldY = pos.top + Math.floor((i / 4) / dimensions.width);
	
	        let colorData;
	        if(disObj.particleColor.length > 0) {
	          colorData = disObj.particleColor;
	        } else {
	          colorData = screenshotData.slice(i, i + 4);
	        }
	
	        // Create a particle of the given pixel color at the given location
	        createParticle(disObj, worldX - pos.left, worldY - pos.top, worldX, worldY, colorData, 0);
	      }
	      disObj.count++;
	    }
	  } 
	}
	
	// Take a "screenshot" of the given Dis object's element using html2canvas
	var numCanvasesLoaded = 0;
	function getScreenshot(disObj) {
	  html2canvas(disObj.elem, { scale: 1 }).then( canvas => {
	    numCanvasesLoaded++;
	    if(typeof disObj.scrnCanvas === "undefined") {
	      disObj.scrnCanvas = canvas;
	      disObj.scrnCtx = canvas.getContext('2d');
	    }
	      
	    // Create a canvas to draw particles on the size of the
	    // given container element
	    if(typeof disObj.canvas === "undefined") {
	      disObj.canvas = document.createElement("canvas");
	      disObj.canvas.width = document.documentElement.scrollWidth; 
	      disObj.canvas.height = document.documentElement.scrollHeight;
	      disObj.canvas.style.position = "absolute"; 
	      disObj.canvas.style.top = 0;
	      disObj.canvas.style.left = 0;
	      disObj.canvas.style.userSelect = "none";
	      disObj.canvas.style.pointerEvents = "none";
	      disObj.canvas.style.zIndex = "1001";
	      disObj.canvas.class = "disParticleCanvas";
	      disObj.ctx = disObj.canvas.getContext('2d');
	      document.body.appendChild(disObj.canvas);
	    }
	
	    if(numCanvasesLoaded === dises.length) {
	      window.dispatchEvent(new Event('particlesReady'));
	    }
	  });
	}
	
	// Create a particle of the declared type at the given position using the given color
	function createParticle(disObj, localX, localY, worldX, worldY, rgbArr, arrayIndex) {
	  let dontCreate = false;
	
	  // Don't render the particle if the color is in the ignored list
	  if(disObj.ignoreColors.length > 0) {
	    disObj.ignoreColors.some( colorArr => {
	      if(colorArr.join(',') === rgbArr.slice(0, 3).join(',')) {
	        dontCreate = true;
	        return;
	      }
	    });
	  }
	
	  // Don't create particles within area not shown due to border radius
	  // Currently only supports `border-radius: npx;` format
	  let borderRadius = Math.min(
	                      parseInt(window.getComputedStyle(disObj.elem).borderRadius), 
	                      disObj.actualWidth / 2, 
	                      disObj.actualHeight / 2
	                     );
	  if(borderRadius > 0
	  && ( (localX < borderRadius && localY < borderRadius && borderRadius < Math.sqrt(Math.pow(borderRadius - localX, 2) + Math.pow(borderRadius - localY, 2)) ) // Top left
	    || (localX > disObj.actualWidth - borderRadius && localY < borderRadius && borderRadius < Math.sqrt(Math.pow(localX - (disObj.actualWidth - borderRadius), 2) + Math.pow(borderRadius - localY, 2)) ) // Top right
	    || (localX > disObj.actualWidth - borderRadius && localY > disObj.actualHeight - borderRadius && borderRadius < Math.sqrt(Math.pow(localX - (disObj.actualWidth - borderRadius), 2) + Math.pow(localY - (disObj.actualHeight - borderRadius), 2)) ) // Bottom right
	    || (localX < borderRadius && localY > disObj.actualHeight - borderRadius && borderRadius < Math.sqrt(Math.pow(borderRadius - localX, 2) + Math.pow(localY - (disObj.actualHeight - borderRadius), 2)) ) // Bottom left
	  )) {
	    dontCreate = true;
	  }
	
	  if(!dontCreate) {
	    let myType = disParticleTypes[0];
	    // Make sure the particle type is in Disintegrate's particle type list
	    disParticleTypes.forEach( type => {
	      if(type.name === disObj.particleType) {
	        myType = type;
	      }
	    });
	
	    // Actually create the particle
	    let particle = new myType;
	    particle.rgbArray = rgbArr;
	    particle.startX = worldX;
	    particle.startY = worldY;
	    particle.arrayIndex = arrayIndex;
	    particle.index = disObj.particleArr[arrayIndex].myParticles.length;
	
	    disObj.animationDuration = particle.animationDuration;
	    disObj.particleArr[arrayIndex].myParticles.push(particle);
	  }
	}
	
	// Animate all existing particles of the given Disintegrate element
	// using their built in draw function
	function animateParticles(disObj) {
	  if(typeof disObj.ctx !== "undefined") {
	    disObj.ctx.clearRect(0, 0, document.documentElement.scrollWidth, document.documentElement.scrollHeight);
	  }
	
	  for(let i = 0; (disObj.particleArr.length > 0 && i < disObj.particleArr.length); i++) {
	    let percent = (Date.now() - disObj.particleArr[i].startTime) / disObj.animationDuration;
	
	    for(let j = 0; j < disObj.particleArr[i].myParticles.length; j++) {
	      disObj.particleArr[i].myParticles[j].draw(disObj.ctx, percent);
	    }
	
	    if(i === disObj.particleArr.length - 1 && percent > 1) { 
	      // Garbage collect
	      disObj.particleArr = [];
	      // Mark complete
	      disObj.elem.dispatchEvent(new Event('disComplete'));
	      disObj.isAnimating = false;
	    }
	  }
	}
	
	// Check to see if all the Disintegrate elements detected have been successfully loaded
	var raf;
	function checkAllLoaded() {
	  if(disElems.length === dises.length) {
	    window.dispatchEvent(new Event('disesLoaded'));
	
	    if(typeof raf === "undefined")
	      raf = window.requestAnimationFrame(disUpdate);
	  }
	}
	
	// Return the disObj of a given element if it has one
	function getDisObj(el) {
	  let matchedDisObj = undefined;
	  dises.forEach( disObj => {
	    if(disObj.elem === el) {
	      matchedDisObj = disObj;
	    }
	  });
	  return matchedDisObj;
	}
	
	// Add a particle type for Disintegrate to recognize and look for
	function addParticleType(func) {
	  disParticleTypes.push(func);
	}
	
	// Returns a Uint8ClampedArray of image color data in r, g, b, a format per pixel
	// for the whole given Disintegrate object
	function getAllImageData(disObj) {
	  return disObj.scrnCtx.getImageData(0, 0, disObj.actualWidth, disObj.actualHeight).data; 
	}
	
	// What actually checks the bounds and animates the existing particles
	function disUpdate() {
	  dises.forEach( disObj => {
	    if(disObj.type !== "simultaneous") {
	      checkOutOfBounds(disObj);
	    }
	
	    animateParticles(disObj);
	  });
	
	  window.requestAnimationFrame(disUpdate);
	}
	
	/*********************/
	/* Runtime processes */
	/*********************/
	
	// Assure the initial capture is done
	let firstTime = true;
	function init() {
	  disElems = document.querySelectorAll("[data-dis-type]");
	  dises = [];
	  numCanvasesLoaded = 0;
	  
	  if(firstTime) {
	    firstTime = false;
	
	    window.addEventListener("load", () => {
	      // Setup
	      disElems.forEach( el => {
	        if(el.tagName !== "IMG" || el.complete) {
	          processDisElement(el);
	        } else {
	          el.addEventListener("load", e => {
	            processDisElement(el);
	          });
	        }
	      });
	    });
	
	    // Update the screenshot and canvas sizes when the window changes size
	    var resizeTimer;
	    window.addEventListener("resize", e => {
	
	      // Wait for resize to "finish"
	      clearTimeout(resizeTimer);
	      resizeTimer = setTimeout( () => {
	
	        dises.forEach( disObj => {
	          getScreenshot(disObj);
	
	          disObj.canvas.width = document.documentElement.scrollWidth; 
	          disObj.canvas.height = document.documentElement.scrollHeight;
	        });
	
	      }, 250);
	    });
	  } else {
	    disElems.forEach( el => {
	      if(el.tagName !== "IMG" || el.complete) {
	        processDisElement(el);
	      } else {
	        el.addEventListener("load", e => {
	          processDisElement(el);
	        });
	      }
	    });
	  }
	}
	
	
	
	/*****************************/
	/* Specific particle effects */
	/*****************************/
	
	/* An example of how particles could be created */
	
	// Returns a number between -1 and 1 in a normalized (Gaussian) way using the central limit theorum
	function genNormalizedVal() {
	  return ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random() - 3)) / 3;
	}
	
	const EaseIn    = power => t => Math.pow(t, power),
	      EaseOut   = power => t => 1 - Math.abs(Math.pow(t-1, power)),
	      EaseInOut = power => t => t<.5 ? EaseIn(power)(t*2)/2 : EaseOut(power)(t*2 - 1)/2+0.5;
	var Particle = function() {
	  this.name = "Particle";
	  this.animationDuration = 1000; // in ms
	
	  this.widthScaler = Math.round(50 * genNormalizedVal()); // Normalized val between -50 and 50
	  this.numWaves = (genNormalizedVal() + 1 / 2) * 2 + 1;
	  this.xPosFunc = t => { return Math.sin(this.numWaves * Math.PI * t); }; 
	
	  this.heightScaler = Math.round(65 * (genNormalizedVal() + 1) / 2) + 10; // Normalized val between 10 and 75
	  this.yPosFunc = t => { return t; }; 
	  
	  this.startSize = 10;
	  this.sizeFunc = t => { return 1 - t; };
	
	  this.opacityFactor = Math.round(((genNormalizedVal() + 1) / 2) * 3 + 1);
	  this.opacityFunc = t => { return 1 - EaseInOut(this.opacityFactor)(t); };
	  
	  this.draw = (ctx, percent) => {
	    percent = percent >= 1 ? 1 : percent;
	
	    let currX = this.startX + this.xPosFunc(percent) * this.widthScaler;
	    let currY = this.startY - this.yPosFunc(percent) * this.heightScaler;
	    let currSize = this.startSize * this.sizeFunc(percent);
	    let currOpacity = this.opacityFunc(percent);
	
	    ctx.fillStyle = "rgba(" + this.rgbArray[0] + ',' + this.rgbArray[1] + ',' + this.rgbArray[2] + ',' + currOpacity + ")";
	    ctx.fillRect(currX - currSize / 2, currY  - currSize / 2, currSize, currSize);
	  };
	};
	addParticleType(Particle);
	
	
	/* An "exploding" particle effect that uses circles */
	var ExplodingParticle = function() {
	  this.name = "ExplodingParticle";
	  this.animationDuration = 1000; // in ms
	
	  this.speed = {
	    x: -5 + Math.random() * 10,
	    y: -5 + Math.random() * 10
	  };
	  this.radius = 5 + Math.random() * 5;
	  this.life = 30 + Math.random() * 10;
	  this.remainingLife = this.life;
	  this.draw = ctx => {
	    if(this.remainingLife > 0
	    && this.radius > 0) {
	      ctx.beginPath();
	      ctx.arc(this.startX, this.startY, this.radius, 0, Math.PI * 2);
	      ctx.fillStyle = "rgba(" + this.rgbArray[0] + ',' + this.rgbArray[1] + ',' + this.rgbArray[2] + ", 1)";
	      ctx.fill();
	      this.remainingLife--;
	      this.radius -= 0.25;
	      this.startX += this.speed.x;
	      this.startY += this.speed.y;
	    }
	  }
	}
	addParticleType(ExplodingParticle);
	
	
	return {
	  init,
	  dises,
	  createSimultaneousParticles,
	  getDisObj,
	  addParticleType
	};
	}));


/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
7,
/* 9 */
7,
/* 10 */
7,
/* 11 */
7,
/* 12 */
7,
/* 13 */
7,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * html2canvas 1.0.0-rc.1 <https://html2canvas.hertzen.com>
	 * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
	 * Released under MIT License
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["html2canvas"] = factory();
		else
			root["html2canvas"] = factory();
	})(window, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
	/******/ })
	/************************************************************************/
	/******/ ({
	
	/***/ "./node_modules/css-line-break/dist/LineBreak.js":
	/*!*******************************************************!*\
	  !*** ./node_modules/css-line-break/dist/LineBreak.js ***!
	  \*******************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _Trie = __webpack_require__(/*! ./Trie */ \"./node_modules/css-line-break/dist/Trie.js\");\n\nvar _linebreakTrie = __webpack_require__(/*! ./linebreak-trie */ \"./node_modules/css-line-break/dist/linebreak-trie.js\");\n\nvar _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);\n\nvar _Util = __webpack_require__(/*! ./Util */ \"./node_modules/css-line-break/dist/Util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;\n\n// Non-tailorable Line Breaking Classes\nvar BK = 1; //  Cause a line break (after)\nvar CR = 2; //  Cause a line break (after), except between CR and LF\nvar LF = 3; //  Cause a line break (after)\nvar CM = 4; //  Prohibit a line break between the character and the preceding character\nvar NL = 5; //  Cause a line break (after)\nvar SG = 6; //  Do not occur in well-formed text\nvar WJ = 7; //  Prohibit line breaks before and after\nvar ZW = 8; //  Provide a break opportunity\nvar GL = 9; //  Prohibit line breaks before and after\nvar SP = 10; // Enable indirect line breaks\nvar ZWJ = 11; // Prohibit line breaks within joiner sequences\n// Break Opportunities\nvar B2 = 12; //  Provide a line break opportunity before and after the character\nvar BA = 13; //  Generally provide a line break opportunity after the character\nvar BB = 14; //  Generally provide a line break opportunity before the character\nvar HY = 15; //  Provide a line break opportunity after the character, except in numeric context\nvar CB = 16; //   Provide a line break opportunity contingent on additional information\n// Characters Prohibiting Certain Breaks\nvar CL = 17; //  Prohibit line breaks before\nvar CP = 18; //  Prohibit line breaks before\nvar EX = 19; //  Prohibit line breaks before\nvar IN = 20; //  Allow only indirect line breaks between pairs\nvar NS = 21; //  Allow only indirect line breaks before\nvar OP = 22; //  Prohibit line breaks after\nvar QU = 23; //  Act like they are both opening and closing\n// Numeric Context\nvar IS = 24; //  Prevent breaks after any and before numeric\nvar NU = 25; //  Form numeric expressions for line breaking purposes\nvar PO = 26; //  Do not break following a numeric expression\nvar PR = 27; //  Do not break in front of a numeric expression\nvar SY = 28; //  Prevent a break before; and allow a break after\n// Other Characters\nvar AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID\nvar AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters\nvar CJ = 31; //  Treat as NS or ID for strict or normal breaking.\nvar EB = 32; //  Do not break from following Emoji Modifier\nvar EM = 33; //  Do not break from preceding Emoji Base\nvar H2 = 34; //  Form Korean syllable blocks\nvar H3 = 35; //  Form Korean syllable blocks\nvar HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic\nvar ID = 37; //  Break before or after; except in some numeric context\nvar JL = 38; //  Form Korean syllable blocks\nvar JV = 39; //  Form Korean syllable blocks\nvar JT = 40; //  Form Korean syllable blocks\nvar RI = 41; //  Keep pairs together. For pairs; break before and after other classes\nvar SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis\nvar XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions\n\nvar classes = exports.classes = {\n    BK: BK,\n    CR: CR,\n    LF: LF,\n    CM: CM,\n    NL: NL,\n    SG: SG,\n    WJ: WJ,\n    ZW: ZW,\n    GL: GL,\n    SP: SP,\n    ZWJ: ZWJ,\n    B2: B2,\n    BA: BA,\n    BB: BB,\n    HY: HY,\n    CB: CB,\n    CL: CL,\n    CP: CP,\n    EX: EX,\n    IN: IN,\n    NS: NS,\n    OP: OP,\n    QU: QU,\n    IS: IS,\n    NU: NU,\n    PO: PO,\n    PR: PR,\n    SY: SY,\n    AI: AI,\n    AL: AL,\n    CJ: CJ,\n    EB: EB,\n    EM: EM,\n    H2: H2,\n    H3: H3,\n    HL: HL,\n    ID: ID,\n    JL: JL,\n    JV: JV,\n    JT: JT,\n    RI: RI,\n    SA: SA,\n    XX: XX\n};\n\nvar BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';\nvar BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';\nvar BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';\nvar UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);\n\nvar ALPHABETICS = [AL, HL];\nvar HARD_LINE_BREAKS = [BK, CR, LF, NL];\nvar SPACE = [SP, ZW];\nvar PREFIX_POSTFIX = [PR, PO];\nvar LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);\nvar KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];\nvar HYPHEN = [HY, BA];\n\nvar codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {\n    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';\n\n    var types = [];\n    var indicies = [];\n    var categories = [];\n    codePoints.forEach(function (codePoint, index) {\n        var classType = UnicodeTrie.get(codePoint);\n        if (classType > LETTER_NUMBER_MODIFIER) {\n            categories.push(true);\n            classType -= LETTER_NUMBER_MODIFIER;\n        } else {\n            categories.push(false);\n        }\n\n        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {\n            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0\n            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {\n                indicies.push(index);\n                return types.push(CB);\n            }\n        }\n\n        if (classType === CM || classType === ZWJ) {\n            // LB10 Treat any remaining combining mark or ZWJ as AL.\n            if (index === 0) {\n                indicies.push(index);\n                return types.push(AL);\n            }\n\n            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of\n            // the base character in all of the following rules. Treat ZWJ as if it were CM.\n            var prev = types[index - 1];\n            if (LINE_BREAKS.indexOf(prev) === -1) {\n                indicies.push(indicies[index - 1]);\n                return types.push(prev);\n            }\n            indicies.push(index);\n            return types.push(AL);\n        }\n\n        indicies.push(index);\n\n        if (classType === CJ) {\n            return types.push(lineBreak === 'strict' ? NS : ID);\n        }\n\n        if (classType === SA) {\n            return types.push(AL);\n        }\n\n        if (classType === AI) {\n            return types.push(AL);\n        }\n\n        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL\n        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised\n        // to take into account the actual line breaking properties for these characters.\n        if (classType === XX) {\n            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {\n                return types.push(ID);\n            } else {\n                return types.push(AL);\n            }\n        }\n\n        types.push(classType);\n    });\n\n    return [indicies, types, categories];\n};\n\nvar isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {\n    var current = classTypes[currentIndex];\n    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {\n        var i = currentIndex;\n        while (i <= classTypes.length) {\n            i++;\n            var next = classTypes[i];\n\n            if (next === b) {\n                return true;\n            }\n\n            if (next !== SP) {\n                break;\n            }\n        }\n    }\n\n    if (current === SP) {\n        var _i = currentIndex;\n\n        while (_i > 0) {\n            _i--;\n            var prev = classTypes[_i];\n\n            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {\n                var n = currentIndex;\n                while (n <= classTypes.length) {\n                    n++;\n                    var _next = classTypes[n];\n\n                    if (_next === b) {\n                        return true;\n                    }\n\n                    if (_next !== SP) {\n                        break;\n                    }\n                }\n            }\n\n            if (prev !== SP) {\n                break;\n            }\n        }\n    }\n    return false;\n};\n\nvar previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {\n    var i = currentIndex;\n    while (i >= 0) {\n        var type = classTypes[i];\n        if (type === SP) {\n            i--;\n        } else {\n            return type;\n        }\n    }\n    return 0;\n};\n\nvar _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {\n    if (indicies[index] === 0) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    var currentIndex = index - 1;\n    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    var beforeIndex = currentIndex - 1;\n    var afterIndex = currentIndex + 1;\n    var current = classTypes[currentIndex];\n\n    // LB4 Always break after hard line breaks.\n    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.\n    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;\n    var next = classTypes[afterIndex];\n\n    if (current === CR && next === LF) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {\n        return BREAK_MANDATORY;\n    }\n\n    // LB6 Do not break before hard line breaks.\n    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB7 Do not break before spaces or zero width space.\n    if (SPACE.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.\n    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {\n        return BREAK_ALLOWED;\n    }\n\n    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.\n    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB11 Do not break before or after Word joiner and related characters.\n    if (current === WJ || next === WJ) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB12 Do not break after NBSP and related characters.\n    if (current === GL) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.\n    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.\n    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB14 Do not break after ‘[’, even after spaces.\n    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB15 Do not break within ‘”[’, even with intervening spaces.\n    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.\n    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB17 Do not break within ‘——’, even with intervening spaces.\n    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB18 Break after spaces.\n    if (current === SP) {\n        return BREAK_ALLOWED;\n    }\n\n    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.\n    if (current === QU || next === QU) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB20 Break before and after unresolved CB.\n    if (next === CB || current === CB) {\n        return BREAK_ALLOWED;\n    }\n\n    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.\n    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB21a Don't break after Hebrew + Hyphen.\n    if (before === HL && HYPHEN.indexOf(current) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB21b Don’t break between Solidus and Hebrew letters.\n    if (current === SY && next === HL) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.\n    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB23 Do not break between digits and letters.\n    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.\n    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.\n    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB25 Do not break between the following pairs of classes relevant to numbers:\n    if (\n    // (PR | PO) × ( OP | HY )? NU\n    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||\n    // ( OP | HY ) × NU\n    [OP, HY].indexOf(current) !== -1 && next === NU ||\n    // NU ×\t(NU | SY | IS)\n    current === NU && [NU, SY, IS].indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)\n    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {\n        var prevIndex = currentIndex;\n        while (prevIndex >= 0) {\n            var type = classTypes[prevIndex];\n            if (type === NU) {\n                return BREAK_NOT_ALLOWED;\n            } else if ([SY, IS].indexOf(type) !== -1) {\n                prevIndex--;\n            } else {\n                break;\n            }\n        }\n    }\n\n    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))\n    if ([PR, PO].indexOf(next) !== -1) {\n        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;\n        while (_prevIndex >= 0) {\n            var _type = classTypes[_prevIndex];\n            if (_type === NU) {\n                return BREAK_NOT_ALLOWED;\n            } else if ([SY, IS].indexOf(_type) !== -1) {\n                _prevIndex--;\n            } else {\n                break;\n            }\n        }\n    }\n\n    // LB26 Do not break a Korean syllable.\n    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB27 Treat a Korean Syllable Block the same as ID.\n    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB28 Do not break between alphabetics (“at”).\n    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).\n    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.\n    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional\n    // indicators preceding the position of the break.\n    if (current === RI && next === RI) {\n        var i = indicies[currentIndex];\n        var count = 1;\n        while (i > 0) {\n            i--;\n            if (classTypes[i] === RI) {\n                count++;\n            } else {\n                break;\n            }\n        }\n        if (count % 2 !== 0) {\n            return BREAK_NOT_ALLOWED;\n        }\n    }\n\n    // LB30b Do not break between an emoji base and an emoji modifier.\n    if (current === EB && next === EM) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    return BREAK_ALLOWED;\n};\n\nvar lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {\n    // LB2 Never break at the start of text.\n    if (index === 0) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB3 Always break at the end of text.\n    if (index >= codePoints.length) {\n        return BREAK_MANDATORY;\n    }\n\n    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),\n        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),\n        indicies = _codePointsToCharacte2[0],\n        classTypes = _codePointsToCharacte2[1];\n\n    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);\n};\n\nvar cssFormattedClasses = function cssFormattedClasses(codePoints, options) {\n    if (!options) {\n        options = { lineBreak: 'normal', wordBreak: 'normal' };\n    }\n\n    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),\n        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),\n        indicies = _codePointsToCharacte4[0],\n        classTypes = _codePointsToCharacte4[1],\n        isLetterNumber = _codePointsToCharacte4[2];\n\n    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {\n        classTypes = classTypes.map(function (type) {\n            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;\n        });\n    }\n\n    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {\n        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;\n    }) : null;\n\n    return [indicies, classTypes, forbiddenBreakpoints];\n};\n\nvar inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {\n    var codePoints = (0, _Util.toCodePoints)(str);\n    var output = BREAK_NOT_ALLOWED;\n\n    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),\n        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),\n        indicies = _cssFormattedClasses2[0],\n        classTypes = _cssFormattedClasses2[1],\n        forbiddenBreakpoints = _cssFormattedClasses2[2];\n\n    codePoints.forEach(function (codePoint, i) {\n        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));\n    });\n\n    return output;\n};\n\nvar Break = function () {\n    function Break(codePoints, lineBreak, start, end) {\n        _classCallCheck(this, Break);\n\n        this._codePoints = codePoints;\n        this.required = lineBreak === BREAK_MANDATORY;\n        this.start = start;\n        this.end = end;\n    }\n\n    _createClass(Break, [{\n        key: 'slice',\n        value: function slice() {\n            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));\n        }\n    }]);\n\n    return Break;\n}();\n\nvar LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {\n    var codePoints = (0, _Util.toCodePoints)(str);\n\n    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),\n        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),\n        indicies = _cssFormattedClasses4[0],\n        classTypes = _cssFormattedClasses4[1],\n        forbiddenBreakpoints = _cssFormattedClasses4[2];\n\n    var length = codePoints.length;\n    var lastEnd = 0;\n    var nextIndex = 0;\n\n    return {\n        next: function next() {\n            if (nextIndex >= length) {\n                return { done: true };\n            }\n            var lineBreak = BREAK_NOT_ALLOWED;\n            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}\n\n            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {\n                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);\n                lastEnd = nextIndex;\n                return { value: value, done: false };\n            }\n\n            return { done: true };\n        }\n    };\n};\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/LineBreak.js?");
	
	/***/ }),
	
	/***/ "./node_modules/css-line-break/dist/Trie.js":
	/*!**************************************************!*\
	  !*** ./node_modules/css-line-break/dist/Trie.js ***!
	  \**************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Util = __webpack_require__(/*! ./Util */ \"./node_modules/css-line-break/dist/Util.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/** Shift size for getting the index-2 table offset. */\nvar UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;\n\n/** Shift size for getting the index-1 table offset. */\nvar UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;\n\n/**\n * Shift size for shifting left the index array values.\n * Increases possible data size with 16-bit index values at the cost\n * of compactability.\n * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.\n */\nvar UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;\n\n/**\n * Difference between the two shift sizes,\n * for getting an index-1 offset from an index-2 offset. 6=11-5\n */\nvar UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;\n\n/**\n * The part of the index-2 table for U+D800..U+DBFF stores values for\n * lead surrogate code _units_ not code _points_.\n * Values for lead surrogate code _points_ are indexed with this portion of the table.\n * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)\n */\nvar UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;\n\n/** Number of entries in a data block. 32=0x20 */\nvar UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;\n/** Mask for getting the lower bits for the in-data-block offset. */\nvar UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;\n\nvar UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;\n/** Count the lengths of both BMP pieces. 2080=0x820 */\nvar UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;\n/**\n * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.\n * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.\n */\nvar UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;\nvar UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */\n/**\n * The index-1 table, only used for supplementary code points, at offset 2112=0x840.\n * Variable length, for code points up to highStart, where the last single-value range starts.\n * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.\n * (For 0x100000 supplementary code points U+10000..U+10ffff.)\n *\n * The part of the index-2 table for supplementary code points starts\n * after this index-1 table.\n *\n * Both the index-1 table and the following part of the index-2 table\n * are omitted completely if there is only BMP data.\n */\nvar UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;\n\n/**\n * Number of index-1 entries for the BMP. 32=0x20\n * This part of the index-1 table is omitted from the serialized form.\n */\nvar UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;\n\n/** Number of entries in an index-2 block. 64=0x40 */\nvar UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;\n/** Mask for getting the lower bits for the in-index-2-block offset. */\nvar UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;\n\nvar createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {\n    var buffer = (0, _Util.decode)(base64);\n    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);\n    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);\n    var headerLength = 24;\n\n    var index = view16.slice(headerLength / 2, view32[4] / 2);\n    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));\n\n    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);\n};\n\nvar Trie = exports.Trie = function () {\n    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {\n        _classCallCheck(this, Trie);\n\n        this.initialValue = initialValue;\n        this.errorValue = errorValue;\n        this.highStart = highStart;\n        this.highValueIndex = highValueIndex;\n        this.index = index;\n        this.data = data;\n    }\n\n    /**\n     * Get the value for a code point as stored in the Trie.\n     *\n     * @param codePoint the code point\n     * @return the value\n     */\n\n\n    _createClass(Trie, [{\n        key: 'get',\n        value: function get(codePoint) {\n            var ix = void 0;\n            if (codePoint >= 0) {\n                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {\n                    // Ordinary BMP code point, excluding leading surrogates.\n                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.\n                    // 16 bit data is stored in the index array itself.\n                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];\n                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);\n                    return this.data[ix];\n                }\n\n                if (codePoint <= 0xffff) {\n                    // Lead Surrogate Code Point.  A Separate index section is stored for\n                    // lead surrogate code units and code points.\n                    //   The main index has the code unit data.\n                    //   For this function, we need the code point data.\n                    // Note: this expression could be refactored for slightly improved efficiency, but\n                    //       surrogate code points will be so rare in practice that it's not worth it.\n                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];\n                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);\n                    return this.data[ix];\n                }\n\n                if (codePoint < this.highStart) {\n                    // Supplemental code point, use two-level lookup.\n                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);\n                    ix = this.index[ix];\n                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;\n                    ix = this.index[ix];\n                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);\n                    return this.data[ix];\n                }\n                if (codePoint <= 0x10ffff) {\n                    return this.data[this.highValueIndex];\n                }\n            }\n\n            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.\n            return this.errorValue;\n        }\n    }]);\n\n    return Trie;\n}();\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/Trie.js?");
	
	/***/ }),
	
	/***/ "./node_modules/css-line-break/dist/Util.js":
	/*!**************************************************!*\
	  !*** ./node_modules/css-line-break/dist/Util.js ***!
	  \**************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar toCodePoints = exports.toCodePoints = function toCodePoints(str) {\n    var codePoints = [];\n    var i = 0;\n    var length = str.length;\n    while (i < length) {\n        var value = str.charCodeAt(i++);\n        if (value >= 0xd800 && value <= 0xdbff && i < length) {\n            var extra = str.charCodeAt(i++);\n            if ((extra & 0xfc00) === 0xdc00) {\n                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);\n            } else {\n                codePoints.push(value);\n                i--;\n            }\n        } else {\n            codePoints.push(value);\n        }\n    }\n    return codePoints;\n};\n\nvar fromCodePoint = exports.fromCodePoint = function fromCodePoint() {\n    if (String.fromCodePoint) {\n        return String.fromCodePoint.apply(String, arguments);\n    }\n\n    var length = arguments.length;\n    if (!length) {\n        return '';\n    }\n\n    var codeUnits = [];\n\n    var index = -1;\n    var result = '';\n    while (++index < length) {\n        var codePoint = arguments.length <= index ? undefined : arguments[index];\n        if (codePoint <= 0xffff) {\n            codeUnits.push(codePoint);\n        } else {\n            codePoint -= 0x10000;\n            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);\n        }\n        if (index + 1 === length || codeUnits.length > 0x4000) {\n            result += String.fromCharCode.apply(String, codeUnits);\n            codeUnits.length = 0;\n        }\n    }\n    return result;\n};\n\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';\n\n// Use a lookup table to find the index.\nvar lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);\nfor (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n}\n\nvar decode = exports.decode = function decode(base64) {\n    var bufferLength = base64.length * 0.75,\n        len = base64.length,\n        i = void 0,\n        p = 0,\n        encoded1 = void 0,\n        encoded2 = void 0,\n        encoded3 = void 0,\n        encoded4 = void 0;\n\n    if (base64[base64.length - 1] === '=') {\n        bufferLength--;\n        if (base64[base64.length - 2] === '=') {\n            bufferLength--;\n        }\n    }\n\n    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);\n    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);\n\n    for (i = 0; i < len; i += 4) {\n        encoded1 = lookup[base64.charCodeAt(i)];\n        encoded2 = lookup[base64.charCodeAt(i + 1)];\n        encoded3 = lookup[base64.charCodeAt(i + 2)];\n        encoded4 = lookup[base64.charCodeAt(i + 3)];\n\n        bytes[p++] = encoded1 << 2 | encoded2 >> 4;\n        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;\n        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;\n    }\n\n    return buffer;\n};\n\nvar polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {\n    var length = buffer.length;\n    var bytes = [];\n    for (var _i = 0; _i < length; _i += 2) {\n        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);\n    }\n    return bytes;\n};\n\nvar polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {\n    var length = buffer.length;\n    var bytes = [];\n    for (var _i2 = 0; _i2 < length; _i2 += 4) {\n        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);\n    }\n    return bytes;\n};\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/Util.js?");
	
	/***/ }),
	
	/***/ "./node_modules/css-line-break/dist/index.js":
	/*!***************************************************!*\
	  !*** ./node_modules/css-line-break/dist/index.js ***!
	  \***************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Util = __webpack_require__(/*! ./Util */ \"./node_modules/css-line-break/dist/Util.js\");\n\nObject.defineProperty(exports, 'toCodePoints', {\n  enumerable: true,\n  get: function get() {\n    return _Util.toCodePoints;\n  }\n});\nObject.defineProperty(exports, 'fromCodePoint', {\n  enumerable: true,\n  get: function get() {\n    return _Util.fromCodePoint;\n  }\n});\n\nvar _LineBreak = __webpack_require__(/*! ./LineBreak */ \"./node_modules/css-line-break/dist/LineBreak.js\");\n\nObject.defineProperty(exports, 'LineBreaker', {\n  enumerable: true,\n  get: function get() {\n    return _LineBreak.LineBreaker;\n  }\n});\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/css-line-break/dist/linebreak-trie.js":
	/*!************************************************************!*\
	  !*** ./node_modules/css-line-break/dist/linebreak-trie.js ***!
	  \************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nmodule.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/linebreak-trie.js?");
	
	/***/ }),
	
	/***/ "./src/Angle.js":
	/*!**********************!*\
	  !*** ./src/Angle.js ***!
	  \**********************/
	/*! exports provided: parseAngle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseAngle\", function() { return parseAngle; });\n\n\nvar ANGLE = /([+-]?\\d*\\.?\\d+)(deg|grad|rad|turn)/i;\nvar parseAngle = function parseAngle(angle) {\n  var match = angle.match(ANGLE);\n\n  if (match) {\n    var value = parseFloat(match[1]);\n\n    switch (match[2].toLowerCase()) {\n      case 'deg':\n        return Math.PI * value / 180;\n\n      case 'grad':\n        return Math.PI / 200 * value;\n\n      case 'rad':\n        return value;\n\n      case 'turn':\n        return Math.PI * 2 * value;\n    }\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Angle.js?");
	
	/***/ }),
	
	/***/ "./src/Bounds.js":
	/*!***********************!*\
	  !*** ./src/Bounds.js ***!
	  \***********************/
	/*! exports provided: Bounds, parseBounds, calculatePaddingBox, calculateContentBox, parseDocumentSize, parsePathForBorder, calculateBorderBoxPath, calculatePaddingBoxPath, parseBoundCurves */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bounds\", function() { return Bounds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBounds\", function() { return parseBounds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculatePaddingBox\", function() { return calculatePaddingBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateContentBox\", function() { return calculateContentBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseDocumentSize\", function() { return parseDocumentSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsePathForBorder\", function() { return parsePathForBorder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBorderBoxPath\", function() { return calculateBorderBoxPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculatePaddingBoxPath\", function() { return calculatePaddingBoxPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBoundCurves\", function() { return parseBoundCurves; });\n/* harmony import */ var _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing/Vector */ \"./src/drawing/Vector.js\");\n/* harmony import */ var _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing/BezierCurve */ \"./src/drawing/BezierCurve.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar TOP = 0;\nvar RIGHT = 1;\nvar BOTTOM = 2;\nvar LEFT = 3;\nvar H = 0;\nvar V = 1;\nvar Bounds =\n/*#__PURE__*/\nfunction () {\n  function Bounds(x, y, w, h) {\n    _classCallCheck(this, Bounds);\n\n    this.left = x;\n    this.top = y;\n    this.width = w;\n    this.height = h;\n  }\n\n  _createClass(Bounds, null, [{\n    key: \"fromClientRect\",\n    value: function fromClientRect(clientRect, scrollX, scrollY) {\n      return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);\n    }\n  }]);\n\n  return Bounds;\n}();\nvar parseBounds = function parseBounds(node, scrollX, scrollY) {\n  return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);\n};\nvar calculatePaddingBox = function calculatePaddingBox(bounds, borders) {\n  return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));\n};\nvar calculateContentBox = function calculateContentBox(bounds, padding, borders) {\n  // TODO support percentage paddings\n  var paddingTop = padding[TOP].value;\n  var paddingRight = padding[RIGHT].value;\n  var paddingBottom = padding[BOTTOM].value;\n  var paddingLeft = padding[LEFT].value;\n  return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));\n};\nvar parseDocumentSize = function parseDocumentSize(document) {\n  var body = document.body;\n  var documentElement = document.documentElement;\n\n  if (!body || !documentElement) {\n    throw new Error( true ? \"Unable to get document size\" : undefined);\n  }\n\n  var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));\n  var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));\n  return new Bounds(0, 0, width, height);\n};\nvar parsePathForBorder = function parsePathForBorder(curves, borderSide) {\n  switch (borderSide) {\n    case TOP:\n      return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);\n\n    case RIGHT:\n      return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);\n\n    case BOTTOM:\n      return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);\n\n    case LEFT:\n    default:\n      return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);\n  }\n};\n\nvar createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {\n  var path = [];\n\n  if (outer1 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n    path.push(outer1.subdivide(0.5, false));\n  } else {\n    path.push(outer1);\n  }\n\n  if (outer2 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n    path.push(outer2.subdivide(0.5, true));\n  } else {\n    path.push(outer2);\n  }\n\n  if (inner2 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n    path.push(inner2.subdivide(0.5, true).reverse());\n  } else {\n    path.push(inner2);\n  }\n\n  if (inner1 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n    path.push(inner1.subdivide(0.5, false).reverse());\n  } else {\n    path.push(inner1);\n  }\n\n  return path;\n};\n\nvar calculateBorderBoxPath = function calculateBorderBoxPath(curves) {\n  return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];\n};\nvar calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {\n  return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];\n};\nvar parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {\n  var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);\n  var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);\n  var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);\n  var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);\n  var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);\n  var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);\n  var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);\n  var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);\n  var factors = [];\n  factors.push((tlh + trh) / bounds.width);\n  factors.push((blh + brh) / bounds.width);\n  factors.push((tlv + blv) / bounds.height);\n  factors.push((trv + brv) / bounds.height);\n  var maxFactor = Math.max.apply(Math, factors);\n\n  if (maxFactor > 1) {\n    tlh /= maxFactor;\n    tlv /= maxFactor;\n    trh /= maxFactor;\n    trv /= maxFactor;\n    brh /= maxFactor;\n    brv /= maxFactor;\n    blh /= maxFactor;\n    blv /= maxFactor;\n  }\n\n  var topWidth = bounds.width - trh;\n  var rightHeight = bounds.height - brv;\n  var bottomWidth = bounds.width - brh;\n  var leftHeight = bounds.height - blv;\n  return {\n    topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left, bounds.top),\n    topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),\n    topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + bounds.width, bounds.top),\n    topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),\n    bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + bounds.width, bounds.top + bounds.height),\n    bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),\n    bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left, bounds.top + bounds.height),\n    bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)\n  };\n};\nvar CORNER = {\n  TOP_LEFT: 0,\n  TOP_RIGHT: 1,\n  BOTTOM_RIGHT: 2,\n  BOTTOM_LEFT: 3\n};\n\nvar getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {\n  var kappa = 4 * ((Math.sqrt(2) - 1) / 3);\n  var ox = r1 * kappa; // control point offset horizontal\n\n  var oy = r2 * kappa; // control point offset vertical\n\n  var xm = x + r1; // x-middle\n\n  var ym = y + r2; // y-middle\n\n  switch (position) {\n    case CORNER.TOP_LEFT:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, ym - oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm - ox, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, y));\n\n    case CORNER.TOP_RIGHT:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x + ox, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, ym - oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, ym));\n\n    case CORNER.BOTTOM_RIGHT:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, y + oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x + ox, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, ym));\n\n    case CORNER.BOTTOM_LEFT:\n    default:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm - ox, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y + oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y));\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/Bounds.js?");
	
	/***/ }),
	
	/***/ "./src/Clone.js":
	/*!**********************!*\
	  !*** ./src/Clone.js ***!
	  \**********************/
	/*! exports provided: DocumentCloner, cloneWindow */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DocumentCloner\", function() { return DocumentCloner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneWindow\", function() { return cloneWindow; });\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ \"./src/Proxy.js\");\n/* harmony import */ var _ResourceLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceLoader */ \"./src/ResourceLoader.js\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing/background */ \"./src/parsing/background.js\");\n/* harmony import */ var _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderer/CanvasRenderer */ \"./src/renderer/CanvasRenderer.js\");\n/* harmony import */ var _PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PseudoNodeContent */ \"./src/PseudoNodeContent.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';\nvar DocumentCloner =\n/*#__PURE__*/\nfunction () {\n  function DocumentCloner(element, options, logger, copyInline, renderer) {\n    _classCallCheck(this, DocumentCloner);\n\n    this.referenceElement = element;\n    this.scrolledElements = [];\n    this.copyStyles = copyInline;\n    this.inlineImages = copyInline;\n    this.logger = logger;\n    this.options = options;\n    this.renderer = renderer;\n    this.resourceLoader = new _ResourceLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"](options, logger, window);\n    this.pseudoContentData = {\n      counters: {},\n      quoteDepth: 0\n    }; // $FlowFixMe\n\n    this.documentElement = this.cloneNode(element.ownerDocument.documentElement);\n  }\n\n  _createClass(DocumentCloner, [{\n    key: \"inlineAllImages\",\n    value: function inlineAllImages(node) {\n      var _this = this;\n\n      if (this.inlineImages && node) {\n        var style = node.style;\n        Promise.all(Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"parseBackgroundImage\"])(style.backgroundImage).map(function (backgroundImage) {\n          if (backgroundImage.method === 'url') {\n            return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {\n              return img && typeof img.src === 'string' ? \"url(\\\"\".concat(img.src, \"\\\")\") : 'none';\n            }).catch(function (e) {\n              if (true) {\n                _this.logger.log(\"Unable to load image\", e);\n              }\n            });\n          }\n\n          return Promise.resolve(\"\".concat(backgroundImage.prefix).concat(backgroundImage.method, \"(\").concat(backgroundImage.args.join(','), \")\"));\n        })).then(function (backgroundImages) {\n          if (backgroundImages.length > 1) {\n            // TODO Multiple backgrounds somehow broken in Chrome\n            style.backgroundColor = '';\n          }\n\n          style.backgroundImage = backgroundImages.join(',');\n        });\n\n        if (node instanceof HTMLImageElement) {\n          this.resourceLoader.inlineImage(node.src).then(function (img) {\n            if (img && node instanceof HTMLImageElement && node.parentNode) {\n              var parentNode = node.parentNode;\n              var clonedChild = Object(_Util__WEBPACK_IMPORTED_MODULE_3__[\"copyCSSStyles\"])(node.style, img.cloneNode(false));\n              parentNode.replaceChild(clonedChild, node);\n            }\n          }).catch(function (e) {\n            if (true) {\n              _this.logger.log(\"Unable to load image\", e);\n            }\n          });\n        }\n      }\n    }\n  }, {\n    key: \"inlineFonts\",\n    value: function inlineFonts(document) {\n      var _this2 = this;\n\n      return Promise.all(Array.from(document.styleSheets).map(function (sheet) {\n        if (sheet.href) {\n          return fetch(sheet.href).then(function (res) {\n            return res.text();\n          }).then(function (text) {\n            return createStyleSheetFontsFromText(text, sheet.href);\n          }).catch(function (e) {\n            if (true) {\n              _this2.logger.log(\"Unable to load stylesheet\", e);\n            }\n\n            return [];\n          });\n        }\n\n        return getSheetFonts(sheet, document);\n      })).then(function (fonts) {\n        return fonts.reduce(function (acc, font) {\n          return acc.concat(font);\n        }, []);\n      }).then(function (fonts) {\n        return Promise.all(fonts.map(function (font) {\n          return fetch(font.formats[0].src).then(function (response) {\n            return response.blob();\n          }).then(function (blob) {\n            return new Promise(function (resolve, reject) {\n              var reader = new FileReader();\n              reader.onerror = reject;\n\n              reader.onload = function () {\n                // $FlowFixMe\n                var result = reader.result;\n                resolve(result);\n              };\n\n              reader.readAsDataURL(blob);\n            });\n          }).then(function (dataUri) {\n            font.fontFace.setProperty('src', \"url(\\\"\".concat(dataUri, \"\\\")\"));\n            return \"@font-face {\".concat(font.fontFace.cssText, \" \");\n          });\n        }));\n      }).then(function (fontCss) {\n        var style = document.createElement('style');\n        style.textContent = fontCss.join('\\n');\n\n        _this2.documentElement.appendChild(style);\n      });\n    }\n  }, {\n    key: \"createElementClone\",\n    value: function createElementClone(node) {\n      var _this3 = this;\n\n      if (this.copyStyles && node instanceof HTMLCanvasElement) {\n        var img = node.ownerDocument.createElement('img');\n\n        try {\n          img.src = node.toDataURL();\n          return img;\n        } catch (e) {\n          if (true) {\n            this.logger.log(\"Unable to clone canvas contents, canvas is tainted\");\n          }\n        }\n      }\n\n      if (node instanceof HTMLIFrameElement) {\n        var tempIframe = node.cloneNode(false);\n        var iframeKey = generateIframeKey();\n        tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);\n\n        var _parseBounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"parseBounds\"])(node, 0, 0),\n            width = _parseBounds.width,\n            height = _parseBounds.height;\n\n        this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {\n          return _this3.renderer(documentElement, {\n            allowTaint: _this3.options.allowTaint,\n            backgroundColor: '#ffffff',\n            canvas: null,\n            imageTimeout: _this3.options.imageTimeout,\n            logging: _this3.options.logging,\n            proxy: _this3.options.proxy,\n            removeContainer: _this3.options.removeContainer,\n            scale: _this3.options.scale,\n            foreignObjectRendering: _this3.options.foreignObjectRendering,\n            useCORS: _this3.options.useCORS,\n            target: new _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_5__[\"default\"](),\n            width: width,\n            height: height,\n            x: 0,\n            y: 0,\n            windowWidth: documentElement.ownerDocument.defaultView.innerWidth,\n            windowHeight: documentElement.ownerDocument.defaultView.innerHeight,\n            scrollX: documentElement.ownerDocument.defaultView.pageXOffset,\n            scrollY: documentElement.ownerDocument.defaultView.pageYOffset\n          }, _this3.logger.child(iframeKey));\n        }).then(function (canvas) {\n          return new Promise(function (resolve, reject) {\n            var iframeCanvas = document.createElement('img');\n\n            iframeCanvas.onload = function () {\n              return resolve(canvas);\n            };\n\n            iframeCanvas.onerror = function (event) {\n              // Empty iframes may result in empty \"data:,\" URLs, which are invalid from the <img>'s point of view\n              // and instead of `onload` cause `onerror` and unhandled rejection warnings\n              // https://github.com/niklasvh/html2canvas/issues/1502\n              iframeCanvas.src == 'data:,' ? resolve(canvas) : reject(event);\n            };\n\n            iframeCanvas.src = canvas.toDataURL();\n\n            if (tempIframe.parentNode) {\n              tempIframe.parentNode.replaceChild(Object(_Util__WEBPACK_IMPORTED_MODULE_3__[\"copyCSSStyles\"])(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);\n            }\n          });\n        });\n        return tempIframe;\n      }\n\n      try {\n        if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {\n          var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {\n            if (rule && rule.cssText) {\n              return css + rule.cssText;\n            }\n\n            return css;\n          }, '');\n          var style = node.cloneNode(false);\n          style.textContent = css;\n          return style;\n        }\n      } catch (e) {\n        // accessing node.sheet.cssRules throws a DOMException\n        this.logger.log('Unable to access cssRules property');\n\n        if (e.name !== 'SecurityError') {\n          this.logger.log(e);\n          throw e;\n        }\n      }\n\n      return node.cloneNode(false);\n    }\n  }, {\n    key: \"cloneNode\",\n    value: function cloneNode(node) {\n      var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);\n      var window = node.ownerDocument.defaultView;\n      var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;\n      var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;\n      var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;\n\n      if (this.referenceElement === node && clone instanceof window.HTMLElement) {\n        this.clonedReferenceElement = clone;\n      }\n\n      if (clone instanceof window.HTMLBodyElement) {\n        createPseudoHideStyles(clone);\n      }\n\n      var counters = Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"parseCounterReset\"])(style, this.pseudoContentData);\n      var contentBefore = Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"resolvePseudoContent\"])(node, styleBefore, this.pseudoContentData);\n\n      for (var child = node.firstChild; child; child = child.nextSibling) {\n        if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' && // $FlowFixMe\n        !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' || // $FlowFixMe\n        !this.options.ignoreElements(child))) {\n          if (!this.copyStyles || child.nodeName !== 'STYLE') {\n            clone.appendChild(this.cloneNode(child));\n          }\n        }\n      }\n\n      var contentAfter = Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"resolvePseudoContent\"])(node, styleAfter, this.pseudoContentData);\n      Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"popCounters\"])(counters, this.pseudoContentData);\n\n      if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {\n        if (styleBefore) {\n          this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));\n        }\n\n        if (styleAfter) {\n          this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));\n        }\n\n        if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {\n          Object(_Util__WEBPACK_IMPORTED_MODULE_3__[\"copyCSSStyles\"])(style, clone);\n        }\n\n        this.inlineAllImages(clone);\n\n        if (node.scrollTop !== 0 || node.scrollLeft !== 0) {\n          this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);\n        }\n\n        switch (node.nodeName) {\n          case 'CANVAS':\n            if (!this.copyStyles) {\n              cloneCanvasContents(node, clone);\n            }\n\n            break;\n\n          case 'TEXTAREA':\n          case 'SELECT':\n            clone.value = node.value;\n            break;\n        }\n      }\n\n      return clone;\n    }\n  }]);\n\n  return DocumentCloner;\n}();\n\nvar getSheetFonts = function getSheetFonts(sheet, document) {\n  // $FlowFixMe\n  return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {\n    return rule.type === CSSRule.FONT_FACE_RULE;\n  }).map(function (rule) {\n    var src = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"parseBackgroundImage\"])(rule.style.getPropertyValue('src'));\n    var formats = [];\n\n    for (var i = 0; i < src.length; i++) {\n      if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {\n        var a = document.createElement('a');\n        a.href = src[i].args[0];\n\n        if (document.body) {\n          document.body.appendChild(a);\n        }\n\n        var font = {\n          src: a.href,\n          format: src[i + 1].args[0]\n        };\n        formats.push(font);\n      }\n    }\n\n    return {\n      // TODO select correct format for browser),\n      formats: formats.filter(function (font) {\n        return /^woff/i.test(font.format);\n      }),\n      fontFace: rule.style\n    };\n  }).filter(function (font) {\n    return font.formats.length;\n  });\n};\n\nvar createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {\n  var doc = document.implementation.createHTMLDocument('');\n  var base = document.createElement('base'); // $FlowFixMe\n\n  base.href = baseHref;\n  var style = document.createElement('style');\n  style.textContent = text;\n\n  if (doc.head) {\n    doc.head.appendChild(base);\n  }\n\n  if (doc.body) {\n    doc.body.appendChild(style);\n  }\n\n  return style.sheet ? getSheetFonts(style.sheet, doc) : [];\n};\n\nvar restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {\n  if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {\n    ownerDocument.defaultView.scrollTo(x, y);\n  }\n};\n\nvar cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {\n  try {\n    if (clonedCanvas) {\n      clonedCanvas.width = canvas.width;\n      clonedCanvas.height = canvas.height;\n      var ctx = canvas.getContext('2d');\n      var clonedCtx = clonedCanvas.getContext('2d');\n\n      if (ctx) {\n        clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);\n      } else {\n        clonedCtx.drawImage(canvas, 0, 0);\n      }\n    }\n  } catch (e) {}\n};\n\nvar inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {\n  if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {\n    return;\n  }\n\n  var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');\n  Object(_Util__WEBPACK_IMPORTED_MODULE_3__[\"copyCSSStyles\"])(style, anonymousReplacedElement);\n\n  if (contentItems) {\n    var len = contentItems.length;\n\n    for (var i = 0; i < len; i++) {\n      var item = contentItems[i];\n\n      switch (item.type) {\n        case _PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"PSEUDO_CONTENT_ITEM_TYPE\"].IMAGE:\n          var img = clone.ownerDocument.createElement('img');\n          img.src = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"parseBackgroundImage\"])(\"url(\".concat(item.value, \")\"))[0].args[0];\n          img.style.opacity = '1';\n          anonymousReplacedElement.appendChild(img);\n          break;\n\n        case _PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"PSEUDO_CONTENT_ITEM_TYPE\"].TEXT:\n          anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));\n          break;\n      }\n    }\n  }\n\n  anonymousReplacedElement.className = \"\".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE, \" \").concat(PSEUDO_HIDE_ELEMENT_CLASS_AFTER);\n  clone.className += pseudoElt === PSEUDO_BEFORE ? \" \".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE) : \" \".concat(PSEUDO_HIDE_ELEMENT_CLASS_AFTER);\n\n  if (pseudoElt === PSEUDO_BEFORE) {\n    clone.insertBefore(anonymousReplacedElement, clone.firstChild);\n  } else {\n    clone.appendChild(anonymousReplacedElement);\n  }\n\n  return anonymousReplacedElement;\n};\n\nvar URL_REGEXP = /^url\\((.+)\\)$/i;\nvar PSEUDO_BEFORE = ':before';\nvar PSEUDO_AFTER = ':after';\nvar PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';\nvar PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';\nvar PSEUDO_HIDE_ELEMENT_STYLE = \"{\\n    content: \\\"\\\" !important;\\n    display: none !important;\\n}\";\n\nvar createPseudoHideStyles = function createPseudoHideStyles(body) {\n  createStyles(body, \".\".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE).concat(PSEUDO_BEFORE).concat(PSEUDO_HIDE_ELEMENT_STYLE, \"\\n         .\").concat(PSEUDO_HIDE_ELEMENT_CLASS_AFTER).concat(PSEUDO_AFTER).concat(PSEUDO_HIDE_ELEMENT_STYLE));\n};\n\nvar createStyles = function createStyles(body, styles) {\n  var style = body.ownerDocument.createElement('style');\n  style.innerHTML = styles;\n  body.appendChild(style);\n};\n\nvar initNode = function initNode(_ref) {\n  var _ref2 = _slicedToArray(_ref, 3),\n      element = _ref2[0],\n      x = _ref2[1],\n      y = _ref2[2];\n\n  element.scrollLeft = x;\n  element.scrollTop = y;\n};\n\nvar generateIframeKey = function generateIframeKey() {\n  return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);\n};\n\nvar DATA_URI_REGEXP = /^data:text\\/(.+);(base64)?,(.*)$/i;\n\nvar getIframeDocumentElement = function getIframeDocumentElement(node, options) {\n  try {\n    return Promise.resolve(node.contentWindow.document.documentElement);\n  } catch (e) {\n    return options.proxy ? Object(_Proxy__WEBPACK_IMPORTED_MODULE_1__[\"Proxy\"])(node.src, options).then(function (html) {\n      var match = html.match(DATA_URI_REGEXP);\n\n      if (!match) {\n        return Promise.reject();\n      }\n\n      return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);\n    }).then(function (html) {\n      return createIframeContainer(node.ownerDocument, Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"parseBounds\"])(node, 0, 0)).then(function (cloneIframeContainer) {\n        var cloneWindow = cloneIframeContainer.contentWindow;\n        var documentClone = cloneWindow.document;\n        documentClone.open();\n        documentClone.write(html);\n        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {\n          return documentClone.documentElement;\n        });\n        documentClone.close();\n        return iframeLoad;\n      });\n    }) : Promise.reject();\n  }\n};\n\nvar createIframeContainer = function createIframeContainer(ownerDocument, bounds) {\n  var cloneIframeContainer = ownerDocument.createElement('iframe');\n  cloneIframeContainer.className = 'html2canvas-container';\n  cloneIframeContainer.style.visibility = 'hidden';\n  cloneIframeContainer.style.position = 'fixed';\n  cloneIframeContainer.style.left = '-10000px';\n  cloneIframeContainer.style.top = '0px';\n  cloneIframeContainer.style.border = '0';\n  cloneIframeContainer.width = bounds.width.toString();\n  cloneIframeContainer.height = bounds.height.toString();\n  cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it\n\n  cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');\n\n  if (!ownerDocument.body) {\n    return Promise.reject( true ? \"Body element not found in Document that is getting rendered\" : undefined);\n  }\n\n  ownerDocument.body.appendChild(cloneIframeContainer);\n  return Promise.resolve(cloneIframeContainer);\n};\n\nvar iframeLoader = function iframeLoader(cloneIframeContainer) {\n  var cloneWindow = cloneIframeContainer.contentWindow;\n  var documentClone = cloneWindow.document;\n  return new Promise(function (resolve, reject) {\n    cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {\n      var interval = setInterval(function () {\n        if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {\n          clearInterval(interval);\n          resolve(cloneIframeContainer);\n        }\n      }, 50);\n    };\n  });\n};\n\nvar cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {\n  var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);\n  var scrollX = ownerDocument.defaultView.pageXOffset;\n  var scrollY = ownerDocument.defaultView.pageYOffset;\n  return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {\n    var cloneWindow = cloneIframeContainer.contentWindow;\n    var documentClone = cloneWindow.document;\n    /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle\n         if window url is about:blank, we can assign the url to current by writing onto the document\n         */\n\n    var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {\n      cloner.scrolledElements.forEach(initNode);\n      cloneWindow.scrollTo(bounds.left, bounds.top);\n\n      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {\n        documentClone.documentElement.style.top = -bounds.top + 'px';\n        documentClone.documentElement.style.left = -bounds.left + 'px';\n        documentClone.documentElement.style.position = 'absolute';\n      }\n\n      var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);\n      var onclone = options.onclone;\n      return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {\n        return onclone(documentClone);\n      }).then(function () {\n        return result;\n      }) : result : Promise.reject( true ? \"Error finding the \".concat(referenceElement.nodeName, \" in the cloned document\") : undefined);\n    });\n    documentClone.open();\n    documentClone.write(\"\".concat(serializeDoctype(document.doctype), \"<html></html>\")); // Chrome scrolls the parent document for some reason after the write to the cloned window???\n\n    restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);\n    documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);\n    documentClone.close();\n    return iframeLoad;\n  });\n};\n\nvar serializeDoctype = function serializeDoctype(doctype) {\n  var str = '';\n\n  if (doctype) {\n    str += '<!DOCTYPE ';\n\n    if (doctype.name) {\n      str += doctype.name;\n    }\n\n    if (doctype.internalSubset) {\n      str += doctype.internalSubset;\n    }\n\n    if (doctype.publicId) {\n      str += \"\\\"\".concat(doctype.publicId, \"\\\"\");\n    }\n\n    if (doctype.systemId) {\n      str += \"\\\"\".concat(doctype.systemId, \"\\\"\");\n    }\n\n    str += '>';\n  }\n\n  return str;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Clone.js?");
	
	/***/ }),
	
	/***/ "./src/Color.js":
	/*!**********************!*\
	  !*** ./src/Color.js ***!
	  \**********************/
	/*! exports provided: default, TRANSPARENT */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TRANSPARENT\", function() { return TRANSPARENT; });\n // http://dev.w3.org/csswg/css-color/\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HEX3 = /^#([a-f0-9]{3})$/i;\n\nvar hex3 = function hex3(value) {\n  var match = value.match(HEX3);\n\n  if (match) {\n    return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];\n  }\n\n  return false;\n};\n\nvar HEX6 = /^#([a-f0-9]{6})$/i;\n\nvar hex6 = function hex6(value) {\n  var match = value.match(HEX6);\n\n  if (match) {\n    return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];\n  }\n\n  return false;\n};\n\nvar RGB = /^rgb\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*\\)$/;\n\nvar rgb = function rgb(value) {\n  var match = value.match(RGB);\n\n  if (match) {\n    return [Number(match[1]), Number(match[2]), Number(match[3]), null];\n  }\n\n  return false;\n};\n\nvar RGBA = /^rgba\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d?\\.?\\d+)\\s*\\)$/;\n\nvar rgba = function rgba(value) {\n  var match = value.match(RGBA);\n\n  if (match && match.length > 4) {\n    return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];\n  }\n\n  return false;\n};\n\nvar fromArray = function fromArray(array) {\n  return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];\n};\n\nvar namedColor = function namedColor(name) {\n  var color = NAMED_COLORS[name.toLowerCase()];\n  return color ? color : false;\n};\n\nvar Color =\n/*#__PURE__*/\nfunction () {\n  function Color(value) {\n    _classCallCheck(this, Color);\n\n    var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],\n        _ref2 = _slicedToArray(_ref, 4),\n        r = _ref2[0],\n        g = _ref2[1],\n        b = _ref2[2],\n        a = _ref2[3];\n\n    this.r = r;\n    this.g = g;\n    this.b = b;\n    this.a = a;\n  }\n\n  _createClass(Color, [{\n    key: \"isTransparent\",\n    value: function isTransparent() {\n      return this.a === 0;\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return this.a !== null && this.a !== 1 ? \"rgba(\".concat(this.r, \",\").concat(this.g, \",\").concat(this.b, \",\").concat(this.a, \")\") : \"rgb(\".concat(this.r, \",\").concat(this.g, \",\").concat(this.b, \")\");\n    }\n  }]);\n\n  return Color;\n}();\n\n\nvar NAMED_COLORS = {\n  transparent: [0, 0, 0, 0],\n  aliceblue: [240, 248, 255, null],\n  antiquewhite: [250, 235, 215, null],\n  aqua: [0, 255, 255, null],\n  aquamarine: [127, 255, 212, null],\n  azure: [240, 255, 255, null],\n  beige: [245, 245, 220, null],\n  bisque: [255, 228, 196, null],\n  black: [0, 0, 0, null],\n  blanchedalmond: [255, 235, 205, null],\n  blue: [0, 0, 255, null],\n  blueviolet: [138, 43, 226, null],\n  brown: [165, 42, 42, null],\n  burlywood: [222, 184, 135, null],\n  cadetblue: [95, 158, 160, null],\n  chartreuse: [127, 255, 0, null],\n  chocolate: [210, 105, 30, null],\n  coral: [255, 127, 80, null],\n  cornflowerblue: [100, 149, 237, null],\n  cornsilk: [255, 248, 220, null],\n  crimson: [220, 20, 60, null],\n  cyan: [0, 255, 255, null],\n  darkblue: [0, 0, 139, null],\n  darkcyan: [0, 139, 139, null],\n  darkgoldenrod: [184, 134, 11, null],\n  darkgray: [169, 169, 169, null],\n  darkgreen: [0, 100, 0, null],\n  darkgrey: [169, 169, 169, null],\n  darkkhaki: [189, 183, 107, null],\n  darkmagenta: [139, 0, 139, null],\n  darkolivegreen: [85, 107, 47, null],\n  darkorange: [255, 140, 0, null],\n  darkorchid: [153, 50, 204, null],\n  darkred: [139, 0, 0, null],\n  darksalmon: [233, 150, 122, null],\n  darkseagreen: [143, 188, 143, null],\n  darkslateblue: [72, 61, 139, null],\n  darkslategray: [47, 79, 79, null],\n  darkslategrey: [47, 79, 79, null],\n  darkturquoise: [0, 206, 209, null],\n  darkviolet: [148, 0, 211, null],\n  deeppink: [255, 20, 147, null],\n  deepskyblue: [0, 191, 255, null],\n  dimgray: [105, 105, 105, null],\n  dimgrey: [105, 105, 105, null],\n  dodgerblue: [30, 144, 255, null],\n  firebrick: [178, 34, 34, null],\n  floralwhite: [255, 250, 240, null],\n  forestgreen: [34, 139, 34, null],\n  fuchsia: [255, 0, 255, null],\n  gainsboro: [220, 220, 220, null],\n  ghostwhite: [248, 248, 255, null],\n  gold: [255, 215, 0, null],\n  goldenrod: [218, 165, 32, null],\n  gray: [128, 128, 128, null],\n  green: [0, 128, 0, null],\n  greenyellow: [173, 255, 47, null],\n  grey: [128, 128, 128, null],\n  honeydew: [240, 255, 240, null],\n  hotpink: [255, 105, 180, null],\n  indianred: [205, 92, 92, null],\n  indigo: [75, 0, 130, null],\n  ivory: [255, 255, 240, null],\n  khaki: [240, 230, 140, null],\n  lavender: [230, 230, 250, null],\n  lavenderblush: [255, 240, 245, null],\n  lawngreen: [124, 252, 0, null],\n  lemonchiffon: [255, 250, 205, null],\n  lightblue: [173, 216, 230, null],\n  lightcoral: [240, 128, 128, null],\n  lightcyan: [224, 255, 255, null],\n  lightgoldenrodyellow: [250, 250, 210, null],\n  lightgray: [211, 211, 211, null],\n  lightgreen: [144, 238, 144, null],\n  lightgrey: [211, 211, 211, null],\n  lightpink: [255, 182, 193, null],\n  lightsalmon: [255, 160, 122, null],\n  lightseagreen: [32, 178, 170, null],\n  lightskyblue: [135, 206, 250, null],\n  lightslategray: [119, 136, 153, null],\n  lightslategrey: [119, 136, 153, null],\n  lightsteelblue: [176, 196, 222, null],\n  lightyellow: [255, 255, 224, null],\n  lime: [0, 255, 0, null],\n  limegreen: [50, 205, 50, null],\n  linen: [250, 240, 230, null],\n  magenta: [255, 0, 255, null],\n  maroon: [128, 0, 0, null],\n  mediumaquamarine: [102, 205, 170, null],\n  mediumblue: [0, 0, 205, null],\n  mediumorchid: [186, 85, 211, null],\n  mediumpurple: [147, 112, 219, null],\n  mediumseagreen: [60, 179, 113, null],\n  mediumslateblue: [123, 104, 238, null],\n  mediumspringgreen: [0, 250, 154, null],\n  mediumturquoise: [72, 209, 204, null],\n  mediumvioletred: [199, 21, 133, null],\n  midnightblue: [25, 25, 112, null],\n  mintcream: [245, 255, 250, null],\n  mistyrose: [255, 228, 225, null],\n  moccasin: [255, 228, 181, null],\n  navajowhite: [255, 222, 173, null],\n  navy: [0, 0, 128, null],\n  oldlace: [253, 245, 230, null],\n  olive: [128, 128, 0, null],\n  olivedrab: [107, 142, 35, null],\n  orange: [255, 165, 0, null],\n  orangered: [255, 69, 0, null],\n  orchid: [218, 112, 214, null],\n  palegoldenrod: [238, 232, 170, null],\n  palegreen: [152, 251, 152, null],\n  paleturquoise: [175, 238, 238, null],\n  palevioletred: [219, 112, 147, null],\n  papayawhip: [255, 239, 213, null],\n  peachpuff: [255, 218, 185, null],\n  peru: [205, 133, 63, null],\n  pink: [255, 192, 203, null],\n  plum: [221, 160, 221, null],\n  powderblue: [176, 224, 230, null],\n  purple: [128, 0, 128, null],\n  rebeccapurple: [102, 51, 153, null],\n  red: [255, 0, 0, null],\n  rosybrown: [188, 143, 143, null],\n  royalblue: [65, 105, 225, null],\n  saddlebrown: [139, 69, 19, null],\n  salmon: [250, 128, 114, null],\n  sandybrown: [244, 164, 96, null],\n  seagreen: [46, 139, 87, null],\n  seashell: [255, 245, 238, null],\n  sienna: [160, 82, 45, null],\n  silver: [192, 192, 192, null],\n  skyblue: [135, 206, 235, null],\n  slateblue: [106, 90, 205, null],\n  slategray: [112, 128, 144, null],\n  slategrey: [112, 128, 144, null],\n  snow: [255, 250, 250, null],\n  springgreen: [0, 255, 127, null],\n  steelblue: [70, 130, 180, null],\n  tan: [210, 180, 140, null],\n  teal: [0, 128, 128, null],\n  thistle: [216, 191, 216, null],\n  tomato: [255, 99, 71, null],\n  turquoise: [64, 224, 208, null],\n  violet: [238, 130, 238, null],\n  wheat: [245, 222, 179, null],\n  white: [255, 255, 255, null],\n  whitesmoke: [245, 245, 245, null],\n  yellow: [255, 255, 0, null],\n  yellowgreen: [154, 205, 50, null]\n};\nvar TRANSPARENT = new Color([0, 0, 0, 0]);\n\n//# sourceURL=webpack://html2canvas/./src/Color.js?");
	
	/***/ }),
	
	/***/ "./src/Feature.js":
	/*!************************!*\
	  !*** ./src/Feature.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ \"./src/renderer/ForeignObjectRenderer.js\");\n\n\n\n\nvar testRangeBounds = function testRangeBounds(document) {\n  var TEST_HEIGHT = 123;\n\n  if (document.createRange) {\n    var range = document.createRange();\n\n    if (range.getBoundingClientRect) {\n      var testElement = document.createElement('boundtest');\n      testElement.style.height = \"\".concat(TEST_HEIGHT, \"px\");\n      testElement.style.display = 'block';\n      document.body.appendChild(testElement);\n      range.selectNode(testElement);\n      var rangeBounds = range.getBoundingClientRect();\n      var rangeHeight = Math.round(rangeBounds.height);\n      document.body.removeChild(testElement);\n\n      if (rangeHeight === TEST_HEIGHT) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n};\n\nvar testCORS = function testCORS() {\n  return typeof new Image().crossOrigin !== 'undefined';\n};\n\nvar testResponseType = function testResponseType() {\n  return typeof new XMLHttpRequest().responseType === 'string';\n};\n\nvar testSVG = function testSVG(document) {\n  var img = new Image();\n  var canvas = document.createElement('canvas');\n  var ctx = canvas.getContext('2d');\n  img.src = \"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>\";\n\n  try {\n    ctx.drawImage(img, 0, 0);\n    canvas.toDataURL();\n  } catch (e) {\n    return false;\n  }\n\n  return true;\n};\n\nvar isGreenPixel = function isGreenPixel(data) {\n  return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;\n};\n\nvar testForeignObject = function testForeignObject(document) {\n  var canvas = document.createElement('canvas');\n  var size = 100;\n  canvas.width = size;\n  canvas.height = size;\n  var ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'rgb(0, 255, 0)';\n  ctx.fillRect(0, 0, size, size);\n  var img = new Image();\n  var greenImageSrc = canvas.toDataURL();\n  img.src = greenImageSrc;\n  var svg = Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"createForeignObjectSVG\"])(size, size, 0, 0, img);\n  ctx.fillStyle = 'red';\n  ctx.fillRect(0, 0, size, size);\n  return Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"loadSerializedSVG\"])(svg).then(function (img) {\n    ctx.drawImage(img, 0, 0);\n    var data = ctx.getImageData(0, 0, size, size).data;\n    ctx.fillStyle = 'red';\n    ctx.fillRect(0, 0, size, size);\n    var node = document.createElement('div');\n    node.style.backgroundImage = \"url(\".concat(greenImageSrc, \")\");\n    node.style.height = \"\".concat(size, \"px\"); // Firefox 55 does not render inline <img /> tags\n\n    return isGreenPixel(data) ? Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"loadSerializedSVG\"])(Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"createForeignObjectSVG\"])(size, size, 0, 0, node)) : Promise.reject(false);\n  }).then(function (img) {\n    ctx.drawImage(img, 0, 0); // Edge does not render background-images\n\n    return isGreenPixel(ctx.getImageData(0, 0, size, size).data);\n  }).catch(function (e) {\n    return false;\n  });\n};\n\nvar FEATURES = {\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_RANGE_BOUNDS() {\n    'use strict';\n\n    var value = testRangeBounds(document);\n    Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_SVG_DRAWING() {\n    'use strict';\n\n    var value = testSVG(document);\n    Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_FOREIGNOBJECT_DRAWING() {\n    'use strict';\n\n    var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);\n    Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_CORS_IMAGES() {\n    'use strict';\n\n    var value = testCORS();\n    Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_RESPONSE_TYPE() {\n    'use strict';\n\n    var value = testResponseType();\n    Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_CORS_XHR() {\n    'use strict';\n\n    var value = 'withCredentials' in new XMLHttpRequest();\n    Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', {\n      value: value\n    });\n    return value;\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FEATURES);\n\n//# sourceURL=webpack://html2canvas/./src/Feature.js?");
	
	/***/ }),
	
	/***/ "./src/Font.js":
	/*!*********************!*\
	  !*** ./src/Font.js ***!
	  \*********************/
	/*! exports provided: FontMetrics */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontMetrics\", function() { return FontMetrics; });\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SAMPLE_TEXT = 'Hidden Text';\n\nvar FontMetrics =\n/*#__PURE__*/\nfunction () {\n  function FontMetrics(document) {\n    _classCallCheck(this, FontMetrics);\n\n    this._data = {};\n    this._document = document;\n  }\n\n  _createClass(FontMetrics, [{\n    key: \"_parseMetrics\",\n    value: function _parseMetrics(font) {\n      var container = this._document.createElement('div');\n\n      var img = this._document.createElement('img');\n\n      var span = this._document.createElement('span');\n\n      var body = this._document.body;\n\n      if (!body) {\n        throw new Error( true ? 'No document found for font metrics' : undefined);\n      }\n\n      container.style.visibility = 'hidden';\n      container.style.fontFamily = font.fontFamily;\n      container.style.fontSize = font.fontSize;\n      container.style.margin = '0';\n      container.style.padding = '0';\n      body.appendChild(container);\n      img.src = _Util__WEBPACK_IMPORTED_MODULE_0__[\"SMALL_IMAGE\"];\n      img.width = 1;\n      img.height = 1;\n      img.style.margin = '0';\n      img.style.padding = '0';\n      img.style.verticalAlign = 'baseline';\n      span.style.fontFamily = font.fontFamily;\n      span.style.fontSize = font.fontSize;\n      span.style.margin = '0';\n      span.style.padding = '0';\n      span.appendChild(this._document.createTextNode(SAMPLE_TEXT));\n      container.appendChild(span);\n      container.appendChild(img);\n      var baseline = img.offsetTop - span.offsetTop + 2;\n      container.removeChild(span);\n      container.appendChild(this._document.createTextNode(SAMPLE_TEXT));\n      container.style.lineHeight = 'normal';\n      img.style.verticalAlign = 'super';\n      var middle = img.offsetTop - container.offsetTop + 2;\n      body.removeChild(container);\n      return {\n        baseline: baseline,\n        middle: middle\n      };\n    }\n  }, {\n    key: \"getMetrics\",\n    value: function getMetrics(font) {\n      var key = \"\".concat(font.fontFamily, \" \").concat(font.fontSize);\n\n      if (this._data[key] === undefined) {\n        this._data[key] = this._parseMetrics(font);\n      }\n\n      return this._data[key];\n    }\n  }]);\n\n  return FontMetrics;\n}();\n\n//# sourceURL=webpack://html2canvas/./src/Font.js?");
	
	/***/ }),
	
	/***/ "./src/Gradient.js":
	/*!*************************!*\
	  !*** ./src/Gradient.js ***!
	  \*************************/
	/*! exports provided: GRADIENT_TYPE, RADIAL_GRADIENT_SHAPE, LinearGradient, RadialGradient, parseGradient, transformWebkitRadialGradientArgs */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRADIENT_TYPE\", function() { return GRADIENT_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RADIAL_GRADIENT_SHAPE\", function() { return RADIAL_GRADIENT_SHAPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinearGradient\", function() { return LinearGradient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RadialGradient\", function() { return RadialGradient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseGradient\", function() { return parseGradient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformWebkitRadialGradientArgs\", function() { return transformWebkitRadialGradientArgs; });\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeContainer */ \"./src/NodeContainer.js\");\n/* harmony import */ var _Angle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Angle */ \"./src/Angle.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color */ \"./src/Color.js\");\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Length */ \"./src/Length.js\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\nvar SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;\nvar PERCENTAGE_ANGLES = /^([+-]?\\d*\\.?\\d+)% ([+-]?\\d*\\.?\\d+)%$/i;\nvar ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;\nvar FROM_TO_COLORSTOP = /^(from|to|color-stop)\\((?:([\\d.]+)(%)?,\\s*)?(.+?)\\)$/i;\nvar RADIAL_SHAPE_DEFINITION = /^\\s*(circle|ellipse)?\\s*((?:([\\d.]+)(px|r?em|%)\\s*(?:([\\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\\s*(?:at\\s*(?:(left|center|right)|([\\d.]+)(px|r?em|%))\\s+(?:(top|center|bottom)|([\\d.]+)(px|r?em|%)))?(?:\\s|$)/i;\nvar GRADIENT_TYPE = {\n  LINEAR_GRADIENT: 0,\n  RADIAL_GRADIENT: 1\n};\nvar RADIAL_GRADIENT_SHAPE = {\n  CIRCLE: 0,\n  ELLIPSE: 1\n};\nvar LENGTH_FOR_POSITION = {\n  left: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('0%'),\n  top: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('0%'),\n  center: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('50%'),\n  right: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('100%'),\n  bottom: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('100%')\n};\nvar LinearGradient = function LinearGradient(colorStops, direction) {\n  _classCallCheck(this, LinearGradient);\n\n  this.type = GRADIENT_TYPE.LINEAR_GRADIENT;\n  this.colorStops = colorStops;\n  this.direction = direction;\n};\nvar RadialGradient = function RadialGradient(colorStops, shape, center, radius) {\n  _classCallCheck(this, RadialGradient);\n\n  this.type = GRADIENT_TYPE.RADIAL_GRADIENT;\n  this.colorStops = colorStops;\n  this.shape = shape;\n  this.center = center;\n  this.radius = radius;\n};\nvar parseGradient = function parseGradient(container, _ref, bounds) {\n  var args = _ref.args,\n      method = _ref.method,\n      prefix = _ref.prefix;\n\n  if (method === 'linear-gradient') {\n    return parseLinearGradient(args, bounds, !!prefix);\n  } else if (method === 'gradient' && args[0] === 'linear') {\n    // TODO handle correct angle\n    return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);\n  } else if (method === 'radial-gradient') {\n    return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);\n  } else if (method === 'gradient' && args[0] === 'radial') {\n    return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);\n  }\n};\n\nvar parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {\n  var colorStops = [];\n\n  for (var i = firstColorStopIndex; i < args.length; i++) {\n    var value = args[i];\n    var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);\n    var lastSpaceIndex = value.lastIndexOf(' ');\n    var color = new _Color__WEBPACK_IMPORTED_MODULE_2__[\"default\"](HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);\n    var stop = HAS_LENGTH ? new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"](value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('0%') : i === args.length - 1 ? new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('100%') : null;\n    colorStops.push({\n      color: color,\n      stop: stop\n    });\n  }\n\n  var absoluteValuedColorStops = colorStops.map(function (_ref2) {\n    var color = _ref2.color,\n        stop = _ref2.stop;\n    var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;\n    return {\n      color: color,\n      // $FlowFixMe\n      stop: absoluteStop\n    };\n  });\n  var previousColorStop = absoluteValuedColorStops[0].stop;\n\n  for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {\n    if (previousColorStop !== null) {\n      var _stop = absoluteValuedColorStops[_i].stop;\n\n      if (_stop === null) {\n        var n = _i;\n\n        while (absoluteValuedColorStops[n].stop === null) {\n          n++;\n        }\n\n        var steps = n - _i + 1;\n        var nextColorStep = absoluteValuedColorStops[n].stop;\n        var stepSize = (nextColorStep - previousColorStop) / steps;\n\n        for (; _i < n; _i++) {\n          previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;\n        }\n      } else {\n        previousColorStop = _stop;\n      }\n    }\n  }\n\n  return absoluteValuedColorStops;\n};\n\nvar parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {\n  var angle = Object(_Angle__WEBPACK_IMPORTED_MODULE_1__[\"parseAngle\"])(args[0]);\n  var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);\n  var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);\n  var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection( // if there is a prefix, the 0° angle points due East (instead of North per W3C)\n  hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);\n  var firstColorStopIndex = HAS_DIRECTION ? 1 : 0; // TODO: Fix some inaccuracy with color stops with px values\n\n  var lineLength = Math.min(Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);\n  return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);\n};\n\nvar parseRadialGradient = function parseRadialGradient(container, args, bounds) {\n  var m = args[0].match(RADIAL_SHAPE_DEFINITION);\n  var shape = m && (m[1] === 'circle' || // explicit shape specification\n  m[3] !== undefined && m[5] === undefined) // only one radius coordinate\n  ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;\n  var radius = {};\n  var center = {};\n\n  if (m) {\n    // Radius\n    if (m[3] !== undefined) {\n      radius.x = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[3], m[4]).getAbsoluteValue(bounds.width);\n    }\n\n    if (m[5] !== undefined) {\n      radius.y = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[5], m[6]).getAbsoluteValue(bounds.height);\n    } // Position\n\n\n    if (m[7]) {\n      center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];\n    } else if (m[8] !== undefined) {\n      center.x = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[8], m[9]);\n    }\n\n    if (m[10]) {\n      center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];\n    } else if (m[11] !== undefined) {\n      center.y = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[11], m[12]);\n    }\n  }\n\n  var gradientCenter = {\n    x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),\n    y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)\n  };\n  var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);\n  return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);\n};\n\nvar calculateGradientDirection = function calculateGradientDirection(radian, bounds) {\n  var width = bounds.width;\n  var height = bounds.height;\n  var HALF_WIDTH = width * 0.5;\n  var HALF_HEIGHT = height * 0.5;\n  var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));\n  var HALF_LINE_LENGTH = lineLength / 2;\n  var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;\n  var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;\n  var x1 = width - x0;\n  var y1 = height - y0;\n  return {\n    x0: x0,\n    x1: x1,\n    y0: y0,\n    y1: y1\n  };\n};\n\nvar parseTopRight = function parseTopRight(bounds) {\n  return Math.acos(bounds.width / 2 / (Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(bounds.width, bounds.height) / 2));\n};\n\nvar parseSideOrCorner = function parseSideOrCorner(side, bounds) {\n  switch (side) {\n    case 'bottom':\n    case 'to top':\n      return calculateGradientDirection(0, bounds);\n\n    case 'left':\n    case 'to right':\n      return calculateGradientDirection(Math.PI / 2, bounds);\n\n    case 'right':\n    case 'to left':\n      return calculateGradientDirection(3 * Math.PI / 2, bounds);\n\n    case 'top right':\n    case 'right top':\n    case 'to bottom left':\n    case 'to left bottom':\n      return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);\n\n    case 'top left':\n    case 'left top':\n    case 'to bottom right':\n    case 'to right bottom':\n      return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);\n\n    case 'bottom left':\n    case 'left bottom':\n    case 'to top right':\n    case 'to right top':\n      return calculateGradientDirection(parseTopRight(bounds), bounds);\n\n    case 'bottom right':\n    case 'right bottom':\n    case 'to top left':\n    case 'to left top':\n      return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);\n\n    case 'top':\n    case 'to bottom':\n    default:\n      return calculateGradientDirection(Math.PI, bounds);\n  }\n};\n\nvar parsePercentageAngle = function parsePercentageAngle(angle, bounds) {\n  var _angle$split$map = angle.split(' ').map(parseFloat),\n      _angle$split$map2 = _slicedToArray(_angle$split$map, 2),\n      left = _angle$split$map2[0],\n      top = _angle$split$map2[1];\n\n  var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);\n  return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);\n};\n\nvar findCorner = function findCorner(bounds, x, y, closest) {\n  var corners = [{\n    x: 0,\n    y: 0\n  }, {\n    x: 0,\n    y: bounds.height\n  }, {\n    x: bounds.width,\n    y: 0\n  }, {\n    x: bounds.width,\n    y: bounds.height\n  }]; // $FlowFixMe\n\n  return corners.reduce(function (stat, corner) {\n    var d = Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - corner.x, y - corner.y);\n\n    if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {\n      return {\n        optimumCorner: corner,\n        optimumDistance: d\n      };\n    }\n\n    return stat;\n  }, {\n    optimumDistance: closest ? Infinity : -Infinity,\n    optimumCorner: null\n  }).optimumCorner;\n};\n\nvar calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {\n  var x = center.x;\n  var y = center.y;\n  var rx = 0;\n  var ry = 0;\n\n  switch (extent) {\n    case 'closest-side':\n      // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.\n      // If the shape is an ellipse, it exactly meets the closest side in each dimension.\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));\n        ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));\n      }\n\n      break;\n\n    case 'closest-corner':\n      // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.\n      // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.min(Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y - bounds.height), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        // Compute the ratio ry/rx (which is to be the same as for \"closest-side\")\n        var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));\n        var corner = findCorner(bounds, x, y, true);\n        rx = Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(corner.x - x, (corner.y - y) / c);\n        ry = c * rx;\n      }\n\n      break;\n\n    case 'farthest-side':\n      // Same as closest-side, except the ending shape is sized based on the farthest side(s)\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));\n        ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));\n      }\n\n      break;\n\n    case 'farthest-corner':\n      // Same as closest-corner, except the ending shape is sized based on the farthest corner.\n      // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.max(Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y - bounds.height), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        // Compute the ratio ry/rx (which is to be the same as for \"farthest-side\")\n        var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));\n\n        var _corner = findCorner(bounds, x, y, false);\n\n        rx = Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(_corner.x - x, (_corner.y - y) / _c);\n        ry = _c * rx;\n      }\n\n      break;\n\n    default:\n      // pixel or percentage values\n      rx = radius.x || 0;\n      ry = radius.y !== undefined ? radius.y : rx;\n      break;\n  }\n\n  return {\n    x: rx,\n    y: ry\n  };\n};\n\nvar transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {\n  var shape = '';\n  var radius = '';\n  var extent = '';\n  var position = '';\n  var idx = 0;\n  var POSITION = /^(left|center|right|\\d+(?:px|r?em|%)?)(?:\\s+(top|center|bottom|\\d+(?:px|r?em|%)?))?$/i;\n  var SHAPE_AND_EXTENT = /^(circle|ellipse)?\\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;\n  var RADIUS = /^\\d+(px|r?em|%)?(?:\\s+\\d+(px|r?em|%)?)?$/i;\n  var matchStartPosition = args[idx].match(POSITION);\n\n  if (matchStartPosition) {\n    idx++;\n  }\n\n  var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);\n\n  if (matchShapeExtent) {\n    shape = matchShapeExtent[1] || '';\n    extent = matchShapeExtent[2] || '';\n\n    if (extent === 'contain') {\n      extent = 'closest-side';\n    } else if (extent === 'cover') {\n      extent = 'farthest-corner';\n    }\n\n    idx++;\n  }\n\n  var matchStartRadius = args[idx].match(RADIUS);\n\n  if (matchStartRadius) {\n    idx++;\n  }\n\n  var matchEndPosition = args[idx].match(POSITION);\n\n  if (matchEndPosition) {\n    idx++;\n  }\n\n  var matchEndRadius = args[idx].match(RADIUS);\n\n  if (matchEndRadius) {\n    idx++;\n  }\n\n  var matchPosition = matchEndPosition || matchStartPosition;\n\n  if (matchPosition && matchPosition[1]) {\n    position = matchPosition[1] + (/^\\d+$/.test(matchPosition[1]) ? 'px' : '');\n\n    if (matchPosition[2]) {\n      position += ' ' + matchPosition[2] + (/^\\d+$/.test(matchPosition[2]) ? 'px' : '');\n    }\n  }\n\n  var matchRadius = matchEndRadius || matchStartRadius;\n\n  if (matchRadius) {\n    radius = matchRadius[0];\n\n    if (!matchRadius[1]) {\n      radius += 'px';\n    }\n  }\n\n  if (position && !shape && !radius && !extent) {\n    radius = position;\n    position = '';\n  }\n\n  if (position) {\n    position = \"at \".concat(position);\n  }\n\n  return [[shape, extent, radius, position].filter(function (s) {\n    return !!s;\n  }).join(' ')].concat(args.slice(idx));\n};\n\nvar transformObsoleteColorStops = function transformObsoleteColorStops(args) {\n  return args.map(function (color) {\n    return color.match(FROM_TO_COLORSTOP);\n  }) // $FlowFixMe\n  .map(function (v, index) {\n    if (!v) {\n      return args[index];\n    }\n\n    switch (v[1]) {\n      case 'from':\n        return \"\".concat(v[4], \" 0%\");\n\n      case 'to':\n        return \"\".concat(v[4], \" 100%\");\n\n      case 'color-stop':\n        if (v[3] === '%') {\n          return \"\".concat(v[4], \" \").concat(v[2]);\n        }\n\n        return \"\".concat(v[4], \" \").concat(parseFloat(v[2]) * 100, \"%\");\n    }\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/Gradient.js?");
	
	/***/ }),
	
	/***/ "./src/Input.js":
	/*!**********************!*\
	  !*** ./src/Input.js ***!
	  \**********************/
	/*! exports provided: INPUT_COLOR, INPUT_BORDERS, INPUT_BACKGROUND, getInputBorderRadius, inlineInputElement, inlineTextAreaElement, inlineSelectElement, reformatInputBounds */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INPUT_COLOR\", function() { return INPUT_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INPUT_BORDERS\", function() { return INPUT_BORDERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INPUT_BACKGROUND\", function() { return INPUT_BACKGROUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInputBorderRadius\", function() { return getInputBorderRadius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inlineInputElement\", function() { return inlineInputElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inlineTextAreaElement\", function() { return inlineTextAreaElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inlineSelectElement\", function() { return inlineSelectElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reformatInputBounds\", function() { return reformatInputBounds; });\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextContainer */ \"./src/TextContainer.js\");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/background */ \"./src/parsing/background.js\");\n/* harmony import */ var _parsing_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing/border */ \"./src/parsing/border.js\");\n/* harmony import */ var _drawing_Circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawing/Circle */ \"./src/drawing/Circle.js\");\n/* harmony import */ var _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawing/Vector */ \"./src/drawing/Vector.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color */ \"./src/Color.js\");\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Length */ \"./src/Length.js\");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _TextBounds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextBounds */ \"./src/TextBounds.js\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar INPUT_COLOR = new _Color__WEBPACK_IMPORTED_MODULE_5__[\"default\"]([42, 42, 42]);\nvar INPUT_BORDER_COLOR = new _Color__WEBPACK_IMPORTED_MODULE_5__[\"default\"]([165, 165, 165]);\nvar INPUT_BACKGROUND_COLOR = new _Color__WEBPACK_IMPORTED_MODULE_5__[\"default\"]([222, 222, 222]);\nvar INPUT_BORDER = {\n  borderWidth: 1,\n  borderColor: INPUT_BORDER_COLOR,\n  borderStyle: _parsing_border__WEBPACK_IMPORTED_MODULE_2__[\"BORDER_STYLE\"].SOLID\n};\nvar INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];\nvar INPUT_BACKGROUND = {\n  backgroundColor: INPUT_BACKGROUND_COLOR,\n  backgroundImage: [],\n  backgroundClip: _parsing_background__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND_CLIP\"].PADDING_BOX,\n  backgroundOrigin: _parsing_background__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND_ORIGIN\"].PADDING_BOX\n};\nvar RADIO_BORDER_RADIUS = new _Length__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('50%');\nvar RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];\nvar INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];\nvar CHECKBOX_BORDER_RADIUS = new _Length__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('3px');\nvar CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];\nvar INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];\nvar getInputBorderRadius = function getInputBorderRadius(node) {\n  return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;\n};\nvar inlineInputElement = function inlineInputElement(node, container) {\n  if (node.type === 'radio' || node.type === 'checkbox') {\n    if (node.checked) {\n      var size = Math.min(container.bounds.width, container.bounds.height);\n      container.childNodes.push(node.type === 'checkbox' ? [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _drawing_Circle__WEBPACK_IMPORTED_MODULE_3__[\"default\"](container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));\n    }\n  } else {\n    inlineFormElement(getInputValue(node), node, container, false);\n  }\n};\nvar inlineTextAreaElement = function inlineTextAreaElement(node, container) {\n  inlineFormElement(node.value, node, container, true);\n};\nvar inlineSelectElement = function inlineSelectElement(node, container) {\n  var option = node.options[node.selectedIndex || 0];\n  inlineFormElement(option ? option.text || '' : '', node, container, false);\n};\nvar reformatInputBounds = function reformatInputBounds(bounds) {\n  if (bounds.width > bounds.height) {\n    bounds.left += (bounds.width - bounds.height) / 2;\n    bounds.width = bounds.height;\n  } else if (bounds.width < bounds.height) {\n    bounds.top += (bounds.height - bounds.width) / 2;\n    bounds.height = bounds.width;\n  }\n\n  return bounds;\n};\n\nvar inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {\n  var body = node.ownerDocument.body;\n\n  if (value.length > 0 && body) {\n    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');\n    Object(_Util__WEBPACK_IMPORTED_MODULE_9__[\"copyCSSStyles\"])(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);\n    wrapper.style.position = 'absolute';\n    wrapper.style.left = \"\".concat(container.bounds.left, \"px\");\n    wrapper.style.top = \"\".concat(container.bounds.top, \"px\");\n\n    if (!allowLinebreak) {\n      wrapper.style.whiteSpace = 'nowrap';\n    }\n\n    var text = node.ownerDocument.createTextNode(value);\n    wrapper.appendChild(text);\n    body.appendChild(wrapper);\n    container.childNodes.push(_TextContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fromTextNode(text, container));\n    body.removeChild(wrapper);\n  }\n};\n\nvar getInputValue = function getInputValue(node) {\n  var value = node.type === 'password' ? new Array(node.value.length + 1).join(\"\\u2022\") : node.value;\n  return value.length === 0 ? node.placeholder || '' : value;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Input.js?");
	
	/***/ }),
	
	/***/ "./src/Length.js":
	/*!***********************!*\
	  !*** ./src/Length.js ***!
	  \***********************/
	/*! exports provided: LENGTH_TYPE, default, calculateLengthFromValueWithUnit */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LENGTH_TYPE\", function() { return LENGTH_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Length; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateLengthFromValueWithUnit\", function() { return calculateLengthFromValueWithUnit; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LENGTH_WITH_UNIT = /([\\d.]+)(px|r?em|%)/i;\nvar LENGTH_TYPE = {\n  PX: 0,\n  PERCENTAGE: 1\n};\n\nvar Length =\n/*#__PURE__*/\nfunction () {\n  function Length(value) {\n    _classCallCheck(this, Length);\n\n    this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;\n    var parsedValue = parseFloat(value);\n\n    if ( true && isNaN(parsedValue)) {\n      console.error(\"Invalid value given for Length: \\\"\".concat(value, \"\\\"\"));\n    }\n\n    this.value = isNaN(parsedValue) ? 0 : parsedValue;\n  }\n\n  _createClass(Length, [{\n    key: \"isPercentage\",\n    value: function isPercentage() {\n      return this.type === LENGTH_TYPE.PERCENTAGE;\n    }\n  }, {\n    key: \"getAbsoluteValue\",\n    value: function getAbsoluteValue(parentLength) {\n      return this.isPercentage() ? parentLength * (this.value / 100) : this.value;\n    }\n  }], [{\n    key: \"create\",\n    value: function create(v) {\n      return new Length(v);\n    }\n  }]);\n\n  return Length;\n}();\n\n\n\nvar getRootFontSize = function getRootFontSize(container) {\n  var parent = container.parent;\n  return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);\n};\n\nvar calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {\n  switch (unit) {\n    case 'px':\n    case '%':\n      return new Length(value + unit);\n\n    case 'em':\n    case 'rem':\n      var length = new Length(value);\n      length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);\n      return length;\n\n    default:\n      // TODO: handle correctly if unknown unit is used\n      return new Length('0');\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/Length.js?");
	
	/***/ }),
	
	/***/ "./src/ListItem.js":
	/*!*************************!*\
	  !*** ./src/ListItem.js ***!
	  \*************************/
	/*! exports provided: getListOwner, inlineListItemElement, createCounterText */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getListOwner\", function() { return getListOwner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inlineListItemElement\", function() { return inlineListItemElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCounterText\", function() { return createCounterText; });\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeContainer */ \"./src/NodeContainer.js\");\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextContainer */ \"./src/TextContainer.js\");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsing/listStyle */ \"./src/parsing/listStyle.js\");\n/* harmony import */ var _Unicode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Unicode */ \"./src/Unicode.js\");\n\n\n\n\n\n\n // Margin between the enumeration and the list item content\n\nvar MARGIN_RIGHT = 7;\nvar ancestorTypes = ['OL', 'UL', 'MENU'];\nvar getListOwner = function getListOwner(container) {\n  var parent = container.parent;\n\n  if (!parent) {\n    return null;\n  }\n\n  do {\n    var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;\n\n    if (isAncestor) {\n      return parent;\n    }\n\n    parent = parent.parent;\n  } while (parent);\n\n  return container.parent;\n};\nvar inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {\n  var listStyle = container.style.listStyle;\n\n  if (!listStyle) {\n    return;\n  }\n\n  var style = node.ownerDocument.defaultView.getComputedStyle(node, null);\n  var wrapper = node.ownerDocument.createElement('html2canvaswrapper');\n  Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"copyCSSStyles\"])(style, wrapper);\n  wrapper.style.position = 'absolute';\n  wrapper.style.bottom = 'auto';\n  wrapper.style.display = 'block';\n  wrapper.style.letterSpacing = 'normal';\n\n  switch (listStyle.listStylePosition) {\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_POSITION\"].OUTSIDE:\n      wrapper.style.left = 'auto';\n      wrapper.style.right = \"\".concat(node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT, \"px\");\n      wrapper.style.textAlign = 'right';\n      break;\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_POSITION\"].INSIDE:\n      wrapper.style.left = \"\".concat(container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width), \"px\");\n      wrapper.style.right = 'auto';\n      wrapper.style.textAlign = 'left';\n      break;\n  }\n\n  var text;\n  var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);\n  var styleImage = listStyle.listStyleImage;\n\n  if (styleImage) {\n    if (styleImage.method === 'url') {\n      var image = node.ownerDocument.createElement('img');\n      image.src = styleImage.args[0];\n      wrapper.style.top = \"\".concat(container.bounds.top - MARGIN_TOP, \"px\");\n      wrapper.style.width = 'auto';\n      wrapper.style.height = 'auto';\n      wrapper.appendChild(image);\n    } else {\n      var size = parseFloat(container.style.font.fontSize) * 0.5;\n      wrapper.style.top = \"\".concat(container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size, \"px\");\n      wrapper.style.width = \"\".concat(size, \"px\");\n      wrapper.style.height = \"\".concat(size, \"px\");\n      wrapper.style.backgroundImage = style.listStyleImage;\n    }\n  } else if (typeof container.listIndex === 'number') {\n    text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));\n    wrapper.appendChild(text);\n    wrapper.style.top = \"\".concat(container.bounds.top - MARGIN_TOP, \"px\");\n  } // $FlowFixMe\n\n\n  var body = node.ownerDocument.body;\n  body.appendChild(wrapper);\n\n  if (text) {\n    container.childNodes.push(_TextContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTextNode(text, container));\n    body.removeChild(wrapper);\n  } else {\n    // $FlowFixMe\n    container.childNodes.push(new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](wrapper, container, resourceLoader, 0));\n  }\n};\nvar ROMAN_UPPER = {\n  integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],\n  values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']\n};\nvar ARMENIAN = {\n  integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],\n  values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']\n};\nvar HEBREW = {\n  integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],\n  values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']\n};\nvar GEORGIAN = {\n  integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],\n  values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']\n};\n\nvar createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {\n  if (value < min || value > max) {\n    return createCounterText(value, fallback, suffix.length > 0);\n  }\n\n  return symbols.integers.reduce(function (string, integer, index) {\n    while (value >= integer) {\n      value -= integer;\n      string += symbols.values[index];\n    }\n\n    return string;\n  }, '') + suffix;\n};\n\nvar createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {\n  var string = '';\n\n  do {\n    if (!isNumeric) {\n      value--;\n    }\n\n    string = resolver(value) + string;\n    value /= codePointRangeLength;\n  } while (value * codePointRangeLength >= codePointRangeLength);\n\n  return string;\n};\n\nvar createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {\n  var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;\n  return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {\n    return Object(_Unicode__WEBPACK_IMPORTED_MODULE_4__[\"fromCodePoint\"])(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);\n  }) + suffix);\n};\n\nvar createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {\n  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';\n  var codePointRangeLength = symbols.length;\n  return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {\n    return symbols[Math.floor(codePoint % codePointRangeLength)];\n  }) + suffix;\n};\n\nvar CJK_ZEROS = 1 << 0;\nvar CJK_TEN_COEFFICIENTS = 1 << 1;\nvar CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;\nvar CJK_HUNDRED_COEFFICIENTS = 1 << 3;\n\nvar createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {\n  if (value < -9999 || value > 9999) {\n    return createCounterText(value, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_DECIMAL, suffix.length > 0);\n  }\n\n  var tmp = Math.abs(value);\n  var string = suffix;\n\n  if (tmp === 0) {\n    return numbers[0] + string;\n  }\n\n  for (var digit = 0; tmp > 0 && digit <= 4; digit++) {\n    var coefficient = tmp % 10;\n\n    if (coefficient === 0 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_ZEROS) && string !== '') {\n      string = numbers[coefficient] + string;\n    } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_HUNDRED_COEFFICIENTS)) {\n      string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;\n    } else if (coefficient === 1 && digit > 0) {\n      string = multipliers[digit - 1] + string;\n    }\n\n    tmp = Math.floor(tmp / 10);\n  }\n\n  return (value < 0 ? negativeSign : '') + string;\n};\n\nvar CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';\nvar CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';\nvar JAPANESE_NEGATIVE = 'マイナス';\nvar KOREAN_NEGATIVE = '마이너스';\nvar createCounterText = function createCounterText(value, type, appendSuffix) {\n  var defaultSuffix = appendSuffix ? '. ' : '';\n  var cjkSuffix = appendSuffix ? '、' : '';\n  var koreanSuffix = appendSuffix ? ', ' : '';\n\n  switch (type) {\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DISC:\n      return '•';\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CIRCLE:\n      return '◦';\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].SQUARE:\n      return '◾';\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL_LEADING_ZERO:\n      var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);\n      return string.length < 4 ? \"0\".concat(string) : string;\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_DECIMAL:\n      return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_ROMAN:\n      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix).toLowerCase();\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].UPPER_ROMAN:\n      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_GREEK:\n      return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_ALPHA:\n      return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].UPPER_ALPHA:\n      return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].ARABIC_INDIC:\n      return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].ARMENIAN:\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].UPPER_ARMENIAN:\n      return createAdditiveCounter(value, 1, 9999, ARMENIAN, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_ARMENIAN:\n      return createAdditiveCounter(value, 1, 9999, ARMENIAN, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix).toLowerCase();\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].BENGALI:\n      return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CAMBODIAN:\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KHMER:\n      return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_EARTHLY_BRANCH:\n      return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_HEAVENLY_STEM:\n      return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_IDEOGRAPHIC:\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TRAD_CHINESE_INFORMAL:\n      return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TRAD_CHINESE_FORMAL:\n      return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].SIMP_CHINESE_INFORMAL:\n      return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].SIMP_CHINESE_FORMAL:\n      return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].JAPANESE_INFORMAL:\n      return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].JAPANESE_FORMAL:\n      return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KOREAN_HANGUL_FORMAL:\n      return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KOREAN_HANJA_INFORMAL:\n      return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KOREAN_HANJA_FORMAL:\n      return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DEVANAGARI:\n      return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].GEORGIAN:\n      return createAdditiveCounter(value, 1, 19999, GEORGIAN, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].GUJARATI:\n      return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].GURMUKHI:\n      return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].HEBREW:\n      return createAdditiveCounter(value, 1, 10999, HEBREW, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].HIRAGANA:\n      return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].HIRAGANA_IROHA:\n      return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KANNADA:\n      return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KATAKANA:\n      return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KATAKANA_IROHA:\n      return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LAO:\n      return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].MONGOLIAN:\n      return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].MYANMAR:\n      return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].ORIYA:\n      return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].PERSIAN:\n      return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TAMIL:\n      return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TELUGU:\n      return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].THAI:\n      return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TIBETAN:\n      return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL:\n    default:\n      return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/ListItem.js?");
	
	/***/ }),
	
	/***/ "./src/Logger.js":
	/*!***********************!*\
	  !*** ./src/Logger.js ***!
	  \***********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Logger; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Logger =\n/*#__PURE__*/\nfunction () {\n  function Logger(enabled, id, start) {\n    _classCallCheck(this, Logger);\n\n    this.enabled = typeof window !== 'undefined' && enabled;\n    this.start = start ? start : Date.now();\n    this.id = id;\n  }\n\n  _createClass(Logger, [{\n    key: \"child\",\n    value: function child(id) {\n      return new Logger(this.enabled, id, this.start);\n    } // eslint-disable-next-line flowtype/no-weak-types\n\n  }, {\n    key: \"log\",\n    value: function log() {\n      if (this.enabled && window.console && window.console.log) {\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? \"html2canvas (\".concat(this.id, \"):\") : 'html2canvas:'].concat([].slice.call(args, 0)));\n      }\n    } // eslint-disable-next-line flowtype/no-weak-types\n\n  }, {\n    key: \"error\",\n    value: function error() {\n      if (this.enabled && window.console && window.console.error) {\n        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n          args[_key2] = arguments[_key2];\n        }\n\n        Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? \"html2canvas (\".concat(this.id, \"):\") : 'html2canvas:'].concat([].slice.call(args, 0)));\n      }\n    }\n  }]);\n\n  return Logger;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/Logger.js?");
	
	/***/ }),
	
	/***/ "./src/NodeContainer.js":
	/*!******************************!*\
	  !*** ./src/NodeContainer.js ***!
	  \******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NodeContainer; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ \"./src/Color.js\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing/background */ \"./src/parsing/background.js\");\n/* harmony import */ var _parsing_border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsing/border */ \"./src/parsing/border.js\");\n/* harmony import */ var _parsing_borderRadius__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing/borderRadius */ \"./src/parsing/borderRadius.js\");\n/* harmony import */ var _parsing_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsing/display */ \"./src/parsing/display.js\");\n/* harmony import */ var _parsing_float__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsing/float */ \"./src/parsing/float.js\");\n/* harmony import */ var _parsing_font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsing/font */ \"./src/parsing/font.js\");\n/* harmony import */ var _parsing_letterSpacing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsing/letterSpacing */ \"./src/parsing/letterSpacing.js\");\n/* harmony import */ var _parsing_lineBreak__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsing/lineBreak */ \"./src/parsing/lineBreak.js\");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsing/listStyle */ \"./src/parsing/listStyle.js\");\n/* harmony import */ var _parsing_margin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsing/margin */ \"./src/parsing/margin.js\");\n/* harmony import */ var _parsing_overflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsing/overflow */ \"./src/parsing/overflow.js\");\n/* harmony import */ var _parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsing/overflowWrap */ \"./src/parsing/overflowWrap.js\");\n/* harmony import */ var _parsing_padding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsing/padding */ \"./src/parsing/padding.js\");\n/* harmony import */ var _parsing_position__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsing/position */ \"./src/parsing/position.js\");\n/* harmony import */ var _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsing/textDecoration */ \"./src/parsing/textDecoration.js\");\n/* harmony import */ var _parsing_textShadow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsing/textShadow */ \"./src/parsing/textShadow.js\");\n/* harmony import */ var _parsing_textTransform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsing/textTransform */ \"./src/parsing/textTransform.js\");\n/* harmony import */ var _parsing_transform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parsing/transform */ \"./src/parsing/transform.js\");\n/* harmony import */ var _parsing_visibility__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parsing/visibility */ \"./src/parsing/visibility.js\");\n/* harmony import */ var _parsing_word_break__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parsing/word-break */ \"./src/parsing/word-break.js\");\n/* harmony import */ var _parsing_zIndex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parsing/zIndex */ \"./src/parsing/zIndex.js\");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Input */ \"./src/Input.js\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ListItem */ \"./src/ListItem.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];\n\nvar NodeContainer =\n/*#__PURE__*/\nfunction () {\n  function NodeContainer(node, parent, resourceLoader, index) {\n    var _this = this;\n\n    _classCallCheck(this, NodeContainer);\n\n    this.parent = parent;\n    this.tagName = node.tagName;\n    this.index = index;\n    this.childNodes = [];\n    this.listItems = [];\n\n    if (typeof node.start === 'number') {\n      this.listStart = node.start;\n    }\n\n    var defaultView = node.ownerDocument.defaultView;\n    var scrollX = defaultView.pageXOffset;\n    var scrollY = defaultView.pageYOffset;\n    var style = defaultView.getComputedStyle(node, null);\n    var display = Object(_parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"parseDisplay\"])(style.display);\n    var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';\n    var position = Object(_parsing_position__WEBPACK_IMPORTED_MODULE_15__[\"parsePosition\"])(style.position);\n    this.style = {\n      background: IS_INPUT ? _Input__WEBPACK_IMPORTED_MODULE_24__[\"INPUT_BACKGROUND\"] : Object(_parsing_background__WEBPACK_IMPORTED_MODULE_2__[\"parseBackground\"])(style, resourceLoader),\n      border: IS_INPUT ? _Input__WEBPACK_IMPORTED_MODULE_24__[\"INPUT_BORDERS\"] : Object(_parsing_border__WEBPACK_IMPORTED_MODULE_3__[\"parseBorder\"])(style),\n      borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? Object(_Input__WEBPACK_IMPORTED_MODULE_24__[\"getInputBorderRadius\"])(node) : Object(_parsing_borderRadius__WEBPACK_IMPORTED_MODULE_4__[\"parseBorderRadius\"])(style),\n      color: IS_INPUT ? _Input__WEBPACK_IMPORTED_MODULE_24__[\"INPUT_COLOR\"] : new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.color),\n      display: display,\n      float: Object(_parsing_float__WEBPACK_IMPORTED_MODULE_6__[\"parseCSSFloat\"])(style.float),\n      font: Object(_parsing_font__WEBPACK_IMPORTED_MODULE_7__[\"parseFont\"])(style),\n      letterSpacing: Object(_parsing_letterSpacing__WEBPACK_IMPORTED_MODULE_8__[\"parseLetterSpacing\"])(style.letterSpacing),\n      listStyle: display === _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].LIST_ITEM ? Object(_parsing_listStyle__WEBPACK_IMPORTED_MODULE_10__[\"parseListStyle\"])(style) : null,\n      lineBreak: Object(_parsing_lineBreak__WEBPACK_IMPORTED_MODULE_9__[\"parseLineBreak\"])(style.lineBreak),\n      margin: Object(_parsing_margin__WEBPACK_IMPORTED_MODULE_11__[\"parseMargin\"])(style),\n      opacity: parseFloat(style.opacity),\n      overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? Object(_parsing_overflow__WEBPACK_IMPORTED_MODULE_12__[\"parseOverflow\"])(style.overflow) : _parsing_overflow__WEBPACK_IMPORTED_MODULE_12__[\"OVERFLOW\"].HIDDEN,\n      overflowWrap: Object(_parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_13__[\"parseOverflowWrap\"])(style.overflowWrap ? style.overflowWrap : style.wordWrap),\n      padding: Object(_parsing_padding__WEBPACK_IMPORTED_MODULE_14__[\"parsePadding\"])(style),\n      position: position,\n      textDecoration: Object(_parsing_textDecoration__WEBPACK_IMPORTED_MODULE_16__[\"parseTextDecoration\"])(style),\n      textShadow: Object(_parsing_textShadow__WEBPACK_IMPORTED_MODULE_17__[\"parseTextShadow\"])(style.textShadow),\n      textTransform: Object(_parsing_textTransform__WEBPACK_IMPORTED_MODULE_18__[\"parseTextTransform\"])(style.textTransform),\n      transform: Object(_parsing_transform__WEBPACK_IMPORTED_MODULE_19__[\"parseTransform\"])(style),\n      visibility: Object(_parsing_visibility__WEBPACK_IMPORTED_MODULE_20__[\"parseVisibility\"])(style.visibility),\n      wordBreak: Object(_parsing_word_break__WEBPACK_IMPORTED_MODULE_21__[\"parseWordBreak\"])(style.wordBreak),\n      zIndex: Object(_parsing_zIndex__WEBPACK_IMPORTED_MODULE_22__[\"parseZIndex\"])(position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__[\"POSITION\"].STATIC ? style.zIndex : 'auto')\n    };\n\n    if (this.isTransformed()) {\n      // getBoundingClientRect provides values post-transform, we want them without the transformation\n      node.style.transform = 'matrix(1,0,0,1,0,0)';\n    }\n\n    if (display === _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].LIST_ITEM) {\n      var listOwner = Object(_ListItem__WEBPACK_IMPORTED_MODULE_25__[\"getListOwner\"])(this);\n\n      if (listOwner) {\n        var listIndex = listOwner.listItems.length;\n        listOwner.listItems.push(this);\n        this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;\n      }\n    } // TODO move bound retrieval for all nodes to a later stage?\n\n\n    if (node.tagName === 'IMG') {\n      node.addEventListener('load', function () {\n        _this.bounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"parseBounds\"])(node, scrollX, scrollY);\n        _this.curvedBounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"parseBoundCurves\"])(_this.bounds, _this.style.border, _this.style.borderRadius);\n      });\n    }\n\n    this.image = getImage(node, resourceLoader);\n    this.bounds = IS_INPUT ? Object(_Input__WEBPACK_IMPORTED_MODULE_24__[\"reformatInputBounds\"])(Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"parseBounds\"])(node, scrollX, scrollY)) : Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"parseBounds\"])(node, scrollX, scrollY);\n    this.curvedBounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"parseBoundCurves\"])(this.bounds, this.style.border, this.style.borderRadius);\n\n    if (true) {\n      this.name = \"\".concat(node.tagName.toLowerCase()).concat(node.id ? \"#\".concat(node.id) : '').concat(node.className.toString().split(' ').map(function (s) {\n        return s.length ? \".\".concat(s) : '';\n      }).join(''));\n    }\n  }\n\n  _createClass(NodeContainer, [{\n    key: \"getClipPaths\",\n    value: function getClipPaths() {\n      var parentClips = this.parent ? this.parent.getClipPaths() : [];\n      var isClipped = this.style.overflow !== _parsing_overflow__WEBPACK_IMPORTED_MODULE_12__[\"OVERFLOW\"].VISIBLE;\n      return isClipped ? parentClips.concat([Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"calculatePaddingBoxPath\"])(this.curvedBounds)]) : parentClips;\n    }\n  }, {\n    key: \"isInFlow\",\n    value: function isInFlow() {\n      return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();\n    }\n  }, {\n    key: \"isVisible\",\n    value: function isVisible() {\n      return !Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].NONE) && this.style.opacity > 0 && this.style.visibility === _parsing_visibility__WEBPACK_IMPORTED_MODULE_20__[\"VISIBILITY\"].VISIBLE;\n    }\n  }, {\n    key: \"isAbsolutelyPositioned\",\n    value: function isAbsolutelyPositioned() {\n      return this.style.position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__[\"POSITION\"].STATIC && this.style.position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__[\"POSITION\"].RELATIVE;\n    }\n  }, {\n    key: \"isPositioned\",\n    value: function isPositioned() {\n      return this.style.position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__[\"POSITION\"].STATIC;\n    }\n  }, {\n    key: \"isFloating\",\n    value: function isFloating() {\n      return this.style.float !== _parsing_float__WEBPACK_IMPORTED_MODULE_6__[\"FLOAT\"].NONE;\n    }\n  }, {\n    key: \"isRootElement\",\n    value: function isRootElement() {\n      return this.parent === null;\n    }\n  }, {\n    key: \"isTransformed\",\n    value: function isTransformed() {\n      return this.style.transform !== null;\n    }\n  }, {\n    key: \"isPositionedWithZIndex\",\n    value: function isPositionedWithZIndex() {\n      return this.isPositioned() && !this.style.zIndex.auto;\n    }\n  }, {\n    key: \"isInlineLevel\",\n    value: function isInlineLevel() {\n      return Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_BLOCK) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_FLEX) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_GRID) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_LIST_ITEM) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_TABLE);\n    }\n  }, {\n    key: \"isInlineBlockOrInlineTable\",\n    value: function isInlineBlockOrInlineTable() {\n      return Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_BLOCK) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_TABLE);\n    }\n  }]);\n\n  return NodeContainer;\n}();\n\n\n\nvar getImage = function getImage(node, resourceLoader) {\n  if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {\n    var s = new XMLSerializer();\n    return resourceLoader.loadImage(\"data:image/svg+xml,\".concat(encodeURIComponent(s.serializeToString(node))));\n  }\n\n  switch (node.tagName) {\n    case 'IMG':\n      // $FlowFixMe\n      var img = node;\n      return resourceLoader.loadImage(img.currentSrc || img.src);\n\n    case 'CANVAS':\n      // $FlowFixMe\n      var canvas = node;\n      return resourceLoader.loadCanvas(canvas);\n\n    case 'IFRAME':\n      var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');\n\n      if (iframeKey) {\n        return iframeKey;\n      }\n\n      break;\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://html2canvas/./src/NodeContainer.js?");
	
	/***/ }),
	
	/***/ "./src/NodeParser.js":
	/*!***************************!*\
	  !*** ./src/NodeParser.js ***!
	  \***************************/
	/*! exports provided: NodeParser */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeParser\", function() { return NodeParser; });\n/* harmony import */ var _StackingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StackingContext */ \"./src/StackingContext.js\");\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeContainer */ \"./src/NodeContainer.js\");\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextContainer */ \"./src/TextContainer.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ \"./src/Input.js\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItem */ \"./src/ListItem.js\");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsing/listStyle */ \"./src/parsing/listStyle.js\");\n\n\n\n\n\n\n\n\nvar NodeParser = function NodeParser(node, resourceLoader, logger) {\n  if (true) {\n    logger.log(\"Starting node parsing\");\n  }\n\n  var index = 0;\n  var container = new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](node, null, resourceLoader, index++);\n  var stack = new _StackingContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container, null, true);\n  parseNodeTree(node, container, stack, resourceLoader, index);\n\n  if (true) {\n    logger.log(\"Finished parsing node tree\");\n  }\n\n  return stack;\n};\nvar IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];\n\nvar parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {\n  if ( true && index > 50000) {\n    throw new Error(\"Recursion error while parsing node tree\");\n  }\n\n  for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {\n    nextNode = childNode.nextSibling;\n    var defaultView = childNode.ownerDocument.defaultView;\n\n    if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {\n      if (childNode.data.trim().length > 0) {\n        parent.childNodes.push(_TextContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTextNode(childNode, parent));\n      }\n    } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {\n      if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {\n        var container = new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](childNode, parent, resourceLoader, index++);\n\n        if (container.isVisible()) {\n          if (childNode.tagName === 'INPUT') {\n            // $FlowFixMe\n            Object(_Input__WEBPACK_IMPORTED_MODULE_3__[\"inlineInputElement\"])(childNode, container);\n          } else if (childNode.tagName === 'TEXTAREA') {\n            // $FlowFixMe\n            Object(_Input__WEBPACK_IMPORTED_MODULE_3__[\"inlineTextAreaElement\"])(childNode, container);\n          } else if (childNode.tagName === 'SELECT') {\n            // $FlowFixMe\n            Object(_Input__WEBPACK_IMPORTED_MODULE_3__[\"inlineSelectElement\"])(childNode, container);\n          } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _parsing_listStyle__WEBPACK_IMPORTED_MODULE_5__[\"LIST_STYLE_TYPE\"].NONE) {\n            Object(_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"inlineListItemElement\"])(childNode, container, resourceLoader);\n          }\n\n          var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';\n          var treatAsRealStackingContext = createsRealStackingContext(container, childNode);\n\n          if (treatAsRealStackingContext || createsStackingContext(container)) {\n            // for treatAsRealStackingContext:false, any positioned descendants and descendants\n            // which actually create a new stacking context should be considered part of the parent stacking context\n            var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;\n            var childStack = new _StackingContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container, parentStack, treatAsRealStackingContext);\n            parentStack.contexts.push(childStack);\n\n            if (SHOULD_TRAVERSE_CHILDREN) {\n              parseNodeTree(childNode, container, childStack, resourceLoader, index);\n            }\n          } else {\n            stack.children.push(container);\n\n            if (SHOULD_TRAVERSE_CHILDREN) {\n              parseNodeTree(childNode, container, stack, resourceLoader, index);\n            }\n          }\n        }\n      }\n    } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {\n      var _container = new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](childNode, parent, resourceLoader, index++);\n\n      var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);\n\n      if (_treatAsRealStackingContext || createsStackingContext(_container)) {\n        // for treatAsRealStackingContext:false, any positioned descendants and descendants\n        // which actually create a new stacking context should be considered part of the parent stacking context\n        var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;\n\n        var _childStack = new _StackingContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_container, _parentStack, _treatAsRealStackingContext);\n\n        _parentStack.contexts.push(_childStack);\n      } else {\n        stack.children.push(_container);\n      }\n    }\n  }\n};\n\nvar createsRealStackingContext = function createsRealStackingContext(container, node) {\n  return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);\n};\n\nvar createsStackingContext = function createsStackingContext(container) {\n  return container.isPositioned() || container.isFloating();\n};\n\nvar isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {\n  return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"] && container.parent.style.background.backgroundColor.isTransparent();\n};\n\n//# sourceURL=webpack://html2canvas/./src/NodeParser.js?");
	
	/***/ }),
	
	/***/ "./src/Proxy.js":
	/*!**********************!*\
	  !*** ./src/Proxy.js ***!
	  \**********************/
	/*! exports provided: Proxy */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Proxy\", function() { return Proxy; });\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feature */ \"./src/Feature.js\");\n\n\n\nvar Proxy = function Proxy(src, options) {\n  if (!options.proxy) {\n    return Promise.reject( true ? 'No proxy defined' : undefined);\n  }\n\n  var proxy = options.proxy;\n  return new Promise(function (resolve, reject) {\n    var responseType = _Feature__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SUPPORT_CORS_XHR && _Feature__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';\n    var xhr = _Feature__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();\n\n    xhr.onload = function () {\n      if (xhr instanceof XMLHttpRequest) {\n        if (xhr.status === 200) {\n          if (responseType === 'text') {\n            resolve(xhr.response);\n          } else {\n            var reader = new FileReader(); // $FlowFixMe\n\n            reader.addEventListener('load', function () {\n              return resolve(reader.result);\n            }, false); // $FlowFixMe\n\n            reader.addEventListener('error', function (e) {\n              return reject(e);\n            }, false);\n            reader.readAsDataURL(xhr.response);\n          }\n        } else {\n          reject( true ? \"Failed to proxy resource \".concat(src.substring(0, 256), \" with status code \").concat(xhr.status) : undefined);\n        }\n      } else {\n        resolve(xhr.responseText);\n      }\n    };\n\n    xhr.onerror = reject;\n    xhr.open('GET', \"\".concat(proxy, \"?url=\").concat(encodeURIComponent(src), \"&responseType=\").concat(responseType));\n\n    if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {\n      xhr.responseType = responseType;\n    }\n\n    if (options.imageTimeout) {\n      var timeout = options.imageTimeout;\n      xhr.timeout = timeout;\n\n      xhr.ontimeout = function () {\n        return reject( true ? \"Timed out (\".concat(timeout, \"ms) proxying \").concat(src.substring(0, 256)) : undefined);\n      };\n    }\n\n    xhr.send();\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/Proxy.js?");
	
	/***/ }),
	
	/***/ "./src/PseudoNodeContent.js":
	/*!**********************************!*\
	  !*** ./src/PseudoNodeContent.js ***!
	  \**********************************/
	/*! exports provided: PSEUDO_CONTENT_ITEM_TYPE, TOKEN_TYPE, parseCounterReset, popCounters, resolvePseudoContent, parseContent */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PSEUDO_CONTENT_ITEM_TYPE\", function() { return PSEUDO_CONTENT_ITEM_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOKEN_TYPE\", function() { return TOKEN_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCounterReset\", function() { return parseCounterReset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popCounters\", function() { return popCounters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvePseudoContent\", function() { return resolvePseudoContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseContent\", function() { return parseContent; });\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem */ \"./src/ListItem.js\");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/listStyle */ \"./src/parsing/listStyle.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar PSEUDO_CONTENT_ITEM_TYPE = {\n  TEXT: 0,\n  IMAGE: 1\n};\nvar TOKEN_TYPE = {\n  STRING: 0,\n  ATTRIBUTE: 1,\n  URL: 2,\n  COUNTER: 3,\n  COUNTERS: 4,\n  OPENQUOTE: 5,\n  CLOSEQUOTE: 6\n};\nvar parseCounterReset = function parseCounterReset(style, data) {\n  if (!style || !style.counterReset || style.counterReset === 'none') {\n    return [];\n  }\n\n  var counterNames = [];\n  var counterResets = style.counterReset.split(/\\s*,\\s*/);\n  var lenCounterResets = counterResets.length;\n\n  for (var i = 0; i < lenCounterResets; i++) {\n    var _counterResets$i$spli = counterResets[i].split(/\\s+/),\n        _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),\n        counterName = _counterResets$i$spli2[0],\n        initialValue = _counterResets$i$spli2[1];\n\n    counterNames.push(counterName);\n    var counter = data.counters[counterName];\n\n    if (!counter) {\n      counter = data.counters[counterName] = [];\n    }\n\n    counter.push(parseInt(initialValue || 0, 10));\n  }\n\n  return counterNames;\n};\nvar popCounters = function popCounters(counterNames, data) {\n  var lenCounters = counterNames.length;\n\n  for (var i = 0; i < lenCounters; i++) {\n    data.counters[counterNames[i]].pop();\n  }\n};\nvar resolvePseudoContent = function resolvePseudoContent(node, style, data) {\n  if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {\n    return null;\n  }\n\n  var tokens = parseContent(style.content);\n  var len = tokens.length;\n  var contentItems = [];\n  var s = ''; // increment the counter (if there is a \"counter-increment\" declaration)\n\n  var counterIncrement = style.counterIncrement;\n\n  if (counterIncrement && counterIncrement !== 'none') {\n    var _counterIncrement$spl = counterIncrement.split(/\\s+/),\n        _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),\n        counterName = _counterIncrement$spl2[0],\n        incrementValue = _counterIncrement$spl2[1];\n\n    var counter = data.counters[counterName];\n\n    if (counter) {\n      counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);\n    }\n  } // build the content string\n\n\n  for (var i = 0; i < len; i++) {\n    var token = tokens[i];\n\n    switch (token.type) {\n      case TOKEN_TYPE.STRING:\n        s += token.value || '';\n        break;\n\n      case TOKEN_TYPE.ATTRIBUTE:\n        if (node instanceof HTMLElement && token.value) {\n          s += node.getAttribute(token.value) || '';\n        }\n\n        break;\n\n      case TOKEN_TYPE.COUNTER:\n        var _counter = data.counters[token.name || ''];\n\n        if (_counter) {\n          s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);\n        }\n\n        break;\n\n      case TOKEN_TYPE.COUNTERS:\n        var counters = data.counters[token.name || ''];\n\n        if (counters) {\n          s += formatCounterValue(counters, token.glue, token.format);\n        }\n\n        break;\n\n      case TOKEN_TYPE.OPENQUOTE:\n        s += getQuote(style, true, data.quoteDepth);\n        data.quoteDepth++;\n        break;\n\n      case TOKEN_TYPE.CLOSEQUOTE:\n        data.quoteDepth--;\n        s += getQuote(style, false, data.quoteDepth);\n        break;\n\n      case TOKEN_TYPE.URL:\n        if (s) {\n          contentItems.push({\n            type: PSEUDO_CONTENT_ITEM_TYPE.TEXT,\n            value: s\n          });\n          s = '';\n        }\n\n        contentItems.push({\n          type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE,\n          value: token.value || ''\n        });\n        break;\n    }\n  }\n\n  if (s) {\n    contentItems.push({\n      type: PSEUDO_CONTENT_ITEM_TYPE.TEXT,\n      value: s\n    });\n  }\n\n  return contentItems;\n};\nvar parseContent = function parseContent(content, cache) {\n  if (cache && cache[content]) {\n    return cache[content];\n  }\n\n  var tokens = [];\n  var len = content.length;\n  var isString = false;\n  var isEscaped = false;\n  var isFunction = false;\n  var str = '';\n  var functionName = '';\n  var args = [];\n\n  for (var i = 0; i < len; i++) {\n    var c = content.charAt(i);\n\n    switch (c) {\n      case \"'\":\n      case '\"':\n        if (isEscaped) {\n          str += c;\n        } else {\n          isString = !isString;\n\n          if (!isFunction && !isString) {\n            tokens.push({\n              type: TOKEN_TYPE.STRING,\n              value: str\n            });\n            str = '';\n          }\n        }\n\n        break;\n\n      case '\\\\':\n        if (isEscaped) {\n          str += c;\n          isEscaped = false;\n        } else {\n          isEscaped = true;\n        }\n\n        break;\n\n      case '(':\n        if (isString) {\n          str += c;\n        } else {\n          isFunction = true;\n          functionName = str;\n          str = '';\n          args = [];\n        }\n\n        break;\n\n      case ')':\n        if (isString) {\n          str += c;\n        } else if (isFunction) {\n          if (str) {\n            args.push(str);\n          }\n\n          switch (functionName) {\n            case 'attr':\n              if (args.length > 0) {\n                tokens.push({\n                  type: TOKEN_TYPE.ATTRIBUTE,\n                  value: args[0]\n                });\n              }\n\n              break;\n\n            case 'counter':\n              if (args.length > 0) {\n                var counter = {\n                  type: TOKEN_TYPE.COUNTER,\n                  name: args[0]\n                };\n\n                if (args.length > 1) {\n                  counter.format = args[1];\n                }\n\n                tokens.push(counter);\n              }\n\n              break;\n\n            case 'counters':\n              if (args.length > 0) {\n                var counters = {\n                  type: TOKEN_TYPE.COUNTERS,\n                  name: args[0]\n                };\n\n                if (args.length > 1) {\n                  counters.glue = args[1];\n                }\n\n                if (args.length > 2) {\n                  counters.format = args[2];\n                }\n\n                tokens.push(counters);\n              }\n\n              break;\n\n            case 'url':\n              if (args.length > 0) {\n                tokens.push({\n                  type: TOKEN_TYPE.URL,\n                  value: args[0]\n                });\n              }\n\n              break;\n          }\n\n          isFunction = false;\n          str = '';\n        }\n\n        break;\n\n      case ',':\n        if (isString) {\n          str += c;\n        } else if (isFunction) {\n          args.push(str);\n          str = '';\n        }\n\n        break;\n\n      case ' ':\n      case '\\t':\n        if (isString) {\n          str += c;\n        } else if (str) {\n          addOtherToken(tokens, str);\n          str = '';\n        }\n\n        break;\n\n      default:\n        str += c;\n    }\n\n    if (c !== '\\\\') {\n      isEscaped = false;\n    }\n  }\n\n  if (str) {\n    addOtherToken(tokens, str);\n  }\n\n  if (cache) {\n    cache[content] = tokens;\n  }\n\n  return tokens;\n};\n\nvar addOtherToken = function addOtherToken(tokens, identifier) {\n  switch (identifier) {\n    case 'open-quote':\n      tokens.push({\n        type: TOKEN_TYPE.OPENQUOTE\n      });\n      break;\n\n    case 'close-quote':\n      tokens.push({\n        type: TOKEN_TYPE.CLOSEQUOTE\n      });\n      break;\n  }\n};\n\nvar getQuote = function getQuote(style, isOpening, quoteDepth) {\n  var quotes = style.quotes ? style.quotes.split(/\\s+/) : [\"'\\\"'\", \"'\\\"'\"];\n  var idx = quoteDepth * 2;\n\n  if (idx >= quotes.length) {\n    idx = quotes.length - 2;\n  }\n\n  if (!isOpening) {\n    ++idx;\n  }\n\n  return quotes[idx].replace(/^[\"']|[\"']$/g, '');\n};\n\nvar formatCounterValue = function formatCounterValue(counter, glue, format) {\n  var len = counter.length;\n  var result = '';\n\n  for (var i = 0; i < len; i++) {\n    if (i > 0) {\n      result += glue || '';\n    }\n\n    result += Object(_ListItem__WEBPACK_IMPORTED_MODULE_0__[\"createCounterText\"])(counter[i], Object(_parsing_listStyle__WEBPACK_IMPORTED_MODULE_1__[\"parseListStyleType\"])(format || 'decimal'), false);\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://html2canvas/./src/PseudoNodeContent.js?");
	
	/***/ }),
	
	/***/ "./src/Renderer.js":
	/*!*************************!*\
	  !*** ./src/Renderer.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderer; });\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Font */ \"./src/Font.js\");\n/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gradient */ \"./src/Gradient.js\");\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextContainer */ \"./src/TextContainer.js\");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing/background */ \"./src/parsing/background.js\");\n/* harmony import */ var _parsing_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsing/border */ \"./src/parsing/border.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar Renderer =\n/*#__PURE__*/\nfunction () {\n  function Renderer(target, options) {\n    _classCallCheck(this, Renderer);\n\n    this.target = target;\n    this.options = options;\n    target.render(options);\n  }\n\n  _createClass(Renderer, [{\n    key: \"renderNode\",\n    value: function renderNode(container) {\n      if (container.isVisible()) {\n        this.renderNodeBackgroundAndBorders(container);\n        this.renderNodeContent(container);\n      }\n    }\n  }, {\n    key: \"renderNodeContent\",\n    value: function renderNodeContent(container) {\n      var _this = this;\n\n      var callback = function callback() {\n        if (container.childNodes.length) {\n          container.childNodes.forEach(function (child) {\n            if (child instanceof _TextContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n              var style = child.parent.style;\n\n              _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);\n            } else {\n              _this.target.drawShape(child, container.style.color);\n            }\n          });\n        }\n\n        if (container.image) {\n          var _image = _this.options.imageStore.get(container.image);\n\n          if (_image) {\n            var contentBox = Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"calculateContentBox\"])(container.bounds, container.style.padding, container.style.border);\n\n            var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;\n\n            var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;\n\n            if (_width > 0 && _height > 0) {\n              _this.target.clip([Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"calculatePaddingBoxPath\"])(container.curvedBounds)], function () {\n                _this.target.drawImage(_image, new _Bounds__WEBPACK_IMPORTED_MODULE_0__[\"Bounds\"](0, 0, _width, _height), contentBox);\n              });\n            }\n          }\n        }\n      };\n\n      var paths = container.getClipPaths();\n\n      if (paths.length) {\n        this.target.clip(paths, callback);\n      } else {\n        callback();\n      }\n    }\n  }, {\n    key: \"renderNodeBackgroundAndBorders\",\n    value: function renderNodeBackgroundAndBorders(container) {\n      var _this2 = this;\n\n      var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;\n      var hasRenderableBorders = container.style.border.some(function (border) {\n        return border.borderStyle !== _parsing_border__WEBPACK_IMPORTED_MODULE_5__[\"BORDER_STYLE\"].NONE && !border.borderColor.isTransparent();\n      });\n\n      var callback = function callback() {\n        var backgroundPaintingArea = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroungPaintingArea\"])(container.curvedBounds, container.style.background.backgroundClip);\n\n        if (HAS_BACKGROUND) {\n          _this2.target.clip([backgroundPaintingArea], function () {\n            if (!container.style.background.backgroundColor.isTransparent()) {\n              _this2.target.fill(container.style.background.backgroundColor);\n            }\n\n            _this2.renderBackgroundImage(container);\n          });\n        }\n\n        container.style.border.forEach(function (border, side) {\n          if (border.borderStyle !== _parsing_border__WEBPACK_IMPORTED_MODULE_5__[\"BORDER_STYLE\"].NONE && !border.borderColor.isTransparent()) {\n            _this2.renderBorder(border, side, container.curvedBounds);\n          }\n        });\n      };\n\n      if (HAS_BACKGROUND || hasRenderableBorders) {\n        var paths = container.parent ? container.parent.getClipPaths() : [];\n\n        if (paths.length) {\n          this.target.clip(paths, callback);\n        } else {\n          callback();\n        }\n      }\n    }\n  }, {\n    key: \"renderBackgroundImage\",\n    value: function renderBackgroundImage(container) {\n      var _this3 = this;\n\n      container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {\n        if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {\n          _this3.renderBackgroundRepeat(container, backgroundImage);\n        } else if (/gradient/i.test(backgroundImage.source.method)) {\n          _this3.renderBackgroundGradient(container, backgroundImage);\n        }\n      });\n    }\n  }, {\n    key: \"renderBackgroundRepeat\",\n    value: function renderBackgroundRepeat(container, background) {\n      var image = this.options.imageStore.get(background.source.args[0]);\n\n      if (image) {\n        var backgroundPositioningArea = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroungPositioningArea\"])(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);\n        var backgroundImageSize = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroundSize\"])(background, image, backgroundPositioningArea);\n        var position = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroundPosition\"])(background.position, backgroundImageSize, backgroundPositioningArea);\n\n        var _path = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroundRepeatPath\"])(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);\n\n        var _offsetX = Math.round(backgroundPositioningArea.left + position.x);\n\n        var _offsetY = Math.round(backgroundPositioningArea.top + position.y);\n\n        this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);\n      }\n    }\n  }, {\n    key: \"renderBackgroundGradient\",\n    value: function renderBackgroundGradient(container, background) {\n      var backgroundPositioningArea = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroungPositioningArea\"])(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);\n      var backgroundImageSize = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateGradientBackgroundSize\"])(background, backgroundPositioningArea);\n      var position = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroundPosition\"])(background.position, backgroundImageSize, backgroundPositioningArea);\n      var gradientBounds = new _Bounds__WEBPACK_IMPORTED_MODULE_0__[\"Bounds\"](Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);\n      var gradient = Object(_Gradient__WEBPACK_IMPORTED_MODULE_2__[\"parseGradient\"])(container, background.source, gradientBounds);\n\n      if (gradient) {\n        switch (gradient.type) {\n          case _Gradient__WEBPACK_IMPORTED_MODULE_2__[\"GRADIENT_TYPE\"].LINEAR_GRADIENT:\n            // $FlowFixMe\n            this.target.renderLinearGradient(gradientBounds, gradient);\n            break;\n\n          case _Gradient__WEBPACK_IMPORTED_MODULE_2__[\"GRADIENT_TYPE\"].RADIAL_GRADIENT:\n            // $FlowFixMe\n            this.target.renderRadialGradient(gradientBounds, gradient);\n            break;\n        }\n      }\n    }\n  }, {\n    key: \"renderBorder\",\n    value: function renderBorder(border, side, curvePoints) {\n      this.target.drawShape(Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"parsePathForBorder\"])(curvePoints, side), border.borderColor);\n    }\n  }, {\n    key: \"renderStack\",\n    value: function renderStack(stack) {\n      var _this4 = this;\n\n      if (stack.container.isVisible()) {\n        var _opacity = stack.getOpacity();\n\n        if (_opacity !== this._opacity) {\n          this.target.setOpacity(stack.getOpacity());\n          this._opacity = _opacity;\n        }\n\n        var transform = stack.container.style.transform;\n\n        if (transform !== null) {\n          this.target.transform(stack.container.bounds.left + transform.transformOrigin[0].value, stack.container.bounds.top + transform.transformOrigin[1].value, transform.transform, function () {\n            return _this4.renderStackContent(stack);\n          });\n        } else {\n          this.renderStackContent(stack);\n        }\n      }\n    }\n  }, {\n    key: \"renderStackContent\",\n    value: function renderStackContent(stack) {\n      var _splitStackingContext = splitStackingContexts(stack),\n          _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),\n          negativeZIndex = _splitStackingContext2[0],\n          zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],\n          positiveZIndex = _splitStackingContext2[2],\n          nonPositionedFloats = _splitStackingContext2[3],\n          nonPositionedInlineLevel = _splitStackingContext2[4];\n\n      var _splitDescendants = splitDescendants(stack),\n          _splitDescendants2 = _slicedToArray(_splitDescendants, 2),\n          inlineLevel = _splitDescendants2[0],\n          nonInlineLevel = _splitDescendants2[1]; // https://www.w3.org/TR/css-position-3/#painting-order\n      // 1. the background and borders of the element forming the stacking context.\n\n\n      this.renderNodeBackgroundAndBorders(stack.container); // 2. the child stacking contexts with negative stack levels (most negative first).\n\n      negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this); // 3. For all its in-flow, non-positioned, block-level descendants in tree order:\n\n      this.renderNodeContent(stack.container);\n      nonInlineLevel.forEach(this.renderNode, this); // 4. All non-positioned floating descendants, in tree order. For each one of these,\n      // treat the element as if it created a new stacking context, but any positioned descendants and descendants\n      // which actually create a new stacking context should be considered part of the parent stacking context,\n      // not this new one.\n\n      nonPositionedFloats.forEach(this.renderStack, this); // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.\n\n      nonPositionedInlineLevel.forEach(this.renderStack, this);\n      inlineLevel.forEach(this.renderNode, this); // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:\n      //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.\n      //  For those with 'z-index: auto', treat the element as if it created a new stacking context,\n      //  but any positioned descendants and descendants which actually create a new stacking context should be\n      //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',\n      //  treat the stacking context generated atomically.\n      //\n      //  All opacity descendants with opacity less than 1\n      //\n      //  All transform descendants with transform other than none\n\n      zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this); // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index\n      // order (smallest first) then tree order.\n\n      positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);\n    }\n  }, {\n    key: \"render\",\n    value: function render(stack) {\n      var _this5 = this;\n\n      if (this.options.backgroundColor) {\n        this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);\n      }\n\n      this.renderStack(stack);\n      var target = this.target.getTarget();\n\n      if (true) {\n        return target.then(function (output) {\n          _this5.options.logger.log(\"Render completed\");\n\n          return output;\n        });\n      }\n\n      return target;\n    }\n  }]);\n\n  return Renderer;\n}();\n\n\n\nvar splitDescendants = function splitDescendants(stack) {\n  var inlineLevel = [];\n  var nonInlineLevel = [];\n  var length = stack.children.length;\n\n  for (var i = 0; i < length; i++) {\n    var child = stack.children[i];\n\n    if (child.isInlineLevel()) {\n      inlineLevel.push(child);\n    } else {\n      nonInlineLevel.push(child);\n    }\n  }\n\n  return [inlineLevel, nonInlineLevel];\n};\n\nvar splitStackingContexts = function splitStackingContexts(stack) {\n  var negativeZIndex = [];\n  var zeroOrAutoZIndexOrTransformedOrOpacity = [];\n  var positiveZIndex = [];\n  var nonPositionedFloats = [];\n  var nonPositionedInlineLevel = [];\n  var length = stack.contexts.length;\n\n  for (var i = 0; i < length; i++) {\n    var child = stack.contexts[i];\n\n    if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {\n      if (child.container.style.zIndex.order < 0) {\n        negativeZIndex.push(child);\n      } else if (child.container.style.zIndex.order > 0) {\n        positiveZIndex.push(child);\n      } else {\n        zeroOrAutoZIndexOrTransformedOrOpacity.push(child);\n      }\n    } else {\n      if (child.container.isFloating()) {\n        nonPositionedFloats.push(child);\n      } else {\n        nonPositionedInlineLevel.push(child);\n      }\n    }\n  }\n\n  return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];\n};\n\nvar sortByZIndex = function sortByZIndex(a, b) {\n  if (a.container.style.zIndex.order > b.container.style.zIndex.order) {\n    return 1;\n  } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {\n    return -1;\n  }\n\n  return a.container.index > b.container.index ? 1 : -1;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Renderer.js?");
	
	/***/ }),
	
	/***/ "./src/ResourceLoader.js":
	/*!*******************************!*\
	  !*** ./src/ResourceLoader.js ***!
	  \*******************************/
	/*! exports provided: default, ResourceStore */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResourceLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResourceStore\", function() { return ResourceStore; });\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feature */ \"./src/Feature.js\");\n/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ \"./src/Proxy.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar ResourceLoader =\n/*#__PURE__*/\nfunction () {\n  function ResourceLoader(options, logger, window) {\n    _classCallCheck(this, ResourceLoader);\n\n    this.options = options;\n    this._window = window;\n    this.origin = this.getOrigin(window.location.href);\n    this.cache = {};\n    this.logger = logger;\n    this._index = 0;\n  }\n\n  _createClass(ResourceLoader, [{\n    key: \"loadImage\",\n    value: function loadImage(src) {\n      var _this = this;\n\n      if (this.hasResourceInCache(src)) {\n        return src;\n      }\n\n      if (isBlobImage(src)) {\n        this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);\n        return src;\n      }\n\n      if (!isSVG(src) || _Feature__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SUPPORT_SVG_DRAWING) {\n        if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {\n          return this.addImage(src, src, false);\n        } else if (!this.isSameOrigin(src)) {\n          if (typeof this.options.proxy === 'string') {\n            this.cache[src] = Object(_Proxy__WEBPACK_IMPORTED_MODULE_1__[\"Proxy\"])(src, this.options).then(function (src) {\n              return _loadImage(src, _this.options.imageTimeout || 0);\n            });\n            return src;\n          } else if (this.options.useCORS === true && _Feature__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SUPPORT_CORS_IMAGES) {\n            return this.addImage(src, src, true);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"inlineImage\",\n    value: function inlineImage(src) {\n      var _this2 = this;\n\n      if (isInlineImage(src)) {\n        return _loadImage(src, this.options.imageTimeout || 0);\n      }\n\n      if (this.hasResourceInCache(src)) {\n        return this.cache[src];\n      }\n\n      if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {\n        return this.cache[src] = Object(_Proxy__WEBPACK_IMPORTED_MODULE_1__[\"Proxy\"])(src, this.options).then(function (src) {\n          return _loadImage(src, _this2.options.imageTimeout || 0);\n        });\n      }\n\n      return this.xhrImage(src);\n    }\n  }, {\n    key: \"xhrImage\",\n    value: function xhrImage(src) {\n      var _this3 = this;\n\n      this.cache[src] = new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            if (xhr.status !== 200) {\n              reject(\"Failed to fetch image \".concat(src.substring(0, 256), \" with status code \").concat(xhr.status));\n            } else {\n              var reader = new FileReader();\n              reader.addEventListener('load', function () {\n                // $FlowFixMe\n                var result = reader.result;\n                resolve(result);\n              }, false);\n              reader.addEventListener('error', function (e) {\n                return reject(e);\n              }, false);\n              reader.readAsDataURL(xhr.response);\n            }\n          }\n        };\n\n        xhr.responseType = 'blob';\n\n        if (_this3.options.imageTimeout) {\n          var timeout = _this3.options.imageTimeout;\n          xhr.timeout = timeout;\n\n          xhr.ontimeout = function () {\n            return reject( true ? \"Timed out (\".concat(timeout, \"ms) fetching \").concat(src.substring(0, 256)) : undefined);\n          };\n        }\n\n        xhr.open('GET', src, true);\n        xhr.send();\n      }).then(function (src) {\n        return _loadImage(src, _this3.options.imageTimeout || 0);\n      });\n      return this.cache[src];\n    }\n  }, {\n    key: \"loadCanvas\",\n    value: function loadCanvas(node) {\n      var key = String(this._index++);\n      this.cache[key] = Promise.resolve(node);\n      return key;\n    }\n  }, {\n    key: \"hasResourceInCache\",\n    value: function hasResourceInCache(key) {\n      return typeof this.cache[key] !== 'undefined';\n    }\n  }, {\n    key: \"addImage\",\n    value: function addImage(key, src, useCORS) {\n      var _this4 = this;\n\n      if (true) {\n        this.logger.log(\"Added image \".concat(key.substring(0, 256)));\n      }\n\n      this.cache[key] = new Promise(function (resolve, reject) {\n        var img = new Image();\n\n        img.onload = function () {\n          return resolve(img);\n        }; //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous\n\n\n        if (isInlineBase64Image(src) || useCORS) {\n          img.crossOrigin = 'anonymous';\n        }\n\n        img.onerror = reject;\n        img.src = src;\n\n        if (img.complete === true) {\n          // Inline XML images may fail to parse, throwing an Error later on\n          setTimeout(function () {\n            resolve(img);\n          }, 500);\n        }\n\n        if (_this4.options.imageTimeout) {\n          var timeout = _this4.options.imageTimeout;\n          setTimeout(function () {\n            return reject( true ? \"Timed out (\".concat(timeout, \"ms) fetching \").concat(src.substring(0, 256)) : undefined);\n          }, timeout);\n        }\n      });\n      return key;\n    }\n  }, {\n    key: \"isSameOrigin\",\n    value: function isSameOrigin(url) {\n      return this.getOrigin(url) === this.origin;\n    }\n  }, {\n    key: \"getOrigin\",\n    value: function getOrigin(url) {\n      var link = this._link || (this._link = this._window.document.createElement('a'));\n\n      link.href = url;\n      link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/\n\n      return link.protocol + link.hostname + link.port;\n    }\n  }, {\n    key: \"ready\",\n    value: function ready() {\n      var _this5 = this;\n\n      var keys = Object.keys(this.cache);\n      var values = keys.map(function (str) {\n        return _this5.cache[str].catch(function (e) {\n          if (true) {\n            _this5.logger.log(\"Unable to load image\", e);\n          }\n\n          return null;\n        });\n      });\n      return Promise.all(values).then(function (images) {\n        if (true) {\n          _this5.logger.log(\"Finished loading \".concat(images.length, \" images\"), images);\n        }\n\n        return new ResourceStore(keys, images);\n      });\n    }\n  }]);\n\n  return ResourceLoader;\n}();\n\n\nvar ResourceStore =\n/*#__PURE__*/\nfunction () {\n  function ResourceStore(keys, resources) {\n    _classCallCheck(this, ResourceStore);\n\n    this._keys = keys;\n    this._resources = resources;\n  }\n\n  _createClass(ResourceStore, [{\n    key: \"get\",\n    value: function get(key) {\n      var index = this._keys.indexOf(key);\n\n      return index === -1 ? null : this._resources[index];\n    }\n  }]);\n\n  return ResourceStore;\n}();\nvar INLINE_SVG = /^data:image\\/svg\\+xml/i;\nvar INLINE_BASE64 = /^data:image\\/.*;base64,/i;\nvar INLINE_IMG = /^data:image\\/.*/i;\n\nvar isInlineImage = function isInlineImage(src) {\n  return INLINE_IMG.test(src);\n};\n\nvar isInlineBase64Image = function isInlineBase64Image(src) {\n  return INLINE_BASE64.test(src);\n};\n\nvar isBlobImage = function isBlobImage(src) {\n  return src.substr(0, 4) === 'blob';\n};\n\nvar isSVG = function isSVG(src) {\n  return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);\n};\n\nvar _loadImage = function _loadImage(src, timeout) {\n  return new Promise(function (resolve, reject) {\n    var img = new Image();\n\n    img.onload = function () {\n      return resolve(img);\n    };\n\n    img.onerror = reject;\n    img.src = src;\n\n    if (img.complete === true) {\n      // Inline XML images may fail to parse, throwing an Error later on\n      setTimeout(function () {\n        resolve(img);\n      }, 500);\n    }\n\n    if (timeout) {\n      setTimeout(function () {\n        return reject( true ? \"Timed out (\".concat(timeout, \"ms) loading image\") : undefined);\n      }, timeout);\n    }\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/ResourceLoader.js?");
	
	/***/ }),
	
	/***/ "./src/StackingContext.js":
	/*!********************************!*\
	  !*** ./src/StackingContext.js ***!
	  \********************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StackingContext; });\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeContainer */ \"./src/NodeContainer.js\");\n/* harmony import */ var _parsing_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/position */ \"./src/parsing/position.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar StackingContext =\n/*#__PURE__*/\nfunction () {\n  function StackingContext(container, parent, treatAsRealStackingContext) {\n    _classCallCheck(this, StackingContext);\n\n    this.container = container;\n    this.parent = parent;\n    this.contexts = [];\n    this.children = [];\n    this.treatAsRealStackingContext = treatAsRealStackingContext;\n  }\n\n  _createClass(StackingContext, [{\n    key: \"getOpacity\",\n    value: function getOpacity() {\n      return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;\n    }\n  }, {\n    key: \"getRealParentStackingContext\",\n    value: function getRealParentStackingContext() {\n      return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();\n    }\n  }]);\n\n  return StackingContext;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/StackingContext.js?");
	
	/***/ }),
	
	/***/ "./src/TextBounds.js":
	/*!***************************!*\
	  !*** ./src/TextBounds.js ***!
	  \***************************/
	/*! exports provided: TextBounds, parseTextBounds */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextBounds\", function() { return TextBounds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextBounds\", function() { return parseTextBounds; });\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/textDecoration */ \"./src/parsing/textDecoration.js\");\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feature */ \"./src/Feature.js\");\n/* harmony import */ var _Unicode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Unicode */ \"./src/Unicode.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\nvar TextBounds = function TextBounds(text, bounds) {\n  _classCallCheck(this, TextBounds);\n\n  this.text = text;\n  this.bounds = bounds;\n};\nvar parseTextBounds = function parseTextBounds(value, parent, node) {\n  var letterRendering = parent.style.letterSpacing !== 0;\n  var textList = letterRendering ? Object(_Unicode__WEBPACK_IMPORTED_MODULE_3__[\"toCodePoints\"])(value).map(function (i) {\n    return Object(_Unicode__WEBPACK_IMPORTED_MODULE_3__[\"fromCodePoint\"])(i);\n  }) : Object(_Unicode__WEBPACK_IMPORTED_MODULE_3__[\"breakWords\"])(value, parent);\n  var length = textList.length;\n  var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;\n  var scrollX = defaultView ? defaultView.pageXOffset : 0;\n  var scrollY = defaultView ? defaultView.pageYOffset : 0;\n  var textBounds = [];\n  var offset = 0;\n\n  for (var i = 0; i < length; i++) {\n    var text = textList[i];\n\n    if (parent.style.textDecoration !== _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__[\"TEXT_DECORATION\"].NONE || text.trim().length > 0) {\n      if (_Feature__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SUPPORT_RANGE_BOUNDS) {\n        textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));\n      } else {\n        var replacementNode = node.splitText(text.length);\n        textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));\n        node = replacementNode;\n      }\n    } else if (!_Feature__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SUPPORT_RANGE_BOUNDS) {\n      node = node.splitText(text.length);\n    }\n\n    offset += text.length;\n  }\n\n  return textBounds;\n};\n\nvar getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {\n  var wrapper = node.ownerDocument.createElement('html2canvaswrapper');\n  wrapper.appendChild(node.cloneNode(true));\n  var parentNode = node.parentNode;\n\n  if (parentNode) {\n    parentNode.replaceChild(wrapper, node);\n    var bounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"parseBounds\"])(wrapper, scrollX, scrollY);\n\n    if (wrapper.firstChild) {\n      parentNode.replaceChild(wrapper.firstChild, wrapper);\n    }\n\n    return bounds;\n  }\n\n  return new _Bounds__WEBPACK_IMPORTED_MODULE_0__[\"Bounds\"](0, 0, 0, 0);\n};\n\nvar getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {\n  var range = node.ownerDocument.createRange();\n  range.setStart(node, offset);\n  range.setEnd(node, offset + length);\n  return _Bounds__WEBPACK_IMPORTED_MODULE_0__[\"Bounds\"].fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);\n};\n\n//# sourceURL=webpack://html2canvas/./src/TextBounds.js?");
	
	/***/ }),
	
	/***/ "./src/TextContainer.js":
	/*!******************************!*\
	  !*** ./src/TextContainer.js ***!
	  \******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextContainer; });\n/* harmony import */ var _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsing/textTransform */ \"./src/parsing/textTransform.js\");\n/* harmony import */ var _TextBounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextBounds */ \"./src/TextBounds.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar TextContainer =\n/*#__PURE__*/\nfunction () {\n  function TextContainer(text, parent, bounds) {\n    _classCallCheck(this, TextContainer);\n\n    this.text = text;\n    this.parent = parent;\n    this.bounds = bounds;\n  }\n\n  _createClass(TextContainer, null, [{\n    key: \"fromTextNode\",\n    value: function fromTextNode(node, parent) {\n      var text = transform(node.data, parent.style.textTransform);\n      return new TextContainer(text, parent, Object(_TextBounds__WEBPACK_IMPORTED_MODULE_1__[\"parseTextBounds\"])(text, parent, node));\n    }\n  }]);\n\n  return TextContainer;\n}();\n\n\nvar CAPITALIZE = /(^|\\s|:|-|\\(|\\))([a-z])/g;\n\nvar transform = function transform(text, _transform) {\n  switch (_transform) {\n    case _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__[\"TEXT_TRANSFORM\"].LOWERCASE:\n      return text.toLowerCase();\n\n    case _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__[\"TEXT_TRANSFORM\"].CAPITALIZE:\n      return text.replace(CAPITALIZE, capitalize);\n\n    case _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__[\"TEXT_TRANSFORM\"].UPPERCASE:\n      return text.toUpperCase();\n\n    default:\n      return text;\n  }\n};\n\nfunction capitalize(m, p1, p2) {\n  if (m.length > 0) {\n    return p1 + p2.toUpperCase();\n  }\n\n  return m;\n}\n\n//# sourceURL=webpack://html2canvas/./src/TextContainer.js?");
	
	/***/ }),
	
	/***/ "./src/Unicode.js":
	/*!************************!*\
	  !*** ./src/Unicode.js ***!
	  \************************/
	/*! exports provided: toCodePoints, fromCodePoint, breakWords */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breakWords\", function() { return breakWords; });\n/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-line-break */ \"./node_modules/css-line-break/dist/index.js\");\n/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_line_break__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/overflowWrap */ \"./src/parsing/overflowWrap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toCodePoints\", function() { return css_line_break__WEBPACK_IMPORTED_MODULE_0__[\"toCodePoints\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fromCodePoint\", function() { return css_line_break__WEBPACK_IMPORTED_MODULE_0__[\"fromCodePoint\"]; });\n\n\n\n\n\n\nvar breakWords = function breakWords(str, parent) {\n  var breaker = Object(css_line_break__WEBPACK_IMPORTED_MODULE_0__[\"LineBreaker\"])(str, {\n    lineBreak: parent.style.lineBreak,\n    wordBreak: parent.style.overflowWrap === _parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_1__[\"OVERFLOW_WRAP\"].BREAK_WORD ? 'break-word' : parent.style.wordBreak\n  });\n  var words = [];\n  var bk;\n\n  while (!(bk = breaker.next()).done) {\n    words.push(bk.value.slice());\n  }\n\n  return words;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Unicode.js?");
	
	/***/ }),
	
	/***/ "./src/Util.js":
	/*!*********************!*\
	  !*** ./src/Util.js ***!
	  \*********************/
	/*! exports provided: contains, distance, copyCSSStyles, SMALL_IMAGE */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contains\", function() { return contains; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distance\", function() { return distance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copyCSSStyles\", function() { return copyCSSStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SMALL_IMAGE\", function() { return SMALL_IMAGE; });\n\n\nvar contains = function contains(bit, value) {\n  return (bit & value) !== 0;\n};\nvar distance = function distance(a, b) {\n  return Math.sqrt(a * a + b * b);\n};\nvar copyCSSStyles = function copyCSSStyles(style, target) {\n  // Edge does not provide value for cssText\n  for (var i = style.length - 1; i >= 0; i--) {\n    var property = style.item(i); // Safari shows pseudoelements if content is set\n\n    if (property !== 'content') {\n      target.style.setProperty(property, style.getPropertyValue(property));\n    }\n  }\n\n  return target;\n};\nvar SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';\n\n//# sourceURL=webpack://html2canvas/./src/Util.js?");
	
	/***/ }),
	
	/***/ "./src/Window.js":
	/*!***********************!*\
	  !*** ./src/Window.js ***!
	  \***********************/
	/*! exports provided: renderElement */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderElement\", function() { return renderElement; });\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ \"./src/Logger.js\");\n/* harmony import */ var _NodeParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeParser */ \"./src/NodeParser.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer */ \"./src/Renderer.js\");\n/* harmony import */ var _renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ \"./src/renderer/ForeignObjectRenderer.js\");\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Feature */ \"./src/Feature.js\");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _Clone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clone */ \"./src/Clone.js\");\n/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Font */ \"./src/Font.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Color */ \"./src/Color.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nvar renderElement = function renderElement(element, options, logger) {\n  var ownerDocument = element.ownerDocument;\n  var windowBounds = new _Bounds__WEBPACK_IMPORTED_MODULE_5__[\"Bounds\"](options.scrollX, options.scrollY, options.windowWidth, options.windowHeight); // http://www.w3.org/TR/css3-background/#special-backgrounds\n\n  var documentBackgroundColor = ownerDocument.documentElement ? new _Color__WEBPACK_IMPORTED_MODULE_8__[\"default\"](getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color__WEBPACK_IMPORTED_MODULE_8__[\"TRANSPARENT\"];\n  var bodyBackgroundColor = ownerDocument.body ? new _Color__WEBPACK_IMPORTED_MODULE_8__[\"default\"](getComputedStyle(ownerDocument.body).backgroundColor) : _Color__WEBPACK_IMPORTED_MODULE_8__[\"TRANSPARENT\"];\n  var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color__WEBPACK_IMPORTED_MODULE_8__[\"default\"](options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color__WEBPACK_IMPORTED_MODULE_8__[\"default\"](options.backgroundColor) : null;\n  return (options.foreignObjectRendering ? // $FlowFixMe\n  _Feature__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {\n    return supportForeignObject ? function (cloner) {\n      if (true) {\n        logger.log(\"Document cloned, using foreignObject rendering\");\n      }\n\n      return cloner.inlineFonts(ownerDocument).then(function () {\n        return cloner.resourceLoader.ready();\n      }).then(function () {\n        var renderer = new _renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](cloner.documentElement);\n        var defaultView = ownerDocument.defaultView;\n        var scrollX = defaultView.pageXOffset;\n        var scrollY = defaultView.pageYOffset;\n        var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';\n\n        var _ref = isDocument ? Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__[\"parseDocumentSize\"])(ownerDocument) : Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__[\"parseBounds\"])(element, scrollX, scrollY),\n            width = _ref.width,\n            height = _ref.height,\n            left = _ref.left,\n            top = _ref.top;\n\n        return renderer.render({\n          backgroundColor: backgroundColor,\n          logger: logger,\n          scale: options.scale,\n          x: typeof options.x === 'number' ? options.x : left,\n          y: typeof options.y === 'number' ? options.y : top,\n          width: typeof options.width === 'number' ? options.width : Math.ceil(width),\n          height: typeof options.height === 'number' ? options.height : Math.ceil(height),\n          windowWidth: options.windowWidth,\n          windowHeight: options.windowHeight,\n          scrollX: options.scrollX,\n          scrollY: options.scrollY\n        });\n      });\n    }(new _Clone__WEBPACK_IMPORTED_MODULE_6__[\"DocumentCloner\"](element, options, logger, true, renderElement)) : Object(_Clone__WEBPACK_IMPORTED_MODULE_6__[\"cloneWindow\"])(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref2) {\n      var _ref3 = _slicedToArray(_ref2, 3),\n          container = _ref3[0],\n          clonedElement = _ref3[1],\n          resourceLoader = _ref3[2];\n\n      if (true) {\n        logger.log(\"Document cloned, using computed rendering\");\n      }\n\n      var stack = Object(_NodeParser__WEBPACK_IMPORTED_MODULE_1__[\"NodeParser\"])(clonedElement, resourceLoader, logger);\n      var clonedDocument = clonedElement.ownerDocument;\n\n      if (backgroundColor === stack.container.style.background.backgroundColor) {\n        stack.container.style.background.backgroundColor = _Color__WEBPACK_IMPORTED_MODULE_8__[\"TRANSPARENT\"];\n      }\n\n      return resourceLoader.ready().then(function (imageStore) {\n        var fontMetrics = new _Font__WEBPACK_IMPORTED_MODULE_7__[\"FontMetrics\"](clonedDocument);\n\n        if (true) {\n          logger.log(\"Starting renderer\");\n        }\n\n        var defaultView = clonedDocument.defaultView;\n        var scrollX = defaultView.pageXOffset;\n        var scrollY = defaultView.pageYOffset;\n        var isDocument = clonedElement.tagName === 'HTML' || clonedElement.tagName === 'BODY';\n\n        var _ref4 = isDocument ? Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__[\"parseDocumentSize\"])(ownerDocument) : Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__[\"parseBounds\"])(clonedElement, scrollX, scrollY),\n            width = _ref4.width,\n            height = _ref4.height,\n            left = _ref4.left,\n            top = _ref4.top;\n\n        var renderOptions = {\n          backgroundColor: backgroundColor,\n          fontMetrics: fontMetrics,\n          imageStore: imageStore,\n          logger: logger,\n          scale: options.scale,\n          x: typeof options.x === 'number' ? options.x : left,\n          y: typeof options.y === 'number' ? options.y : top,\n          width: typeof options.width === 'number' ? options.width : Math.ceil(width),\n          height: typeof options.height === 'number' ? options.height : Math.ceil(height)\n        };\n\n        if (Array.isArray(options.target)) {\n          return Promise.all(options.target.map(function (target) {\n            var renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target, renderOptions);\n            return renderer.render(stack);\n          }));\n        } else {\n          var renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](options.target, renderOptions);\n          var canvas = renderer.render(stack);\n\n          if (options.removeContainer === true) {\n            if (container.parentNode) {\n              container.parentNode.removeChild(container);\n            } else if (true) {\n              logger.log(\"Cannot detach cloned iframe as it is not in the DOM anymore\");\n            }\n          }\n\n          return canvas;\n        }\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/Window.js?");
	
	/***/ }),
	
	/***/ "./src/drawing/BezierCurve.js":
	/*!************************************!*\
	  !*** ./src/drawing/BezierCurve.js ***!
	  \************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BezierCurve; });\n/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Path */ \"./src/drawing/Path.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/drawing/Vector.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar lerp = function lerp(a, b, t) {\n  return new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);\n};\n\nvar BezierCurve =\n/*#__PURE__*/\nfunction () {\n  function BezierCurve(start, startControl, endControl, end) {\n    _classCallCheck(this, BezierCurve);\n\n    this.type = _Path__WEBPACK_IMPORTED_MODULE_0__[\"PATH\"].BEZIER_CURVE;\n    this.start = start;\n    this.startControl = startControl;\n    this.endControl = endControl;\n    this.end = end;\n  }\n\n  _createClass(BezierCurve, [{\n    key: \"subdivide\",\n    value: function subdivide(t, firstHalf) {\n      var ab = lerp(this.start, this.startControl, t);\n      var bc = lerp(this.startControl, this.endControl, t);\n      var cd = lerp(this.endControl, this.end, t);\n      var abbc = lerp(ab, bc, t);\n      var bccd = lerp(bc, cd, t);\n      var dest = lerp(abbc, bccd, t);\n      return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);\n    }\n  }, {\n    key: \"reverse\",\n    value: function reverse() {\n      return new BezierCurve(this.end, this.endControl, this.startControl, this.start);\n    }\n  }]);\n\n  return BezierCurve;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/BezierCurve.js?");
	
	/***/ }),
	
	/***/ "./src/drawing/Circle.js":
	/*!*******************************!*\
	  !*** ./src/drawing/Circle.js ***!
	  \*******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Circle; });\n/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Path */ \"./src/drawing/Path.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Circle = function Circle(x, y, radius) {\n  _classCallCheck(this, Circle);\n\n  this.type = _Path__WEBPACK_IMPORTED_MODULE_0__[\"PATH\"].CIRCLE;\n  this.x = x;\n  this.y = y;\n  this.radius = radius;\n\n  if (true) {\n    if (isNaN(x)) {\n      console.error(\"Invalid x value given for Circle\");\n    }\n\n    if (isNaN(y)) {\n      console.error(\"Invalid y value given for Circle\");\n    }\n\n    if (isNaN(radius)) {\n      console.error(\"Invalid radius value given for Circle\");\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Circle.js?");
	
	/***/ }),
	
	/***/ "./src/drawing/Path.js":
	/*!*****************************!*\
	  !*** ./src/drawing/Path.js ***!
	  \*****************************/
	/*! exports provided: PATH */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PATH\", function() { return PATH; });\n\n\nvar PATH = {\n  VECTOR: 0,\n  BEZIER_CURVE: 1,\n  CIRCLE: 2\n};\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Path.js?");
	
	/***/ }),
	
	/***/ "./src/drawing/Size.js":
	/*!*****************************!*\
	  !*** ./src/drawing/Size.js ***!
	  \*****************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Size; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Size = function Size(width, height) {\n  _classCallCheck(this, Size);\n\n  this.width = width;\n  this.height = height;\n};\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Size.js?");
	
	/***/ }),
	
	/***/ "./src/drawing/Vector.js":
	/*!*******************************!*\
	  !*** ./src/drawing/Vector.js ***!
	  \*******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\n/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Path */ \"./src/drawing/Path.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Vector = function Vector(x, y) {\n  _classCallCheck(this, Vector);\n\n  this.type = _Path__WEBPACK_IMPORTED_MODULE_0__[\"PATH\"].VECTOR;\n  this.x = x;\n  this.y = y;\n\n  if (true) {\n    if (isNaN(x)) {\n      console.error(\"Invalid x value given for Vector\");\n    }\n\n    if (isNaN(y)) {\n      console.error(\"Invalid y value given for Vector\");\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Vector.js?");
	
	/***/ }),
	
	/***/ "./src/index.js":
	/*!**********************!*\
	  !*** ./src/index.js ***!
	  \**********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/CanvasRenderer */ \"./src/renderer/CanvasRenderer.js\");\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger */ \"./src/Logger.js\");\n/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Window */ \"./src/Window.js\");\n\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar html2canvas = function html2canvas(element, conf) {\n  var config = conf || {};\n  var logger = new _Logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"](typeof config.logging === 'boolean' ? config.logging : true);\n  logger.log(\"html2canvas \".concat(\"1.0.0-rc.1\"));\n\n  if ( true && typeof config.onrendered === 'function') {\n    logger.error(\"onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value\");\n  }\n\n  var ownerDocument = element.ownerDocument;\n\n  if (!ownerDocument) {\n    return Promise.reject(\"Provided element is not within a Document\");\n  }\n\n  var defaultView = ownerDocument.defaultView;\n  var defaultOptions = {\n    allowTaint: false,\n    backgroundColor: '#ffffff',\n    imageTimeout: 15000,\n    logging: true,\n    proxy: null,\n    removeContainer: true,\n    foreignObjectRendering: false,\n    scale: defaultView.devicePixelRatio || 1,\n    target: new _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](config.canvas),\n    useCORS: false,\n    windowWidth: defaultView.innerWidth,\n    windowHeight: defaultView.innerHeight,\n    scrollX: defaultView.pageXOffset,\n    scrollY: defaultView.pageYOffset\n  };\n  var result = Object(_Window__WEBPACK_IMPORTED_MODULE_2__[\"renderElement\"])(element, _objectSpread({}, defaultOptions, config), logger);\n\n  if (true) {\n    return result.catch(function (e) {\n      logger.error(e);\n      throw e;\n    });\n  }\n\n  return result;\n};\n\nhtml2canvas.CanvasRenderer = _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (html2canvas);\n\n//# sourceURL=webpack://html2canvas/./src/index.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/background.js":
	/*!***********************************!*\
	  !*** ./src/parsing/background.js ***!
	  \***********************************/
	/*! exports provided: BACKGROUND_REPEAT, BACKGROUND_SIZE, BACKGROUND_CLIP, BACKGROUND_ORIGIN, calculateBackgroundSize, calculateGradientBackgroundSize, calculateBackgroungPaintingArea, calculateBackgroungPositioningArea, calculateBackgroundPosition, calculateBackgroundRepeatPath, parseBackground, parseBackgroundImage */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKGROUND_REPEAT\", function() { return BACKGROUND_REPEAT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKGROUND_SIZE\", function() { return BACKGROUND_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKGROUND_CLIP\", function() { return BACKGROUND_CLIP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKGROUND_ORIGIN\", function() { return BACKGROUND_ORIGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBackgroundSize\", function() { return calculateBackgroundSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateGradientBackgroundSize\", function() { return calculateGradientBackgroundSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBackgroungPaintingArea\", function() { return calculateBackgroungPaintingArea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBackgroungPositioningArea\", function() { return calculateBackgroungPositioningArea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBackgroundPosition\", function() { return calculateBackgroundPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBackgroundRepeatPath\", function() { return calculateBackgroundRepeatPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBackground\", function() { return parseBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBackgroundImage\", function() { return parseBackgroundImage; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ \"./src/Color.js\");\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n/* harmony import */ var _drawing_Size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawing/Size */ \"./src/drawing/Size.js\");\n/* harmony import */ var _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawing/Vector */ \"./src/drawing/Vector.js\");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./padding */ \"./src/parsing/padding.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\n\nvar BACKGROUND_REPEAT = {\n  REPEAT: 0,\n  NO_REPEAT: 1,\n  REPEAT_X: 2,\n  REPEAT_Y: 3\n};\nvar BACKGROUND_SIZE = {\n  AUTO: 0,\n  CONTAIN: 1,\n  COVER: 2,\n  LENGTH: 3\n};\nvar BACKGROUND_CLIP = {\n  BORDER_BOX: 0,\n  PADDING_BOX: 1,\n  CONTENT_BOX: 2\n};\nvar BACKGROUND_ORIGIN = BACKGROUND_CLIP;\nvar AUTO = 'auto';\n\nvar BackgroundSize = function BackgroundSize(size) {\n  _classCallCheck(this, BackgroundSize);\n\n  switch (size) {\n    case 'contain':\n      this.size = BACKGROUND_SIZE.CONTAIN;\n      break;\n\n    case 'cover':\n      this.size = BACKGROUND_SIZE.COVER;\n      break;\n\n    case 'auto':\n      this.size = BACKGROUND_SIZE.AUTO;\n      break;\n\n    default:\n      this.value = new _Length__WEBPACK_IMPORTED_MODULE_1__[\"default\"](size);\n  }\n};\n\nvar calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {\n  var width = 0;\n  var height = 0;\n  var size = backgroundImage.size;\n\n  if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {\n    var targetRatio = bounds.width / bounds.height;\n    var currentRatio = image.width / image.height;\n    return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__[\"default\"](bounds.width, bounds.width / currentRatio) : new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__[\"default\"](bounds.height * currentRatio, bounds.height);\n  }\n\n  if (size[0].value) {\n    width = size[0].value.getAbsoluteValue(bounds.width);\n  }\n\n  if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {\n    height = image.height;\n  } else if (size[1].size === BACKGROUND_SIZE.AUTO) {\n    height = width / image.width * image.height;\n  } else if (size[1].value) {\n    height = size[1].value.getAbsoluteValue(bounds.height);\n  }\n\n  if (size[0].size === BACKGROUND_SIZE.AUTO) {\n    width = height / image.height * image.width;\n  }\n\n  return new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__[\"default\"](width, height);\n};\nvar calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {\n  var size = backgroundImage.size;\n  var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;\n  var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;\n  return new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__[\"default\"](width, height);\n};\nvar AUTO_SIZE = new BackgroundSize(AUTO);\nvar calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {\n  switch (clip) {\n    case BACKGROUND_CLIP.BORDER_BOX:\n      return Object(_Bounds__WEBPACK_IMPORTED_MODULE_4__[\"calculateBorderBoxPath\"])(curves);\n\n    case BACKGROUND_CLIP.PADDING_BOX:\n    default:\n      return Object(_Bounds__WEBPACK_IMPORTED_MODULE_4__[\"calculatePaddingBoxPath\"])(curves);\n  }\n};\nvar calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {\n  var paddingBox = Object(_Bounds__WEBPACK_IMPORTED_MODULE_4__[\"calculatePaddingBox\"])(bounds, border);\n\n  switch (backgroundOrigin) {\n    case BACKGROUND_ORIGIN.BORDER_BOX:\n      return bounds;\n\n    case BACKGROUND_ORIGIN.CONTENT_BOX:\n      var paddingLeft = padding[_padding__WEBPACK_IMPORTED_MODULE_5__[\"PADDING_SIDES\"].LEFT].getAbsoluteValue(bounds.width);\n      var paddingRight = padding[_padding__WEBPACK_IMPORTED_MODULE_5__[\"PADDING_SIDES\"].RIGHT].getAbsoluteValue(bounds.width);\n      var paddingTop = padding[_padding__WEBPACK_IMPORTED_MODULE_5__[\"PADDING_SIDES\"].TOP].getAbsoluteValue(bounds.width);\n      var paddingBottom = padding[_padding__WEBPACK_IMPORTED_MODULE_5__[\"PADDING_SIDES\"].BOTTOM].getAbsoluteValue(bounds.width);\n      return new _Bounds__WEBPACK_IMPORTED_MODULE_4__[\"Bounds\"](paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);\n\n    case BACKGROUND_ORIGIN.PADDING_BOX:\n    default:\n      return paddingBox;\n  }\n};\nvar calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {\n  return new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));\n};\nvar calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {\n  var repeat = background.repeat;\n\n  switch (repeat) {\n    case BACKGROUND_REPEAT.REPEAT_X:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];\n\n    case BACKGROUND_REPEAT.REPEAT_Y:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];\n\n    case BACKGROUND_REPEAT.NO_REPEAT:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];\n\n    default:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left), Math.round(bounds.height + bounds.top))];\n  }\n};\nvar parseBackground = function parseBackground(style, resourceLoader) {\n  return {\n    backgroundColor: new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.backgroundColor),\n    backgroundImage: parseBackgroundImages(style, resourceLoader),\n    backgroundClip: parseBackgroundClip(style.backgroundClip),\n    backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)\n  };\n};\n\nvar parseBackgroundClip = function parseBackgroundClip(backgroundClip) {\n  switch (backgroundClip) {\n    case 'padding-box':\n      return BACKGROUND_CLIP.PADDING_BOX;\n\n    case 'content-box':\n      return BACKGROUND_CLIP.CONTENT_BOX;\n  }\n\n  return BACKGROUND_CLIP.BORDER_BOX;\n};\n\nvar parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {\n  switch (backgroundOrigin) {\n    case 'padding-box':\n      return BACKGROUND_ORIGIN.PADDING_BOX;\n\n    case 'content-box':\n      return BACKGROUND_ORIGIN.CONTENT_BOX;\n  }\n\n  return BACKGROUND_ORIGIN.BORDER_BOX;\n};\n\nvar parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {\n  switch (backgroundRepeat.trim()) {\n    case 'no-repeat':\n      return BACKGROUND_REPEAT.NO_REPEAT;\n\n    case 'repeat-x':\n    case 'repeat no-repeat':\n      return BACKGROUND_REPEAT.REPEAT_X;\n\n    case 'repeat-y':\n    case 'no-repeat repeat':\n      return BACKGROUND_REPEAT.REPEAT_Y;\n\n    case 'repeat':\n      return BACKGROUND_REPEAT.REPEAT;\n  }\n\n  if (true) {\n    console.error(\"Invalid background-repeat value \\\"\".concat(backgroundRepeat, \"\\\"\"));\n  }\n\n  return BACKGROUND_REPEAT.REPEAT;\n};\n\nvar parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {\n  var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {\n    if (backgroundImage.method === 'url') {\n      var key = resourceLoader.loadImage(backgroundImage.args[0]);\n      backgroundImage.args = key ? [key] : [];\n    }\n\n    return backgroundImage;\n  });\n  var positions = style.backgroundPosition.split(',');\n  var repeats = style.backgroundRepeat.split(',');\n  var sizes = style.backgroundSize.split(',');\n  return sources.map(function (source, index) {\n    var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);\n    var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);\n    return {\n      source: source,\n      repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),\n      size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],\n      position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]\n    };\n  });\n};\n\nvar parseBackgroundSize = function parseBackgroundSize(size) {\n  return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);\n};\n\nvar parseBackgoundPosition = function parseBackgoundPosition(position) {\n  switch (position) {\n    case 'bottom':\n    case 'right':\n      return new _Length__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('100%');\n\n    case 'left':\n    case 'top':\n      return new _Length__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('0%');\n\n    case 'auto':\n      return new _Length__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('0');\n  }\n\n  return new _Length__WEBPACK_IMPORTED_MODULE_1__[\"default\"](position);\n};\n\nvar parseBackgroundImage = function parseBackgroundImage(image) {\n  var whitespace = /^\\s$/;\n  var results = [];\n  var args = [];\n  var method = '';\n  var quote = null;\n  var definition = '';\n  var mode = 0;\n  var numParen = 0;\n\n  var appendResult = function appendResult() {\n    var prefix = '';\n\n    if (method) {\n      if (definition.substr(0, 1) === '\"') {\n        definition = definition.substr(1, definition.length - 2);\n      }\n\n      if (definition) {\n        args.push(definition.trim());\n      }\n\n      var prefix_i = method.indexOf('-', 1) + 1;\n\n      if (method.substr(0, 1) === '-' && prefix_i > 0) {\n        prefix = method.substr(0, prefix_i).toLowerCase();\n        method = method.substr(prefix_i);\n      }\n\n      method = method.toLowerCase();\n\n      if (method !== 'none') {\n        results.push({\n          prefix: prefix,\n          method: method,\n          args: args\n        });\n      }\n    }\n\n    args = [];\n    method = definition = '';\n  };\n\n  image.split('').forEach(function (c) {\n    if (mode === 0 && whitespace.test(c)) {\n      return;\n    }\n\n    switch (c) {\n      case '\"':\n        if (!quote) {\n          quote = c;\n        } else if (quote === c) {\n          quote = null;\n        }\n\n        break;\n\n      case '(':\n        if (quote) {\n          break;\n        } else if (mode === 0) {\n          mode = 1;\n          return;\n        } else {\n          numParen++;\n        }\n\n        break;\n\n      case ')':\n        if (quote) {\n          break;\n        } else if (mode === 1) {\n          if (numParen === 0) {\n            mode = 0;\n            appendResult();\n            return;\n          } else {\n            numParen--;\n          }\n        }\n\n        break;\n\n      case ',':\n        if (quote) {\n          break;\n        } else if (mode === 0) {\n          appendResult();\n          return;\n        } else if (mode === 1) {\n          if (numParen === 0 && !method.match(/^url$/i)) {\n            args.push(definition.trim());\n            definition = '';\n            return;\n          }\n        }\n\n        break;\n    }\n\n    if (mode === 0) {\n      method += c;\n    } else {\n      definition += c;\n    }\n  });\n  appendResult();\n  return results;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/background.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/border.js":
	/*!*******************************!*\
	  !*** ./src/parsing/border.js ***!
	  \*******************************/
	/*! exports provided: BORDER_STYLE, BORDER_SIDES, parseBorder */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BORDER_STYLE\", function() { return BORDER_STYLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BORDER_SIDES\", function() { return BORDER_SIDES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBorder\", function() { return parseBorder; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ \"./src/Color.js\");\n\n\n\nvar BORDER_STYLE = {\n  NONE: 0,\n  SOLID: 1\n};\nvar BORDER_SIDES = {\n  TOP: 0,\n  RIGHT: 1,\n  BOTTOM: 2,\n  LEFT: 3\n};\nvar SIDES = Object.keys(BORDER_SIDES).map(function (s) {\n  return s.toLowerCase();\n});\n\nvar parseBorderStyle = function parseBorderStyle(style) {\n  switch (style) {\n    case 'none':\n      return BORDER_STYLE.NONE;\n  }\n\n  return BORDER_STYLE.SOLID;\n};\n\nvar parseBorder = function parseBorder(style) {\n  return SIDES.map(function (side) {\n    var borderColor = new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.getPropertyValue(\"border-\".concat(side, \"-color\")));\n    var borderStyle = parseBorderStyle(style.getPropertyValue(\"border-\".concat(side, \"-style\")));\n    var borderWidth = parseFloat(style.getPropertyValue(\"border-\".concat(side, \"-width\")));\n    return {\n      borderColor: borderColor,\n      borderStyle: borderStyle,\n      borderWidth: isNaN(borderWidth) ? 0 : borderWidth\n    };\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/border.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/borderRadius.js":
	/*!*************************************!*\
	  !*** ./src/parsing/borderRadius.js ***!
	  \*************************************/
	/*! exports provided: parseBorderRadius */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBorderRadius\", function() { return parseBorderRadius; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];\nvar parseBorderRadius = function parseBorderRadius(style) {\n  return SIDES.map(function (side) {\n    var value = style.getPropertyValue(\"border-\".concat(side, \"-radius\"));\n\n    var _value$split$map = value.split(' ').map(_Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create),\n        _value$split$map2 = _slicedToArray(_value$split$map, 2),\n        horizontal = _value$split$map2[0],\n        vertical = _value$split$map2[1];\n\n    return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/borderRadius.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/display.js":
	/*!********************************!*\
	  !*** ./src/parsing/display.js ***!
	  \********************************/
	/*! exports provided: DISPLAY, parseDisplay */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DISPLAY\", function() { return DISPLAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseDisplay\", function() { return parseDisplay; });\n\n\nvar DISPLAY = {\n  NONE: 1 << 0,\n  BLOCK: 1 << 1,\n  INLINE: 1 << 2,\n  RUN_IN: 1 << 3,\n  FLOW: 1 << 4,\n  FLOW_ROOT: 1 << 5,\n  TABLE: 1 << 6,\n  FLEX: 1 << 7,\n  GRID: 1 << 8,\n  RUBY: 1 << 9,\n  SUBGRID: 1 << 10,\n  LIST_ITEM: 1 << 11,\n  TABLE_ROW_GROUP: 1 << 12,\n  TABLE_HEADER_GROUP: 1 << 13,\n  TABLE_FOOTER_GROUP: 1 << 14,\n  TABLE_ROW: 1 << 15,\n  TABLE_CELL: 1 << 16,\n  TABLE_COLUMN_GROUP: 1 << 17,\n  TABLE_COLUMN: 1 << 18,\n  TABLE_CAPTION: 1 << 19,\n  RUBY_BASE: 1 << 20,\n  RUBY_TEXT: 1 << 21,\n  RUBY_BASE_CONTAINER: 1 << 22,\n  RUBY_TEXT_CONTAINER: 1 << 23,\n  CONTENTS: 1 << 24,\n  INLINE_BLOCK: 1 << 25,\n  INLINE_LIST_ITEM: 1 << 26,\n  INLINE_TABLE: 1 << 27,\n  INLINE_FLEX: 1 << 28,\n  INLINE_GRID: 1 << 29\n};\n\nvar parseDisplayValue = function parseDisplayValue(display) {\n  switch (display) {\n    case 'block':\n      return DISPLAY.BLOCK;\n\n    case 'inline':\n      return DISPLAY.INLINE;\n\n    case 'run-in':\n      return DISPLAY.RUN_IN;\n\n    case 'flow':\n      return DISPLAY.FLOW;\n\n    case 'flow-root':\n      return DISPLAY.FLOW_ROOT;\n\n    case 'table':\n      return DISPLAY.TABLE;\n\n    case 'flex':\n      return DISPLAY.FLEX;\n\n    case 'grid':\n      return DISPLAY.GRID;\n\n    case 'ruby':\n      return DISPLAY.RUBY;\n\n    case 'subgrid':\n      return DISPLAY.SUBGRID;\n\n    case 'list-item':\n      return DISPLAY.LIST_ITEM;\n\n    case 'table-row-group':\n      return DISPLAY.TABLE_ROW_GROUP;\n\n    case 'table-header-group':\n      return DISPLAY.TABLE_HEADER_GROUP;\n\n    case 'table-footer-group':\n      return DISPLAY.TABLE_FOOTER_GROUP;\n\n    case 'table-row':\n      return DISPLAY.TABLE_ROW;\n\n    case 'table-cell':\n      return DISPLAY.TABLE_CELL;\n\n    case 'table-column-group':\n      return DISPLAY.TABLE_COLUMN_GROUP;\n\n    case 'table-column':\n      return DISPLAY.TABLE_COLUMN;\n\n    case 'table-caption':\n      return DISPLAY.TABLE_CAPTION;\n\n    case 'ruby-base':\n      return DISPLAY.RUBY_BASE;\n\n    case 'ruby-text':\n      return DISPLAY.RUBY_TEXT;\n\n    case 'ruby-base-container':\n      return DISPLAY.RUBY_BASE_CONTAINER;\n\n    case 'ruby-text-container':\n      return DISPLAY.RUBY_TEXT_CONTAINER;\n\n    case 'contents':\n      return DISPLAY.CONTENTS;\n\n    case 'inline-block':\n      return DISPLAY.INLINE_BLOCK;\n\n    case 'inline-list-item':\n      return DISPLAY.INLINE_LIST_ITEM;\n\n    case 'inline-table':\n      return DISPLAY.INLINE_TABLE;\n\n    case 'inline-flex':\n      return DISPLAY.INLINE_FLEX;\n\n    case 'inline-grid':\n      return DISPLAY.INLINE_GRID;\n  }\n\n  return DISPLAY.NONE;\n};\n\nvar setDisplayBit = function setDisplayBit(bit, display) {\n  return bit | parseDisplayValue(display);\n};\n\nvar parseDisplay = function parseDisplay(display) {\n  return display.split(' ').reduce(setDisplayBit, 0);\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/display.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/float.js":
	/*!******************************!*\
	  !*** ./src/parsing/float.js ***!
	  \******************************/
	/*! exports provided: FLOAT, parseCSSFloat */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FLOAT\", function() { return FLOAT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCSSFloat\", function() { return parseCSSFloat; });\n\n\nvar FLOAT = {\n  NONE: 0,\n  LEFT: 1,\n  RIGHT: 2,\n  INLINE_START: 3,\n  INLINE_END: 4\n};\nvar parseCSSFloat = function parseCSSFloat(float) {\n  switch (float) {\n    case 'left':\n      return FLOAT.LEFT;\n\n    case 'right':\n      return FLOAT.RIGHT;\n\n    case 'inline-start':\n      return FLOAT.INLINE_START;\n\n    case 'inline-end':\n      return FLOAT.INLINE_END;\n  }\n\n  return FLOAT.NONE;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/float.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/font.js":
	/*!*****************************!*\
	  !*** ./src/parsing/font.js ***!
	  \*****************************/
	/*! exports provided: parseFont */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseFont\", function() { return parseFont; });\n\n\nvar parseFontWeight = function parseFontWeight(weight) {\n  switch (weight) {\n    case 'normal':\n      return 400;\n\n    case 'bold':\n      return 700;\n  }\n\n  var value = parseInt(weight, 10);\n  return isNaN(value) ? 400 : value;\n};\n\nvar parseFont = function parseFont(style) {\n  var fontFamily = style.fontFamily;\n  var fontSize = style.fontSize;\n  var fontStyle = style.fontStyle;\n  var fontVariant = style.fontVariant;\n  var fontWeight = parseFontWeight(style.fontWeight);\n  return {\n    fontFamily: fontFamily,\n    fontSize: fontSize,\n    fontStyle: fontStyle,\n    fontVariant: fontVariant,\n    fontWeight: fontWeight\n  };\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/font.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/letterSpacing.js":
	/*!**************************************!*\
	  !*** ./src/parsing/letterSpacing.js ***!
	  \**************************************/
	/*! exports provided: parseLetterSpacing */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseLetterSpacing\", function() { return parseLetterSpacing; });\n\n\nvar parseLetterSpacing = function parseLetterSpacing(letterSpacing) {\n  if (letterSpacing === 'normal') {\n    return 0;\n  }\n\n  var value = parseFloat(letterSpacing);\n  return isNaN(value) ? 0 : value;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/letterSpacing.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/lineBreak.js":
	/*!**********************************!*\
	  !*** ./src/parsing/lineBreak.js ***!
	  \**********************************/
	/*! exports provided: LINE_BREAK, parseLineBreak */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LINE_BREAK\", function() { return LINE_BREAK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseLineBreak\", function() { return parseLineBreak; });\n\n\nvar LINE_BREAK = {\n  NORMAL: 'normal',\n  STRICT: 'strict'\n};\nvar parseLineBreak = function parseLineBreak(wordBreak) {\n  switch (wordBreak) {\n    case 'strict':\n      return LINE_BREAK.STRICT;\n\n    case 'normal':\n    default:\n      return LINE_BREAK.NORMAL;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/lineBreak.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/listStyle.js":
	/*!**********************************!*\
	  !*** ./src/parsing/listStyle.js ***!
	  \**********************************/
	/*! exports provided: LIST_STYLE_POSITION, LIST_STYLE_TYPE, parseListStyleType, parseListStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIST_STYLE_POSITION\", function() { return LIST_STYLE_POSITION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIST_STYLE_TYPE\", function() { return LIST_STYLE_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseListStyleType\", function() { return parseListStyleType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseListStyle\", function() { return parseListStyle; });\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ \"./src/parsing/background.js\");\n\n\n\nvar LIST_STYLE_POSITION = {\n  INSIDE: 0,\n  OUTSIDE: 1\n};\nvar LIST_STYLE_TYPE = {\n  NONE: -1,\n  DISC: 0,\n  CIRCLE: 1,\n  SQUARE: 2,\n  DECIMAL: 3,\n  CJK_DECIMAL: 4,\n  DECIMAL_LEADING_ZERO: 5,\n  LOWER_ROMAN: 6,\n  UPPER_ROMAN: 7,\n  LOWER_GREEK: 8,\n  LOWER_ALPHA: 9,\n  UPPER_ALPHA: 10,\n  ARABIC_INDIC: 11,\n  ARMENIAN: 12,\n  BENGALI: 13,\n  CAMBODIAN: 14,\n  CJK_EARTHLY_BRANCH: 15,\n  CJK_HEAVENLY_STEM: 16,\n  CJK_IDEOGRAPHIC: 17,\n  DEVANAGARI: 18,\n  ETHIOPIC_NUMERIC: 19,\n  GEORGIAN: 20,\n  GUJARATI: 21,\n  GURMUKHI: 22,\n  HEBREW: 22,\n  HIRAGANA: 23,\n  HIRAGANA_IROHA: 24,\n  JAPANESE_FORMAL: 25,\n  JAPANESE_INFORMAL: 26,\n  KANNADA: 27,\n  KATAKANA: 28,\n  KATAKANA_IROHA: 29,\n  KHMER: 30,\n  KOREAN_HANGUL_FORMAL: 31,\n  KOREAN_HANJA_FORMAL: 32,\n  KOREAN_HANJA_INFORMAL: 33,\n  LAO: 34,\n  LOWER_ARMENIAN: 35,\n  MALAYALAM: 36,\n  MONGOLIAN: 37,\n  MYANMAR: 38,\n  ORIYA: 39,\n  PERSIAN: 40,\n  SIMP_CHINESE_FORMAL: 41,\n  SIMP_CHINESE_INFORMAL: 42,\n  TAMIL: 43,\n  TELUGU: 44,\n  THAI: 45,\n  TIBETAN: 46,\n  TRAD_CHINESE_FORMAL: 47,\n  TRAD_CHINESE_INFORMAL: 48,\n  UPPER_ARMENIAN: 49,\n  DISCLOSURE_OPEN: 50,\n  DISCLOSURE_CLOSED: 51\n};\nvar parseListStyleType = function parseListStyleType(type) {\n  switch (type) {\n    case 'disc':\n      return LIST_STYLE_TYPE.DISC;\n\n    case 'circle':\n      return LIST_STYLE_TYPE.CIRCLE;\n\n    case 'square':\n      return LIST_STYLE_TYPE.SQUARE;\n\n    case 'decimal':\n      return LIST_STYLE_TYPE.DECIMAL;\n\n    case 'cjk-decimal':\n      return LIST_STYLE_TYPE.CJK_DECIMAL;\n\n    case 'decimal-leading-zero':\n      return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;\n\n    case 'lower-roman':\n      return LIST_STYLE_TYPE.LOWER_ROMAN;\n\n    case 'upper-roman':\n      return LIST_STYLE_TYPE.UPPER_ROMAN;\n\n    case 'lower-greek':\n      return LIST_STYLE_TYPE.LOWER_GREEK;\n\n    case 'lower-alpha':\n      return LIST_STYLE_TYPE.LOWER_ALPHA;\n\n    case 'upper-alpha':\n      return LIST_STYLE_TYPE.UPPER_ALPHA;\n\n    case 'arabic-indic':\n      return LIST_STYLE_TYPE.ARABIC_INDIC;\n\n    case 'armenian':\n      return LIST_STYLE_TYPE.ARMENIAN;\n\n    case 'bengali':\n      return LIST_STYLE_TYPE.BENGALI;\n\n    case 'cambodian':\n      return LIST_STYLE_TYPE.CAMBODIAN;\n\n    case 'cjk-earthly-branch':\n      return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;\n\n    case 'cjk-heavenly-stem':\n      return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;\n\n    case 'cjk-ideographic':\n      return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;\n\n    case 'devanagari':\n      return LIST_STYLE_TYPE.DEVANAGARI;\n\n    case 'ethiopic-numeric':\n      return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;\n\n    case 'georgian':\n      return LIST_STYLE_TYPE.GEORGIAN;\n\n    case 'gujarati':\n      return LIST_STYLE_TYPE.GUJARATI;\n\n    case 'gurmukhi':\n      return LIST_STYLE_TYPE.GURMUKHI;\n\n    case 'hebrew':\n      return LIST_STYLE_TYPE.HEBREW;\n\n    case 'hiragana':\n      return LIST_STYLE_TYPE.HIRAGANA;\n\n    case 'hiragana-iroha':\n      return LIST_STYLE_TYPE.HIRAGANA_IROHA;\n\n    case 'japanese-formal':\n      return LIST_STYLE_TYPE.JAPANESE_FORMAL;\n\n    case 'japanese-informal':\n      return LIST_STYLE_TYPE.JAPANESE_INFORMAL;\n\n    case 'kannada':\n      return LIST_STYLE_TYPE.KANNADA;\n\n    case 'katakana':\n      return LIST_STYLE_TYPE.KATAKANA;\n\n    case 'katakana-iroha':\n      return LIST_STYLE_TYPE.KATAKANA_IROHA;\n\n    case 'khmer':\n      return LIST_STYLE_TYPE.KHMER;\n\n    case 'korean-hangul-formal':\n      return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;\n\n    case 'korean-hanja-formal':\n      return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;\n\n    case 'korean-hanja-informal':\n      return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;\n\n    case 'lao':\n      return LIST_STYLE_TYPE.LAO;\n\n    case 'lower-armenian':\n      return LIST_STYLE_TYPE.LOWER_ARMENIAN;\n\n    case 'malayalam':\n      return LIST_STYLE_TYPE.MALAYALAM;\n\n    case 'mongolian':\n      return LIST_STYLE_TYPE.MONGOLIAN;\n\n    case 'myanmar':\n      return LIST_STYLE_TYPE.MYANMAR;\n\n    case 'oriya':\n      return LIST_STYLE_TYPE.ORIYA;\n\n    case 'persian':\n      return LIST_STYLE_TYPE.PERSIAN;\n\n    case 'simp-chinese-formal':\n      return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;\n\n    case 'simp-chinese-informal':\n      return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;\n\n    case 'tamil':\n      return LIST_STYLE_TYPE.TAMIL;\n\n    case 'telugu':\n      return LIST_STYLE_TYPE.TELUGU;\n\n    case 'thai':\n      return LIST_STYLE_TYPE.THAI;\n\n    case 'tibetan':\n      return LIST_STYLE_TYPE.TIBETAN;\n\n    case 'trad-chinese-formal':\n      return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;\n\n    case 'trad-chinese-informal':\n      return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;\n\n    case 'upper-armenian':\n      return LIST_STYLE_TYPE.UPPER_ARMENIAN;\n\n    case 'disclosure-open':\n      return LIST_STYLE_TYPE.DISCLOSURE_OPEN;\n\n    case 'disclosure-closed':\n      return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;\n\n    case 'none':\n    default:\n      return LIST_STYLE_TYPE.NONE;\n  }\n};\nvar parseListStyle = function parseListStyle(style) {\n  var listStyleImage = Object(_background__WEBPACK_IMPORTED_MODULE_0__[\"parseBackgroundImage\"])(style.getPropertyValue('list-style-image'));\n  return {\n    listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),\n    listStyleImage: listStyleImage.length ? listStyleImage[0] : null,\n    listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))\n  };\n};\n\nvar parseListStylePosition = function parseListStylePosition(position) {\n  switch (position) {\n    case 'inside':\n      return LIST_STYLE_POSITION.INSIDE;\n\n    case 'outside':\n    default:\n      return LIST_STYLE_POSITION.OUTSIDE;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/listStyle.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/margin.js":
	/*!*******************************!*\
	  !*** ./src/parsing/margin.js ***!
	  \*******************************/
	/*! exports provided: parseMargin */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseMargin\", function() { return parseMargin; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n\n\n\nvar SIDES = ['top', 'right', 'bottom', 'left'];\nvar parseMargin = function parseMargin(style) {\n  return SIDES.map(function (side) {\n    return new _Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.getPropertyValue(\"margin-\".concat(side)));\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/margin.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/overflow.js":
	/*!*********************************!*\
	  !*** ./src/parsing/overflow.js ***!
	  \*********************************/
	/*! exports provided: OVERFLOW, parseOverflow */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OVERFLOW\", function() { return OVERFLOW; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseOverflow\", function() { return parseOverflow; });\n\n\nvar OVERFLOW = {\n  VISIBLE: 0,\n  HIDDEN: 1,\n  SCROLL: 2,\n  AUTO: 3\n};\nvar parseOverflow = function parseOverflow(overflow) {\n  switch (overflow) {\n    case 'hidden':\n      return OVERFLOW.HIDDEN;\n\n    case 'scroll':\n      return OVERFLOW.SCROLL;\n\n    case 'auto':\n      return OVERFLOW.AUTO;\n\n    case 'visible':\n    default:\n      return OVERFLOW.VISIBLE;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/overflow.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/overflowWrap.js":
	/*!*************************************!*\
	  !*** ./src/parsing/overflowWrap.js ***!
	  \*************************************/
	/*! exports provided: OVERFLOW_WRAP, parseOverflowWrap */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OVERFLOW_WRAP\", function() { return OVERFLOW_WRAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseOverflowWrap\", function() { return parseOverflowWrap; });\n\n\nvar OVERFLOW_WRAP = {\n  NORMAL: 0,\n  BREAK_WORD: 1\n};\nvar parseOverflowWrap = function parseOverflowWrap(overflow) {\n  switch (overflow) {\n    case 'break-word':\n      return OVERFLOW_WRAP.BREAK_WORD;\n\n    case 'normal':\n    default:\n      return OVERFLOW_WRAP.NORMAL;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/overflowWrap.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/padding.js":
	/*!********************************!*\
	  !*** ./src/parsing/padding.js ***!
	  \********************************/
	/*! exports provided: PADDING_SIDES, parsePadding */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PADDING_SIDES\", function() { return PADDING_SIDES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsePadding\", function() { return parsePadding; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n\n\n\nvar PADDING_SIDES = {\n  TOP: 0,\n  RIGHT: 1,\n  BOTTOM: 2,\n  LEFT: 3\n};\nvar SIDES = ['top', 'right', 'bottom', 'left'];\nvar parsePadding = function parsePadding(style) {\n  return SIDES.map(function (side) {\n    return new _Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.getPropertyValue(\"padding-\".concat(side)));\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/padding.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/position.js":
	/*!*********************************!*\
	  !*** ./src/parsing/position.js ***!
	  \*********************************/
	/*! exports provided: POSITION, parsePosition */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSITION\", function() { return POSITION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsePosition\", function() { return parsePosition; });\n\n\nvar POSITION = {\n  STATIC: 0,\n  RELATIVE: 1,\n  ABSOLUTE: 2,\n  FIXED: 3,\n  STICKY: 4\n};\nvar parsePosition = function parsePosition(position) {\n  switch (position) {\n    case 'relative':\n      return POSITION.RELATIVE;\n\n    case 'absolute':\n      return POSITION.ABSOLUTE;\n\n    case 'fixed':\n      return POSITION.FIXED;\n\n    case 'sticky':\n      return POSITION.STICKY;\n  }\n\n  return POSITION.STATIC;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/position.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/textDecoration.js":
	/*!***************************************!*\
	  !*** ./src/parsing/textDecoration.js ***!
	  \***************************************/
	/*! exports provided: TEXT_DECORATION_STYLE, TEXT_DECORATION, TEXT_DECORATION_LINE, parseTextDecoration */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_DECORATION_STYLE\", function() { return TEXT_DECORATION_STYLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_DECORATION\", function() { return TEXT_DECORATION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_DECORATION_LINE\", function() { return TEXT_DECORATION_LINE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextDecoration\", function() { return parseTextDecoration; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ \"./src/Color.js\");\n\n\n\nvar TEXT_DECORATION_STYLE = {\n  SOLID: 0,\n  DOUBLE: 1,\n  DOTTED: 2,\n  DASHED: 3,\n  WAVY: 4\n};\nvar TEXT_DECORATION = {\n  NONE: null\n};\nvar TEXT_DECORATION_LINE = {\n  UNDERLINE: 1,\n  OVERLINE: 2,\n  LINE_THROUGH: 3,\n  BLINK: 4\n};\n\nvar parseLine = function parseLine(line) {\n  switch (line) {\n    case 'underline':\n      return TEXT_DECORATION_LINE.UNDERLINE;\n\n    case 'overline':\n      return TEXT_DECORATION_LINE.OVERLINE;\n\n    case 'line-through':\n      return TEXT_DECORATION_LINE.LINE_THROUGH;\n  }\n\n  return TEXT_DECORATION_LINE.BLINK;\n};\n\nvar parseTextDecorationLine = function parseTextDecorationLine(line) {\n  if (line === 'none') {\n    return null;\n  }\n\n  return line.split(' ').map(parseLine);\n};\n\nvar parseTextDecorationStyle = function parseTextDecorationStyle(style) {\n  switch (style) {\n    case 'double':\n      return TEXT_DECORATION_STYLE.DOUBLE;\n\n    case 'dotted':\n      return TEXT_DECORATION_STYLE.DOTTED;\n\n    case 'dashed':\n      return TEXT_DECORATION_STYLE.DASHED;\n\n    case 'wavy':\n      return TEXT_DECORATION_STYLE.WAVY;\n  }\n\n  return TEXT_DECORATION_STYLE.SOLID;\n};\n\nvar parseTextDecoration = function parseTextDecoration(style) {\n  var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);\n\n  if (textDecorationLine === null) {\n    return TEXT_DECORATION.NONE;\n  }\n\n  var textDecorationColor = style.textDecorationColor ? new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.textDecorationColor) : null;\n  var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);\n  return {\n    textDecorationLine: textDecorationLine,\n    textDecorationColor: textDecorationColor,\n    textDecorationStyle: textDecorationStyle\n  };\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/textDecoration.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/textShadow.js":
	/*!***********************************!*\
	  !*** ./src/parsing/textShadow.js ***!
	  \***********************************/
	/*! exports provided: parseTextShadow */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextShadow\", function() { return parseTextShadow; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ \"./src/Color.js\");\n\n\n\nvar NUMBER = /^([+-]|\\d|\\.)$/i;\nvar parseTextShadow = function parseTextShadow(textShadow) {\n  if (textShadow === 'none' || typeof textShadow !== 'string') {\n    return null;\n  }\n\n  var currentValue = '';\n  var isLength = false;\n  var values = [];\n  var shadows = [];\n  var numParens = 0;\n  var color = null;\n\n  var appendValue = function appendValue() {\n    if (currentValue.length) {\n      if (isLength) {\n        values.push(parseFloat(currentValue));\n      } else {\n        color = new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](currentValue);\n      }\n    }\n\n    isLength = false;\n    currentValue = '';\n  };\n\n  var appendShadow = function appendShadow() {\n    if (values.length && color !== null) {\n      shadows.push({\n        color: color,\n        offsetX: values[0] || 0,\n        offsetY: values[1] || 0,\n        blur: values[2] || 0\n      });\n    }\n\n    values.splice(0, values.length);\n    color = null;\n  };\n\n  for (var i = 0; i < textShadow.length; i++) {\n    var c = textShadow[i];\n\n    switch (c) {\n      case '(':\n        currentValue += c;\n        numParens++;\n        break;\n\n      case ')':\n        currentValue += c;\n        numParens--;\n        break;\n\n      case ',':\n        if (numParens === 0) {\n          appendValue();\n          appendShadow();\n        } else {\n          currentValue += c;\n        }\n\n        break;\n\n      case ' ':\n        if (numParens === 0) {\n          appendValue();\n        } else {\n          currentValue += c;\n        }\n\n        break;\n\n      default:\n        if (currentValue.length === 0 && NUMBER.test(c)) {\n          isLength = true;\n        }\n\n        currentValue += c;\n    }\n  }\n\n  appendValue();\n  appendShadow();\n\n  if (shadows.length === 0) {\n    return null;\n  }\n\n  return shadows;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/textShadow.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/textTransform.js":
	/*!**************************************!*\
	  !*** ./src/parsing/textTransform.js ***!
	  \**************************************/
	/*! exports provided: TEXT_TRANSFORM, parseTextTransform */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_TRANSFORM\", function() { return TEXT_TRANSFORM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextTransform\", function() { return parseTextTransform; });\n\n\nvar TEXT_TRANSFORM = {\n  NONE: 0,\n  LOWERCASE: 1,\n  UPPERCASE: 2,\n  CAPITALIZE: 3\n};\nvar parseTextTransform = function parseTextTransform(textTransform) {\n  switch (textTransform) {\n    case 'uppercase':\n      return TEXT_TRANSFORM.UPPERCASE;\n\n    case 'lowercase':\n      return TEXT_TRANSFORM.LOWERCASE;\n\n    case 'capitalize':\n      return TEXT_TRANSFORM.CAPITALIZE;\n  }\n\n  return TEXT_TRANSFORM.NONE;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/textTransform.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/transform.js":
	/*!**********************************!*\
	  !*** ./src/parsing/transform.js ***!
	  \**********************************/
	/*! exports provided: parseTransform */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTransform\", function() { return parseTransform; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n\n\n\n\nvar toFloat = function toFloat(s) {\n  return parseFloat(s.trim());\n};\n\nvar MATRIX = /(matrix|matrix3d)\\((.+)\\)/;\nvar parseTransform = function parseTransform(style) {\n  var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform || // $FlowFixMe\n  style.msTransform || // $FlowFixMe\n  style.oTransform);\n\n  if (transform === null) {\n    return null;\n  }\n\n  return {\n    transform: transform,\n    transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin || // $FlowFixMe\n    style.msTransformOrigin || // $FlowFixMe\n    style.oTransformOrigin)\n  };\n}; // $FlowFixMe\n\nvar parseTransformOrigin = function parseTransformOrigin(origin) {\n  if (typeof origin !== 'string') {\n    var v = new _Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('0');\n    return [v, v];\n  }\n\n  var values = origin.split(' ').map(_Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create);\n  return [values[0], values[1]];\n}; // $FlowFixMe\n\n\nvar parseTransformMatrix = function parseTransformMatrix(transform) {\n  if (transform === 'none' || typeof transform !== 'string') {\n    return null;\n  }\n\n  var match = transform.match(MATRIX);\n\n  if (match) {\n    if (match[1] === 'matrix') {\n      var matrix = match[2].split(',').map(toFloat);\n      return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];\n    } else {\n      var matrix3d = match[2].split(',').map(toFloat);\n      return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];\n    }\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/transform.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/visibility.js":
	/*!***********************************!*\
	  !*** ./src/parsing/visibility.js ***!
	  \***********************************/
	/*! exports provided: VISIBILITY, parseVisibility */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VISIBILITY\", function() { return VISIBILITY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseVisibility\", function() { return parseVisibility; });\n\n\nvar VISIBILITY = {\n  VISIBLE: 0,\n  HIDDEN: 1,\n  COLLAPSE: 2\n};\nvar parseVisibility = function parseVisibility(visibility) {\n  switch (visibility) {\n    case 'hidden':\n      return VISIBILITY.HIDDEN;\n\n    case 'collapse':\n      return VISIBILITY.COLLAPSE;\n\n    case 'visible':\n    default:\n      return VISIBILITY.VISIBLE;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/visibility.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/word-break.js":
	/*!***********************************!*\
	  !*** ./src/parsing/word-break.js ***!
	  \***********************************/
	/*! exports provided: WORD_BREAK, parseWordBreak */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WORD_BREAK\", function() { return WORD_BREAK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseWordBreak\", function() { return parseWordBreak; });\n\n\nvar WORD_BREAK = {\n  NORMAL: 'normal',\n  BREAK_ALL: 'break-all',\n  KEEP_ALL: 'keep-all'\n};\nvar parseWordBreak = function parseWordBreak(wordBreak) {\n  switch (wordBreak) {\n    case 'break-all':\n      return WORD_BREAK.BREAK_ALL;\n\n    case 'keep-all':\n      return WORD_BREAK.KEEP_ALL;\n\n    case 'normal':\n    default:\n      return WORD_BREAK.NORMAL;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/word-break.js?");
	
	/***/ }),
	
	/***/ "./src/parsing/zIndex.js":
	/*!*******************************!*\
	  !*** ./src/parsing/zIndex.js ***!
	  \*******************************/
	/*! exports provided: parseZIndex */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseZIndex\", function() { return parseZIndex; });\n\n\nvar parseZIndex = function parseZIndex(zIndex) {\n  var auto = zIndex === 'auto';\n  return {\n    auto: auto,\n    order: auto ? 0 : parseInt(zIndex, 10)\n  };\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/zIndex.js?");
	
	/***/ }),
	
	/***/ "./src/renderer/CanvasRenderer.js":
	/*!****************************************!*\
	  !*** ./src/renderer/CanvasRenderer.js ***!
	  \****************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasRenderer; });\n/* harmony import */ var _drawing_Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drawing/Path */ \"./src/drawing/Path.js\");\n/* harmony import */ var _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parsing/textDecoration */ \"./src/parsing/textDecoration.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar addColorStops = function addColorStops(gradient, canvasGradient) {\n  var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {\n    return colorStop.stop;\n  }));\n  var f = 1 / Math.max(1, maxStop);\n  gradient.colorStops.forEach(function (colorStop) {\n    canvasGradient.addColorStop(Math.floor(Math.max(0, f * colorStop.stop)), colorStop.color.toString());\n  });\n};\n\nvar CanvasRenderer =\n/*#__PURE__*/\nfunction () {\n  function CanvasRenderer(canvas) {\n    _classCallCheck(this, CanvasRenderer);\n\n    this.canvas = canvas ? canvas : document.createElement('canvas');\n  }\n\n  _createClass(CanvasRenderer, [{\n    key: \"render\",\n    value: function render(options) {\n      this.ctx = this.canvas.getContext('2d');\n      this.options = options;\n      this.canvas.width = Math.floor(options.width * options.scale);\n      this.canvas.height = Math.floor(options.height * options.scale);\n      this.canvas.style.width = \"\".concat(options.width, \"px\");\n      this.canvas.style.height = \"\".concat(options.height, \"px\");\n      this.ctx.scale(this.options.scale, this.options.scale);\n      this.ctx.translate(-options.x, -options.y);\n      this.ctx.textBaseline = 'bottom';\n      options.logger.log(\"Canvas renderer initialized (\".concat(options.width, \"x\").concat(options.height, \" at \").concat(options.x, \",\").concat(options.y, \") with scale \").concat(this.options.scale));\n    }\n  }, {\n    key: \"clip\",\n    value: function clip(clipPaths, callback) {\n      var _this = this;\n\n      if (clipPaths.length) {\n        this.ctx.save();\n        clipPaths.forEach(function (path) {\n          _this.path(path);\n\n          _this.ctx.clip();\n        });\n      }\n\n      callback();\n\n      if (clipPaths.length) {\n        this.ctx.restore();\n      }\n    }\n  }, {\n    key: \"drawImage\",\n    value: function drawImage(image, source, destination) {\n      this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);\n    }\n  }, {\n    key: \"drawShape\",\n    value: function drawShape(path, color) {\n      this.path(path);\n      this.ctx.fillStyle = color.toString();\n      this.ctx.fill();\n    }\n  }, {\n    key: \"fill\",\n    value: function fill(color) {\n      this.ctx.fillStyle = color.toString();\n      this.ctx.fill();\n    }\n  }, {\n    key: \"getTarget\",\n    value: function getTarget() {\n      this.canvas.getContext('2d').setTransform(1, 0, 0, 1, 0, 0);\n      return Promise.resolve(this.canvas);\n    }\n  }, {\n    key: \"path\",\n    value: function path(_path) {\n      var _this2 = this;\n\n      this.ctx.beginPath();\n\n      if (Array.isArray(_path)) {\n        _path.forEach(function (point, index) {\n          var start = point.type === _drawing_Path__WEBPACK_IMPORTED_MODULE_0__[\"PATH\"].VECTOR ? point : point.start;\n\n          if (index === 0) {\n            _this2.ctx.moveTo(start.x, start.y);\n          } else {\n            _this2.ctx.lineTo(start.x, start.y);\n          }\n\n          if (point.type === _drawing_Path__WEBPACK_IMPORTED_MODULE_0__[\"PATH\"].BEZIER_CURVE) {\n            _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);\n          }\n        });\n      } else {\n        this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);\n      }\n\n      this.ctx.closePath();\n    }\n  }, {\n    key: \"rectangle\",\n    value: function rectangle(x, y, width, height, color) {\n      this.ctx.fillStyle = color.toString();\n      this.ctx.fillRect(x, y, width, height);\n    }\n  }, {\n    key: \"renderLinearGradient\",\n    value: function renderLinearGradient(bounds, gradient) {\n      var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);\n      addColorStops(gradient, linearGradient);\n      this.ctx.fillStyle = linearGradient;\n      this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);\n    }\n  }, {\n    key: \"renderRadialGradient\",\n    value: function renderRadialGradient(bounds, gradient) {\n      var _this3 = this;\n\n      var x = bounds.left + gradient.center.x;\n      var y = bounds.top + gradient.center.y;\n      var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);\n\n      if (!radialGradient) {\n        return;\n      }\n\n      addColorStops(gradient, radialGradient);\n      this.ctx.fillStyle = radialGradient;\n\n      if (gradient.radius.x !== gradient.radius.y) {\n        // transforms for elliptical radial gradient\n        var midX = bounds.left + 0.5 * bounds.width;\n        var midY = bounds.top + 0.5 * bounds.height;\n        var f = gradient.radius.y / gradient.radius.x;\n        var invF = 1 / f;\n        this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {\n          return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);\n        });\n      } else {\n        this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);\n      }\n    }\n  }, {\n    key: \"renderRepeat\",\n    value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {\n      this.path(path);\n      this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');\n      this.ctx.translate(offsetX, offsetY);\n      this.ctx.fill();\n      this.ctx.translate(-offsetX, -offsetY);\n    }\n  }, {\n    key: \"renderTextNode\",\n    value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {\n      var _this4 = this;\n\n      this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');\n      textBounds.forEach(function (text) {\n        _this4.ctx.fillStyle = color.toString();\n\n        if (textShadows && text.text.trim().length) {\n          textShadows.slice(0).reverse().forEach(function (textShadow) {\n            _this4.ctx.shadowColor = textShadow.color.toString();\n            _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;\n            _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;\n            _this4.ctx.shadowBlur = textShadow.blur;\n\n            _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);\n          });\n          _this4.ctx.shadowColor = '';\n          _this4.ctx.shadowOffsetX = 0;\n          _this4.ctx.shadowOffsetY = 0;\n          _this4.ctx.shadowBlur = 0;\n        } else {\n          _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);\n        }\n\n        if (textDecoration !== null) {\n          var textDecorationColor = textDecoration.textDecorationColor || color;\n          textDecoration.textDecorationLine.forEach(function (textDecorationLine) {\n            switch (textDecorationLine) {\n              case _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__[\"TEXT_DECORATION_LINE\"].UNDERLINE:\n                // Draws a line at the baseline of the font\n                // TODO As some browsers display the line as more than 1px if the font-size is big,\n                // need to take that into account both in position and size\n                var _this4$options$fontMe = _this4.options.fontMetrics.getMetrics(font),\n                    baseline = _this4$options$fontMe.baseline;\n\n                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);\n\n                break;\n\n              case _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__[\"TEXT_DECORATION_LINE\"].OVERLINE:\n                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);\n\n                break;\n\n              case _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__[\"TEXT_DECORATION_LINE\"].LINE_THROUGH:\n                // TODO try and find exact position for line-through\n                var _this4$options$fontMe2 = _this4.options.fontMetrics.getMetrics(font),\n                    middle = _this4$options$fontMe2.middle;\n\n                _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);\n\n                break;\n            }\n          });\n        }\n      });\n    }\n  }, {\n    key: \"resizeImage\",\n    value: function resizeImage(image, size) {\n      if (image.width === size.width && image.height === size.height) {\n        return image;\n      }\n\n      var canvas = this.canvas.ownerDocument.createElement('canvas');\n      canvas.width = size.width;\n      canvas.height = size.height;\n      var ctx = canvas.getContext('2d');\n      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);\n      return canvas;\n    }\n  }, {\n    key: \"setOpacity\",\n    value: function setOpacity(opacity) {\n      this.ctx.globalAlpha = opacity;\n    }\n  }, {\n    key: \"transform\",\n    value: function transform(offsetX, offsetY, matrix, callback) {\n      this.ctx.save();\n      this.ctx.translate(offsetX, offsetY);\n      this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);\n      this.ctx.translate(-offsetX, -offsetY);\n      callback();\n      this.ctx.restore();\n    }\n  }]);\n\n  return CanvasRenderer;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/renderer/CanvasRenderer.js?");
	
	/***/ }),
	
	/***/ "./src/renderer/ForeignObjectRenderer.js":
	/*!***********************************************!*\
	  !*** ./src/renderer/ForeignObjectRenderer.js ***!
	  \***********************************************/
	/*! exports provided: default, createForeignObjectSVG, loadSerializedSVG */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ForeignObjectRenderer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createForeignObjectSVG\", function() { return createForeignObjectSVG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSerializedSVG\", function() { return loadSerializedSVG; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ForeignObjectRenderer =\n/*#__PURE__*/\nfunction () {\n  function ForeignObjectRenderer(element) {\n    _classCallCheck(this, ForeignObjectRenderer);\n\n    this.element = element;\n  }\n\n  _createClass(ForeignObjectRenderer, [{\n    key: \"render\",\n    value: function render(options) {\n      var _this = this;\n\n      this.options = options;\n      this.canvas = document.createElement('canvas');\n      this.ctx = this.canvas.getContext('2d');\n      this.canvas.width = Math.floor(options.width) * options.scale;\n      this.canvas.height = Math.floor(options.height) * options.scale;\n      this.canvas.style.width = \"\".concat(options.width, \"px\");\n      this.canvas.style.height = \"\".concat(options.height, \"px\");\n      this.ctx.scale(options.scale, options.scale);\n      options.logger.log(\"ForeignObject renderer initialized (\".concat(options.width, \"x\").concat(options.height, \" at \").concat(options.x, \",\").concat(options.y, \") with scale \").concat(options.scale));\n      var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);\n      return loadSerializedSVG(svg).then(function (img) {\n        if (options.backgroundColor) {\n          _this.ctx.fillStyle = options.backgroundColor.toString();\n\n          _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);\n        }\n\n        _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);\n\n        return _this.canvas;\n      });\n    }\n  }]);\n\n  return ForeignObjectRenderer;\n}();\n\n\nvar createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {\n  var xmlns = 'http://www.w3.org/2000/svg';\n  var svg = document.createElementNS(xmlns, 'svg');\n  var foreignObject = document.createElementNS(xmlns, 'foreignObject');\n  svg.setAttributeNS(null, 'width', width);\n  svg.setAttributeNS(null, 'height', height);\n  foreignObject.setAttributeNS(null, 'width', '100%');\n  foreignObject.setAttributeNS(null, 'height', '100%');\n  foreignObject.setAttributeNS(null, 'x', x);\n  foreignObject.setAttributeNS(null, 'y', y);\n  foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');\n  svg.appendChild(foreignObject);\n  foreignObject.appendChild(node);\n  return svg;\n};\nvar loadSerializedSVG = function loadSerializedSVG(svg) {\n  return new Promise(function (resolve, reject) {\n    var img = new Image();\n\n    img.onload = function () {\n      return resolve(img);\n    };\n\n    img.onerror = reject;\n    img.src = \"data:image/svg+xml;charset=utf-8,\".concat(encodeURIComponent(new XMLSerializer().serializeToString(svg)));\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/renderer/ForeignObjectRenderer.js?");
	
	/***/ })
	
	/******/ })["default"];
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//This file contains the ES6 extensions to the core Promises/A+ API
	
	var Promise = __webpack_require__(4);
	
	module.exports = Promise;
	
	/* Static Functions */
	
	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');
	
	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._81 = 1;
	  p._65 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;
	
	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;
	
	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};
	
	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);
	
	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._81 === 3) {
	            val = val._65;
	          }
	          if (val._81 === 1) return res(i, val._65);
	          if (val._81 === 2) reject(val._65);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};
	
	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};
	
	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};
	
	/* Prototype Methods */
	
	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(4);
	
	var DEFAULT_WHITELIST = [
	  ReferenceError,
	  TypeError,
	  RangeError
	];
	
	var enabled = false;
	exports.disable = disable;
	function disable() {
	  enabled = false;
	  Promise._10 = null;
	  Promise._97 = null;
	}
	
	exports.enable = enable;
	function enable(options) {
	  options = options || {};
	  if (enabled) disable();
	  enabled = true;
	  var id = 0;
	  var displayId = 0;
	  var rejections = {};
	  Promise._10 = function (promise) {
	    if (
	      promise._81 === 2 && // IS REJECTED
	      rejections[promise._72]
	    ) {
	      if (rejections[promise._72].logged) {
	        onHandled(promise._72);
	      } else {
	        clearTimeout(rejections[promise._72].timeout);
	      }
	      delete rejections[promise._72];
	    }
	  };
	  Promise._97 = function (promise, err) {
	    if (promise._45 === 0) { // not yet handled
	      promise._72 = id++;
	      rejections[promise._72] = {
	        displayId: null,
	        error: err,
	        timeout: setTimeout(
	          onUnhandled.bind(null, promise._72),
	          // For reference errors and type errors, this almost always
	          // means the programmer made a mistake, so log them after just
	          // 100ms
	          // otherwise, wait 2 seconds to see if they get handled
	          matchWhitelist(err, DEFAULT_WHITELIST)
	            ? 100
	            : 2000
	        ),
	        logged: false
	      };
	    }
	  };
	  function onUnhandled(id) {
	    if (
	      options.allRejections ||
	      matchWhitelist(
	        rejections[id].error,
	        options.whitelist || DEFAULT_WHITELIST
	      )
	    ) {
	      rejections[id].displayId = displayId++;
	      if (options.onUnhandled) {
	        rejections[id].logged = true;
	        options.onUnhandled(
	          rejections[id].displayId,
	          rejections[id].error
	        );
	      } else {
	        rejections[id].logged = true;
	        logError(
	          rejections[id].displayId,
	          rejections[id].error
	        );
	      }
	    }
	  }
	  function onHandled(id) {
	    if (rejections[id].logged) {
	      if (options.onHandled) {
	        options.onHandled(rejections[id].displayId, rejections[id].error);
	      } else if (!rejections[id].onUnhandled) {
	        console.warn(
	          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
	        );
	        console.warn(
	          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
	          rejections[id].displayId + '.'
	        );
	      }
	    }
	  }
	}
	
	function logError(id, error) {
	  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
	  var errStr = (error && (error.stack || error)) + '';
	  errStr.split('\n').forEach(function (line) {
	    console.warn('  ' + line);
	  });
	}
	
	function matchWhitelist(error, list) {
	  return list.some(function (cls) {
	    return error instanceof cls;
	  });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v16.8.6
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	/*
	 Modernizr 3.0.0pre (Custom Build) | MIT
	*/
	'use strict';var aa=__webpack_require__(1),n=__webpack_require__(2),r=__webpack_require__(28);function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
	function x(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:x("227");function ca(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}}
	var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,l){da=!1;ea=null;ca.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da){if(da){var k=ea;da=!1;ea=null}else x("198"),k=void 0;fa||(fa=!0,ha=k)}}var la=null,ma={};
	function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x("96",a);if(!oa[c]){b.extractEvents?void 0:x("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x("98",d,a)}}}}
	function qa(a,b,c){ra[a]?x("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null}function xa(a,b){null==b?x("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
	function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
	var Ba={injectEventPluginOrder:function(a){la?x("101"):void 0;la=Array.prototype.slice.call(a);na()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x("102",c):void 0,ma[c]=d,b=!0)}b&&na()}};
	function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?x("231",b,typeof c):void 0;
	return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x("95"):void 0,fa))throw a=ha,fa=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}
	function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x("33")}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
	function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}
	function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
	Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
	var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
	function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return!0}function gb(){return!1}
	function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
	n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb)},persist:function(){this.isPersistent=fb},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
	b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
	y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
	function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb}var kb=y.extend({data:null}),lb=y.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
	var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
	captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
	function ub(a,b){switch(a){case "keyup":return-1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function vb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data,a===rb&&tb?null:a;default:return null}}
	function yb(a,b){if(wb)return"compositionend"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
	var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb="value"in bb?bb.value:bb.textContent,wb=
	!0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b)}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a])}}
	function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb()}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
	function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
	null;delete a[b]}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a))}function Sb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
	var Ub=/^(.*)[\\\/]/,z="function"===typeof Symbol&&Symbol.for,Vb=z?Symbol.for("react.element"):60103,Wb=z?Symbol.for("react.portal"):60106,Xb=z?Symbol.for("react.fragment"):60107,Yb=z?Symbol.for("react.strict_mode"):60108,Zb=z?Symbol.for("react.profiler"):60114,$b=z?Symbol.for("react.provider"):60109,ac=z?Symbol.for("react.context"):60110,bc=z?Symbol.for("react.concurrent_mode"):60111,cc=z?Symbol.for("react.forward_ref"):60112,dc=z?Symbol.for("react.suspense"):60113,ec=z?Symbol.for("react.memo"):
	60115,fc=z?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return"function"===typeof a?a:null}
	function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return"ConcurrentMode";case Xb:return"Fragment";case Wb:return"Portal";case Zb:return"Profiler";case Yb:return"StrictMode";case dc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return"Context.Consumer";case $b:return"Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
	")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
	var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
	function oc(a){if(lc.call(nc,a))return!0;if(lc.call(mc,a))return!1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return!1}function pc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
	function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var D={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new C(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null)});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new C(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new C(a,3,!0,a,null)});
	["capture","download"].forEach(function(a){D[a]=new C(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){D[a]=new C(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null)});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
	sc);D[b]=new C(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new C(a,1,!1,a.toLowerCase(),null)});
	function tc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
	function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function vc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
	function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1)}
	function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
	function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
	function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a)}
	function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc),Ec=Dc=null)}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a))}function Lc(a,b,c){"focus"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc()}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
	function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
	var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value)}},Qc=y.extend({view:null,detail:null}),Rc={Alt:"altKey",
	Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
	var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
	var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
	dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k="mouse";
	else if("pointerout"===a||"pointerover"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=
	f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
	function dd(a,b){if(bd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return!1;return!0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x("188"):void 0}
	function gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling}x("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
	void 0:x("189")}}c.alternate!==d?x("190"):void 0}3!==c.tag?x("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
	var id=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
	var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
	116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ld(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return"keypress"===
	a.type?ld(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
	a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
	["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
	["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b}
	[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
	["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0)});td.forEach(function(a){wd(a,!1)});
	var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
	pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
	zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l))}Da(g)}}var Bd=!0;
	function E(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1)}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0)}function Cd(a,b){Hb(Dd,a,b)}
	function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a)}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
	function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Kd(c)}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
	function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Jd(a.document)}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
	if(null===(t=m.firstChild))break;p=m;m=t}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode}m=t}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}
	function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,
	d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
	var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
	function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y.getPooled(Sd.select,Ud,a,b),a.type="select",a.target=Td,Qa(a),a)}
	var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1,Xd(c,d);case "selectionchange":if(Rd)break;
	case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
	function $d(a,b){a=n({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
	function be(a,b){null!=b.dangerouslySetInnerHTML?x("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:uc(c)}}
	function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var ie=void 0,je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
	function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
	var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
	floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a]})});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
	function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var pe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x("61")),null!=b.style&&"object"!==typeof b.style?x("62",""):void 0)}
	function re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
	function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E(e,a)}c[e]=!0}}}function te(){}var ue=null,ve=null;
	function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function xe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
	var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback;
	function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d)}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
	!0):ae(a,!!e.multiple,e.multiple?[]:"",!1))}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Fe=[],Ge=-1;function F(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--)}function G(a,b){Ge++;Fe[Ge]=a.current;a.current=b}var He={},H={current:He},I={current:!1},Ie=He;
	function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F(I,a);F(H,a)}function Le(a){F(I,a);F(H,a)}
	function Me(a,b,c){H.current!==He?x("168"):void 0;G(H,b,a);G(I,c,a)}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x("108",ic(b)||"Unknown",e);return n({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H.current;G(H,b,a);G(I,I.current,a);return!0}
	function Pe(a,b,c){var d=a.stateNode;d?void 0:x("169");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F(I,a),F(H,a),G(H,b,a)):F(I,a);G(I,c,a)}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
	function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
	function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function K(a,b,c,d){return new Ue(a,b,c,d)}
	function Ve(a){a=a.prototype;return!(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
	function Xe(a,b){var c=a.alternate;null===c?(c=K(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
	c.index=a.index;c.ref=a.ref;return c}
	function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
	14;break a;case fc:g=16;d=null;break a}x("130",null==a?a:typeof a,"")}b=K(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K(6,a,null,b);a.expirationTime=c;return a}
	function bf(a,b,c){b=K(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a)}
	function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):
	b>c&&cf(a,b)}df(0,a)}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a)}
	function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function L(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
	function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new aa.Component).refs;
	function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
	var tf={isMounted:function(a){return(a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
	sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c)}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
	function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M(f):(e=J(b)?Ie:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null)}
	function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M(f):(f=J(b)?Ie:H.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
	typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var zf=Array.isArray;
	function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x("309"):void 0,d=c.stateNode);d?void 0:x("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?x("284"):void 0;c._owner?void 0:x("290",a)}return a}
	function Bf(a,b){"textarea"!==a.type&&x("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
	function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
	2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
	c.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||
	hc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b)}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c)}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
	a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
	q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x("150"):void 0;h=l.call(h);null==h?x("151"):void 0;
	for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
	w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
	k.sibling}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h)}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=bf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
	""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x("152",h.displayName||h.name||"Component")}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x("174"):void 0;return a}
	function Jf(a,b){G(Hf,b,a);G(Gf,a,a);G(N,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c)}F(N,a);G(N,b,a)}function Kf(a){F(N,a);F(Gf,a);F(Hf,a)}function Lf(a){If(Hf.current);var b=If(N.current);var c=he(b,a.type);b!==c&&(G(Gf,a,a),G(N,c,a))}function Mf(a){Gf.current===a&&(F(N,a),F(Gf,a))}
	var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O=null,P=null,Yf=null,Q=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x("321")}function gg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return!1;return!0}
	function hg(a,b,c,d,e,f){Wf=f;Xf=b;P=null!==a?a.memoizedState:null;Vf.current=null===P?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P=null!==a?a.memoizedState:null,Zf=Yf,ag=Q=O=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O&&null!==O.next;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;a?x("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0}
	function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?Yf=Q=a:Q=Q.next=a;return Q}function ng(){if(null!==Zf)Q=Zf,Zf=Q.next,O=P,P=null!==O?O.next:null;else{null===P?x("310"):void 0;O=P;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};Q=null===Q?Yf=a:Q.next=a;P=O.next}return Q}function og(a,b){return"function"===typeof b?b(a):b}
	function pg(a){var b=ng(),c=b.queue;null===c?x("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
	d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
	function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d)}
	function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d)}function ug(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function vg(){}
	function wg(a,b,c){25>eg?void 0:x("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===
	d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e)}}
	var kg={readContext:M,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
	useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return[d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
	lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return[b.memoizedState,a]},useDebugValue:vg},jg={readContext:M,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
	b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;
	function Ag(a,b){var c=K(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
	function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c)}xg=a;yg=Ee(b)}else a.effectTag|=2,zg=!1,xg=a}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a}function Eg(a){if(a!==xg)return!1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return!0}function Fg(){yg=xg=null;zg=!1}
	var Gg=Tb.ReactCurrentOwner,qg=!1;function S(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d)}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
	function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
	function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Mg(a,b,c,d,e){var f=J(c)?Ie:H.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
	function Og(a,b,c,d,e){if(J(c)){var f=!0;Oe(b)}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d,e),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
	"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
	g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p="function"===
	typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
	typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
	t),g.props=d,g.state=t,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}
	function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo)}
	function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
	b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
	function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
	function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
	b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J(d)){var f=!0;Oe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
	c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L(a.type,f),d,c);break;default:x("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
	e=b.elementType===d?e:L(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S(a,b,d,c),Fg());b=b.child}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
	g=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Hg(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
	c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
	(k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?
	null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=L(e,b.pendingProps),f=L(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===
	d?e:L(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e,c),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x("156")}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G(Vg,c._currentValue,a);c._currentValue=b}function Zg(a){var b=Vg.current;F(Vg,a);a.type._context._currentValue=b}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null}
	function M(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x("308"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
	function ch(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
	function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b)}
	function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
	function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case sf:Pg=!0}return d}
	function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
	32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}
	function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x("191",c):void 0;c.call(d)}a=a.nextEffect}}
	function jh(a,b){return{value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};mh=function(){};
	nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te)}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
	c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
	(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b)}};oh=function(a,b,c,d){c!==d&&kh(b)};
	var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){sh(a,c)}else b.current=null}
	function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
	function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
	c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
	function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){sh(e,f)}}c=c.next}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){sh(a,f)}break;case 5:rh(a);break;case 4:wh(a)}}
	function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
	function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return}x("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x("161")}c.effectTag&16&&(ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
	2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
	else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
	function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
	(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
	function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b)}break;case 6:null===b.stateNode?x("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
	b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:x("163")}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b)};return c}
	function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
	function Gh(a){switch(a.tag){case 1:J(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Le(a),b=a.effectTag,0!==(b&64)?x("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(a),null;case 10:return Zg(a),null;default:return null}}
	var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T=null,Lh=null,U=0,Mh=-1,Nh=!1,V=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b)}a=a.return}Lh=null;U=0;Mh=-1;Nh=!1;T=null}
	function Th(){for(;null!==V;){var a=V.effectTag;a&16&&ke(V.stateNode,"");if(a&128){var b=V.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null))}switch(a&14){case 2:yh(V);V.effectTag&=-3;break;case 6:yh(V);V.effectTag&=-3;zh(V.alternate,V);break;case 4:zh(V.alternate,V);break;case 8:a=V,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}V=V.nextEffect}}
	function Uh(){for(;null!==V;){if(V.effectTag&256)a:{var a=V.alternate,b=V;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x("163")}}V=V.nextEffect}}
	function Vh(a,b){for(;null!==V;){var c=V.effectTag;if(c&36){var d=V.alternate,e=V,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
	e.child.stateNode;break;case 1:g=e.child.stateNode}hh(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x("163")}}c&128&&(e=V.ref,null!==e&&(f=V.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V=V.nextEffect}}
	function Wh(a,b){Rh=Qh=Ph=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f)}catch(g){d=!0,e=g}d&&sh(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Xh(a,c);X||W||Yh(1073741823,!1)}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh()}
	function Zh(a,b){Oh=Kh=!0;a.current===b?x("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V=d;null!==V;){e=!1;var f=void 0;try{Uh()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){e=!1;
	f=void 0;try{Th()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V=d;null!==V;){e=!1;f=void 0;try{Vh(a,c)}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=r.unstable_runWithPriority(r.unstable_NormalPriority,function(){return Ae(g)});Rh=g}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
	b>c?b:c;0===b&&(Fh=null);$h(a,b)}
	function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
	128);else if(g){var l=If(N.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E(ab[k],e);break;case "source":E("error",e);break;case "img":case "image":case "link":E("error",e);E("load",e);break;case "form":E("reset",e);E("submit",e);break;case "details":E("toggle",e);break;case "input":wc(e,m);E("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
	{wasMultiple:!!m.multiple};E("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m),E("invalid",e),se(p,"onChange")}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
	(e.onclick=te)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b)}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),"select"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E("load",
	p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E(ab[h],p);h=m;break;case "source":E("error",p);h=m;break;case "img":case "image":case "link":E("error",p);E("load",p);h=m;break;case "form":E("reset",p);E("submit",p);h=m;break;case "details":E("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});E("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
	m);h=be(p,m);E("invalid",p);se(t,"onChange");break;default:h=m}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A))}switch(k){case "input":Rb(p);
	Ac(p,m,!1);break;case "textarea":Rb(p);ee(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te)}(g=we(f,g))&&kh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?x("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
	typeof g&&(null===b.stateNode?x("166"):void 0),e=If(Hf.current),If(N.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
	b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J(b.type)&&Ke(b);break;case 18:break;default:x("156")}T=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==T)return T;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
	(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gh(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
	function bi(a){var b=Tg(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
	function ci(a,b){Kh?x("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==Lh||null===T)Sh(),Lh=a,U=d,T=Xe(Lh.current,null,U),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!di();)T=bi(T);else for(;null!==T;)T=bi(T)}catch(u){if(Yg=Xg=Wg=null,lg(),null===T)e=!0,Dh(u);else{null===T?x("271"):void 0;var f=T,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
	m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v}m=m.return}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
	64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((ic(k.type)||"A React component")+
	" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k))}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
	h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return}while(null!==h)}T=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{c=a.current.alternate;null===c?x("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
	b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c)}}
	function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823))}
	function mf(a,b){var c=r.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U;else{switch(c){case r.unstable_ImmediatePriority:d=1073741823;break;case r.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case r.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case r.unstable_LowPriority:case r.unstable_IdlePriority:d=1;break;default:x("313")}null!==Lh&&d===U&&--d}c===r.unstable_UserBlockingPriority&&
	(0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c)}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b))}
	function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
	function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U&&b>U&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x("185")))}function ki(a,b,c,d,e){return r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y=null,mi=0,ni=void 0,W=!1,oi=null,Z=0,gi=0,pi=!1,qi=null,X=!1,ri=!1,si=null,ti=r.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((r.unstable_now()-ti)/10|0)}
	function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&r.unstable_cancelCallback(ni)}mi=b;a=r.unstable_now()-ti;ni=r.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a})}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c)}function $h(a,b){a.expirationTime=b;a.finishedWork=null}
	function lf(){if(W)return vi;Ci();if(0===Z||1===Z)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y?(li=Y=a,a.nextScheduledRoot=a):(Y=Y.nextScheduledRoot=a,Y.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W||(X?ri&&(oi=a,Z=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b))}
	function Ci(){var a=0,b=null;if(null!==Y)for(var c=Y,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y?x("244"):void 0;if(d===d.nextScheduledRoot){li=Y=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y){Y=c;Y.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===Y)break;if(1073741823===
	a)break;c=d;d=d.nextScheduledRoot}}oi=b;Z=a}var Ei=!1;function di(){return Ei?!0:r.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot}while(a!==li)}Yh(0,!0)}finally{Ei=!1}}
	function Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z&&a<=Z&&!(Ei&&ui>Z);)Di(oi,Z,ui>Z),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z&&a<=Z;)Di(oi,Z,!1),Ci();b&&(mi=0,ni=null);0!==Z&&yi(oi,Z);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W?x("253"):void 0;oi=a;Z=b;Di(a,b,!1);Yh(1073741823,!1)}
	function Di(a,b,c){W?x("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)))}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W=!1}
	function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){Zh(a,b)})}function Dh(a){null===oi?x("246"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a)}function Gi(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||W||Yh(1073741823,!1)}}
	function Hi(a,b){if(X&&!ri){ri=!0;try{return a(b)}finally{ri=!1}}return a(b)}function Ii(a,b,c){X||W||0===gi||(Yh(gi,!1),gi=0);var d=X;X=!0;try{return r.unstable_runWithPriority(r.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X=d)||W||Yh(1073741823,!1)}}
	function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);x("171");g=void 0}if(1===c.tag){var h=c.type;if(J(h)){c=Ne(c,h,g);break a}}c=g}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
	of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x("90");Sb(d);yc(d,e)}}}break;case "textarea":de(a,c);break;case "select":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1)}};
	function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ni.prototype.render=function(a){this._defer?void 0:x("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
	Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
	Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
	null,this._defer=!1};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
	Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x("191",c):void 0;c()}}};
	function Pi(a,b,c){b=K(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
	Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
	Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Qi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W||0===gi||(Yh(gi,!1),gi=0)};
	function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
	function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a)}}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Li(f._internalRoot)}
	function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x("200");return Mi(a,b,null,c)}
	var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x("188"):x("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x("200");null==a||void 0===a._reactInternalFiber?
	x("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W?x("187"):void 0;var c=X;X=!0;try{return ki(a,b)}finally{X=c,Yh(1073741823,!1)}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
	X;X=!0;try{ki(a)}finally{(X=b)||W||Yh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa)},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
	(function(a){var b=a.findFiberByHostInstance;return Te(n({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;module.exports=Xi.default||Xi;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  if (false) {
	    // This branch is unreachable because this function is only called
	    // in production, but the condition is true only in development.
	    // Therefore if the branch is still here, dead code elimination wasn't
	    // properly applied.
	    // Don't change the message. React DevTools relies on it. Also make sure
	    // this message doesn't occur elsewhere in this function, or it will cause
	    // a false positive.
	    throw new Error('^_^');
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}
	
	if (true) {
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = __webpack_require__(17);
	} else {
	  module.exports = require('./cjs/react-dom.development.js');
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// @remove-on-eject-begin
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	// @remove-on-eject-end
	'use strict';
	
	if (typeof Promise === 'undefined') {
	  // Rejection tracking prevents a common issue where React gets into an
	  // inconsistent state due to an error, but it gets swallowed by a Promise,
	  // and the user has no idea what causes React's erratic future behavior.
	  __webpack_require__(16).enable();
	  window.Promise = __webpack_require__(15);
	}
	
	// fetch() polyfill for making API calls.
	__webpack_require__(41);
	
	// Object.assign() is commonly used with React.
	// It will use the native implementation if it's present and isn't buggy.
	Object.assign = __webpack_require__(2);


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Avengers = __webpack_require__(21);
	
	var _Avengers2 = _interopRequireDefault(_Avengers);
	
	var _Remain = __webpack_require__(22);
	
	var _Remain2 = _interopRequireDefault(_Remain);
	
	var _Reset = __webpack_require__(23);
	
	var _Reset2 = _interopRequireDefault(_Reset);
	
	var _Thanos = __webpack_require__(24);
	
	var _Thanos2 = _interopRequireDefault(_Thanos);
	
	var _systemSettings = __webpack_require__(3);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	var _finger_snap_sound = __webpack_require__(40);
	
	var _finger_snap_sound2 = _interopRequireDefault(_finger_snap_sound);
	
	var _disappear_sound = __webpack_require__(39);
	
	var _disappear_sound2 = _interopRequireDefault(_disappear_sound);
	
	var _disintegrate = __webpack_require__(6);
	
	var _disintegrate2 = _interopRequireDefault(_disintegrate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.addUser = _this.addUser.bind(_this);
	    _this.removeUser = _this.removeUser.bind(_this);
	    _this.changeRemainCount = _this.changeRemainCount.bind(_this);
	    _this.clickThanos = _this.clickThanos.bind(_this);
	    _this.forbiddenOtherClick = _this.forbiddenOtherClick.bind(_this);
	    _this.byeAvenger = _this.byeAvenger.bind(_this);
	    _this.deleteAvenger = _this.deleteAvenger.bind(_this);
	    _this.activeDustEffect = _this.activeDustEffect.bind(_this);
	    _this.activeDisintegrate = _this.activeDisintegrate.bind(_this);
	    _this.state = {
	      usersCount: _systemSettings.DEFAULT_USER_NUMBER,
	      userList: _systemSettings.DEFAULT_USER_LIST,
	      remainCount: _systemSettings.DEFAULT_REMAIN_NUMBER,
	      imageDataArray: [],
	      result: "",
	      isShowReset: false,
	      isThanosClicked: false,
	      selectedAvenger: 0,
	      handleUserAddClick: function handleUserAddClick() {
	        _this.addUser();
	      },
	      handleUserRemoveClick: function handleUserRemoveClick() {
	        _this.removeUser();
	      },
	      handleRemainIncreaseClick: function handleRemainIncreaseClick() {
	        _this.changeRemainCount(_systemSettings.REMAIN_INCREASE);
	      },
	      handleRemainWithdrawClick: function handleRemainWithdrawClick() {
	        _this.changeRemainCount(_systemSettings.REMAIN_WITHDRAW);
	      },
	      handleThanosClick: function handleThanosClick() {
	        _this.clickThanos();
	      }
	    };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _disintegrate2.default.init();
	    }
	  }, {
	    key: 'noticeResult',
	
	
	    // show result
	    value: function noticeResult() {
	      var userNameList = [];
	      var nameStr = "";
	      this.state.userList.forEach(function (userId) {
	        for (var i = 1; i <= _systemSettings.AVENGER_NAMES.length; i++) {
	          if (userId === i) {
	            userNameList.push(_systemSettings.AVENGER_NAMES[i - 1]);
	          }
	        }
	      });
	      for (var i = 0; i < userNameList.length; i++) {
	        nameStr += userNameList[i];
	        if (i !== userNameList.length - 1) {
	          nameStr += ", ";
	        }
	      }
	      this.setState({ result: nameStr + '(\uC774)\uAC00 \uC0B4\uC544\uB0A8\uC558\uC2B5\uB2C8\uB2E4.' });
	      this.setState({ isShowReset: true });
	    }
	
	    // active disintegrate
	
	  }, {
	    key: 'activeDisintegrate',
	    value: function activeDisintegrate() {
	      new Audio(_disappear_sound2.default).play();
	      var avenger = document.querySelector('#user_' + this.state.selectedAvenger);
	      var disObj = _disintegrate2.default.getDisObj(avenger);
	      _disintegrate2.default.createSimultaneousParticles(disObj);
	      // delete
	      setTimeout(this.deleteAvenger, 350);
	      // restart Bye
	      setTimeout(this.byeAvenger, 1000);
	    }
	
	    // active dust effect
	
	  }, {
	    key: 'activeDustEffect',
	    value: function activeDustEffect() {
	      var id = this.state.selectedAvenger;
	      document.getElementById('user_' + id).setAttribute("data-dis-type", "simultaneous");
	      document.getElementById('user_' + id).setAttribute("data-dis-particle-type", "DustParticle");
	      document.getElementById('user_' + id).setAttribute("data-dis-reduction-factor", "5");
	      var DustParticle = function DustParticle() {
	        var _this2 = this;
	
	        this.name = "DustParticle";
	        this.animationDuration = 1500;
	        this.size = 5;
	        this.speedX = Math.random();
	        this.speedY = Math.random() * -1;
	        this.draw = function (ctx, percentComplete) {
	          ctx.beginPath();
	          ctx.fillRect(_this2.startX - _this2.size / 2, _this2.startY - _this2.size / 2, _this2.size, _this2.size);
	          var r = _this2.rgbArray[0];
	          var g = _this2.rgbArray[1];
	          var b = _this2.rgbArray[2];
	          var a = 1 - percentComplete;
	          ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	          ctx.fill();
	          _this2.size *= 0.95;
	          _this2.startX += _this2.speedX;
	          _this2.startY += _this2.speedY;
	        };
	      };
	      _disintegrate2.default.addParticleType(DustParticle);
	      _disintegrate2.default.init();
	      setTimeout(this.activeDisintegrate, 2000);
	    }
	
	    // delete from userList
	
	  }, {
	    key: 'deleteAvenger',
	    value: function deleteAvenger() {
	      var _this3 = this;
	
	      var tmp_list = this.state.userList.filter(function (user) {
	        return user !== Number(_this3.state.selectedAvenger);
	      });
	      this.setState({ userList: tmp_list });
	    }
	
	    // randomly remove avenger
	
	  }, {
	    key: 'byeAvenger',
	    value: function byeAvenger() {
	      var length = this.state.userList.length;
	      var usersComponent = document.querySelector(".users");
	      var selectedComponent = usersComponent.children[Math.ceil(Math.random() * length) - 1].id;
	
	      if (length !== this.state.remainCount) {
	        this.setState({ selectedAvenger: selectedComponent.split("user_")[1] });
	        this.activeDustEffect();
	      } else {
	        this.noticeResult();
	      }
	    }
	
	    // disable other click event
	
	  }, {
	    key: 'forbiddenOtherClick',
	    value: function forbiddenOtherClick() {
	      this.setState({ isThanosClicked: true });
	      this.setState({ handleThanosClick: function handleThanosClick() {
	          event.preventDefault();
	        } });
	    }
	
	    // active finger snap
	
	  }, {
	    key: 'activateFingerSnap',
	    value: function activateFingerSnap() {
	      var d = document.createElement("div");
	      d.className = "clickEffect";
	      d.style.top = event.clientY + "px";d.style.left = event.clientX + "px";
	      document.body.appendChild(d);
	      d.addEventListener('animationend', function () {
	        d.parentElement.removeChild(d);
	      });
	      new Audio(_finger_snap_sound2.default).play();
	    }
	
	    // click thanos hand
	
	  }, {
	    key: 'clickThanos',
	    value: function clickThanos() {
	      // activate finger snap effect 
	      this.activateFingerSnap();
	      // make other component disabled
	      setTimeout(this.forbiddenOtherClick, 1000);
	      // remove users with setting
	      setTimeout(this.byeAvenger, 1000);
	    }
	
	    // change remain count
	
	  }, {
	    key: 'changeRemainCount',
	    value: function changeRemainCount(action) {
	      var count_temp = this.state.remainCount;
	      var max = this.state.usersCount - 1;
	      var min = _systemSettings.DEFAULT_REMAIN_NUMBER;
	
	      if (action === _systemSettings.REMAIN_INCREASE) {
	        count_temp++;
	        this.setState({ remainCount: count_temp > max ? this.state.remainCount : count_temp });
	      } else {
	        count_temp--;
	        this.setState({ remainCount: count_temp < min ? this.state.remainCount : count_temp });
	      }
	    }
	
	    // change user list
	
	  }, {
	    key: 'changeUserList',
	    value: function changeUserList(action) {
	      if (action === _systemSettings.USER_ADD) {
	        var newUserId = this.state.userList.length + 1;
	        this.state.userList.push(newUserId);
	      } else {
	        var removeUserId = this.state.userList.length;
	        this.setState({ userList: this.state.userList.filter(function (userId) {
	            return userId !== removeUserId;
	          }) });
	      }
	    }
	
	    // change user count
	
	  }, {
	    key: 'changeUserCount',
	    value: function changeUserCount(action) {
	      if (action === _systemSettings.USER_ADD) {
	        this.setState({ usersCount: this.state.usersCount + 1 });
	      } else {
	        this.setState({ usersCount: this.state.usersCount - 1 });
	      }
	    }
	  }, {
	    key: 'addUser',
	    value: function addUser() {
	      if (this.state.usersCount < _systemSettings.USERS_MAX) {
	        // increase number 
	        this.changeUserCount(_systemSettings.USER_ADD);
	
	        // add user
	        this.changeUserList(_systemSettings.USER_ADD);
	      }
	    }
	  }, {
	    key: 'removeUser',
	    value: function removeUser() {
	      if (this.state.usersCount > _systemSettings.USERS_MIN) {
	        // withdraw number
	        this.changeUserCount(_systemSettings.USER_REMOVE);
	        // remove user
	        this.changeUserList(_systemSettings.USER_REMOVE);
	      }
	
	      if (this.state.remainCount >= this.state.usersCount - 1) {
	        this.changeRemainCount(_systemSettings.REMAIN_WITHDRAW);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'main' },
	        _react2.default.createElement(_Reset2.default, {
	          isShowReset: this.state.isShowReset
	        }),
	        _react2.default.createElement(_Remain2.default, {
	          remainCount: this.state.remainCount,
	          handleRemainIncreaseClick: this.state.handleRemainIncreaseClick,
	          handleRemainWithdrawClick: this.state.handleRemainWithdrawClick,
	          isThanosClicked: this.state.isThanosClicked
	        }),
	        _react2.default.createElement(_Avengers2.default, {
	          usersCount: this.state.usersCount,
	          userList: this.state.userList,
	          remainCount: this.state.remainCount,
	          handleUserAddClick: this.state.handleUserAddClick,
	          handleUserRemoveClick: this.state.handleUserRemoveClick,
	          result: this.state.result,
	          isThanosClicked: this.state.isThanosClicked
	        }),
	        _react2.default.createElement(_Thanos2.default, {
	          isThanosClicked: this.state.isThanosClicked,
	          handleThanosClick: this.state.handleThanosClick
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: 'producer mdl-layout-title' },
	          'Produced by CuckooQ'
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	exports.default = App;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _systemSettings = __webpack_require__(3);
	
	__webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	;
	
	var Avengers = function (_Component) {
	  _inherits(Avengers, _Component);
	
	  function Avengers() {
	    _classCallCheck(this, Avengers);
	
	    return _possibleConstructorReturn(this, (Avengers.__proto__ || Object.getPrototypeOf(Avengers)).apply(this, arguments));
	  }
	
	  _createClass(Avengers, [{
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      var resultStyle = {};
	      if (this.props.result !== "") {
	        if (this.props.remainCount <= 3) {
	          resultStyle = { marginTop: "-100px !important" };
	        } else {
	          if (this.props.remainCount <= 6) {
	            resultStyle = { marginTop: "-50px !important" };
	          } else {
	            resultStyle = { marginTop: "0px !important" };
	          }
	        }
	      }
	
	      var plusButtonClass = "user_plus mdl-button mdl-js-button mdl-button--fab mdl-button--colored " + (this.props.isThanosClicked ? "disabled" : "");
	
	      var minusButtonClass = "user_minus mdl-button mdl-js-button mdl-button--fab mdl-button--colored " + (this.props.isThanosClicked ? "disabled" : "");
	
	      return _react2.default.createElement(
	        "div",
	        { className: "avengers" },
	        _react2.default.createElement(
	          "div",
	          { className: "user_number mdl-layout-title" },
	          "Avengers: " + this.props.usersCount
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "setting" },
	          _react2.default.createElement(
	            "button",
	            {
	              className: plusButtonClass,
	              onClick: this.props.handleUserAddClick,
	              disabled: this.props.isThanosClicked
	            },
	            _react2.default.createElement(
	              "i",
	              { className: "material-icons" },
	              "add"
	            )
	          ),
	          _react2.default.createElement(
	            "button",
	            {
	              className: minusButtonClass,
	              onClick: this.props.handleUserRemoveClick,
	              disabled: this.props.isThanosClicked
	            },
	            _react2.default.createElement(
	              "i",
	              { className: "material-icons" },
	              "remove"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "users" },
	          function () {
	            return _this2.props.userList.map(function (userId) {
	              return _react2.default.createElement("div", {
	                id: "user_" + userId,
	                key: "user_" + userId,
	                style: {
	                  background: "url(" + _systemSettings.AVENGER_IMAGES[userId - 1] + ")",
	                  width: "80px",
	                  height: "80px",
	                  backgroundSize: "cover",
	                  backgroundPosition: "center",
	                  minWidth: "80px",
	                  minHeight: "80px"
	                }
	              });
	            });
	          }()
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "result mdl-layout-title", style: resultStyle },
	          this.props.result
	        )
	      );
	    }
	  }]);
	
	  return Avengers;
	}(_react.Component);
	
	Avengers.defaultProps = {
	  usersCount: _systemSettings.DEFAULT_USER_NUMBER,
	  userList: [],
	  remainCount: _systemSettings.DEFAULT_REMAIN_NUMBER,
	  handleUserAddClick: null,
	  handleUserRemoveClick: null,
	  isThanosClicked: false
	};
	
	exports.default = Avengers;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _systemSettings = __webpack_require__(3);
	
	__webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Remain = function (_Component) {
	  _inherits(Remain, _Component);
	
	  function Remain() {
	    _classCallCheck(this, Remain);
	
	    return _possibleConstructorReturn(this, (Remain.__proto__ || Object.getPrototypeOf(Remain)).apply(this, arguments));
	  }
	
	  _createClass(Remain, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "remain" },
	        _react2.default.createElement(
	          "div",
	          { className: "remain_number mdl-layout-title" },
	          "Survive: " + this.props.remainCount
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "setting" },
	          _react2.default.createElement(
	            "button",
	            {
	              className: "remain_plus mdl-button mdl-js-button mdl-button--fab mdl-button--colored",
	              onClick: this.props.handleRemainIncreaseClick,
	              disabled: this.props.isThanosClicked
	            },
	            _react2.default.createElement(
	              "i",
	              { className: "material-icons" },
	              "add"
	            )
	          ),
	          _react2.default.createElement(
	            "button",
	            {
	              className: "remain_minus mdl-button mdl-js-button mdl-button--fab mdl-button--colored",
	              onClick: this.props.handleRemainWithdrawClick,
	              disabled: this.props.isThanosClicked
	            },
	            _react2.default.createElement(
	              "i",
	              { className: "material-icons" },
	              "remove"
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Remain;
	}(_react.Component);
	
	Remain.defaultProps = {
	  remainCount: _systemSettings.DEFAULT_REMAIN_NUMBER,
	  handleRemainIncreaseClick: null,
	  handleRemainWithdrawClick: null,
	  isThanosClicked: false
	};
	
	exports.default = Remain;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Reset = function (_Component) {
	  _inherits(Reset, _Component);
	
	  function Reset() {
	    _classCallCheck(this, Reset);
	
	    return _possibleConstructorReturn(this, (Reset.__proto__ || Object.getPrototypeOf(Reset)).apply(this, arguments));
	  }
	
	  _createClass(Reset, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      document.querySelector(".reset_button").style.display = "none";
	    }
	  }, {
	    key: "handleResetClick",
	    value: function handleResetClick() {
	      location.reload();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var resetClass = "reset_button mdl-button mdl-js-button mdl-button--icon " + (this.props.isShowReset ? "showReset" : "notShowReset");
	
	      return _react2.default.createElement(
	        "div",
	        { className: "reset" },
	        _react2.default.createElement(
	          "button",
	          {
	            className: resetClass,
	            onClick: this.handleResetClick
	          },
	          _react2.default.createElement(
	            "i",
	            { className: "material-icons" },
	            "replay"
	          )
	        )
	      );
	    }
	  }]);
	
	  return Reset;
	}(_react.Component);
	
	Reset.defaultProps = {
	  isShowReset: false,
	  handleResetClick: null
	};
	
	exports.default = Reset;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _finger_snap = __webpack_require__(38);
	
	var _finger_snap2 = _interopRequireDefault(_finger_snap);
	
	__webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Thanos = function (_Component) {
	  _inherits(Thanos, _Component);
	
	  function Thanos() {
	    _classCallCheck(this, Thanos);
	
	    return _possibleConstructorReturn(this, (Thanos.__proto__ || Object.getPrototypeOf(Thanos)).apply(this, arguments));
	  }
	
	  _createClass(Thanos, [{
	    key: "render",
	    value: function render() {
	      var fingerSnapClass = "finger_snap " + (this.props.isThanosClicked ? "disabled" : "hvr-pulse-shrink");
	      return _react2.default.createElement(
	        "div",
	        { className: "thanos" },
	        _react2.default.createElement(
	          "div",
	          { onClick: this.props.handleThanosClick },
	          _react2.default.createElement("img", { src: _finger_snap2.default, className: fingerSnapClass, alt: "" })
	        )
	      );
	    }
	  }]);
	
	  return Thanos;
	}(_react.Component);
	
	Thanos.defaultProps = {
	  isThanosClicked: false,
	  handleThanosClick: null
	};
	
	exports.default = Thanos;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(18);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(20);
	
	var _App2 = _interopRequireDefault(_App);
	
	__webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v16.8.6
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';var k=__webpack_require__(2),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
	60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
	function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
	function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
	H.constructor=G;k(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
	function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
	function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
	function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
	0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
	function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=I.current;null===a?B("321"):void 0;return a}
	var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
	_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
	b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
	b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
	unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.13.6
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a)}}
	function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c()}finally{g=f,l=Q}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==d);null===c?c=d:c===d&&(d=h,p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=
	b}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,e=b,null!==d?p():n=!1,v()}}
	var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
	if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof global&&(G=global);
	if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
	"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f)}finally{O=!1}}};
	var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
	exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c,k=f,v()}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c,k=f,v()}};
	exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next}while(f!==d);null===c?c=d:c===d&&(d=a,p());
	b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c,k=f,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return g};
	exports.unstable_shouldYield=function(){return!e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(27);
	} else {
	  module.exports = require('./cjs/scheduler.development.js');
	}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/1.15ba8434.png";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/2.e44b9df9.png";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/3.c58f83f4.png";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/4.31708250.png";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/5.eec581c9.png";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/6.f7616eec.png";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/7.94f336aa.png";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/8.563afecb.png";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/9.713954a4.png";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/finger_snap.a21b22aa.png";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/disappear_sound.2ed8e2c8.wav";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/finger_snap_sound.e2291fa3.wav";

/***/ },
/* 41 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]
	
	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }
	
	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }
	
	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	
	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }
/******/ ])));
//# sourceMappingURL=main.91470310.js.map