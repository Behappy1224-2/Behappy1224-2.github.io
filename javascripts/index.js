const screen = () => {
    if (window.matchMedia("(min-width: 573px)").matches) {
        return true;
    }
    return false;
}
const phone = () => {
    if (window.matchMedia("(max-width: 573px)").matches) {
        return true;
    }
    return false;
}

gsap.registerPlugin(ScrollTrigger);


let moon = gsap.timeline();
ScrollTrigger.create({
    animation: moon,
    trigger: ".scrollElement",
    start: "top top",
    end: "2200 100%",
    scrub: 1,
});
moon.to("#sky", { attr: { cy: "550" } }, 0)

//------text------
let exping = gsap.timeline({repeat: -1, yoyo: true });

exping.fromTo("#exp", {y: 0}, {y: -10}, 0);
exping.fromTo("#scroll", {y: 10}, {y: 20}, 0);

//------scene1------
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "40% 100%",
    scrub: true,

    onEnter: () => {exping.pause()},
    onLeaveBack: () => {exping.restart()},
});
//  star
scene1.to("#stars", {"transform-origin": 'top center', y: -1000, scaleX: 2, scaleY: 2, opacity: 0}, 0)
scene1.to("#exp", {y:-1000, opacity: 0}, 0)
scene1.to("#scroll", {y:-1000, opacity: 0}, 0)

let twinkle = gsap.timeline( {repeat: -1, yoyo: true} );

gsap.utils.toArray('#stars circle').forEach(e => {
    twinkle.to(e, {opacity: (Math.random() * 1), duration: (0.3 + Math.random() * 1)}, (Math.random() * 2))
})

//------scene2------
let scene2 = gsap.timeline();
ScrollTrigger.create({
    animation: scene2,
    trigger: ".scrollElement",
    start: "8% top",
    end: "40% 100%",
    scrub: 3,
});

scene2.fromTo("#stars-2", { y: 200, opacity: 0 }, { y: 0, opacity: 0.5})
scene2.fromTo("#forest", { y: 750, opacity: 0 }, { y: 200, opacity: 1 }, 0);
scene2.fromTo("#h-3", { y:300, opacity: 0}, {y: 200, opacity: 1});
scene2.fromTo("#h-2", { y:300, opacity: 0}, {y: 200, opacity: 1});
scene2.fromTo("#h-1", { y:300, opacity: 0}, {y: 200, opacity: 1});
scene2.fromTo("#lake", { y:0, opacity: 0}, {y: -150, opacity: 1});


//------sceneTransition------
let sceneTransition = gsap.timeline();
ScrollTrigger.create({
    animation: sceneTransition,
    trigger: ".scrollElement",
    start: "40% top",
    end: "70% 100%",
    scrub: 3,
});



sceneTransition.fromTo("#forest", { y: 200}, {y: 400, x: "+=350", scale: 2}, 0)
sceneTransition.fromTo("#lake", {y: -150}, {y:"-=200", x: "-=250", scale: 2}, 0)
sceneTransition.fromTo("#h-1", {y: 200}, {y:"-=250", x: "-=250", scale: 2}, 0)
sceneTransition.fromTo("#h-2", {y: 200}, {y:"-=250", x: "-=250", scale: 2}, 0)
sceneTransition.fromTo("#h-3", {y: 200}, {y:"-=250", x: "-=250", scale: 2}, 0)
if ( screen() ) {
    sceneTransition.to("#log .btn", {opacity: 0, "display": "none"}, 0);
}
sceneTransition.to("#black", {opacity: 1}, 0)
sceneTransition.to("#blackG stop:nth-child(2)", {attr: { offset: 0, "stop-color": "#c6f5f5" } }, 2)
sceneTransition.to("#blackG stop:nth-child(3)", {attr: { "stop-color": "#288f8d" } }, 2)
sceneTransition.fromTo("#bubble", {y: 750}, {y: -950, duration: 3}, 2)

//------scene3------
let scene3 = gsap.timeline();
ScrollTrigger.create({
    animation: scene3,
    trigger: ".scrollElement",
    start: "65% top",
    end: "100% 100%",
    scrub: 3,
});


