/* ==== Typeracer Cheat ==== */

var arrSpan = document.querySelectorAll('[unselectable="on"]');
var fullSentence = '';
arrSpan.forEach(function (item) {
  fullSentence += item.innerHTML;
});

var index = 0;

document.getElementsByClassName("txtInput")[0].addEventListener("keypress", function (e) {
  e.preventDefault();
  this.value += fullSentence[index++];
})
