function tooltipVal1(a){return+a.value+" 件"}function tooltipVal2(a){return+a.value+" 克"}function tooltipVal3(a){return+a.value+" 元"}function slideChange(){var a=4.2*cloth1.getValue()-2.1*cloth2.getValue()+.39*food1.getValue()+.45*food2.getValue()*.03+.57*parseFloat(house1.attr("value"))+.66*parseFloat(house2.attr("value"))+1.75*parseFloat(house3.attr("value"))+1.88*parseFloat(house4.attr("value"));console.log(a.toFixed(2)),$("#totalNumber").text(a.toFixed(2))}$("#cloth1").roundSlider({radius:80,width:5,handleSize:"+30",sliderType:"min-range",value:1,drag:"slideChange",max:10,tooltipFormat:"tooltipVal1"}),$("#cloth2").roundSlider({radius:80,width:5,handleSize:"+30",sliderType:"min-range",value:1,drag:"slideChange",max:10,tooltipFormat:"tooltipVal1"}),$("#food1").roundSlider({radius:80,width:5,handleSize:"+30",sliderType:"min-range",value:100,drag:"slideChange",max:1e3,tooltipFormat:"tooltipVal2"}),$("#food2").roundSlider({radius:80,width:5,handleSize:"+30",sliderType:"min-range",value:100,drag:"slideChange",max:1e3,tooltipFormat:"tooltipVal2"}),$("#transport").roundSlider({radius:80,width:5,handleSize:"+30",sliderType:"min-range",value:1,drag:"slideChange",max:10,tooltipFormat:"tooltipVal3"});var cloth1=$("#cloth1").data("roundSlider"),cloth2=$("#cloth2").data("roundSlider"),food1=$("#food1").data("roundSlider"),food2=$("#food2").data("roundSlider"),house1=$("#house1"),house2=$("#house2"),house3=$("#house3"),house4=$("#house4");$("#house1").slider({min:0,max:10,step:1,value:0,tooltip:"hide"}),$("#house2").slider({min:0,max:20,step:1,value:0,tooltip:"hide"}),$("#house3").slider({min:0,max:30,step:1,value:0,tooltip:"hide"}),$("#house4").slider({min:0,max:40,step:1,value:0,tooltip:"hide"});var verticalChange=$(".verticleSlider").on("change",function(){var a=4.2*cloth1.getValue()-2.1*cloth2.getValue()+.39*food1.getValue()+.45*food2.getValue()*.03+.57*parseFloat(house1.attr("value"))+.66*parseFloat(house2.attr("value"))+1.75*parseFloat(house3.attr("value"))+1.88*parseFloat(house4.attr("value"));console.log(a.toFixed(2)),$("#totalNumber").text(a.toFixed(2)),$("#house1Value").text($("#house1").attr("value")),$("#house2Value").text($("#house2").attr("value")),$("#house3Value").text($("#house3").attr("value")),$("#house4Value").text($("#house4").attr("value"))});$("#mtr").click(function(){$("#transport").roundSlider({value:10,max:100}),$("#selected").text("MTR")}),$("#taxi").click(function(){$("#transport").roundSlider({value:20,max:200}),$("#selected").text("的士")}),$("#bus").click(function(){$("#transport").roundSlider({value:30,max:300}),$("#selected").text("巴士")}),$("#car").click(function(){$("#transport").roundSlider({value:40,max:400}),$("#selected").text("汽車")}),$("#minibus").click(function(){$("#transport").roundSlider({value:50,max:500}),$("#selected").text("小巴")}),$("#bike").click(function(){$("#transport").roundSlider({value:60,max:600}),$("#selected").text("單車")});