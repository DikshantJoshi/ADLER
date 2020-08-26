function splitscroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration:'300%',
        triggerElement:".S-m-l",
        triggerHook:0
    })

    .setPin('.S-m-l')
    .addTo(controller);
}
splitscroll();