$(document).ready(function (){
    $("#creatorLogin").on('click', function (){
        if($("#username").val() !== '' && $("#password").val() !== ''){
            document.getElementById("redirect").click()
        }
        else{
            $("#errorsLogin").fadeIn()
        }
    })

    $("#errorsLogin").hide()
    $("#forgotPasswordConfirmationDiv").hide()
    $("#errorsForgotPassword").hide()


    $("#forgotPasswordContinueBtn").click(function (){
        if($("#email").val() !== ''){
            $("#errorsForgotPassword").slideUp()
            $("#inputs").addClass("opacity-75")
            $("#forgotPasswordConfirmationDiv").slideDown()
            $("#forgotPasswordContinueBtn").prop('disabled', true);
        }
        else{
            $("#errorsForgotPassword").fadeIn()
        }
    })
})