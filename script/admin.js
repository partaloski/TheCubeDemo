$(document).ready(function (){
    $("#adminLogin").on('click', function (){
        if($("#username").val() !== '' && $("#password").val() !== ''){
            document.getElementById("redirect").click()
        }
        else{
            $("#errorsLogin").fadeIn()
        }
    })

    $("#errorsLogin").hide()
    $("#forgotPasswordConfirmationDiv").slideToggle()
    $("#errorsForgotPassword").slideToggle()

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

document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

// Validate that all variables exist
        if(toggle && nav && bodypd && headerpd){
            toggle.addEventListener('click', ()=>{
// show navbar
                nav.classList.toggle('show')
// change icon
                toggle.classList.toggle('bx-x')
// add padding to body
                bodypd.classList.toggle('body-pd')
// add padding to header
                headerpd.classList.toggle('body-pd')
            })
        }
    }

    showNavbar('header-toggle','nav-bar','body-pd','header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink(){
        if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))

    // Your code to run since DOM is loaded and ready
});