$(document).ready(function (){
    $("#carouselExampleSlidesOnly").hide()

    $("#expandContentBtn").click(function (){
        $("#carouselExampleSlidesOnly").slideDown();
        $("#expandContentBtn").toggleClass("d-none")
    })
})