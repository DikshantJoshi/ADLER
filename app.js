const hambuger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");
const dash = document.querySelector(".dash");

hambuger.addEventListener('click', () => {
    navlinks.classList.toggle('open');
    dash.classList.toggle('open');

})

//practise
 /*  //ANIMATION H1 LANDING PAGE

        const text = document.querySelector(".fansy");
       // const text = document.querySelectorAll("h1");

        const stringtext = text.textContent;

        const splittext =stringtext.split("");
        text.textContent= '';

        for (let i=0; i<splittext.length;i++){
            text.innerHTML += "<span>" + splittext[i] + "</span>";
        }

        let char = 0;
        let timer = setInterval(onTick, 300);

        function onTick(){
            const span = text.querySelectorAll('span')[char];
            span.classList.add('fade');
            char++
            if(char===splittext.length){
                complete();
                return;
            }
        }

        function complete(){
            clearInterval(timer);
            timer =null;
        } */