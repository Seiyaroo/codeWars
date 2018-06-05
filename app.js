var replaceDots = function(str) {
  var strToArray = str.split(".");
  return strToArray.join('-');
}
console.log(replaceDots('i.am.a.ginger'));
