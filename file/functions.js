// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

// TYPEWRITER EFFECT (working)
(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this),
                str = $ele.html(),
                progress = 0;
            $ele.html('');
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

// ------------------------------------------------------
// CLOCK FIX + WORKING UPDATE + MATCHES YOUR HTML
// ------------------------------------------------------

function updateClock() {
    // DATE YOU WANT TO START COUNTING FROM
    // Example: 9497 days ago = around 1999. Use your date here:
    var startDate = new Date("1999-11-23T00:00:00");

    var now = new Date();
    var seconds = Math.floor((now - startDate) / 1000);

    var days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;

    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    // Format the clock EXACTLY as your index.html expects
    var text = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";

    $("#clock").html(text);
}

// Update clock every second
setInterval(updateClock, 1000);
