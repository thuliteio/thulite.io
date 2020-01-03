// ======================================================================= Namespace
var WPG = WPG || {},
    $ = jQuery;


// ======================================================================= Global variables
var $doc = $( document ),
    $win = $( window ),
    winHeight = $win.height(),
    winWidth = $win.width();

var viewport = {};
	viewport.top = $( window ).scrollTop();
	viewport.bottom = viewport.top + $( window ).height();



// ======================================================================= Interval Scroll
WPG.intervalScroll = {

	init: function() {

		didScroll = false;

		// Check for the scroll event
		$win.on( 'scroll load', function() {
			didScroll = true;
		} );

		// Once every 100ms, check if we have scrolled, and if we have, do the intensive stuff
		setInterval( function() {
			if ( didScroll ) {
				didScroll = false;

				// When this triggers, we know that we have scrolled
				$win.triggerHandler( 'did-interval-scroll' );

			}

		}, 250 );

	},

} // WPG.intervalScroll


// ======================================================================= Is Scrolling
WPG.isScrolling = {

	init: function() {

		scrollPos = 0;

		// Sensitivity for the scroll direction check (higher = more scroll required to reverse)
		directionBuffer = 50;

		$win.on( 'did-interval-scroll', function() {

			var currentScrollPos = $win.scrollTop();

			// Detect scrolling
			if ( currentScrollPos > 0 || $( 'html' ).css( 'position' ) == 'fixed' ) {
				$( 'body' ).addClass( 'is-scrolling' );
			} else {
				$( 'body' ).removeClass( 'is-scrolling' );
			}

			// Detect the scroll direction
			if ( currentScrollPos > ( $win.outerHeight() / 3 ) ) {
				
				if ( Math.abs( scrollPos - currentScrollPos ) >= directionBuffer ) {
				
					// Scrolling down
					if ( currentScrollPos > scrollPos ){
						$( 'body' ).addClass( 'scrolling-down' ).removeClass( 'scrolling-up' );

					// Scrolling up
					} else {
						$( 'body' ).addClass( 'scrolling-up' ).removeClass( 'scrolling-down' );
					}

				}

			} else {

				$( 'body' ).removeClass( 'scrolling-up scrolling-down' );

			}

			scrollPos = currentScrollPos;

		} );

	}

} // WPG.isScrolling


// ======================================================================= Toggles
WPG.toggles = {

	init: function() {

		// Do the toggle
		WPG.toggles.toggle();

	},

	toggle: function() {

		$( '*[data-toggle-target]' ).live( 'click', function( e ) {

			// Get our targets
			var targetString = $( this ).data( 'toggle-target' );

			if ( targetString == 'next' ) {
				var $target = $( this ).next();
			} else {
				var $target = $( targetString );
			}

			// Get the class to toggle, if specified
			var classToToggle = $( this ).data( 'class-to-toggle' ) ? $( this ).data( 'class-to-toggle' ) : 'active';

			// The diva toggleable elements steal the stage for themselves
			$( '.diva' ).not( $target ).each( function() {
				if ( $( this ).hasClass( classToToggle ) ) {
					$( this ).removeClass( classToToggle );
				}
			} );

			// Toggle the target of the clicked toggle
			if ( $( this ).data( 'toggle-type' ) == 'slidetoggle' ) {
				var duration = $( this ).data( 'toggle-duration' ) ? $( this ).data( 'toggle-duration' ) : '400';
				$target.slideToggle( duration );
			} else {
				$target.toggleClass( classToToggle );
			}

			// Toggle all toggles with this toggle target (the toggle elements always get the active class)
			$( '*[data-toggle-target="' + targetString + '"]' ).toggleClass( 'active' );

			// Check whether to lock the screen
			if ( $( this ).data( 'lock-screen' ) ) {
				$.scrollLock( true );
			} else if ( $( this ).data( 'unlock-screen' ) ) {
				$.scrollLock( false );
			} else if ( $( this ).data( 'toggle-screen-lock' ) ) {
				$.scrollLock();
			}

			$target.triggerHandler( 'toggled' );

			return false;

		} );
	}

} // WPG.toggles



