$('.main-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false
    //centerMode: true
});

/*
function controlVideo(vidFunc) {
    var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage(
        '{"event":"command","func":"' + vidFunc + '","args":""}',
        "*"
    );
}*/

/*
let videoStopper = function(id) {
    let containerElement = document.getElementById(id);
    let iframe_tag = containerElement.querySelector( 'iframe');
    let video_tag = containerElement.querySelector( 'video' );
    if ( iframe_tag) {
        let iframeSrc = iframe_tag.src;
        iframe_tag.src = iframeSrc; 
    }
    if ( video_tag) {
        video_tag.pause();
    }
}
*/



var iframe = document.getElementById('video-1');
/*function pauseVid() { 
    iframe.pause(); 
} */
function pauseVid() {
    iframe.pause(); 
 }


//$('.main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //$('#video-1').jwplayer().stop();
    /*$('#video-1').trigger(pauseVid);*/
    //stopVideo($('#video-1'));
   
    /* $('#video-2').controlVideo(vidFunc); 
    $('#video-3').controlVideo(vidFunc); */
    /*$('iframe').attr('src', $('iframe').attr('src'));*/
//});



/*
$('#video-3')[0].stop(); */

/*
$(document).ready(function(){ 

    $(".btn-menu").click(function() { 
        $(".box-menu-movil").fadeIn("slow");
    });
   
    $(".btn-menu-active").click(function() { 
         $(".box-menu-movil").fadeOut("slow"); 
    });
});
*/

/*
function controlVideo(vidFunc) {
    var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage(
        '{"event":"command","func":"' + vidFunc + '","args":""}',
        "*"
    );
}*/
/*
function pauseElementTypes(type) {
    let nodes = document.querySelectorAll(type)
    for (var i = 0, els = document.getElementsByTagName(type); i < els.length; i++) {
        els[i].stop();
    }
}*/

/*
var iframe = document.getElementsByTagName('iframe')[0];

iframe.contentWindow.postMessage('{"method":"setVolume", "value":0}','*');*/


$('.main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //$('#video-1').jwplayer().stop();
    /*$('#video-1').trigger(pauseVid);*/
    //pause("iframe")
   
    /* $('#video-2').controlVideo(vidFunc); 
    $('#video-3').controlVideo(vidFunc); */
    /*$('iframe').attr('src', $('iframe').attr('src'));*/
    $('iframe').each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
    });
});

/*
$(document).ready(function(){ 

    $(".slick-dots").click(function() { 
        $('iframe').each(function() { 
            var src= $(this).attr('src');
            $(this).attr('src',src);  
        });
    });
});*/