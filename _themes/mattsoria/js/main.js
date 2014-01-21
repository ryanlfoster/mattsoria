
var Main = (function ($) {
	return {
		stickyNav: function () {
			$(".nav_wrapper").sticky({topSpacing:0,className:"is_sticky"});
		},
		easyPeasyParallax: function () {
			 
			scrollPos = jQuery(this).scrollTop();
			 
			$('.paralax_section').css({
			'background-position' : 'center ' + (-scrollPos/4)+"px"
			});
			 
			$('.paralax_content').css({
			'margin-top': (scrollPos/4)+"px",
			'opacity': 1-(scrollPos/250)
			});
		 
		},
		sectionNav: function () {
	    var topNav = $('.nav_wrapper').outerHeight() - 1;

	    function scroll(direction) {

	        var scroll, i,
	                positions = [],
	                here = $(window).scrollTop(),
	                collection = $('.section');

	        collection.each(function() {
	            positions.push(parseInt($(this).offset()['top']-topNav,10));
	        });

	        for(i = 0; i < positions.length; i++) {
	            if (direction == 'next' && positions[i] > here) { scroll = collection.get(i); break; }
	            if (direction == 'prev' && i > 0 && positions[i] >= here) { scroll = collection.get(i-1); break; }
	        }

	        if (scroll) {
	            $.scrollTo(scroll, {
	                duration: 500,
	                offset: -topNav       
	            });
	        }

	        return false;
	    }

	    $("#next,#prev").click(function() {        
	        return scroll($(this).attr('id'));        
	    });
		},
		floatLabels: function () {
			$('.js-float-label-wrapper').FloatLabel();
		},
    twitterFeed: function() {
      twitterFetcher.fetch('379691096885837824', 'twitter_feed', 3, true, false, true);
    },
    dribbble: function () {
    	$.jribbble.getShotsByPlayerId('matt-soria', function (playerShots) {
		    var html = [];

		    $.each(playerShots.shots, function (i, shot) {
		        html.push('<li><a href="' + shot.url + '"><img src="' + shot.image_teaser_url + '" ');
		        html.push('alt="' + shot.title + '"></a></li>');
		    });

		    $('#dribbble_shots').html(html.join(''));
			}, {page: 1, per_page: 3});
    },
    readingTime: function () {
    	$('article').readingTime();
    },
    subMenuToggle: function () {
			$('nav li a').click(function(){
			    $(this).next('ul').slideToggle();
			});
    },
    gridExpander: function () {
			Grid.init();
    },
    lazyLoader: function () {
    	$("img.lazy").lazyload({
			  effect : "fadeIn"
			});
    },
    playSections: function () {
      $('.play_grid').hide();

    	$('.toggle').on('click', function() {
    		$(this).next('.grid').slideToggle();
        $(this).closest('section').toggleClass('toggled');
    	})
    },
    formSuccess: function () {
      $('.form_success i').on('click', function () {
        $(this).closest('h3').hide();
      });
    },
		initMain: function () {
			$(document).ready(function () {
				Main.stickyNav();
				Main.easyPeasyParallax();
				Main.sectionNav();
				Main.floatLabels();
				Main.twitterFeed();
				Main.dribbble();
				Main.readingTime();
				Main.subMenuToggle();
				Main.gridExpander();
				Main.lazyLoader();
				Main.playSections();
        Main.formSuccess();
			})	
		}
	};
// Pass in jQuery.
})(jQuery);

Main.initMain();

