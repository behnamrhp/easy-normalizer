/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/simple-nomalizer.js":
/*!********************************!*\
  !*** ./js/simple-nomalizer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SN": () => (/* binding */ SN)
/* harmony export */ });
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @see must set iterator and key of it with unique id
 * @see must set iterator with id key for all elements 
 */
var SimpleNormalizer = /*#__PURE__*/function () {
  function SimpleNormalizer() {
    _classCallCheck(this, SimpleNormalizer);

    _defineProperty(this, "config", {
      iterator: null,
      key: null,
      parent_id_key: false,
      sort: {
        isSort: false,
        lang: 'en',
        keyToCompare: 'id',
        reverse: false,
        strictSort: false
      }
    });

    _defineProperty(this, "gregorian_months", ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]);

    _defineProperty(this, "persisan_months", ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]);
  }

  _createClass(SimpleNormalizer, [{
    key: "_normalizer",
    value: function _normalizer(data_iterator, parent_id_key, parent_id) {
      //set ids
      var ids = data_iterator.map(function (data, i) {
        if (!data.id || _typeof(data.id) == undefined) throw console.error("some of data element has no valid id key please insert iterator with id key for all of its elements");
        return data.id;
      }); //set entities

      var entities = data_iterator.map(function (data) {
        var entity = _objectSpread({}, data);

        if (parent_id_key) {
          var entityMap = new Map();
          entityMap.set(parent_id_key, parent_id);
          var parent_id_data = Object.fromEntries(entityMap);
          entity = _objectSpread(_objectSpread({}, data), parent_id_data);
        }

        ;
        return entity;
      });
      entities = entities.reduce(function (prev, curr, i) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ids[i], curr));
      }, {});
      return {
        ids: ids,
        entities: entities
      };
    }
  }, {
    key: "_loopRun",
    value: function _loopRun(data, key) {
      var _this = this;

      var parent_id_key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var data_found = {
        ids: [],
        entities: {}
      }; //normalize first nest only

      if (!key) {
        var found = this._normalizer(iterator, false, false);

        if (this.config.sort.isSort) found = this._sortData(found);
        return found;
      }

      if (data[key]) {
        var _found$ids;

        var _found = this._normalizer(data[key], parent_id_key, data.id);

        if (((_found$ids = _found.ids) === null || _found$ids === void 0 ? void 0 : _found$ids.length) !== 0) {
          data_found.ids = [].concat(_toConsumableArray(data_found.ids), _toConsumableArray(_found.ids));
          data_found.entities = _objectSpread(_objectSpread({}, data_found.entities), _found.entities);
        }
      } //find key in nested data


      if (data instanceof Array && !data[key]) {
        data.forEach(function (param) {
          _this._loopRun(param, key, parent_id_key);
        });
      }

      if (data instanceof Object && !data[key]) {
        for (var prop in data) {
          var param = data[prop];

          if (param instanceof Object || param instanceof Array) {
            (function () {
              var _result$ids;

              var result = _this._loopRun(param, key, parent_id_key);

              if (((_result$ids = result.ids) === null || _result$ids === void 0 ? void 0 : _result$ids.length) !== 0) {
                result.ids.forEach(function (id) {
                  //check id exist to avoid repeated items push (if parent id key not has set)
                  if (id) {
                    var check_exist_id = data_found.ids.find(function (oldId) {
                      return +oldId === +id && !parent_id_key;
                    });
                    if (check_exist_id) return;
                  }

                  data_found.ids.push(+id);
                  data_found.entities = _objectSpread(_objectSpread({}, data_found.entities), result.entities);
                });
              }
            })();
          }
        }
      } //overwrite newid


      var uniqIdsSet = new Set(data_found.ids);
      data_found.ids = Array.from(uniqIdsSet);
      return data_found;
    }
  }, {
    key: "set_config",
    value: function set_config(custom_config) {
      this.config = _objectSpread(_objectSpread({}, this.config), custom_config);
    }
  }, {
    key: "run",
    value: function run() {
      var _result$ids2;

      var data_found = {
        ids: [],
        entities: {}
      };
      var iterator = this.config.iterator;
      var parent_id_key = this.config.parent_id_key;
      var key = this.config.key;
      if (!(this.config.iterator && (this.config.iterator instanceof Array || this.config.iterator instanceof Object))) return console.error('please set correct iterator config first'); //find key in nested data

      var result = this._loopRun(iterator, key, parent_id_key);

      if (((_result$ids2 = result.ids) === null || _result$ids2 === void 0 ? void 0 : _result$ids2.length) !== 0) {
        data_found.ids = [].concat(_toConsumableArray(data_found.ids), _toConsumableArray(result.ids));
        data_found.entities = _objectSpread(_objectSpread({}, data_found.entities), result.entities);
      }

      if (this.config.sort.isSort) data_found = this._sortData(data_found);
      return data_found;
    }
  }, {
    key: "_sortData",
    value: function _sortData(data) {
      var _this2 = this;

      //error handle for entered key to compare
      var check_key_to_compare_exist = data.ids.every(function (id) {
        return data.entities[id][_this2.config.sort.keyToCompare];
      });

      if (!check_key_to_compare_exist) {
        console.error('your key to compare not found for sort');
        return data;
      } //check if all of data is number type


      var is_number = data.ids.every(function (id) {
        return isFinite(data.entities[id][_this2.config.sort.keyToCompare]);
      }); //sort by number

      if (is_number) return data = this._sortByNumber(data); //sort by month

      var month_to_check = this.config.sort.lang === 'fa' ? this.persisan_months : this.gregorian_months;
      var is_month = data.ids.every(function (id) {
        var item = data.entities[id];

        var monthPartOfInput = item[_this2.config.sort.keyToCompare].toLowerCase().trim();

        return month_to_check.indexOf(monthPartOfInput) !== -1;
      });
      if (is_month && this.config.sort.strictSort === 'month') return this._sortByDate(data, month_to_check); //sort by lang

      return this._sortByAlphabet(data);
    }
  }, {
    key: "_sortByDate",
    value: function _sortByDate(data, month_to_check) {
      var key = this.config.sort.keyToCompare;
      var is_reverse = this.config.sort.reverse;
      var new_ids = data.ids.sort(function (a, b) {
        a = data.entities[a];
        b = data.entities[b];
        var a_index = month_to_check.indexOf(a[key]);
        var b_index = month_to_check.indexOf(b[key]);
        return a_index - b_index;
      });
      if (is_reverse) new_ids.reverse();
      var new_entities = new_ids.map(function (id) {
        return data.entities[id];
      }); //sort ids

      return {
        ids: _toConsumableArray(new_ids),
        entities: _objectSpread({}, new_entities)
      };
    }
  }, {
    key: "_sortByNumber",
    value: function _sortByNumber(data) {
      var key = this.config.sort.keyToCompare;
      var is_reverse = this.config.sort.reverse; //sort entities 

      var new_ids = data.ids.sort(function (a, b) {
        a = data.entities[a];
        b = data.entities[b];
        return is_reverse ? a[key] - b[key] : b[key] - a[key];
      });
      var new_entities = new_ids.map(function (id) {
        return data.entities[id];
      }); //sort ids

      return {
        ids: _toConsumableArray(new_ids),
        entities: _objectSpread({}, new_entities)
      };
    }
  }, {
    key: "_sortByAlphabet",
    value: function _sortByAlphabet(data) {
      var key = this.config.sort.keyToCompare;
      var is_reverse = this.config.sort.reverse;
      var lang = this.config.sort.lang;
      var entities = data.entities;
      var array_of_keys = data.ids.map(function (id) {
        var item = entities[id];
        return item[key] + '_' + item.id;
      }); //compare keys

      var collator = new Intl.Collator(lang);
      var sortedLetters = array_of_keys.sort(collator.compare); //sort default data by sorted keys

      var new_ids = new Array();
      var is_not_found = false;
      sortedLetters.forEach(function (item) {
        var id = item.split('_')[1];
        var title = item.split('_')[0];
        var found_item = data.ids.find(function (found_id) {
          var ent = entities[found_id];
          if (!ent[key] || !id) is_not_found = true;
          return ent[key] === title && +ent.id === +id;
        });
        new_ids.push(found_item);
      });

      if (is_not_found) {
        _toConsumableArray(entities), _readOnlyError("new_entities");
        console.error('please enter existing key or insert data that has unique id for values');
        return data;
      } //sort type check


      if (is_reverse) new_ids.reverse(); //make ids

      var new_entities = new_ids.map(function (id) {
        return entities[id];
      });
      return {
        ids: [].concat(new_ids),
        entities: _objectSpread({}, new_entities)
      };
    }
  }]);

  return SimpleNormalizer;
}();

