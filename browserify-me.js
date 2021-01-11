var jljDraggable = require('./jljDraggable.js')

global.copy = jljDraggable

window.Vue && global.Vue.use(jljDraggable)
