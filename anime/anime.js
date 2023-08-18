let hint = document.querySelector(".hint");
hint.addEventListener("mouseover", function () {
  hint.innerText = `افااا`;
});
hint.addEventListener("mouseout", function () {
  hint.innerHTML = `<i class="fa-solid fa-face-smile-wink me-2" style="color: #000000;"></i>تلميح`;
});

hint.addEventListener("click",function(){
    document.querySelector(".err").innerText = "اول شكل بريك"
    document.querySelector(".err").style.color = "green"
})

let answer = document.querySelector(".answer")
let answerButton = document.querySelector(".next")



answer.onfocus = function(){
    document.querySelector(".err").innerText = "حاول تفصل كل صورة وتجمعها مع بعض"
    document.querySelector(".err").style.color = "black"
}

answerButton.addEventListener("click",function(e){
    if(answer.value == "بريكينج باد" || answer.value == "بريكينق باد"){
        answer.value = ""
    }else{
        document.querySelector(".err").innerText = "غلط عليك حاول مره ثانية"
        document.querySelector(".err").style.color = "red"
        e.preventDefault()
    }

})