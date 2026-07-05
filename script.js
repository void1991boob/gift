const text = document.getElementById("clickText");
const art = document.getElementById("art");

let stage = 0;

text.addEventListener("click", () => {

    // افکت دکمه
    text.style.animation = "none";
    
    text.style.transform = "scale(0.96)";

    setTimeout(() => {

        text.style.transform = "scale(1)";

    },120);

    // مرحله اول
    if(stage === 0){

        stage = 1;

        setTimeout(() => {

            text.textContent = "don't click";

            text.style.opacity = "1";
text.style.animation = "floating 1.5s ease-in-out infinite";
            

            text.style.fontSize = "18px";

            
        

        },120);

    }

    // مرحله دوم
    else if(stage === 1){

        stage = 2;

// متن حذف می‌شود
setTimeout(() => {

    text.style.display = "none";

},450);

// مکث کوتاه، بعد نمایش آرت
setTimeout(() => {

    art.style.opacity = "1";

},1750);

    }

});