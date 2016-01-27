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

// var coefficient = 0.5

// $(".dropdown-menu a").click(function() {
//     var transportId = "mtr"
//     var nameMapping = {
//         "mtr": "MTR",
//         "taxi": "的士",
//         "bus": "巴士",
//         "minibus": "小巴",
//         "car": "私家車",
//         "bike": "單車"
//     }
//     var noteMapping = {
//         "mtr": "所花費用",
//         "taxi": "所花費用",
//         "bus": "所花費用",
//         "minibus": "所花費用",
//         "car": "行駛距離",
//         "bike": "行駛距離"
//     }
//     $(".dropdown-menu a").each(function(idx, elem) {
//         $(elem).removeClass('selected')
//     })
//     $(this).addClass('selected')
//     transportId = $(this).attr("id")
//     $(":button").html(nameMapping[transportId] + " <span class='caret'></span>")
//     $("#transportnote").text(noteMapping[transportId])
// })

// $("#mtr").click(function(){
//     $("#transport").roundSlider({
//         value: 3,
//         max: 50
//     })
//     coefficient = 0.0114*30
// })

// $("#taxi").click(function(){
//     $("#transport").roundSlider({
//         value: 25,
//         max: 200
//     })
//     coefficient = 0.0414*30
// })

// $("#bus").click(function(){
//     $("#transport").roundSlider({
//         value: 5,
//         max: 50
//     })
//     coefficient = 0.0493*30
// })

// $("#car").click(function(){
//     $("#transport").roundSlider({
//         value: 2,
//         max: 40,
//     })
//     coefficient = 0.2119*30
// })

// $("#minibus").click(function(){
//     $("#transport").roundSlider({
//         value: 5,
//         max: 50,
//     })
//     coefficient = 0.094*30
// })

// $("#bike").click(function(){
//     $("#transport").roundSlider({
//         value: 60,
//         max: 600
//     })
//     coefficient = 0
// })

var treeNumber = 0

function slideChange () {
    var total= cloth1.getValue()*4.2/30 - cloth2.getValue()*2.1/30 + food1.getValue()*0.013 + food2.getValue()*0.45*0.001 + parseFloat(house1.attr( "value" ))*0.57 + parseFloat(house2.attr( "value" ))*0.66/30 + parseFloat(house3.attr( "value" ))*1.75/30 + parseFloat(house4.attr( "value" ))*1.88/30 + parseFloat(transport1.attr( "value" ))*0.0114/30 + parseFloat(transport2.attr( "value" ))*0.0493 + parseFloat(transport3.attr( "value" ))*0.0940 + parseFloat(transport4.attr( "value" ))*0.0414 + parseFloat(transport5.attr( "value" ))*0.2119
    console.log(total.toFixed(2))
    $( "#totalNumber" ).text(total.toFixed(2))

    treeNumber = (total/23).toFixed(2)
}

var verticalChange = $('.verticleSlider').on('slide', function(){
    var total= cloth1.getValue()*4.2/30 - cloth2.getValue()*2.1/30 + food1.getValue()*0.013 + food2.getValue()*0.45*0.001 + parseFloat(house1.attr( "value" ))*0.57 + parseFloat(house2.attr( "value" ))*0.66/30 + parseFloat(house3.attr( "value" ))*1.75/30 + parseFloat(house4.attr( "value" ))*1.88/30 + parseFloat(transport1.attr( "value" ))*0.0114/30 + parseFloat(transport2.attr( "value" ))*0.0493 + parseFloat(transport3.attr( "value" ))*0.0940 + parseFloat(transport4.attr( "value" ))*0.0414 + parseFloat(transport5.attr( "value" ))*0.2119
    console.log(total.toFixed(2))
    $( "#totalNumber" ).text(total.toFixed(2))
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

     treeNumber = (total/23).toFixed(2)
})

$('#lightboxTrigger').click(function() {
    $('#lightbox').fadeIn(500);

    console.log(treeNumber)


    var $newimg
    if (treeNumber > 19) {
        treeNumber = 18
    }
    for(var i=0;i<parseInt(treeNumber)+1;i++) {
        $newimg = $('<img class="tree" src="images/tree.svg" />')
        $('#treeArea').append($newimg)
    }
    $('#treeArea img:last-child').css("opacity", (treeNumber-parseInt(treeNumber)))
    $('#treeNumber').text(treeNumber)
})

$('#close').click(function() {
    $('#lightbox').fadeOut(500)
    $('#treeArea img').remove()
})

// $(".dropdown-menu").on('click', 'li a', function(){
//       $(".btn:first-child").text($(this).text());
//       $(".btn:first-child").val($(this).text());
//    });

// $(".verticleSlider").slider({
// 	formatter: function(value) {
// 		return 'Current value: ' + value;
// 	}
// });