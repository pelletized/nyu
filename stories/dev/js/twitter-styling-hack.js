// Customize twitter feed
var hideTwitterAttempts = 0;
function hideTwitterBoxElements() {
    setTimeout( function() {
        if ( $('[id*=twitter]').length ) {
        $('[id*=twitter]').each( function(){
            if ( $(this).width() == 220 ) {
                $(this).width( 198 ); //override min-width of 220px
            }
            var ibody = $(this).contents().find( 'body' );
            //ibody.width( $(this).width() + 20 ); //remove scrollbar by adding width

            if ( ibody.find( '.timeline .stream .h-feed li.tweet' ).length ) {
			

			ibody.find( '.profile' ).css( 'display', 'none' ); //hide profile
			ibody.find( '.permalink' ).css( 'display', 'none' ); //hide profile
			ibody.find( '.e-entry-content' ).css( 'margin', '0 0 0 -69px' ); //move content over
            
            }
            else {
                $(this).hide();
            }
        });
        }
        hideTwitterAttempts++;
        if ( hideTwitterAttempts < 3 ) {
            hideTwitterBoxElements();
        }
    }, 1500);
}

// somewhere in your code after html page load
hideTwitterBoxElements();