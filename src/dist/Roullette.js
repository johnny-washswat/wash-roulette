"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styleComp = require("./styleComp");

var _gsap = require("gsap");

var _styledComponents = require("styled-components");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Roullette = function Roullette(_ref) {
  var _ref$reset_callback = _ref.reset_callback,
      reset_callback = _ref$reset_callback === void 0 ? function () {} : _ref$reset_callback,
      _ref$trigger_callback = _ref.trigger_callback,
      trigger_callback = _ref$trigger_callback === void 0 ? function () {} : _ref$trigger_callback,
      _ref$has_reset = _ref.has_reset,
      has_reset = _ref$has_reset === void 0 ? true : _ref$has_reset,
      props = _objectWithoutProperties(_ref, ["reset_callback", "trigger_callback", "has_reset"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      start = _useState2[0],
      set_start = _useState2[1];

  var clickToReset = function clickToReset() {
    set_start(false);
    reset_callback();
  };

  var clickToTrigger = function clickToTrigger() {
    set_start(true);
    trigger_callback();
  };

  return _react["default"].createElement(_styleComp.RoulletteContainer, {
    className: "roulette-container"
  }, _react["default"].createElement(RoulletteBody, _extends({
    start: start
  }, props)), _react["default"].createElement(_styleComp.RoulleteBtn, {
    onClick: clickToTrigger,
    className: "start-btn"
  }, "Start!"), has_reset && _react["default"].createElement(_styleComp.RoulleteBtn, {
    onClick: clickToReset,
    className: "reset-btn"
  }, "Reset"));
};

var RoulletteBody = function RoulletteBody(_ref2) {
  var roullette_img_under_highlight = _ref2.roullette_img_under_highlight,
      roullette_img_on_highlight = _ref2.roullette_img_on_highlight,
      highlight_img = _ref2.highlight_img,
      pointer_img = _ref2.pointer_img,
      box_size = _ref2.box_size,
      start = _ref2.start,
      prize_arr = _ref2.prize_arr,
      align_line = _ref2.align_line,
      _ref2$on_complete = _ref2.on_complete,
      on_complete = _ref2$on_complete === void 0 ? function () {} : _ref2$on_complete;
  var UBoardRef = (0, _react.useRef)(null);
  var OBoardRef = (0, _react.useRef)(null);
  var HighlightRef = (0, _react.useRef)(null);
  var prize_num = generate_random_number(0, prize_arr.length - 1);
  (0, _react.useEffect)(function () {
    if (start) {
      _gsap.TweenLite.to([UBoardRef.current, OBoardRef.current], 3, {
        rotation: 360 * 10,
        ease: _gsap.Power2.easeIn,
        onComplete: function onComplete() {
          _gsap.TweenLite.to([UBoardRef.current, OBoardRef.current], 3, {
            rotation: 360 * 15 + 360 * prize_num / prize_arr.length,
            ease: _gsap.Power2.easeOut,
            onComplete: function onComplete() {
              _gsap.TweenMax.to(HighlightRef.current, 0.5, {
                alpha: 1,
                yoyo: true,
                repeat: -1
              });

              on_complete(prize_arr[prize_num]);
            }
          });
        }
      });
    } else {
      _gsap.TweenLite.to([UBoardRef.current, OBoardRef.current], 0.5, {
        rotation: 0,
        ease: _gsap.Power2.easeIn
      });

      _gsap.TweenMax.to(HighlightRef.current, 0.5, {
        opacity: 0
      });
    }
  }, [start]);
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: Object.assign({}, _styleComp.general_theme)
  }, _react["default"].createElement(_styleComp.RoulletteBox, {
    box_size: box_size,
    className: "roullette-box"
  }, _react["default"].createElement(_styleComp.RoulletteBoard, {
    ref: UBoardRef,
    roullette_img: roullette_img_under_highlight,
    className: "roullette-board-u"
  }), _react["default"].createElement(_styleComp.HighLightArea, {
    ref: HighlightRef,
    highlight_img: highlight_img,
    className: "highlight-area"
  }), _react["default"].createElement(_styleComp.RoulletteBoard, {
    ref: OBoardRef,
    roullette_img: roullette_img_on_highlight,
    className: "roullette-board-o"
  }), _react["default"].createElement(_styleComp.Pointer, {
    pointer_img: pointer_img,
    className: "pointer"
  })));
};

var generate_random_number = function generate_random_number() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return Math.floor(Math.random() * end) + start;
};

var _default = Roullette;
exports["default"] = _default;
