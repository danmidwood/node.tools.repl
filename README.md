Tools for the Node REPL
======================

Having a REPL is cool, but it's better when you can do something useful with it.

tools.repl provides `doc` and `source` functions for helpful inspection of your `[Function]` objects.

### Install

Add this to your package.json,

```json
"devDependencies": {
  "tools.repl": ">=0.0.1"
}
```

### Usage

```javascript
NODE> var tr = require('tools.repl');
NODE> tr
{ doc: [Function], source: [Function] }
NODE> tr.doc(require)
[ 'id', 'options' ]
NODE> tr.source(require)
'function (id, options) {\n    // Remove module from cache if reload is requested.\n    if (options && options.reload)\n      delete require.cache[require.resolve(id)];\n    return require(id);\n  }'
```

## License

Copyright © 2014 Dan Midwood

Blatantly inspired by Clojure's [`clojure.repl`](http://clojure.github.io/clojure/clojure.repl-api.html)

Distributed under the ISC License.
