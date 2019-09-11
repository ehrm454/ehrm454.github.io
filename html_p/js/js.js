$(document).ready(function () {

    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue);
    });

    var left = $(".me_intro");
    var right = $(".skill_intro");
    var img1 = $(".ppt_img1");
    var img2 = $(".ppt_img2");
    var img3 = $(".ppt_img3");

    right.hide();
    $(img1).css("left", "-600px");
    $(img3).css("left", "-600px");

    $(left).css("top", "-700px");
    $(left).css("left", "-300px");

    $(right).css("top", "-1000px");
    $(right).css("right", "-300px");

    $(window).on("scroll", function () {
        let top = $(window).scrollTop();
        if (top >= 545) {
            right.show();
            setTimeout(function () {
                $(left).animate({
                    bottom: 0, left: 0, top: 0, right: 0
                }, 1000);
                $(right).animate({
                    bottom: 0, left: 0, top: 0, right: 0
                }, 1000);
            });
        }
        if (top >= 1500) {
            $(img2).css("right", "-700px");
            setTimeout(function () {
                $(img1).animate({
                    bottom: 0, left: 0, top: 0, right: 0
                }, 700);
            });
        }

        if (top >= 2410) {

            setTimeout(function () {
                $(img2).animate({
                    bottom: 0, left: 0, top: 0, right: 0
                }, 700);

            });
        }

        if (top >= 3600) {
            setTimeout(function () {
                $(img3).animate({
                    bottom: 0, left: 0, top: 0, right: 0
                }, 700);
            });

        }
    });
});