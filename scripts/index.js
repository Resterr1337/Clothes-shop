var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper1", {
    effect: "flip",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



function goToMarketPlaceFunc() {
    document.querySelector("#onescreen-btn").classList.add("btn-wrapper-active")
    setTimeout(() => {window.location = "shop.html"}, 0.5 * 1000)
}