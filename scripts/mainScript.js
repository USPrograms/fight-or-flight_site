function equalizeHeight() {
    var divs = document.querySelectorAll('.download-spacing-wrapper')
    var maxHeight = 0;

    divs.forEach(function(div) {
        var height = div.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    divs.forEach(function(div) {
        div.style.height = maxHeight + 'px';
    });
}

window.addEventListener('load', equalizeHeight);
window.addEventListener('resize', equalizeHeight);