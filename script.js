const titles = [
    "Developer",
    "Engineer",
    "Self Lerner"
]
charIndex = 0;
textIndex = 0;
speed = 200

function onHamburgClick(){
    const dropdown = document.getElementById('dropdown');
    dropdown.style.transform = "translateY(0)";
    setTimeout(()=>{
        const hamburg = document.getElementById('hamburg');
        hamburg.style.opacity = "0";
    }, 250);
}

function onCancelClick(){
    const dropdown = document.getElementById('dropdown');
    dropdown.style.transform = "translateY(-500px)";
    const hamburg = document.getElementById('hamburg');
    hamburg.style.opacity = "1";
}

function typewriter(){
    const span = document.getElementById('typewriter')
    if(charIndex < titles[textIndex].length){
        span.innerHTML += titles[textIndex].charAt(charIndex++)
        setTimeout(typewriter, speed)
    }
    else{
        setTimeout(eraseText, 1000);
    }
}
function eraseText(){
    const span = document.getElementById('typewriter')
    if(span.innerHTML.length > 0){
        span.innerHTML = span.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }else{
        textIndex = (textIndex + 1) % titles.length;
        charIndex = 0;
        setTimeout(typewriter, 500)
    }
}
window.onload = typewriter;
