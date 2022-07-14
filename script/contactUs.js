$(document).ready(function (){
    $("#carouselExampleSlidesOnly").hide()

    $("#carouselExampleSlidesOnly2").hide()

    $("#expandContentBtn").click(function (){
        $("#carouselExampleSlidesOnly").slideDown();
        $("#expandContentBtn").toggleClass("d-none")
    })

    $("#expandContentBtn1").click(function (){
        $("#carouselExampleSlidesOnly2").slideDown();
        $("#expandContentBtn1").toggleClass("d-none")
    })


})