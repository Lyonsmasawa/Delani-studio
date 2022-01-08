$(document).ready(function () {
    $("#design-cont").click(function () {
        $("#design-img").toggle();
        $(".design").toggle();
    });
    $("#develop-cont").click(function () {
        $("#develop-img").toggle();
        $(".develop").toggle();
    });
    $("#product-cont").click(function () {
        $("#product-img").toggle();
        $(".product").toggle();
    });
});