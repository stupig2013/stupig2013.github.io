/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/Data.bs.js":
/*!*****************************!*\
  !*** ./src/data/Data.bs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Generated by ReScript, PLEASE EDIT WITH CARE


var Caml_array = __webpack_require__(/*! rescript/lib/js/caml_array.js */ "./node_modules/rescript/lib/js/caml_array.js");
var DataJson = __webpack_require__(/*! ./data.json */ "./src/data/data.json");
var dishData = DataJson;
var dishes = dishData.dishes;
function getMeals(param) {
  var meals = [];
  for (var i = 0, i_finish = dishes.length; i < i_finish; ++i) {
    var dish = Caml_array.get(dishes, i);
    for (var j = 0, j_finish = dish.availableMeals.length; j < j_finish; ++j) {
      var meal = Caml_array.get(dish.availableMeals, j);
      if (meals.includes(meal) === false) {
        meals.push(meal);
      }
    }
  }
  return meals;
}
function getRestaurants(meal) {
  var restaurants = [];
  for (var i = 0, i_finish = dishes.length; i < i_finish; ++i) {
    var dish = Caml_array.get(dishes, i);
    if (dish.availableMeals.includes(meal) && !restaurants.includes(dish.restaurant)) {
      restaurants.push(dish.restaurant);
    }
  }
  return restaurants;
}
function getDishes(meal, restaurant) {
  var filteredDishes = [];
  for (var i = 0, i_finish = dishes.length; i < i_finish; ++i) {
    var dish = Caml_array.get(dishes, i);
    if (dish.availableMeals.includes(meal) && dish.restaurant === restaurant && !filteredDishes.includes(dish)) {
      filteredDishes.push(dish);
    }
  }
  return filteredDishes;
}
exports.dishData = dishData;
exports.dishes = dishes;
exports.getMeals = getMeals;
exports.getRestaurants = getRestaurants;
exports.getDishes = getDishes;
/* dishData Not a pure module */

/***/ }),

/***/ "./src/dom/Dom2.bs.js":
/*!****************************!*\
  !*** ./src/dom/Dom2.bs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Generated by ReScript, PLEASE EDIT WITH CARE


var Js_array = __webpack_require__(/*! rescript/lib/js/js_array.js */ "./node_modules/rescript/lib/js/js_array.js");
var Belt_Option = __webpack_require__(/*! rescript/lib/js/belt_Option.js */ "./node_modules/rescript/lib/js/belt_Option.js");
var Caml_option = __webpack_require__(/*! rescript/lib/js/caml_option.js */ "./node_modules/rescript/lib/js/caml_option.js");
function createElementByInnerHTML(tagName, innerHtml) {
  var element = document.createElement(tagName);
  element.innerHTML = innerHtml;
  return element;
}
function appendChild(id, child) {
  var wrapper = Belt_Option.getExn(Caml_option.nullable_to_opt(document.getElementById(id)));
  wrapper.appendChild(child);
}
function fillOptions(id, list) {
  var wrapper = Belt_Option.getExn(Caml_option.nullable_to_opt(document.getElementById(id)));
  var strList = list.map(function (name) {
    return "<option value=\"" + name + "\">" + name + "</option>";
  });
  wrapper.innerHTML = Js_array.joinWith("", strList);
}
function fillInput(id, value) {
  var element = Belt_Option.getExn(Caml_option.nullable_to_opt(document.getElementById(id)));
  element.setAttribute("value", value);
}
function setInnerHTML(id, html) {
  var element = Belt_Option.getExn(Caml_option.nullable_to_opt(document.getElementById(id)));
  element.innerHTML = html;
}
function addEventListener(id, $$event, listener) {
  var element = Belt_Option.getExn(Caml_option.nullable_to_opt(document.getElementById(id)));
  element.addEventListener($$event, listener);
}
function setClassName(id, className) {
  var element = Belt_Option.getExn(Caml_option.nullable_to_opt(document.getElementById(id)));
  element.setAttribute("class", className);
}
function getValue(id) {
  return document.getElementById(id).value;
}
function setValue(id, value) {
  var element = document.getElementById(id);
  element.value = value;
}
function getChildrenByTagName(id, tagName) {
  return Belt_Option.getExn(Caml_option.nullable_to_opt(document.getElementById(id))).children;
}
exports.createElementByInnerHTML = createElementByInnerHTML;
exports.appendChild = appendChild;
exports.fillOptions = fillOptions;
exports.fillInput = fillInput;
exports.setInnerHTML = setInnerHTML;
exports.addEventListener = addEventListener;
exports.setClassName = setClassName;
exports.getValue = getValue;
exports.setValue = setValue;
exports.getChildrenByTagName = getChildrenByTagName;
/* No side effect */

