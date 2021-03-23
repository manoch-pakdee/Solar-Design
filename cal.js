
$(document).ready(function(){
    $("#newrows").click(function(){
        var addcontrol="<tr>"
            addcontrol          +="<td><input type='text' name='โหลด' ></td>"
            addcontrol          +="<td><input type='text' name='w' ></td>"
            addcontrol          +="<td><input type='text' name='จำนวน' ></td>"
            addcontrol          +="<td><input type='text' name='ชม' ></td>"
            addcontrol          +="</tr>"
                  $("table ").append(addcontrol);
               
     let a  =Number(document.querySelector("#addcontrol").value);
     console.log(a)
    });
  
});
function calc()
{   
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    let num3 = Number(document.querySelector("#num3").value);
    let num4 = Number(document.querySelector("#num4").value);
    let num5 = Number(document.querySelector("#num5").value);
    let num6 = Number(document.querySelector("#num6").value);
    let num7 = Number(document.querySelector("#num7").value);
    let num8 = Number(document.querySelector("#num8").value);
    let num9 = Number(document.querySelector("#num9").value);
    let num10 = Number(document.querySelector("#num10").value);
    let num11 = Number(document.querySelector("#num11").value);
    let num12 = Number(document.querySelector("#num12").value);
    let num13 = Number(document.querySelector("#num13").value);
    let num14 = Number(document.querySelector("#num14").value);
    let num15 = Number(document.querySelector("#num15").value);
    console.log(num1)
    let aircon = Number(document.querySelector("#aircon").value);
    let airhr = Number(document.querySelector("#airhr").value);
    let light = Number(document.querySelector("#light").value);
    let lighthr = Number(document.querySelector("#lighthr").value);
    let lef = Number(document.querySelector("#lef").value);
    let lefhr = Number(document.querySelector("#lefhr").value);  
    let microwave = Number(document.querySelector("#microwave").value);
    let microwavehr = Number(document.querySelector("#microwavehr").value);   
    let kettle = Number(document.querySelector("#kettle").value);
    let kettlehr = Number(document.querySelector("#kettlehr").value);
    let iron = Number(document.querySelector("#iron").value);
    let ironhr = Number(document.querySelector("#ironhr").value);
    let tele = Number(document.querySelector("#tele").value);
    let telehr = Number(document.querySelector("#telehr").value);
    let receiver =Number(document.querySelector("#receiver").value);
     let receiverhr = Number(document.querySelector("#receiverhr").value);
     let dvd =Number(document.querySelector("#dvd").value);
     let dvdhr = Number(document.querySelector("#dvdhr").value);
     let dai =Number(document.querySelector("#dai").value);
     let daihr = Number(document.querySelector("#daihr").value);
     let fan =Number(document.querySelector("#fan").value);
     let fanhr = Number(document.querySelector("#fanhr").value);
     let computer =Number(document.querySelector("#computer").value);
     let computerhr = Number(document.querySelector("#computerhr").value);
     let heater =Number(document.querySelector("#heater").value);
     let heaterhr = Number(document.querySelector("#heaterhr").value);
     let washing =Number(document.querySelector("#washing").value);
     let washinghr = Number(document.querySelector("#washinghr").value);
     let rice =Number(document.querySelector("#rice").value);
     let ricehr = Number(document.querySelector("#ricehr").value);
     let total = [((((num1*aircon*airhr)+(num2*light*lighthr)+(num3*lef*lefhr)+(num4*microwave*microwavehr)+(num5*kettle*kettlehr)
        +(num6*iron*ironhr)+(num7*tele*telehr)+(num8*receiver*receiverhr)+(num9*dvd*dvdhr)+(num10*dai*daihr)+(num11*fan*fanhr)
    +(num12*computer*computerhr)+(num13*heater*heaterhr)+(num14*washing*washinghr)+(num15*rice*ricehr))/1000)/4.8).toFixed(2)];
     document.getElementById("sum").value = total;
     // var intairconn = parseInt(num3);
     console.log("value of  is rice" + total[0]+" and "+total[1]);


}
function saveMy() {
    var getInput = parseFloat(document.getElementById("sum").value);
    // var getInput = {
    //     localSum: document.getElementById("sum").value
    // }

    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    let num3 = Number(document.querySelector("#num3").value);
    let num4 = Number(document.querySelector("#num4").value);
    let num5 = Number(document.querySelector("#num5").value);
    let num6 = Number(document.querySelector("#num6").value);
    let num7 = Number(document.querySelector("#num7").value);
    let num8 = Number(document.querySelector("#num8").value);
    let num9 = Number(document.querySelector("#num9").value);
    let num10 = Number(document.querySelector("#num10").value);
    let num11 = Number(document.querySelector("#num11").value);
    let num12 = Number(document.querySelector("#num12").value);
    let num13 = Number(document.querySelector("#num13").value);
    let num14 = Number(document.querySelector("#num14").value);
    let num15 = Number(document.querySelector("#num15").value);
    console.log(num1)
    let aircon = Number(document.querySelector("#aircon").value);
    let airhr = Number(document.querySelector("#airhr").value);
    let light = Number(document.querySelector("#light").value);
    let lighthr = Number(document.querySelector("#lighthr").value);
    let lef = Number(document.querySelector("#lef").value);
    let lefhr = Number(document.querySelector("#lefhr").value);  
    let microwave = Number(document.querySelector("#microwave").value);
    let microwavehr = Number(document.querySelector("#microwavehr").value);   
    let kettle = Number(document.querySelector("#kettle").value);
    let kettlehr = Number(document.querySelector("#kettlehr").value);
    let iron = Number(document.querySelector("#iron").value);
    let ironhr = Number(document.querySelector("#ironhr").value);
    let tele = Number(document.querySelector("#tele").value);
    let telehr = Number(document.querySelector("#telehr").value);
    let receiver =Number(document.querySelector("#receiver").value);
     let receiverhr = Number(document.querySelector("#receiverhr").value);
     let dvd =Number(document.querySelector("#dvd").value);
     let dvdhr = Number(document.querySelector("#dvdhr").value);
     let dai =Number(document.querySelector("#dai").value);
     let daihr = Number(document.querySelector("#daihr").value);
     let fan =Number(document.querySelector("#fan").value);
     let fanhr = Number(document.querySelector("#fanhr").value);
     let computer =Number(document.querySelector("#computer").value);
     let computerhr = Number(document.querySelector("#computerhr").value);
     let heater =Number(document.querySelector("#heater").value);
     let heaterhr = Number(document.querySelector("#heaterhr").value);
     let washing =Number(document.querySelector("#washing").value);
     let washinghr = Number(document.querySelector("#washinghr").value);
     let rice =Number(document.querySelector("#rice").value);
     let ricehr = Number(document.querySelector("#ricehr").value);
     let total = [((((num1*aircon*airhr)+(num2*light*lighthr)+(num3*lef*lefhr)+(num4*microwave*microwavehr)+(num5*kettle*kettlehr)
        +(num6*iron*ironhr)+(num7*tele*telehr)+(num8*receiver*receiverhr)+(num9*dvd*dvdhr)+(num10*dai*daihr)+(num11*fan*fanhr)
    +(num12*computer*computerhr)+(num13*heater*heaterhr)+(num14*washing*washinghr)+(num15*rice*ricehr))/1000)/4.8).toFixed(2)];
     document.getElementById("sum").value = total;

    useTotal = document.getElementById("sum").value;
    localStorage.setItem('totalStorage', JSON.stringify(getInput));
}

   