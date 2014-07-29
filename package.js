// Source: https://github.com/chjj/marked

Package.describe({
  summary: "A markdown parser and compiler. Built for speed."
});

Package.on_use(function (api) {
  api.add_files("marked/lib/marked.js");

  api.use("templating", "client", {weak: true});
  api.add_files('template-integration.js', 'client');
});
