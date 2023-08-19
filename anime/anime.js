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
  }, "10000");
} else if (window.location.toString().includes("medium")) {
  setTimeout(() => {
    document.querySelector(
      ".left-right"
    ).innerHTML = `<i class="fa-solid fa-fire-flame-curved"></i> ادري تحسها صعبة بس حاول يا بطل`;
  }, "15000");
}

hint.addEventListener("click", function () {
  // easy

  if (window.location.toString().includes("anime_easy")) {
    if (window.location.toString().includes("anime_easy_page1")) {
      document.querySelector(".err").innerText = "التلمح ان هذا الانمي عمك";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("anime_easy_page2")) {
      document.querySelector(".err").innerText = "موت بالانجليزي ايش؟";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("anime_easy_page3")) {
      document.querySelector(".err").innerText =
        "ما احس تحتاج تلميح بس معليه التلميح هو اكثر انمي فيه صراخ";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("anime_easy_page4")) {
      document.querySelector(".err").innerText = "اللي في النص بنش";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("anime_easy_page5")) {
      document.querySelector(".err").innerText =
        "اخر سؤال يا هوه مافي مشكلة طابور > كيو";
      document.querySelector(".err").style.color = "green";
    }
    // medium
  } else if (window.location.toString().includes("anime_medium")) {
    if (window.location.toString().includes("anime_medium_page1")) {
      document.querySelector(".err").innerText = "قد لمعت عيناه";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("anime_medium_page2")) {
      document.querySelector(".err").innerText = "جاسوس بالانجليزي ايش؟";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("anime_medium_page3")) {
      document.querySelector(".err").innerText = "انمي رياضي جديد";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("anime_medium_page4")) {
      document.querySelector(".err").innerText =
        "حرام عليك تستخدم تلميح, افضل انمي تحريك والوان";
      document.querySelector(".err").style.color = "green";
    } else if (window.location.toString().includes("anime_medium_page5")) {
      document.querySelector(".err").innerText =
        "حتى انا حسيتها صعبة , التلميح هو فن و اونلاين";
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

  localStorage.clear();
} else {
  window.localStorage.setItem("counter", midCounter);
  counter.innerText = window.localStorage.getItem("counter");
}
// ===========================easy=======================
//one piece
answerButton.addEventListener("click", function (e) {
  if (
    answerPage1.value == "ون بيس" ||
    answerPage1.value == "ونبيس" ||
    answerPage1.value == "onePiece" ||
    answerPage1.value == "One Piece" ||
    answerPage1.value == "One piece" ||
    answerPage1.value == "one piece"
  ) {
    answerPage1.value = "";
    document.querySelector(".left-right").innerText = "كفو عليك";
    document.querySelector(".left-right").style.color = "blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./anime_easy_page2.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//death note
answerButton.addEventListener("click", function (e) {
  if (
    answerPage2.value == "ديث نوت" ||
    answerPage2.value == "ديثنوت" ||
    answerPage2.value == "Death Note" ||
    answerPage2.value == "Death note" ||
    answerPage2.value == "death note" ||
    answerPage2.value == "deathNote"
  ) {
    answerPage2.value = "";
    document.querySelector(".left-right").innerText = "اسطووورة";
    document.querySelector(".left-right").style.color = "blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./anime_easy_page3.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
//dragon ball
answerButton.addEventListener("click", function (e) {
  if (
    answerPage3.value == "دراقون بول" ||
    answerPage3.value == "دراجون بول" ||
    answerPage3.value == "دراجونبول" ||
    answerPage3.value == "دراقونبول" ||
    answerPage3.value == "دراغونبول" ||
    answerPage3.value == "دراغون بول" ||
    answerPage3.value == "Dragon Ball" ||
    answerPage3.value == "Dragon ball" ||
    answerPage3.value == "bragon ball" ||
    answerPage3.value == "bragonBall"
  ) {
    answerPage3.value = "";
    document.querySelector(".left-right").innerText = "صح عليييك";
    document.querySelector(".left-right").style.color = "blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./anime_easy_page4.html";
    }, "2000");
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
    answerPage4.value == "ونبانشمان" ||
    answerPage4.value == "One Punch Man" ||
    answerPage4.value == "one punch man" ||
    answerPage4.value == "OnePunchMan" ||
    answerPage4.value == "onePunchMan"
  ) {
    answerPage4.value = "";
    document.querySelector(".left-right").innerText = "كفو قربت تخلص";
    document.querySelector(".left-right").style.color = "blue";


    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./anime_easy_page5.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// Hykuu
answerButton.addEventListener("click", function (e) {
  if (
    answerPage5.value == "هايكيو" ||
    answerPage5.value == "هيكيو" ||
    answerPage5.value == "هاي كيو" ||
    answerPage5.value == "Haikyuu" ||
    answerPage5.value == "haikyuu"
  ) {
    answerPage5.value = "";
    document.querySelector(".left-right").innerText = "حليتها كلها برافوو";
    document.querySelector(".left-right").style.color = "blue";


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
    document.querySelector(".left-right").innerText = "كفو عليك";
    document.querySelector(".left-right").style.color = "Blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./anime_medium_page2.html";
    }, "2000");
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
    document.querySelector(".left-right").innerText = "اسطووورة";
    document.querySelector(".left-right").style.color = "Blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./anime_medium_page3.html";
    }, "2000");
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
    document.querySelector(".left-right").innerText = "صح عليييك";
    document.querySelector(".left-right").style.color = "Blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./anime_medium_page4.html";
    }, "2000");
  } else {
    document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية";
    document.querySelector(".err").style.color = "red";
    e.preventDefault();
  }
});
// demon slayer
answerButton.addEventListener("click", function (e) {
  if (
    answerMediumPage4.value == "Kimetsu No Yaiba" ||
    answerMediumPage4.value == "Kimetsu no yaiba" ||
    answerMediumPage4.value == "kimetsu no yaiba" ||
    answerMediumPage4.value == "demon slayer" ||
    answerMediumPage4.value == "Demon slayer" ||
    answerMediumPage4.value == "Demon Slayer" ||
    answerMediumPage4.value == "ديمون سلاير" ||
    answerMediumPage4.value == "ديمون سلير" ||
    answerMediumPage4.value == "قاتل الشياطين"
  ) {
    answerMediumPage4.value = "";
    document.querySelector(".left-right").innerText = "كفو قربت تخلص";
    document.querySelector(".left-right").style.color = "Blue";

    midCounter++;
    localStorage.setItem("counter", midCounter);
    counter.innerText = localStorage.getItem("counter");

    setTimeout(() => {
      window.location = "./anime_medium_page5.html";
    }, "2000");
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
    document.querySelector(".left-right").innerText = "حليتها كلها برافوو";
    document.querySelector(".left-right").style.color = "Blue";

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
