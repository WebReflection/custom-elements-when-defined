(function () {
  'use strict';

  var _self$customElements = self.customElements,
    get = _self$customElements.get,
    whenDefined = _self$customElements.whenDefined;
  self.customElements.whenDefined = function (is) {
    var _this = this;
    return whenDefined.call(this, is).then(function (Class) {
      return Class || get.call(_this, is);
    });
  };

})();
