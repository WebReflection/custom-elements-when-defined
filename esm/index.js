const {get, whenDefined} = self.customElements;
self.customElements.whenDefined = function (is) {
  return whenDefined.call(this, is).then(Class => Class || get.call(this, is));
};