/***/ }),

/***/ "./src/helpers/Dish.bs.js":
/*!********************************!*\
  !*** ./src/helpers/Dish.bs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Generated by ReScript, PLEASE EDIT WITH CARE


var Dom2 = __webpack_require__(/*! ../dom/Dom2.bs.js */ "./src/dom/Dom2.bs.js");
var Js_array = __webpack_require__(/*! rescript/lib/js/js_array.js */ "./node_modules/rescript/lib/js/js_array.js");
var Caml_array = __webpack_require__(/*! rescript/lib/js/caml_array.js */ "./node_modules/rescript/lib/js/caml_array.js");
var Belt_Option = __webpack_require__(/*! rescript/lib/js/belt_Option.js */ "./node_modules/rescript/lib/js/belt_Option.js");
var Caml_option = __webpack_require__(/*! rescript/lib/js/caml_option.js */ "./node_modules/rescript/lib/js/caml_option.js");
function genDishFormInnerHtml(dishes) {
  var dishesStrList = dishes.map(function (dish) {
    return "\n    <option value=\"" + dish.name + "\">" + dish.name + "</option>\n  ";
  });
  return "\n    <label>Please Select a Dish</label>\n    <select>" + Js_array.joinWith("", dishesStrList) + "</select>\n    <label>Please enter no. of servings</label>\n    <input type=\"number\" id=\"people_number\" />\n  ";
}
function genDishFormNode(dishes) {
  return Dom2.createElementByInnerHTML("li", genDishFormInnerHtml(dishes));
}
function genDishFormOuterHtml(dishes) {
  return "<li>" + genDishFormInnerHtml(dishes) + "</li>";
}
function getDishItems(param) {
  var items = [];
  var nodes = Dom2.getChildrenByTagName("servings", "li");
  for (var i = 0, i_finish = nodes.length; i < i_finish; ++i) {
    var node = Belt_Option.getExn(Caml_option.nullable_to_opt(nodes.item(i)));
    var select = Caml_array.get(node.getElementsByTagName("select"), 0);
    var input = Caml_array.get(node.getElementsByTagName("input"), 0);
    items.push({
      dish: select.value,
      number: input.value
    });
  }
  return items;
}
function genDishPreviewOuterHtml(servings) {
  var list = servings.map(function (serving) {
    return "<li>" + serving.dish + " - " + serving.number + "</li>";
  });
  return "<ul>" + Js_array.joinWith("", list) + "</ul>";
}
exports.genDishFormInnerHtml = genDishFormInnerHtml;
exports.genDishFormNode = genDishFormNode;
exports.genDishFormOuterHtml = genDishFormOuterHtml;
exports.getDishItems = getDishItems;
exports.genDishPreviewOuterHtml = genDishPreviewOuterHtml;
/* No side effect */

/***/ }),

