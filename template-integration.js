Handlebars.registerHelper('markdown', function (options) {
  return marked(options.fn(this));
});
