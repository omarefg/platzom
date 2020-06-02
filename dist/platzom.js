"use strict";

function minMay(str) {
  var length = str.length;
  var translation = '';
  var capitalize = true;

  for (var i = 0; i < length; i++) {
    var _char = str.charAt(i);

    translation += capitalize ? _char.toUpperCase() : _char.toLowerCase();
    capitalize = !capitalize;
  }

  return translation;
}

var reverse = function reverse(str) {
  return str.split('').reverse().join('');
};

module.exports = function platzom(str) {
  var translation = str;

  if (str.toLowerCase().endsWith('ar')) {
    console.log(translation);
    translation = str.slice(0, -2);
    console.log(translation);
  }

  if (str.toUpperCase().startsWith('Z')) {
    translation = translation + 'pe';
  }

  var length = translation.length;

  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  if (str === reverse(str)) {
    return minMay(str);
  }

  return translation;
};