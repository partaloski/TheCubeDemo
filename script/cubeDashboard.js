$(document).ready(function (){
    let card = $(".cube-card")
    let container = $("#cube-card-container")

    $(card).clone().appendTo(container)
    $(card).clone().appendTo(container)
    $(card).clone().appendTo(container)
    $(card).clone().appendTo(container)
    $(card).clone().appendTo(container)
    $(card).clone().appendTo(container)
    $(card).clone().appendTo(container)
    $(card).clone().appendTo(container)



    $("#addCubeBtn").mouseenter(function (){
        $("#cubesIcon").animate({left: '2.6%', opacity: '1'}, "fast")
        $("#cubesIcon2").animate({left: '3%', opacity: '1'}, "fast")
        console.log("jQuery")
    })
    $("#addCubeBtn").mouseleave(function (){
        $("#cubesIcon").animate({left: '-105%', opacity: '0.3'}, "slow")
        $("#cubesIcon2").animate({left: '-105%', opacity: '0.3'}, "slow")
    })
})