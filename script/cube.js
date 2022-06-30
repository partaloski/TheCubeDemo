$(document).ready(function (){
    $("#invisibleIcon").hide()
    let button = $("#toggleCubeVisibility")
    let label = $("#visibility")
    let buttonCopy = $("#buttonCopy")
    let buttonCopyLabel = $("#buttonCopyLabel")

    $(button).click(function () {
        $("#visibleIcon").fadeToggle()
        $("#invisibleIcon").fadeToggle()
        label.toggleClass("text-warning")
        label.toggleClass("text-info")
        button.toggleClass("btn-warning")
        button.toggleClass("btn-info")
    })

    $(buttonCopy).click(function (){
        navigator.clipboard.writeText("https://the-cube-demo.herokuapp.com/cubes/cube_name")
        $(buttonCopyLabel).text("Link copied!")
        $(buttonCopy).addClass("btn-success")
        $(buttonCopy).removeClass("btn-info")
    })

})