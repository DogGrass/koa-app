System.register([], function (_export, _context) {
  "use strict";

  var content;
  return {
    setters: [],
    execute: function () {
      content = '你好koa~~';
      console.log(content);

      _export("default", content);
    }
  };
});
