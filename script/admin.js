$(document).ready(function (){
    $("#adminLogin").on('click', function (){
        if($("#username").val() !== '' && $("#password").val() !== ''){
            document.getElementById("redirect").click()
        }
    })
})