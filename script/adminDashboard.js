$(document).ready(function (){
    $("#creatorPanel").hide()
    $("#adminPanelBtn").click(function (){
        $("#containerPanels").toggleClass("flex-column-reverse")
        $("#creatorPanel").fadeOut();
        $("#adminPanel").slideDown();
    })
    $("#creatorPanelBtn").click(function (){
        $("#containerPanels").toggleClass("flex-column-reverse")
        $("#adminPanel").fadeOut();
        $("#creatorPanel").slideDown();
    })
})