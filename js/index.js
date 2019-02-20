$(".project").click(function() {
    $(this).siblings().addClass("show");
});

$(".overlay").click(function() {
    $(this).removeClass("show")
});