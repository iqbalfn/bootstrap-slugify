/*!
  * Bootstrap Slugify v0.0.1 (https://iqbalfn.github.io/bootstrap-slugify/)
  * Copyright 2019 Iqbal Fauzi
  * Licensed under MIT (https://github.com/iqbalfn/bootstrap-slugify/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = global || self, factory(global['bootstrap-slugify'] = {}, global.jQuery));
}(this, function (exports, $) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'slugify';
  var VERSION = '0.0.1';
  var DATA_KEY = 'bs.slugify';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Default = {};
  var Event = {
    INPUT_DATA_API: "input" + EVENT_KEY + DATA_API_KEY,
    FOCUS_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Slugify =
  /*#__PURE__*/
  function () {
    function Slugify(element, config) {
      this._element = element;
      this._source = document.querySelector(config.source);
      if (this._element.value) return;

      this._addElementListener();

      this._addSourceListener();
    } // Getters


    var _proto = Slugify.prototype;

    // Public
    // Private
    _proto._addElementListener = function _addElementListener() {
      var _this = this;

      $(this._element).on(Event.FOCUS_DATA_API, function (e) {
        $(_this._source).off(Event.INPUT_DATA_API);
      });
    };

    _proto._addSourceListener = function _addSourceListener() {
      var _this2 = this;

      $(this._source).on(Event.INPUT_DATA_API, function (e) {
        _this2._element.value = _this2._source.value.toLowerCase().replace(/[^\w\-]/g, '-').replace(/\-+/g, '-').replace(/^\-|\-$/g, '');
      });
    } // Static
    ;

    Slugify._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = _objectSpread({}, Default, $(this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Slugify(this, _config);
          $(this).data(DATA_KEY, data);
        }
      });
    };

    _createClass(Slugify, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Slugify;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME] = Slugify._jQueryInterface;
  $.fn[NAME].Constructor = Slugify;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Slugify._jQueryInterface;
  };

  exports.Slugify = Slugify;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bootstrap-slugify.js.map
