document.addEventListener('click', function(e) {
    if (e.target.matches('a[href="#"]')) {
        e.preventDefault();
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const wishIcons = document.querySelectorAll('.icon img');

for(let i = 0; i<wishIcons.length; i++){
    wishIcons[i].addEventListener('click',function(){
        alert("로그인 후 관심상품 등록을 해주세요.");
    });
}