$(".project").click(function() {
    $("body").addClass("noscroll");
    $(this).siblings().addClass("show");
    $(this).siblings().children(".content").addClass("fade-in");
    $(this).siblings().children(".content").removeClass("fade-out");
});

$(".overlay").click(function() {
    $("body").removeClass("noscroll");
    $(this).removeClass("show")
    $(this).children(".content").removeClass("fade-in");
    $(this).children(".content").addClass("fade-out");
});