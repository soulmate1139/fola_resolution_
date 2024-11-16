jQuery(".codemirror-tab-content").each(function () {
  var parentClass = jQuery(this);
  var textarea = parentClass.find(".codemirror-editor");
  var editor = CodeMirror.fromTextArea(textarea[0], {
    theme: "material",
    matchBrackets: true,
    //  lineWrapping: true,
    indentUnit: 4,
    lineNumbers: true,
    tabSize: 8,
    // indentWithTabs: true,
    mode: "javascript",
  });
  editor.removeTag = CodeMirror.removeTag;
  var cm = parentClass.find(".CodeMirror");
  cm.editor = editor;
  editor.save();
  editor.setOption("mode", "javascript");

  parentClass.find(".copy-code-wrap").click(function (e) {
    if (e.which == 1) {
      // write the text to the clipboard
      navigator.clipboard.writeText(editor.getValue());

      // animate the button
      var copy = parentClass.find(".copy-code", this);

      function quickadd() {
        copy.addClass("animate");
        setTimeout(function () {
          copy.removeClass("animate");
        }, 400);
      }
      quickadd();
    }
  });
});
