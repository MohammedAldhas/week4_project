let hint = document.querySelector(".hint");
hint.addEventListener("mouseover", function () {
  hint.innerText = `افااا`;
});
hint.addEventListener("mouseout", function () {
  hint.innerHTML = `<i class="fa-solid fa-face-smile-wink me-2" style="color: #000000;"></i>تلميح`;
});

hint.addEventListener("click", function () {
  if (window.location.toString().includes("page1")) {
    document.querySelector(".err").innerText = "التلمح ان هذا الانمي عمك";
    document.querySelector(".err").style.color = "green";
  } else if (window.location.toString().includes("page2")) {
    document.querySelector(".err").innerText = "موت بالانجليزي ايش؟";
    document.querySelector(".err").style.color = "green";
  } else if (window.location.toString().includes("page3")) {
    document.querySelector(".err").innerText =
      "ما احس تحتاج تلميح بس معليه التلميح هو اكثر انمي فيه صراخ";
    document.querySelector(".err").style.color = "green";
  } else if (window.location.toString().includes("page4")) {
    document.querySelector(".err").innerText = "اللي في النص بنش";
    document.querySelector(".err").style.color = "green";
  }else if (window.location.toString().includes("page5")) {
    document.querySelector(".err").innerText = "اخر سؤال يا هوه مافي مشكلة طابور كيو";
    document.querySelector(".err").style.color = "green";
  }
});

let answerPage1 = document.querySelector(".answer_page1");
let answerPage2 = document.querySelector(".answer_page2");
let answerPage3 = document.querySelector(".answer_page3");
let answerPage4 = document.querySelector(".answer_page4");
let answerPage5 = document.querySelector(".answer_page5");
let answerButton = document.querySelector(".next");

// answer.onfocus = function () {
//     document.querySelector(".err").innerText =
//       "حاول تفصل كل صورة وتجمعها مع بعض";
//     document.querySelector(".err").style.color = "black";

// };

//one paece
answerButton.addEventListener("click", function (e) {
  if (answerPage1.value == "ون بيس" || answerPage1.value == "ونبيس") {
    answerPage1.value = "";
    window.location = "./anime_easy_page2.html";
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//death note
answerButton.addEventListener("click", function (e) {
  if (answerPage2.value == "ديث نوت" || answerPage2.value == "ديثنوت") {
    answerPage2.value = "";
    window.location = "./anime_easy_page3.html";
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//dragon
answerButton.addEventListener("click", function (e) {
  if (
    answerPage3.value == "دراقون بول" ||
    answerPage3.value == "دراجون بول" ||
    answerPage3.value == "دراجونبول" ||
    answerPage3.value == "دراقونبول"
  ) {
    answerPage3.value = "";
    window.location = "./anime_easy_page4.html";
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//one punch man
answerButton.addEventListener("click", function (e) {
  if (
    answerPage4.value == "ون بنش مان" ||
    answerPage4.value == "ون بانش مان" ||
    answerPage4.value == "وان بانش مان" ||
    answerPage4.value == "ون بنتش مان" ||
    answerPage4.value == "وانبانشمان" ||
    answerPage4.value == "ونبانشمان"
  ) {
    answerPage4.value = "";
    window.location = "./anime_easy_page5.html";
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});

answerButton.addEventListener("click", function (e) {
  if (
    answerPage5.value == "هايكيو" ||
    answerPage5.value == "هيكيو" ||
    answerPage5.value == "هاي كيو"
  ) {
    answerPage5.value = "";
    window.location = "../end.html";
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
setTimeout(() => {
  document.querySelector(
    ".left-right"
  ).innerHTML = `<i class="fa-solid fa-face-laugh-squint me-2"></i>هذي سهلة وما جبتها باقي`;
}, "5000");
