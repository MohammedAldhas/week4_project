let hint = document.querySelector(".hint");
hint.addEventListener("mouseover", function () {
  hint.innerText = `افااا`;
});
hint.addEventListener("mouseout", function () {
  hint.innerHTML = `<i class="fa-solid fa-face-smile-wink me-2" style="color: #000000;"></i>تلميح`;
});

document.querySelector(".left-right").innerHTML = "القراية من اليمين لليسار";
if (window.location.toString().includes("easy")) {
  setTimeout(() => {
    document.querySelector(
      ".left-right"
    ).innerHTML = `<i class="fa-solid fa-face-laugh-squint me-2"></i>هذي سهلة وما جبتها باقي`;
  }, "20000");
} else if (window.location.toString().includes("medium")) {
  setTimeout(() => {
    document.querySelector(
      ".left-right"
    ).innerHTML = `<i class="fa-solid fa-fire-flame-curved"></i> ادري تحسها صعبة بس حاول يا بطل`;
  }, "20000");
}

hint.addEventListener("click", function () {
  // easy
  if (window.location.toString().includes("person_easy")) {
    if (window.location.toString().includes("person_easy_page1")) {
      document.querySelector(".err").innerText =
        "فلم عن واحد, المافيا ذبحوا كلبة وسوى مجزرة";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("person_easy_page2")) {
      document.querySelector(".err").innerText = "طاحت عليه تفاحة";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("person_easy_page3")) {
      document.querySelector(".err").innerText = "كان اغنى رجل في العالم";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("person_easy_page4")) {
      document.querySelector(".err").innerText = "فيه اغاني هيبهوب وجاز وايش؟";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("person_easy_page5")) {
      document.querySelector(".err").innerText = "ممثل معروف وما يكبر";
      document.querySelector(".err").style.color = "green";
    }
    // Medium
  } else if (window.location.toString().includes("person_medium")) {
    if (window.location.toString().includes("person_medium_page1")) {
      document.querySelector(".err").innerText = "طبله بالانجليزي بس غير حرف";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("person_medium_page2")) {
      document.querySelector(".err").innerText = "اسم بطل ماين كرافت";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("person_medium_page3")) {
      document.querySelector(".err").innerText = "اول صورة يد ترتجف";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("person_medium_page4")) {
      document.querySelector(".err").innerText = "اغنى رجل بالعالم";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("person_medium_page5")) {
      document.querySelector(".err").innerText =
        " in ممثل وكوميدي > الصورة اللي في النص";
      document.querySelector(".err").style.color = "green";
    }
  }
});

let answerPage1 = document.querySelector(".answer_page1");
let answerPage2 = document.querySelector(".answer_page2");
let answerPage3 = document.querySelector(".answer_page3");
let answerPage4 = document.querySelector(".answer_page4");
let answerPage5 = document.querySelector(".answer_page5");
let answerMediumPage1 = document.querySelector(".answer_medium_page1");
let answerMediumPage2 = document.querySelector(".answer_medium_page2");
let answerMediumPage3 = document.querySelector(".answer_medium_page3");
let answerMediumPage4 = document.querySelector(".answer_medium_page4");
let answerMediumPage5 = document.querySelector(".answer_medium_page5");
let answerButton = document.querySelector(".next");

let midCounter = 0;
let counter = document.querySelector(".card .counter span");

if (window.localStorage.getItem("counter") != undefined) {
  midCounter = window.localStorage.getItem("counter");
  counter.innerText = window.localStorage.getItem("counter");
} else {
  window.localStorage.setItem("counter", midCounter);
  counter.innerText = window.localStorage.getItem("counter");
}

