let arrowDownPress = document.querySelectorAll(".fa-angle-down");
let arrowUpPress = document.querySelectorAll(".fa-angle-up");
let paragraphPress = document.querySelectorAll("p");
let answer = document.querySelectorAll("h3");
let boxes = document.querySelectorAll(".box");
let card = document.querySelectorAll(".answers");
let cl = true;
boxes.forEach((ele) => {
  boxes.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      // boxes.forEach((ele) => {
      //   ele.children[1].classList.remove("edit");
      //   ele.children[0].children[0].classList.remove("shape");
      //   ele.children[0].children[1].classList.remove("hidden");
      // });
      e.currentTarget.children[1].classList.toggle("edit");
      e.currentTarget.children[0].children[0].classList.toggle("shape");
      e.currentTarget.children[0].children[1].classList.toggle("hidden");
    });
  });
});
