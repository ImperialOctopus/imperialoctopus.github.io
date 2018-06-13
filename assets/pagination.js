$(document).ready(function () {
    $(".btnhome").click(function () {
        if ($(".projects").css('display') != 'none') {
            $(".projects").slideToggle();
        }
        if ($(".about").css('display') != 'none') {
            $(".about").slideToggle();
        }
        if ($(".home").css('display') == 'none') {
            $(".home").slideToggle();
        }

        $(".btnhome").addClass('whitelink');
        $(".btnabout").removeClass('whitelink');
        $(".btnprojects").removeClass('whitelink');
    });
    $(".btnabout").click(function () {
        if ($(".projects").css('display') != 'none') {
            $(".projects").slideToggle();
        }
        if ($(".home").css('display') != 'none') {
            $(".home").slideToggle();
        }
        if ($(".about").css('display') == 'none') {
            $(".about").slideToggle();
        }

        $(".btnhome").removeClass('whitelink');
        $(".btnabout").addClass('whitelink');
        $(".btnprojects").removeClass('whitelink');
    });
    $(".btnprojects").click(function () {
        if ($(".home").css('display') != 'none') {
            $(".home").slideToggle();
        }
        if ($(".about").css('display') != 'none') {
            $(".about").slideToggle();
        }
        if ($(".projects").css('display') == 'none') {
            $(".projects").slideToggle();
        }

        $(".btnhome").removeClass('whitelink');
        $(".btnabout").removeClass('whitelink');
        $(".btnprojects").addClass('whitelink');
    });
    $(".project1name").click(function () {
        $(".project1").slideToggle();
    });
    $(".project2name").click(function () {
        $(".project2").slideToggle();
    });
    $(".project3name").click(function () {
        $(".project3").slideToggle();
    });
});