// ===========================easy=======================
//John Wick
answerButton.addEventListener("click", function (e) {
  if (
    answerPage1.value == "John Wick" ||
    answerPage1.value == "John wick" ||
    answerPage1.value == "john wick" ||
    answerPage1.value == "جون ويك" ||
    answerPage1.value == "جونويك"
  ) {
    answerPage1.value = "";
    document.querySelector(".left-right").innerText = "كفو عليك";
    document.querySelector(".left-right").style.color = "blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./person_easy_page2.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//Newton
answerButton.addEventListener("click", function (e) {
  if (
    answerPage2.value == "Newton" ||
    answerPage2.value == "newton" ||
    answerPage2.value == "نيوتن" ||
    answerPage2.value == "نيوتين" ||
    answerPage2.value == "نيو تن" ||
    answerPage2.value == "نيو تين"
  ) {
    answerPage2.value = "";
    document.querySelector(".left-right").innerText = "اسطووورة";
    document.querySelector(".left-right").style.color = "Blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./person_easy_page3.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//Bill Gates
answerButton.addEventListener("click", function (e) {
  if (
    answerPage3.value == "Bill Gates" ||
    answerPage3.value == "Bill gates" ||
    answerPage3.value == "bill gates" ||
    answerPage3.value == "BillGates" ||
    answerPage3.value == "billGates" ||
    answerPage3.value == "بيل غيتس" ||
    answerPage3.value == "بيل قيتس" ||
    answerPage3.value == "بيل جيتس" ||
    answerPage3.value == "بيلغيتس" ||
    answerPage3.value == "بيلقيتس" ||
    answerPage3.value == "بيلجيتس" ||
    answerPage3.value == "بيل جتس" ||
    answerPage3.value == "بيل غتس" ||
    answerPage3.value == "بيل قتس" ||
    answerPage3.value == "بيلجتس" ||
    answerPage3.value == "بيلغتس" ||
    answerPage3.value == "بيلقتس"
  ) {
    answerPage3.value = "";
    document.querySelector(".left-right").innerText = "صح عليييك";
    document.querySelector(".left-right").style.color = "Blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./person_easy_page4.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//The Rock
answerButton.addEventListener("click", function (e) {
  if (
    answerPage4.value == "The Rock" ||
    answerPage4.value == "The rock" ||
    answerPage4.value == "the rock" ||
    answerPage4.value == "theRock" ||
    answerPage4.value == "ذا روك" ||
    answerPage4.value == "ذاروك" ||
    answerPage4.value == "ذروك"
  ) {
    answerPage4.value = "";
    document.querySelector(".left-right").innerText = "كفو قربت تخلص";
    document.querySelector(".left-right").style.color = "Blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./person_easy_page5.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// Tom Cruise
answerButton.addEventListener("click", function (e) {
  if (
    answerPage5.value == "Tom Cruise" ||
    answerPage5.value == "TomCruise" ||
    answerPage5.value == "Tom cruise" ||
    answerPage5.value == "tom cruise" ||
    answerPage5.value == "توم كروز" ||
    answerPage5.value == "تومكروز"
  ) {
    answerPage5.value = "";
    document.querySelector(".left-right").innerText = "حليتها كلها برافوووو";
    document.querySelector(".left-right").style.color = "Blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");
    localStorage.clear();

    setTimeout(() => {
      window.location = "../end.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});

// ===========================Medium=======================
// Trump
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage1.value == "Trump " ||
    answerMediumPage1.value == "trump " ||
    answerMediumPage1.value == "ترامب" ||
    answerMediumPage1.value == "ترمب"
  ) {
    answerMediumPage1.value = "";
    document.querySelector(".left-right").innerText = "كفو عليك";
    document.querySelector(".left-right").style.color = "Blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./person_medium_page2.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// Steve Jobs
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage2.value == "Steve Jobs" ||
    answerMediumPage2.value == "Steve jobs" ||
    answerMediumPage2.value == "steve jobs" ||
    answerMediumPage2.value == "SteveJobs" ||
    answerMediumPage2.value == "steveJobs" ||
    answerMediumPage2.value == "ستيف جوبز" ||
    answerMediumPage2.value == "ستيف جبز" ||
    answerMediumPage2.value == "ستيفجوبز"
  ) {
    answerMediumPage2.value = "";
    document.querySelector(".left-right").innerText = "اسطووورة";
    document.querySelector(".left-right").style.color = "Blue";

    counter.innerText = localStorage.getItem("counter");
    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./person_medium_page3.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// Shakespeare
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage3.value == "Shakespeare" ||
    answerMediumPage3.value == "shakespeare" ||
    answerMediumPage3.value == "شكسبير" ||
    answerMediumPage3.value == "شيكسبير" ||
    answerMediumPage3.value == "شكس بير" ||
    answerMediumPage3.value == "شيكس بير"
  ) {
    answerMediumPage3.value = "";
    document.querySelector(".left-right").innerText = "صح عليييك";
    document.querySelector(".left-right").style.color = "Blue";

    counter.innerText = localStorage.getItem("counter");
    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./person_medium_page4.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// Elon Musk
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage4.value == "Elon Musk" ||
    answerMediumPage4.value == "Elon musk" ||
    answerMediumPage4.value == "elon musk" ||
    answerMediumPage4.value == "ElonMusk" ||
    answerMediumPage4.value == "elonMusk" ||
    answerMediumPage4.value == "الون ماسك" ||
    answerMediumPage4.value == "ايلون ماسك" ||
    answerMediumPage4.value == "ايلونماسك" ||
    answerMediumPage4.value == "الونماسك"
  ) {
    answerMediumPage4.value = "";
    document.querySelector(".left-right").innerText = "كفو قربت تخلص";
    document.querySelector(".left-right").style.color = "Blue";

    counter.innerText = window.localStorage.getItem("counter");
    midCounter++;
    window.localStorage.setItem("counter", midCounter);
    counter.innerText = window.localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./person_medium_page5.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// Kevin Hart
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage5.value == "Kevin Hart" ||
    answerMediumPage5.value == "Kevin hart" ||
    answerMediumPage5.value == "kevin hart" ||
    answerMediumPage5.value == "KevinHart" ||
    answerMediumPage5.value == "kevinHart" ||
    answerMediumPage5.value == "كيفين هارت" ||
    answerMediumPage5.value == "كيفن هارت" ||
    answerMediumPage5.value == "كفين هارت" ||
    answerMediumPage5.value == "كفينهارت" ||
    answerMediumPage5.value == "كفنهارت" ||
    answerMediumPage5.value == "كيفنهارت"
  ) {
    answerMediumPage5.value = "";
    document.querySelector(".left-right").innerText = "حليتها كلها برافوو";
    document.querySelector(".left-right").style.color = "Blue";
    // counter.innerText = window.localStorage.getItem("counter");
    midCounter++;

    window.localStorage.setItem("counter", midCounter);
    counter.innerText = window.localStorage.getItem("counter");
    localStorage.clear();
    setTimeout(() => {
      window.location = "../end.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
