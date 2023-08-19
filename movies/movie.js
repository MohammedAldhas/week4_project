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
    answerPage1 == "Breaking bad" ||
    answerPage1 == "بريكنج باد" ||
    answerPage1 == "بريكنق باد" ||
    answerPage1 == "بريكينج باد" ||
    answerPage1 == "بريكينق باد"
  ) {
    answerPage1.value = "";
    window.location = "./anime_easy_page2.html";
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
    window.location = "./anime_easy_page3.html";
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
    answerPage3.value == "ذا دارك نايت" ||
    answerPage3.value == "ذا دارك نايت" ||
    answerPage3.value == "ذادارك نايت" ||
    answerPage3.value == "ذدارك نايت" ||
    answerPage3.value == "فارس الظلام"
  ) {
    answerPage3.value = "";
    window.location = "./anime_easy_page4.html";
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
    window.location = "./anime_easy_page5.html";
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
    window.location = "../end.html";
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});

// ===========================Medium=======================
// hunterXhunter
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage1.value == "hunterXhunter" ||
    answerMediumPage1.value == "HunterXHunter" ||
    answerMediumPage1.value == "hunterxhunter" ||
    answerMediumPage1.value == "hunter x hunter" ||
    answerMediumPage1.value == "القناص" ||
    answerMediumPage1.value == "هنتر اكس هنتر" ||
    answerMediumPage1.value == "هانتر اكس هانتر"
  ) {
    answerMediumPage1.value = "";
    window.location = "./anime_medium_page2.html";
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// spyXfamily
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage2.value == "spyXfamily" ||
    answerMediumPage2.value == "SpyXFamily" ||
    answerMediumPage2.value == "Spyxfamily" ||
    answerMediumPage2.value == "spy x family" ||
    answerMediumPage2.value == "Spy X Family" ||
    answerMediumPage2.value == "سباي اكس فاميلي" ||
    answerMediumPage2.value == "سبي اكس فميلي" ||
    answerMediumPage2.value == "سباي اكس فميلي" ||
    answerMediumPage2.value == "سباي فاميلي"
  ) {
    answerMediumPage2.value = "";
    window.location = "./anime_medium_page3.html";
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// blue lock
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage3.value == "blue lock" ||
    answerMediumPage3.value == "Blue lock" ||
    answerMediumPage3.value == "Blue Lock" ||
    answerMediumPage3.value == "بلو لوك" ||
    answerMediumPage3.value == "بلولوك"
  ) {
    answerMediumPage3.value = "";
    window.location = "./anime_medium_page4.html";
    console.log("yes");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// demon slayer
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage4.value == "demon slayer" ||
    answerMediumPage4.value == "Demon slayer" ||
    answerMediumPage4.value == "Demon Slayer" ||
    answerMediumPage4.value == "ديمون سلاير" ||
    answerMediumPage4.value == "ديمون سلير" ||
    answerMediumPage4.value == "قاتل الشياطين"
  ) {
    answerMediumPage4.value = "";
    window.location = "./anime_medium_page5.html";
    console.log("yes");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// sword art online
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage5.value == "sword art online" ||
    answerMediumPage5.value == "Sword art online" ||
    answerMediumPage5.value == "Sword Art Online" ||
    answerMediumPage5.value == "سورد ارت اونلاين" ||
    answerMediumPage5.value == "سورد ارت اون لاين"
  ) {
    answerMediumPage5.value = "";
    window.location = "../end.html";
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
