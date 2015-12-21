$("#cloth1").roundSlider({
    radius: 80,
    width: 5,
    handleSize: "+30",
    sliderType: "min-range",
    value: 1,
    drag: "slideChange",
    max: 10,
    tooltipFormat: "tooltipVal1"
})

$("#cloth2").roundSlider({
    radius: 80,
    width: 5,
    handleSize: "+30",
    sliderType: "min-range",
    value: 1,
    drag: "slideChange",
    max: 10,
    tooltipFormat: "tooltipVal1"
})

function tooltipVal1(args) {
    return + args.value + " 件";
}

$("#food1").roundSlider({
    radius: 80,
    width: 5,
    handleSize: "+30",
    sliderType: "min-range",
    value: 100,
    drag: "slideChange",
    max: 1000,
    tooltipFormat: "tooltipVal2"
})

$("#food2").roundSlider({
    radius: 80,
    width: 5,
    handleSize: "+30",
    sliderType: "min-range",
    value: 100,
    drag: "slideChange",
    max: 1000,
    tooltipFormat: "tooltipVal2"
})

function tooltipVal2(args) {
    return + args.value + " 克";
}

$("#transport").roundSlider({
    radius: 80,
    width: 5,
    handleSize: "+30",
    sliderType: "min-range",
    value: 1,
    drag: "slideChange",
    max: 10,
    tooltipFormat: "tooltipVal2"
})

var cloth1 = $("#cloth1").data("roundSlider")
var cloth2 = $("#cloth2").data("roundSlider")
var food1 = $("#food1").data("roundSlider")
var food2 = $("#food2").data("roundSlider")
var house1 = $("#house1")
var house2 = $("#house2")
var house3 = $("#house3")
var house4 = $("#house4")


function slideChange () {
	var total= cloth1.getValue()*4.2 - cloth2.getValue()*2.1 + food1.getValue()*0.39 + food2.getValue()*0.45*0.03 + parseFloat(house1.attr( "value" ))*0.57 + parseFloat(house2.attr( "value" ))*0.66 + parseFloat(house3.attr( "value" ))*1.75 + parseFloat(house4.attr( "value" ))*1.88
    console.log(total.toFixed(2))
    $( "#totalNumber" ).text(total.toFixed(2))
}

$("#house1").slider({min: 0, max: 10, step: 1, value: 0, tooltip:'hide'});
$("#house2").slider({min: 0, max: 20, step: 1, value: 0, tooltip:'hide'});
$("#house3").slider({min: 0, max: 30, step: 1, value: 0, tooltip:'hide'});
$("#house4").slider({min: 0, max: 40, step: 1, value: 0, tooltip:'hide'});

var verticalChange = $('.verticleSlider').on('change', function(){
	var total= cloth1.getValue()*4.2 - cloth2.getValue()*2.1 + food1.getValue()*0.39 + food2.getValue()*0.45*0.03 + parseFloat(house1.attr( "value" ))*0.57 + parseFloat(house2.attr( "value" ))*0.66 + parseFloat(house3.attr( "value" ))*1.75 + parseFloat(house4.attr( "value" ))*1.88
    console.log(total.toFixed(2))
    $( "#totalNumber" ).text(total.toFixed(2))
    $("#house1Value" ).text( $("#house1" ).attr( "value" ))
    $("#house2Value" ).text( $("#house2" ).attr( "value" ))
    $("#house3Value" ).text( $("#house3" ).attr( "value" ))
    $("#house4Value" ).text( $("#house4" ).attr( "value" ))

})

$("#mtr").click(function(){
    $("#transport").roundSlider({
        value: 10,
        max: 100
    })
})

$("#taxi").click(function(){
    $("#transport").roundSlider({
        value: 20,
        max: 200})
})

$("#bus").click(function(){
    $("#transport").roundSlider({
        value: 30,
        max: 300})
})

$("#car").click(function(){
    $("#transport").roundSlider({
        value: 40,
        max: 400})
})

$("#minibus").click(function(){
    $("#transport").roundSlider({
        value: 50,
        max: 500})
})

$("#bike").click(function(){
    $("#transport").roundSlider({
        value: 60,
        max: 600})
})

// $(".verticleSlider").slider({
// 	formatter: function(value) {
// 		return 'Current value: ' + value;
// 	}
// });