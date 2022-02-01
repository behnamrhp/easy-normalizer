/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./node_modules/easy-normalizer/index.js":
/*!***********************************************!*\
  !*** ./node_modules/easy-normalizer/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SN": () => (/* binding */ SN)
/* harmony export */ });
/**
 * @see must set iterator and key of it with unique id
 * @see must set iterator with id key for all elements 
 */
 class SimpleNormalizer {
    config = {
        iterator: null,
        key: null,
        parent_id_key : false,
        sort : {
            isSort       : false,
            lang         : 'en',
            keyToCompare : 'id',
            reverse      : false,
            strictSort   : false,
        },
    }

    _normalizer(data_iterator, parent_id_key, parent_id){
        
        //set ids
        const ids           = data_iterator.map((data, i) => {
            if(!data.id || typeof data.id == undefined) throw console.error(`some of data element has no valid id key please insert iterator with id key for all of its elements`);
            return data.id
        });
        //set entities
        let entities      = data_iterator.map(data => {
            let entity = {...data};
            
            if(parent_id_key){
                const entityMap = new Map();
                entityMap.set(parent_id_key, parent_id);
                const parent_id_data = Object.fromEntries(entityMap); 
                entity = {...data, ...parent_id_data}
            };
            return entity;
        }); 
        
        entities = entities.reduce((prev,curr,i) =>({...prev,[ids[i]] : curr }),{})
        return {ids, entities};
    }


    _loopRun(data, key, parent_id_key = false)
    {
 
    let data_found = {
        ids      : [],
        entities : {}
    };
       //normalize first nest only
       if(!key){
        let found = this._normalizer(iterator, false, false);
        
        if(this.config.sort.isSort) found =  this._sortData(found);
        
        return found
        }
    
      if(data[key]){
        const found = this._normalizer(data[key], parent_id_key, data.id);
        if(found.ids?.length !== 0){
            
            data_found.ids      = [...data_found.ids, ...found.ids] ;  
            data_found.entities = {...data_found.entities, ...found.entities};  
        } 
        
    } 
        
    //find key in nested data
      if(data instanceof Array && !data[key]){

        data.forEach(param => {  
             this._loopRun(param, key, parent_id_key);   
        });

      }

      if(data instanceof Object && !data[key]){
         for(let prop in data){
             const param = data[prop]
              
             if(param instanceof Object || param instanceof Array) {   
               const result = this._loopRun(param, key, parent_id_key);
               
                if(result.ids?.length !== 0){
                    result.ids.forEach(id => {
                        
                        //check id exist to avoid repeated items push (if parent id key not has set)
                        if(id){
                            const check_exist_id = data_found.ids.find(oldId => {
                                return (+oldId === +id && !parent_id_key)
                            });
                           if(check_exist_id) return;
                        }

                        data_found.ids.push(+id);


                        data_found.entities = {...data_found.entities, ...result.entities};  
                    });
                     
                } 

             }
 
         }
      }

      //overwrite newid
      const uniqIdsSet = new Set(data_found.ids);
            data_found.ids = Array.from(uniqIdsSet);

      return data_found; 
    }

    set_config(custom_config){
        this.config = {...this.config, ...custom_config};
    }    

    run(){
        
        let data_found = {
            ids      : [],
            entities : {}
        };

        const {iterator} = this.config;

        const parent_id_key =  this.config.parent_id_key;
        const key =  this.config.key;
        
        if(!(this.config.iterator && (this.config.iterator instanceof Array || this.config.iterator instanceof Object)) ) return console.error('please set correct iterator config first');

          //find key in nested data
          const result = this._loopRun(iterator, key, parent_id_key);
        
          if(result.ids?.length !== 0)
          {
            data_found.ids      = [...data_found.ids, ...result.ids] ;  
            data_found.entities = {...data_found.entities, ...result.entities};  
          }    

        if(this.config.sort.isSort) data_found =  this._sortData(data_found);
         
        return data_found;
    
    }

    gregorian_months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    persisan_months  = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
    _sortData(data){
        //error handle for entered key to compare
        const check_key_to_compare_exist = data.ids.every(id => data.entities[id][this.config.sort.keyToCompare]);

        if(!check_key_to_compare_exist){
            console.error('your key to compare not found for sort');
            return data;
        }
        
        //check if all of data is number type
        const is_number = data.ids.every(id => {
             return isFinite(data.entities[id][this.config.sort.keyToCompare]);
        });

        //sort by number
        if(is_number) return data = this._sortByNumber(data);
        
        //sort by month
        const month_to_check = (this.config.sort.lang === 'fa') ? this.persisan_months : this.gregorian_months;
        
        const is_month       = data.ids.every(id => {
            const item = data.entities[id];
            const monthPartOfInput = item[this.config.sort.keyToCompare].toLowerCase().trim();
            return month_to_check.indexOf(monthPartOfInput) !== -1;
        });
        if(is_month && this.config.sort.strictSort === 'month') return this._sortByDate(data, month_to_check);

        //sort by lang
        return this._sortByAlphabet(data);
    }

    _sortByDate(data, month_to_check){
        
        const key = this.config.sort.keyToCompare;
        const is_reverse = this.config.sort.reverse;
        
        let new_ids = data.ids.sort((a, b) => {
            a = data.entities[a];
            b = data.entities[b];

            const a_index = month_to_check.indexOf(a[key]);
            const b_index = month_to_check.indexOf(b[key]);
            return a_index - b_index
        });
        if(is_reverse) new_ids.reverse();

        const new_entities      = new_ids.map(id => data.entities[id]);

        //sort ids
        return {
            ids          : [...new_ids],
            entities     : {...new_entities}
        }
    }

    _sortByNumber(data){
        const key = this.config.sort.keyToCompare;
        const is_reverse = this.config.sort.reverse;
        
        //sort entities 
        const new_ids = data.ids.sort((a,b) => {
            a = data.entities[a];
            b = data.entities[b];
            return (is_reverse) ? a[key] - b[key] : b[key] - a[key]
        });
        const new_entities  = new_ids.map(id => data.entities[id]);

        //sort ids
        return {
            ids          : [...new_ids],
            entities : {...new_entities}
        }

    }
    
    _sortByAlphabet(data){
        const key = this.config.sort.keyToCompare;
        const is_reverse = this.config.sort.reverse;
        const lang     = this.config.sort.lang;
        const entities = data.entities;
        const array_of_keys = data.ids.map(id => {
            const item = entities[id];
            return item[key] + '_' + item.id;
        });
        //compare keys
        const collator = new Intl.Collator(lang);
        
        const sortedLetters = array_of_keys.sort(collator.compare);
      
        //sort default data by sorted keys
        const new_ids = new Array();
        let is_not_found = false;

        sortedLetters.forEach(item => {
            const id = item.split('_')[1];
            const title = item.split('_')[0];

            const found_item = data.ids.find( found_id => {
                const ent = entities[found_id];
            if(!ent[key] || !id) is_not_found = true
              return (ent[key] === title && +ent.id === +id)

            });

            new_ids.push(found_item);
        })

        if(is_not_found){
            new_entities = [...entities];
            console.error('please enter existing key or insert data that has unique id for values')
            return data;
        } 

        //sort type check
        if(is_reverse)  new_ids.reverse();
        
        //make ids
        const new_entities = new_ids.map(id => entities[id]);
        
        return {
            ids      : [ ...new_ids ],
            entities : { ...new_entities }
        }
    }
}

