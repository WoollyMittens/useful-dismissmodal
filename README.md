# dismissmodal.js: Teleport DOM elements

Close modals by clicking elsewhere.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/dismissmodal.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/dismissmodal.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/dismissmodal.js'
], function(DismissModal) {
	...
});
```

Or import into an MVC framework.

```js
var DismissModal = require('js/dismissmodal.js');
```

## How to start the script

```javascript
new DismissModal({
	'container': document.querySelector('dl.dm'),
	'onDissmiss': function() { document.querySelector('dl.dm').className='dm dm-closed'; }
});
```

**container : {DOM node}** - The container around the modal window.

**onDissmiss : {Handler}** - What to do when the click is outside the modal window.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
