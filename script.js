const text = document.getElementById("clickText");
const art = document.getElementById("art");

const glitchChars = [
    "@","#","$","%","&","*","+","=","?","!",
    "0","1","2","3","4","5","<",">","|","/"
];

function glitchText(element, finalText){

    const colors = [
        "#ffffff",
        "#ff4040",
        "#00ffff"
    ];

    let frame = 0;

    const totalFrames = 8;

    const timer = setInterval(()=>{

        let output = "";

        for(let i=0;i<finalText.length;i++){

            const char = finalText[i];

            if(char === " "){
                output += " ";
                continue;
            }

            // فقط حدود 20 درصد حروف خراب شوند
            if(Math.random() < 0.20){

                output += glitchChars[
                    Math.floor(Math.random()*glitchChars.length)
                ];

            }else{

                output += char;

            }

        }

        element.textContent = output;

        element.style.color =
        colors[Math.floor(Math.random()*colors.length)];

        frame++;

        if(frame >= totalFrames){

            clearInterval(timer);

            element.textContent = finalText;

            element.style.color = "white";

            element.style.animation =
            "floating 1.5s ease-in-out infinite";

        }

    },45);

}



let stage = 0;

text.addEventListener("click", () => {

    // افکت دکمه
    text.style.animation = "none";
    
    text.style.transform = "translate(-50%, -50%) scale(.96)";

    setTimeout(() => {

        text.style.transform = "translate(-50%, -50%) scale(1)";

    },120);

    // مرحله اول
    if(stage === 0){

        stage = 1;

        setTimeout(() => {

            text.style.opacity = "1";

glitchText(text,"don't click");

// بعد از تمام شدن گلیچ، شناور شروع شود
text.addEventListener("animationend", function glitchEnd(){

    text.style.animation = "floating 1.5s ease-in-out infinite";

    text.removeEventListener("animationend", glitchEnd);

});
            

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

},2550);

    }

});
