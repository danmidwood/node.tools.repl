'use strict';

exports.doc = function (func) {
  var fnStr = func.toString();
  var paramStartPos = fnStr.indexOf('(');
  var paramEndPos = fnStr.indexOf(')');
  var params = fnStr.slice(paramStartPos+1, paramEndPos).split(", ");
  return params;
};

exports.source = function (func) {
  return func.toString();
};
