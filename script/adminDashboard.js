$(document).ready(function (){
    $("#creatorPanel").hide()
    $("#adminPanelBtn").click(function (){
        $("#containerPanels").toggleClass("flex-column-reverse")
        $("#adminPanelBtn").addClass("bg-darklabs")
        $("#creatorPanelBtn").addClass("bg-secondary")
        $("#creatorPanelBtn").removeClass("bg-darklabs")
        $("#adminPanelBtn").removeClass("bg-secondary")
        $("#creatorPanel").fadeOut();
        $("#adminPanel").slideDown();
    })
    $("#creatorPanelBtn").click(function (){
        $("#containerPanels").toggleClass("flex-column-reverse")
        $("#adminPanelBtn").removeClass("bg-darklabs")
        $("#creatorPanelBtn").removeClass("bg-secondary")
        $("#creatorPanelBtn").addClass("bg-darklabs")
        $("#adminPanelBtn").addClass("bg-secondary")
        $("#adminPanel").fadeOut();
        $("#creatorPanel").slideDown();
    })
})