// Source: https://github.com/chjj/marked

Package.describe({
  summary: "A markdown parser and compiler. Built for speed.",
  version: "0.3.3",
  git: "https://github.com/chuangbo/meteor-marked.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files("marked/lib/marked.js");

  api.use("templating", "client", {weak: true});
  api.add_files('template-integration.js', 'client');
});
