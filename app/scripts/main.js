$("#cloth1").roundSlider({
    radius: 80,
    width: 5,
    handleSize: "+16",
    handleShape: "dot",
    sliderType: "min-range",
    value: 10,
    drag: "slideChange"
})

$("#cloth2").roundSlider({
    radius: 80,
    width: 5,
    handleSize: "+16",
    handleShape: "dot",
    sliderType: "min-range",
    value: 10,
    drag: "slideChange"
})

$("#food1").roundSlider({
    radius: 80,
    width: 5,
    handleSize: "+16",
    handleShape: "dot",
    sliderType: "min-range",
    value: 10,
    drag: "slideChange"
})

$("#food2").roundSlider({
    radius: 80,
    width: 5,
    handleSize: "+16",
    handleShape: "dot",
    sliderType: "min-range",
    value: 10,
    drag: "slideChange"
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
    console.log(cloth1.getValue(), cloth2.getValue(), food1.getValue(), food2.getValue())
	console.log(parseFloat(house1.attr( "value" )), parseFloat(house2.attr( "value" )), parseFloat(house2.attr( "value" )), parseFloat(house2.attr( "value" )))
}


var verticalChange = $('.verticleSlider').on('change', function(){
	console.log(cloth1.getValue(), cloth2.getValue(), food1.getValue(), food2.getValue())
	console.log(parseFloat(house1.attr( "value" )), parseFloat(house2.attr( "value" )), parseFloat(house2.attr( "value" )), parseFloat(house2.attr( "value" )))
})


$(".verticleSlider").slider({
	reversed : true
})

