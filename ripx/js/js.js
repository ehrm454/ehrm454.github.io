
$(document).ready(function() {
    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue);
    });

    $(window).on("scroll", function () {
        var width=$(".top_content").width()

        let top = $(window).scrollTop();
        if(width>1080){
            if (top >= 591) {
                $('.img_array_3 , .img_array_4').animate({
                    top: -300
                }, 1);
            }
        }
    });

});