var SN = new SimpleNormalizer();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_simple_nomalizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/simple-nomalizer */ "./js/simple-nomalizer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./style.css");


var sample_user_data = [{
  id: 1,
  firstname: 'behnam',
  lastname: 'rahimpour',
  classes: [{
    id: 123,
    name: 'cltest1'
  }, {
    id: 124,
    name: 'cltest2'
  }, {
    id: 125,
    name: 'cltest3'
  }, {
    id: 126,
    name: 'cltest4'
  }, {
    id: 127,
    name: 'cltest5'
  }],
  articles: [{
    id: 231,
    name: 'articletest1'
  }, {
    id: 232,
    name: 'articletest2'
  }, {
    id: 233,
    name: 'articletest3'
  }, {
    id: 234,
    name: 'articletest4'
  }, {
    id: 235,
    name: 'articletest5'
  }]
}, {
  id: 2,
  firstname: 'naser',
  lastname: 'rahimpour',
  classes: [{
    id: 233,
    name: 'ncltest1'
  }, {
    id: 244,
    name: 'ncltest2'
  }, {
    id: 255,
    name: 'ncltest3'
  }, {
    id: 266,
    name: 'ncltest4'
  }, {
    id: 277,
    name: 'ncltest5'
  }],
  articles: [{
    id: 231,
    name: 'narticletest1'
  }, {
    id: 232,
    name: 'narticletest2'
  }, {
    id: 233,
    name: 'narticletest3'
  }, {
    id: 234,
    name: 'narticletest4'
  }, {
    id: 235,
    name: 'narticletest5'
  }]
}, {
  id: 3,
  firstname: 'amir',
  lastname: 'heidari',
  classes: [{
    id: 331,
    name: 'acltest1'
  }, {
    id: 332,
    name: 'acltest2'
  }, {
    id: 333,
    name: 'acltest3'
  }, {
    id: 334,
    name: 'acltest4'
  }, {
    id: 335,
    name: 'acltest5'
  }],
  articles: [{
    id: 331,
    name: 'aarticletest1'
  }, {
    id: 332,
    name: 'aarticletest2'
  }, {
    id: 333,
    name: 'aarticletest3'
  }, {
    id: 334,
    name: 'aarticletest4'
  }, {
    id: 335,
    name: 'articletest5'
  }]
}, {
  id: 4,
  firstname: 'hossein',
  lastname: 'ahmadi',
  classes: [{
    id: 423,
    name: 'hcltest1'
  }, {
    id: 424,
    name: 'hcltest2'
  }, {
    id: 4125,
    name: 'hcltest3'
  }, {
    id: 426,
    name: 'hcltest4'
  }, {
    id: 427,
    name: 'hcltest5'
  }],
  articles: [{
    id: 431,
    name: 'harticletest1'
  }, {
    id: 432,
    name: 'harticletest2'
  }, {
    id: 433,
    name: 'harticletest3'
  }, {
    id: 434,
    name: 'harticletest4'
  }, {
    id: 435,
    name: 'harticletest5'
  }]
}];
_js_simple_nomalizer__WEBPACK_IMPORTED_MODULE_0__.SN.set_config({
  iterator: sample_user_data,
  key: 'classes',
  parent_id_key: 'user_id',
  sort: {
    isSort: true,
    keyToCompare: 'name',
    reverse: false,
    lang: 'en',
    strictSort: 'month'
  }
});
var result = _js_simple_nomalizer__WEBPACK_IMPORTED_MODULE_0__.SN.run();
console.log(result);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckQsTUFBWixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlLW5vcm1hbGl6ZXIvLi9qcy9zaW1wbGUtbm9tYWxpemVyLmpzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vc3R5bGUuY3NzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vc3R5bGUuY3NzP2Y2OTYiLCJ3ZWJwYWNrOi8vc2ltcGxlLW5vcm1hbGl6ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLW5vcm1hbGl6ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLW5vcm1hbGl6ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltcGxlLW5vcm1hbGl6ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBzZWUgbXVzdCBzZXQgaXRlcmF0b3IgYW5kIGtleSBvZiBpdCB3aXRoIHVuaXF1ZSBpZFxyXG4gKiBAc2VlIG11c3Qgc2V0IGl0ZXJhdG9yIHdpdGggaWQga2V5IGZvciBhbGwgZWxlbWVudHMgXHJcbiAqL1xyXG4gY2xhc3MgU2ltcGxlTm9ybWFsaXplciB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgaXRlcmF0b3I6IG51bGwsXHJcbiAgICAgICAga2V5OiBudWxsLFxyXG4gICAgICAgIHBhcmVudF9pZF9rZXkgOiBmYWxzZSxcclxuICAgICAgICBzb3J0IDoge1xyXG4gICAgICAgICAgICBpc1NvcnQgICAgICAgOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFuZyAgICAgICAgIDogJ2VuJyxcclxuICAgICAgICAgICAga2V5VG9Db21wYXJlIDogJ2lkJyxcclxuICAgICAgICAgICAgcmV2ZXJzZSAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0cmljdFNvcnQgICA6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgX25vcm1hbGl6ZXIoZGF0YV9pdGVyYXRvciwgcGFyZW50X2lkX2tleSwgcGFyZW50X2lkKXtcclxuICAgICAgICBcclxuICAgICAgICAvL3NldCBpZHNcclxuICAgICAgICBjb25zdCBpZHMgICAgICAgICAgID0gZGF0YV9pdGVyYXRvci5tYXAoKGRhdGEsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYoIWRhdGEuaWQgfHwgdHlwZW9mIGRhdGEuaWQgPT0gdW5kZWZpbmVkKSB0aHJvdyBjb25zb2xlLmVycm9yKGBzb21lIG9mIGRhdGEgZWxlbWVudCBoYXMgbm8gdmFsaWQgaWQga2V5IHBsZWFzZSBpbnNlcnQgaXRlcmF0b3Igd2l0aCBpZCBrZXkgZm9yIGFsbCBvZiBpdHMgZWxlbWVudHNgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL3NldCBlbnRpdGllc1xyXG4gICAgICAgIGxldCBlbnRpdGllcyAgICAgID0gZGF0YV9pdGVyYXRvci5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbnRpdHkgPSB7Li4uZGF0YX07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihwYXJlbnRfaWRfa2V5KXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0eU1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgICAgIGVudGl0eU1hcC5zZXQocGFyZW50X2lkX2tleSwgcGFyZW50X2lkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudF9pZF9kYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGVudGl0eU1hcCk7IFxyXG4gICAgICAgICAgICAgICAgZW50aXR5ID0gey4uLmRhdGEsIC4uLnBhcmVudF9pZF9kYXRhfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBcclxuICAgICAgICBlbnRpdGllcyA9IGVudGl0aWVzLnJlZHVjZSgocHJldixjdXJyLGkpID0+KHsuLi5wcmV2LFtpZHNbaV1dIDogY3VyciB9KSx7fSlcclxuICAgICAgICByZXR1cm4ge2lkcywgZW50aXRpZXN9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfbG9vcFJ1bihkYXRhLCBrZXksIHBhcmVudF9pZF9rZXkgPSBmYWxzZSlcclxuICAgIHtcclxuIFxyXG4gICAgbGV0IGRhdGFfZm91bmQgPSB7XHJcbiAgICAgICAgaWRzICAgICAgOiBbXSxcclxuICAgICAgICBlbnRpdGllcyA6IHt9XHJcbiAgICB9O1xyXG4gICAgICAgLy9ub3JtYWxpemUgZmlyc3QgbmVzdCBvbmx5XHJcbiAgICAgICBpZigha2V5KXtcclxuICAgICAgICBsZXQgZm91bmQgPSB0aGlzLl9ub3JtYWxpemVyKGl0ZXJhdG9yLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnNvcnQuaXNTb3J0KSBmb3VuZCA9ICB0aGlzLl9zb3J0RGF0YShmb3VuZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZvdW5kXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGlmKGRhdGFba2V5XSl7XHJcbiAgICAgICAgY29uc3QgZm91bmQgPSB0aGlzLl9ub3JtYWxpemVyKGRhdGFba2V5XSwgcGFyZW50X2lkX2tleSwgZGF0YS5pZCk7XHJcbiAgICAgICAgaWYoZm91bmQuaWRzPy5sZW5ndGggIT09IDApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGF0YV9mb3VuZC5pZHMgICAgICA9IFsuLi5kYXRhX2ZvdW5kLmlkcywgLi4uZm91bmQuaWRzXSA7ICBcclxuICAgICAgICAgICAgZGF0YV9mb3VuZC5lbnRpdGllcyA9IHsuLi5kYXRhX2ZvdW5kLmVudGl0aWVzLCAuLi5mb3VuZC5lbnRpdGllc307ICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgfSBcclxuICAgICAgICBcclxuICAgIC8vZmluZCBrZXkgaW4gbmVzdGVkIGRhdGFcclxuICAgICAgaWYoZGF0YSBpbnN0YW5jZW9mIEFycmF5ICYmICFkYXRhW2tleV0pe1xyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2gocGFyYW0gPT4geyAgXHJcbiAgICAgICAgICAgICB0aGlzLl9sb29wUnVuKHBhcmFtLCBrZXksIHBhcmVudF9pZF9rZXkpOyAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZGF0YSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhZGF0YVtrZXldKXtcclxuICAgICAgICAgZm9yKGxldCBwcm9wIGluIGRhdGEpe1xyXG4gICAgICAgICAgICAgY29uc3QgcGFyYW0gPSBkYXRhW3Byb3BdXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBpZihwYXJhbSBpbnN0YW5jZW9mIE9iamVjdCB8fCBwYXJhbSBpbnN0YW5jZW9mIEFycmF5KSB7ICAgXHJcbiAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2xvb3BSdW4ocGFyYW0sIGtleSwgcGFyZW50X2lkX2tleSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0Lmlkcz8ubGVuZ3RoICE9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaWRzLmZvckVhY2goaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZCBleGlzdCB0byBhdm9pZCByZXBlYXRlZCBpdGVtcyBwdXNoIChpZiBwYXJlbnQgaWQga2V5IG5vdCBoYXMgc2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja19leGlzdF9pZCA9IGRhdGFfZm91bmQuaWRzLmZpbmQob2xkSWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoK29sZElkID09PSAraWQgJiYgIXBhcmVudF9pZF9rZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2hlY2tfZXhpc3RfaWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV9mb3VuZC5pZHMucHVzaCgraWQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFfZm91bmQuZW50aXRpZXMgPSB7Li4uZGF0YV9mb3VuZC5lbnRpdGllcywgLi4ucmVzdWx0LmVudGl0aWVzfTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy9vdmVyd3JpdGUgbmV3aWRcclxuICAgICAgY29uc3QgdW5pcUlkc1NldCA9IG5ldyBTZXQoZGF0YV9mb3VuZC5pZHMpO1xyXG4gICAgICAgICAgICBkYXRhX2ZvdW5kLmlkcyA9IEFycmF5LmZyb20odW5pcUlkc1NldCk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YV9mb3VuZDsgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0X2NvbmZpZyhjdXN0b21fY29uZmlnKXtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHsuLi50aGlzLmNvbmZpZywgLi4uY3VzdG9tX2NvbmZpZ307XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHJ1bigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkYXRhX2ZvdW5kID0ge1xyXG4gICAgICAgICAgICBpZHMgICAgICA6IFtdLFxyXG4gICAgICAgICAgICBlbnRpdGllcyA6IHt9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qge2l0ZXJhdG9yfSA9IHRoaXMuY29uZmlnO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJlbnRfaWRfa2V5ID0gIHRoaXMuY29uZmlnLnBhcmVudF9pZF9rZXk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gIHRoaXMuY29uZmlnLmtleTtcclxuICAgICAgICBcclxuICAgICAgICBpZighKHRoaXMuY29uZmlnLml0ZXJhdG9yICYmICh0aGlzLmNvbmZpZy5pdGVyYXRvciBpbnN0YW5jZW9mIEFycmF5IHx8IHRoaXMuY29uZmlnLml0ZXJhdG9yIGluc3RhbmNlb2YgT2JqZWN0KSkgKSByZXR1cm4gY29uc29sZS5lcnJvcigncGxlYXNlIHNldCBjb3JyZWN0IGl0ZXJhdG9yIGNvbmZpZyBmaXJzdCcpO1xyXG5cclxuICAgICAgICAgIC8vZmluZCBrZXkgaW4gbmVzdGVkIGRhdGFcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2xvb3BSdW4oaXRlcmF0b3IsIGtleSwgcGFyZW50X2lkX2tleSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBpZihyZXN1bHQuaWRzPy5sZW5ndGggIT09IDApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFfZm91bmQuaWRzICAgICAgPSBbLi4uZGF0YV9mb3VuZC5pZHMsIC4uLnJlc3VsdC5pZHNdIDsgIFxyXG4gICAgICAgICAgICBkYXRhX2ZvdW5kLmVudGl0aWVzID0gey4uLmRhdGFfZm91bmQuZW50aXRpZXMsIC4uLnJlc3VsdC5lbnRpdGllc307ICBcclxuICAgICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnNvcnQuaXNTb3J0KSBkYXRhX2ZvdW5kID0gIHRoaXMuX3NvcnREYXRhKGRhdGFfZm91bmQpO1xyXG4gICAgICAgICBcclxuICAgICAgICByZXR1cm4gZGF0YV9mb3VuZDtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdyZWdvcmlhbl9tb250aHMgPSBbXCJqYW5cIiwgXCJmZWJcIiwgXCJtYXJcIiwgXCJhcHJcIiwgXCJtYXlcIiwgXCJqdW5cIiwgXCJqdWxcIiwgXCJhdWdcIiwgXCJzZXBcIiwgXCJvY3RcIiwgXCJub3ZcIiwgXCJkZWNcIl07XHJcbiAgICBwZXJzaXNhbl9tb250aHMgID0gW1wi2YHYsdmI2LHYr9uM2YZcIiwgXCLYp9ix2K/bjNio2YfYtNiqXCIsIFwi2K7Ysdiv2KfYr1wiLCBcItiq24zYsVwiLCBcItmF2LHYr9in2K9cIiwgXCLYtNmH2LHbjNmI2LFcIiwgXCLZhdmH2LFcIiwgXCLYotio2KfZhlwiLCBcItii2LDYsVwiLCBcItiv24xcIiwgXCLYqNmH2YXZhlwiLCBcItin2LPZgdmG2K9cIl07XHJcbiAgICBfc29ydERhdGEoZGF0YSl7XHJcbiAgICAgICAgLy9lcnJvciBoYW5kbGUgZm9yIGVudGVyZWQga2V5IHRvIGNvbXBhcmVcclxuICAgICAgICBjb25zdCBjaGVja19rZXlfdG9fY29tcGFyZV9leGlzdCA9IGRhdGEuaWRzLmV2ZXJ5KGlkID0+IGRhdGEuZW50aXRpZXNbaWRdW3RoaXMuY29uZmlnLnNvcnQua2V5VG9Db21wYXJlXSk7XHJcblxyXG4gICAgICAgIGlmKCFjaGVja19rZXlfdG9fY29tcGFyZV9leGlzdCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3lvdXIga2V5IHRvIGNvbXBhcmUgbm90IGZvdW5kIGZvciBzb3J0Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL2NoZWNrIGlmIGFsbCBvZiBkYXRhIGlzIG51bWJlciB0eXBlXHJcbiAgICAgICAgY29uc3QgaXNfbnVtYmVyID0gZGF0YS5pZHMuZXZlcnkoaWQgPT4ge1xyXG4gICAgICAgICAgICAgcmV0dXJuIGlzRmluaXRlKGRhdGEuZW50aXRpZXNbaWRdW3RoaXMuY29uZmlnLnNvcnQua2V5VG9Db21wYXJlXSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vc29ydCBieSBudW1iZXJcclxuICAgICAgICBpZihpc19udW1iZXIpIHJldHVybiBkYXRhID0gdGhpcy5fc29ydEJ5TnVtYmVyKGRhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vc29ydCBieSBtb250aFxyXG4gICAgICAgIGNvbnN0IG1vbnRoX3RvX2NoZWNrID0gKHRoaXMuY29uZmlnLnNvcnQubGFuZyA9PT0gJ2ZhJykgPyB0aGlzLnBlcnNpc2FuX21vbnRocyA6IHRoaXMuZ3JlZ29yaWFuX21vbnRocztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpc19tb250aCAgICAgICA9IGRhdGEuaWRzLmV2ZXJ5KGlkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRhdGEuZW50aXRpZXNbaWRdO1xyXG4gICAgICAgICAgICBjb25zdCBtb250aFBhcnRPZklucHV0ID0gaXRlbVt0aGlzLmNvbmZpZy5zb3J0LmtleVRvQ29tcGFyZV0udG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb250aF90b19jaGVjay5pbmRleE9mKG1vbnRoUGFydE9mSW5wdXQpICE9PSAtMTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihpc19tb250aCAmJiB0aGlzLmNvbmZpZy5zb3J0LnN0cmljdFNvcnQgPT09ICdtb250aCcpIHJldHVybiB0aGlzLl9zb3J0QnlEYXRlKGRhdGEsIG1vbnRoX3RvX2NoZWNrKTtcclxuXHJcbiAgICAgICAgLy9zb3J0IGJ5IGxhbmdcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydEJ5QWxwaGFiZXQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NvcnRCeURhdGUoZGF0YSwgbW9udGhfdG9fY2hlY2spe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnLnNvcnQua2V5VG9Db21wYXJlO1xyXG4gICAgICAgIGNvbnN0IGlzX3JldmVyc2UgPSB0aGlzLmNvbmZpZy5zb3J0LnJldmVyc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG5ld19pZHMgPSBkYXRhLmlkcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGEgPSBkYXRhLmVudGl0aWVzW2FdO1xyXG4gICAgICAgICAgICBiID0gZGF0YS5lbnRpdGllc1tiXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFfaW5kZXggPSBtb250aF90b19jaGVjay5pbmRleE9mKGFba2V5XSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJfaW5kZXggPSBtb250aF90b19jaGVjay5pbmRleE9mKGJba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhX2luZGV4IC0gYl9pbmRleFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKGlzX3JldmVyc2UpIG5ld19pZHMucmV2ZXJzZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdfZW50aXRpZXMgICAgICA9IG5ld19pZHMubWFwKGlkID0+IGRhdGEuZW50aXRpZXNbaWRdKTtcclxuXHJcbiAgICAgICAgLy9zb3J0IGlkc1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkcyAgICAgICAgICA6IFsuLi5uZXdfaWRzXSxcclxuICAgICAgICAgICAgZW50aXRpZXMgICAgIDogey4uLm5ld19lbnRpdGllc31cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3NvcnRCeU51bWJlcihkYXRhKXtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZy5zb3J0LmtleVRvQ29tcGFyZTtcclxuICAgICAgICBjb25zdCBpc19yZXZlcnNlID0gdGhpcy5jb25maWcuc29ydC5yZXZlcnNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vc29ydCBlbnRpdGllcyBcclxuICAgICAgICBjb25zdCBuZXdfaWRzID0gZGF0YS5pZHMuc29ydCgoYSxiKSA9PiB7XHJcbiAgICAgICAgICAgIGEgPSBkYXRhLmVudGl0aWVzW2FdO1xyXG4gICAgICAgICAgICBiID0gZGF0YS5lbnRpdGllc1tiXTtcclxuICAgICAgICAgICAgcmV0dXJuIChpc19yZXZlcnNlKSA/IGFba2V5XSAtIGJba2V5XSA6IGJba2V5XSAtIGFba2V5XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG5ld19lbnRpdGllcyAgPSBuZXdfaWRzLm1hcChpZCA9PiBkYXRhLmVudGl0aWVzW2lkXSk7XHJcblxyXG4gICAgICAgIC8vc29ydCBpZHNcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZHMgICAgICAgICAgOiBbLi4ubmV3X2lkc10sXHJcbiAgICAgICAgICAgIGVudGl0aWVzIDogey4uLm5ld19lbnRpdGllc31cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfc29ydEJ5QWxwaGFiZXQoZGF0YSl7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWcuc29ydC5rZXlUb0NvbXBhcmU7XHJcbiAgICAgICAgY29uc3QgaXNfcmV2ZXJzZSA9IHRoaXMuY29uZmlnLnNvcnQucmV2ZXJzZTtcclxuICAgICAgICBjb25zdCBsYW5nICAgICA9IHRoaXMuY29uZmlnLnNvcnQubGFuZztcclxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IGRhdGEuZW50aXRpZXM7XHJcbiAgICAgICAgY29uc3QgYXJyYXlfb2Zfa2V5cyA9IGRhdGEuaWRzLm1hcChpZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbnRpdGllc1tpZF07XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtW2tleV0gKyAnXycgKyBpdGVtLmlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vY29tcGFyZSBrZXlzXHJcbiAgICAgICAgY29uc3QgY29sbGF0b3IgPSBuZXcgSW50bC5Db2xsYXRvcihsYW5nKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzb3J0ZWRMZXR0ZXJzID0gYXJyYXlfb2Zfa2V5cy5zb3J0KGNvbGxhdG9yLmNvbXBhcmUpO1xyXG4gICAgICBcclxuICAgICAgICAvL3NvcnQgZGVmYXVsdCBkYXRhIGJ5IHNvcnRlZCBrZXlzXHJcbiAgICAgICAgY29uc3QgbmV3X2lkcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGxldCBpc19ub3RfZm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgc29ydGVkTGV0dGVycy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGl0ZW0uc3BsaXQoJ18nKVsxXTtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnNwbGl0KCdfJylbMF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3VuZF9pdGVtID0gZGF0YS5pZHMuZmluZCggZm91bmRfaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW50ID0gZW50aXRpZXNbZm91bmRfaWRdO1xyXG4gICAgICAgICAgICBpZighZW50W2tleV0gfHwgIWlkKSBpc19ub3RfZm91bmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChlbnRba2V5XSA9PT0gdGl0bGUgJiYgK2VudC5pZCA9PT0gK2lkKVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBuZXdfaWRzLnB1c2goZm91bmRfaXRlbSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYoaXNfbm90X2ZvdW5kKXtcclxuICAgICAgICAgICAgbmV3X2VudGl0aWVzID0gWy4uLmVudGl0aWVzXTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncGxlYXNlIGVudGVyIGV4aXN0aW5nIGtleSBvciBpbnNlcnQgZGF0YSB0aGF0IGhhcyB1bmlxdWUgaWQgZm9yIHZhbHVlcycpXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC8vc29ydCB0eXBlIGNoZWNrXHJcbiAgICAgICAgaWYoaXNfcmV2ZXJzZSkgIG5ld19pZHMucmV2ZXJzZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vbWFrZSBpZHNcclxuICAgICAgICBjb25zdCBuZXdfZW50aXRpZXMgPSBuZXdfaWRzLm1hcChpZCA9PiBlbnRpdGllc1tpZF0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkcyAgICAgIDogWyAuLi5uZXdfaWRzIF0sXHJcbiAgICAgICAgICAgIGVudGl0aWVzIDogeyAuLi5uZXdfZW50aXRpZXMgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNOID0gbmV3IFNpbXBsZU5vcm1hbGl6ZXIoKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgU04gfSBmcm9tIFwiLi9qcy9zaW1wbGUtbm9tYWxpemVyXCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3Qgc2FtcGxlX3VzZXJfZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgZmlyc3RuYW1lIDogJ2JlaG5hbScsXHJcbiAgICAgICAgbGFzdG5hbWUgIDogJ3JhaGltcG91cicsXHJcbiAgICAgICAgY2xhc3NlcyAgIDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MTIzLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdjbHRlc3QxJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MTI0LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdjbHRlc3QyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MTI1LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdjbHRlc3QzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MTI2LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdjbHRlc3Q0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MTI3LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdjbHRlc3Q1J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXJ0aWNsZXMgOltcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAyMzEsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FydGljbGV0ZXN0MSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAyMzIsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FydGljbGV0ZXN0MidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAyMzMsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FydGljbGV0ZXN0MydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAyMzQsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FydGljbGV0ZXN0NCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAyMzUsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FydGljbGV0ZXN0NSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkIDogMixcclxuICAgICAgICBmaXJzdG5hbWUgOiAnbmFzZXInLFxyXG4gICAgICAgIGxhc3RuYW1lICA6ICdyYWhpbXBvdXInLFxyXG4gICAgICAgIGNsYXNzZXMgICA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjIzMyxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnbmNsdGVzdDEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDoyNDQsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ25jbHRlc3QyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MjU1LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICduY2x0ZXN0MydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjI2NixcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnbmNsdGVzdDQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDoyNzcsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ25jbHRlc3Q1J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXJ0aWNsZXMgOltcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAyMzEsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ25hcnRpY2xldGVzdDEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogMjMyLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICduYXJ0aWNsZXRlc3QyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDIzMyxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnbmFydGljbGV0ZXN0MydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAyMzQsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ25hcnRpY2xldGVzdDQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogMjM1LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICduYXJ0aWNsZXRlc3Q1J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQgOiAzLFxyXG4gICAgICAgIGZpcnN0bmFtZSA6ICdhbWlyJyxcclxuICAgICAgICBsYXN0bmFtZSAgOiAnaGVpZGFyaScsXHJcbiAgICAgICAgY2xhc3NlcyAgIDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MzMxLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdhY2x0ZXN0MSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjMzMixcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYWNsdGVzdDInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDozMzMsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FjbHRlc3QzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MzM0LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdhY2x0ZXN0NCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjMzNSxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYWNsdGVzdDUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcnRpY2xlcyA6W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDMzMSxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYWFydGljbGV0ZXN0MSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAzMzIsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FhcnRpY2xldGVzdDInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogMzMzLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdhYXJ0aWNsZXRlc3QzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDMzNCxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYWFydGljbGV0ZXN0NCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAzMzUsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FydGljbGV0ZXN0NSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkIDogNCxcclxuICAgICAgICBmaXJzdG5hbWUgOiAnaG9zc2VpbicsXHJcbiAgICAgICAgbGFzdG5hbWUgIDogJ2FobWFkaScsXHJcbiAgICAgICAgY2xhc3NlcyAgIDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6NDIzLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdoY2x0ZXN0MSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjQyNCxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnaGNsdGVzdDInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDo0MTI1LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdoY2x0ZXN0MydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjQyNixcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnaGNsdGVzdDQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDo0MjcsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2hjbHRlc3Q1J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXJ0aWNsZXMgOltcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiA0MzEsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2hhcnRpY2xldGVzdDEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogNDMyLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdoYXJ0aWNsZXRlc3QyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDQzMyxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnaGFydGljbGV0ZXN0MydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiA0MzQsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2hhcnRpY2xldGVzdDQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogNDM1LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdoYXJ0aWNsZXRlc3Q1J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbl07XHJcblxyXG5cclxuU04uc2V0X2NvbmZpZyh7XHJcbiAgICBpdGVyYXRvciAgICAgIDogc2FtcGxlX3VzZXJfZGF0YSxcclxuICAgIGtleSAgICAgICAgICAgOiAnY2xhc3NlcycsXHJcbiAgICBwYXJlbnRfaWRfa2V5IDogJ3VzZXJfaWQnLFxyXG4gICAgc29ydCAgICAgICAgICA6IHtcclxuICAgICAgICBpc1NvcnQgICAgICAgOiB0cnVlLFxyXG4gICAgICAgIGtleVRvQ29tcGFyZSA6ICduYW1lJyxcclxuICAgICAgICByZXZlcnNlICAgICAgOiBmYWxzZSxcclxuICAgICAgICBsYW5nICAgICAgICAgOiAnZW4nLFxyXG4gICAgICAgIHN0cmljdFNvcnQgICA6ICdtb250aCdcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCByZXN1bHQgPSBTTi5ydW4oKTtcclxuXHJcbmNvbnNvbGUubG9nKHJlc3VsdCk7Il0sIm5hbWVzIjpbIlNpbXBsZU5vcm1hbGl6ZXIiLCJpdGVyYXRvciIsImtleSIsInBhcmVudF9pZF9rZXkiLCJzb3J0IiwiaXNTb3J0IiwibGFuZyIsImtleVRvQ29tcGFyZSIsInJldmVyc2UiLCJzdHJpY3RTb3J0IiwiZGF0YV9pdGVyYXRvciIsInBhcmVudF9pZCIsImlkcyIsIm1hcCIsImRhdGEiLCJpIiwiaWQiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJlbnRpdGllcyIsImVudGl0eSIsImVudGl0eU1hcCIsIk1hcCIsInNldCIsInBhcmVudF9pZF9kYXRhIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImRhdGFfZm91bmQiLCJmb3VuZCIsIl9ub3JtYWxpemVyIiwiY29uZmlnIiwiX3NvcnREYXRhIiwibGVuZ3RoIiwiQXJyYXkiLCJmb3JFYWNoIiwicGFyYW0iLCJfbG9vcFJ1biIsInByb3AiLCJyZXN1bHQiLCJjaGVja19leGlzdF9pZCIsImZpbmQiLCJvbGRJZCIsInB1c2giLCJ1bmlxSWRzU2V0IiwiU2V0IiwiZnJvbSIsImN1c3RvbV9jb25maWciLCJjaGVja19rZXlfdG9fY29tcGFyZV9leGlzdCIsImV2ZXJ5IiwiaXNfbnVtYmVyIiwiaXNGaW5pdGUiLCJfc29ydEJ5TnVtYmVyIiwibW9udGhfdG9fY2hlY2siLCJwZXJzaXNhbl9tb250aHMiLCJncmVnb3JpYW5fbW9udGhzIiwiaXNfbW9udGgiLCJpdGVtIiwibW9udGhQYXJ0T2ZJbnB1dCIsInRvTG93ZXJDYXNlIiwidHJpbSIsImluZGV4T2YiLCJfc29ydEJ5RGF0ZSIsIl9zb3J0QnlBbHBoYWJldCIsImlzX3JldmVyc2UiLCJuZXdfaWRzIiwiYSIsImIiLCJhX2luZGV4IiwiYl9pbmRleCIsIm5ld19lbnRpdGllcyIsImFycmF5X29mX2tleXMiLCJjb2xsYXRvciIsIkludGwiLCJDb2xsYXRvciIsInNvcnRlZExldHRlcnMiLCJjb21wYXJlIiwiaXNfbm90X2ZvdW5kIiwic3BsaXQiLCJ0aXRsZSIsImZvdW5kX2l0ZW0iLCJmb3VuZF9pZCIsImVudCIsIlNOIiwic2FtcGxlX3VzZXJfZGF0YSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiY2xhc3NlcyIsIm5hbWUiLCJhcnRpY2xlcyIsInNldF9jb25maWciLCJydW4iLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9