// ======== [1] ANIMATED COUNTER BEFORE TRANSITION STARTS ========
function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;
  
    function updateCounter() {
    if (currentValue === 100) {
    return;
  }
  
    currentValue += Math.floor(Math.random() * 10) +1;
  
    if (currentValue > 100) {
    currentValue = 100;
  }
    counterElement.textContent = currentValue;
  
    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
  }
  startLoader();
  
  
  gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
  })
  
  // ======== [2] ANIMATED BAR WELCOME USER ========
  gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
  amount: 0.5,
  },
  ease: "power4.inOut",
  });
  
  //======== [3] ANIMATED NAV BAR ========
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
    }, 4100); // 4000 milliseconds = 4 seconds
  });
  
  // ======== [4] SPLYDEE ========
  const carouselElements = document.querySelectorAll(".splide");
  
    // Iterate through each carousel element
    carouselElements.forEach((carouselElement) => {
      // Initialize a new Splide instance for each carousel
      const splide = new Splide(carouselElement, {
        type: "loop",
        drag: true,
        autoWidth: true,
        gap: 30,
        pagination: false,
        arrows: false,
        autoScroll: {
          speed: 1,
          pauseOnHover: true,
        },
      });
  
      // Mount the Splide instance
      splide.mount(window.splide.Extensions);
    });
  
  
  // ======== [5] BURGER MENU ========
  
  window.addEventListener('scroll', function () {
    var menuWrap = document.querySelector('.menu-wrap');
    var scrollPosition = window.scrollY;
  
    // Adjust the threshold as needed
    var threshold = 100;
  
    if (scrollPosition > threshold) {
        // Show the menu when scrolling downwards
        menuWrap.style.right = '0';
    } else {
        // Hide the menu when scrolling upwards
        menuWrap.style.right = '-300px';
    }
  });
  
  
  
  var t1 = new TimelineMax({ paused: true });
  
  t1.to(".nav-container", 1, {
    left: 0,
    ease: Expo.easeInOut,
  });
  
  t1.staggerFrom(
    ".menu > div",
    0.8,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.1",
    "-=0.4"
  );
  
  t1.staggerFrom(
    ".socials",
    0.8,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.4",
    "-=0.6"
  );
  
  t1.reverse();
  
  // ======== [5.1] TOGGLE MENU FUNCTION (when hamburger is clicked) ========
  document.querySelector('.menu-wrap').addEventListener('click', function () {
    t1.reversed(!t1.reversed());
  });

  // ======== [6] PROJECT HOVER IMAGE EFFECT ========
  var $cursor = $(".cursor"),
        $overlay = $(".project-overlay");

      function moveCircle(e) {
        TweenLite.to($cursor, 0.5, {
          css: {
            left: e.pageX,
            top: e.pageY
          },
          delay: 0.03
        });
      }

      $(".p-1").hover(function() {
        $(".cursor").css({ "background-image": "url(./W-ProjectImages/TendyCuts.png)" });
      });
      $(".p-2").hover(function() {
        $(".cursor").css({ "background-image": "url(image-2.jpg)" });
      });
      $(".p-3").hover(function() {
        $(".cursor").css({ "background-image": "url(image-3.jpg)" });
      });
      $(".p-4").hover(function() {
        $(".cursor").css({ "background-image": "url(image-4.jpg)" });
      });

      var flag = false;
      $($overlay).mousemove(function() {
        flag = true;
        TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
        $($overlay).on("mousemove", moveCircle);
      });

      $($overlay).mouseout(function() {
        flag = false;
        TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
      });

      //Hover Effect (for the project titles in list)
      $(".p-1, .p-2, .p-3, .p-4").hover(
        function() {
            $(this).find(".project-title").css("transform", "translateX(-20px)");
        },
        function() {
            $(this).find(".project-title").css("transform", "translateX(0)");
        }
    );

    //Hover Effect (for the FAQ & Services Title)
    $(".sec-3").hover(
      function() {
          $(this).find(".service-title, .hr, .frequentlyaskedtitle, .hrservice").css("transform", "translateY(-15px)");
      },
      function() {
          $(this).find(".service-title, .hr, .frequentlyaskedtitle, .hrservice").css("transform", "translateY(0)");
      }
  );

      
  // ======== [7] TYPEWRITER EFFECT ========
      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      const phrases = ["Frontender.", "VideoEditor.", "Designer."];
      const el = document.getElementById("typewriter");

      let sleepTime = 100;

      let curPhraseIndex = 0;

      const writeLoop = async () => {
        while (true) {
          let curWord = phrases[curPhraseIndex];

          for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
          }

          await sleep(sleepTime * 10);

          for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
          }

          await sleep(sleepTime * 5);

          if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
          } else {
            curPhraseIndex++;
          }
        }
      };

      writeLoop();


// ======== [8] ANIMATING TEXT ON SCROLL ========
      let sections = document.querySelectorAll('section');
      window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 700;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
          
        }
    })
};

// ======== [9] ACCORDIAN GSAP ========
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

// ======== [10] LENIS SCROLL ========
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