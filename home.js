let esy = document.querySelector(".easy")

esy.addEventListener("mouseover",function(){
    esy.innerHTML = `في ذي الصعوبة راح تجيب الجواب من النظرة الاولى`
})
esy.addEventListener("mouseout",function(){
    esy.innerText = "سهل"
    
})