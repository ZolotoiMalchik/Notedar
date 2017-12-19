/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module '@babel/core'\n    at Function.Module._resolveFilename (module.js:527:15)\n    at Function.Module._load (module.js:476:23)\n    at Module.require (module.js:568:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\babel-loader\\lib\\index.js:1:75)\n    at Module._compile (module.js:624:30)\n    at Object.Module._extensions..js (module.js:635:10)\n    at Module.load (module.js:545:32)\n    at tryModuleLoad (module.js:508:12)\n    at Function.Module._load (module.js:500:3)\n    at Module.require (module.js:568:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\webpack\\lib\\NormalModule.js:182:3)\n    at NormalModule.build (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\webpack\\lib\\NormalModule.js:275:15)\n    at Compilation.buildModule (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\webpack\\lib\\Compilation.js:151:10)\n    at moduleFactory.create (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\webpack\\lib\\Compilation.js:456:10)\n    at factory (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\webpack\\lib\\NormalModuleFactory.js:241:5)\n    at applyPluginsAsyncWaterfall (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\webpack\\lib\\NormalModuleFactory.js:94:13)\n    at D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\tapable\\lib\\Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\webpack\\lib\\CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\tapable\\lib\\Tapable.js:272:13)\n    at resolver (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\webpack\\lib\\NormalModuleFactory.js:69:10)\n    at process.nextTick (D:\\NodeJS\\LearnJSCourse\\Projects\\Notedar\\node_modules\\webpack\\lib\\NormalModuleFactory.js:194:7)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })
/******/ ]);