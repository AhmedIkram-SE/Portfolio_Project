// // const button = document.querySelectorAll(".see-project");
// // console.log(button);

// // const Model = document.querySelector(".modal");
// // console.log(Model);

// // Model.addEventListener("click", function (e) {
// //   if (e.target.closest(".Mod-Cl-But")) {
// //     console.log("Here");
// //     Model.style.display = "none";
// //   } else {
// //     console.log("Not Here");
// //   }
// // });
var but1 = document.querySelector(".button");
var but = document.querySelector(".HamClose");
var menu = document.querySelector(".menu");
var Anchors = document.querySelectorAll("#HamAnchor");
var Header = document.querySelector(".container1");
var Headline = document.querySelector(".Headline");
var Works = document.querySelector(".Works");
var Myself = document.querySelector(".Myself");
var Contact = document.querySelector(".contact");
// const Model = document.querySelector(".modal");
// const SeeBut = document.querySelectorAll(".see-project");

but1.addEventListener("click", () => {
  menu.style.display = "flex";
  Header.style.position = "unset";
  Header.style.filter = "blur(15px)";
  Headline.style.filter = "blur(15px)";
  Works.style.filter = "blur(15px)";
  Myself.style.filter = "blur(15px)";
  Contact.style.filter = "blur(15px)";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    console.log("Here");
    menu.style.display = "none";
    Header.style.position = "sticky";
    Revert();
  }
});

but.addEventListener("click", () => {
  Revert();
});
for (let i = 0; i < Anchors.length; i++) {
  Anchors[i].addEventListener("click", () => {
    if (i === 0) {
      window.scrollTo({ top: 750, behavior: "smooth" });
      Revert();
    }
    if (i === 1) {
      window.scrollTo({ top: 3500, behavior: "smooth" });
      Revert();
    }
    if (i === 2) {
      window.scrollTo({ top: 4600, behavior: "smooth" });
      Revert();
    }
  });
}
function Revert() {
  menu.style.display = "none";
  Header.style.position = "sticky";
  Header.style.filter = "unset";
  Headline.style.filter = "unset";
  Works.style.filter = "unset";
  Myself.style.filter = "unset";
  Contact.style.filter = "unset";
}
