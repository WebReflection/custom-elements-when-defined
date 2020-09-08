(function () {
  'use strict';

  var defineProperty = Object.defineProperty;
  var _self$customElements = self.customElements,
      get = _self$customElements.get,
      whenDefined = _self$customElements.whenDefined;
  defineProperty(self.customElements, 'whenDefined', {
    configurable: true,
    value: function value(is) {
      var _this = this;

      return whenDefined.call(this, is).then(function (Class) {
        return Class || get.call(_this, is);
      });
    }
  });

}());
