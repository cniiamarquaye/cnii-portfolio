/*
	Massively by HTML5 UP (Refactored Version)
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$nav = $('#nav'),
		$main = $('#main');

	// Breakpoints.
	breakpoints({
		default:   ['1681px',  null       ],
		xlarge:    ['1281px',  '1680px'   ],
		large:     ['981px',   '1280px'   ],
		medium:    ['737px',   '980px'    ],
		small:     ['481px',   '736px'    ],
		xsmall:    ['361px',   '480px'    ],
		xxsmall:   [null,      '360px'    ]
	});

	// Parallax background effect.
	$.fn._parallax = function(intensity) {
		// (This function can be left as is, it doesn't conflict)
        var $window = $(window), $this = $(this);
        if (this.length == 0 || intensity === 0) return $this;
        if (this.length > 1) {
            for (var i=0; i < this.length; i++) $(this[i])._parallax(intensity);
            return $this;
        }
        if (!intensity) intensity = 0.25;
        $this.each(function() {
            var $t = $(this), $bg = $('<div class="bg"></div>').appendTo($t), on, off;
            on = function() {
                $bg.removeClass('fixed').css('transform', 'matrix(1,0,0,1,0,0)');
                $window.on('scroll._parallax', function() {
                    var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);
                    $bg.css('transform', 'matrix(1,0,0,1,0,' + (pos * intensity) + ')');
                });
            };
            off = function() {
                $bg.addClass('fixed').css('transform', 'none');
                $window.off('scroll._parallax');
            };
            if (browser.name == 'ie' || browser.name == 'edge' || window.devicePixelRatio > 1 || browser.mobile) off();
            else { breakpoints.on('>large', on); breakpoints.on('<=large', off); }
        });
        $window.off('load._parallax resize._parallax').on('load._parallax resize._parallax', function() { $window.trigger('scroll'); });
        return $(this);
	};

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('.scrolly').scrolly();

	// Background.
	$wrapper._parallax(0.925);

	// Intro section animation.
	var $intro = $('#intro');
	if ($intro.length > 0) {
		if (browser.name == 'ie') {
			$window.on('resize.ie-intro-fix', function() {
				var h = $intro.height();
				if (h > $window.height()) $intro.css('height', 'auto');
				else $intro.css('height', h);
			}).trigger('resize.ie-intro-fix');
		}
		breakpoints.on('>small', function() {
			$main.unscrollex();
			$main.scrollex({
				mode: 'bottom', top: '25vh', bottom: '-50vh',
				enter: function() { $intro.addClass('hidden'); },
				leave: function() { $intro.removeClass('hidden'); }
			});
		});
		breakpoints.on('<=small', function() {
			$main.unscrollex();
			$main.scrollex({
				mode: 'middle', top: '15vh', bottom: '-15vh',
				enter: function() { $intro.addClass('hidden'); },
				leave: function() { $intro.removeClass('hidden'); }
			});
		});
	}

})(jQuery);


// --- Custom Hamburger Menu Logic ---
document.addEventListener('DOMContentLoaded', function() {

	const hamburgerButton = document.getElementById('hamburger-menu');
	const navBar = document.getElementById('nav');
	const body = document.body;

	if (hamburgerButton && navBar && body) {
		hamburgerButton.addEventListener('click', function() {
			navBar.classList.toggle('nav-active');
			body.classList.toggle('is-nav-active');
		});
	}
});

// --- Back to Top Button Logic ---
const backToTopButton = document.querySelector('.back-to-top');
if (backToTopButton) {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 300) { // Show button after scrolling 300px
			backToTopButton.classList.add('visible');
		} else {
			backToTopButton.classList.remove('visible');
		}
	});
}

// --- Dynamic Page Title Logic ---
const sections = document.querySelectorAll('section[id]');
const mainTitle = document.title;

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
			const sectionTitle = entry.target.querySelector('h1, h2');
			if (sectionTitle) {
				document.title = `${sectionTitle.textContent} | ${mainTitle}`;
			}
		}
	});
}, { threshold: 0.5 });

sections.forEach(section => {
	observer.observe(section);
});