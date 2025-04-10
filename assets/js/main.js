(function($) {
    "use strict";

    /*----------------------------------------
            Bootstrap dropdown               
    -------------------------------------------*/

    // Add slideDown animation to Bootstrap dropdown when expanding.

    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });


    /*---------------------
        Toggle Search Bar
    --------------------- */
    $(".search-btn").on("click", function() {
        $(this).toggleClass('active');
        $('.dropdown_search').slideToggle('medium');
    });

    /*---------------------------
       Menu Fixed On Scroll Active
    ------------------------------ */
    $(window).on("scroll", function(e) {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 250) {
            $(".sticky-nav").addClass("menu_fixed animated fadeInDown");
        } else {
            $(".sticky-nav").removeClass("menu_fixed animated fadeInDown");
        }
    });

    /*---------------------------
          Nice Select 
       ------------------------------ */

    $('select.shop-sort').niceSelect();

    /*---------------------
        venobox
    --------------------- */
    $('.venobox').venobox();
    /*---------------------

    /*---------------------------
       Commons Variables
    ------------------------------ */
    var $window = $(window),
        $body = $("body");




    /*---------------------------------
        Off Canvas Function
    -----------------------------------*/
    (function() {
        var $offCanvasToggle = $(".offcanvas-toggle"),
            $offCanvas = $(".offcanvas"),
            $offCanvasOverlay = $(".offcanvas-overlay"),
            $mobileMenuToggle = $(".mobile-menu-toggle");
        $offCanvasToggle.on("click", function(e) {
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr("href");
            $body.addClass("offcanvas-open");
            $($target).addClass("offcanvas-open");
            $offCanvasOverlay.fadeIn();
            if ($this.parent().hasClass("mobile-menu-toggle")) {
                $this.addClass("close");
            }
        });
        $(".offcanvas-close, .offcanvas-overlay").on("click", function(e) {
            e.preventDefault();
            $body.removeClass("offcanvas-open");
            $offCanvas.removeClass("offcanvas-open");
            $offCanvasOverlay.fadeOut();
            $mobileMenuToggle.find("a").removeClass("close");
        });
    })();

    /*----------------------------------
        Off Canvas Menu
    -----------------------------------*/
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
            $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on("click", "li a, .menu-expand", function(e) {
            var $this = $(this);
            if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
                e.preventDefault();
                if ($this.siblings("ul:visible").length) {
                    $this.parent("li").removeClass("active");
                    $this.siblings("ul").slideUp();
                    $this.parent("li").find("li").removeClass("active");
                    $this.parent("li").find("ul:visible").slideUp();
                } else {
                    $this.parent("li").addClass("active");
                    $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                    $this.closest("li").siblings("li").find("ul:visible").slideUp();
                    $this.siblings("ul").slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();


    /*----------------------------------
     * Offcanvas: User Panel
     ----------------------------------*/
    function mobileOffCanvasUserPanel() {
        var $offCanvasNav = $('.offcanvas-userpanel'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.user-sub-menu');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="offcanvas__user-expand"></span>');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, .offcanvas__user-expand', function(e) {
            var $this = $(this);
            if ($this.attr('href') === '#' || $this.hasClass('offcanvas__user-expand')) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    mobileOffCanvasUserPanel();

    /*---------------------
        Hero Slider
     ---------------------- */

    var heroSlider = new Swiper('.hero-slider.swiper-container', {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    /*---------------------
        Category Slider
     ---------------------- */

    var categorySlider = new Swiper('.category-slider.swiper-container', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            478: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });

    /*---------------------
        Blog Slider
     ---------------------- */

    var blogSlider = new Swiper('.blog-slider.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1500,

        // Navigation arrows

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    /*---------------------
        New Product Slider
     ---------------------- */

    var productSlider = new Swiper('.new-product-slider.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1500,
        loop: true,

        // Navigation arrows

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    /*---------------------------
        Quick view Slider 
    ------------------------------ */
    var galleryThumb = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumb
        }
    });

    /*---------------------------
        Product Details Slider 
    ------------------------------ */
    var zoomThumb = new Swiper('.zoom-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var zoomTop = new Swiper('.zoom-top', {
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: zoomThumb
        }
    });

    /*---------------------------
        Product Details Slider 
    ------------------------------ */
    var zoomThumb = new Swiper('.zoom-thumbs-2', {
        spaceBetween: 0,
        slidesPerView: 4,
        direction: 'vertical',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var zoomTop = new Swiper('.zoom-top-2', {
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: zoomThumb
        }
    });

    /*-------------------------------
      Product Gallery - Image Zoom
     --------------------------------*/

    $('.zoom-image-hover').zoom();

    /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $(".cart-plus-minus");
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });


    /*------------------------------
            Single Product Slider
    -----------------------------------*/
    var swiper = new Swiper(".single-product-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 1500,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    /*-------------------------------
        Create an account toggle
    ---------------------------------*/
    $(".checkout-toggle2").on("click", function() {
        $(".open-toggle2").slideToggle(1000);
    });

    $(".checkout-toggle").on("click", function() {
        $(".open-toggle").slideToggle(1000);
    });


    /*---------------------
        Scroll Up
    --------------------- */
    $.scrollUp({
        scrollText: '<i class="ion-android-arrow-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade",
    });
    /*---------------------
        Countdown
    --------------------- */
    $("[data-countdown]").each(function() {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day"><span class="cdown-1">%-D</span><p>Days</p></span> <span class="cdown hour"><span class="cdown-1">%-H</span><p>Hours</p></span> <span class="cdown minutes"><span class="cdown-1">%M</span> <p>Mins</p></span> <span class="cdown second"><span class="cdown-1"> %S</span> <p>Sec</p></span>'));
        });
    });

    /*-----------------------------
        Blog Gallery Slider 
    -------------------------------- */
    var swiper = new Swiper(".blog-post-media", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

     /*********************************************
     *   Company Logo Slider Active - 7 Grid Single Rows
     **********************************************/
    var companyLogoSlider = new Swiper('.company-logo-slider.swiper-container', {
        slidesPerView: 5,
        speed: 1500,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {

            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        }
    });




})(jQuery);






