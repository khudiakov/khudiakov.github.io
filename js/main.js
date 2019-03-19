$.get( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=nature&rating=g", function( data ) {
    $("body").css("background-image","url("+data["data"]["image_url"]+")");
});

$("#name").hover( function() {
        //sayHello();
        $(this).css("font-size", "120px");
        $("#myname").css("font-size", "30px");
    }, function() {
        $(this).css("font-size", "60px");
        $("#myname").css("font-size", "60px");
    }
);
$("#proffesion").hover( function() {
        $(this).css("font-size", "60px");
        $("#imstudent").css("font-size", "15px");
    }, function() {
        $("#imstudent").css("font-size", "30px");
        $(this).css("font-size", "30px");
    }
);
$("#mycodes").hover( function() {
        $(this).css("font-size", "60px");
    }, function() {
        $(this).css("font-size", "30px");
    }
);
