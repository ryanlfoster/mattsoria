
var Main = (function ($) {
	return {
		stickyNav: function () {
			$(".nav_wrapper").sticky({topSpacing:0,className:"is_sticky"});
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
    	$("img.lazy, .project_screenshots p img").lazyload({
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
    widowKiller: function () {
      $(".post_header h2").each(function() {
        var wordArray = $(this).text().split(" ");
        if (wordArray.length > 1) {
          wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
          wordArray.pop();
          $(this).html(wordArray.join(" "));
        }
      });
    },
    footerBackground: function () {
      var randomImages = ['hero_1','hero_2','hero_3','hero_4','hero_5']; 
      var rndNum = Math.floor(Math.random() * randomImages.length); 
      $(".tao_footer").css({ 'background': "url(/_themes/mattsoria/img/footer/" + randomImages[rndNum] + ".jpg) no-repeat fixed center center", 'background-size': "cover" });
    },
		initMain: function () {
			$(document).ready(function () {
				Main.stickyNav();
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
        Main.widowKiller();
        Main.footerBackground();
			})	
		}
	};
// Pass in jQuery.
})(jQuery);

Main.initMain();

// Utility JS
function popitup(url, title, w, h) {
  var left = (screen.width/2)-(500/2);
  var top = (screen.height/2)-(200/2);
  newwindow=window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=500, height=240, top='+top+', left='+left);
  if (window.focus) {newwindow.focus()}
  return false;
}