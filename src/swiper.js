
function swiper (){
    return ( '.swiper', {
        direction: 'horizontal',
        loop: true,
    
        pagination: {
            el: '.swiper-pagination',
            clickabe: true,
        },
    
        navigation: {
            nextEl: '.swiper-buuton-next',
            prevEl: '.swiper-button-prev',
        },
        
    });
}

export default swiper;



const swiper = Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickabe: true,
    },

    navigation: {
        nextEl: '.swiper-buuton-next',
        prevEl: '.swiper-button-prev',
    },
    
});