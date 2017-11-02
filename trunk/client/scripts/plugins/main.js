/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).on("ready",function() {
	"use strict"
	/*-----------------------------------------------------------------------------------*/
	/* 	LOADER
	/*-----------------------------------------------------------------------------------*/
	$("#loader").delay(500).fadeOut("slow");
	
	/*-----------------------------------------------------------------------------------*/
	/* 		WORK FILTER
	/*-----------------------------------------------------------------------------------*/
	var $container = $('.portfolio-wrapper .items');
	   $container.imagesLoaded(function () {
	   $container.isotope({
	   itemSelector: '.item',
	   layoutMode: 'fitRows'
	  });
	});
	$('.filter li a').on('click', function () {
	   $('.filter li a').removeClass('active');
	   $(this).addClass('active');
	   var selector = $(this).attr('data-filter');
	   $container.isotope({
		filter: selector
	   });
	   return false;
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* 	GALLERY SLIDER
	/*-----------------------------------------------------------------------------------*/
	$('.gallery-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* 	SLIDER REVOLUTION
	/*-----------------------------------------------------------------------------------*/
	jQuery('.tp-banner').show().revolution({
		dottedOverlay:"none",
		delay:10000,
		/* startwidth:1170,
		startheight:900, */
		responsiveLevels:[1920,1025,768,480],
		gridwidth:[1920,1025,768,480],
		gridheight:[900,600,500,400],		
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
			onHoverStop:"off",
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			}
			,
			arrows: {
				style:"zeus",
				enable:true,
				hide_onmobile:true,
				hide_under:600,
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
				left: {
					h_align:"left",
					v_align:"center",
					h_offset:0,
					v_offset:0
				},
				right: {
					h_align:"right",
					v_align:"center",
					h_offset:0,
					v_offset:0
				}
			},
			bullets: {
				enable:true,
				hide_onmobile:true,
				hide_under:600,
				style:"metis",
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:0,
				v_offset:30,
				space:5,
				tmp: '',
			}
		},
		
		parallax:"mouse",
		parallaxBgFreeze:"on",
		parallaxLevels:[7,4,3,2,5,4,3,2,1,0],												
		keyboardNavigation:"on",						
		shadow:0
	});

	/*-----------------------------------------------------------------------------------*/
	/* 	TESTIMONIAL SLIDER
	/*-----------------------------------------------------------------------------------*/
	$(".single-slide").owlCarousel({ 
		items : 1,
		autoplay:true,
		loop:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		singleItem	: true,
		navigation : true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		pagination : true,
		animateOut: 'fadeOut'	
	});
	$('.item-slide').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			400:{
				items:2
			},
			900:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* 		Active Menu Item on Page Scroll
	/*-----------------------------------------------------------------------------------*/
	$(window).on("scroll",function(event) {
		Scroll();
	});	
	
	$('.scroll a').on("click",function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top -0}, 1000);
		return false;
	});
	
	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   0;
		var rangeBottom =   1000;
		$('nav').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('nav li.scroll').removeClass('active').eq(i).addClass('active');			
			}
		} 
		)
	};
	
});
/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/
function checkmail(input){
  var pattern1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  	if(pattern1.test(input)){ return true; }else{ return false; }}     
    function proceed(){
    	var name = document.getElementById("name");
		var email = document.getElementById("email");
		var company = document.getElementById("company");
		var msg = document.getElementById("message");
		var errors = "";
	if(name.value == ""){ 
		name.className = 'error';
	  	  return false;}    
		  else if(email.value == ""){
		  email.className = 'error';
		  return false;}
		    else if(checkmail(email.value)==false){
		        alert('Please provide a valid email address.');
		        return false;}
		    else if(company.value == ""){
		        company.className = 'error';
		        return false;}
		   else if(msg.value == ""){
		        msg.className = 'error';
		        return false;}
		   else 
		  {
$.ajax({
	type: "POST",
	url: "php/submit.php",
	data: $("#contact_form").serialize(),
	success: function(msg){
	//alert(msg);
    if(msg){
		$('#contact_form').fadeOut(1000);
        $('#contact_message').fadeIn(1000);
        	document.getElementById("contact_message");
         return true;
        }}});
}};


/*==========  Map  ==========*/
var map;
function initialize_map() {
if ($('#map').length) {
  var myLatLng = new google.maps.LatLng(-37.814199, 144.961560);
  var mapOptions = {
    zoom: 18,
    center: myLatLng,
    scrollwheel: false,
    panControl: false,
    zoomControl: true,
    scaleControl: false,
    mapTypeControl: false,
    streetViewControl: false
};
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    tittle: 'Envato',
    icon: './images/map-locator.png'
});} 
else {
  return false;
}}
google.maps.event.addDomListener(window, 'load', initialize_map);