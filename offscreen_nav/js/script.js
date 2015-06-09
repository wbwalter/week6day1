$( function(){

    var menu_icon  = $( ".menu_icon" );
    var main_links = $( ".main_navigation > ul > li > a" );
    var sub_links  = $( ".sub_nav ul a" );
    var wrapper    = $( ".wrapper" );
    var back       = $(".backbutton");

    var breakpoint = 600;

    menu_icon.on( "click", function( e ){

        wrapper.addClass( "cat_nav_state" );
        e.preventDefault();
    } );

    main_links.on( "click", function( e ){

        wrapper.removeClass( "cat_nav_state" );
        wrapper.addClass( "sub_nav_state" );
        e.preventDefault();
    } );

    sub_links.on( "click", function( e ){

        wrapper.removeClass( "sub_nav_state" );
        e.preventDefault();
    } );

    back.on( "click", function( e ){

        wrapper.removeClass( "cat_nav_state sub_nav_state" );
        e.preventDefault();
    } );

    $( window ).on( "resize", function( e ){

        if( $( this ).width() > breakpoint ){

            menu_icon.off( "click" );
            main_links.off( "click" );
            sub_links.off( "click" );
            wrapper.removeClass( "sub_nav_state" );
        }
    } );

} );