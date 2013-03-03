What is This Crap?
==================
It's a JavaScript library that helps you do things 4% faster on average*

Word of Warning
===============
The code sort-of reminds me of a bookmarklet. Take from that what you will.
Feel free to do whatever you please with this, I don't really use it anymore.

Show me Some Functions
======================

Utilities
---------

# `picolib.isArray(obj)`
*Check if the given value is an Array*
> Returns `true` if `obj` is an Array, otherwise `false`.


# `picolib.extend(obj, props)`
*Extend one object with the properties of another*
> `obj`: An object to copy properties to.
>
> `props`: An object whose properties should be copied.


# `picolib.keys(obj)`
*Get an Array of the given object's keys*
> same as Object.keys()


# `picolib.each(obj, fn, ctx)`
*Iterate over the values of an Object or Array*
> `obj`: An Object or Array to iterate over.
> 
> `fn`: A function to call on each item. Gets passed `(item, key)`. Return false to break out of the loop.
> 
> `ctx`: Context object, gets set as the value of `this` inside `fn`. Defaults to `obj`.


# `picolib.map(obj, fn, state)`
*Iterate over the items in a collection to get aggregate or filtered information.*
>
> `obj`: An Object or Array to iterate over.
>
> `fn`: A function to call on each item. Gets passed `(item, key, state)`.
>
> `state`: An Object to hold state, whose properties can be modified on each iteration.

# `picolib.bind(fn, context)`
*Bind a function to the given context*
> `fn`: A function. When bound, the value of `this` inside `fn` will always be `context`.
>
> `context`: An object to bind as the context for `fn`.

# `fn.unbind()`
*Unbind - reverse bind()*
> Call this on a function returned from `bind()` to revert it back to standard JavaScript behaviour.


DOM
---

# `picolib.create(def, insertInto)`
*Create a DOM node (or tree) from an Object definition*
> `def.type`: The node type (tag name) to create.
>
> `def.attrs`: key-value attributes to apply.
>
> `def.props`: key-value properties to set.
>
> `def.css`: CSStext to apply.
>
> `def.children`: Array of child definitions. Can be infinitely nested.
>
> `def.insertBefore`: Optionally insert the node before a node.
>
> `insertInto`: A parent node to insert the new node into.

# `picolib.el(id)`
*Get an element by its ID*

# `picolib.hide(el)`
*Hide an element*
> `el`: An element, or an ID.

# `picolib.show(el)`
*Show an element*
> `el`: An element, or an ID.

# `picolib.handle(el, type, handler)`
*Register an event handler on an element*
> `el`: An element to register the handler on.
>
> `type`: An event type to listen for. 'on'-prefixes get stripped.
>
> `handler`: Function to call when the event is triggered.

# `picolib.unhandle(el, type, handler)`
*Unregister an event handler from an element*
> `el`: The element to unregister the handler from.
>
> `type`: The event type of the handler being unregistered.
>
> `handler`: The handler function to remove.



JSONp
-----
# `picolib.jsonp(url, callback [, callbackId])`
*Make a JSONp Request*
> `url`: The URL to request. Tell jsonp where to stick the callback ID with the "{callback}" field.
>
> `callback`: A function to call when done. Gets passed the data.
>
> `callbackId`: Instead of generating a callback ID, manually sets it.


JSON
----
# `picolib.json.parse(str)`
*Parse a JSON String*

# `picolib.json.stringify(obj)`
*Serialize to a JSON String*


XML
---
# `picolib.xml.parse(str)`
*Parse XML*
> Returns a DOM Document


QueryStrings
------------
# `picolib.qs.parse(str)`
**Parse a querystring**
> Returns key-value pairs as an Object

# `picolib.qs.stringify(obj)`
**Build a querystring**
> `obj`: An object with key-value querystring parameter pairs

----

*...ok, I made that up

