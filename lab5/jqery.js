$(document).ready(function(){
    $('a').on('click', function(e){
        e.preventDefault();
    });

    $('#ddmenu li').hover(function () {
        clearTimeout($.data(this,'timer'));
        $('ol',this).stop(true,true).slideDown(200);
    }, function () {
        $.data(this,'timer', setTimeout($.proxy(function() {
            $('ol',this).stop(true,true).slideUp(200);
        }, this), 100));
    });

});
$("#asdsa").tooltip({

});