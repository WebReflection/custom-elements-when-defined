!function(){"use strict";var e=self.customElements,n=e.get,t=e.whenDefined;self.customElements.whenDefined=function(e){var s=this;return t.call(this,e).then((function(t){return t||n.call(s,e)}))}}();