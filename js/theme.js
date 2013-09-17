/*****************************************************************
Table of Contents

1.) Document Ready State
	- Nice Scroll
	- Back Top
	- Tool Tips
	- Pop Over
	- Pretty Photo
	- Sticky Menu
	- Newsletter Subscribe
	- Twitter Feeds
	
2.) Window Load State
	- Latest Portfolio Carousel Widget
	- Client Carousel Widget
	- Testimonial Carousel Widget
	- Sidebar Portfolio Carousel Widget
	- Single Portfolio Carousel Widget
	- Related Project Carousel Widget
	- Twitter Carousel Widget
	- Portfolio List
	
3.) Metro Slider

!Note: You can search using the title above
*****************************************************************/

/* Document Ready State. 
   Used: Global */	
jQuery(document).ready(function($)
	{
		
		/* Back Top. 
		   Used: Buttton at the corner right to scroll to the top */		
		$('#back-top').click(function(e){
				e.preventDefault();
				$('body,html').animate({scrollTop:0},800);
		});		
		
		/* Tool Tips. 
		   Used: <a class="tooltip"> */
		$('a[class^="tooltip-trigger"]').tooltip();	
		
		/* Pop Over. 
		   Used: <a class="popover-trigger"> */	
		$('a[class^="popover-trigger"]').popover();
		
		/* Pretty Photo. 
		   Used: <a class="prettyPhoto[portfolio]"> */
		$('a[data-rel]').each(function() {
			$(this).attr('rel', $(this).data('rel'));
		});
		$("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square'});		
		

		/* Sticky Menu. 
		   Used: Global */	
		var headerHeight = $("header").height();
		var logo = $("header .logo img");
		var logoSmallHeight = 60;
		var submenuHeight = $("header .vc_secondary-menu").height();

		function checkStickyMenu(){
			if($("body").hasClass("boxed")) return false;
		
			if($(window).scrollTop() > headerHeight-submenuHeight   &&  $(window).width() >= 979){
				// #Back-Top visible
				$('#back-top').addClass('visible');
				if($("body").hasClass("sticky-menu-active"))
					return false;
				$("body").addClass("sticky-menu-active","slow");
				$("body").css('padding-top',headerHeight);
				$('header').css('top',-headerHeight+40);
				$('header').stop(true, true).animate({
						top: 0
					}, 1000, function(){
						$('header').removeAttr('style');
						// Animation complete.
					});
				logo.height(logoSmallHeight).css("width", "auto");				
			} else if( $(window).scrollTop() == 0 ||  $(window).width() < 979){
				$('#back-top').removeClass('visible');
				if ($("body").hasClass("sticky-menu-active")){
					$("body").css('padding-top',0);
					$("body").removeClass("sticky-menu-active");
				}
				logo.removeAttr('style');
			}
		}
		$(window).on("scroll", function(){
				checkStickyMenu();
		});
		$(window).on("resize", function(){
				checkStickyMenu();
		});
		checkStickyMenu();



		/* Newsletter Subscribe. 
		   Used: At the footer fourth column */
		$("#newsletter").validate({
					submitHandler: function(form) {
						var action = $(this).attr('action');
						$(form).ajaxSubmit({
							type: "POST",
							url: $("#newsletter-form").attr("action"),
							data: {
								"email": $("#newsletter-form #email").val()
							},
							dataType: "json",
							success: function (data) {
								if (data.response == "success") {
		
									$("#vc_newsletter-form-success").removeClass("hidden");
									$("#vc_newsletter-form-error").addClass("hidden");
		
									$("#newsletter-form #email")
										.val("")
										.blur()
										.closest(".control-group")
										.removeClass("success")
										.removeClass("error");
									$("#vc_newsletter-form-widget .info").fadeOut(500,function(){
										$('#vc_newsletter-form-success').fadeIn(500);
									});	
		
								} else {
									$("#vc_newsletter-form-error").html(data.message);
									$("#vc_newsletter-form-error").removeClass("hidden");
									$("#vc_newsletter-form-success").addClass("hidden");
		
									$("#newsletter-form #email")
										.blur()
										.closest(".control-group")
										.removeClass("success")
										.addClass("error");
									
								}						
							}
						});	
					},		
					success: function(data){
						$(data).closest(".control-group").removeClass("error").addClass("success");
					},
					error: function() {
						$('.vc_newsletter-form-success').html('Sorry, an error occurred.').css('color', 'red');
					}		 		
		}); 
		
		/* Twitter Feeds. 
		   Used: Footer  */
		$("#twitter-feeds").tweet({
			modpath: '/php/twitter/',
			username: "envato",
			join_text: "auto",
			count: 8,
			auto_join_text_default: "we said,", 
			auto_join_text_ed: "we",
			auto_join_text_ing: "we were",
			auto_join_text_reply: "we replied to",
			auto_join_text_url: "we were checking out",
			loading_text: "loading tweets..."
		});
		$('.tweet_list').addClass('vc_li vc_carousel');		
});

/* Window Load State. 
   Used: Global 
   Info: Basically we gather up all carousels in this state
   */	
$(window).load(function()
	{		
		/* Latest Portfolio Carousel Widget.  
		   Used: index.html, index-portfolio.html, index-revolution.html */
		$(".vc_latest-portfolio .vc_carousel").carouFredSel({
			responsive: true,
			prev:{
				button : function(){
					return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:first-child')
				}
			},
			next:{
				button : function(){
					return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:last-child')
				}
			},
			width: '100%',
			circular: false,
			infinite: true,
			auto:{
				play : true,
				pauseDuration: 0,
				duration: 2000
			},
			scroll:{
				items: 1,
				duration: 400,
				wipe: true
			},
			items:{
				visible:{
					min: 1,
					max: 3
				},
				width: 480,
				height: 'auto'
			}
		});

		/* Client Carousel Widget.  
		   Used: index.html, index-portfolio.html, index-revolution.html, about.html */
		$(".vc_client .vc_carousel").carouFredSel({
			responsive: true,
			prev:{
				button : function(){
					return $(this).parent().parent().parent().children('.met_carousel_control').children('a:first-child')
				}
			},
			next:{
				button : function(){
					return $(this).parent().parent().parent().children('.met_carousel_control').children('a:last-child')
				}
			},
			width: 'auto',
			circular: false,
			infinite: true,
			auto:{
				play : true,
				pauseDuration: 0,
				duration: 1000
			},
			items:{
				visible:{
					min: 1,
					max: 6
				},
				height: 152
			},
			pagination  : "#vc_client-pager"
		});

		/* Testimonial Carousel Widget.  
		   Used: about.html */
		$(".vc_testimonial .vc_carousel").carouFredSel({
			responsive: true,
			width: 'auto',
			circular: false,
			infinite: true,
			auto:{
				play : true,
				pauseDuration: 0,
				duration: 1000
			},
			items:{
				visible: 1,
				height: 'auto'
			},
			pagination  : "#vc_testimonial-pager"
		});
		
		/* Sidebar Portfolio Carousel Widget.  
		   Used: Every page with sidebar */		
		$(".vc_portfolio-widget .vc_carousel").carouFredSel({
			responsive: true,
			prev:{
				button : function()
				{
					return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:first-child')
				}
			},
			next:{
				button : function()
				{
					return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:last-child')
				}
			},
			width: '100%',
			circular: false,
			infinite: true,
			auto:{
				play : true,
				pauseDuration: 0,
				duration: 2000
			},
			items:{
				visible:{
					min: 1,
					max: 2
				},
				width:480,
				height: 'auto'
			}
		});
		
		/* Single Portfolio Carousel Widget.  
		   Used: portfolio-single-project-full-width.html, portfolio-single-project.html */				
		$(".vc_single-portfolio .vc_carousel").carouFredSel({
			responsive: true,
			prev:{
				button : function(){
					return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:first-child')
				}
			},
			next:{
				button : function(){
					return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:last-child')
				}
			},
			width: '100%',
			circular: false,
			infinite: true,
			auto:{
				play : true,
				pauseDuration: 0,
				duration: 2000
			},
			items:{
				visible:{
					max: 1
				},
				width:570,
				height: 'auto'
			}
		});	
		
		/* Related Project Carousel Widget.  
		   Used: portfolio-single-project-full-width.html, portfolio-single-project.html, blog-single.html */
		$(".vc_related-project .vc_carousel").carouFredSel({
			responsive: true,
			prev:{
				button : function()
				{
					return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:first-child')
				}
			},
			next:{
				button : function(){
					return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:last-child')
				}
			},
			width: '100%',
			circular: false,
			infinite: true,
			auto:{
				play : true,
				pauseDuration: 0,
				duration: 2000
			},
			scroll:{
				items: 4,
				duration: 400,
				wipe: true
			},
			items:{
				visible:{
					min: 1,
					max: 4
				},
				width: 277,
				height: 'auto'
			}
		});		

		/* Twitter Carousel Widget. 
		   Used: footer 3rd Column  */			   
		update_twitter();
		$(window).resize(function(){
			update_twitter(); /*To Update Twitter Width on Carousel */
		});		   	
		function update_twitter(){
			$(".vc_twitter .vc_carousel").carouFredSel({
				direction: "down",
				height: 'variable',
				width: 'auto',
				items: 3,
				auto: 4000,
				circular: false,
				infinite: true,
				prev:{
					button : function(){
						return $(this).parent().parent().parent().parent().children('.vc_carousel-control').children('a:first-child')
					}
				},
				next:{
					button : function(){
						return $(this).parent().parent().parent().parent().children('.vc_carousel-control').children('a:last-child')
					}
				}
			});
		}	

		/* Portfolio List. 
		   Used: portfolio-2-columns.html, portfolio-3-columns.html, portfolio-4-columns.html, portfolio-left-sidebar.html, portfolio-right-sidebar.html  */
		var $container = $('#portfolio');		
		$container.isotope();	
		$('#portfolio-filter a').click(function(){			
			$('#portfolio-filter li').removeClass('active');
			$(this).parent('li').addClass('active');
			var selector = $(this).attr('data-filter');							
			$container.isotope({ filter: selector });
			return false;			
		});	
		$(window).resize(function() {								
			$container.isotope('reLayout');
		});		
								
});


/* Metro Slider.  
   Used: index.html, index-portolio.html */
$(window).load(function(){
	metro_slider();			
	startLoop();
	$(".vc_metro-wrapper .scrollbar, .vc_metro-wrapper .viewport").mouseenter(function(){
		stopLoop();
	}).mouseleave(function(){
		startLoop();
	});
});   
$(window).resize(function(){
	metro_slider(); /*Do Metro Slider */
	if ($(window).width()>979){ /* Remove Collapse On width > 979 */		
		$('.vc_primary-menu').removeClass('in collapse').removeAttr('style');
	}
});

function metro_slider(){
	var metroSlider = 0;
	$('.vc_metro-slider ul li').each(function(){
			var slide_width= $(this).width();
			if ($(this).hasClass('odd')){
				metroSlider = metroSlider + slide_width + 5;

			} else if ($(this).hasClass('even')){
				metroSlider = metroSlider + slide_width +5 ;
			}
	});	
	metroSlider+=5;
	$('.vc_metro-slider').css('width', metroSlider + 'px');
 
	var padding=70;
	var scrollwidth=$('.container').width()-padding;
		
	if ($('body').hasClass('boxed')) {padding=130;}
	
	$('.vc_metro-wrapper').tinyscrollbar({
		axis: 'x',
		size: scrollwidth,
		sizethumb: 'auto'
	});
}


var iFrequency = 5000; // expressed in miliseconds
var maxinc = 2;
var iDo=0;
//var myInterval = 0;
function startLoop(){
	myInterval = setInterval( "runSlide()", iFrequency );  // run
}
function stopLoop(){
	clearInterval(myInterval);
}

function runSlide(){
	var pos= $('.vc_metro-wrapper .thumb').position();
	var barpos = pos.left;

	var pos= $('.vc_metro-wrapper .overview').position();
	var slidepos = pos.left;

	//increment calculation
	var barinc= ($('.vc_metro-wrapper .track').width() - $('.vc_metro-wrapper .thumb').width()) / maxinc;
	var slideinc= ($(window).width() - $('.vc_metro-wrapper .vc_metro-slider').width()) / maxinc;

	// make 0 again when reach max
	iDo = (iDo+ 1) % (maxinc+1);

	//animate the metroslider
	$('.vc_metro-wrapper .thumb').animate({
			left: iDo * barinc
		}, 1000, function(){
	});
	$('.vc_metro-wrapper .overview').animate({
			left: iDo * slideinc -iDo*2.5
		}, 1000, function(){
	});
}
