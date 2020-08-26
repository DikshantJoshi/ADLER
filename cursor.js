var mouseCursor = document.querySelector('.cursor');
       /* var Desk = document.querySelectorAll('.navlinks li');*/
       var Desk = document.querySelectorAll('a');


        window.addEventListener("mousemove",cursor);

        function cursor(e){
            mouseCursor.style.top = e.pageY + 'px';
            mouseCursor.style.left = e.pageX +'px';
        }

        Desk.forEach( link => {
            link.addEventListener("mouseleave", () => {
                mouseCursor.classList.remove("link-grow");
            });
            link.addEventListener("mouseover", () => {
                mouseCursor.classList.add("link-grow");
            });
        })