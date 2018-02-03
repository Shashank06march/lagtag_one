$(document).ready(function(){
  				
	$('.slider').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  nextArrow: '<i class="slick-next slick-arrow fa fa-chevron-right" aria-hidden="true"></i>',
	  prevArrow: '<i class="slick-prev slick-arrow fa fa-chevron-left" aria-hidden="true"></i>',

	  responsive: [
	    {
	      breakpoint: 768,
	      
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3,
	       
	     	
	      }
	    },
	    {
	      breakpoint: 480,
	      
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1,
	        

	        
	      }
	    }
	  ]
	});

	$("area").mouseenter(function(e){
		e.preventDefault();
		var slideIndex = $(this).attr("index");
		$('.slider').slick('slickGoTo', slideIndex);
		
	    
		$('area[title]').css({
			'left' : e.pageX,
			'top' : e.pageY
		});

		var $btn2 = $(this); 
		var enterShow = function() {
	        $btn2.popover('show');
	    };

	    var exitHide = function() {
	        $btn2.popover('hide');
	    }
		 $btn2.popover({trigger: 'manual'})
		    .on('mouseenter', enterShow)
		    .on('mouseleave', exitHide)
		    .one('click', function() {
		        $btn2.on('mouseenter', enterShow)
		                .on('mouseleave', exitHide)
		                .on('click', function() {
		                    $btn2.popover('toggle');
		                });
		    });

	});
	
	
});




  
$(document).ready(function() {
    imageMapResize();
});