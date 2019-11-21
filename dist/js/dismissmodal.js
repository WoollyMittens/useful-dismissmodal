/*
	Source:
	van Creij, Maurice (2019). "dismissmodal.js: Close modals by clicking elsewhere", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var DismissModal = function (cfg) {

	// PROPERTIES

	this.cfg = cfg;

	// METHODS

	this.onBodyClicked = function(evt) {
		var parent = evt.target;
		var container = this.cfg.container;
		// follow the nodes up from the clicked element
		while (parent.nodeName !== 'HTML') {
			// give up if the parent was the search component
			if (parent === this.cfg.container) return true;
			// or try one level higher
			parent = parent.parentNode;
		}
		// trigger the handler
		this.cfg.onDissmiss(evt);
	};

	// EVENTS

	document.body.addEventListener('click', this.onBodyClicked.bind(this));

};

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return DismissModal });
if (typeof module != 'undefined') module.exports = DismissModal;
