( function( $ ) {
	'use strict';

	// Nav bar text color.
	wp.customize( 'amp_navbar_color', function( value ) {
		value.bind( function( to ) {
			$( 'nav.amp-wp-title-bar a' ).css( 'color', to );
			$( 'nav.amp-wp-title-bar div' ).css( 'color', to );
		} );
	} );

	// Nav bar background color.
	wp.customize( 'amp_navbar_background', function( value ) {
		value.bind( function( to ) {
			$( 'nav.amp-wp-title-bar' ).css( 'background', to );
		} );
	} );

} )( jQuery );