// ======================================================================= Site Search
WPG.siteSearch = {

	init: function() {

		// Search on load based on query arg
		WPG.siteSearch.searchOnLoad();

		// Searching
		WPG.siteSearch.searching();

		// Empty results on untoggle
		WPG.siteSearch.toggle();

		// Add a non case sensitive variation of :contains(), called :containsNC()
		WPG.siteSearch.addContainsNC();

		// Empty search field on click
		$( '.search-form .search-empty' ).on( 'click', function() {
			WPG.siteSearch.emptyField( focusAfter = true );
		} );

		// Untoggle on click on the cover on desktop and on click on a search result
		$( '#search-results-cover, .searching-container a' ).live( 'click', function() {
			WPG.siteSearch.untoggleSearchResults( focusAfter = false );
		} );

	},

	// Search on load based on query arg
	searchOnLoad: function() {

		$.urlParam = function( name ) {
			var results = new RegExp( '[\?&]' + name + '=([^&#]*)' ).exec( window.location.search );
			return ( results !== null ) ? results[1] || 0 : false;
		}

		if ( $.urlParam( 'search' ) ) {
			$( '#site-search .search-field' ).val( $.urlParam( 'search' ) );
			setTimeout( function() {
				$( '#site-search .search-field' ).focus().trigger( 'input' );
			}, 100 );
		}

	},

	// Searching
	searching: function() {

		$( '#site-search .search-field' ).live( 'focus input', function() {

			var $field = $( this ),
				$form = $field.closest( '.search-form' ),
				$results = $( '#site-search .search-results' ),
				searchItem = '.search-results li',
				searchString = $field.val(),
				// isHome = $( 'body' ).hasClass( 'home' );
				isHome = $( 'body' ).hasClass( 'docs list' );

			if ( isHome ) {
				var $results = $( '#site-content .arrow-list' ),
					searchItem = '#site-content .arrow-list li';
			}

			if ( searchString.length ) {

				$form.addClass( 'has-text' );
				$results.addClass( 'searching-container' );

				// Hide elements without the string
				$( searchItem + ':not(:containsNC(' + searchString + '))' ).each( function() {
					$( this ).hide().removeClass( 'visible-result' );
				} );

				// Show elements matching the string
				$( searchItem + ':containsNC(' + searchString + ')' ).each( function() {
					$( this ).show().addClass( 'visible-result' );
				} );

				$( searchItem + '.visible-result:first' ).addClass( 'first-result' ).siblings().removeClass( 'first-result' );

				// Show or hide results depending on whether we have results
				var visibleResults = $( searchItem ).filter( function() {
					return $( this ).css( 'display' ) !== 'none';
				  } ).length;

				if ( visibleResults ) {
					$results.show().removeClass( 'no-results' );
					if ( ! isHome ) {
						$( '#search-results-cover' ).addClass( 'active' );
					}
				} else {
					$results.addClass( 'no-results' );
					$( '.no-results-text .search-value' ).text( searchString );
					$( searchItem ).removeClass( 'visible-result first-result' )
				}

			} else {

				$form.removeClass( 'has-text' );
				$results.removeClass( 'searching-container' );

				// Empty search = reset results to original state
				if ( isHome ) {
					$results.show();
				} else {
					$results.hide();
				}

				$( searchItem ).show();
				$( searchItem ).removeClass( 'visible-result first-result' )

			}

		} );

	},

	// Empty results on untoggle
	toggle: function() {

		$( '#site-search' ).on( 'toggled', function() {

			$search = $( this );

			if ( $search.hasClass( 'active' ) ) {
				$search.find( '.search-field' ).focus();
			}

			$search.find( '.search-field' ).val( '' ).trigger( 'input' );

		} );

	},

	// Untoggle the search results
	untoggleSearchResults: function() {

		$( '#site-search, #search-results-cover' ).removeClass( 'active' );
		$( '#site-search .search-field' ).blur();
		$( '#site-content .arrow-list' ).hide()
		$( '.search-results' ).removeClass( 'no-results' ).hide();
		$( '.search-results li' ).show();
		WPG.siteSearch.emptyField();
		$.scrollLock( false );

	},

	// Empty the search field
	emptyField: function( focusAfter ) {
		focusAfter = ( typeof focusAfter !== 'undefined' ) ?  focusAfter : false,

		$( '#site-search .search-field' ).val( '' ).trigger( 'input' );

		if ( focusAfter ) {
			$( '#site-search .search-field' ).focus();
		}

	},

	// Extend expressions with a non-case-sensitive version of contains
	addContainsNC: function() {

		$.extend( $.expr[':'], {
			'containsNC': function( elem, i, match, array ) {
				return ( elem.textContent || elem.innerText || '' ).toLowerCase().indexOf( ( match[3] || '' ).toLowerCase() ) >= 0;
			}
		} );

	},

} // WPG.toggles



