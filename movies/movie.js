let hint = document.querySelector(".hint");
hint.addEventListener("mouseover", function () {
  hint.innerText = `افااا`;
});
hint.addEventListener("mouseout", function () {
  hint.innerHTML = `<i class="fa-solid fa-face-smile-wink me-2" style="color: #000000;"></i>تلميح`;
});

if (window.location.toString().includes("easy")) {
  document.querySelector(".left-right").innerHTML = "القراية من اليمين لليسار";

  setTimeout(() => {
    document.querySelector(
      ".left-right"
    ).innerHTML = `<i class="fa-solid fa-face-laugh-squint me-2"></i>هذي سهلة وما جبتها باقي`;
  }, "9000");
} else if (window.location.toString().includes("medium")) {
  setTimeout(() => {
    document.querySelector(
      ".left-right"
    ).innerHTML = `<i class="fa-solid fa-fire-flame-curved"></i> ادري تحسها صعبة بس حاول يا بطل`;
  }, "5000");
}

hint.addEventListener("click", function () {
  // easy
  if (window.location.toString().includes("easy")) {
    if (window.location.toString().includes("easy_page1")) {
      document.querySelector(".err").innerText = "Sey My Name";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("easy_page2")) {
      document.querySelector(".err").innerText = "ترجم طبيب منزل";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("easy_page3")) {
      document.querySelector(".err").innerText =
        "افضل سلسلة افلام, اسم الشخصية بروس وين";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("easy_page4")) {
      document.querySelector(".err").innerText =
        "مسلسل كوميدي يصورون في المكتب";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("easy_page5")) {
      document.querySelector(".err").innerText = " فلم فيه دمى تتكلم";
      document.querySelector(".err").style.color = "green";
    }
    // Medium
  } else if (window.location.toString().includes("medium")) {
    if (window.location.toString().includes("medium_page1")) {
      document.querySelector(".err").innerText = "قد لمعت عيناه";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("medium_page2")) {
      document.querySelector(".err").innerText = "جاسوس بالانجليزي ايش؟";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("medium_page3")) {
      document.querySelector(".err").innerText = "انمي رياضي جديد";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("medium_page4")) {
      document.querySelector(".err").innerText =
        "حرام عليك تستخدم تلميح, افضل انمي تحريك والوان";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("medium_page5")) {
      document.querySelector(".err").innerText =
        "حتى انا حسيتها صعبة , التلميح هو فن و اونلاين";
      document.querySelector(".err").style.color = "green";
    }
  }

  // medium
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

// answer.onfocus = function () {
//     document.querySelector(".err").innerText =
//       "حاول تفصل كل صورة وتجمعها مع بعض";
//     document.querySelector(".err").style.color = "black";

// };

// ===========================easy=======================
//breaking bad
answerButton.addEventListener("click", function (e) {
  if (
    answerPage1.value == "breaking bad" ||
    answerPage1.value == "Breaking Bad" ||
    answerPage1.value == "Breaking bad" ||
    answerPage1.value == "بريكنج باد" ||
    answerPage1.value == "بريكنق باد" ||
    answerPage1.value == "بريكينج باد" ||
    answerPage1.value == "بريكينق باد" ||
    answerPage1.value == "بريكينقباد" ||
    answerPage1.value == "بريكنقباد" ||
    answerPage1.value == "بريكينجباد" ||
    answerPage1.value == "بريكنجباد"
  ) {
    answerPage1.value = "";
    document.querySelector(".left-right").innerText = "كفو عليك";
    document.querySelector(".left-right").style.color = "blue";

    setTimeout(() => {
      window.location = "./movie_easy_page2.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//doctor house
answerButton.addEventListener("click", function (e) {
  if (
    answerPage2.value == "Doctor House" ||
    answerPage2.value == "Doctor house" ||
    answerPage2.value == "doctor house" ||
    answerPage2.value == "دوكتور هاوس" ||
    answerPage2.value == "دوكتر هاوس" ||
    answerPage2.value == "دكتور هاوس" ||
    answerPage2.value == "دكتر هاوس"
  ) {
    answerPage2.value = "";
    document.querySelector(".left-right").innerText = "اسطووورة";
    document.querySelector(".left-right").style.color = "Blue";

    setTimeout(() => {
      window.location = "./movie_easy_page3.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//the dark knight
answerButton.addEventListener("click", function (e) {
  if (
    answerPage3.value == "The Dark Knight" ||
    answerPage3.value == "The dark knight" ||
    answerPage3.value == "The dark knight" ||
    answerPage3.value == "ذا دارك نايت" ||
    answerPage3.value == "ذا دارك نايت" ||
    answerPage3.value == "ذادارك نايت" ||
    answerPage3.value == "ذدارك نايت" ||
    answerPage3.value == "فارس الظلام"
  ) {
    answerPage3.value = "";
    document.querySelector(".left-right").innerText = "صح عليييك";
    document.querySelector(".left-right").style.color = "Blue";

    setTimeout(() => {
      window.location = "./movie_easy_page4.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//the office
answerButton.addEventListener("click", function (e) {
  if (
    answerPage4.value == "The Office" ||
    answerPage4.value == "The office" ||
    answerPage4.value == "the office" ||
    answerPage4.value == "ذا اوفيس" ||
    answerPage4.value == "ذا اوفس" ||
    answerPage4.value == "المكتب"
  ) {
    answerPage4.value = "";
    document.querySelector(".left-right").innerText = "كفو قربت تخلص";
    document.querySelector(".left-right").style.color = "Blue";

    setTimeout(() => {
      window.location = "./movie_easy_page5.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// Toy story
answerButton.addEventListener("click", function (e) {
  if (
    answerPage5.value == "Toy Story" ||
    answerPage5.value == "Toy story" ||
    answerPage5.value == "toy story" ||
    answerPage5.value == "توي ستوري" ||
    answerPage5.value == "تويستوري" ||
    answerPage5.value == "حكاية لعبة" ||
    answerPage5.value == "حكاية لعبه"
  ) {
    answerPage5.value = "";
    document.querySelector(".left-right").innerText = "حليتها كلها برافوووو";
    document.querySelector(".left-right").style.color = "Blue";

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
// Note Book
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage1.value == "Note Book" ||
    answerMediumPage1.value == "NoteBook" ||
    answerMediumPage1.value == "Note book" ||
    answerMediumPage1.value == "note book" ||
    answerMediumPage1.value == "نوت بوك" ||
    answerMediumPage1.value == "نوتبوك"
  ) {
    answerMediumPage1.value = "";
    document.querySelector(".left-right").innerText = "كفو عليك";
    document.querySelector(".left-right").style.color = "Blue";
    setTimeout(() => {
      window.location = "./movie_medium_page2.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// TopGun
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage2.value == "Top Gun" ||
    answerMediumPage2.value == "Top gun" ||
    answerMediumPage2.value == "top gun" ||
    answerMediumPage2.value == "TopGun" ||
    answerMediumPage2.value == "topGun" ||
    answerMediumPage2.value == "توب قن" ||
    answerMediumPage2.value == "توبقن" ||
    answerMediumPage2.value == "تب قن"
  ) {
    answerMediumPage1.value = "";
    document.querySelector(".left-right").innerText = "اسطووورة";
    document.querySelector(".left-right").style.color = "Blue";
    setTimeout(() => {
      window.location = "./movie_medium_page3.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// Suits
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage3.value == "Suits" ||
    answerMediumPage3.value == "suits" ||
    answerMediumPage3.value == "سوتس" ||
    answerMediumPage3.value == "دعاوي" ||
    answerMediumPage3.value == "الدعاوي"
  ) {
    answerMediumPage1.value = "";
    document.querySelector(".left-right").innerText = "صح عليييك";
    document.querySelector(".left-right").style.color = "Blue";
    setTimeout(() => {
      window.location = "./movie_medium_page4.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// better call saul
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage4.value == "Better Call Saul" ||
    answerMediumPage4.value == "Better call saul" ||
    answerMediumPage4.value == "better call saul" ||
    answerMediumPage4.value == "بيتر كول سول" ||
    answerMediumPage4.value == "من الافضل الاتصال بسول" ||
    answerMediumPage4.value == "من الأفضل الإتصال بسول" ||
    answerMediumPage4.value == "من الافضل الإتصال بسول"
  ) {
    answerMediumPage1.value = "";
    document.querySelector(".left-right").innerText = "كفو قربت تخلص";
    document.querySelector(".left-right").style.color = "Blue";
    setTimeout(() => {
      window.location = "./movie_medium_page5.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// interstellar
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage5.value == "Interstellar" ||
    answerMediumPage5.value == "interstellar" ||
    answerMediumPage5.value == "انتير ستلر" ||
    answerMediumPage5.value == "انتر ستيلر" ||
    answerMediumPage5.value == "انتير ستيلر" ||
    answerMediumPage5.value == "إنتير ستيلر" ||
    answerMediumPage5.value == "إنتر ستيلر" ||
    answerMediumPage5.value == "إنتر ستلر" ||
    answerMediumPage5.value == "إنتير ستلر" ||
    answerMediumPage5.value == "إنتيرستيلر" ||
    answerMediumPage5.value == "انتيرستيلر" ||
    answerMediumPage5.value == "إنترستيلر" ||
    answerMediumPage5.value == "إنترستلر"
  ) {
    answerMediumPage1.value = "";
    document.querySelector(".left-right").innerText = "حليتها كلها برافوو";
    document.querySelector(".left-right").style.color = "Blue";
    setTimeout(() => {
      window.location = "./movie_medium_page3.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
