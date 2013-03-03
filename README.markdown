What is This Crap?
==================
It's a JavaScript library that helps you do things 4% faster on average*

Show me Some Functions
======================

Utilities
---------
*Check if the given value is an Array:*
`picolib.isArray(obj)`
- Returns `true` if `obj` is an Array, otherwise `false`.

*Extend one object with the properties of another*
`picolib.extend(obj, props)`
- `obj`: An object to copy properties to.
- `props`: An object whose properties should be copied.

*Get an Array of the given object's keys*
`picolib.keys(obj)`
- same as Object.keys()

*Iterate over the values of an Object or Array*
`picolib.each(obj, fn, ctx)`
- `obj`: An Object or Array to iterate over.
- `fn`: A function to call on each item. Gets passed `(item, key)`. Return false to break out of the loop.
- `ctx`: Context object, gets set as the value of `this` inside `fn`. Defaults to `obj`.

*Iterate over the items in a collection to get aggregate or filtered information:*
`picolib.map(obj, fn, state)`
- `obj`: An Object or Array to iterate over.
- `fn`: A function to call on each item. Gets passed `(item, key, state)`.
- `state`: An Object to hold state, whose properties can be modified on each iteration.

*Bind a function to the given context:*
`picolib.bind(fn, context)`
- `fn`: A function. When bound, the value of `this` inside `fn` will always be `context`.
- `context`: An object to bind as the context for `fn`.

*Unbind - reverse bind():*
`fn.unbind()`
- Call this on a function returned from `bind()` to revert it back to standard JavaScript behaviour.


DOM
---
*Create a DOM node (or tree) from an Object definition:*
`picolib.create(def, insertInto)`
- `def.type`: The node type (tag name) to create.
- `def.attrs`: key-value attributes to apply.
- `def.props`: key-value properties to set.
- `def.css`: CSStext to apply.
- `def.children`: Array of child definitions. Can be infinitely nested.
- `def.insertBefore`: Optionally insert the node before a node.
- `insertInto`: A parent node to insert the new node into.

*Get an element by its ID:*
`picolib.el(id)`

*Hide an element:*
`picolib.hide(el)`
- `el`: An element, or an ID.

*Show an element:*
`picolib.show(el)`
- `el`: An element, or an ID.

*Register an event handler on an element:*
`picolib.handle(el, type, handler)`
- `el`: An element to register the handler on.
- `type`: An event type to listen for. 'on'-prefixes get stripped.
- `handler`: Function to call when the event is triggered.

*Unregister an event handler from an element:*
`picolib.unhandle(el, type, handler)`
- `el`: The element to unregister the handler from.
- `type`: The event type of the handler being unregistered.
- `handler`: The handler function to remove.



JSONp
-----
*Make a JSONp Request:*
`picolib.jsonp(url, callback [, callbackId])`
- `url`: The URL to request. Tell jsonp where to stick the callback ID with the "{callback}" field.
- `callback`: A function to call when done. Gets passed the data.
- `callbackId`: Instead of generating a callback ID, manually sets it.


JSON
----
*Parse a JSON String:*
`picolib.json.parse(str)`

*Serialize to a JSON String:*
`picolib.json.stringify(obj)`


XML
---
*Parse XML:*
`picolib.xml.parse(str)`
- Returns a DOM Document


QueryStrings
------------
*Parse a querystring*
`picolib.qs.parse(str)`
- Returns key-value pairs as an Object

*Build a querystring*
`picolib.qs.stringify(obj)`
- `obj`: An object with key-value querystring parameter pairs

*-ok, I made that up

