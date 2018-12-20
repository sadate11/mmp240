jQuery(document).ready(function ($) {
            // Your jQuery code here, using $ to refer to jQuery.
            /*
               This is the code to slide the main navigation up and down.
            */
            $('#menu_button').click(function (evt) {
                console.log('evt', evt);
                evt.preventDefault();
                $('#main_nav').slideToggle();
            }); //end menu_button
            //this code taken from Sebastien on Stackoverflow: http://stackoverflow.com/questions/6461300/triggering-jquery-with-css-media-queries
            //it's been rearranged slightly
            //leave the lines below and then write your code in the doneResizing function below
            doneResizing();
            var id;
            $(window).resize(function () {
                clearTimeout(id);
                id = setTimeout(doneResizing, 0);
            });

            function doneResizing() {
                //this code requires that you have Modernizr included BEFORE this file. Here is modernizr: https://modernizr.com/
                //the trick with min-width media queries is that you need to start from your largest and go down. In the else at the end you can write  js for any size below your smallest min-width.
                if (Modernizr.mq('screen and (min-width:45em)')) {
                    $('#main_nav').show(); //make sure it is showing at larger sizes
                }
                else {
                    //Your code goes here for screens below 45em in this example.
                    $('#main_nav').hide(); //make sure hiding at smaller sizes
                }
              console.log('resized');
            } //end doneResizing
        });

  // Hero Video

  $( document ).ready(function() {
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });
  });

  function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
  }

  function initBannerVideoSize(element){
    $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
  }

  function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');

      $(this).width(windowWidth);

      if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

          $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }
