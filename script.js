const navbar = document.querySelector('#nav');
const backwardArrow = document.querySelector('#arrow-backward');
const forwardArrow = document.querySelector('#arrow-forward');


window.addEventListener("scroll", () => {
    if(window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
    }
    else {
        navbar.classList.remove("navbar-fixed");
    }
});

const multimediSwiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 50,
    autoplay: {
        delay: 3000,
        setTimeout: 3500,
    },
    breakpoints: {
        0: {
            centeredSlides: true,
            slidesPerView: 1.5
        },
        570: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2.5
        },
        992: {
            slidesPerView: 4
        },
        1366: {
            slidesPerView: 4
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


$(".collapse-header").click(function () {
    $(".collapse-item").slideUp();
    if ($(this).hasClass("active")) {
       $(this).next().slideUp();
       $(this).removeClass("active");
    } else {
       $(this).next().slideDown();
       $(".collapse-header").removeClass("active");
       $(this).addClass("active");
    }
 });

