gsap.registerPlugin(ScrollTrigger);

let scene1_box1 = gsap.timeline();
let scene1_box2 = gsap.timeline({repeat: -1});
let scene1_box3 = gsap.timeline({repeat: -1, yoyo: true});

let btn1Click = () => {
    scene1_box1.fromTo("#box-1", { x: "250px" }, { x: "1000px", duration: 3}, 0);
    scene1_box2.fromTo("#box-2", { x: "250px", y: "100px" }, { x: "1000px", duration: 3}, 0);
    scene1_box3.fromTo("#box-3", { x: "250px", y: "200px"  }, { x: "1000px", duration: 3}, 0);
} 



let scene2 = gsap.timeline();
ScrollTrigger.create({
    animation: scene2,
    trigger: "#scrollElement",
    start: "100px top",
    end: "100% 100%",
    onEnter: () => {
        scene1_box1.pause();
        scene1_box2.pause();
        scene1_box3.pause();
    },
    scrub: true,
    markers: true
});
scene2.fromTo("#box-4", { x: "250px", y: "500px" }, { x: "1000px", duration: 3}, 0);