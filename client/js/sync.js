window.onload  = function() {
    
    init();                                                 //For the app manager  
    
    min = Math.ceil(1000);
    max = Math.floor(10000);
    random = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

    $("#random-num").text(random.toString());
};