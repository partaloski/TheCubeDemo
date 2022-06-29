$(document).ready(function (){
    $("#toggleCubeVisibility").click(function () {
        if($("#visibility").text() === 'Visible'){
            $("#visibility").text('Hidden')
        }
        else{
            $("#visibility").text('Visible')
        }
        $("#visibility").toggleClass("text-warning")
        $("#visibility").toggleClass("text-info")
        $("#toggleCubeVisibility").toggleClass("btn-warning")
        $("#toggleCubeVisibility").toggleClass("btn-info")
    })
})