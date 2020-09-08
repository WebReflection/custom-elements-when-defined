const {defineProperty} = Object;
const {get, whenDefined} = self.customElements;
defineProperty(self.customElements, 'whenDefined', {
  configurable: true,
  value(is) {
    return whenDefined.call(this, is).then(Class => Class || get.call(this, is));
  }
});
