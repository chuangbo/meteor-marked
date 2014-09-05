// Source: https://github.com/chjj/marked

Package.describe({
  summary: "A markdown parser and compiler. Built for speed.",
  version: "0.3.5",
  name: "chuangbo:marked",
  git: "https://github.com/chuangbo/meteor-marked.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.1");
  api.use("blaze","client", {weak: true});
  api.use("templating", "client", {weak: true});

  api.add_files("marked/lib/marked.js");
  api.add_files('template-integration.js', 'client');
});
