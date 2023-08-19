let esy = document.querySelector(".easy");
let medium = document.querySelector(".medium");
let hard = document.querySelector(".hard");

esy.addEventListener("mouseover", function () {
  esy.innerText = `في ذي الصعوبة راح تجيب الجواب من النظرة الاولى`;
});
esy.addEventListener("mouseout", function () {
  esy.innerText = "سهل";
});
medium.addEventListener("mouseover", function () {
  medium.innerText = `في ذي الصعوبة راح تجيب الجواب بس راح تاخذ وقت`;
});
medium.addEventListener("mouseout", function () {
  medium.innerText = "متوسطة";
});
// hard.addEventListener("mouseover", function () {
//   hard.innerText = `خليناها اصعب من ناحية التخمين وضفنالك وقت قدها؟`;
// });
// hard.addEventListener("mouseout", function () {
//   hard.innerText = "صعب";
// });

