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

    let imagesLeft = $("#imagesLeft")
    let imagesSelected = $("#imagesSelected")

    for(let i=0; i<10; i++){
        let value = "Image " + (i+1)
        $(imagesLeft).append("<option>"+value+"</option>")
    }

    $("#btnGoLeft").click(function (){
        let selected = $("#imagesLeft option:selected")
        imagesSelected.append(selected)
        imagesLeft.remove(selected)
        selected.prop('selected','')
    })

    $("#btnGoRight").click(function (){
        let selected = $("#imagesSelected option:selected")
        imagesLeft.append(selected)
        imagesSelected.remove(selected)
        selected.prop('selected','')
    })

    $("#btnMoveUp").click(function (){
        let options = $("#imagesSelected option")
        let selected = $("#imagesSelected option:selected")
        for(let i=1; i<options.length; i++){
            for(let j=selected.length-1; j>=0; j--){
                if(options[i] === selected[j]){
                    let temp = options[i].cloneNode(true)
                    let temp2 = options[i-1].cloneNode(true)
                    options[i] = temp2
                    options[i-1] = temp
                    options[i-1].setAttribute('selected','selected')
                    options[i].removeAttribute('selected')
                    selected.splice($.inArray(selected[j], selected),1)
                    break
                }
            }
        }
        console.log(options)
        console.log(selected)
        $("#imagesSelected").empty()
        $("#imagesSelected").append(options)
    })

    $("#btnMoveDown").click(function (){
        let options = $("#imagesSelected option")
        let selected = $("#imagesSelected option:selected")
        let selectedO = $("#imagesSelected option:selected")
        for(let i=options.length-2; i>=0; i--){
            for(let j=selected.length-1; j>=0; j--){
                if(options[i] === selected[j]){
                    let temp = options[i].cloneNode(true)
                    let temp2 = options[i+1].cloneNode(true)
                    options[i] = temp2
                    options[i+1] = temp
                    options[i+1].setAttribute('selected','selected')
                    options[i].removeAttribute('selected')
                    selected.splice($.inArray(selected[j], selected),1)
                    break
                }
            }
        }
        console.log(options)
        console.log(selected)
        $("#imagesSelected").empty()
        $("#imagesSelected").append(options)
    })
})