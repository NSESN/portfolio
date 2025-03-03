//document.addEventListener("DOMContentLoaded", function () {
   // let controller = new ScrollMagic.Controller();

    //document.querySelectorAll(".card").forEach((card) => {
      //  let tween = gsap.from(card, { opacity: 0, y: 50, duration: 1, ease: "power2.out" });

        //new ScrollMagic.Scene({
          //  triggerElement: card,
            //triggerHook: 0.9,
            //reverse: false
        //})
        //.setTween(tween)
        //.addTo(controller);
    //});

    //document.querySelectorAll(".card").forEach((card) => {
      //  card.addEventListener("click", function () {
        //    this.classList.add("clicked");
          //  setTimeout(() => this.classList.remove("clicked"), 300);
        //});
    //});
//});
const parallaxElements = document.querySelectorAll(".parallax");
let xValue = 0,
    yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    
    parallaxElements.forEach((el) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-xValue* speedx}px)) translateY(calc(-50% + ${yValue *speedy}px))`;
    });
});
