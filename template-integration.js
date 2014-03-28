if (Package.ui) {
  var UI = Package.ui.UI;
  var HTML = Package.htmljs.HTML; // implied by `ui`
  Package.ui.UI.registerHelper('markdown', UI.block(function () {
    var self = this;
    return function () {
      var text = UI.toRawText(self.__content, self /*parentComponent*/);
      return HTML.Raw(marked(text));
    };
  }));
}
