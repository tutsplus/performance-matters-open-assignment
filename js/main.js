// Main.js

$( document ).ready( function() {
	$( ".scrolldown a" ).on( "click", function( e ) {
		e.preventDefault();

	$( "html, body" ).animate( {
		scrollTop: $("#scrollto").offset().top
		}, 1000 );
	} );
} );