// video 
const playbutton = document.querySelector('.playbutton')
let video = document.querySelector('video')
let started = false



playbutton.addEventListener('click', () => {

  if(video.paused) {
    video.play()
    playbutton.classList.add('playing')
  } else {
    video.pause()
    playbutton.classList.remove('playing')
  }
})

//only used if the controls attribute is taken off the video element
// video.addEventListener('click', () => {
  // if(video.paused) {
  // video.play() 
  // } else {
  // video.pause()
  // }
// })


video.addEventListener('ended', () => {
  playbutton.classList.remove('playing')  
})


video.addEventListener('play', () => {
  playbutton.classList.add('playing')  
})


video.addEventListener('pause', () => {
  playbutton.classList.remove('playing')  
})
// video 


// Crads Size Selected Start
document.addEventListener('DOMContentLoaded', () => {
const sizeCards = document.querySelectorAll('.size-card');

sizeCards.forEach(card => {
card.addEventListener('click', () => {
  sizeCards.forEach(c => c.classList.remove('active'));
  card.classList.add('active');
});
});
});

 
// Crads Size Selected End 

// ################>Fabric Style Start <###################### 

document.addEventListener('DOMContentLoaded', () => {
    const fabricCards = document.querySelectorAll('.fabric-card');
  
    fabricCards.forEach(card => {
      card.addEventListener('click', () => {
        fabricCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  });
  
// ################>Fabric Style End  <######################
document.addEventListener('DOMContentLoaded', () => {
    const fabricCards = document.querySelectorAll('.fabric-card');
  
    fabricCards.forEach(card => {
      card.addEventListener('click', () => {
        fabricCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  });
  

// ################>Matris   End <###################### 
// ################>Storage  Start<######################
document.addEventListener('DOMContentLoaded', () => {
    const fabricCards = document.querySelectorAll('.storage-card');
  
    fabricCards.forEach(card => {
      card.addEventListener('click', () => {
        fabricCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  });
  

// ################>Storage  End <###################### 

// ################> matress-card  Start<######################
document.addEventListener('DOMContentLoaded', () => {
    const fabricCards = document.querySelectorAll('.matress-card');
  
    fabricCards.forEach(card => {
      card.addEventListener('click', () => {
        fabricCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  });
  

// ################> matress-card  End <###################### 
// ################> matress-card  Start<######################
document.addEventListener('DOMContentLoaded', () => {
    const fabricCards = document.querySelectorAll('.color-card');
  
    fabricCards.forEach(card => {
      card.addEventListener('click', () => {
        fabricCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  });
  

// ################> matress-card  End <###################### 





// Storage and Fabric color Script 
document.querySelectorAll('.fabric-card').forEach(card => {
    card.addEventListener('click', function() {
        const isSelected = this.classList.contains('selected');
        document.querySelectorAll('.fabric-card').forEach(c => c.classList.remove('selected'));
        document.querySelectorAll('.color-section').forEach(section => section.style.display = 'none');
        document.getElementById('fabricColorHeading').style.display = 'none';
        document.getElementById('storageColorHeading').style.display = 'none';

        if (!isSelected) {
            this.classList.add('selected');
            const fabric = this.getAttribute('data-fabric');
            const isStorage = fabric.includes('Storage') || fabric.includes('Ottoman') || fabric.includes('Metal Frame');

            if (isStorage) {
                document.getElementById(`colorSection${fabric.replace(/ /g, '')}`).style.display = 'flex';
                document.getElementById('storageColorHeading').textContent = `${fabric}  Option*`;
                document.getElementById('storageColorHeading').style.display = 'block';
            } else {
                document.getElementById(`colorSection${fabric.replace(/ /g, '')}`).style.display = 'flex';
                document.getElementById('fabricColorHeading').textContent = `${fabric} Color`;
                document.getElementById('fabricColorHeading').style.display = 'block';
            }
        }
    });
});

document.querySelectorAll('.color-card').forEach(card => {
    card.addEventListener('click', function() {
        const isSelected = this.classList.contains('selected');
        document.querySelectorAll('.color-card').forEach(c => c.classList.remove('selected'));

        if (!isSelected) {
            this.classList.add('selected');
        }
    });
});
// Storage and Fabric color Script 