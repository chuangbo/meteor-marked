if (Package.templating) {
  var Template = Package.templating.Template;
  var UI = Package.blaze.UI; // implied by `templating`
  var HTML = Package.htmljs.HTML; // implied by `ui`
  var Blaze = Package.blaze.Blaze; // implied by `ui`

  Blaze.registerHelper('markdown', Blaze.Template('markdown', function () {
    var view = this;
    var content = '';
    if (view.templateContentBlock) {
      content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
    }
    return HTML.Raw(marked(content));
  }));
}
