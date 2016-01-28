
/*add taiwan transition*/

var cloth1Ratio = 4.2
var cloth2Ratio = -2.1
var food1Ratio = 0.013*30
var food2Ratio = 0.00045*30
var house1Ratio = 0.57
var house2Ratio = 0.66
var house3Ratio = 1.75
var house4Ratio = 1.88
var transport1Ratio = 0.0114*30
var transport2Ratio = 0.0493*30
var transport3Ratio = 0.0940*30
var transport4Ratio = 0.0414*30
var transport5Ratio = 0.2119*30
var transport6Ratio = 0

$('#taiwan').click(function() {
    if ($(this).text() === "轉台灣版") {
        $('#versionControl1').text("天然氣")
        $('#versionControl2').text("石油氣")
        $('#versionControl3').text("捷運")
        $('#versionControl4').text("公車")
        $('#versionControl5').text("轎車")
        $('#versionControl6').text("貨車")
        $('#versionControl7').text("機車")
        $('#versionControl8').text("腳踏車")
        $('#versionControl9').text("km")
        $('#versionControl10').text("km")
        $('#versionControl11').text("km")
        $('#versionControl12').text("km")
        $(this).text("轉香港版")
        var house1Ratio = 0.16
        var house2Ratio = 0.52
    } else {
        $('#versionControl1').text("煤氣")
        $('#versionControl2').text("瓦斯")
        $('#versionControl3').text("MTR")
        $('#versionControl4').text("巴士")
        $('#versionControl5').text("小巴")
        $('#versionControl6').text("的士")
        $('#versionControl7').text("私家車")
        $('#versionControl8').text("單車")
        $('#versionControl9').text("元")
        $('#versionControl10').text("元")
        $('#versionControl11').text("元")
        $('#versionControl12').text("元")
        $(this).text("轉台灣版")
        var transport1Ratio = 0.033*30
        var transport2Ratio = 0.04*30
        var transport3Ratio = 0.14*30
        var transport4Ratio = 0.21*30
        var transport5Ratio = 0.05*30
    }
})




/*round slider*/

$("#cloth1").roundSlider({
    radius: 60,
    width: 5,
    handleSize: "+30",
    sliderType: "min-range",
    value: 0,
    drag: "slideChange",
    max: 20,
    tooltipFormat: "tooltipVal1"
})

$("#cloth2").roundSlider({
    radius: 60,
    width: 5,
    handleSize: "+30",
    sliderType: "min-range",
    value: 0,
    drag: "slideChange",
    max: 20,
    tooltipFormat: "tooltipVal1"
})

function tooltipVal1(args) {
    return + args.value + " 件";
}

$("#food1").roundSlider({
    radius: 60,
    width: 5,
    handleSize: "+30",
    sliderType: "min-range",
    value: 0,
    drag: "slideChange",
    max: 1000,
    tooltipFormat: "tooltipVal2"
})

$("#food2").roundSlider({
    radius: 60,
    width: 5,
    handleSize: "+30",
    sliderType: "min-range",
    value: 0,
    drag: "slideChange",
    max: 1000,
    tooltipFormat: "tooltipVal2"
})

function tooltipVal2(args) {
    return + args.value + " 克";
}

$("#transport").roundSlider({
    radius: 60,
    width: 5,
    handleSize: "+30",
    sliderType: "min-range",
    value: 3,
    drag: "slideChange",
    max: 50,
    tooltipFormat: "tooltipVal3"
})

function tooltipVal3(args) {
    var unitMapping = {
        "mtr": "HKD",
        "bus": "HKD",
        "minibus": "HKD",
        "taxi": "HKD",
        "car": "km",
        "bike": "km"
    }
    var transportId = "mtr"
    $(".dropdown-menu a").each(function(idx, elem) {
        if(!$(elem).hasClass("selected")) 
            return
        transportId = $(elem).attr("id")
    })
    return + args.value + " " + unitMapping[transportId]
}


/*vertical slider*/

$("#house1").slider({min: 0, max: 15, step: 1, value: 0, tooltip:'hide'});
$("#house2").slider({min: 0, max: 500, step: 1, value: 0, tooltip:'hide'});
$("#house3").slider({min: 0, max: 50, step: 1, value: 0, tooltip:'hide'});
$("#house4").slider({min: 0, max: 50, step: 1, value: 0, tooltip:'hide'});

$("#transport1").slider({min: 0, max: 50, step: 1, value: 0, tooltip:'hide'});
$("#transport2").slider({min: 0, max: 50, step: 1, value: 0, tooltip:'hide'});
$("#transport3").slider({min: 0, max: 50, step: 1, value: 0, tooltip:'hide'});
$("#transport4").slider({min: 0, max: 200, step: 1, value: 0, tooltip:'hide'});
$("#transport5").slider({min: 0, max: 100, step: 1, value: 0, tooltip:'hide'});
$("#transport6").slider({min: 0, max: 30, step: 1, value: 0, tooltip:'hide'});

