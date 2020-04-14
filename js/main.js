$(document).ready(function(){

    var homeSlider = Object.create(null);

    homeSlider = new Swiper ('.home-row', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        speed: 400,
        navigation: {
            nextEl: '.home-row .home-row__arrow-button--right',
            prevEl: '.home-row .home-row__arrow-button--left',
        },
    })
    if($('.home-row').length) {

        homeSlider.forEach(function (slider) {
            slider.on('progress', function () {
                this.$el.find('.home-row__progress-bar').css('width', this.progress * 100 + '%');       
            });
        })
    }

    var controller = new ScrollMagic.Controller();
    var homeRows = document.querySelectorAll('.home-row');
    homeRows.forEach(function (homeRow, index) {
        var scene = new ScrollMagic.Scene({
            triggerElement: homeRow,
            triggerHook: 0.9,
            duration: "80%",
            offset: 50 
        })
        .on("enter", function () {
            gsap.delayedCall(((index + 1) * 0.1), function(){
                gsap.set(homeRow, {x: 100, y: 50, z: 100, opacity: 0});
                gsap.to(homeRow, {duration: 1, opacity: 1, x: 0, y: 0, z: 0});
                gsap.to(homeRow.querySelector('.home-row__label'), {duration: 1, x: 0, y: '-50%'});
                gsap.set(homeRow.querySelector('.home-row__tagline-count'), {x: -100, y: -50, opacity: 0});
                gsap.to(homeRow.querySelector('.home-row__tagline-count'), {duration: 1, x: 0, y: 0, opacity: 1});
                homeRow.querySelectorAll('.home-row-item').forEach(function (item, index) {
                    gsap.set(item, {x: (20 * index), y: (15 * index), opacity: 0});
                    gsap.to(item, {duration: (0.3 * index), x: 0, y: 0, opacity: 1});
                })
            });
        })
        .on("leave", function () {
            scene.destroy();
        })
        .addTo(controller);
    })
    var footer = document.querySelector('.footer__box');
        var footerScene = new ScrollMagic.Scene({
        triggerElement: footer,
        triggerHook: 0.9,
        duration: "80%",
        offset: 50 
    }).on('enter', function () {
        gsap.set(footer, {x: 0, y: 250, z: 0, opacity: 0});
        gsap.to(footer, {duration: 0.8, opacity: 1, x: 0, y: 0, z: 0});
    }).on('leave', function () {
        footerScene.destroy();
    }).addTo(controller);

    $('.menu__icon').on('click', function () {
        $(this).closest('.menu').addClass('active');
        $('body').addClass('overflow');
    })

    $('.menu__box-close').on('click', function () {
        $(this).closest('.menu').removeClass('active');
        $('body').removeClass('overflow');
    })
    $('.password__form').on('click', '.password__form-toggle', function () {
        
        
        var form = document.querySelector('.password__form');
        var input = form.querySelector('input');
        console.log(form);
        if(!$(this).parent().hasClass('show-pass')) {
            $(this).parent().addClass('show-pass');
            input.type = 'text';
        }
        else {
            $(this).parent().removeClass('show-pass');
            input.type = 'password';
        }
    })
})