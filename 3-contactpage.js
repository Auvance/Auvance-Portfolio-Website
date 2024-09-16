// ======== [1] PRELOADER ========
const tll = gsap.timeline({
    paused: "true"
  });
  tll.to("#percent, #bar",{
    duration:.2,
    opacity: 0,
    zIndex: -1
  });
  tll.to("#preloader",{
    duration: .8,
    width: "0%"
  });
  
  var width = 1;
  var bar = document.getElementById("barconfrm");
  var id;
  function move(){
    id = setInterval(frame,10);
  
  }
  function frame(){
    if(width>=100){
        clearInterval(id);
        tll.play();
    }
    else{
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
  }
  
  
  //======== [2] ANIMATED NAV BAR ========
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var navbar = document.getElementById("navbar");
        navbar.style.display = "flex"; // Show the navbar
        var tl = gsap.timeline();
        tl.fromTo(".logo , .li", {
            opacity: 0,
            y: "-100%"
        }, {
            opacity: 1,
            duration: 1.5,
            y: "0%",
            stagger: 0.25
        });
    }, 1000); // 4000 milliseconds = 4 seconds
  });
  
// ======== [3] LENIS SCROLL ========
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
    

  