$(document).ready(function(){    
    $('img').hover(
        function() {
            $(this).attr('src', './img/vader_back.PNG');
        },
        function(){
            $(this).attr('src', './img/vader_front.PNG');
        }
    );
});