/* eslint-disable */

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


// ======================================================================= Function calls
$( document ).ready( function() {

	WPG.toggles.init();						// Handle toggles

	WPG.siteSearch.init();					// Handle site search

} );

/* eslint-enable */
