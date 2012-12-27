// Source: https://github.com/chjj/marked

Package.describe({
  summary: "A markdown parser and compiler. Built for speed."
});

Package.on_use(function (api) {
  // Common
  api.add_files("marked/lib/marked.js", ["client", "server"]);

  // Client only
  api.use("handlebars", "client");
  api.add_files("template-integration.js", "client");
});
