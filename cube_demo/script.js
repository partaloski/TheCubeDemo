$(document).ready(function(){
    $("#videoDiv").hide()
    $("#imageDiv").hide()
    $("#twitterDiv").hide()

    $("#choice").change(function(){
        let val = $("#choice option:selected").val()

        $("#videoDiv").hide()
        $("#linkDiv").hide()
        $("#imageDiv").hide()
        $("#twitterDiv").hide()

        if(val==='1')
            $("#linkDiv").show()
        if(val==='2')
            $("#twitterDiv").show()
        if(val==='3')
            $("#videoDiv").show()
        if(val==='4')
            $("#imageDiv").show()
    })
})