// ======================================================================= Cover Modals
WPG.coverModals = {

	init: function () {

		if ( $( '.cover-modal' ).length ) {

			// When toggled, untoggle if visitor clicks on the wrapping element of the modal
			WPG.coverModals.outsideUntoggle();

			// Show a cover modal on load, if the query string says so
			WPG.coverModals.showOnLoadandClick();

		}

	},

	outsideUntoggle: function() {

		$doc.live( 'click', function( e ) {

			var $target = $( e.target ),
				modal = '.cover-modal.active',
				$modal = $( modal );

			if ( $target.is( modal ) ) {
				$modal.removeClass( 'active' );
				$.scrollLock( false );
				$modal.triggerHandler( 'toggled' );
			}

		} );

	},

	// Show modals on load
	showOnLoadandClick: function() {

		var key = 'modal';

		// Load based on query string
		if ( window.location.search.indexOf( key ) !== -1 ) {
				
			var modalTargetString = getQueryStringValue( key ),
				$modalTarget = $( '#' + modalTargetString + '-modal' );

			if ( modalTargetString && $modalTarget.length ) {
				setTimeout( function() {
					$modalTarget.addClass( 'active' ).triggerHandler( 'toggled' );
					$.scrollLock( true );
				}, 250 );
			}
		}

		// Check for modal matching querystring when clicking a link
		$( 'a' ).live( 'click', function() {

			// Load based on query string
			if ( $( this ).attr( 'href' ).indexOf( key ) !== -1 ) {
					
				var modalTargetString = getQueryStringValue( key, $( this ).attr( 'href' ) ),
					$modalTarget = $( '#' + modalTargetString + '-modal' );

				if ( modalTargetString && $modalTarget.length ) {
					
					$modalTarget.addClass( 'active' ).triggerHandler( 'toggled' );
					$.scrollLock( true );

					return false;

				}
			}

		} );

	}

} // WPG.coverModals


// ======================================================================= Copy Link
WPG.copyLink = {

	init: function () {

		$( '.copy-link' ).live( 'click', function() {

			var $link = $( this ),
				$temp = $( '<input type="text" style="opacity: 0; pointer-events: none;" />' );

			if ( $link.not( '.copied' ) ) {
		
				// convert to editable with readonly to stop iOS keyboard opening
				$temp.contentEditable = true;
				$temp.readOnly = true;

				$link.append( $temp );
				$temp.val( $link.data( 'url' ) ).select();
				document.execCommand( 'copy' );

				// restore contentEditable/readOnly to original state
				$temp.contentEditable = false;
				$temp.readOnly = false;

				$temp.remove();

				$link.addClass( 'copied' );
				setTimeout( function() {
					$link.removeClass( 'copied' );
				}, 1000 );

			}

			return false;
		} );

	},

} // WPG.copyLink



// =======================================================================  Smooth Scroll
WPG.smoothScroll = {

	init: function() {

		// Smooth scroll to anchor links
		$( 'a[href*="#"]' )
		// Remove links that don't actually link to anything
		.not( '[href="#"]' )
		.not( '[href="#0"]' )
		.on( 'click', function( event ) {
			// On-page links
			if ( location.pathname.replace(/^\//, '' ) == this.pathname.replace(/^\//, '' ) && location.hostname == this.hostname ) {
				// Figure out element to scroll to
				var target = $( this.hash );
				target = target.length ? target : $( '[name=' + this.hash.slice(1) + ']' );
				// Does a scroll target exist?
				if ( target.length ) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					var headerHeight = $( '.site-header' ).outerHeight(),
						scrollOffset = target.offset().top - headerHeight - 20;
					$( 'html, body' ).animate({
						scrollTop: scrollOffset,
					}, 1000 );
				}
			}
		} );

	},

} // WPG.smoothScroll


// ======================================================================= Comment Submissions
WPG.comments = {

	init: function() {

		// Handle submissions of corrections
		WPG.comments.submitComment();

		// On click, reset the pages in the modal to their initial state
		WPG.comments.resetOnToggle();

	},

	// Handle submissions of corrections
	submitComment: function() {

		$( '.comment-form' ).live( 'submit', function() {

			var $form = $( this ),
				$formModal = $( this ).closest( '.cover-modal' ),
				$name = $form.find( '#comment-name' ),
				name = $name.val(),
				$email = $form.find( '#comment-email' ),
				email = $email.val(),
				$text = $form.find( '#comment-text' ),
				text = $text.val(),
				post_id = $form.find( '#comment-post-id' ).val();

			$.ajax({
				url: wpg_ajax_submit_comment.ajaxurl,
				type: 'post',
				data: {
					action: 'wpg_ajax_submit_comment',
					post_id: post_id,
					name: name,
					email: email,
					text: text,
				},

				success: function( result ) {
					$formModal.find( '.modal-page-one' ).removeClass( 'active' );
					$formModal.find( '.modal-page-two' ).addClass( 'active' );
					
					// Empty the inputs
					$name.val( '' );
					$email.val( '' );
					$text.val( '' );
				},
	
				error: function( jqXHR, exception ) {
					console.log( exception );
				}
			} );
			
			return false;

		} );

	},

	// On click, reset the pages in the modal to their initial state
	resetOnToggle: function() {

		$( '.cover-modal' ).on( 'toggled', function() {

			if ( $( this ).hasClass( 'active' ) ) {

				$( this ).find( '.modal-page-one' ).addClass( 'active' );
				$( this ).find( '.modal-page-two' ).removeClass( 'active' );

			}

		} );

	}

} // WPG.corrections


