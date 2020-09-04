var itemBtn = document.getElementsByClassName("item_icon");
var itemAnswer = document.getElementsByClassName("item_answer");
for (var i = 0; i < itemBtn.length; i++) {
  itemBtn[i].addEventListener("click", function () {
    this.classList.toggle("item_icon__active");
    var itemAnswer = this.nextElementSibling.lastElementChild;
    itemAnswer.classList.toggle("item_answer__active");
  });
}