scene3.to("#under", { opacity: 1}, 0)
scene3.to("#underG stop:nth-child(2)", {attr: { offset: 0.4 } }, 0)
scene3.to("#underG stop:nth-child(4)", {attr: { offset: 0.7 } }, 0)
scene3.to("#underG stop:nth-child(5)", {attr: { offset: 0.95 } }, 0)
scene3.fromTo("#grass", { y: 300 }, { y: 0, opacity: 1 }, 1)
scene3.to("#stones", { opacity: 1 }, 1)
if ( screen() ) {
    scene3.fromTo("#aboutUS", { "z-index": -1, }, { "z-index": 3 }, 0)
    scene3.to("#aboutUS", { opacity: 1 }, 1)
}
//------gif------
if ( screen() ) {
    let ricking = gsap.timeline();
    ScrollTrigger.create({
        animation: ricking,
        trigger: ".scrollElement",
        start: "40% top",
        end: "60% 100%",
        scrub: 1,
        ease: "none",
    });

    ricking.fromTo("#rickroll", { x: -400, y: -500, opacity: 0, "z-index": 5 }, { x: 2050, y: 500, duration: 3, opacity: 1 }, 0);

    let spining = gsap.timeline({repeat: -1, yoyo: true });
    ScrollTrigger.create({
        animation: spining,
        trigger: ".scrollElement",
        start: "55% top",
        end: "100% 100%",

    });
    spining.fromTo("#spin", { x: -400, opacity: 1, "z-index": 5 }, { x: 2050, duration: 3, ease: 'none', opacity: 1, scrollTrigger: {
        animation: spining,
        trigger: ".scrollElement",
        start: "55% top",
        end: "65% 100%",

        onEnterBack: function() { spining.pause(), gsap.set("#spin", { x: 0, opacity: 0 }) },
        onLeaveBack: function() { spining.pause(), gsap.set("#spin", { x: 0, opacity: 0 }) },
    }}, 0)

}




//------phone------
if ( phone() ) {
    let sceneP1 = gsap.timeline();
    ScrollTrigger.create({
        animation: sceneP1,
        trigger: ".scrollElement",
        start: "top top",
        end: "45% 100%",
        scrub: true,

        onEnter: () => {expingP.pause()},
        onLeaveBack: () => {expingP.restart()},
    });

    sceneP1.to("#stars-phone", {y: -50, scale: 2, transformOrigin: "center center", opacity: 0}, 0)
    sceneP1.to("#exp-phone", {y:-700, opacity: 0}, 0)
    sceneP1.to("#scroll-phone", {y:-700, opacity: 0}, 0)
    sceneP1.to("#log .btn", {opacity: 0, "display": "none"}, 0);
    // 
    sceneP1.to("#bg-phone stop:nth-child(2)", {attr: { offset: 0, "stop-color": "#c6f5f5" } }, 1)
    sceneP1.to("#bg-phone stop:nth-child(3)", {attr: { "stop-color": "#288f8d" } }, 1)

    gsap.utils.toArray('#stars-phone circle').forEach(e => {
        twinkle.to(e, {opacity: (Math.random() * 1), duration: (0.3 + Math.random() * 1)}, (Math.random() * 2))
    })

    let ricking = gsap.timeline();
    ScrollTrigger.create({
        animation: ricking,
        trigger: ".scrollElement",
        start: "8% top",
        end: "40% 100%",
        scrub: 1,
        ease: "SlowMo"
    });

    ricking.fromTo("#rickroll", { x: -250, y: -350, opacity: 1, "z-index": 5 }, { x: 750, y: 500, duration: 3, opacity: 1 }, 0);


    let sceneP2 = gsap.timeline();
    ScrollTrigger.create({
        animation: sceneP2,
        trigger: ".scrollElement",
        start: "25% top",
        end: "100% 100%",
        scrub: 1,
    });

    sceneP2.fromTo("#bubble-phone", {y: 750}, {y: -900}, 0);
    sceneP2.fromTo("#under-phone", { opacity: 0 }, { opacity: 1 }, 0);
   
    sceneP2.fromTo("#aboutUS", { "z-index": -1, }, { "z-index": 3 }, 0)
    sceneP2.to("#aboutUS", { opacity: 1 }, 1)
    
    //------text------
    let expingP = gsap.timeline({repeat: -1, yoyo: true });

    expingP.fromTo("#exp-phone", {y: 0}, {y: -10}, 0);
    expingP.fromTo("#scroll-phone", {y: 10}, {y: 20}, 0);
}