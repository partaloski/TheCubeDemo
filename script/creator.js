$(document).ready(function (){
    $("#creatorLogin").on('click', function (){
        if($("#username").val() !== '' && $("#password").val() !== ''){
            document.getElementById("redirect").click()
        }
    })
})