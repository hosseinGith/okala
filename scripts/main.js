let scrollHiddenHeader = document.querySelector(".scrollHiddenHeader");

function setProductPcs(btn, input, type, nextBtn) {
 
  if (type === "plus") {
    input.value++;
  } else {
    if (input.value > 1) input.value--;
  }
  if (Number(input.value) < 2) {
    (!nextBtn ? btn : nextBtn).children[1].classList.add("hidden");
    (!nextBtn ? btn : nextBtn).children[0].classList.remove("hidden");
  } else {
    (!nextBtn ? btn : nextBtn).children[0].classList.add("hidden");
    (!nextBtn ? btn : nextBtn).children[1].classList.remove("hidden");
  }
}
let oldY = 0;
window.addEventListener("scroll", () => {
  if (oldY > scrollY) {
    scrollHiddenHeader.classList.remove("translate-y-[-100%]");
  } else {
    scrollHiddenHeader.classList.add("translate-y-[-100%]");
  }
  oldY = scrollY;
});