/***/ "./src/index.bs.js":
/*!*************************!*\
  !*** ./src/index.bs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Generated by ReScript, PLEASE EDIT WITH CARE


var Data = __webpack_require__(/*! ./data/Data.bs.js */ "./src/data/Data.bs.js");
var Dish = __webpack_require__(/*! ./helpers/Dish.bs.js */ "./src/helpers/Dish.bs.js");
var Dom2 = __webpack_require__(/*! ./dom/Dom2.bs.js */ "./src/dom/Dom2.bs.js");
var Caml_array = __webpack_require__(/*! rescript/lib/js/caml_array.js */ "./node_modules/rescript/lib/js/caml_array.js");
var step = {
  contents: 1
};
var state = {
  meal: "",
  people: "1",
  restaurant: "",
  servings: []
};
function renderStep(_step, back) {
  step.contents = _step;
  Dom2.setClassName("content", "content step" + String(step.contents) + "");
  if (back) {
    return;
  }
  if (_step === 1) {
    var meals = Data.getMeals(undefined);
    if (state.meal === "") {
      state.meal = Caml_array.get(meals, 0);
    }
    Dom2.fillOptions("select_meal", meals);
    return Dom2.fillInput("people_number", state.people);
  }
  if (_step === 2) {
    var restaurants = Data.getRestaurants(state.meal);
    return Dom2.fillOptions("select_restaurant", restaurants);
  }
  if (_step === 3) {
    var dishes = Data.getDishes(state.meal, state.restaurant);
    Dom2.setInnerHTML("servings", Dish.genDishFormOuterHtml(dishes));
    console.log(dishes);
    return;
  }
  Dom2.setInnerHTML("preview_meal", state.meal);
  Dom2.setInnerHTML("preview_people", state.people);
  Dom2.setInnerHTML("preview_restaurant", state.restaurant);
  Dom2.setInnerHTML("preview_dishes", Dish.genDishPreviewOuterHtml(state.servings));
}
function handlePrevious(e) {
  renderStep(step.contents - 1 | 0, true);
}
function handleNext(e) {
  if (step.contents === 1) {
    state.meal = Dom2.getValue("select_meal");
    state.people = Dom2.getValue("people_number");
  } else if (step.contents === 2) {
    state.restaurant = Dom2.getValue("select_restaurant");
  } else if (step.contents === 3) {
    var items = Dish.getDishItems(undefined);
    state.servings = items;
  }
  console.log(state);
  renderStep(step.contents + 1 | 0, false);
}
function handleAddDish(e) {
  var dishes = Data.getDishes(state.meal, state.restaurant);
  var node = Dish.genDishFormNode(dishes);
  Dom2.appendChild("servings", node);
}
function init(param) {
  Dom2.addEventListener("btn_previous", "click", handlePrevious);
  Dom2.addEventListener("btn_next", "click", handleNext);
  Dom2.addEventListener("add_dish", "click", handleAddDish);
}
function main(param) {
  init(undefined);
  renderStep(step.contents, false);
}
main(undefined);
exports.step = step;
exports.state = state;
exports.renderStep = renderStep;
exports.handlePrevious = handlePrevious;
exports.handleNext = handleNext;
exports.handleAddDish = handleAddDish;
exports.init = init;
exports.main = main;
/*  Not a pure module */

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"dishes":[{"id":1,"name":"Chicken Burger","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":2,"name":"Ham Burger","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":3,"name":"Cheese Burger","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":4,"name":"Fries","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":5,"name":"Egg Muffin","restaurant":"Mc Donalds","availableMeals":["breakfast"]},{"id":6,"name":"Burrito","restaurant":"Taco Bell","availableMeals":["lunch","dinner"]},{"id":7,"name":"Tacos","restaurant":"Taco Bell","availableMeals":["lunch","dinner"]},{"id":8,"name":"Quesadilla","restaurant":"Taco Bell","availableMeals":["lunch","dinner"]},{"id":9,"name":"Steak","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":10,"name":"Yakitori","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":11,"name":"Nankotsu","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":12,"name":"Piman","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":13,"name":"Vegan Bento","restaurant":"Vege Deli","availableMeals":["lunch"]},{"id":14,"name":"Coleslaw Sandwich","restaurant":"Vege Deli","availableMeals":["breakfast"]},{"id":15,"name":"Grilled Sandwich","restaurant":"Vege Deli","availableMeals":["breakfast"]},{"id":16,"name":"Veg. Salad","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":17,"name":"Fruit Salad","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":18,"name":"Corn Soup","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":19,"name":"Tomato Soup","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":20,"name":"Minestrone Soup","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":21,"name":"Pepperoni Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":22,"name":"Pepperoni Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":23,"name":"Hawaiian Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":24,"name":"Seafood Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":25,"name":"Deep Dish Pizza","restaurant":"Pizzeria","availableMeals":["dinner"]},{"id":26,"name":"Chow Mein","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":27,"name":"Mapo Tofu","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":28,"name":"Kung Pao","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":29,"name":"Wontons","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":30,"name":"Garlic Bread","restaurant":"Olive Garden","availableMeals":["breakfast","lunch","dinner"]},{"id":31,"name":"Ravioli","restaurant":"Olive Garden","availableMeals":["lunch","dinner"]},{"id":32,"name":"Rigatoni Spaghetti","restaurant":"Olive Garden","availableMeals":["lunch","dinner"]},{"id":33,"name":"Fettucine Pasta","restaurant":"Olive Garden","availableMeals":["lunch","dinner"]}]}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkorder"] = self["webpackChunkorder"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/index.bs.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map