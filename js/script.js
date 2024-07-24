$(function () {
    // ハンバーガーメニュー
    $(".js-hamburger,.js-drawer").click(function () {
        $(".js-hamburger").toggleClass("is-active");
        $(".js-drawer").fadeToggle();
    });
    // スライダー/swiper
    const swiper = new Swiper(".swiper", {
        loop: true,
        effect: "fade",
        speed: 3000,
        autoplay: {
          delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
    // モーダル
    const open = $(".js-modal-open"),
    close = $(".js-modal__close"),
    modal = $(".js-modal");

    // 開くボタンをクリックしたらモーダルを表示
    open.on('click', function(){
        modal.addClass('is-open');
    });

    // 閉じるボタンをクリックしたらモーダルを閉じる
    close.add(modal).on('click',function(){
        modal.removeClass('is-open');
    });

    // serviceコンテンツの表示・非表示切り替え
    const tabButton = $('.js-tab-button'),
    tabContent = $('.js-tab-content');
    tabButton.on('click',function(){
        let index = tabButton.index(this);
        tabButton.removeClass('is-active');
        $(this).addClass('is-active');
        tabContent.removeClass('is-active');
        tabContent.eq(index).addClass('is-active');
    })
});

// headerの固定
window.onscroll = function() {myFunction()};

var header = document.querySelector('.js-header');
var mainView = document.querySelector('.js-fv').offsetHeight;

function myFunction() {
    if (window.pageYOffset > mainView) {
        header.classList.add("fixed");
        header.style.top = '0';
    } else {
        header.classList.remove("fixed");
        // header.style.top = '-100%';
    }
}