const SN = new SimpleNormalizer();

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
/* harmony import */ var easy_normalizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easy-normalizer */ "./node_modules/easy-normalizer/index.js");
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
easy_normalizer__WEBPACK_IMPORTED_MODULE_0__.SN.set_config({
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
var result = easy_normalizer__WEBPACK_IMPORTED_MODULE_0__.SN.run();
console.log(result);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNWU0ODNhMDFiMmEwNmI3ODY3NWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUc7QUFDakI7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxrRUFBa0U7QUFDbkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxREFBcUQseUJBQXlCLElBQUk7QUFDbEYsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFJQLE1BQThGO0FBQzlGLE1BQW9GO0FBQ3BGLE1BQTJGO0FBQzNGLE1BQThHO0FBQzlHLE1BQXVHO0FBQ3ZHLE1BQXVHO0FBQ3ZHLE1BQWtHO0FBQ2xHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNEM7QUFDcEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxDQUNyQjtBQUNJQyxFQUFBQSxFQUFFLEVBQUcsQ0FEVDtBQUVJQyxFQUFBQSxTQUFTLEVBQUcsUUFGaEI7QUFHSUMsRUFBQUEsUUFBUSxFQUFJLFdBSGhCO0FBSUlDLEVBQUFBLE9BQU8sRUFBSyxDQUNSO0FBQ0lILElBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlJLElBQUFBLElBQUksRUFBRztBQUZYLEdBRFEsRUFLUjtBQUNJSixJQUFBQSxFQUFFLEVBQUUsR0FEUjtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQUxRLEVBU1I7QUFDSUosSUFBQUEsRUFBRSxFQUFFLEdBRFI7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FUUSxFQWFSO0FBQ0lKLElBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlJLElBQUFBLElBQUksRUFBRztBQUZYLEdBYlEsRUFpQlI7QUFDSUosSUFBQUEsRUFBRSxFQUFFLEdBRFI7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FqQlEsQ0FKaEI7QUEwQklDLEVBQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lMLElBQUFBLEVBQUUsRUFBRyxHQURUO0FBRUlJLElBQUFBLElBQUksRUFBRztBQUZYLEdBRE0sRUFLTjtBQUNJSixJQUFBQSxFQUFFLEVBQUcsR0FEVDtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQUxNLEVBU047QUFDSUosSUFBQUEsRUFBRSxFQUFHLEdBRFQ7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FUTSxFQWFOO0FBQ0lKLElBQUFBLEVBQUUsRUFBRyxHQURUO0FBRUlJLElBQUFBLElBQUksRUFBRztBQUZYLEdBYk0sRUFpQk47QUFDSUosSUFBQUEsRUFBRSxFQUFHLEdBRFQ7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FqQk07QUExQmQsQ0FEcUIsRUFrRHJCO0FBQ0lKLEVBQUFBLEVBQUUsRUFBRyxDQURUO0FBRUlDLEVBQUFBLFNBQVMsRUFBRyxPQUZoQjtBQUdJQyxFQUFBQSxRQUFRLEVBQUksV0FIaEI7QUFJSUMsRUFBQUEsT0FBTyxFQUFLLENBQ1I7QUFDSUgsSUFBQUEsRUFBRSxFQUFFLEdBRFI7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FEUSxFQUtSO0FBQ0lKLElBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlJLElBQUFBLElBQUksRUFBRztBQUZYLEdBTFEsRUFTUjtBQUNJSixJQUFBQSxFQUFFLEVBQUUsR0FEUjtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQVRRLEVBYVI7QUFDSUosSUFBQUEsRUFBRSxFQUFFLEdBRFI7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FiUSxFQWlCUjtBQUNJSixJQUFBQSxFQUFFLEVBQUUsR0FEUjtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQWpCUSxDQUpoQjtBQTBCSUMsRUFBQUEsUUFBUSxFQUFFLENBQ047QUFDSUwsSUFBQUEsRUFBRSxFQUFHLEdBRFQ7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FETSxFQUtOO0FBQ0lKLElBQUFBLEVBQUUsRUFBRyxHQURUO0FBRUlJLElBQUFBLElBQUksRUFBRztBQUZYLEdBTE0sRUFTTjtBQUNJSixJQUFBQSxFQUFFLEVBQUcsR0FEVDtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQVRNLEVBYU47QUFDSUosSUFBQUEsRUFBRSxFQUFHLEdBRFQ7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FiTSxFQWlCTjtBQUNJSixJQUFBQSxFQUFFLEVBQUcsR0FEVDtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQWpCTTtBQTFCZCxDQWxEcUIsRUFtR3JCO0FBQ0lKLEVBQUFBLEVBQUUsRUFBRyxDQURUO0FBRUlDLEVBQUFBLFNBQVMsRUFBRyxNQUZoQjtBQUdJQyxFQUFBQSxRQUFRLEVBQUksU0FIaEI7QUFJSUMsRUFBQUEsT0FBTyxFQUFLLENBQ1I7QUFDSUgsSUFBQUEsRUFBRSxFQUFFLEdBRFI7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FEUSxFQUtSO0FBQ0lKLElBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlJLElBQUFBLElBQUksRUFBRztBQUZYLEdBTFEsRUFTUjtBQUNJSixJQUFBQSxFQUFFLEVBQUUsR0FEUjtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQVRRLEVBYVI7QUFDSUosSUFBQUEsRUFBRSxFQUFFLEdBRFI7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FiUSxFQWlCUjtBQUNJSixJQUFBQSxFQUFFLEVBQUUsR0FEUjtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQWpCUSxDQUpoQjtBQTBCSUMsRUFBQUEsUUFBUSxFQUFFLENBQ047QUFDSUwsSUFBQUEsRUFBRSxFQUFHLEdBRFQ7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FETSxFQUtOO0FBQ0lKLElBQUFBLEVBQUUsRUFBRyxHQURUO0FBRUlJLElBQUFBLElBQUksRUFBRztBQUZYLEdBTE0sRUFTTjtBQUNJSixJQUFBQSxFQUFFLEVBQUcsR0FEVDtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQVRNLEVBYU47QUFDSUosSUFBQUEsRUFBRSxFQUFHLEdBRFQ7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FiTSxFQWlCTjtBQUNJSixJQUFBQSxFQUFFLEVBQUcsR0FEVDtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQWpCTTtBQTFCZCxDQW5HcUIsRUFvSnJCO0FBQ0lKLEVBQUFBLEVBQUUsRUFBRyxDQURUO0FBRUlDLEVBQUFBLFNBQVMsRUFBRyxTQUZoQjtBQUdJQyxFQUFBQSxRQUFRLEVBQUksUUFIaEI7QUFJSUMsRUFBQUEsT0FBTyxFQUFLLENBQ1I7QUFDSUgsSUFBQUEsRUFBRSxFQUFFLEdBRFI7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FEUSxFQUtSO0FBQ0lKLElBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlJLElBQUFBLElBQUksRUFBRztBQUZYLEdBTFEsRUFTUjtBQUNJSixJQUFBQSxFQUFFLEVBQUUsSUFEUjtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQVRRLEVBYVI7QUFDSUosSUFBQUEsRUFBRSxFQUFFLEdBRFI7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FiUSxFQWlCUjtBQUNJSixJQUFBQSxFQUFFLEVBQUUsR0FEUjtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQWpCUSxDQUpoQjtBQTBCSUMsRUFBQUEsUUFBUSxFQUFFLENBQ047QUFDSUwsSUFBQUEsRUFBRSxFQUFHLEdBRFQ7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FETSxFQUtOO0FBQ0lKLElBQUFBLEVBQUUsRUFBRyxHQURUO0FBRUlJLElBQUFBLElBQUksRUFBRztBQUZYLEdBTE0sRUFTTjtBQUNJSixJQUFBQSxFQUFFLEVBQUcsR0FEVDtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQVRNLEVBYU47QUFDSUosSUFBQUEsRUFBRSxFQUFHLEdBRFQ7QUFFSUksSUFBQUEsSUFBSSxFQUFHO0FBRlgsR0FiTSxFQWlCTjtBQUNJSixJQUFBQSxFQUFFLEVBQUcsR0FEVDtBQUVJSSxJQUFBQSxJQUFJLEVBQUc7QUFGWCxHQWpCTTtBQTFCZCxDQXBKcUIsQ0FBekI7QUF3TUFOLDBEQUFBLENBQWM7QUFDVlMsRUFBQUEsUUFBUSxFQUFRUixnQkFETjtBQUVWUyxFQUFBQSxHQUFHLEVBQWEsU0FGTjtBQUdWQyxFQUFBQSxhQUFhLEVBQUcsU0FITjtBQUlWQyxFQUFBQSxJQUFJLEVBQVk7QUFDWkMsSUFBQUEsTUFBTSxFQUFTLElBREg7QUFFWkMsSUFBQUEsWUFBWSxFQUFHLE1BRkg7QUFHWkMsSUFBQUEsT0FBTyxFQUFRLEtBSEg7QUFJWkMsSUFBQUEsSUFBSSxFQUFXLElBSkg7QUFLWkMsSUFBQUEsVUFBVSxFQUFLO0FBTEg7QUFKTixDQUFkO0FBYUEsSUFBTUMsTUFBTSxHQUFHbEIsbURBQUEsRUFBZjtBQUVBb0IsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVosRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vc3R5bGUuY3NzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vbm9kZV9tb2R1bGVzL2Vhc3ktbm9ybWFsaXplci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci8uL3N0eWxlLmNzcz9mNjk2Iiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLW5vcm1hbGl6ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2ltcGxlLW5vcm1hbGl6ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2ltcGxlLW5vcm1hbGl6ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpbXBsZS1ub3JtYWxpemVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2ltcGxlLW5vcm1hbGl6ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW1wbGUtbm9ybWFsaXplci8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcclxuICogQHNlZSBtdXN0IHNldCBpdGVyYXRvciBhbmQga2V5IG9mIGl0IHdpdGggdW5pcXVlIGlkXHJcbiAqIEBzZWUgbXVzdCBzZXQgaXRlcmF0b3Igd2l0aCBpZCBrZXkgZm9yIGFsbCBlbGVtZW50cyBcclxuICovXHJcbiBjbGFzcyBTaW1wbGVOb3JtYWxpemVyIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBpdGVyYXRvcjogbnVsbCxcclxuICAgICAgICBrZXk6IG51bGwsXHJcbiAgICAgICAgcGFyZW50X2lkX2tleSA6IGZhbHNlLFxyXG4gICAgICAgIHNvcnQgOiB7XHJcbiAgICAgICAgICAgIGlzU29ydCAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICBsYW5nICAgICAgICAgOiAnZW4nLFxyXG4gICAgICAgICAgICBrZXlUb0NvbXBhcmUgOiAnaWQnLFxyXG4gICAgICAgICAgICByZXZlcnNlICAgICAgOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RyaWN0U29ydCAgIDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBfbm9ybWFsaXplcihkYXRhX2l0ZXJhdG9yLCBwYXJlbnRfaWRfa2V5LCBwYXJlbnRfaWQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vc2V0IGlkc1xyXG4gICAgICAgIGNvbnN0IGlkcyAgICAgICAgICAgPSBkYXRhX2l0ZXJhdG9yLm1hcCgoZGF0YSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZighZGF0YS5pZCB8fCB0eXBlb2YgZGF0YS5pZCA9PSB1bmRlZmluZWQpIHRocm93IGNvbnNvbGUuZXJyb3IoYHNvbWUgb2YgZGF0YSBlbGVtZW50IGhhcyBubyB2YWxpZCBpZCBrZXkgcGxlYXNlIGluc2VydCBpdGVyYXRvciB3aXRoIGlkIGtleSBmb3IgYWxsIG9mIGl0cyBlbGVtZW50c2ApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vc2V0IGVudGl0aWVzXHJcbiAgICAgICAgbGV0IGVudGl0aWVzICAgICAgPSBkYXRhX2l0ZXJhdG9yLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgbGV0IGVudGl0eSA9IHsuLi5kYXRhfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHBhcmVudF9pZF9rZXkpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW50aXR5TWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICAgICAgZW50aXR5TWFwLnNldChwYXJlbnRfaWRfa2V5LCBwYXJlbnRfaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50X2lkX2RhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZW50aXR5TWFwKTsgXHJcbiAgICAgICAgICAgICAgICBlbnRpdHkgPSB7Li4uZGF0YSwgLi4ucGFyZW50X2lkX2RhdGF9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGVudGl0aWVzID0gZW50aXRpZXMucmVkdWNlKChwcmV2LGN1cnIsaSkgPT4oey4uLnByZXYsW2lkc1tpXV0gOiBjdXJyIH0pLHt9KVxyXG4gICAgICAgIHJldHVybiB7aWRzLCBlbnRpdGllc307XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9sb29wUnVuKGRhdGEsIGtleSwgcGFyZW50X2lkX2tleSA9IGZhbHNlKVxyXG4gICAge1xyXG4gXHJcbiAgICBsZXQgZGF0YV9mb3VuZCA9IHtcclxuICAgICAgICBpZHMgICAgICA6IFtdLFxyXG4gICAgICAgIGVudGl0aWVzIDoge31cclxuICAgIH07XHJcbiAgICAgICAvL25vcm1hbGl6ZSBmaXJzdCBuZXN0IG9ubHlcclxuICAgICAgIGlmKCFrZXkpe1xyXG4gICAgICAgIGxldCBmb3VuZCA9IHRoaXMuX25vcm1hbGl6ZXIoaXRlcmF0b3IsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jb25maWcuc29ydC5pc1NvcnQpIGZvdW5kID0gIHRoaXMuX3NvcnREYXRhKGZvdW5kKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZm91bmRcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgaWYoZGF0YVtrZXldKXtcclxuICAgICAgICBjb25zdCBmb3VuZCA9IHRoaXMuX25vcm1hbGl6ZXIoZGF0YVtrZXldLCBwYXJlbnRfaWRfa2V5LCBkYXRhLmlkKTtcclxuICAgICAgICBpZihmb3VuZC5pZHM/Lmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYXRhX2ZvdW5kLmlkcyAgICAgID0gWy4uLmRhdGFfZm91bmQuaWRzLCAuLi5mb3VuZC5pZHNdIDsgIFxyXG4gICAgICAgICAgICBkYXRhX2ZvdW5kLmVudGl0aWVzID0gey4uLmRhdGFfZm91bmQuZW50aXRpZXMsIC4uLmZvdW5kLmVudGl0aWVzfTsgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgLy9maW5kIGtleSBpbiBuZXN0ZWQgZGF0YVxyXG4gICAgICBpZihkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgIWRhdGFba2V5XSl7XHJcblxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChwYXJhbSA9PiB7ICBcclxuICAgICAgICAgICAgIHRoaXMuX2xvb3BSdW4ocGFyYW0sIGtleSwgcGFyZW50X2lkX2tleSk7ICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihkYXRhIGluc3RhbmNlb2YgT2JqZWN0ICYmICFkYXRhW2tleV0pe1xyXG4gICAgICAgICBmb3IobGV0IHByb3AgaW4gZGF0YSl7XHJcbiAgICAgICAgICAgICBjb25zdCBwYXJhbSA9IGRhdGFbcHJvcF1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGlmKHBhcmFtIGluc3RhbmNlb2YgT2JqZWN0IHx8IHBhcmFtIGluc3RhbmNlb2YgQXJyYXkpIHsgICBcclxuICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fbG9vcFJ1bihwYXJhbSwga2V5LCBwYXJlbnRfaWRfa2V5KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuaWRzPy5sZW5ndGggIT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pZHMuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlkIGV4aXN0IHRvIGF2b2lkIHJlcGVhdGVkIGl0ZW1zIHB1c2ggKGlmIHBhcmVudCBpZCBrZXkgbm90IGhhcyBzZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrX2V4aXN0X2lkID0gZGF0YV9mb3VuZC5pZHMuZmluZChvbGRJZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgrb2xkSWQgPT09ICtpZCAmJiAhcGFyZW50X2lkX2tleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjaGVja19leGlzdF9pZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhX2ZvdW5kLmlkcy5wdXNoKCtpZCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV9mb3VuZC5lbnRpdGllcyA9IHsuLi5kYXRhX2ZvdW5kLmVudGl0aWVzLCAuLi5yZXN1bHQuZW50aXRpZXN9OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL292ZXJ3cml0ZSBuZXdpZFxyXG4gICAgICBjb25zdCB1bmlxSWRzU2V0ID0gbmV3IFNldChkYXRhX2ZvdW5kLmlkcyk7XHJcbiAgICAgICAgICAgIGRhdGFfZm91bmQuaWRzID0gQXJyYXkuZnJvbSh1bmlxSWRzU2V0KTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhX2ZvdW5kOyBcclxuICAgIH1cclxuXHJcbiAgICBzZXRfY29uZmlnKGN1c3RvbV9jb25maWcpe1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gey4uLnRoaXMuY29uZmlnLCAuLi5jdXN0b21fY29uZmlnfTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcnVuKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRhdGFfZm91bmQgPSB7XHJcbiAgICAgICAgICAgIGlkcyAgICAgIDogW10sXHJcbiAgICAgICAgICAgIGVudGl0aWVzIDoge31cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB7aXRlcmF0b3J9ID0gdGhpcy5jb25maWc7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudF9pZF9rZXkgPSAgdGhpcy5jb25maWcucGFyZW50X2lkX2tleTtcclxuICAgICAgICBjb25zdCBrZXkgPSAgdGhpcy5jb25maWcua2V5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCEodGhpcy5jb25maWcuaXRlcmF0b3IgJiYgKHRoaXMuY29uZmlnLml0ZXJhdG9yIGluc3RhbmNlb2YgQXJyYXkgfHwgdGhpcy5jb25maWcuaXRlcmF0b3IgaW5zdGFuY2VvZiBPYmplY3QpKSApIHJldHVybiBjb25zb2xlLmVycm9yKCdwbGVhc2Ugc2V0IGNvcnJlY3QgaXRlcmF0b3IgY29uZmlnIGZpcnN0Jyk7XHJcblxyXG4gICAgICAgICAgLy9maW5kIGtleSBpbiBuZXN0ZWQgZGF0YVxyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fbG9vcFJ1bihpdGVyYXRvciwga2V5LCBwYXJlbnRfaWRfa2V5KTtcclxuICAgICAgICBcclxuICAgICAgICAgIGlmKHJlc3VsdC5pZHM/Lmxlbmd0aCAhPT0gMClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YV9mb3VuZC5pZHMgICAgICA9IFsuLi5kYXRhX2ZvdW5kLmlkcywgLi4ucmVzdWx0Lmlkc10gOyAgXHJcbiAgICAgICAgICAgIGRhdGFfZm91bmQuZW50aXRpZXMgPSB7Li4uZGF0YV9mb3VuZC5lbnRpdGllcywgLi4ucmVzdWx0LmVudGl0aWVzfTsgIFxyXG4gICAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgaWYodGhpcy5jb25maWcuc29ydC5pc1NvcnQpIGRhdGFfZm91bmQgPSAgdGhpcy5fc29ydERhdGEoZGF0YV9mb3VuZCk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBkYXRhX2ZvdW5kO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ3JlZ29yaWFuX21vbnRocyA9IFtcImphblwiLCBcImZlYlwiLCBcIm1hclwiLCBcImFwclwiLCBcIm1heVwiLCBcImp1blwiLCBcImp1bFwiLCBcImF1Z1wiLCBcInNlcFwiLCBcIm9jdFwiLCBcIm5vdlwiLCBcImRlY1wiXTtcclxuICAgIHBlcnNpc2FuX21vbnRocyAgPSBbXCLZgdix2YjYsdiv24zZhlwiLCBcItin2LHYr9uM2KjZh9i02KpcIiwgXCLYrtix2K/Yp9ivXCIsIFwi2KrbjNixXCIsIFwi2YXYsdiv2KfYr1wiLCBcIti02YfYsduM2YjYsVwiLCBcItmF2YfYsVwiLCBcItii2KjYp9mGXCIsIFwi2KLYsNixXCIsIFwi2K/bjFwiLCBcItio2YfZhdmGXCIsIFwi2KfYs9mB2YbYr1wiXTtcclxuICAgIF9zb3J0RGF0YShkYXRhKXtcclxuICAgICAgICAvL2Vycm9yIGhhbmRsZSBmb3IgZW50ZXJlZCBrZXkgdG8gY29tcGFyZVxyXG4gICAgICAgIGNvbnN0IGNoZWNrX2tleV90b19jb21wYXJlX2V4aXN0ID0gZGF0YS5pZHMuZXZlcnkoaWQgPT4gZGF0YS5lbnRpdGllc1tpZF1bdGhpcy5jb25maWcuc29ydC5rZXlUb0NvbXBhcmVdKTtcclxuXHJcbiAgICAgICAgaWYoIWNoZWNrX2tleV90b19jb21wYXJlX2V4aXN0KXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigneW91ciBrZXkgdG8gY29tcGFyZSBub3QgZm91bmQgZm9yIHNvcnQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY2hlY2sgaWYgYWxsIG9mIGRhdGEgaXMgbnVtYmVyIHR5cGVcclxuICAgICAgICBjb25zdCBpc19udW1iZXIgPSBkYXRhLmlkcy5ldmVyeShpZCA9PiB7XHJcbiAgICAgICAgICAgICByZXR1cm4gaXNGaW5pdGUoZGF0YS5lbnRpdGllc1tpZF1bdGhpcy5jb25maWcuc29ydC5rZXlUb0NvbXBhcmVdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9zb3J0IGJ5IG51bWJlclxyXG4gICAgICAgIGlmKGlzX251bWJlcikgcmV0dXJuIGRhdGEgPSB0aGlzLl9zb3J0QnlOdW1iZXIoZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9zb3J0IGJ5IG1vbnRoXHJcbiAgICAgICAgY29uc3QgbW9udGhfdG9fY2hlY2sgPSAodGhpcy5jb25maWcuc29ydC5sYW5nID09PSAnZmEnKSA/IHRoaXMucGVyc2lzYW5fbW9udGhzIDogdGhpcy5ncmVnb3JpYW5fbW9udGhzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlzX21vbnRoICAgICAgID0gZGF0YS5pZHMuZXZlcnkoaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZGF0YS5lbnRpdGllc1tpZF07XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoUGFydE9mSW5wdXQgPSBpdGVtW3RoaXMuY29uZmlnLnNvcnQua2V5VG9Db21wYXJlXS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoX3RvX2NoZWNrLmluZGV4T2YobW9udGhQYXJ0T2ZJbnB1dCkgIT09IC0xO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKGlzX21vbnRoICYmIHRoaXMuY29uZmlnLnNvcnQuc3RyaWN0U29ydCA9PT0gJ21vbnRoJykgcmV0dXJuIHRoaXMuX3NvcnRCeURhdGUoZGF0YSwgbW9udGhfdG9fY2hlY2spO1xyXG5cclxuICAgICAgICAvL3NvcnQgYnkgbGFuZ1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0QnlBbHBoYWJldChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBfc29ydEJ5RGF0ZShkYXRhLCBtb250aF90b19jaGVjayl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWcuc29ydC5rZXlUb0NvbXBhcmU7XHJcbiAgICAgICAgY29uc3QgaXNfcmV2ZXJzZSA9IHRoaXMuY29uZmlnLnNvcnQucmV2ZXJzZTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbmV3X2lkcyA9IGRhdGEuaWRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgYSA9IGRhdGEuZW50aXRpZXNbYV07XHJcbiAgICAgICAgICAgIGIgPSBkYXRhLmVudGl0aWVzW2JdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYV9pbmRleCA9IG1vbnRoX3RvX2NoZWNrLmluZGV4T2YoYVtrZXldKTtcclxuICAgICAgICAgICAgY29uc3QgYl9pbmRleCA9IG1vbnRoX3RvX2NoZWNrLmluZGV4T2YoYltrZXldKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFfaW5kZXggLSBiX2luZGV4XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoaXNfcmV2ZXJzZSkgbmV3X2lkcy5yZXZlcnNlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld19lbnRpdGllcyAgICAgID0gbmV3X2lkcy5tYXAoaWQgPT4gZGF0YS5lbnRpdGllc1tpZF0pO1xyXG5cclxuICAgICAgICAvL3NvcnQgaWRzXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWRzICAgICAgICAgIDogWy4uLm5ld19pZHNdLFxyXG4gICAgICAgICAgICBlbnRpdGllcyAgICAgOiB7Li4ubmV3X2VudGl0aWVzfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc29ydEJ5TnVtYmVyKGRhdGEpe1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnLnNvcnQua2V5VG9Db21wYXJlO1xyXG4gICAgICAgIGNvbnN0IGlzX3JldmVyc2UgPSB0aGlzLmNvbmZpZy5zb3J0LnJldmVyc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9zb3J0IGVudGl0aWVzIFxyXG4gICAgICAgIGNvbnN0IG5ld19pZHMgPSBkYXRhLmlkcy5zb3J0KChhLGIpID0+IHtcclxuICAgICAgICAgICAgYSA9IGRhdGEuZW50aXRpZXNbYV07XHJcbiAgICAgICAgICAgIGIgPSBkYXRhLmVudGl0aWVzW2JdO1xyXG4gICAgICAgICAgICByZXR1cm4gKGlzX3JldmVyc2UpID8gYVtrZXldIC0gYltrZXldIDogYltrZXldIC0gYVtrZXldXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbmV3X2VudGl0aWVzICA9IG5ld19pZHMubWFwKGlkID0+IGRhdGEuZW50aXRpZXNbaWRdKTtcclxuXHJcbiAgICAgICAgLy9zb3J0IGlkc1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkcyAgICAgICAgICA6IFsuLi5uZXdfaWRzXSxcclxuICAgICAgICAgICAgZW50aXRpZXMgOiB7Li4ubmV3X2VudGl0aWVzfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9zb3J0QnlBbHBoYWJldChkYXRhKXtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZy5zb3J0LmtleVRvQ29tcGFyZTtcclxuICAgICAgICBjb25zdCBpc19yZXZlcnNlID0gdGhpcy5jb25maWcuc29ydC5yZXZlcnNlO1xyXG4gICAgICAgIGNvbnN0IGxhbmcgICAgID0gdGhpcy5jb25maWcuc29ydC5sYW5nO1xyXG4gICAgICAgIGNvbnN0IGVudGl0aWVzID0gZGF0YS5lbnRpdGllcztcclxuICAgICAgICBjb25zdCBhcnJheV9vZl9rZXlzID0gZGF0YS5pZHMubWFwKGlkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGVudGl0aWVzW2lkXTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1ba2V5XSArICdfJyArIGl0ZW0uaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9jb21wYXJlIGtleXNcclxuICAgICAgICBjb25zdCBjb2xsYXRvciA9IG5ldyBJbnRsLkNvbGxhdG9yKGxhbmcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNvcnRlZExldHRlcnMgPSBhcnJheV9vZl9rZXlzLnNvcnQoY29sbGF0b3IuY29tcGFyZSk7XHJcbiAgICAgIFxyXG4gICAgICAgIC8vc29ydCBkZWZhdWx0IGRhdGEgYnkgc29ydGVkIGtleXNcclxuICAgICAgICBjb25zdCBuZXdfaWRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgbGV0IGlzX25vdF9mb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBzb3J0ZWRMZXR0ZXJzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gaXRlbS5zcGxpdCgnXycpWzFdO1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGl0ZW0uc3BsaXQoJ18nKVswXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kX2l0ZW0gPSBkYXRhLmlkcy5maW5kKCBmb3VuZF9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbnQgPSBlbnRpdGllc1tmb3VuZF9pZF07XHJcbiAgICAgICAgICAgIGlmKCFlbnRba2V5XSB8fCAhaWQpIGlzX25vdF9mb3VuZCA9IHRydWVcclxuICAgICAgICAgICAgICByZXR1cm4gKGVudFtrZXldID09PSB0aXRsZSAmJiArZW50LmlkID09PSAraWQpXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG5ld19pZHMucHVzaChmb3VuZF9pdGVtKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZihpc19ub3RfZm91bmQpe1xyXG4gICAgICAgICAgICBuZXdfZW50aXRpZXMgPSBbLi4uZW50aXRpZXNdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdwbGVhc2UgZW50ZXIgZXhpc3Rpbmcga2V5IG9yIGluc2VydCBkYXRhIHRoYXQgaGFzIHVuaXF1ZSBpZCBmb3IgdmFsdWVzJylcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy9zb3J0IHR5cGUgY2hlY2tcclxuICAgICAgICBpZihpc19yZXZlcnNlKSAgbmV3X2lkcy5yZXZlcnNlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9tYWtlIGlkc1xyXG4gICAgICAgIGNvbnN0IG5ld19lbnRpdGllcyA9IG5ld19pZHMubWFwKGlkID0+IGVudGl0aWVzW2lkXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWRzICAgICAgOiBbIC4uLm5ld19pZHMgXSxcclxuICAgICAgICAgICAgZW50aXRpZXMgOiB7IC4uLm5ld19lbnRpdGllcyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU04gPSBuZXcgU2ltcGxlTm9ybWFsaXplcigpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFNOIH0gZnJvbSAnZWFzeS1ub3JtYWxpemVyJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBzYW1wbGVfdXNlcl9kYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBmaXJzdG5hbWUgOiAnYmVobmFtJyxcclxuICAgICAgICBsYXN0bmFtZSAgOiAncmFoaW1wb3VyJyxcclxuICAgICAgICBjbGFzc2VzICAgOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDoxMjMsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2NsdGVzdDEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDoxMjQsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2NsdGVzdDInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDoxMjUsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2NsdGVzdDMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDoxMjYsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2NsdGVzdDQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDoxMjcsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2NsdGVzdDUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcnRpY2xlcyA6W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDIzMSxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYXJ0aWNsZXRlc3QxJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDIzMixcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYXJ0aWNsZXRlc3QyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDIzMyxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYXJ0aWNsZXRlc3QzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDIzNCxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYXJ0aWNsZXRlc3Q0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDIzNSxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYXJ0aWNsZXRlc3Q1J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQgOiAyLFxyXG4gICAgICAgIGZpcnN0bmFtZSA6ICduYXNlcicsXHJcbiAgICAgICAgbGFzdG5hbWUgIDogJ3JhaGltcG91cicsXHJcbiAgICAgICAgY2xhc3NlcyAgIDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MjMzLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICduY2x0ZXN0MSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjI0NCxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnbmNsdGVzdDInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDoyNTUsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ25jbHRlc3QzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MjY2LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICduY2x0ZXN0NCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjI3NyxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnbmNsdGVzdDUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcnRpY2xlcyA6W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDIzMSxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnbmFydGljbGV0ZXN0MSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAyMzIsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ25hcnRpY2xldGVzdDInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogMjMzLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICduYXJ0aWNsZXRlc3QzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDIzNCxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnbmFydGljbGV0ZXN0NCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAyMzUsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ25hcnRpY2xldGVzdDUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZCA6IDMsXHJcbiAgICAgICAgZmlyc3RuYW1lIDogJ2FtaXInLFxyXG4gICAgICAgIGxhc3RuYW1lICA6ICdoZWlkYXJpJyxcclxuICAgICAgICBjbGFzc2VzICAgOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDozMzEsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FjbHRlc3QxJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MzMyLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdhY2x0ZXN0MidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjMzMyxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYWNsdGVzdDMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDozMzQsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FjbHRlc3Q0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6MzM1LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdhY2x0ZXN0NSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGFydGljbGVzIDpbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogMzMxLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdhYXJ0aWNsZXRlc3QxJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDMzMixcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYWFydGljbGV0ZXN0MidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiAzMzMsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2FhcnRpY2xldGVzdDMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogMzM0LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdhYXJ0aWNsZXRlc3Q0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDMzNSxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnYXJ0aWNsZXRlc3Q1J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQgOiA0LFxyXG4gICAgICAgIGZpcnN0bmFtZSA6ICdob3NzZWluJyxcclxuICAgICAgICBsYXN0bmFtZSAgOiAnYWhtYWRpJyxcclxuICAgICAgICBjbGFzc2VzICAgOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDo0MjMsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2hjbHRlc3QxJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6NDI0LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdoY2x0ZXN0MidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjQxMjUsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2hjbHRlc3QzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6NDI2LFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdoY2x0ZXN0NCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOjQyNyxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnaGNsdGVzdDUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcnRpY2xlcyA6W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDQzMSxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnaGFydGljbGV0ZXN0MSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiA0MzIsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2hhcnRpY2xldGVzdDInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogNDMzLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6ICdoYXJ0aWNsZXRlc3QzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IDQzNCxcclxuICAgICAgICAgICAgICAgIG5hbWUgOiAnaGFydGljbGV0ZXN0NCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiA0MzUsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ2hhcnRpY2xldGVzdDUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXTtcclxuXHJcblxyXG5TTi5zZXRfY29uZmlnKHtcclxuICAgIGl0ZXJhdG9yICAgICAgOiBzYW1wbGVfdXNlcl9kYXRhLFxyXG4gICAga2V5ICAgICAgICAgICA6ICdjbGFzc2VzJyxcclxuICAgIHBhcmVudF9pZF9rZXkgOiAndXNlcl9pZCcsXHJcbiAgICBzb3J0ICAgICAgICAgIDoge1xyXG4gICAgICAgIGlzU29ydCAgICAgICA6IHRydWUsXHJcbiAgICAgICAga2V5VG9Db21wYXJlIDogJ25hbWUnLFxyXG4gICAgICAgIHJldmVyc2UgICAgICA6IGZhbHNlLFxyXG4gICAgICAgIGxhbmcgICAgICAgICA6ICdlbicsXHJcbiAgICAgICAgc3RyaWN0U29ydCAgIDogJ21vbnRoJ1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHJlc3VsdCA9IFNOLnJ1bigpO1xyXG5cclxuY29uc29sZS5sb2cocmVzdWx0KTsiXSwibmFtZXMiOlsiU04iLCJzYW1wbGVfdXNlcl9kYXRhIiwiaWQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImNsYXNzZXMiLCJuYW1lIiwiYXJ0aWNsZXMiLCJzZXRfY29uZmlnIiwiaXRlcmF0b3IiLCJrZXkiLCJwYXJlbnRfaWRfa2V5Iiwic29ydCIsImlzU29ydCIsImtleVRvQ29tcGFyZSIsInJldmVyc2UiLCJsYW5nIiwic3RyaWN0U29ydCIsInJlc3VsdCIsInJ1biIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9