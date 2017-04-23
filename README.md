# Meteor Marked

A wrapper of [marked](https://github.com/chjj/marked) - 
A markdown parser and compiler. Built for speed.

## Usage

It provide a template helper `markdown` as same as the official [markdown](http://docs.meteor.com/#/basic/markdown), a `window.marked` as same as official [marked](https://github.com/chjj/marked) (except when
used with `{ weak: true }`), and a `Package['chuangbo:marked'].marked` (always):

> This package lets you use Markdown in your templates. It's easy: just put your markdown inside {{#markdown}} ... {{/markdown}} tags. You can still use all of the usual Meteor template features inside a Markdown block, such #each, and you still get reactivity.

Per the [docs](https://github.com/chjj/marked), the default options:

```js
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
```

you can also set an option `highlight` with a function to handle syntax highlighting for code blocks.
Some Meteor syntax highlighting smart packages do this integration for you automatically.

e.g.

```js
marked.setOptions({
  highlight: function (code) { return hljs.highlightAuto(code).value; }
});
```
