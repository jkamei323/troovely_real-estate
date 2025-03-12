$(document).ready(function(){
    $(".carousel1").owlCarousel({
        items: 3,  
        loop: true, 
        responsive: {
            0: { items: 1 }, 
            600: { items: 2 }, 
            1000: { items: 3 } 
        }
    });
    $(".carousel2").owlCarousel({
        items: 3,  
        loop: true,  
        responsive: {
            0: { items: 1 }, 
            600: { items: 2 }, 
            1000: { items: 3 } 
        }
    });
    $(".carousel3").owlCarousel({
        items: 2,  
        loop: true, 
        margin: 40, 
        responsive: {
            0: { items: 1 }, 
            600: { items: 2 } 
           
        }
    });
    $(".carousel4").owlCarousel({
        items: 3,  
        loop: true,  
        margin: 20,
        responsive: {
            0: { items: 1 }, 
            600: { items: 2 }, 
            1000: { items: 3 } 
        }
    });
    $(".carousel5").owlCarousel({
        items: 2,  
        loop: true, 
        margin: 40, 
        responsive: {
            0: { items: 1 }, 
            600: { items: 2 } 
           
        }
    });
    $(".carousel6").owlCarousel({
        items: 3,  
        loop: true,  
        margin: 20,
        responsive: {
            0: { items: 1 }, 
            600: { items: 2 }, 
            1000: { items: 3 } 
        }
    });
    $(".carousel7").owlCarousel({
        items: 3,  
        loop: true,  
        margin: 20,
        responsive: {
            0: { items: 1 }, 
            600: { items: 2 }, 
            1000: { items: 3 } 
        }
    });
});