var cloth1 = $("#cloth1").data("roundSlider")
var cloth2 = $("#cloth2").data("roundSlider")
var food1 = $("#food1").data("roundSlider")
var food2 = $("#food2").data("roundSlider")
var house1 = $("#house1")
var house2 = $("#house2")
var house3 = $("#house3")
var house4 = $("#house4")
var transport1 = $("#transport1")
var transport2 = $("#transport2")
var transport3 = $("#transport3")
var transport4 = $("#transport4")
var transport5 = $("#transport5")
var transport6 = $("#transport6")



/*calculate carbon number and tree number*/

var treeNumber = 0
var totalCarbon = 0

function slideChange () {
    totalCarbon= cloth1.getValue()*cloth1Ratio + cloth2.getValue()*cloth2Ratio + food1.getValue()*food1Ratio + food2.getValue()*food2Ratio + parseFloat(house1.attr( "value" ))*house1Ratio + parseFloat(house2.attr( "value" ))*house2Ratio + parseFloat(house3.attr( "value" ))*house3Ratio + parseFloat(house4.attr( "value" ))*house4Ratio + parseFloat(transport1.attr( "value" ))*transport1Ratio + parseFloat(transport2.attr( "value" ))*transport2Ratio + parseFloat(transport3.attr( "value" ))*transport3Ratio + parseFloat(transport4.attr( "value" ))*transport4Ratio + parseFloat(transport5.attr( "value" ))*transport5Ratio
    console.log(totalCarbon.toFixed(2))

    // $( "#totalCarbon" ).text(totalCarbon.toFixed(2))
    var $newHead = $("<span> 您本月的碳排放量为 <span id='totalCarbon'>" + totalCarbon.toFixed(2) + "</span> kg CO2e </span>")
    $('.screen .jumbotron #announce').html($newHead)

    treeNumber = (totalCarbon/19.16).toFixed(2)
}

var verticalChange = $('.verticleSlider').on('slide', function(){
    totalCarbon= cloth1.getValue()*cloth1Ratio + cloth2.getValue()*cloth2Ratio + food1.getValue()*food1Ratio + food2.getValue()*food2Ratio + parseFloat(house1.attr( "value" ))*house1Ratio + parseFloat(house2.attr( "value" ))*house2Ratio + parseFloat(house3.attr( "value" ))*house3Ratio + parseFloat(house4.attr( "value" ))*house4Ratio + parseFloat(transport1.attr( "value" ))*transport1Ratio + parseFloat(transport2.attr( "value" ))*transport2Ratio + parseFloat(transport3.attr( "value" ))*transport3Ratio + parseFloat(transport4.attr( "value" ))*transport4Ratio + parseFloat(transport5.attr( "value" ))*transport5Ratio
    var $newHead = $("<span> 您本月的碳排放量为 <span id='totalCarbon'>" + totalCarbon.toFixed(2) + "</span> kg CO2e </span>")
    $('.screen .jumbotron #announce').html($newHead)

    $( "#totalCarbon" ).text(totalCarbon.toFixed(2))
    $("#house1Value" ).text( $("#house1" ).attr( "value" ))
    $("#house2Value" ).text( $("#house2" ).attr( "value" ))
    $("#house3Value" ).text( $("#house3" ).attr( "value" ))
    $("#house4Value" ).text( $("#house4" ).attr( "value" ))
    $("#transport1Value" ).text( $("#transport1" ).attr( "value" ))
    $("#transport2Value" ).text( $("#transport2" ).attr( "value" ))
    $("#transport3Value" ).text( $("#transport3" ).attr( "value" ))
    $("#transport4Value" ).text( $("#transport4" ).attr( "value" ))
    $("#transport5Value" ).text( $("#transport5" ).attr( "value" ))
    $("#transport6Value" ).text( $("#transport6" ).attr( "value" ))

    treeNumber = (totalCarbon/19.16).toFixed(2)
})



/*add result page*/


$('#lightboxTrigger').click(function() {
    $('#lightbox').fadeIn(500);

    console.log(treeNumber)

    var $newimg
    for(var i=0;i<(parseInt(treeNumber)+1);i++) {
        $newimg = $('<div class="tree" />')
        $('#treeArea').append($newimg)
    }
    $('#treeArea div:last-child').css("opacity", (treeNumber-parseInt(treeNumber)))
    $('#treeNumber').text(treeNumber)
    if ((treeNumber > 18) && (treeNumber < 38)) {
        $('#treeArea div').addClass("narrow").removeClass("xnarrow")
    } else if (treeNumber >= 38){
        $('#treeArea div').removeClass("narrow").addClass("xnarrow")
    }
    $( "#totalCarbon2" ).text(totalCarbon.toFixed(2))
    $('.container').hide()
    // $("meta[property='og\\:description']").attr("content", treeNumber);
})

$('#close').click(function() {
    $('#lightbox').fadeOut(500)
    $('.container').show()
    $('#treeArea div').remove()
})
