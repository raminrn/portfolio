// $(".button").click(function () {
//     $(this).toggleClass("active");
//     $(".icons").toggleClass("open");
//
// });

// Smooth scroll for the navigation items in the menu//
$(document).ready(function () {
    $("#logo").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    })
});

$(document).ready(function () {
    $("#nav-home").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    })
});

$(document).ready(function () {
    $("#nav-about").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    })
});

$(document).ready(function () {
    $("#nav-skills").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    })
});

$(document).ready(function () {
    $("#nav-projects").click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1500);
    })
});

$(document).ready(function () {
    $("#view-work-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    })
});

$(document).ready(function () {
    $("#nav-contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    })
});

$(document).ready(function () {
    $("#viewwork-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    })
});

$(document).ready(function () {
    $("#next-page").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    })
});

//Triggering the scroll to top button //
$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > $('html').height() / 10) {
        $('.to-top').fadeIn();
    } else {
        $('.to-top').fadeOut();
    }
});
$('.to-top').click(function () {
    $('html,body').animate({scrollTop: 0}, 'slow');
    return false;
});


// Onclick opens the responsive nav menu
$(document).ready(function () {

    $('.mobile-icon').click(function () {
        $('header ul').toggleClass("showing");

    });

});

[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});