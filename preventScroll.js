scrollDisabled = false;

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    if (!scrollDisabled) {
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
            scrollDisabled = true;
       }
       
    }

    if (scrollDisabled) {
    window.onscroll = function() {
        scrollDisabled = false;
    }
    };
};