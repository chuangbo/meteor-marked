// Source: https://github.com/chjj/marked

Package.describe({
  summary: "A markdown parser and compiler. Built for speed.",
  version: "0.3.5",
  name: "chuangbo:marked",
  git: "https://github.com/chuangbo/meteor-marked.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0");
  api.use("templating", "client", {weak: true});

  api.addFiles([
    "marked/lib/marked.js",
    "post-marked.js"
  ]);

  api.addFiles('template-integration.js', 'client');
  api.export('marked');
});