// ======================================================================= Word Previews
WPG.wordPreviews = {

	init: function() {

		// On hover, load the word preview and add it to the DOM
		WPG.wordPreviews.load();

	},

	// Load the word preview
	load: function() {

		$( '.entry-content a[data-word-id]:not(.preview-loaded)' ).live( 'hover', function() {

			if ( $win.width() < 1100 ) {
				return;
			}

			var $link = $( this );

			if ( $link.closest( '.word-preview-wrapper' ).length ) {
				return;
			}

			$link.wrap( '<span class="word-preview-wrapper preview-loading"></span>' );

			var linkUrl = $link.attr( 'href' ),
				word_id = $link.data( 'word-id' ),
				$linkWrapper = $link.closest( '.word-preview-wrapper' );

			// Add the loading indicator immediately
			$linkWrapper.append( '<a class="word-preview" href="' + linkUrl + '"><span class="loader small"></span></a>' );

			// Load the actual contents via AJAX and replace the loading indicator
			$.ajax( {
				url: wpg_ajax_word_preview.ajaxurl,
				type: 'post',
				data: {
					action: 'wpg_ajax_word_preview',
					word_id: word_id,
				},

				success: function( result ) {
					if ( $linkWrapper.hasClass( 'preview-loaded' ) ) {
						return;
					}
					$linkWrapper.find( '.word-preview' ).append( result );
					$linkWrapper.removeClass( 'preview-loading' ).addClass( 'preview-loaded' )
				},
	
				error: function( jqXHR, exception ) {
					console.log( exception );
				}
			} );
			
			return false;

		} );

	},

} // WPG.wordPreviews


// ==================================================================== Intrinsic Ratio Videos
WPG.instrinsicRatioVideos = {

	init: function() {

		WPG.instrinsicRatioVideos.makeFit();

		$win.on( 'resize fit-videos', function() {

			WPG.instrinsicRatioVideos.makeFit();

		} );

	},

	makeFit: function() {

		var vidSelector = "iframe, object, video";

		$( vidSelector ).each( function() {

			var $video = $( this ),
				$container = $video.parent(),
				iTargetWidth = $container.width();

			// Skip videos we want to ignore
			if ( $video.hasClass( 'intrinsic-ignore' ) || $video.parent().hasClass( 'intrinsic-ignore' ) ) {
				return true;
			}

			if ( ! $video.attr( 'data-origwidth' ) ) {

				// Get the video element proportions
				$video.attr( 'data-origwidth', $video.attr( 'width' ) );
				$video.attr( 'data-origheight', $video.attr( 'height' ) );

			}

			// Get ratio from proportions
			var ratio = iTargetWidth / $video.attr( 'data-origwidth' );

			// Scale based on ratio, thus retaining proportions
			$video.css( 'width', iTargetWidth + 'px' );
			$video.css( 'height', ( $video.attr( 'data-origheight' ) * ratio ) + 'px' );

		} );

	}

}


// ======================================================================= Image Lightbox
WPG.imageLightbox = {

	init: function () {

		// When toggled, update the lightbox with the new background image
		WPG.imageLightbox.updateImage();

	},

	updateImage: function() {

		// Toggle the image
		$( '.entry-content img' ).live( 'click', function() {

			var imageUrl = $( this ).attr( 'src' )

			$( '#image-lightbox' ).addClass( 'active' );

			$( '#image-lightbox .modal-inner' ).css( 'background-image', 'url( ' + imageUrl + ' )' );

			$.scrollLock( true );

			return false;

		} );

		// Untoggle the image
		$( '#image-lightbox' ).live( 'click', function() {

			$( '#image-lightbox' ).removeClass( 'active' );

			$.scrollLock( false );

		} );

	}

} // WPG.imageLightbox


// ======================================================================= Function calls
$( document ).ready( function() {

	WPG.intervalScroll.init();				// Check for scroll on an interval

	WPG.isScrolling.init();					// Check for scroll direction

	WPG.instrinsicRatioVideos.init();		// Retain aspect ratio of videos on resize

	WPG.toggles.init();						// Handle toggles

	WPG.siteSearch.init();					// Handle site search

	WPG.coverModals.init();					// Handle cover modals

	WPG.copyLink.init();					// Copy link tool

	// WPG.smoothScroll.init();				// Smooth scroll to anchor link

	WPG.comments.init();					// Handle comment form submissions

	WPG.wordPreviews.init();				// Handle word previews

	WPG.imageLightbox.init();				// Toggle image lightbox

} );
