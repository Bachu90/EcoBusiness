$(document).ready(function () {
    $("button.hamburger").on('click', function () {
        $(this).toggleClass("active");
        $("header nav ul").toggleClass("active")
    });
});
