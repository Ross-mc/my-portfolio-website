$(function(){
    $(".navLink").mouseenter(function(){
        $(".current").css("color", "whitesmoke");
    });
    $(".navLink").mouseleave(function(){
        $(".current").css("color", "#008B8B");
    });

    $("#dropbtn").click(function(){
        $(".dropdown-link").css("display", "block").animate({height: "25vh", lineHeight: "25vh"}, 1000);
        $("#dropbtn").css("display", "none");
        $("#close").css("display", "block")
    });

    $("#close, .current").click(function(){
        console.log('Clicked')
        $(".dropdown-link").slideUp(1000).animate({height: "1vh", lineHeight: "1vh"}, 1)
        setTimeout(function(){$("#dropbtn").css("display", "block")}, 1000);
        $("#close").css("display", "none");
    });

    // $(".portfolio-img").mouseenter(function(){
    //     $(this).css("box-shadow", "0 0 3pt 2pt #008B8B");
    // });

    // $(".portfolio-img").mouseleave(function(){
    //     $(this).css("box-shadow", "");
    // });

    // $(".code-btn").mouseenter(function(){
    //     $(this).height(function(index, height){
    //         return (height + 10);
    //     });
    //     $(this).width(function(index, width){
    //         return (width + 10);
    //     });
    // });

    // $(".code-btn").mouseleave(function(){
    //     $(this).height(function(index, height){
    //         return (height - 10);
    //     });
    //     $(this).width(function(index, width){
    //         return (width - 10);
    //     });
    // });
    
});