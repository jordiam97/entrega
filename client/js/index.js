counter = 1;

window.onload  = function() {
    
    init();                                                 //For the app manager
    timing();
    
};

function timing() {
    switch (counter) {
        case 1:
            timer = 10000;
            setTimeout(hideRedButton, timer);
            break;
        case 2:
            timer = 5000;
            setTimeout(showRedButton, timer);
            break;
        case 3:
            timer = 5000;
            setTimeout(hideRedButton, timer);
            break;
        case 4:
            timer = 60000;
            setTimeout(showRedButton, timer);
            break;
        case 5:
            timer = 5000;
            setTimeout(hideRedButton, timer);
            break;
    }
}

function hideRedButton() {
    $("#press-red").hide();
    counter++;
    if (counter < 6) {
        timing();
    }
}

function showRedButton() {
    $("#press-red").show();
    counter++;
    if (counter < 6) {
        timing();
    }
}
