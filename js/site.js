$(document).ready(function(){  

	var burger = $(".burger");
	burger.click(function(){
		$('header ul').toggleClass("open");
	});

  var img =$("img.imgforvideo");
  img.click(function(){
    $('video').css( "display", "block" );
    img.css( "display", "none" );
  })

});


//////////////// ////     bxslider  START 
$(document).ready(function(){
  $('#slider1').bxSlider();
});

var slider = $('#slider1').bxSlider({
  mode: 'horizontal'
});

$('#reload-slider').click(function(e){
  e.preventDefault();
  slider.reloadSlider({
    mode: 'fade',
    auto: true,
    pause: 1000,
    speed: 500
  });
});

// //////////////// ////     bxslider  END
$(document).ready(function(){
    $('#slider2').bxSlider({
      pagerCustom: '#bx-pager'
    });
});

//////////////////

$(document).ready(function(){
  $('#slider3').bxSlider();
});

var slider = $('#slider3').bxSlider({
  mode: 'horizontal'
});

$('#reload-slider').click(function(e){
  e.preventDefault();
  slider.reloadSlider({
    mode: 'fade',
    auto: true,
    pause: 1000,
    speed: 500
  });
});

////////////////////////
$(document).ready(function(){
  $('#slider4').bxSlider();
});

var slider = $('#slider4').bxSlider({
  mode: 'horizontal'
});

$('#reload-slider').click(function(e){
  e.preventDefault();
  slider.reloadSlider({
    mode: 'fade',
    auto: true,
    pause: 1000,
    speed: 500
  });
});
//////////////////////////////////////
$(document).ready(function(){
  $('#slider5').bxSlider();
});

var slider = $('#slider5').bxSlider({
  mode: 'horizontal'
});

$('#reload-slider').click(function(e){
  e.preventDefault();
  slider.reloadSlider({
    mode: 'fade',
    auto: true,
    pause: 1000,
    speed: 500
  });
});
//////////////////////////////////////
$(document).ready(function(){
  $('#slider6').bxSlider();
});

var slider = $('#slider6').bxSlider({
  mode: 'horizontal'
});

$('#reload-slider').click(function(e){
  e.preventDefault();
  slider.reloadSlider({
    mode: 'fade',
    auto: true,
    pause: 1000,
    speed: 500
  });
});
//////////////////////////////////////